import React, { useState, useMemo } from 'react';
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
  FileJson,
  Sparkles,
  Package,
  Zap,
  CheckCircle,
  FileText,
  Flame,
  ShieldAlert
} from 'lucide-react';
import { useCtfStore } from '../../store/useCtfStore';
import { playCyberSound, triggerRootCelebration } from '../../utils/helpers';
import { generateObsidianVaultZip } from '../../utils/obsidianVaultExporter';
import { extractCandidateNames, matchCandidateNamesToCatalog } from '../../utils/bulkPwnImporter';
import { PipelineStatus } from '../../types';

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
    batchUpdateMachineStatus,
  } = useCtfStore();

  const [activeTab, setActiveTab] = useState<'backup' | 'bulk_pwn'>('backup');

  // JSON Backup / Restore State
  const [importText, setImportText] = useState('');
  const [copied, setCopied] = useState(false);
  const [isExportingVault, setIsExportingVault] = useState(false);
  const [importStatus, setImportStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  // Bulk Pwn Importer State
  const [bulkInputText, setBulkInputText] = useState('');
  const [targetStatus, setTargetStatus] = useState<PipelineStatus>('completed');
  const [bulkApplied, setBulkApplied] = useState(false);

  // Compute parsed candidates and matches
  const candidates = useMemo(() => extractCandidateNames(bulkInputText), [bulkInputText]);
  const parseResult = useMemo(() => matchCandidateNamesToCatalog(candidates, machines), [candidates, machines]);

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

  const handleApplyBulkSolves = () => {
    if (parseResult.newSolves.length === 0) return;

    const updates = parseResult.newSolves.map((m) => ({
      machineId: m.machineId,
      status: targetStatus,
    }));

    batchUpdateMachineStatus(updates);
    triggerRootCelebration();
    if (soundEnabled) playCyberSound('root');

    setBulkApplied(true);
    setTimeout(() => {
      setBulkApplied(false);
      setBulkInputText('');
    }, 2500);
  };

  const handleSamplePwns = () => {
    setBulkInputText('Lame, Forest, Sauna, Shocker, Blue, Jerry, Legacy, Devel');
    if (soundEnabled) playCyberSound('click');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-0 sm:p-4 bg-black/85 backdrop-blur-md animate-fade-in font-mono">
      <div 
        className="w-full sm:max-w-2xl h-full sm:h-auto sm:max-h-[90vh] flex flex-col rounded-none sm:rounded-xl border-0 sm:border border-cyber-border bg-cyber-card shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex-shrink-0 flex items-center justify-between border-b border-cyber-border p-4 bg-cyber-bg/95">
          <div className="flex items-center gap-2.5">
            <Database className="w-5 h-5 text-cyber-purple" />
            <h3 className="text-base font-bold text-white tracking-wide">
              DATA OPERATIONS & BULK SYNC STATION
            </h3>
          </div>
          <button
            onClick={() => setBackupModalOpen(false)}
            className="p-1.5 rounded bg-cyber-bg text-cyber-muted hover:text-white border border-cyber-border transition-all"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center border-b border-cyber-border bg-[#0a0f1d] px-4 pt-2 gap-2 flex-shrink-0 text-xs">
          <button
            onClick={() => {
              setActiveTab('backup');
              if (soundEnabled) playCyberSound('click');
            }}
            className={`px-3 py-2 rounded-t-lg font-bold transition-all flex items-center gap-1.5 border-t border-x ${
              activeTab === 'backup'
                ? 'bg-cyber-card text-white border-cyber-purple border-b-transparent shadow-sm'
                : 'text-cyber-muted hover:text-white border-transparent'
            }`}
          >
            <Package className="w-3.5 h-3.5 text-cyber-purple" />
            <span>State Backup & Vault</span>
          </button>

          <button
            onClick={() => {
              setActiveTab('bulk_pwn');
              if (soundEnabled) playCyberSound('click');
            }}
            className={`px-3 py-2 rounded-t-lg font-bold transition-all flex items-center gap-1.5 border-t border-x ${
              activeTab === 'bulk_pwn'
                ? 'bg-cyber-card text-white border-cyber-emerald border-b-transparent shadow-sm'
                : 'text-cyber-muted hover:text-white border-transparent'
            }`}
          >
            <Zap className="w-3.5 h-3.5 text-cyber-emerald" />
            <span>Bulk Pwn Importer (HTB / THM)</span>
            <span className="px-1.5 py-0.2 text-[9px] rounded bg-cyber-emerald/20 text-cyber-emerald font-black">
              NEW
            </span>
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-5 space-y-5 text-xs scrollbar-thin">
          
          {activeTab === 'backup' ? (
            <>
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
                        <span className="text-cyber-emerald font-bold">Copied JSON!</span>
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
                      Package all {machines.length} target cards, completed solves, official HTB walkthroughs, methodology phases, and cheatsheets into a complete, standalone Obsidian Vault with YAML frontmatter, wikilinks, and tags.
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
                  className="w-full p-2.5 rounded bg-cyber-card border border-cyber-border text-xs text-white placeholder-cyber-muted focus:outline-none focus:border-cyber-cyan resize-none font-mono"
                />

                {importStatus === 'error' && (
                  <div className="flex items-center gap-2 text-cyber-crimson text-xs">
                    <AlertTriangle className="w-4 h-4 flex-shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {importStatus === 'success' && (
                  <div className="flex items-center gap-2 text-cyber-emerald text-xs">
                    <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                    <span>State restored successfully! Refreshing...</span>
                  </div>
                )}

                <button
                  disabled={!importText.trim()}
                  onClick={handleExecuteImport}
                  className="px-3.5 py-1.5 rounded-lg bg-cyber-cyan/15 text-cyber-cyan border border-cyber-cyan/40 hover:bg-cyber-cyan hover:text-black font-bold transition-all disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  Import & Apply
                </button>
              </div>

              {/* Section 3: Reset */}
              <div className="p-3.5 rounded-lg bg-rose-950/15 border border-rose-900/30 space-y-2">
                <div className="flex items-center gap-2 text-cyber-crimson">
                  <AlertTriangle className="w-4 h-4" />
                  <span className="font-bold">Danger Zone: Reset All Target States</span>
                </div>
                <p className="text-cyber-muted text-[11px]">
                  Resets active flags, notes, and resets all machines to their default catalog baseline.
                </p>
                <button
                  onClick={handleResetProgress}
                  className="px-3 py-1.5 rounded-lg bg-cyber-crimson/20 border border-cyber-crimson/50 text-cyber-crimson hover:bg-cyber-crimson hover:text-white font-bold transition-all flex items-center gap-1.5"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset All Progress</span>
                </button>
              </div>
            </>
          ) : (
            /* BULK PWN IMPORTER TAB */
            <div className="space-y-4">
              <div className="p-3.5 rounded-xl bg-gradient-to-r from-cyber-emerald/15 via-cyber-card to-cyber-bg border border-cyber-emerald/40 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-white font-bold text-sm">
                    <Flame className="w-4 h-4 text-cyber-emerald" />
                    <span>Auto-Sync Solved Machines</span>
                  </div>
                  <button
                    onClick={handleSamplePwns}
                    className="px-2 py-1 rounded bg-cyber-bg hover:bg-cyber-card border border-cyber-border text-[10px] text-cyber-cyan transition-all"
                  >
                    Load Sample Preset
                  </button>
                </div>
                <p className="text-gray-300 text-[11px] leading-relaxed">
                  Paste a list of machines you have already solved on <strong>Hack The Box</strong> or <strong>TryHackMe</strong> (comma separated, line-by-line, or exported CSV). 
                  ZeroBox will match them against the catalog of 945 targets and automatically mark them as solved in seconds.
                </p>
              </div>

              {/* Target Status Selector */}
              <div className="flex items-center gap-3 bg-cyber-bg p-2.5 rounded-xl border border-cyber-border">
                <span className="text-cyber-muted text-[11px] font-bold uppercase">Apply As:</span>
                <label className="flex items-center gap-1.5 cursor-pointer text-xs">
                  <input
                    type="radio"
                    name="targetStatus"
                    value="completed"
                    checked={targetStatus === 'completed'}
                    onChange={() => setTargetStatus('completed')}
                    className="text-cyber-emerald focus:ring-0"
                  />
                  <span className={targetStatus === 'completed' ? 'text-cyber-emerald font-bold' : 'text-cyber-muted'}>
                    👑 Completed (Rooted)
                  </span>
                </label>
                <label className="flex items-center gap-1.5 cursor-pointer text-xs">
                  <input
                    type="radio"
                    name="targetStatus"
                    value="foothold"
                    checked={targetStatus === 'foothold'}
                    onChange={() => setTargetStatus('foothold')}
                    className="text-cyber-amber focus:ring-0"
                  />
                  <span className={targetStatus === 'foothold' ? 'text-cyber-amber font-bold' : 'text-cyber-muted'}>
                    🚩 Foothold (User Only)
                  </span>
                </label>
              </div>

              {/* Paste Text Area */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-[11px]">
                  <span className="text-cyber-muted font-bold">PASTE MACHINE NAMES / CSV:</span>
                  {candidates.length > 0 && (
                    <span className="text-cyber-cyan font-bold">{candidates.length} candidate(s) detected</span>
                  )}
                </div>
                <textarea
                  rows={5}
                  value={bulkInputText}
                  onChange={(e) => setBulkInputText(e.target.value)}
                  placeholder="Paste names here, e.g.:&#10;Lame&#10;Forest&#10;Sauna&#10;Shocker&#10;Blue"
                  className="w-full p-3 rounded-xl bg-cyber-bg border border-cyber-border text-xs text-white placeholder-cyber-muted focus:outline-none focus:border-cyber-emerald resize-none font-mono"
                />
              </div>

              {/* Live Parsing Telemetry Cards */}
              {candidates.length > 0 && (
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  <div className="p-2.5 rounded-lg bg-cyber-bg border border-cyber-border text-center">
                    <div className="text-base font-bold text-white">{parseResult.totalInputTokens}</div>
                    <div className="text-[10px] text-cyber-muted uppercase">Detected</div>
                  </div>
                  <div className="p-2.5 rounded-lg bg-emerald-950/30 border border-emerald-800/40 text-center">
                    <div className="text-base font-bold text-cyber-emerald">{parseResult.allMatches.length}</div>
                    <div className="text-[10px] text-emerald-400 uppercase">Matched</div>
                  </div>
                  <div className="p-2.5 rounded-lg bg-cyan-950/30 border border-cyan-800/40 text-center">
                    <div className="text-base font-bold text-cyber-cyan">{parseResult.newSolves.length}</div>
                    <div className="text-[10px] text-cyan-400 uppercase">New Solves</div>
                  </div>
                  <div className="p-2.5 rounded-lg bg-cyber-bg border border-cyber-border text-center">
                    <div className="text-base font-bold text-cyber-muted">{parseResult.unmatched.length}</div>
                    <div className="text-[10px] text-cyber-muted uppercase">Unmatched</div>
                  </div>
                </div>
              )}

              {/* Matched Preview List */}
              {parseResult.allMatches.length > 0 && (
                <div className="space-y-1.5">
                  <div className="text-[10px] uppercase font-bold text-cyber-muted">
                    MATCHED CATALOG TARGETS ({parseResult.allMatches.length}):
                  </div>
                  <div className="max-h-36 overflow-y-auto space-y-1 p-2 rounded-lg bg-cyber-bg border border-cyber-border text-[11px] scrollbar-thin">
                    {parseResult.allMatches.map((m) => {
                      const isAlready = m.currentStatus === 'completed' || m.currentStatus === 'root';
                      return (
                        <div key={m.machineId} className="flex items-center justify-between p-1 px-2 rounded hover:bg-cyber-card transition-colors">
                          <div className="flex items-center gap-2">
                            <span className={`px-1 rounded text-[9px] font-bold ${
                              m.platform === 'HTB' ? 'bg-cyber-emerald/20 text-cyber-emerald' : 'bg-cyber-crimson/20 text-cyber-crimson'
                            }`}>
                              {m.platform}
                            </span>
                            <span className="font-bold text-white">{m.machineName}</span>
                            <span className="text-[10px] text-cyber-muted">({m.difficulty})</span>
                          </div>
                          <div className="flex items-center gap-1.5 text-[10px]">
                            {isAlready ? (
                              <span className="text-cyber-muted">Already Solved</span>
                            ) : (
                              <span className="text-cyber-emerald font-bold">Will Mark Solved</span>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Unmatched list warning */}
              {parseResult.unmatched.length > 0 && (
                <div className="p-2.5 rounded-lg bg-amber-950/20 border border-amber-800/40 text-[11px] text-cyber-amber flex items-start gap-2">
                  <ShieldAlert className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block">Unmatched Items ({parseResult.unmatched.length}):</span>
                    <span className="text-cyber-muted truncate block">
                      {parseResult.unmatched.slice(0, 8).join(', ')}{parseResult.unmatched.length > 8 ? '...' : ''}
                    </span>
                  </div>
                </div>
              )}

              {/* Action Button */}
              <div className="flex items-center justify-between pt-2 border-t border-cyber-border">
                <span className="text-[10px] text-cyber-muted">
                  Preserves all custom notes and never deletes progress.
                </span>

                <button
                  onClick={handleApplyBulkSolves}
                  disabled={parseResult.newSolves.length === 0 || bulkApplied}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold bg-cyber-emerald hover:bg-cyber-emerald/90 text-black shadow-glow-emerald disabled:opacity-40 disabled:cursor-not-allowed transition-all"
                >
                  {bulkApplied ? (
                    <>
                      <Check className="w-4 h-4 stroke-[3]" />
                      <span>APPLIED SOLVES!</span>
                    </>
                  ) : (
                    <>
                      <Zap className="w-4 h-4" />
                      <span>APPLY {parseResult.newSolves.length} SOLVES TO CATALOG</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
