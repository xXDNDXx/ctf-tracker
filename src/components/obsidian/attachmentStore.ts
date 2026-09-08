/**
 * Attachment Storage & Blob URL LRU Cache for Obsidian Vault
 * Persists raw binary blobs in a dedicated IndexedDB store (zerobox_vault_attachments)
 * Manages in-memory Blob URLs with an LRU cache and explicit URL.revokeObjectURL() cleanup.
 */

const DB_NAME = 'zerobox_vault_attachments_db';
const DB_VERSION = 1;
const STORE_NAME = 'attachments';
const MAX_LRU_ENTRIES = 60;

// In-memory LRU cache: path -> { url, lastUsed }
const blobUrlCache = new Map<string, { url: string; lastUsed: number }>();

function openAttachmentDatabase(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    if (typeof indexedDB === 'undefined') {
      reject(new Error('IndexedDB is not supported in this environment'));
      return;
    }
    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME);
      }
    };

    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error || new Error('Failed to open Attachments DB'));
  });
}

function normalizePath(rawPath: string): string {
  return rawPath.replace(/\\/g, '/').toLowerCase().trim();
}

/**
 * Saves a single attachment blob into IndexedDB
 */
export async function saveAttachment(path: string, blob: Blob): Promise<void> {
  const db = await openAttachmentDatabase();
  return new Promise((resolve, reject) => {
    try {
      const tx = db.transaction(STORE_NAME, 'readwrite');
      const store = tx.objectStore(STORE_NAME);
      const key = normalizePath(path);
      const req = store.put(blob, key);

      req.onsuccess = () => resolve();
      req.onerror = () => reject(req.error || new Error('Failed to save attachment'));
      tx.oncomplete = () => db.close();
    } catch (err) {
      db.close();
      reject(err);
    }
  });
}

/**
 * Saves a batch of attachment blobs into IndexedDB in a single transaction
 */
export async function saveAttachmentsBatch(items: { path: string; blob: Blob }[]): Promise<void> {
  if (items.length === 0) return;
  const db = await openAttachmentDatabase();
  return new Promise((resolve, reject) => {
    try {
      const tx = db.transaction(STORE_NAME, 'readwrite');
      const store = tx.objectStore(STORE_NAME);

      for (const item of items) {
        store.put(item.blob, normalizePath(item.path));
      }

      tx.oncomplete = () => {
        db.close();
        resolve();
      };
      tx.onerror = () => {
        db.close();
        reject(tx.error || new Error('Batch attachment save failed'));
      };
    } catch (err) {
      db.close();
      reject(err);
    }
  });
}

/**
 * Retrieves raw blob from IndexedDB for a given attachment path
 */
export async function getAttachmentBlob(path: string): Promise<Blob | null> {
  try {
    const db = await openAttachmentDatabase();
    return new Promise((resolve, reject) => {
      try {
        const tx = db.transaction(STORE_NAME, 'readonly');
        const store = tx.objectStore(STORE_NAME);
        const key = normalizePath(path);
        const req = store.get(key);

        req.onsuccess = () => {
          resolve((req.result as Blob) || null);
        };
        req.onerror = () => reject(req.error || new Error('Failed to get attachment'));
        tx.oncomplete = () => db.close();
      } catch (err) {
        db.close();
        reject(err);
      }
    });
  } catch (err) {
    console.warn('[AttachmentStore] Failed to retrieve blob for', path, err);
    return null;
  }
}

/**
 * Evicts oldest Blob URL from memory if cache size exceeds limit
 */
function evictOldestBlobUrlIfNeeded(): void {
  if (blobUrlCache.size < MAX_LRU_ENTRIES) return;

  let oldestKey: string | null = null;
  let oldestTime = Infinity;

  for (const [key, entry] of blobUrlCache.entries()) {
    if (entry.lastUsed < oldestTime) {
      oldestTime = entry.lastUsed;
      oldestKey = key;
    }
  }

  if (oldestKey) {
    const entry = blobUrlCache.get(oldestKey);
    if (entry) {
      try {
        URL.revokeObjectURL(entry.url);
      } catch {}
      blobUrlCache.delete(oldestKey);
    }
  }
}

/**
 * Resolves an attachment path to an in-memory Blob URL.
 * Checks LRU cache first; loads from IndexedDB if not cached.
 */
export async function resolveAttachmentUrl(path: string): Promise<string | null> {
  const norm = normalizePath(path);
  const cached = blobUrlCache.get(norm);
  if (cached) {
    cached.lastUsed = Date.now();
    return cached.url;
  }

  const blob = await getAttachmentBlob(norm);
  if (!blob) {
    // Try filename lookup fallback if full path wasn't matched
    const fileName = norm.split('/').pop();
    if (fileName && fileName !== norm) {
      const fallbackBlob = await getAttachmentBlob(fileName);
      if (fallbackBlob) {
        evictOldestBlobUrlIfNeeded();
        const url = URL.createObjectURL(fallbackBlob);
        blobUrlCache.set(norm, { url, lastUsed: Date.now() });
        return url;
      }
    }
    return null;
  }

  evictOldestBlobUrlIfNeeded();
  const url = URL.createObjectURL(blob);
  blobUrlCache.set(norm, { url, lastUsed: Date.now() });
  return url;
}

/**
 * Clears all cached Blob URLs and wipes the IndexedDB attachments store
 */
export async function clearAttachments(): Promise<void> {
  // Revoke all in-memory Blob URLs
  for (const entry of blobUrlCache.values()) {
    try {
      URL.revokeObjectURL(entry.url);
    } catch {}
  }
  blobUrlCache.clear();

  try {
    const db = await openAttachmentDatabase();
    return new Promise((resolve, reject) => {
      try {
        const tx = db.transaction(STORE_NAME, 'readwrite');
        const store = tx.objectStore(STORE_NAME);
        const req = store.clear();

        req.onsuccess = () => resolve();
        req.onerror = () => reject(req.error || new Error('Failed to clear attachments'));
        tx.oncomplete = () => db.close();
      } catch (err) {
        db.close();
        reject(err);
      }
    });
  } catch (err) {
    console.warn('[AttachmentStore] Could not clear IndexedDB attachments', err);
  }
}

/**
 * Returns total number of stored attachments
 */
export async function getAttachmentCount(): Promise<number> {
  try {
    const db = await openAttachmentDatabase();
    return new Promise((resolve, reject) => {
      try {
        const tx = db.transaction(STORE_NAME, 'readonly');
        const store = tx.objectStore(STORE_NAME);
        const req = store.count();

        req.onsuccess = () => resolve(req.result || 0);
        req.onerror = () => reject(req.error || new Error('Failed to count attachments'));
        tx.oncomplete = () => db.close();
      } catch (err) {
        db.close();
        reject(err);
      }
    });
  } catch {
    return 0;
  }
}
