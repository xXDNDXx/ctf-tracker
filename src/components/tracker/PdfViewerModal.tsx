import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import {
  X,
  FileText,
  Upload,
  Download,
  ExternalLink,
  Trash2,
  CheckCircle,
  AlertCircle,
  FolderArchive,
  RefreshCw,
} from 'lucide-react';
import { Machine } from '../../types';
import {
  getMachinePdf,
  saveMachinePdf,
  deleteMachinePdf,
  resolvePdfUrl,
  batchMatchAndStorePdfs,
  StoredPdfRecord,
} from '../../utils/pdfStorageUtils';
import { useCtfStore } from '../../store/useCtfStore';

interface PdfViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
  machine?: Machine | null;
  machineId?: string | null;
  allMachines?: Machine[];
  onPdfUpdated?: () => void;
}

export const PdfViewerModal: React.FC<PdfViewerModalProps> = ({
  isOpen,
  onClose,
  machine: propMachine,
  machineId,
  allMachines: propAllMachines,
  onPdfUpdated,
}) => {
  const storeMachines = useCtfStore((s) => s.machines);
  const allMachines = propAllMachines && propAllMachines.length > 0 ? propAllMachines : storeMachines;
  const machine = propMachine || (machineId ? allMachines.find((m) => m.id === machineId) || null : null);

  const [pdfRecord, setPdfRecord] = useState<StoredPdfRecord | null>(null);
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [activeTab, setActiveTab] = useState<'view' | 'batch'>('view');
  const [dragOver, setDragOver] = useState<boolean>(false);
  const [uploading, setUploading] = useState<boolean>(false);
  const [statusMsg, setStatusMsg] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const [batchResults, setBatchResults] = useState<{
    matchedCount: number;
    matchedMachines: { id: string; name: string; filename: string }[];
    unmatchedFiles: string[];
  } | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const batchInputRef = useRef<HTMLInputElement>(null);
  const soundEnabled = useCtfStore((s) => s.soundEnabled);

  // Load PDF for active machine
  useEffect(() => {
    let isMounted = true;
    if (!isOpen || !machine) {
      setPdfRecord(null);
      setPdfUrl(null);
      return;
    }

    setLoading(true);
    setStatusMsg(null);

    async function loadPdf() {
      if (!machine) return;
      try {
        const record = await getMachinePdf(machine.id);
        if (!isMounted) return;

        if (record) {
          setPdfRecord(record);
          const url = await resolvePdfUrl(machine.id);
          if (isMounted) setPdfUrl(url);
        } else {
          setPdfRecord(null);
          setPdfUrl(null);
        }
      } catch (err) {
        console.error('Failed to load PDF for target', machine.id, err);
      } finally {
        if (isMounted) setLoading(false);
      }
    }

    loadPdf();

    return () => {
      isMounted = false;
    };
  }, [isOpen, machine]);

  // Handle single PDF file upload
  const handleFileUpload = async (file: File) => {
    if (!machine) return;
    if (!file.name.toLowerCase().endsWith('.pdf')) {
      setStatusMsg({ type: 'error', text: 'Only PDF files (.pdf) are supported.' });
      return;
    }

    setUploading(true);
    setStatusMsg(null);
    try {
      await saveMachinePdf(machine.id, file, file.name);
      const updatedRecord = await getMachinePdf(machine.id);
      const url = await resolvePdfUrl(machine.id);
      setPdfRecord(updatedRecord);
      setPdfUrl(url);
      setStatusMsg({ type: 'success', text: `Successfully linked ${file.name} to ${machine.name}!` });
      if (onPdfUpdated) onPdfUpdated();
    } catch (err: any) {
      setStatusMsg({ type: 'error', text: err?.message || 'Failed to save PDF.' });
    } finally {
      setUploading(false);
    }
  };

  // Handle PDF deletion
  const handleDelete = async () => {
    if (!machine) return;
    if (!window.confirm(`Remove linked PDF writeup for ${machine.name}?`)) return;

    try {
      await deleteMachinePdf(machine.id);
      setPdfRecord(null);
      setPdfUrl(null);
      setStatusMsg({ type: 'success', text: 'PDF writeup unlinked.' });
      if (onPdfUpdated) onPdfUpdated();
    } catch (err) {
      setStatusMsg({ type: 'error', text: 'Failed to delete PDF.' });
    }
  };

  // Handle Batch PDF upload
  const handleBatchUpload = async (files: FileList | null) => {
    if (!files || files.length === 0) return;
    const fileArray = Array.from(files);
    setUploading(true);
    setStatusMsg(null);
    try {
      const targets = allMachines.length > 0 ? allMachines : (machine ? [machine] : []);
      const res = await batchMatchAndStorePdfs(fileArray, targets);
      setBatchResults(res);
      setStatusMsg({
        type: 'success',
        text: `Batch processing complete: ${res.matchedCount} writeups mapped to catalog targets.`,
      });

      // Reload current machine if it was in the matched batch
      if (machine) {
        const record = await getMachinePdf(machine.id);
        if (record) {
          setPdfRecord(record);
          const url = await resolvePdfUrl(machine.id);
          setPdfUrl(url);
        }
      }
      if (onPdfUpdated) onPdfUpdated();
    } catch (err: any) {
      setStatusMsg({ type: 'error', text: err?.message || 'Batch PDF import failed.' });
    } finally {
      setUploading(false);
    }
  };

  if (!isOpen || !machine) return null;

  const formatBytes = (bytes: number): string => {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
    return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
  };

  const modalContent = (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-[120] flex items-center justify-center bg-black/85 backdrop-blur-md p-3 sm:p-6 animate-fadeIn"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="bg-slate-900 border border-cyber-border rounded-xl shadow-2xl w-full max-w-5xl h-[90vh] flex flex-col overflow-hidden text-slate-100 font-mono">
        {/* Header Bar */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-cyber-border bg-slate-950/80">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-cyber-cyan/10 border border-cyber-cyan/30 text-cyber-cyan">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-sm text-white tracking-wider">
                  TARGET INTELLIGENCE // WRITEUP PDF
                </span>
                <span className="text-[11px] px-2 py-0.5 rounded bg-cyber-cyan/15 text-cyber-cyan border border-cyber-cyan/30">
                  {machine.name}
                </span>
                <span className="text-xs text-cyber-muted font-normal">({machine.ip})</span>
              </div>
              {machine.officialPdf && (
                <div className="text-[10px] text-cyber-muted mt-0.5 flex items-center gap-1.5">
                  <span>Official HTB Reference:</span>
                  <span className="text-emerald-400 font-semibold">{machine.officialPdf}</span>
                </div>
              )}
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Tab switch */}
            <div className="flex items-center rounded-lg bg-slate-800 p-0.5 border border-slate-700 text-xs">
              <button
                type="button"
                onClick={() => setActiveTab('view')}
                className={`px-3 py-1 rounded transition-all ${
                  activeTab === 'view' ? 'bg-cyber-cyan text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
                }`}
              >
                Target PDF
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('batch')}
                className={`px-3 py-1 rounded transition-all flex items-center gap-1 ${
                  activeTab === 'batch' ? 'bg-cyber-cyan text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
                }`}
              >
                <FolderArchive className="w-3.5 h-3.5" />
                <span>Batch Importer</span>
              </button>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-lg border border-slate-700 hover:border-cyber-crimson hover:text-cyber-crimson text-slate-400 transition-colors"
              title="Close viewer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Status Alerts */}
        {statusMsg && (
          <div
            className={`px-4 py-2 text-xs flex items-center gap-2 border-b ${
              statusMsg.type === 'success'
                ? 'bg-emerald-950/60 text-emerald-300 border-emerald-800'
                : 'bg-rose-950/60 text-rose-300 border-rose-800'
            }`}
          >
            {statusMsg.type === 'success' ? (
              <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
            ) : (
              <AlertCircle className="w-4 h-4 text-rose-400 shrink-0" />
            )}
            <span>{statusMsg.text}</span>
          </div>
        )}

        {/* Modal Body */}
        <div className="flex-1 overflow-hidden relative flex flex-col">
          {activeTab === 'view' ? (
            loading ? (
              <div className="flex-1 flex flex-col items-center justify-center gap-3">
                <RefreshCw className="w-8 h-8 text-cyber-cyan animate-spin" />
                <span className="text-xs text-cyber-muted tracking-widest">QUERYING INDEXEDDB REPOSITORY...</span>
              </div>
            ) : pdfUrl && pdfRecord ? (
              <div className="flex-1 flex flex-col h-full">
                {/* PDF Action Toolbar */}
                <div className="flex items-center justify-between px-4 py-2 bg-slate-950/60 border-b border-cyber-border text-xs">
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-400 font-bold">{pdfRecord.filename}</span>
                    <span className="text-cyber-muted text-[11px]">({formatBytes(pdfRecord.size)})</span>
                    <span className="text-[10px] px-1.5 py-0.2 rounded bg-slate-800 text-slate-400 border border-slate-700">
                      Offline Persistent
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <a
                      href={pdfUrl}
                      download={pdfRecord.filename}
                      className="px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 flex items-center gap-1.5 transition-colors"
                      title="Download PDF to disk"
                    >
                      <Download className="w-3.5 h-3.5 text-cyber-cyan" />
                      <span>Download</span>
                    </a>

                    <button
                      type="button"
                      onClick={() => window.open(pdfUrl, '_blank')}
                      className="px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 flex items-center gap-1.5 transition-colors"
                      title="Open in external browser window"
                    >
                      <ExternalLink className="w-3.5 h-3.5 text-cyber-cyan" />
                      <span>Popout</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 flex items-center gap-1.5 transition-colors"
                      title="Replace existing PDF"
                    >
                      <Upload className="w-3.5 h-3.5 text-amber-400" />
                      <span>Replace</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleDelete}
                      className="p-1.5 rounded bg-slate-800 hover:bg-rose-900/40 border border-slate-700 hover:border-rose-600 text-slate-400 hover:text-rose-400 transition-colors"
                      title="Delete from local database"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* PDF In-App Frame */}
                <div className="flex-1 bg-slate-950 p-1">
                  <object
                    data={pdfUrl}
                    type="application/pdf"
                    className="w-full h-full rounded border border-slate-800 bg-white"
                  >
                    <div className="flex flex-col items-center justify-center h-full p-6 text-center space-y-4">
                      <FileText className="w-12 h-12 text-cyber-cyan" />
                      <p className="text-sm text-slate-300">
                        Browser inline PDF plugin is restricted or unavailable in this view.
                      </p>
                      <div className="flex items-center gap-3">
                        <a
                          href={pdfUrl}
                          download={pdfRecord.filename}
                          className="px-4 py-2 rounded-lg bg-cyber-cyan text-slate-950 font-bold text-xs"
                        >
                          Download PDF File
                        </a>
                        <button
                          type="button"
                          onClick={() => window.open(pdfUrl, '_blank')}
                          className="px-4 py-2 rounded-lg bg-slate-800 border border-slate-700 text-white font-bold text-xs"
                        >
                          Open in New Tab
                        </button>
                      </div>
                    </div>
                  </object>
                </div>
              </div>
            ) : (
              /* Dropzone when no PDF is attached */
              <div className="flex-1 flex flex-col items-center justify-center p-8">
                <div
                  onDragOver={(e) => {
                    e.preventDefault();
                    setDragOver(true);
                  }}
                  onDragLeave={() => setDragOver(false)}
                  onDrop={(e) => {
                    e.preventDefault();
                    setDragOver(false);
                    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
                      handleFileUpload(e.dataTransfer.files[0]);
                    }
                  }}
                  className={`max-w-xl w-full p-8 rounded-xl border-2 border-dashed text-center flex flex-col items-center justify-center gap-4 transition-all ${
                    dragOver
                      ? 'border-cyber-cyan bg-cyber-cyan/10 scale-[1.01]'
                      : 'border-slate-700 hover:border-slate-500 bg-slate-950/50'
                  }`}
                >
                  <div className="p-4 rounded-full bg-slate-800 border border-slate-700 text-cyber-cyan">
                    <Upload className="w-8 h-8" />
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-white">Attach Writeup PDF for {machine.name}</h3>
                    <p className="text-xs text-cyber-muted mt-1">
                      Drag and drop your local official HTB or personal walkthrough PDF here
                    </p>
                  </div>

                  {machine.officialPdf && (
                    <div className="px-3 py-2 rounded bg-slate-900 border border-cyber-border text-left w-full text-xs">
                      <div className="text-[10px] text-cyber-cyan uppercase font-bold">Catalog Expected Filename</div>
                      <div className="font-mono text-emerald-400 mt-0.5 break-all">{machine.officialPdf}</div>
                    </div>
                  )}

                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      disabled={uploading}
                      onClick={() => fileInputRef.current?.click()}
                      className="px-4 py-2 rounded-lg bg-cyber-cyan text-slate-950 hover:bg-cyan-400 font-bold text-xs transition-colors flex items-center gap-2"
                    >
                      <Upload className="w-4 h-4" />
                      <span>{uploading ? 'Storing in IndexedDB...' : 'Browse Local PDF'}</span>
                    </button>
                  </div>

                  <span className="text-[10px] text-slate-500">
                    PDFs are stored directly in browser IndexedDB with zero cloud transmission or 5MB localStorage limits.
                  </span>
                </div>
              </div>
            )
          ) : (
            /* Batch Importer Tab */
            <div className="flex-1 flex flex-col p-6 overflow-y-auto space-y-6">
              <div
                onDragOver={(e) => {
                  e.preventDefault();
                  setDragOver(true);
                }}
                onDragLeave={() => setDragOver(false)}
                onDrop={(e) => {
                  e.preventDefault();
                  setDragOver(false);
                  if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
                    handleBatchUpload(e.dataTransfer.files);
                  }
                }}
                className={`p-6 rounded-xl border-2 border-dashed text-center flex flex-col items-center justify-center gap-3 transition-all ${
                  dragOver
                    ? 'border-cyber-cyan bg-cyber-cyan/10 scale-[1.01]'
                    : 'border-slate-700 hover:border-slate-500 bg-slate-950/40'
                }`}
              >
                <FolderArchive className="w-10 h-10 text-cyber-cyan" />
                <div>
                  <h3 className="text-base font-bold text-white">Batch Import HTB Writeup PDFs</h3>
                  <p className="text-xs text-cyber-muted mt-1 max-w-lg mx-auto">
                    Select or drag-and-drop a batch of HTB official writeup PDFs. The intelligent matcher parses filenames (e.g.{' '}
                    <code className="text-emerald-400 font-mono">255-Blackfield_HTB_Official_writeup_Tamarisk.pdf</code> or{' '}
                    <code className="text-emerald-400 font-mono">Forest.pdf</code>) and associates them directly with catalog machines.
                  </p>
                </div>

                <button
                  type="button"
                  disabled={uploading}
                  onClick={() => batchInputRef.current?.click()}
                  className="px-5 py-2.5 rounded-lg bg-cyber-cyan text-slate-950 hover:bg-cyan-400 font-bold text-xs transition-colors flex items-center gap-2"
                >
                  <Upload className="w-4 h-4" />
                  <span>{uploading ? 'Processing Batch...' : 'Select Multiple PDF Files'}</span>
                </button>
              </div>

              {batchResults && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
                      Batch Match Results ({batchResults.matchedCount} Matched)
                    </span>
                  </div>

                  {batchResults.matchedMachines.length > 0 && (
                    <div className="p-4 rounded-xl bg-slate-950 border border-emerald-900/40 space-y-2">
                      <div className="text-xs font-bold text-emerald-400 flex items-center gap-2">
                        <CheckCircle className="w-4 h-4" />
                        <span>Successfully Linked Targets</span>
                      </div>
                      <div className="max-h-48 overflow-y-auto divide-y divide-slate-800 text-xs">
                        {batchResults.matchedMachines.map((m, idx) => (
                          <div key={idx} className="py-1.5 flex items-center justify-between">
                            <span className="font-bold text-white">{m.name}</span>
                            <span className="text-slate-400 font-mono text-[11px]">{m.filename}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {batchResults.unmatchedFiles.length > 0 && (
                    <div className="p-4 rounded-xl bg-slate-950 border border-amber-900/40 space-y-2">
                      <div className="text-xs font-bold text-amber-400 flex items-center gap-2">
                        <AlertCircle className="w-4 h-4" />
                        <span>Unmatched Files ({batchResults.unmatchedFiles.length})</span>
                      </div>
                      <div className="max-h-36 overflow-y-auto text-xs text-slate-400 space-y-1 font-mono text-[11px]">
                        {batchResults.unmatchedFiles.map((fn, idx) => (
                          <div key={idx}>{fn}</div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Hidden File Inputs */}
        <input
          ref={fileInputRef}
          type="file"
          accept=".pdf,application/pdf"
          className="hidden"
          onChange={(e) => {
            if (e.target.files && e.target.files[0]) {
              handleFileUpload(e.target.files[0]);
            }
          }}
        />
        <input
          ref={batchInputRef}
          type="file"
          multiple
          accept=".pdf,application/pdf"
          className="hidden"
          onChange={(e) => handleBatchUpload(e.target.files)}
        />
      </div>
    </div>
  );

  return typeof document !== 'undefined' ? createPortal(modalContent, document.body) : modalContent;
};
