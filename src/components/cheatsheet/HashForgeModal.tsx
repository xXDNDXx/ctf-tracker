import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Hash,
  Key,
  Copy,
  Check,
  Zap,
  Terminal,
  Cpu,
  Flame,
  Shield,
  X,
  ExternalLink,
  ChevronRight,
  Sparkles,
} from 'lucide-react';
import { useCtfStore } from '../../store/useCtfStore';
import { CredentialItem } from '../../types';
import {
  analyzeAndIdentifyHash,
  HashCandidate,
  HashCrackCommands,
} from '../../utils/credentialAttackCrafter';
import { playCyberSound, safeCopyToClipboard } from '../../utils/helpers';
import { useModalA11y } from '../../hooks/useModalA11y';

const QUICK_SAMPLES = [
  {
    name: 'NTLM (Admin)',
    hash: '31d6cfe0d16ae931b73c59d7e0c089c0',
    type: 'Windows SAM / NTDS',
  },
  {
    name: 'Kerberoast ($krb5tgs$)',
    hash: '$krb5tgs$23$*svc_sql*CORP.LOCAL*CORP.LOCAL/svc_sql*$8a4d7c...$1a2b3c4d5e...',
    type: 'Active Directory TGS',
  },
  {
    name: 'NetNTLMv2 (Responder)',
    hash: 'admin::CORP:1122334455667788:AABBCCDDEEFF00112233445566778899:0101000000000000...',
    type: 'SMB Challenge-Response',
  },
  {
    name: 'Linux Shadow ($6$)',
    hash: '$6$saltstring$9.uN...bH3v1xW5...86chars...',
    type: 'SHA-512 Crypt',
  },
  {
    name: 'bcrypt ($2a$)',
    hash: '$2a$12$R9h/cIPz0gi.URNNX3kh2OPST9/PgBkqquzi.Ss7KIUgO2t0jWMUW',
    type: 'Web Application',
  },
  {
    name: 'WordPress ($P$)',
    hash: '$P$B12345678abcdefghijklmnopqrstuv',
    type: 'phpass CMS',
  },
];

