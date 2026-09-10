import React, { useState, useMemo, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
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
  ShieldAlert,
  ChevronDown,
  ChevronUp,
  Terminal,
  HelpCircle,
  Shield,
  Lock,
  Key,
  ShieldCheck,
  Eye,
  EyeOff
} from 'lucide-react';
import { useCtfStore } from '../../store/useCtfStore';
import { playCyberSound, triggerRootCelebration, safeCopyToClipboard } from '../../utils/helpers';
import { generateObsidianVaultZip } from '../../utils/obsidianVaultExporter';
import { extractCandidateNames, matchCandidateNamesToCatalog } from '../../utils/bulkPwnImporter';
import { isEncryptedZeroboxBackup, computeSha256 } from '../../utils/cryptoUtils';
import { PipelineStatus } from '../../types';
import { useModalA11y } from '../../hooks/useModalA11y';

export const BackupModal: React.FC = () => {
  const {
    backupModalOpen,
    setBackupModalOpen,
    exportBackup,
    exportEncryptedBackup,
    importBackup,
    importEncryptedBackup,
    resetAllProgress,
    panicWipeActiveSession,
    machines,
    cheatsheets,
    soundEnabled,
    batchUpdateMachineStatus,
    userSolvesReset,
    resetSolvesToZero,
    restoreDanielSolves,
  } = useCtfStore();

  const [activeTab, setActiveTab] = useState<'backup' | 'bulk_pwn'>('backup');

  // JSON Backup / Restore State
  const [importText, setImportText] = useState('');
  const [copied, setCopied] = useState(false);
  const [redactSecrets, setRedactSecrets] = useState(true);
  const [exportScope, setExportScope] = useState<'all' | 'targets' | 'cheatsheets' | 'notes'>('all');
  const [integrityStatus, setIntegrityStatus] = useState<{
    status: 'none' | 'verified' | 'mismatch' | 'legacy';
    hash?: string;
  }>({ status: 'none' });
  const [panicWiped, setPanicWiped] = useState(false);
  const [isExportingVault, setIsExportingVault] = useState(false);
  const [importStatus, setImportStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  // Encrypted Backup (.zerobox.enc) State
  const [encExportPassword, setEncExportPassword] = useState('');
  const [encExportPasswordConfirm, setEncExportPasswordConfirm] = useState('');
  const [showEncExportPass, setShowEncExportPass] = useState(false);
  const [isExportingEnc, setIsExportingEnc] = useState(false);
  const [encExportError, setEncExportError] = useState('');

  // Encrypted Import State
  const [pendingEncryptedBuffer, setPendingEncryptedBuffer] = useState<ArrayBuffer | null>(null);
  const [encImportPassword, setEncImportPassword] = useState('');
  const [showEncImportPass, setShowEncImportPass] = useState(false);
  const [isImportingEnc, setIsImportingEnc] = useState(false);
  const [encImportError, setEncImportError] = useState('');

  // Bulk Pwn Importer State
  const [bulkInputText, setBulkInputText] = useState('');
  const [targetStatus, setTargetStatus] = useState<PipelineStatus>('completed');
  const [bulkApplied, setBulkApplied] = useState(false);
  const [showExportGuide, setShowExportGuide] = useState(false);
  const [copiedSnippet, setCopiedSnippet] = useState<'htb' | 'thm' | null>(null);

  const handleCopyHtbSnippet = async () => {
    const code = `copy(Array.from(document.querySelectorAll('a[href*="/machines/"]')).map(e => e.innerText.trim()).filter(n => n.length > 2 && !n.includes('\\n')).filter((v, i, a) => a.indexOf(v) === i).join('\\n')); console.log('Copied HTB machines to clipboard!');`;
    await safeCopyToClipboard(code);
    setCopiedSnippet('htb');
    setTimeout(() => setCopiedSnippet(null), 2000);
    if (soundEnabled) playCyberSound('copy');
  };

  const handleCopyThmSnippet = async () => {
    const code = `copy(Array.from(document.querySelectorAll('div, a, span')).map(e => e.innerText.trim()).filter(t => t.length > 2 && t.length < 30 && !t.includes('\\n')).filter((v, i, a) => a.indexOf(v) === i).join('\\n')); console.log('Copied THM rooms to clipboard!');`;
    await safeCopyToClipboard(code);
    setCopiedSnippet('thm');
    setTimeout(() => setCopiedSnippet(null), 2000);
    if (soundEnabled) playCyberSound('copy');
  };

  // Compute parsed candidates and matches
  const candidates = useMemo(() => extractCandidateNames(bulkInputText), [bulkInputText]);
  const parseResult = useMemo(() => matchCandidateNamesToCatalog(candidates, machines), [candidates, machines]);
  const solvedCount = useMemo(() => {
    return machines.filter((m) => m.status === 'completed' || m.status === 'foothold').length;
  }, [machines]);

  if (!backupModalOpen) return null;

  const generateScopedJsonWithChecksum = async () => {
    const rawJson = exportBackup({ redactSecrets, scope: exportScope });
    try {
      const parsed = JSON.parse(rawJson);
      const hash = await computeSha256(JSON.stringify(parsed));
      parsed.checksum = `sha256:${hash}`;
      return JSON.stringify(parsed, null, 2);
    } catch {
      return rawJson;
    }
  };

  const handleDownloadBackup = async () => {
    const jsonStr = await generateScopedJsonWithChecksum();
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    const dateStr = new Date().toISOString().slice(0, 10);
    const scopeTag = exportScope !== 'all' ? `_${exportScope}` : '';
    link.download = `zerobox${scopeTag}_backup_${redactSecrets ? 'redacted_' : ''}${dateStr}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    if (soundEnabled) playCyberSound('root');
  };

  const handleDownloadEncryptedBackup = async () => {
    if (!encExportPassword) {
      setEncExportError('Please enter an encryption passphrase.');
      return;
    }
    if (encExportPassword.length < 6) {
      setEncExportError('Passphrase must be at least 6 characters for robust cryptographic security.');
      return;
    }
    if (encExportPassword !== encExportPasswordConfirm) {
      setEncExportError('Passphrases do not match. Please re-type.');
      return;
    }

    try {
      setIsExportingEnc(true);
      setEncExportError('');
      const blob = await exportEncryptedBackup(encExportPassword);
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      const dateStr = new Date().toISOString().slice(0, 10);
      link.download = `zerobox_vault_secure_${dateStr}.zerobox.enc`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
      if (soundEnabled) playCyberSound('root');
      setEncExportPassword('');
      setEncExportPasswordConfirm('');
    } catch (err: any) {
      setEncExportError(err?.message || 'Encryption failed.');
    } finally {
      setIsExportingEnc(false);
    }
  };

  const handleDecryptAndImport = async () => {
    if (!pendingEncryptedBuffer) return;
    if (!encImportPassword) {
      setEncImportError('Please enter the vault password.');
      return;
    }

    setIsImportingEnc(true);
    setEncImportError('');
    try {
      const success = await importEncryptedBackup(pendingEncryptedBuffer, encImportPassword);
      if (success) {
        setImportStatus('success');
        setPendingEncryptedBuffer(null);
        setEncImportPassword('');
        if (soundEnabled) playCyberSound('root');
        setTimeout(() => {
          setBackupModalOpen(false);
          setImportStatus('idle');
        }, 1500);
      } else {
        setEncImportError('Decryption succeeded, but imported structure was invalid.');
      }
    } catch (err: any) {
      setEncImportError(err?.message || 'Decryption failed: incorrect password or corrupted file.');
    } finally {
      setIsImportingEnc(false);
    }
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

  const modalContainerRef = useRef<HTMLDivElement>(null);

  useModalA11y({
    isOpen: backupModalOpen,
    onClose: () => setBackupModalOpen(false),
    modalRef: modalContainerRef,
  });

  const handleCopyBackup = async () => {
    const jsonStr = await generateScopedJsonWithChecksum();
    await safeCopyToClipboard(jsonStr);
    setCopied(true);
    if (soundEnabled) playCyberSound('copy');
    setTimeout(() => setCopied(false), 2000);
  };

  useEffect(() => {
    if (!importText.trim()) {
      setIntegrityStatus({ status: 'none' });
      return;
    }

    let isMounted = true;
    const checkIntegrity = async () => {
      try {
        const parsed = JSON.parse(importText);
        if (parsed && typeof parsed === 'object' && parsed.checksum && typeof parsed.checksum === 'string') {
          const expected = parsed.checksum.replace(/^sha256:/i, '').trim();
          const clone = { ...parsed };
          delete clone.checksum;
          const computed = await computeSha256(JSON.stringify(clone));
          if (isMounted) {
            if (computed.toLowerCase() === expected.toLowerCase()) {
              setIntegrityStatus({ status: 'verified', hash: computed });
            } else {
              setIntegrityStatus({ status: 'mismatch', hash: computed });
            }
          }
        } else if (parsed && typeof parsed === 'object' && (parsed.machines || parsed.cheatsheets || parsed.userNotes)) {
          if (isMounted) setIntegrityStatus({ status: 'legacy' });
        } else {
          if (isMounted) setIntegrityStatus({ status: 'none' });
        }
      } catch {
        if (isMounted) setIntegrityStatus({ status: 'none' });
      }
    };

    checkIntegrity();
    return () => {
      isMounted = false;
    };
  }, [importText]);

  const handlePanicWipe = () => {
    if (confirm('🚨 EMERGENCY OPSEC PURGE: Are you sure you want to scrub the active session? This will immediately clear the active target, stop timers, and wipe temporary IPs/tokens from memory.')) {
      panicWipeActiveSession();
      setPanicWiped(true);
      if (soundEnabled) playCyberSound('engage');
      setTimeout(() => setPanicWiped(false), 3000);
    }
  };

  const MAX_BACKUP_FILE_BYTES = 10 * 1024 * 1024; // 10MB limit

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > MAX_BACKUP_FILE_BYTES) {
      setImportStatus('error');
      setErrorMessage(`Backup file is too large (${(file.size / (1024 * 1024)).toFixed(1)}MB). Maximum allowed size is 10MB.`);
      e.target.value = '';
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      const buffer = event.target?.result as ArrayBuffer;
      if (!buffer) return;

      if (isEncryptedZeroboxBackup(buffer)) {
        setPendingEncryptedBuffer(buffer);
        setEncImportPassword('');
        setEncImportError('');
        setImportStatus('idle');
      } else {
        try {
          const dec = new TextDecoder('utf-8');
          const content = dec.decode(buffer);
          setPendingEncryptedBuffer(null);
          setImportText(content);
        } catch {
          setImportStatus('error');
          setErrorMessage('Could not decode file as UTF-8 text.');
        }
      }
    };
    reader.onerror = () => {
      setImportStatus('error');
      setErrorMessage('Failed to read file contents.');
    };
    reader.readAsArrayBuffer(file);
    e.target.value = '';
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

  const handleResetSolvesToZero = () => {
    if (window.confirm('Start Fresh CTF Journey?\n\nThis will reset all 945 targets to unsolved (0% progress) so you can track your own personal solves from scratch.\n\nYou can restore Daniel Dayan\'s 63 baseline solves at any time with 1 click.')) {
      resetSolvesToZero();
      if (soundEnabled) playCyberSound('root');
    }
  };

  const handleRestoreDanielSolves = () => {
    if (window.confirm('Restore Daniel Dayan\'s Baseline Solves?\n\nThis will load Daniel Dayan\'s 55 verified completed solves (37 HTB + 18 THM + 6 footholds) with flags, timestamps, and notes.')) {
      restoreDanielSolves();
      triggerRootCelebration();
      if (soundEnabled) playCyberSound('flag');
    }
  };

  const modalContent = (
    <div 
      className="fixed inset-0 z-[120] flex items-center justify-center p-0 sm:p-4 bg-black/85 backdrop-blur-md animate-fade-in font-mono"
      onClick={() => setBackupModalOpen(false)}
      role="dialog"
      aria-modal="true"
      aria-labelledby="backup-modal-title"
    >
      <div 
        ref={modalContainerRef}
        className="w-full sm:max-w-2xl h-full sm:h-auto sm:max-h-[90vh] flex flex-col rounded-none sm:rounded-xl border-0 sm:border border-slate-200 dark:border-cyber-border bg-white dark:bg-cyber-card shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex-shrink-0 flex items-center justify-between border-b border-slate-200 dark:border-cyber-border p-4 bg-slate-50 dark:bg-cyber-bg/95">
          <div className="flex items-center gap-2.5">
            <Database className="w-5 h-5 text-purple-600 dark:text-cyber-purple" />
            <h3 id="backup-modal-title" className="text-base font-bold text-slate-900 dark:text-white tracking-wide">
              DATA OPERATIONS & BULK SYNC STATION
            </h3>
          </div>
          <button
            onClick={() => setBackupModalOpen(false)}
            aria-label="Close modal"
            className="p-1.5 rounded bg-slate-100 dark:bg-cyber-bg text-slate-600 dark:text-cyber-muted hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-cyber-border transition-all"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center border-b border-slate-200 dark:border-cyber-border bg-slate-100 dark:bg-[#0a0f1d] px-4 pt-2 gap-2 flex-shrink-0 text-xs">
          <button
            onClick={() => {
              setActiveTab('backup');
              if (soundEnabled) playCyberSound('click');
            }}
            className={`px-3 py-2 rounded-t-lg font-bold transition-all flex items-center gap-1.5 border-t border-x ${
              activeTab === 'backup'
                ? 'bg-white dark:bg-cyber-card text-slate-900 dark:text-white border-purple-500 border-b-transparent shadow-sm'
                : 'text-slate-600 dark:text-cyber-muted hover:text-slate-900 dark:hover:text-white border-transparent'
            }`}
          >
            <Package className="w-3.5 h-3.5 text-purple-600 dark:text-cyber-purple" />
            <span>State Backup & Vault</span>
          </button>

          <button
            onClick={() => {
              setActiveTab('bulk_pwn');
              if (soundEnabled) playCyberSound('click');
            }}
            className={`px-3 py-2 rounded-t-lg font-bold transition-all flex items-center gap-1.5 border-t border-x ${
              activeTab === 'bulk_pwn'
                ? 'bg-white dark:bg-cyber-card text-slate-900 dark:text-white border-emerald-500 border-b-transparent shadow-sm'
                : 'text-slate-600 dark:text-cyber-muted hover:text-slate-900 dark:hover:text-white border-transparent'
            }`}
          >
            <Zap className="w-3.5 h-3.5 text-emerald-600 dark:text-cyber-emerald" />
            <span>Bulk Pwn Importer (HTB / THM)</span>
            <span className="px-1.5 py-0.2 text-[9px] rounded bg-emerald-100 dark:bg-cyber-emerald/20 text-emerald-800 dark:text-cyber-emerald font-black">
              NEW
            </span>
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-5 space-y-5 text-xs scrollbar-thin">
          
          {activeTab === 'backup' ? (
            <>
              {/* Mode B: Cryptographic Encrypted Vault Backup (.zerobox.enc) */}
              <div className="p-4 rounded-xl bg-gradient-to-r from-cyber-emerald/10 via-cyber-card to-cyber-bg border border-cyber-emerald/40 space-y-3.5 shadow-sm">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-cyber-emerald" />
                    <span className="font-bold text-slate-900 dark:text-white text-sm">
                      Encrypted Secure Backup (.zerobox.enc)
                    </span>
                    <span className="text-[9px] px-2 py-0.5 rounded bg-cyber-emerald/20 text-cyber-emerald font-black border border-cyber-emerald/40">
                      RECOMMENDED · OPSEC SECURE
                    </span>
                  </div>
                  <span className="text-[10px] text-cyber-muted font-mono">
                    AES-256-GCM · PBKDF2 (600k rounds)
                  </span>
                </div>

                <p className="text-slate-600 dark:text-gray-300 text-[11px] leading-relaxed">
                  Creates an offline, military-grade encrypted vault of your entire CTF profile. 
                  Unlike shared JSON files, this preserves <strong>all cracked credentials, passwords, tokens, private notes, and custom targets unredacted</strong>, sealed entirely inside your browser using Web Crypto API.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 font-mono text-xs">
                  <div className="relative">
                    <input
                      type={showEncExportPass ? 'text' : 'password'}
                      value={encExportPassword}
                      onChange={(e) => setEncExportPassword(e.target.value)}
                      placeholder="Passphrase (min 6 chars)..."
                      className="w-full p-2 rounded bg-slate-50 dark:bg-cyber-bg border border-slate-200 dark:border-cyber-border text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-cyber-muted text-xs focus:outline-none focus:border-emerald-500 pr-8"
                    />
                    <button
                      type="button"
                      onClick={() => setShowEncExportPass(!showEncExportPass)}
                      className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-500 dark:text-cyber-muted hover:text-slate-900 dark:hover:text-white"
                      title={showEncExportPass ? 'Hide passphrase' : 'Show passphrase'}
                    >
                      {showEncExportPass ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                  <div>
                    <input
                      type={showEncExportPass ? 'text' : 'password'}
                      value={encExportPasswordConfirm}
                      onChange={(e) => setEncExportPasswordConfirm(e.target.value)}
                      placeholder="Confirm passphrase..."
                      className="w-full p-2 rounded bg-slate-50 dark:bg-cyber-bg border border-slate-200 dark:border-cyber-border text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-cyber-muted text-xs focus:outline-none focus:border-emerald-500"
                    />
                  </div>
                </div>

                {encExportError && (
                  <div className="flex items-center gap-2 text-rose-600 dark:text-cyber-crimson text-xs font-mono">
                    <AlertTriangle className="w-3.5 h-3.5 flex-shrink-0" />
                    <span>{encExportError}</span>
                  </div>
                )}

                <div className="flex items-center justify-between flex-wrap gap-2 pt-1">
                  <button
                    disabled={isExportingEnc || !encExportPassword}
                    onClick={handleDownloadEncryptedBackup}
                    className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-emerald-600 dark:bg-cyber-emerald text-white dark:text-black font-bold hover:bg-emerald-500 dark:hover:bg-emerald-400 transition-all shadow-glow-emerald disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    <Lock className="w-3.5 h-3.5" />
                    <span>{isExportingEnc ? 'Encrypting Vault...' : 'Download Encrypted Vault (.zerobox.enc)'}</span>
                  </button>
                  <span className="text-[10px] text-slate-500 dark:text-cyber-muted italic">
                    *Zero server transmissions. Cannot be cracked without your passphrase.
                  </span>
                </div>
              </div>

              {/* Mode A: Team Sharing / Sanitized JSON */}
              <div className="p-3.5 rounded-lg bg-slate-50 dark:bg-cyber-bg border border-slate-200 dark:border-cyber-border space-y-3">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <div>
                    <span className="font-bold text-slate-900 dark:text-white text-sm block">Team Sharing & JSON Export</span>
                    <span className="text-slate-600 dark:text-cyber-muted text-[11px]">
                      Export unencrypted JSON for team collaboration, diffing, or cross-browser transfer.
                    </span>
                  </div>
                </div>

                {/* Redaction Security Option */}
                <label className="flex items-center gap-2 cursor-pointer select-none text-[11px] text-slate-700 dark:text-cyber-muted hover:text-slate-900 dark:hover:text-white pt-0.5">
                  <input
                    type="checkbox"
                    checked={redactSecrets}
                    onChange={(e) => setRedactSecrets(e.target.checked)}
                    className="w-3.5 h-3.5 rounded border-slate-300 dark:border-cyber-border text-emerald-600 focus:ring-0 bg-white dark:bg-cyber-bg cursor-pointer"
                  />
                  <span className="flex items-center gap-1.5">
                    <Shield className="w-3.5 h-3.5 text-emerald-600 dark:text-cyber-emerald" />
                    <span>Redact sensitive credentials (LHOST, target IPs, passwords, hashes & tokens)</span>
                  </span>
                </label>

                {/* Export Scope Selector */}
                <div className="space-y-1.5 pt-1">
                  <div className="text-[10px] text-slate-500 dark:text-cyber-muted uppercase tracking-wider font-bold">
                    Export Scope:
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5">
                    {[
                      { id: 'all', label: '🌐 Full Profile', desc: 'All targets, notes & cheatsheets' },
                      { id: 'targets', label: '🎯 Targets Only', desc: 'Machine catalog & solves' },
                      { id: 'cheatsheets', label: '📚 Cheatsheets', desc: 'Commands & methodologies' },
                      { id: 'notes', label: '📝 Obsidian Notes', desc: 'Custom notes & links' },
                    ].map((scopeOption) => (
                      <button
                        key={scopeOption.id}
                        type="button"
                        onClick={() => setExportScope(scopeOption.id as any)}
                        className={`p-2 rounded-lg border text-left transition-all ${
                          exportScope === scopeOption.id
                            ? 'bg-purple-100 dark:bg-cyber-purple/20 border-purple-400 dark:border-cyber-purple text-purple-950 dark:text-white shadow-sm'
                            : 'bg-white dark:bg-cyber-card/60 border-slate-200 dark:border-cyber-border/70 text-slate-600 dark:text-cyber-muted hover:text-slate-900 dark:hover:text-white hover:border-slate-300 dark:hover:border-cyber-border'
                        }`}
                      >
                        <div className="font-bold text-[11px]">{scopeOption.label}</div>
                        <div className="text-[9px] text-slate-500 dark:text-cyber-muted leading-tight mt-0.5">{scopeOption.desc}</div>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-2 pt-1">
                  <button
                    onClick={handleDownloadBackup}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-purple-600 hover:bg-purple-700 text-white font-bold transition-all shadow-glow-purple"
                  >
                    <Download className="w-3.5 h-3.5" /> Download JSON File
                  </button>
                  <button
                    onClick={handleCopyBackup}
                    className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-white dark:bg-cyber-card border border-slate-200 dark:border-cyber-border text-slate-800 dark:text-white hover:border-purple-400 transition-all"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-cyber-emerald" />
                        <span className="text-emerald-700 dark:text-cyber-emerald font-bold">Copied JSON!</span>
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

              {/* Section 1C: Export as Standalone Obsidian Vault (.zip) */}
              <div className="p-3.5 rounded-lg bg-purple-50/50 dark:bg-purple-950/20 border border-purple-200 dark:border-purple-800/40 space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-purple-950 dark:text-purple-300 text-sm block">1-Click Obsidian Vault Export (.zip)</span>
                      <span className="text-[10px] px-2 py-0.2 rounded bg-purple-100 dark:bg-purple-900/60 border border-purple-300 dark:border-purple-700/50 text-purple-900 dark:text-purple-200 font-bold uppercase">
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

              {/* Section 2: Restore / Import */}
              <div className="p-3.5 rounded-lg bg-slate-50 dark:bg-cyber-bg border border-slate-200 dark:border-cyber-border space-y-3">
                <div>
                  <span className="font-bold text-slate-900 dark:text-white text-sm block">Restore / Import State</span>
                  <span className="text-slate-600 dark:text-cyber-muted text-[11px]">
                    Restore from an encrypted vault file (.zerobox.enc) or upload/paste a standard JSON backup.
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <label className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-cyber-card border border-slate-200 dark:border-cyber-border text-slate-800 dark:text-white hover:border-cyan-500 cursor-pointer transition-all">
                    <Upload className="w-3.5 h-3.5 text-cyan-600 dark:text-cyber-cyan" />
                    <span>Upload Backup File (.json / .zerobox.enc)</span>
                    <input
                      id="backup-upload-json-file"
                      name="backup-upload-json-file"
                      aria-label="Upload backup file"
                      type="file"
                      accept=".json,.enc,.zerobox.enc,application/json,application/octet-stream"
                      onChange={handleFileUpload}
                      className="hidden"
                    />
                  </label>
                </div>

                {/* If Encrypted Vault Backup Detected */}
                {pendingEncryptedBuffer ? (
                  <div className="p-3.5 rounded-lg bg-amber-50/70 dark:bg-amber-500/10 border border-amber-300 dark:border-amber-500/40 space-y-3 font-mono">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-amber-900 dark:text-amber-300 font-bold">
                        <Lock className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                        <span>ENCRYPTED ZEROBOX VAULT DETECTED</span>
                      </div>
                      <button
                        type="button"
                        onClick={() => {
                          setPendingEncryptedBuffer(null);
                          setEncImportPassword('');
                          setEncImportError('');
                        }}
                        className="text-[10px] text-slate-500 dark:text-cyber-muted hover:text-slate-900 dark:hover:text-white"
                      >
                        Cancel / Change File ✕
                      </button>
                    </div>

                    <p className="text-[11px] text-slate-600 dark:text-gray-300 leading-relaxed font-sans">
                      This file is protected by AES-256-GCM authenticated encryption. Enter the passphrase you used when creating the vault:
                    </p>

                    <div className="flex items-center gap-2">
                      <div className="relative flex-1">
                        <input
                          type={showEncImportPass ? 'text' : 'password'}
                          value={encImportPassword}
                          onChange={(e) => setEncImportPassword(e.target.value)}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                              e.preventDefault();
                              handleDecryptAndImport();
                            }
                          }}
                          placeholder="Enter vault passphrase..."
                          className="w-full p-2.5 rounded bg-white dark:bg-cyber-card border border-amber-400/60 dark:border-amber-500/50 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-cyber-muted text-xs focus:outline-none focus:border-amber-500 pr-8"
                        />
                        <button
                          type="button"
                          onClick={() => setShowEncImportPass(!showEncImportPass)}
                          className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-500 dark:text-cyber-muted hover:text-slate-900 dark:hover:text-white"
                        >
                          {showEncImportPass ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                        </button>
                      </div>

                      <button
                        disabled={isImportingEnc || !encImportPassword}
                        onClick={handleDecryptAndImport}
                        className="px-4 py-2 rounded-lg bg-emerald-600 dark:bg-cyber-emerald text-white dark:text-black font-bold hover:bg-emerald-500 dark:hover:bg-emerald-400 transition-all shadow-glow-emerald disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-1.5"
                      >
                        <Key className="w-3.5 h-3.5" />
                        <span>{isImportingEnc ? 'Decrypting...' : 'Unlock & Restore'}</span>
                      </button>
                    </div>

                    {encImportError && (
                      <div className="flex items-center gap-2 text-rose-600 dark:text-cyber-crimson text-xs">
                        <AlertTriangle className="w-4 h-4 flex-shrink-0" />
                        <span>{encImportError}</span>
                      </div>
                    )}
                  </div>
                ) : (
                  <>
                    <textarea
                      id="backup-import-json-text"
                      name="backup-import-json-text"
                      aria-label="Paste JSON backup content"
                      rows={4}
                      value={importText}
                      onChange={(e) => setImportText(e.target.value)}
                      placeholder="Or paste exported JSON content directly here..."
                      className="w-full p-2.5 rounded bg-white dark:bg-cyber-card border border-slate-200 dark:border-cyber-border text-xs text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-cyber-muted focus:outline-none focus:border-cyan-500 resize-none font-mono"
                    />

                    {/* Integrity Checksum Banner */}
                    {integrityStatus.status === 'verified' && (
                      <div className="flex items-center gap-2 p-2 rounded-lg bg-emerald-100 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-500/40 text-emerald-900 dark:text-emerald-300 text-xs">
                        <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                        <div className="flex-1 min-w-0">
                          <div className="font-bold">SHA-256 Integrity Verified</div>
                          <div className="text-[10px] text-emerald-700 dark:text-emerald-400/80 font-mono truncate">
                            Digest: {integrityStatus.hash}
                          </div>
                        </div>
                      </div>
                    )}
                    {integrityStatus.status === 'mismatch' && (
                      <div className="flex items-center gap-2 p-2 rounded-lg bg-rose-100 dark:bg-rose-950/40 border border-rose-300 dark:border-rose-500/50 text-rose-800 dark:text-rose-300 text-xs">
                        <AlertTriangle className="w-4 h-4 text-rose-600 dark:text-rose-400 flex-shrink-0" />
                        <div className="flex-1 min-w-0">
                          <div className="font-bold">Warning: SHA-256 Checksum Mismatch!</div>
                          <div className="text-[10px] text-rose-700 dark:text-rose-400/80">
                            Payload data differs from signature — content may have been modified or corrupted.
                          </div>
                        </div>
                      </div>
                    )}
                    {integrityStatus.status === 'legacy' && (
                      <div className="flex items-center gap-2 p-1.5 rounded-lg bg-blue-100 dark:bg-blue-950/30 border border-blue-300 dark:border-blue-500/30 text-blue-900 dark:text-blue-300 text-xs">
                        <Sparkles className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                        <span className="text-[11px]">Legacy Schema Detected (Valid Format)</span>
                      </div>
                    )}

                    {importStatus === 'error' && (
                      <div className="flex items-center gap-2 text-rose-600 dark:text-cyber-crimson text-xs">
                        <AlertTriangle className="w-4 h-4 flex-shrink-0" />
                        <span>{errorMessage}</span>
                      </div>
                    )}

                    {importStatus === 'success' && (
                      <div className="flex items-center gap-2 text-emerald-600 dark:text-cyber-emerald text-xs">
                        <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                        <span>State restored successfully! Refreshing...</span>
                      </div>
                    )}

                    <button
                      disabled={!importText.trim()}
                      onClick={handleExecuteImport}
                      className="px-3.5 py-1.5 rounded-lg bg-cyan-100 dark:bg-cyber-cyan/15 text-cyan-900 dark:text-cyber-cyan border border-cyan-300 dark:border-cyber-cyan/40 hover:bg-cyan-500 hover:text-white dark:hover:bg-cyber-cyan dark:hover:text-black font-bold transition-all disabled:opacity-40 disabled:cursor-not-allowed"
                    >
                      Import & Apply
                    </button>
                  </>
                )}
              </div>

              {/* Section 2.5: Operator Solves Lifecycle */}
              <div className="p-3.5 rounded-lg bg-slate-50 dark:bg-cyber-bg border border-slate-200 dark:border-cyber-border space-y-3">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-slate-900 dark:text-white text-sm block">Operator Solves Lifecycle</span>
                      {userSolvesReset ? (
                        <span className="text-[10px] px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-500/20 border border-blue-300 dark:border-blue-500/40 text-blue-900 dark:text-blue-300 font-bold uppercase">
                          Personal Mode (0% Baseline)
                        </span>
                      ) : (
                        <span className="text-[10px] px-2 py-0.5 rounded bg-amber-100 dark:bg-amber-500/20 border border-amber-300 dark:border-amber-500/40 text-amber-900 dark:text-amber-300 font-bold uppercase">
                          Daniel Dayan Baseline (55 Solves)
                        </span>
                      )}
                    </div>
                    <span className="text-slate-600 dark:text-cyber-muted text-[11px] block mt-0.5">
                      Switch between tracking your own CTF journey from 0% or exploring Daniel Dayan's verified baseline solves. Currently solved: <strong className="text-emerald-700 dark:text-cyber-emerald">{solvedCount} targets</strong>.
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  <div className="p-3 rounded-lg bg-white dark:bg-cyber-card border border-slate-200 dark:border-cyber-border/70 space-y-2 flex flex-col justify-between">
                    <div>
                      <div className="font-bold text-slate-900 dark:text-white text-xs flex items-center gap-1.5">
                        <RotateCcw className="w-3.5 h-3.5 text-cyan-600 dark:text-cyber-cyan" />
                        <span>Start Fresh (Own Solves)</span>
                      </div>
                      <p className="text-slate-600 dark:text-cyber-muted text-[10px] leading-relaxed mt-1">
                        Wipes solved flags & statuses so newcomers can start at 0% and track their own machine conquests.
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={handleResetSolvesToZero}
                      className="w-full py-1.5 px-3 rounded-lg bg-cyan-100 dark:bg-cyber-cyan/15 hover:bg-cyan-500 hover:text-white dark:hover:bg-cyber-cyan dark:hover:text-black border border-cyan-300 dark:border-cyber-cyan/40 text-cyan-900 dark:text-cyber-cyan text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>Reset Solves to 0%</span>
                    </button>
                  </div>

                  <div className="p-3 rounded-lg bg-white dark:bg-cyber-card border border-slate-200 dark:border-cyber-border/70 space-y-2 flex flex-col justify-between">
                    <div>
                      <div className="font-bold text-slate-900 dark:text-white text-xs flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-amber-600 dark:text-cyber-amber" />
                        <span>Restore Daniel's Solves</span>
                      </div>
                      <p className="text-slate-600 dark:text-cyber-muted text-[10px] leading-relaxed mt-1">
                        Instantly restores Daniel Dayan's 55 verified completed solves (37 HTB + 18 THM + 6 footholds) with flags, timestamps, and notes.
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={handleRestoreDanielSolves}
                      className="w-full py-1.5 px-3 rounded-lg bg-amber-100 dark:bg-cyber-amber/15 hover:bg-amber-500 hover:text-white dark:hover:bg-cyber-amber dark:hover:text-black border border-amber-300 dark:border-cyber-amber/40 text-amber-900 dark:text-cyber-amber text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Restore Daniel Dayan (55 Solves)</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Section 3: Danger Zone */}
              <div className="p-3.5 rounded-lg bg-rose-50/50 dark:bg-rose-950/15 border border-rose-200 dark:border-rose-900/30 space-y-3">
                <div className="flex items-center gap-2 text-rose-700 dark:text-cyber-crimson">
                  <AlertTriangle className="w-4 h-4" />
                  <span className="font-bold text-sm">Danger Zone: Session Purge & Factory Reset</span>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="p-3 rounded-lg bg-white dark:bg-cyber-card border border-slate-200 dark:border-cyber-border/70 space-y-2 flex flex-col justify-between">
                    <div>
                      <div className="font-bold text-slate-900 dark:text-white text-xs flex items-center gap-1.5">
                        <ShieldAlert className="w-3.5 h-3.5 text-amber-600 dark:text-cyber-amber" />
                        <span>OPSEC Panic Session Wipe</span>
                      </div>
                      <p className="text-slate-600 dark:text-cyber-muted text-[10px] leading-relaxed mt-1">
                        Immediately clears active target machine, stops timers, and resets temporary LHOST/RHOST and credential tokens from browser memory.
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={handlePanicWipe}
                      className="w-full py-1.5 px-3 rounded-lg bg-amber-100 dark:bg-amber-500/15 hover:bg-amber-500 hover:text-black border border-amber-300 dark:border-amber-500/40 text-amber-900 dark:text-amber-400 text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      {panicWiped ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-cyber-emerald" />
                          <span className="text-emerald-700 dark:text-cyber-emerald">Session Scrubbed Clean!</span>
                        </>
                      ) : (
                        <>
                          <ShieldAlert className="w-3.5 h-3.5" />
                          <span>Scrub Active Session</span>
                        </>
                      )}
                    </button>
                  </div>

                  <div className="p-3 rounded-lg bg-white dark:bg-cyber-card border border-slate-200 dark:border-cyber-border/70 space-y-2 flex flex-col justify-between">
                    <div>
                      <div className="font-bold text-slate-900 dark:text-white text-xs flex items-center gap-1.5">
                        <RotateCcw className="w-3.5 h-3.5 text-rose-600 dark:text-cyber-crimson" />
                        <span>Factory Reset Catalog</span>
                      </div>
                      <p className="text-slate-600 dark:text-cyber-muted text-[10px] leading-relaxed mt-1">
                        Resets all active flags, notes, custom machines, and restores catalog targets to default baseline.
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={handleResetProgress}
                      className="w-full py-1.5 px-3 rounded-lg bg-rose-100 dark:bg-cyber-crimson/20 border border-rose-300 dark:border-cyber-crimson/50 text-rose-800 dark:text-cyber-crimson hover:bg-rose-600 hover:text-white text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>Reset All Progress</span>
                    </button>
                  </div>
                </div>
              </div>
            </>
          ) : (
            /* BULK PWN IMPORTER TAB */
            <div className="space-y-4">
              <div className="p-3.5 rounded-xl bg-gradient-to-r from-cyber-emerald/15 via-cyber-card to-cyber-bg border border-cyber-emerald/40 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-slate-900 dark:text-white font-bold text-sm">
                    <Flame className="w-4 h-4 text-cyber-emerald" />
                    <span>Auto-Sync Solved Machines</span>
                  </div>
                  <button
                    onClick={handleSamplePwns}
                    className="px-2 py-1 rounded bg-slate-100 dark:bg-cyber-bg hover:bg-slate-200 dark:hover:bg-cyber-card border border-slate-300 dark:border-cyber-border text-[10px] text-cyan-800 dark:text-cyber-cyan font-semibold transition-all"
                  >
                    Load Sample Preset
                  </button>
                </div>
                <p className="text-slate-600 dark:text-gray-300 text-[11px] leading-relaxed">
                  Paste a list of machines you have already solved on <strong>Hack The Box</strong> or <strong>TryHackMe</strong> (comma separated, line-by-line, or exported CSV). 
                  ZeroBox will match them against the catalog of 945 targets and automatically mark them as solved in seconds.
                </p>
              </div>

              {/* Collapsible Help Accordion: How to grab solves from HTB / THM */}
              <div className="rounded-xl border border-slate-200 dark:border-cyber-border bg-slate-50 dark:bg-cyber-bg/70 overflow-hidden text-xs">
                <button
                  type="button"
                  onClick={() => setShowExportGuide(!showExportGuide)}
                  className="w-full flex items-center justify-between p-2.5 px-3.5 hover:bg-slate-100 dark:hover:bg-cyber-card/60 transition-colors text-left"
                >
                  <div className="flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-cyan-600 dark:text-cyber-cyan" />
                    <span className="font-bold text-slate-900 dark:text-white text-[11px]">
                      💡 HOW TO GRAB YOUR SOLVES FROM HTB OR THM (IN 5 SECONDS)
                    </span>
                  </div>
                  {showExportGuide ? (
                    <ChevronUp className="w-4 h-4 text-slate-500 dark:text-cyber-muted" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-slate-500 dark:text-cyber-muted" />
                  )}
                </button>

                {showExportGuide && (
                  <div className="p-3.5 pt-0 space-y-3 border-t border-slate-200 dark:border-cyber-border/60 bg-slate-100/80 dark:bg-[#080d1a]/80 text-[11px]">
                    {/* Method 1 */}
                    <div className="space-y-1">
                      <div className="font-bold text-emerald-700 dark:text-cyber-emerald flex items-center gap-1">
                        <span>1. The Simple Way (No Code // Highlight & Copy)</span>
                      </div>
                      <p className="text-slate-600 dark:text-cyber-muted leading-relaxed">
                        • <strong className="text-slate-900 dark:text-white">Hack The Box:</strong> Go to <em>Profile → Activity</em> (or <em>Labs → Machines → State: Owned</em>), select the machine names with your cursor, copy, and paste below.<br />
                        • <strong className="text-slate-900 dark:text-white">TryHackMe:</strong> Open <em>tryhackme.com/p/YOUR_USERNAME</em>, scroll to <em>Rooms Completed</em>, highlight the text, and paste below.
                      </p>
                    </div>

                    {/* Method 2: Browser Console Snippets */}
                    <div className="space-y-2">
                      <div className="font-bold text-cyan-700 dark:text-cyber-cyan flex items-center gap-1">
                        <Terminal className="w-3.5 h-3.5" />
                        <span>2. The 5-Second 1-Liner (DevTools Console)</span>
                      </div>
                      <p className="text-slate-600 dark:text-cyber-muted">
                        Press <kbd className="px-1 py-0.5 rounded bg-slate-200 dark:bg-cyber-card border border-slate-300 dark:border-cyber-border text-slate-850 dark:text-white text-[10px]">F12</kbd> on HTB or THM, click <strong>Console</strong>, and paste one of these snippets. It will copy all your solved machines directly to your clipboard:
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 font-mono">
                        {/* HTB Box */}
                        <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-cyber-bg border border-slate-200 dark:border-cyber-border space-y-1.5">
                          <div className="flex items-center justify-between">
                            <span className="text-emerald-700 dark:text-cyber-emerald font-bold text-[10px]">HACK THE BOX SNIPPET</span>
                            <button
                              type="button"
                              onClick={handleCopyHtbSnippet}
                              className="px-2 py-0.5 rounded bg-white dark:bg-cyber-card border border-slate-300 dark:border-cyber-border hover:border-emerald-500 text-slate-700 dark:text-cyber-muted hover:text-slate-900 dark:hover:text-white text-[10px] flex items-center gap-1 transition-all"
                            >
                              {copiedSnippet === 'htb' ? <Check className="w-3 h-3 text-emerald-600 dark:text-cyber-emerald" /> : <Copy className="w-3 h-3" />}
                              <span>{copiedSnippet === 'htb' ? 'Copied!' : 'Copy Script'}</span>
                            </button>
                          </div>
                          <pre className="text-[10px] text-slate-700 dark:text-cyber-muted overflow-x-auto p-1.5 rounded bg-slate-100 dark:bg-black/40 border border-slate-200 dark:border-cyber-border/40 whitespace-pre-wrap break-all">
                            copy(Array.from(document.querySelectorAll('a[href*="/machines/"]')).map(e=&gt;e.innerText.trim()).filter(n=&gt;n.length&gt;2&amp;&amp;!n.includes('\n')).filter((v,i,a)=&gt;a.indexOf(v)===i).join('\n'))
                          </pre>
                        </div>

                        {/* THM Box */}
                        <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-cyber-bg border border-slate-200 dark:border-cyber-border space-y-1.5">
                          <div className="flex items-center justify-between">
                            <span className="text-rose-700 dark:text-cyber-crimson font-bold text-[10px]">TRYHACKME SNIPPET</span>
                            <button
                              type="button"
                              onClick={handleCopyThmSnippet}
                              className="px-2 py-0.5 rounded bg-white dark:bg-cyber-card border border-slate-300 dark:border-cyber-border hover:border-rose-500 text-slate-700 dark:text-cyber-muted hover:text-slate-900 dark:hover:text-white text-[10px] flex items-center gap-1 transition-all"
                            >
                              {copiedSnippet === 'thm' ? <Check className="w-3 h-3 text-emerald-600 dark:text-cyber-emerald" /> : <Copy className="w-3 h-3" />}
                              <span>{copiedSnippet === 'thm' ? 'Copied!' : 'Copy Script'}</span>
                            </button>
                          </div>
                          <pre className="text-[10px] text-slate-700 dark:text-cyber-muted overflow-x-auto p-1.5 rounded bg-slate-100 dark:bg-black/40 border border-slate-200 dark:border-cyber-border/40 whitespace-pre-wrap break-all">
                            copy(Array.from(document.querySelectorAll('div, a, span')).map(e=&gt;e.innerText.trim()).filter(t=&gt;t.length&gt;2&amp;&amp;t.length&lt;30&amp;&amp;!t.includes('\n')).filter((v,i,a)=&gt;a.indexOf(v)===i).join('\n'))
                          </pre>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Target Status Selector */}
              <div className="flex items-center gap-3 bg-slate-50 dark:bg-cyber-bg p-2.5 rounded-xl border border-slate-200 dark:border-cyber-border">
                <span className="text-slate-600 dark:text-cyber-muted text-[11px] font-bold uppercase">Apply As:</span>
                <label className="flex items-center gap-1.5 cursor-pointer text-xs">
                  <input
                    id="bulk-status-completed"
                    aria-label="Mark targets as Completed Rooted"
                    type="radio"
                    name="targetStatus"
                    value="completed"
                    checked={targetStatus === 'completed'}
                    onChange={() => setTargetStatus('completed')}
                    className="text-emerald-600 dark:text-cyber-emerald focus:ring-0"
                  />
                  <span className={targetStatus === 'completed' ? 'text-emerald-700 dark:text-cyber-emerald font-bold' : 'text-slate-600 dark:text-cyber-muted'}>
                    👑 Completed (Rooted)
                  </span>
                </label>
                <label className="flex items-center gap-1.5 cursor-pointer text-xs">
                  <input
                    id="bulk-status-foothold"
                    aria-label="Mark targets as Foothold User Only"
                    type="radio"
                    name="targetStatus"
                    value="foothold"
                    checked={targetStatus === 'foothold'}
                    onChange={() => setTargetStatus('foothold')}
                    className="text-amber-600 dark:text-cyber-amber focus:ring-0"
                  />
                  <span className={targetStatus === 'foothold' ? 'text-amber-700 dark:text-cyber-amber font-bold' : 'text-slate-600 dark:text-cyber-muted'}>
                    🚩 Foothold (User Only)
                  </span>
                </label>
              </div>

              {/* Paste Text Area */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-[11px]">
                  <span className="text-slate-700 dark:text-cyber-muted font-bold">PASTE MACHINE NAMES / CSV:</span>
                  {candidates.length > 0 && (
                    <span className="text-cyan-700 dark:text-cyber-cyan font-bold">{candidates.length} candidate(s) detected</span>
                  )}
                </div>
                <textarea
                  id="bulk-import-machine-names"
                  name="bulk-import-machine-names"
                  aria-label="Paste machine names or CSV"
                  rows={5}
                  value={bulkInputText}
                  onChange={(e) => setBulkInputText(e.target.value)}
                  placeholder="Paste names here, e.g.:&#10;Lame&#10;Forest&#10;Sauna&#10;Shocker&#10;Blue"
                  className="w-full p-3 rounded-xl bg-slate-50 dark:bg-cyber-bg border border-slate-200 dark:border-cyber-border text-xs text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-cyber-muted focus:outline-none focus:border-emerald-500 resize-none font-mono"
                />
              </div>

              {/* Live Parsing Telemetry Cards */}
              {candidates.length > 0 && (
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-cyber-bg border border-slate-200 dark:border-cyber-border text-center">
                    <div className="text-base font-bold text-slate-900 dark:text-white">{parseResult.totalInputTokens}</div>
                    <div className="text-[10px] text-slate-500 dark:text-cyber-muted uppercase">Detected</div>
                  </div>
                  <div className="p-2.5 rounded-lg bg-emerald-100 dark:bg-emerald-950/30 border border-emerald-300 dark:border-emerald-800/40 text-center">
                    <div className="text-base font-bold text-emerald-800 dark:text-cyber-emerald">{parseResult.allMatches.length}</div>
                    <div className="text-[10px] text-emerald-700 dark:text-emerald-400 uppercase">Matched</div>
                  </div>
                  <div className="p-2.5 rounded-lg bg-cyan-100 dark:bg-cyan-950/30 border border-cyan-300 dark:border-cyan-800/40 text-center">
                    <div className="text-base font-bold text-cyan-800 dark:text-cyber-cyan">{parseResult.newSolves.length}</div>
                    <div className="text-[10px] text-cyan-700 dark:text-cyan-400 uppercase">New Solves</div>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-cyber-bg border border-slate-200 dark:border-cyber-border text-center">
                    <div className="text-base font-bold text-slate-600 dark:text-cyber-muted">{parseResult.unmatched.length}</div>
                    <div className="text-[10px] text-slate-500 dark:text-cyber-muted uppercase">Unmatched</div>
                  </div>
                </div>
              )}

              {/* Matched Preview List */}
              {parseResult.allMatches.length > 0 && (
                <div className="space-y-1.5">
                  <div className="text-[10px] uppercase font-bold text-slate-700 dark:text-cyber-muted">
                    MATCHED CATALOG TARGETS ({parseResult.allMatches.length}):
                  </div>
                  <div className="max-h-36 overflow-y-auto space-y-1 p-2 rounded-lg bg-slate-50 dark:bg-cyber-bg border border-slate-200 dark:border-cyber-border text-[11px] scrollbar-thin">
                    {parseResult.allMatches.map((m) => {
                      const isAlready = m.currentStatus === 'completed' || m.currentStatus === 'root';
                      return (
                        <div key={m.machineId} className="flex items-center justify-between p-1 px-2 rounded hover:bg-slate-200 dark:hover:bg-cyber-card transition-colors">
                          <div className="flex items-center gap-2">
                            <span className={`px-1 rounded text-[9px] font-bold ${
                              m.platform === 'HTB' ? 'bg-emerald-100 dark:bg-cyber-emerald/20 text-emerald-800 dark:text-cyber-emerald' : 'bg-rose-100 dark:bg-cyber-crimson/20 text-rose-800 dark:text-cyber-crimson'
                            }`}>
                              {m.platform}
                            </span>
                            <span className="font-bold text-slate-900 dark:text-white">{m.machineName}</span>
                            <span className="text-[10px] text-slate-500 dark:text-cyber-muted">({m.difficulty})</span>
                          </div>
                          <div className="flex items-center gap-1.5 text-[10px]">
                            {isAlready ? (
                              <span className="text-slate-500 dark:text-cyber-muted">Already Solved</span>
                            ) : (
                              <span className="text-emerald-700 dark:text-cyber-emerald font-bold">Will Mark Solved</span>
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
                <div className="p-2.5 rounded-lg bg-amber-100 dark:bg-amber-950/20 border border-amber-300 dark:border-amber-800/40 text-[11px] text-amber-900 dark:text-cyber-amber flex items-start gap-2">
                  <ShieldAlert className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block">Unmatched Items ({parseResult.unmatched.length}):</span>
                    <span className="text-slate-600 dark:text-cyber-muted truncate block">
                      {parseResult.unmatched.slice(0, 8).join(', ')}{parseResult.unmatched.length > 8 ? '...' : ''}
                    </span>
                  </div>
                </div>
              )}

              {/* Action Button */}
              <div className="flex items-center justify-between pt-2 border-t border-slate-200 dark:border-cyber-border">
                <span className="text-[10px] text-slate-500 dark:text-cyber-muted">
                  Preserves all custom notes and never deletes progress.
                </span>

                <button
                  onClick={handleApplyBulkSolves}
                  disabled={parseResult.newSolves.length === 0 || bulkApplied}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white shadow-glow-emerald disabled:opacity-40 disabled:cursor-not-allowed transition-all"
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

  return typeof document !== 'undefined' ? createPortal(modalContent, document.body) : modalContent;
};
