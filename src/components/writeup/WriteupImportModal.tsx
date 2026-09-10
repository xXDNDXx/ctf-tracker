import React, { useState, useEffect, useRef, useMemo } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Upload,
  FileCode,
  FileText,
  RefreshCw,
  Check,
  Terminal,
  Server,
  Key,
  Shield,
  Layers,
  Sliders,
  Sparkles,
  ArrowDown
} from 'lucide-react';
import { Machine } from '../../types';
import { useCtfStore } from '../../store/useCtfStore';
import { detectAndParseScan, ScanImportResult } from '../../utils/scanParserUtils';
import {
  injectImportedScanIntoWriteup,
  syncMachineDataIntoWriteup,
  formatScanMarkdownSection,
} from '../../utils/writeupSyncUtils';
import { extractMachineCves } from '../../utils/cveUtils';
import { playCyberSound } from '../../utils/helpers';
import { useModalA11y } from '../../hooks/useModalA11y';

interface WriteupImportModalProps {
  isOpen: boolean;
  onClose: () => void;
  machine: Machine;
  currentMarkdown: string;
  onApplyMarkdown: (newMarkdown: string) => void;
}

type ImportTab = 'scan' | 'file' | 'sync';

const MAX_IMPORT_SIZE_BYTES = 5 * 1024 * 1024; // 5MB limit

