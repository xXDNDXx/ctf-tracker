/**
 * ZEROBOX - Machine Writeup PDF Storage & Blob Manager
 * Stores writeup PDFs in IndexedDB to avoid localStorage quota exhaustion.
 * Provides batch matching for HTB writeup PDFs and Blob URL lifecycle management.
 */

import { useState, useEffect } from 'react';
import { Machine } from '../types';

export const PDF_STORAGE_EVENT = 'zerobox-pdf-storage-changed';

const pdfBroadcastChannel = typeof BroadcastChannel !== 'undefined' ? new BroadcastChannel('zerobox-pdf-sync') : null;

if (pdfBroadcastChannel) {
  pdfBroadcastChannel.onmessage = () => {
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent(PDF_STORAGE_EVENT));
    }
  };
}

export function dispatchPdfStorageChanged() {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent(PDF_STORAGE_EVENT));
    try {
      pdfBroadcastChannel?.postMessage('changed');
    } catch {}
  }
}

const DB_NAME = 'zerobox_machine_pdfs_db';
const DB_VERSION = 1;
const STORE_NAME = 'machine_pdfs';

export interface StoredPdfMetadata {
  machineId: string;
  filename: string;
  size: number;
  type: string;
  updatedAt: string;
}

export interface StoredPdfRecord extends StoredPdfMetadata {
  blob: Blob;
}

// In-memory Blob URL cache: machineId -> { url: string, lastUsed: number }
const pdfUrlCache = new Map<string, { url: string; lastUsed: number }>();

function openPdfDatabase(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    if (typeof indexedDB === 'undefined') {
      reject(new Error('IndexedDB is not supported in this environment'));
      return;
    }
    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: 'machineId' });
      }
    };

    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error || new Error('Failed to open PDF Storage DB'));
  });
}

/**
 * Saves a machine's writeup PDF into IndexedDB
 */
export async function saveMachinePdf(machineId: string, file: File | Blob, filename: string): Promise<void> {
  if (!machineId) throw new Error('Machine ID is required');
  const db = await openPdfDatabase();

  // Revoke existing in-memory cached URL if present
  const existing = pdfUrlCache.get(machineId);
  if (existing) {
    try {
      URL.revokeObjectURL(existing.url);
    } catch {}
    pdfUrlCache.delete(machineId);
  }

  return new Promise((resolve, reject) => {
    try {
      const tx = db.transaction(STORE_NAME, 'readwrite');
      const store = tx.objectStore(STORE_NAME);

      const record: StoredPdfRecord = {
        machineId,
        filename: filename || `${machineId}-writeup.pdf`,
        size: file.size,
        type: file.type || 'application/pdf',
        updatedAt: new Date().toISOString(),
        blob: file,
      };

      const req = store.put(record);
      req.onsuccess = () => {
        dispatchPdfStorageChanged();
        resolve();
      };
      req.onerror = () => reject(req.error || new Error('Failed to save writeup PDF'));
      tx.oncomplete = () => db.close();
    } catch (err) {
      db.close();
      reject(err);
    }
  });
}

/**
 * Retrieves a machine's writeup PDF record from IndexedDB
 */
export async function getMachinePdf(machineId: string): Promise<StoredPdfRecord | null> {
  if (!machineId) return null;
  try {
    const db = await openPdfDatabase();
    return new Promise((resolve, reject) => {
      try {
        const tx = db.transaction(STORE_NAME, 'readonly');
        const store = tx.objectStore(STORE_NAME);
        const req = store.get(machineId);

        req.onsuccess = () => {
          resolve((req.result as StoredPdfRecord) || null);
        };
        req.onerror = () => reject(req.error || new Error('Failed to load PDF'));
        tx.oncomplete = () => db.close();
      } catch (err) {
        db.close();
        reject(err);
      }
    });
  } catch (err) {
    console.warn('[PdfStorage] Error getting machine PDF:', machineId, err);
    return null;
  }
}

/**
 * Deletes a machine's writeup PDF from IndexedDB
 */
export async function deleteMachinePdf(machineId: string): Promise<void> {
  if (!machineId) return;
  const existing = pdfUrlCache.get(machineId);
  if (existing) {
    try {
      URL.revokeObjectURL(existing.url);
    } catch {}
    pdfUrlCache.delete(machineId);
  }

  try {
    const db = await openPdfDatabase();
    return new Promise((resolve, reject) => {
      try {
        const tx = db.transaction(STORE_NAME, 'readwrite');
        const store = tx.objectStore(STORE_NAME);
        const req = store.delete(machineId);

        req.onsuccess = () => {
          dispatchPdfStorageChanged();
          resolve();
        };
        req.onerror = () => reject(req.error || new Error('Failed to delete PDF'));
        tx.oncomplete = () => db.close();
      } catch (err) {
        db.close();
        reject(err);
      }
    });
  } catch (err) {
    console.warn('[PdfStorage] Error deleting machine PDF:', machineId, err);
  }
}