export const HashForgeModal: React.FC = () => {
  const {
    hashForgeModalOpen,
    hashForgeInitialHash,
    setHashForgeModalOpen,
    activeTargetId,
    machines,
    updateMachine,
  } = useCtfStore();

  const [inputHash, setInputHash] = useState('');
  const [analysis, setAnalysis] = useState<HashCrackCommands>(() => analyzeAndIdentifyHash(''));
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [sentToVault, setSentToVault] = useState(false);
  const modalContainerRef = useRef<HTMLDivElement>(null);

  useModalA11y({
    isOpen: hashForgeModalOpen,
    onClose: () => setHashForgeModalOpen(false),
    modalRef: modalContainerRef,
  });

  // Sync initial hash when modal opens
  useEffect(() => {
    if (hashForgeModalOpen) {
      const initial = hashForgeInitialHash || '';
      setInputHash(initial);
      setAnalysis(analyzeAndIdentifyHash(initial));
      setSentToVault(false);
    }
  }, [hashForgeModalOpen, hashForgeInitialHash]);

  // Update analysis on keystroke
  const handleInputChange = (val: string) => {
    setInputHash(val);
    setAnalysis(analyzeAndIdentifyHash(val));
    setSentToVault(false);
  };

  // 1-Click Copy Helper
  const handleCopy = async (id: string, text: string) => {
    const ok = await safeCopyToClipboard(text);
    if (ok) {
      setCopiedId(id);
      playCyberSound('copy');
      setTimeout(() => setCopiedId(null), 2000);
    }
  };

  // Close handler
  const handleClose = () => {
    setHashForgeModalOpen(false);
  };

  // Send Hash to Active Target Credential Vault
  const handleSendToVault = () => {
    if (!activeTargetId || !inputHash.trim()) return;
    const targetMachine = machines.find((m) => m.id === activeTargetId);
    if (!targetMachine) return;

    const topCandidate = analysis.candidates[0];
    const isNtlm = topCandidate?.hashcatMode === '1000';
    const isSha512 = topCandidate?.hashcatMode === '1800' || topCandidate?.hashcatMode === '7400';

    const currentCreds = targetMachine.credentials || [];
    const trimmedHash = inputHash.trim();
    const existingIndex = currentCreds.findIndex((c) => c.secret === trimmedHash);

    let updatedCreds: CredentialItem[];
    if (existingIndex >= 0) {
      // Avoid duplicate cards; enhance existing record with hash identification
      updatedCreds = currentCreds.map((c, i) =>
        i === existingIndex
          ? {
              ...c,
              type: isNtlm ? 'ntlm' : isSha512 ? 'sha512' : c.type,
              notes: c.notes || `Identified as ${topCandidate?.name || 'Hash'} (Hashcat -m ${topCandidate?.hashcatMode || 'unknown'})`,
            }
          : c
      );
    } else {
      const newCred: CredentialItem = {
        id: 'cred-' + Date.now(),
        username: 'target_account',
        secret: trimmedHash,
        type: isNtlm ? 'ntlm' : isSha512 ? 'sha512' : 'other',
        service: 'other',
        isPrivileged: false,
        notes: `Identified as ${topCandidate?.name || 'Hash'} (Hashcat -m ${topCandidate?.hashcatMode || 'unknown'})`,
        createdAt: new Date().toISOString(),
      };
      updatedCreds = [newCred, ...currentCreds];
    }

    updateMachine(activeTargetId, { credentials: updatedCreds });
    setSentToVault(true);
    playCyberSound('flag');
    setTimeout(() => setSentToVault(false), 3000);
  };

  if (!hashForgeModalOpen) return null;

  const topCandidate = analysis.candidates[0];
  const charLength = inputHash.trim().length;
  const isHexOnly = /^[0-9a-fA-F]+$/.test(inputHash.trim());

  return createPortal(
    <AnimatePresence>
      <div
        className="fixed inset-0 z-[125] flex items-center justify-center p-3 sm:p-5 bg-black/85 backdrop-blur-md overflow-y-auto"
        onClick={handleClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.15 }}
          ref={modalContainerRef}
          className="w-full max-w-4xl max-h-[92vh] flex flex-col rounded-2xl border border-slate-200 dark:border-cyber-border bg-white dark:bg-cyber-card shadow-2xl overflow-hidden my-auto"
          onClick={(e) => e.stopPropagation()}
          role="dialog"
          aria-modal="true"
          aria-labelledby="hashforge-title"
        >
          {/* Header Bar */}
          <div className="flex-shrink-0 flex items-center justify-between border-b border-slate-200 dark:border-cyber-border p-4 bg-slate-50 dark:bg-cyber-bg/95">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-amber-100 dark:bg-amber-950/50 border border-amber-300 dark:border-amber-800 text-amber-700 dark:text-amber-400">
                <Flame className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h2
                    id="hashforge-title"
                    className="text-base sm:text-lg font-bold text-slate-900 dark:text-white font-mono tracking-wide"
                  >
                    HASHFORGE // TACTICAL HASH IDENTIFIER & CRACKER
                  </h2>
                  <span className="text-[10px] px-2 py-0.5 rounded-full font-mono font-bold bg-amber-100 dark:bg-amber-500/15 text-amber-900 dark:text-amber-400 border border-amber-300 dark:border-amber-500/40">
                    HASHCAT / JOHN SYNTAX
                  </span>
                </div>
                <p className="text-xs text-slate-500 dark:text-cyber-muted mt-0.5">
                  Instant offline heuristic hash identification, Hashcat mode mapping (-m), and John the Ripper syntax crafter.
                </p>
              </div>
            </div>

            <button
              onClick={handleClose}
              className="p-1.5 rounded-lg bg-slate-100 dark:bg-cyber-card border border-slate-200 dark:border-cyber-border text-slate-500 dark:text-cyber-muted hover:text-slate-900 dark:hover:text-white transition-colors"
              title="Close modal"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Modal Content Scroll Area */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-5 font-mono text-xs">
            {/* Input Hash Textarea */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold text-slate-700 dark:text-cyber-text uppercase flex items-center gap-1.5">
                  <Hash className="w-3.5 h-3.5 text-amber-500" />
                  Paste Target Hash or Ciphertext
                </label>
                <div className="flex items-center gap-2 text-[10px] text-slate-500 dark:text-cyber-muted">
                  <span>Length: <strong className="text-slate-900 dark:text-white">{charLength}</strong> chars</span>
                  {charLength > 0 && isHexOnly && (
                    <span className="px-1.5 py-0.2 rounded bg-cyan-100 dark:bg-cyan-950 text-cyan-800 dark:text-cyan-400 border border-cyan-300 dark:border-cyan-800">
                      Hex Only
                    </span>
                  )}
                  {inputHash && (
                    <button
                      onClick={() => handleInputChange('')}
                      className="text-red-500 hover:underline"
                    >
                      Clear
                    </button>
                  )}
                </div>
              </div>

              <textarea
                value={inputHash}
                onChange={(e) => handleInputChange(e.target.value)}
                placeholder="Paste NTLM (32 hex), Kerberoast ($krb5tgs$), NetNTLMv2, Linux shadow ($6$), bcrypt ($2a$), or phpass..."
                rows={3}
                className="w-full p-3 rounded-xl border border-slate-300 dark:border-cyber-border bg-slate-50 dark:bg-cyber-bg text-slate-900 dark:text-white font-mono text-xs focus:border-amber-500 dark:focus:border-amber-400 focus:outline-none focus:ring-1 focus:ring-amber-500/50 transition-all resize-none shadow-inner"
              />

              {/* Quick Sample Chips */}
              <div className="flex flex-wrap items-center gap-1.5 pt-1">
                <span className="text-[10px] text-slate-400 dark:text-cyber-muted uppercase font-bold mr-1">
                  Test Samples:
                </span>
                {QUICK_SAMPLES.map((s, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleInputChange(s.hash)}
                    className="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-cyber-card border border-slate-200 dark:border-cyber-border text-slate-700 dark:text-cyber-muted hover:text-slate-900 dark:hover:text-white hover:border-amber-500/60 transition-colors text-[10px]"
                    title={`Load sample: ${s.type}`}
                  >
                    {s.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Analysis Telemetry Card */}
            {charLength > 0 ? (
              <div className="rounded-xl border border-amber-200 dark:border-amber-900/40 bg-amber-50/50 dark:bg-amber-950/15 p-4 space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-amber-200/60 dark:border-amber-900/40 pb-3">
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 rounded-lg bg-amber-500 text-black font-bold">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-sm text-slate-900 dark:text-white">
                          {topCandidate?.name || 'Unrecognized Hash'}
                        </span>
                        <span
                          className={`text-[10px] px-2 py-0.2 rounded-full font-bold uppercase ${
                            topCandidate?.confidence === 'High'
                              ? 'bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-400 border border-emerald-300 dark:border-emerald-800'
                              : 'bg-amber-100 dark:bg-amber-950/80 text-amber-800 dark:text-amber-400 border border-amber-300 dark:border-amber-800'
                          }`}
                        >
                          {topCandidate?.confidence || 'Low'} Confidence
                        </span>
                      </div>
                      <span className="text-[10px] text-slate-500 dark:text-cyber-muted">
                        Category: <strong>{topCandidate?.category}</strong>
                      </span>
                    </div>
                  </div>

                  {/* Mode & Format Badges */}
                  <div className="flex items-center gap-2">
                    <div className="px-2.5 py-1 rounded-lg bg-slate-900 text-amber-400 border border-amber-500/40 font-bold text-xs shadow-sm">
                      Hashcat: <code>-m {topCandidate?.hashcatMode}</code>
                    </div>
                    <div className="px-2.5 py-1 rounded-lg bg-slate-900 text-cyan-400 border border-cyan-500/40 font-bold text-xs shadow-sm">
                      John: <code>--format={topCandidate?.johnFormat}</code>
                    </div>
                    {activeTargetId && (
                      <button
                        onClick={handleSendToVault}
                        className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-cyber-emerald text-black font-bold hover:bg-cyber-emerald/90 transition-all shadow-sm"
                        title="Send this hash into active target Loot & Credentials table"
                      >
                        {sentToVault ? (
                          <>
                            <Check className="w-3.5 h-3.5" />
                            <span>Saved to Vault!</span>
                          </>
                        ) : (
                          <>
                            <Key className="w-3.5 h-3.5" />
                            <span>Send to Vault</span>
                          </>
                        )}
                      </button>
                    )}
                  </div>
                </div>

                {topCandidate?.notes && (
                  <p className="text-xs text-slate-600 dark:text-slate-300 italic">
                    💡 {topCandidate.notes}
                  </p>
                )}

                {/* Other Candidates if Multiple Matches (e.g. 32-hex NTLM vs MD5) */}
                {analysis.candidates.length > 1 && (
                  <div className="pt-2 border-t border-amber-200/40 dark:border-amber-900/30">
                    <div className="text-[10px] uppercase font-bold text-slate-500 dark:text-cyber-muted mb-1.5">
                      Alternative Possibilities:
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {analysis.candidates.slice(1).map((c, idx) => (
                        <div
                          key={idx}
                          className="px-2 py-1 rounded-lg bg-white dark:bg-cyber-card border border-slate-200 dark:border-cyber-border text-[11px] flex items-center gap-2"
                        >
                          <span className="font-bold text-slate-800 dark:text-slate-200">{c.name}</span>
                          <span className="text-[10px] text-amber-600 dark:text-amber-400 font-mono">
                            -m {c.hashcatMode}
                          </span>
                          <span className="text-[9px] px-1 rounded bg-slate-100 dark:bg-slate-800 text-slate-500">
                            {c.confidence}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="rounded-xl border border-dashed border-slate-200 dark:border-cyber-border p-6 text-center text-slate-400 dark:text-cyber-muted">
                Paste a hash or click a test sample above to inspect algorithm profiles and generate cracking commands.
              </div>
            )}

            {/* Generated Attack Commands Deck */}
            {charLength > 0 && (
              <div className="space-y-4">
                {/* Hashcat Section */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs font-bold text-slate-700 dark:text-cyber-text uppercase">
                    <span className="flex items-center gap-1.5 text-amber-600 dark:text-amber-400">
                      <Cpu className="w-3.5 h-3.5" />
                      Hashcat Cracking Commands
                    </span>
                    <span className="text-[10px] text-slate-400 font-normal">
                      GPU accelerated (-O -w 3)
                    </span>
                  </div>

                  <div className="space-y-2">
                    {analysis.hashcatCommands.map((cmdItem, idx) => {
                      const id = `hc-${idx}`;
                      const isCopied = copiedId === id;
                      return (
                        <div
                          key={id}
                          className="flex items-center justify-between gap-3 p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-amber-500/50 transition-colors group"
                        >
                          <div className="min-w-0 flex-1">
                            <div className="text-[10px] text-amber-400 font-bold mb-0.5">
                              {cmdItem.label}
                            </div>
                            <div className="text-xs font-mono text-slate-200 truncate select-all">
                              {cmdItem.cmd}
                            </div>
                          </div>
                          <button
                            onClick={() => handleCopy(id, cmdItem.cmd)}
                            className="p-2 rounded-lg bg-slate-800 hover:bg-amber-500 hover:text-black text-slate-300 transition-colors flex-shrink-0"
                            title="Copy Command"
                            aria-label={`Copy ${cmdItem.label}`}
                          >
                            {isCopied ? (
                              <Check className="w-4 h-4 text-emerald-400" />
                            ) : (
                              <Copy className="w-4 h-4" />
                            )}
                          </button>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* John the Ripper Section */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs font-bold text-slate-700 dark:text-cyber-text uppercase">
                    <span className="flex items-center gap-1.5 text-cyan-600 dark:text-cyan-400">
                      <Terminal className="w-3.5 h-3.5" />
                      John the Ripper Commands
                    </span>
                    <span className="text-[10px] text-slate-400 font-normal">
                      CPU / Rule-Based
                    </span>
                  </div>

                  <div className="space-y-2">
                    {analysis.johnCommands.map((cmdItem, idx) => {
                      const id = `jtr-${idx}`;
                      const isCopied = copiedId === id;
                      return (
                        <div
                          key={id}
                          className="flex items-center justify-between gap-3 p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500/50 transition-colors group"
                        >
                          <div className="min-w-0 flex-1">
                            <div className="text-[10px] text-cyan-400 font-bold mb-0.5">
                              {cmdItem.label}
                            </div>
                            <div className="text-xs font-mono text-slate-200 truncate select-all">
                              {cmdItem.cmd}
                            </div>
                          </div>
                          <button
                            onClick={() => handleCopy(id, cmdItem.cmd)}
                            className="p-2 rounded-lg bg-slate-800 hover:bg-cyan-500 hover:text-black text-slate-300 transition-colors flex-shrink-0"
                            title="Copy Command"
                            aria-label={`Copy ${cmdItem.label}`}
                          >
                            {isCopied ? (
                              <Check className="w-4 h-4 text-emerald-400" />
                            ) : (
                              <Copy className="w-4 h-4" />
                            )}
                          </button>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Footer Bar */}
          <div className="flex-shrink-0 flex items-center justify-between border-t border-slate-200 dark:border-cyber-border p-3 px-4 bg-slate-50 dark:bg-cyber-bg/90 font-mono text-xs">
            <div className="text-slate-500 dark:text-cyber-muted text-[11px] flex items-center gap-2">
              <Shield className="w-3.5 h-3.5 text-emerald-500" />
              <span>100% Client-Side Heuristics • Zero Network Egress • Offline Safe</span>
            </div>
            <button
              onClick={handleClose}
              className="px-4 py-1.5 rounded-xl bg-slate-200 dark:bg-cyber-card border border-slate-300 dark:border-cyber-border text-slate-700 dark:text-cyber-muted hover:text-slate-900 dark:hover:text-white font-bold transition-colors"
            >
              Close
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>,
    document.body
  );
};