export const WriteupImportModal: React.FC<WriteupImportModalProps> = ({
  isOpen,
  onClose,
  machine,
  currentMarkdown,
  onApplyMarkdown,
}) => {
  const { updateMachine, soundEnabled, setMachineOpenPorts } = useCtfStore();

  const [activeTab, setActiveTab] = useState<ImportTab>('scan');
  const [scanInputText, setScanInputText] = useState('');
  const [mdInputText, setMdInputText] = useState('');
  const [replaceMode, setReplaceMode] = useState<'append' | 'replace'>('append');
  const [isDragging, setIsDragging] = useState(false);
  const [appliedSuccess, setAppliedSuccess] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const mdFileInputRef = useRef<HTMLInputElement>(null);
  const modalContainerRef = useRef<HTMLDivElement>(null);

  useModalA11y({
    isOpen,
    onClose,
    modalRef: modalContainerRef,
  });

  // Parse scan text dynamically
  const parsedScan = useMemo<ScanImportResult | null>(() => {
    if (!scanInputText.trim()) return null;
    return detectAndParseScan(scanInputText);
  }, [scanInputText]);

  if (!isOpen) return null;

  // File Drop Handler for Scan
  const handleScanDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const files = e.dataTransfer.files;
    if (files && files.length > 0) {
      const file = files[0];
      if (file.size > MAX_IMPORT_SIZE_BYTES) {
        alert(`Scan file is too large (${(file.size / (1024 * 1024)).toFixed(1)}MB). Maximum size is 5MB.`);
        return;
      }
      const reader = new FileReader();
      reader.onload = (event) => {
        const content = event.target?.result as string;
        if (content) setScanInputText(content);
      };
      reader.readAsText(file);
    }
  };

  const handleScanFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      if (file.size > MAX_IMPORT_SIZE_BYTES) {
        alert(`Scan file is too large (${(file.size / (1024 * 1024)).toFixed(1)}MB). Maximum size is 5MB.`);
        e.target.value = '';
        return;
      }
      const reader = new FileReader();
      reader.onload = (event) => {
        const content = event.target?.result as string;
        if (content) setScanInputText(content);
      };
      reader.readAsText(file);
    }
  };

  // File Drop Handler for Markdown
  const handleMdFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      if (file.size > MAX_IMPORT_SIZE_BYTES) {
        alert(`Markdown file is too large (${(file.size / (1024 * 1024)).toFixed(1)}MB). Maximum size is 5MB.`);
        e.target.value = '';
        return;
      }
      const reader = new FileReader();
      reader.onload = (event) => {
        const content = event.target?.result as string;
        if (content) setMdInputText(content);
      };
      reader.readAsText(file);
    }
  };

  // Apply Scan to Writeup & Machine Store
  const handleApplyScan = () => {
    if (!scanInputText.trim()) return;
    const parsed = parsedScan || detectAndParseScan(scanInputText);
    if (!parsed) {
      alert('Could not parse scan. Ensure output is valid Nmap XML, standard text, or Rustscan.');
      return;
    }

    const updatedMarkdown = injectImportedScanIntoWriteup(currentMarkdown, parsed, machine);
    onApplyMarkdown(updatedMarkdown);

    // Also update machine openPorts and quickNotes
    const portNumbers = parsed.ports.map((p) => p.port);
    const existingPorts = machine.openPorts || [];
    const mergedPorts = Array.from(new Set([...existingPorts, ...portNumbers])).sort((a, b) => a - b);

    const timestamp = new Date().toLocaleTimeString();
    const portSummary = parsed.ports
      .map((p) => `- **Port ${p.port}/${p.protocol}** (${p.service.toUpperCase()}): ${p.version || '-'}`)
      .join('\n');

    const scanNotes = `\n\n### ⚡ Imported Recon Scan [${parsed.format.toUpperCase()}] (${timestamp})\n${portSummary}\n`;
    const updatedNotes = (machine.quickNotes || '') + scanNotes;

    updateMachine(machine.id, {
      writeupMarkdown: updatedMarkdown,
      openPorts: mergedPorts,
      quickNotes: updatedNotes,
    });

    setMachineOpenPorts(machine.id, mergedPorts);

    setAppliedSuccess(true);
    if (soundEnabled) playCyberSound('root');
    setTimeout(() => {
      setAppliedSuccess(false);
      onClose();
    }, 1000);
  };

  // Apply Markdown File
  const handleApplyMarkdownFile = () => {
    if (!mdInputText.trim()) return;
    const updated = replaceMode === 'replace'
      ? mdInputText
      : `${currentMarkdown.trimEnd()}\n\n---\n\n${mdInputText.trim()}`;

    onApplyMarkdown(updated);
    updateMachine(machine.id, { writeupMarkdown: updated });

    setAppliedSuccess(true);
    if (soundEnabled) playCyberSound('root');
    setTimeout(() => {
      setAppliedSuccess(false);
      onClose();
    }, 1000);
  };

  // 1-Click Sync All Machine Recon & Loot into Writeup
  const handleSyncAllMachineData = () => {
    const updated = syncMachineDataIntoWriteup(currentMarkdown, machine);
    onApplyMarkdown(updated);
    updateMachine(machine.id, { writeupMarkdown: updated });

    setAppliedSuccess(true);
    if (soundEnabled) playCyberSound('flag');
    setTimeout(() => {
      setAppliedSuccess(false);
      onClose();
    }, 1000);
  };

  const cves = extractMachineCves(machine);
  const credsCount = machine.credentials?.length || 0;
  const portsCount = machine.openPorts?.length || 0;
  const hasFieldNotes = Boolean(machine.quickNotes && machine.quickNotes.trim().length > 0);

  return createPortal(
    <div
      className="fixed inset-0 z-[130] flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-sm overflow-y-auto"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 10 }}
        transition={{ duration: 0.15 }}
        ref={modalContainerRef}
        className="w-full max-w-4xl max-h-[92vh] flex flex-col rounded-2xl border border-slate-200 dark:border-cyber-border bg-white dark:bg-cyber-card shadow-2xl overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex-shrink-0 flex items-center justify-between border-b border-slate-200 dark:border-cyber-border p-4 bg-slate-50 dark:bg-cyber-bg/95">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-cyan-100 dark:bg-cyber-cyan/15 border border-cyan-300 dark:border-cyber-cyan/40 text-cyan-800 dark:text-cyber-cyan">
              <Upload className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white font-mono">
                  IMPORT SCAN & WRITEUP INTEL
                </h2>
                <span className="text-[10px] px-2 py-0.5 rounded-full font-mono font-bold bg-purple-100 dark:bg-purple-950/60 text-purple-800 dark:text-purple-300 border border-purple-300 dark:border-purple-800">
                  {machine.name}
                </span>
              </div>
              <p className="text-xs text-slate-500 dark:text-cyber-muted mt-0.5 font-mono">
                Import Nmap/Rustscan scans, external Markdown writeups, or 1-click sync captured machine loot & intel.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-slate-100 dark:bg-cyber-card border border-slate-200 dark:border-cyber-border text-slate-500 dark:text-cyber-muted hover:text-slate-900 dark:hover:text-white transition-colors"
            title="Close modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Tab Switcher */}
        <div className="flex-shrink-0 border-b border-slate-200 dark:border-cyber-border bg-slate-100/70 dark:bg-cyber-bg/50 px-4 pt-2 flex items-center gap-2 font-mono text-xs overflow-x-auto">
          <button
            onClick={() => setActiveTab('scan')}
            className={`flex items-center gap-1.5 px-3 py-2 border-b-2 font-bold transition-all ${
              activeTab === 'scan'
                ? 'border-cyber-cyan text-slate-900 dark:text-cyber-cyan'
                : 'border-transparent text-slate-500 dark:text-cyber-muted hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <Terminal className="w-3.5 h-3.5" />
            <span>1. Nmap / Recon Scan</span>
          </button>

          <button
            onClick={() => setActiveTab('file')}
            className={`flex items-center gap-1.5 px-3 py-2 border-b-2 font-bold transition-all ${
              activeTab === 'file'
                ? 'border-purple-500 text-slate-900 dark:text-purple-300'
                : 'border-transparent text-slate-500 dark:text-cyber-muted hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>2. Markdown File (.md / .txt)</span>
          </button>

          <button
            onClick={() => setActiveTab('sync')}
            className={`flex items-center gap-1.5 px-3 py-2 border-b-2 font-bold transition-all ${
              activeTab === 'sync'
                ? 'border-cyber-emerald text-slate-900 dark:text-cyber-emerald'
                : 'border-transparent text-slate-500 dark:text-cyber-muted hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>3. Sync Machine Recon & Loot ({portsCount} Ports, {credsCount} Creds)</span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="flex-1 p-4 sm:p-6 overflow-y-auto font-mono text-xs space-y-4">
          
          {/* TAB 1: SCAN INTAKE */}
          {activeTab === 'scan' && (
            <div className="space-y-4">
              <div
                onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
                onDragLeave={() => setIsDragging(false)}
                onDrop={handleScanDrop}
                onClick={() => fileInputRef.current?.click()}
                className={`border-2 border-dashed rounded-xl p-6 text-center transition-all cursor-pointer ${
                  isDragging
                    ? 'border-cyber-cyan bg-cyber-cyan/10'
                    : 'border-slate-300 dark:border-cyber-border/80 hover:border-cyber-cyan/50 bg-slate-50 dark:bg-cyber-bg/50'
                }`}
              >
                <input
                  type="file"
                  id="scan-file-import-input"
                  name="scan-file-import-input"
                  aria-label="Upload scan file"
                  ref={fileInputRef}
                  onChange={handleScanFileUpload}
                  accept=".xml,.nmap,.txt,.gnmap,.log"
                  className="hidden"
                />
                <FileCode className="w-8 h-8 mx-auto text-cyber-cyan mb-2 opacity-80" />
                <div className="font-bold text-slate-900 dark:text-white text-sm">
                  Drop Nmap XML, Grepable (.gnmap), or Text Scan Here
                </div>
                <p className="text-[11px] text-slate-500 dark:text-cyber-muted mt-1">
                  Supports standard Nmap text, XML (-oX), Rustscan, and grepable outputs. Click to browse.
                </p>
              </div>

              <div>
                <label htmlFor="scan-raw-text-input" className="text-[10px] uppercase font-bold text-slate-500 dark:text-cyber-muted block mb-1">
                  Or Paste Raw Scan Output Here:
                </label>
                <textarea
                  id="scan-raw-text-input"
                  name="scan-raw-text-input"
                  aria-label="Paste raw scan output"
                  value={scanInputText}
                  onChange={(e) => setScanInputText(e.target.value)}
                  placeholder={`# Paste Nmap output here...\n# e.g.\nPORT   STATE SERVICE VERSION\n22/tcp open  ssh     OpenSSH 8.4p1\n80/tcp open  http    nginx 1.18.0`}
                  className="w-full h-44 p-3 rounded-xl bg-white dark:bg-cyber-bg border border-slate-300 dark:border-cyber-border text-slate-900 dark:text-cyber-text font-mono text-xs focus:outline-none focus:border-cyber-cyan resize-none"
                  spellCheck={false}
                />
              </div>

              {parsedScan && (
                <div className="p-3 rounded-xl bg-cyan-50 dark:bg-cyber-cyan/10 border border-cyan-300 dark:border-cyber-cyan/30 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-cyan-900 dark:text-cyber-cyan">
                    <Check className="w-4 h-4" />
                    <span className="font-bold">
                      Detected: {parsedScan.ports.length} open ports [{parsedScan.format.toUpperCase()}]
                      {parsedScan.detectedOs ? ` · OS: ${parsedScan.detectedOs}` : ''}
                    </span>
                  </div>
                  <span className="text-[10px] text-slate-500 dark:text-cyber-muted">
                    Ports: {parsedScan.ports.map((p) => p.port).join(', ')}
                  </span>
                </div>
              )}

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 rounded-lg bg-slate-100 dark:bg-cyber-card border border-slate-200 dark:border-cyber-border text-slate-600 dark:text-cyber-muted hover:text-slate-900 dark:hover:text-white"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleApplyScan}
                  disabled={!scanInputText.trim()}
                  className="flex items-center gap-2 px-5 py-2 rounded-lg bg-cyber-cyan text-black font-bold disabled:opacity-40 disabled:cursor-not-allowed hover:bg-cyber-cyan/90 transition-all shadow-glow-cyan"
                >
                  {appliedSuccess ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>Injected into Writeup!</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4" />
                      <span>Inject Scan into Writeup</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          )}

          {/* TAB 2: MARKDOWN FILE */}
          {activeTab === 'file' && (
            <div className="space-y-4">
              <div
                onClick={() => mdFileInputRef.current?.click()}
                className="border-2 border-dashed border-slate-300 dark:border-cyber-border/80 hover:border-purple-400 rounded-xl p-6 text-center transition-all cursor-pointer bg-slate-50 dark:bg-cyber-bg/50"
              >
                <input
                  type="file"
                  id="md-file-import-input"
                  name="md-file-import-input"
                  aria-label="Upload markdown notes file"
                  ref={mdFileInputRef}
                  onChange={handleMdFileUpload}
                  accept=".md,.markdown,.txt"
                  className="hidden"
                />
                <FileText className="w-8 h-8 mx-auto text-purple-400 mb-2 opacity-80" />
                <div className="font-bold text-slate-900 dark:text-white text-sm">
                  Click to Upload Markdown or Notes File (.md / .txt)
                </div>
                <p className="text-[11px] text-slate-500 dark:text-cyber-muted mt-1">
                  Import existing Obsidian writeups, cheatsheets, or CTF notes directly into the studio.
                </p>
              </div>

              <div>
                <label htmlFor="md-raw-text-input" className="text-[10px] uppercase font-bold text-slate-500 dark:text-cyber-muted block mb-1">
                  Or Paste Markdown Content Directly:
                </label>
                <textarea
                  id="md-raw-text-input"
                  name="md-raw-text-input"
                  aria-label="Paste markdown content directly"
                  value={mdInputText}
                  onChange={(e) => setMdInputText(e.target.value)}
                  placeholder="# Paste markdown notes or report here..."
                  className="w-full h-44 p-3 rounded-xl bg-white dark:bg-cyber-bg border border-slate-300 dark:border-cyber-border text-slate-900 dark:text-cyber-text font-mono text-xs focus:outline-none focus:border-purple-400 resize-none"
                  spellCheck={false}
                />
              </div>

              {/* Mode Toggle */}
              <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-100 dark:bg-cyber-bg/80 border border-slate-200 dark:border-cyber-border">
                <span className="text-[10px] uppercase font-bold text-slate-500 dark:text-cyber-muted">Insertion Mode:</span>
                <label className="flex items-center gap-1.5 cursor-pointer text-slate-900 dark:text-white">
                  <input
                    type="radio"
                    name="replaceMode"
                    value="append"
                    checked={replaceMode === 'append'}
                    onChange={() => setReplaceMode('append')}
                    className="text-purple-500"
                  />
                  <span>Append to bottom of current writeup</span>
                </label>
                <label className="flex items-center gap-1.5 cursor-pointer text-slate-900 dark:text-white ml-2">
                  <input
                    type="radio"
                    name="replaceMode"
                    value="replace"
                    checked={replaceMode === 'replace'}
                    onChange={() => setReplaceMode('replace')}
                    className="text-purple-500"
                  />
                  <span>Replace entire writeup content</span>
                </label>
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 rounded-lg bg-slate-100 dark:bg-cyber-card border border-slate-200 dark:border-cyber-border text-slate-600 dark:text-cyber-muted hover:text-slate-900 dark:hover:text-white"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleApplyMarkdownFile}
                  disabled={!mdInputText.trim()}
                  className="flex items-center gap-2 px-5 py-2 rounded-lg bg-purple-500 text-white font-bold disabled:opacity-40 disabled:cursor-not-allowed hover:bg-purple-600 transition-all shadow-sm"
                >
                  {appliedSuccess ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>Applied to Writeup!</span>
                    </>
                  ) : (
                    <>
                      <ArrowDown className="w-4 h-4" />
                      <span>{replaceMode === 'replace' ? 'Replace Writeup' : 'Append to Writeup'}</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          )}

          {/* TAB 3: 1-CLICK SYNC MACHINE DATA */}
          {activeTab === 'sync' && (
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-cyber-bg/70 border border-slate-200 dark:border-cyber-border space-y-3">
                <div className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-2">
                  <Server className="w-4 h-4 text-cyber-emerald" />
                  DETECTED INTEL ON {machine.name} ({machine.ip})
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="p-3 rounded-lg bg-white dark:bg-cyber-card border border-slate-200 dark:border-cyber-border">
                    <div className="text-[10px] text-slate-500 dark:text-cyber-muted uppercase font-bold">Open Ports Detected</div>
                    <div className="text-sm font-bold text-slate-900 dark:text-white mt-0.5">
                      {portsCount > 0 ? (
                        <span className="text-cyber-emerald">{portsCount} Ports ({machine.openPorts?.join(', ')})</span>
                      ) : (
                        <span className="text-slate-400 dark:text-cyber-muted">None logged yet</span>
                      )}
                    </div>
                  </div>

                  <div className="p-3 rounded-lg bg-white dark:bg-cyber-card border border-slate-200 dark:border-cyber-border">
                    <div className="text-[10px] text-slate-500 dark:text-cyber-muted uppercase font-bold">Loot & Credentials Vault</div>
                    <div className="text-sm font-bold text-slate-900 dark:text-white mt-0.5">
                      {credsCount > 0 ? (
                        <span className="text-cyber-amber">{credsCount} Compromised Secrets</span>
                      ) : (
                        <span className="text-slate-400 dark:text-cyber-muted">0 credentials</span>
                      )}
                    </div>
                  </div>

                  <div className="p-3 rounded-lg bg-white dark:bg-cyber-card border border-slate-200 dark:border-cyber-border">
                    <div className="text-[10px] text-slate-500 dark:text-cyber-muted uppercase font-bold">Field Notes & Observations</div>
                    <div className="text-sm font-bold text-slate-900 dark:text-white mt-0.5 truncate">
                      {hasFieldNotes ? (
                        <span className="text-cyber-cyan">{machine.quickNotes?.slice(0, 35)}...</span>
                      ) : (
                        <span className="text-slate-400 dark:text-cyber-muted">Empty</span>
                      )}
                    </div>
                  </div>

                  <div className="p-3 rounded-lg bg-white dark:bg-cyber-card border border-slate-200 dark:border-cyber-border">
                    <div className="text-[10px] text-slate-500 dark:text-cyber-muted uppercase font-bold">Associated CVEs</div>
                    <div className="text-sm font-bold text-slate-900 dark:text-white mt-0.5">
                      {cves.length > 0 ? (
                        <span className="text-rose-500 dark:text-rose-400">{cves.length} CVEs ({cves.slice(0, 2).join(', ')})</span>
                      ) : (
                        <span className="text-slate-400 dark:text-cyber-muted">None tagged</span>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-emerald-50 dark:bg-cyber-emerald/10 border border-emerald-300 dark:border-cyber-emerald/30 text-emerald-900 dark:text-cyber-emerald text-xs leading-relaxed">
                Clicking <strong>"Sync All Machine Recon & Loot"</strong> will inspect all captured items above and cleanly inject or update their corresponding Markdown sections in your writeup editor without overwriting your manual notes.
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 rounded-lg bg-slate-100 dark:bg-cyber-card border border-slate-200 dark:border-cyber-border text-slate-600 dark:text-cyber-muted hover:text-slate-900 dark:hover:text-white"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleSyncAllMachineData}
                  className="flex items-center gap-2 px-5 py-2 rounded-lg bg-cyber-emerald text-black font-bold hover:bg-cyber-emerald/90 transition-all shadow-glow-emerald"
                >
                  {appliedSuccess ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>Synced Machine Intel!</span>
                    </>
                  ) : (
                    <>
                      <RefreshCw className="w-4 h-4" />
                      <span>Sync All Machine Recon & Loot</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          )}

        </div>
      </motion.div>
    </div>,
    document.body
  );
};
