import { useState, useCallback } from 'react';
import JSZip from 'jszip';
import { 
  VaultTree, 
  FileNode, 
  FileNodeType, 
  VaultImportProgress, 
  VaultImportResult 
} from './types';
import { saveAttachmentsBatch, clearAttachments } from './attachmentStore';
import { saveVaultToIndexedDb } from '../../utils/indexedDbVault';
import { useCtfStore } from '../../store/useCtfStore';
import { isSafeRelativePath } from '../../utils/securityUtils';

const MAX_ZIP_ENTRIES = 2500;
const MAX_SINGLE_FILE_BYTES = 5 * 1024 * 1024; // 5MB per note file
const MAX_CUMULATIVE_BYTES = 50 * 1024 * 1024; // 50MB total extracted notes

// Module-scoped natural comparator for sorting tree nodes
const naturalSorter = new Intl.Collator(undefined, { numeric: true, sensitivity: 'base' });

const IMAGE_EXTS = new Set(['png', 'jpg', 'jpeg', 'gif', 'svg', 'webp', 'bmp']);

function getFileType(fileName: string): FileNodeType {
  const lower = fileName.toLowerCase();
  if (lower.endsWith('.canvas')) return 'canvas';
  if (lower.endsWith('.excalidraw') || lower.endsWith('.excalidraw.md')) return 'excalidraw';
  const ext = lower.split('.').pop() || '';
  if (IMAGE_EXTS.has(ext)) return 'image';
  if (lower.endsWith('.md') || lower.endsWith('.markdown')) return 'file';
  return 'attachment';
}

/**
 * Builds a nested VaultTree from an array of flat file items with natural alphanumeric sorting
 */
export function buildVaultTree(
  files: { path: string; size: number; mtime?: string; noteId?: string }[]
): VaultTree {
  const roots: FileNode[] = [];
  const nodeMap: Record<string, FileNode> = {};
  const folderMap = new Map<string, FileNode>();

  // Ensure directories exist
  const getOrCreateFolder = (dirPath: string): FileNode => {
    const norm = dirPath.replace(/\\/g, '/').replace(/^\/+|\/+$/g, '');
    if (folderMap.has(norm)) return folderMap.get(norm)!;

    const segments = norm.split('/');
    const folderName = segments[segments.length - 1];
    const parentPath = segments.slice(0, -1).join('/');

    const folderNode: FileNode = {
      id: `folder-${norm}`,
      name: folderName,
      path: norm,
      type: 'folder',
      size: 0,
      children: [],
    };

    folderMap.set(norm, folderNode);
    nodeMap[norm] = folderNode;

    if (parentPath) {
      const parent = getOrCreateFolder(parentPath);
      parent.children = parent.children || [];
      parent.children.push(folderNode);
    } else {
      roots.push(folderNode);
    }

    return folderNode;
  };

  // Add files into tree
  for (const f of files) {
    const norm = f.path.replace(/\\/g, '/').replace(/^\/+/, '');
    const segments = norm.split('/');
    const fileName = segments[segments.length - 1];
    const parentPath = segments.slice(0, -1).join('/');
    const fileType = getFileType(fileName);

    const fileNode: FileNode = {
      id: `file-${norm}`,
      name: fileName,
      path: norm,
      type: fileType,
      size: f.size,
      mtime: f.mtime,
      noteId: f.noteId,
      extension: fileName.split('.').pop(),
    };

    nodeMap[norm] = fileNode;

    if (parentPath) {
      const parent = getOrCreateFolder(parentPath);
      parent.children = parent.children || [];
      parent.children.push(fileNode);
    } else {
      roots.push(fileNode);
    }
  }

  // Naturally sort all folder children recursively
  const sortChildren = (nodes: FileNode[]) => {
    nodes.sort((a, b) => {
      if (a.type === 'folder' && b.type !== 'folder') return -1;
      if (a.type !== 'folder' && b.type === 'folder') return 1;
      return naturalSorter.compare(a.name, b.name);
    });
    for (const n of nodes) {
      if (n.children && n.children.length > 0) {
        sortChildren(n.children);
      }
    }
  };

  sortChildren(roots);

  return { roots, nodeMap, wikilinkMap: {} };
}

/**
 * React hook for vault ingestion with dual Folder/ZIP engines and IndexedDB persistence
 */