/**
 * Resolves a blob URL for in-browser PDF viewing
 */
export async function resolvePdfUrl(machineId: string): Promise<string | null> {
  const cached = pdfUrlCache.get(machineId);
  if (cached) {
    cached.lastUsed = Date.now();
    return cached.url;
  }

  const record = await getMachinePdf(machineId);
  if (!record || !record.blob) return null;

  const url = URL.createObjectURL(record.blob);
  pdfUrlCache.set(machineId, { url, lastUsed: Date.now() });
  return url;
}

/**
 * Lists all machine IDs that have a writeup PDF stored in IndexedDB
 */
export async function getAllStoredPdfIds(): Promise<Set<string>> {
  const idSet = new Set<string>();
  try {
    const db = await openPdfDatabase();
    return new Promise((resolve, reject) => {
      try {
        const tx = db.transaction(STORE_NAME, 'readonly');
        const store = tx.objectStore(STORE_NAME);
        const req = store.openKeyCursor();

        req.onsuccess = () => {
          const cursor = req.result;
          if (cursor) {
            idSet.add(cursor.key as string);
            cursor.continue();
          } else {
            resolve(idSet);
          }
        };
        req.onerror = () => reject(req.error || new Error('Failed to list stored PDFs'));
        tx.oncomplete = () => db.close();
      } catch (err) {
        db.close();
        reject(err);
      }
    });
  } catch (err) {
    console.warn('[PdfStorage] Error fetching stored PDF IDs:', err);
    return idSet;
  }
}

/**
 * Batch match and import multiple PDF files against the machine catalog.
 * Matches by:
 * 1. Exact catalog machine.officialPdf filename
 * 2. Exact machine ID (e.g. htb-blackfield.pdf)
 * 3. Machine name in filename (e.g. 255-Blackfield.pdf or Blackfield_writeup.pdf)
 */
export async function batchMatchAndStorePdfs(
  files: File[],
  machines: Machine[]
): Promise<{
  matchedCount: number;
  matchedMachines: { id: string; name: string; filename: string }[];
  unmatchedFiles: string[];
}> {
  // Build lookup indexes
  const officialPdfMap = new Map<string, Machine>();
  const idMap = new Map<string, Machine>();
  const nameMap = new Map<string, Machine>();

  machines.forEach((m) => {
    if (m.officialPdf) {
      officialPdfMap.set(m.officialPdf.toLowerCase().trim(), m);
    }
    if (m.id) {
      idMap.set(m.id.toLowerCase().trim(), m);
    }
    if (m.name) {
      nameMap.set(m.name.toLowerCase().trim(), m);
    }
  });

  const matchedMachines: { id: string; name: string; filename: string }[] = [];
  const unmatchedFiles: string[] = [];

  for (const file of files) {
    if (!file.name.toLowerCase().endsWith('.pdf')) {
      unmatchedFiles.push(file.name);
      continue;
    }

    const cleanName = file.name.toLowerCase().trim();
    let targetMachine: Machine | undefined;

    // 1. Direct officialPdf filename match
    if (officialPdfMap.has(cleanName)) {
      targetMachine = officialPdfMap.get(cleanName);
    }

    // 2. Machine ID match (strip .pdf)
    if (!targetMachine) {
      const baseNameWithoutExt = cleanName.replace(/\.pdf$/, '');
      if (idMap.has(baseNameWithoutExt)) {
        targetMachine = idMap.get(baseNameWithoutExt);
      }
    }

    // 3. Name substring match
    if (!targetMachine) {
      for (const [nameKey, m] of nameMap.entries()) {
        if (nameKey.length >= 3) {
          const regex = new RegExp(`(^|[_-])${nameKey}([_-]|$)`, 'i');
          if (regex.test(cleanName) || cleanName.includes(nameKey)) {
            targetMachine = m;
            break;
          }
        }
      }
    }

    if (targetMachine) {
      await saveMachinePdf(targetMachine.id, file, file.name);
      matchedMachines.push({
        id: targetMachine.id,
        name: targetMachine.name,
        filename: file.name,
      });
    } else {
      unmatchedFiles.push(file.name);
    }
  }

  return {
    matchedCount: matchedMachines.length,
    matchedMachines,
    unmatchedFiles,
  };
}
