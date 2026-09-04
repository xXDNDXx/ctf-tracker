import React, { useState } from 'react';
import { 
  X, 
  Database, 
  Download, 
  Upload, 
  Copy, 
  Check, 
  AlertTriangle, 
  RotateCcw,
  CheckCircle2,
  FileJson
} from 'lucide-react';
import { useCtfStore } from '../../store/useCtfStore';
import { playCyberSound } from '../../utils/helpers';
import { generateObsidianVaultZip } from '../../utils/obsidianVaultExporter';
import { Sparkles, Package, BookOpen } from 'lucide-react';

export const BackupModal: React.FC = () => {
  const {
    backupModalOpen,
    setBackupModalOpen,
    exportBackup,
    importBackup,
    resetAllProgress,
    machines,
    cheatsheets,
    soundEnabled,
  } = useCtfStore();

  const [importText, setImportText] = useState('');
  const [copied, setCopied] = useState(false);
  const [isExportingVault, setIsExportingVault] = useState(false);
  const [importStatus, setImportStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  if (!backupModalOpen) return null;

  const handleDownloadBackup = () => {
    const jsonStr = exportBackup();
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    const dateStr = new Date().toISOString().slice(0, 10);
    link.download = `zerobox_ctf_backup_${dateStr}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    if (soundEnabled) playCyberSound('root');
  };

  const handleExportObsidianVault = async () => {
    try {
      setIsExportingVault(true);
      const zipBlob = await generateObsidianVaultZip(machines, cheatsheets);
      const url = URL.createObjectURL(zipBlob);
      const link = document.createElement('a');
      link.href = url;
      const dateStr = new Date().toISOString().slice(0, 10);
      link.download = `ZeroBox-Obsidian-Vault-${dateStr}.zip`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
      if (soundEnabled) playCyberSound('root');
    } catch (err) {
      console.error('Failed to generate Obsidian Vault zip:', err);
    } finally {
      setIsExportingVault(false);
    }
  };

  const handleCopyBackup = () => {
    const jsonStr = exportBackup();
    navigator.clipboard.writeText(jsonStr);
    setCopied(true);
    if (soundEnabled) playCyberSound('copy');
    setTimeout(() => setCopied(false), 2000);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target?.result as string;
      if (content) {
        setImportText(content);
      }
    };
    reader.readAsText(file);
  };

  const handleExecuteImport = () => {
    if (!importText.trim()) return;
    try {
      const success = importBackup(importText);
      if (success) {
        setImportStatus('success');
        setErrorMessage('');
        if (soundEnabled) playCyberSound('root');
        setTimeout(() => {
          setBackupModalOpen(false);
          setImportStatus('idle');
        }, 1500);
      } else {
        setImportStatus('error');
        setErrorMessage('Invalid backup format. Ensure it contains a valid "machines" array.');
      }
    } catch {
      setImportStatus('error');
      setErrorMessage('Malformed JSON syntax. Please check the imported text.');
    }
  };

  const handleResetProgress = () => {
    if (confirm('Are you sure you want to reset all machine progress? Flags, timers, and statuses will be cleared.')) {
      resetAllProgress();
      if (soundEnabled) playCyberSound('root');
      setBackupModalOpen(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-0 sm:p-4 bg-black/85 backdrop-blur-md animate-fade-in font-mono">
      <div 
        className="w-full sm:max-w-xl h-full sm:h-auto sm:max-h-[90vh] flex flex-col rounded-none sm:rounded-xl border-0 sm:border border-cyber-border bg-cyber-card shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex-shrink-0 flex items-center justify-between border-b border-cyber-border p-4 bg-cyber-bg/95">
          <div className="flex items-center gap-2">
            <Database className="w-5 h-5 text-cyber-purple" />
            <h3 className="text-base font-bold text-white">DATA BACKUP & RESTORE STATION</h3>
          </div>
          <button
            onClick={() => setBackupModalOpen(false)}
            className="p-1.5 rounded bg-cyber-bg text-cyber-muted hover:text-white border border-cyber-border"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-5 space-y-5 text-xs scrollbar-thin">
          
          {/* Section 1: Export */}
          {/* Section 1: Export JSON */}
          <div className="p-3.5 rounded-lg bg-cyber-bg border border-cyber-border space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <span className="font-bold text-white text-sm block">Export State (JSON)</span>
                <span className="text-cyber-muted text-[11px]">
                  Snapshot all machine flags, writeups, custom boxes, timers, and payloads.
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleDownloadBackup}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyber-purple text-white font-bold hover:bg-cyber-purple/90 transition-all shadow-glow-purple"
              >
                <Download className="w-3.5 h-3.5" /> Download JSON File
              </button>
              <button
                onClick={handleCopyBackup}
                className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-cyber-card border border-cyber-border text-white hover:border-cyber-purple transition-all"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-cyber-emerald" />
                    <span className="text-cyber-emerald">Copied JSON!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy JSON String</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Section 1B: Export as Standalone Obsidian Vault (.zip) */}
          <div className="p-3.5 rounded-lg bg-purple-950/20 border border-purple-800/40 space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-purple-300 text-sm block">1-Click Obsidian Vault Export (.zip)</span>
                  <span className="text-[10px] px-2 py-0.2 rounded bg-purple-900/60 border border-purple-700/50 text-purple-200 font-bold uppercase">
                    Obsidian Ready
                  </span>
                </div>
                <span className="text-cyber-muted text-[11px] block mt-0.5">
                  Package all {machines.length} target cards, 63 completed solves, official HTB walkthroughs, methodology phases, and cheatsheets into a complete, standalone Obsidian Vault with YAML frontmatter, wikilinks, and tags.
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                disabled={isExportingVault}
                onClick={handleExportObsidianVault}
                className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-cyber-cyan text-black font-bold hover:bg-cyan-300 transition-all shadow-glow-cyan disabled:opacity-50"
              >
                {isExportingVault ? (
                  <>
                    <Sparkles className="w-4 h-4 animate-spin text-black" />
                    <span>Compiling Vault ZIP...</span>
                  </>
                ) : (
                  <>
                    <Package className="w-4 h-4" />
                    <span>Export Obsidian Vault (.zip)</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Section 2: Import */}
          <div className="p-3.5 rounded-lg bg-cyber-bg border border-cyber-border space-y-3">
            <div>
              <span className="font-bold text-white text-sm block">Restore / Import State</span>
              <span className="text-cyber-muted text-[11px]">
                Paste JSON content or upload an export file to restore your entire profile.
              </span>
            </div>

            <div className="flex items-center gap-2">
              <label className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyber-card border border-cyber-border text-white hover:border-cyber-cyan cursor-pointer transition-all">
                <Upload className="w-3.5 h-3.5 text-cyber-cyan" />
                <span>Upload JSON File</span>
                <input
                  type="file"
                  accept=".json,application/json"
                  onChange={handleFileUpload}
                  className="hidden"
                />
              </label>
            </div>

            <textarea
              rows={4}
              value={importText}
              onChange={(e) => setImportText(e.target.value)}
              placeholder="Or paste exported JSON content directly here..."
              className="w-full bg-cyber-card p-2.5 rounded-lg border border-cyber-border text-white text-[11px] focus:outline-none focus:border-cyber-cyan font-mono resize-none"
            />

            {importStatus === 'error' && (
              <div className="p-2 rounded bg-cyber-crimson/10 border border-cyber-crimson/30 text-cyber-crimson flex items-center gap-1.5">
                <AlertTriangle className="w-4 h-4 flex-shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            {importStatus === 'success' && (
              <div className="p-2 rounded bg-cyber-emerald/10 border border-cyber-emerald/30 text-cyber-emerald flex items-center gap-1.5 font-bold">
                <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                <span>Backup restored successfully! Refreshing view...</span>
              </div>
            )}

            <div className="flex justify-end">
              <button
                onClick={handleExecuteImport}
                disabled={!importText.trim()}
                className="flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-cyber-cyan text-black font-bold disabled:opacity-50 hover:bg-cyber-cyan/90 transition-all shadow-glow-cyan"
              >
                <FileJson className="w-3.5 h-3.5" /> Validate & Restore State
              </button>
            </div>
          </div>

          {/* Section 3: Reset */}
          <div className="p-3 rounded-lg border border-cyber-crimson/30 bg-cyber-crimson/5 flex items-center justify-between">
            <div>
              <span className="font-bold text-cyber-crimson block">Emergency Reset</span>
              <span className="text-[11px] text-cyber-muted">
                Clear all flags, session timers, and return catalog to default factory state.
              </span>
            </div>
            <button
              onClick={handleResetProgress}
              className="px-3 py-1.5 rounded bg-cyber-crimson/20 border border-cyber-crimson/50 text-cyber-crimson hover:bg-cyber-crimson hover:text-white font-bold transition-all"
            >
              Reset Progress
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
