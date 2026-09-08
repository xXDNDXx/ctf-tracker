import { useCallback, useSyncExternalStore } from 'react';
import { getAllStoredPdfIds, PDF_STORAGE_EVENT } from '../utils/pdfStorageUtils';
import { Machine } from '../types';

let cachedStoredPdfIds: Set<string> = new Set();
let hasLoadedOnce = false;
type Listener = () => void;
const listeners = new Set<Listener>();

function notify() {
  listeners.forEach((l) => l());
}

async function refreshAllPdfs() {
  try {
    const ids = await getAllStoredPdfIds();
    cachedStoredPdfIds = ids;
    hasLoadedOnce = true;
    notify();
  } catch (err) {
    console.warn('[useStoredPdfs] Failed to refresh stored PDF IDs:', err);
  }
}

if (typeof window !== 'undefined') {
  window.addEventListener(PDF_STORAGE_EVENT, refreshAllPdfs);
}

function subscribe(listener: Listener) {
  listeners.add(listener);
  if (!hasLoadedOnce) {
    refreshAllPdfs();
  }
  return () => {
    listeners.delete(listener);
  };
}

function getSnapshot() {
  return cachedStoredPdfIds;
}

export function useStoredPdfs() {
  const storedPdfIds = useSyncExternalStore(subscribe, getSnapshot, getSnapshot);

  const hasPdf = useCallback(
    (m?: Machine | null): boolean => {
      if (!m || !m.id) return false;
      return storedPdfIds.has(m.id) || Boolean(m.officialPdf);
    },
    [storedPdfIds]
  );

  const hasStoredPdf = useCallback(
    (machineId?: string | null): boolean => {
      if (!machineId) return false;
      return storedPdfIds.has(machineId);
    },
    [storedPdfIds]
  );

  return {
    storedPdfIds,
    hasPdf,
    hasStoredPdf,
    refreshStoredPdfs: refreshAllPdfs,
  };
}