export function useVaultImporter() {
  const [isImporting, setIsImporting] = useState(false);
  const [progress, setProgress] = useState<VaultImportProgress | null>(null);
  const [error, setError] = useState<string | null>(null);

  const setUserNotes = useCtfStore((s) => s.setUserNotes);
  const setUserWikilinkMap = useCtfStore((s) => s.setUserWikilinkMap);

  /**
   * Import vault from a ZIP archive
   */
  const importZip = useCallback(
    async (file: File | Blob): Promise<VaultImportResult> => {
      setIsImporting(true);
      setError(null);
      setProgress({
        phase: 'unzipping',
        current: 0,
        total: 1,
        currentFile: 'Unpacking ZIP archive...',
      });

      try {
        const zip = await JSZip.loadAsync(file);
        const entries = Object.values(zip.files);
        const total = entries.length;

        if (entries.length > MAX_ZIP_ENTRIES) {
          throw new Error(`ZIP Archive rejected: Exceeded maximum allowed entry count (${MAX_ZIP_ENTRIES} files).`);
        }

        const markdownItems: { path: string; text: string; size: number }[] = [];
        const attachmentItems: { path: string; blob: Blob }[] = [];
        const canvasItems: { path: string; text: string }[] = [];
        const excalidrawItems: { path: string; text: string }[] = [];

        let currentIdx = 0;
        let cumulativeBytesBudget = 0;

        for (const entry of entries) {
          currentIdx++;
          if (entry.dir) continue;

          // Reject directory traversal attempts (Zip Slip defense)
          if (!isSafeRelativePath(entry.name)) {
            console.warn(`[Security] Blocked unsafe relative path in zip: ${entry.name}`);
            continue;
          }

          const lower = entry.name.toLowerCase();

          // Skip system/internal folders
          if (
            lower.includes('.obsidian/') ||
            lower.includes('.git/') ||
            lower.includes('.trash/') ||
            lower.includes('__macosx/') ||
            lower.startsWith('.')
          ) {
            continue;
          }

          setProgress({
            phase: 'scanning',
            current: currentIdx,
            total,
            currentFile: entry.name,
          });

          if (lower.endsWith('.md') || lower.endsWith('.markdown')) {
            if (lower.endsWith('.excalidraw.md')) {
              const text = await entry.async('text');
              if (text.length > MAX_SINGLE_FILE_BYTES) {
                throw new Error(`File rejected: "${entry.name}" exceeds maximum safe markdown file size (5MB).`);
              }
              cumulativeBytesBudget += text.length;
              if (cumulativeBytesBudget > MAX_CUMULATIVE_BYTES) {
                throw new Error(`ZIP Archive rejected: Exceeded cumulative uncompressed size limit (50MB).`);
              }
              excalidrawItems.push({ path: entry.name, text });
            } else {
              const text = await entry.async('text');
              if (text.length > MAX_SINGLE_FILE_BYTES) {
                throw new Error(`File rejected: "${entry.name}" exceeds maximum safe markdown file size (5MB).`);
              }
              cumulativeBytesBudget += text.length;
              if (cumulativeBytesBudget > MAX_CUMULATIVE_BYTES) {
                throw new Error(`ZIP Archive rejected: Exceeded cumulative uncompressed size limit (50MB).`);
              }
              markdownItems.push({ path: entry.name, text, size: text.length });
            }
          } else if (lower.endsWith('.canvas')) {
            const text = await entry.async('text');
            if (text.length > MAX_SINGLE_FILE_BYTES) {
              throw new Error(`File rejected: "${entry.name}" exceeds maximum safe file size (5MB).`);
            }
            cumulativeBytesBudget += text.length;
            if (cumulativeBytesBudget > MAX_CUMULATIVE_BYTES) {
              throw new Error(`ZIP Archive rejected: Exceeded cumulative uncompressed size limit (50MB).`);
            }
            canvasItems.push({ path: entry.name, text });
          } else if (lower.endsWith('.excalidraw')) {
            const text = await entry.async('text');
            if (text.length > MAX_SINGLE_FILE_BYTES) {
              throw new Error(`File rejected: "${entry.name}" exceeds maximum safe file size (5MB).`);
            }
            cumulativeBytesBudget += text.length;
            if (cumulativeBytesBudget > MAX_CUMULATIVE_BYTES) {
              throw new Error(`ZIP Archive rejected: Exceeded cumulative uncompressed size limit (50MB).`);
            }
            excalidrawItems.push({ path: entry.name, text });
          } else {
            const ext = lower.split('.').pop() || '';
            if (IMAGE_EXTS.has(ext)) {
              const blob = await entry.async('blob');
              if (blob.size > MAX_SINGLE_FILE_BYTES * 2) {
                console.warn(`[Security] Skipped image "${entry.name}" exceeding 10MB.`);
                continue;
              }
              cumulativeBytesBudget += blob.size;
              if (cumulativeBytesBudget > MAX_CUMULATIVE_BYTES) {
                throw new Error(`ZIP Archive rejected: Exceeded cumulative uncompressed size limit (50MB).`);
              }
              attachmentItems.push({ path: entry.name, blob });
            }
          }
        }

        // Save attachments in dedicated store
        if (attachmentItems.length > 0) {
          setProgress({
            phase: 'attachments',
            current: 0,
            total: attachmentItems.length,
            currentFile: 'Saving image attachments to browser storage...',
          });
          await clearAttachments();
          await saveAttachmentsBatch(attachmentItems);
        }

        // Process markdown notes into CptsNoteEntry format
        const { parseObsidianRawItems } = await import('../../utils/zipVaultImporter');
        const rawItems = markdownItems.map((m) => ({
          path: m.path,
          getText: async () => m.text,
        }));

        const result = await parseObsidianRawItems(rawItems, (p) => {
          setProgress({
            phase: 'parsing',
            current: p.current,
            total: p.total,
            currentFile: p.currentFile,
          });
        });

        // Build file tree
        const allTreeFiles = [
          ...markdownItems.map((m, i) => ({
            path: m.path,
            size: m.size,
            noteId: result.notes[i]?.id,
          })),
          ...canvasItems.map((c) => ({ path: c.path, size: c.text.length })),
          ...excalidrawItems.map((e) => ({ path: e.path, size: e.text.length })),
          ...attachmentItems.map((a) => ({ path: a.path, size: a.blob.size })),
        ];

        const tree = buildVaultTree(allTreeFiles);
        tree.wikilinkMap = result.wikilinkMap;

        // Persist notes into IndexedDB
        await saveVaultToIndexedDb({
          notes: result.notes,
          wikilinkMap: result.wikilinkMap,
        });

        // Update Store
        setUserNotes(result.notes);
        setUserWikilinkMap(result.wikilinkMap);

        setProgress({
          phase: 'complete',
          current: total,
          total,
          currentFile: 'Vault imported successfully.',
        });

        return {
          notes: result.notes,
          tree,
          wikilinkMap: result.wikilinkMap,
          attachmentCount: attachmentItems.length,
          summary: {
            totalNotes: result.notes.length,
            totalCanvases: canvasItems.length,
            totalExcalidraw: excalidrawItems.length,
            totalAttachments: attachmentItems.length,
            categories: result.summary.categories,
          },
        };
      } catch (err: any) {
        console.error('[useVaultImporter] Failed to import ZIP:', err);
        setError(err?.message || 'Failed to parse ZIP archive');
        throw err;
      } finally {
        setIsImporting(false);
      }
    },
    [setUserNotes, setUserWikilinkMap]
  );

  /**
   * Import vault from browser directory selection (<input webkitdirectory />)
   */
  const importDirectory = useCallback(
    async (fileList: FileList | File[]): Promise<VaultImportResult> => {
      setIsImporting(true);
      setError(null);

      try {
        const files: File[] = Array.isArray(fileList) ? fileList : Array.from(fileList);
        const total = files.length;

        const markdownItems: { path: string; file: File }[] = [];
        const attachmentItems: { path: string; blob: Blob }[] = [];
        const canvasItems: { path: string; file: File }[] = [];
        const excalidrawItems: { path: string; file: File }[] = [];

        for (let i = 0; i < total; i++) {
          const file = files[i];
          const rawPath = (file as any).webkitRelativePath || file.name;
          const norm = rawPath.replace(/\\/g, '/');
          const lower = norm.toLowerCase();

          if (
            lower.includes('/.obsidian/') ||
            lower.includes('/.git/') ||
            lower.includes('/.trash/') ||
            lower.includes('__macosx') ||
            lower.startsWith('.')
          ) {
            continue;
          }

          if (lower.endsWith('.md') || lower.endsWith('.markdown')) {
            if (lower.endsWith('.excalidraw.md')) {
              excalidrawItems.push({ path: norm, file });
            } else {
              markdownItems.push({ path: norm, file });
            }
          } else if (lower.endsWith('.canvas')) {
            canvasItems.push({ path: norm, file });
          } else if (lower.endsWith('.excalidraw')) {
            excalidrawItems.push({ path: norm, file });
          } else {
            const ext = lower.split('.').pop() || '';
            if (IMAGE_EXTS.has(ext)) {
              attachmentItems.push({ path: norm, blob: file });
            }
          }
        }

        // Save attachments
        if (attachmentItems.length > 0) {
          await clearAttachments();
          await saveAttachmentsBatch(attachmentItems);
        }

        // Parse markdown notes
        const { parseObsidianRawItems } = await import('../../utils/zipVaultImporter');
        const rawItems = markdownItems.map((m) => ({
          path: m.path,
          getText: () => m.file.text(),
        }));

        const result = await parseObsidianRawItems(rawItems, (p) => {
          setProgress({
            phase: 'parsing',
            current: p.current,
            total: p.total,
            currentFile: p.currentFile,
          });
        });

        // Build file tree
        const allTreeFiles = [
          ...markdownItems.map((m, i) => ({
            path: m.path,
            size: m.file.size,
            noteId: result.notes[i]?.id,
          })),
          ...canvasItems.map((c) => ({ path: c.path, size: c.file.size })),
          ...excalidrawItems.map((e) => ({ path: e.path, size: e.file.size })),
          ...attachmentItems.map((a) => ({ path: a.path, size: a.blob.size })),
        ];

        const tree = buildVaultTree(allTreeFiles);
        tree.wikilinkMap = result.wikilinkMap;

        // Persist notes into IndexedDB
        await saveVaultToIndexedDb({
          notes: result.notes,
          wikilinkMap: result.wikilinkMap,
        });

        setUserNotes(result.notes);
        setUserWikilinkMap(result.wikilinkMap);

        return {
          notes: result.notes,
          tree,
          wikilinkMap: result.wikilinkMap,
          attachmentCount: attachmentItems.length,
          summary: {
            totalNotes: result.notes.length,
            totalCanvases: canvasItems.length,
            totalExcalidraw: excalidrawItems.length,
            totalAttachments: attachmentItems.length,
            categories: result.summary.categories,
          },
        };
      } catch (err: any) {
        console.error('[useVaultImporter] Directory import error:', err);
        setError(err?.message || 'Failed to import directory');
        throw err;
      } finally {
        setIsImporting(false);
      }
    },
    [setUserNotes, setUserWikilinkMap]
  );

  /**
   * Import vault using modern window.showDirectoryPicker() API
   */
  const importNativeDirectory = useCallback(async (): Promise<VaultImportResult> => {
    if (typeof window === 'undefined' || !(window as any).showDirectoryPicker) {
      throw new Error('showDirectoryPicker is not supported in this browser. Please use the folder select button.');
    }

    setIsImporting(true);
    setError(null);

    try {
      const dirHandle = await (window as any).showDirectoryPicker();
      const collectedFiles: { path: string; file: File }[] = [];

      async function scanDir(handle: any, currentPath = '') {
        for await (const entry of handle.values()) {
          const entryPath = currentPath ? `${currentPath}/${entry.name}` : entry.name;
          const lower = entry.name.toLowerCase();

          if (
            lower.startsWith('.') ||
            lower === '.obsidian' ||
            lower === '.git' ||
            lower === '.trash'
          ) {
            continue;
          }

          if (entry.kind === 'file') {
            const file = await entry.getFile();
            collectedFiles.push({ path: entryPath, file });
          } else if (entry.kind === 'directory') {
            await scanDir(entry, entryPath);
          }
        }
      }

      await scanDir(dirHandle);

      // Now pass collected files into directory importer
      return await importDirectory(collectedFiles.map((c) => c.file));
    } catch (err: any) {
      if (err?.name === 'AbortError') {
        setIsImporting(false);
        throw err;
      }
      console.error('[useVaultImporter] Native directory error:', err);
      setError(err?.message || 'Failed to access directory');
      throw err;
    } finally {
      setIsImporting(false);
    }
  }, [importDirectory]);

  return {
    isImporting,
    progress,
    error,
    importZip,
    importDirectory,
    importNativeDirectory,
  };
}
