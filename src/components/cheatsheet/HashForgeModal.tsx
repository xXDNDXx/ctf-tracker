import React, { useState, useEffect, useRef, useMemo } from 'react';
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
  Sliders,
  Maximize2,
  Minimize2,
  Layers,
  FolderArchive,
  Trash2,
  ArrowRight,
} from 'lucide-react';
import { useCtfStore } from '../../store/useCtfStore';
import { CredentialItem } from '../../types';
import {
  analyzeAndIdentifyHash,
  HashCandidate,
  getCrackCommandsForCandidate,
  parseBatchHashDump,
  CustomCrackOptions,
  DEFAULT_CRACK_OPTIONS,
} from '../../utils/credentialAttackCrafter';
import { checkInstantMicroCrack } from '../../utils/hashMicroRainbow';
import { playCyberSound, safeCopyToClipboard } from '../../utils/helpers';
import { useModalA11y } from '../../hooks/useModalA11y';

type HashForgeTab = 'analyzer' | 'batch' | 'extractors';

const QUICK_SAMPLES = [
  {
    name: 'NTLM (Admin)',
    hash: '31d6cfe0d16ae931b73c59d7e0c089c0',
    type: 'Windows SAM / NTDS',
  },
  {
    name: 'Kerberoast (TGS)',
    hash: '$krb5tgs$23$*svc_sql*CORP.LOCAL*CORP.LOCAL/svc_sql*$8a4d7c01a2b3c4d5e6f7a8b9c0d1e2f3$1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d',
    type: 'Active Directory TGS',
  },
  {
    name: 'NetNTLMv2 (Responder)',
    hash: 'admin::CORP:1122334455667788:AABBCCDDEEFF00112233445566778899:01010000000000000000000000000000',
    type: 'SMB Challenge-Response',
  },
  {
    name: 'DCC2 / mscache2',
    hash: '$DCC2$10240#admin#31d6cfe0d16ae931b73c59d7e0c089c0',
    type: 'Domain Cached Credential',
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
    name: 'KeePass Database',
    hash: '$keepass$*2*60000*222*d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0*32*a1b2c3d4e5f60718293a4b5c6d7e8f90*32*1234567890abcdef1234567890abcdef',
    type: 'KeePass 2.x Vault',
  },
  {
    name: 'JWT (HMAC Token)',
    hash: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
    type: 'JSON Web Token',
  },
];

const BATCH_SAMPLES = {
  secretsdump: `Administrator:500:aad3b435b51404eeaad3b435b51404ee:31d6cfe0d16ae931b73c59d7e0c089c0:::
Guest:501:aad3b435b51404eeaad3b435b51404ee:31d6cfe0d16ae931b73c59d7e0c089c0:::
krbtgt:502:aad3b435b51404eeaad3b435b51404ee:209c6174da490caeb422f3fa5a7ae634:::
svc_backup:1104:aad3b435b51404eeaad3b435b51404ee:8846f7eaee8fb117ad06bdd830b7586c:::
sql_admin:1105:aad3b435b51404eeaad3b435b51404ee:01fc5a6be7bc6929e7da6f34e6d87170:::`,
  shadow: `root:$6$saltstring$a9b8c7d6e5f4g3h2i1j0k9l8m7n6o5p4q3r2s1t0u9v8w7x6y5z4a3b2c1d0e9f8g7h6i5j4k3l2m1n0o9p8q7r6s5t4:19000:0:99999:7:::
daemon:*:18600:0:99999:7:::
www-data:$6$webpasssalt$z0y9x8w7v6u5t4s3r2q1p0o9n8m7l6k5j4i3h2g1f0e9d8c7b6a5z4y3x2w1v0u9t8s7r6q5p4o3n2m1l0k9j8i7h6:19000:0:99999:7:::
developer:$5$sha256salt$1234567890abcdef1234567890abcdef1234567890a:19000:0:99999:7:::`,
  responder: `admin::CORP:1122334455667788:AABBCCDDEEFF00112233445566778899:0101000000000000000000000000000000000000000000000000000000000000
svc_iis::CORP:3344556677889900:11223344556677889900112233445566:0101000000000000000000000000000000000000000000000000000000000000
jdoe::CORP:9988776655443322:FFEEDDCCBBAA99887766554433221100:0101000000000000000000000000000000000000000000000000000000000000`,
};

const EXTRACTOR_ARSENAL = [
  {
    name: 'ZIP / WinZip Archive',
    tool: 'zip2john',
    target: '.zip / .7z (PKZIP)',
    cmd: 'zip2john backup.zip > zip.hash',
    crackCmd: 'hashcat -m 13600 zip.hash rockyou.txt',
    desc: 'Extracts encryption header from password-protected ZIP archives.',
  },
  {
    name: 'SSH Private Key (id_rsa)',
    tool: 'ssh2john',
    target: 'OpenSSH / RSA / DSA / EC keys',
    cmd: 'ssh2john id_rsa > id_rsa.hash',
    crackCmd: 'john --wordlist=rockyou.txt id_rsa.hash',
    desc: 'Converts passphrase-protected SSH private keys into crackable format.',
  },
  {
    name: 'KeePass Database (1.x / 2.x)',
    tool: 'keepass2john',
    target: '.kdb / .kdbx password manager files',
    cmd: 'keepass2john database.kdbx > keepass.hash',
    crackCmd: 'hashcat -m 13400 keepass.hash rockyou.txt',
    desc: 'Extracts master password hash and encryption payload from KeePass vault.',
  },
  {
    name: 'RAR Archive (RAR3 / RAR5)',
    tool: 'rar2john',
    target: '.rar encrypted archives',
    cmd: 'rar2john secret.rar > rar.hash',
    crackCmd: 'hashcat -m 13000 rar.hash rockyou.txt',
    desc: 'Extracts RAR3 (-m 12500) and modern RAR5 (-m 13000) archive hashes.',
  },
  {
    name: 'PDF Encrypted Document',
    tool: 'pdf2john.py',
    target: '.pdf password-protected files',
    cmd: 'pdf2john.py sensitive.pdf > pdf.hash',
    crackCmd: 'hashcat -m 10500 pdf.hash rockyou.txt',
    desc: 'Extracts user / owner password hashes across PDF 1.1 to 1.7 revisions.',
  },
  {
    name: '7-Zip Archive (.7z)',
    tool: '7z2john.pl',
    target: '.7z encrypted archives',
    cmd: '7z2john.pl archive.7z > 7z.hash',
    crackCmd: 'hashcat -m 11600 7z.hash rockyou.txt',
    desc: 'Extracts AES encrypted header hashes from 7-Zip archives.',
  },
  {
    name: 'BitLocker Volume / VHD',
    tool: 'bitlocker2john',
    target: 'Encrypted USB / VHD / VMDK drive',
    cmd: 'bitlocker2john -i drive.vhd > bitlocker.hash',
    crackCmd: 'hashcat -m 22100 bitlocker.hash rockyou.txt',
    desc: 'Dumps User Password or Recovery Password VMK hashes from BitLocker drives.',
  },
  {
    name: 'Linux /etc/shadow Unshadow',
    tool: 'unshadow',
    target: '/etc/passwd + /etc/shadow',
    cmd: 'unshadow /etc/passwd /etc/shadow > unshadowed.txt',
    crackCmd: 'john --wordlist=rockyou.txt unshadowed.txt',
    desc: 'Merges passwd and shadow files into John-compatible format.',
  },
  {
    name: 'Kerberos Kirbi Ticket',
    tool: 'kirbi2john.py',
    target: '.kirbi exported Kerberos tickets',
    cmd: 'kirbi2john.py ticket.kirbi > kirbi.hash',
    crackCmd: 'john --format=krb5tgs kirbi.hash',
    desc: 'Converts mimikatz-dumped .kirbi tickets into crackable format.',
  },
  {
    name: 'PKCS#12 Certificate (.pfx / .p12)',
    tool: 'pfx2john',
    target: '.pfx / .p12 certificates',
    cmd: 'pfx2john certificate.pfx > pfx.hash',
    crackCmd: 'hashcat -m 6600 pfx.hash rockyou.txt',
    desc: 'Extracts private key password from PKCS#12 / PFX certificate containers.',
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

  const [activeTab, setActiveTab] = useState<HashForgeTab>('analyzer');
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [inputHash, setInputHash] = useState('');
  const [selectedCandidateIdx, setSelectedCandidateIdx] = useState(0);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [sentToVault, setSentToVault] = useState(false);

  // Attack Customizer Drawer & Options
  const [showOptionsDrawer, setShowOptionsDrawer] = useState(false);
  const [customOptions, setCustomOptions] = useState<CustomCrackOptions>(DEFAULT_CRACK_OPTIONS);

  // Batch Harvester State
  const [batchInput, setBatchInput] = useState('');
  const [batchSentToVault, setBatchSentToVault] = useState(false);

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
      setSelectedCandidateIdx(0);
      setSentToVault(false);
    }
  }, [hashForgeModalOpen, hashForgeInitialHash]);

  // Keystroke analysis for single hash
  const analysis = useMemo(() => analyzeAndIdentifyHash(inputHash), [inputHash]);

  // Bound selected candidate index
  const activeCandidate: HashCandidate =
    analysis.candidates[selectedCandidateIdx] || analysis.candidates[0];

  // Dynamic cracking commands recalculation
  const activeCommands = useMemo(() => {
    if (!inputHash.trim() || !activeCandidate) return null;
    return getCrackCommandsForCandidate(activeCandidate, inputHash, customOptions);
  }, [activeCandidate, inputHash, customOptions]);

  // Instant offline micro-rainbow crack detection
  const instantMicroCrack = useMemo(
    () => checkInstantMicroCrack(inputHash),
    [inputHash]
  );

  // Batch analysis memo
  const batchResult = useMemo(
    () => parseBatchHashDump(batchInput),
    [batchInput]
  );

  // Update input
  const handleInputChange = (val: string) => {
    setInputHash(val);
    setSelectedCandidateIdx(0);
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

  // Send Single Hash to Active Target Credential Vault
  const handleSendToVault = () => {
    if (!activeTargetId || !inputHash.trim()) return;
    const targetMachine = machines.find((m) => m.id === activeTargetId);
    if (!targetMachine) return;

    const isNtlm = activeCandidate.hashcatMode === '1000';
    const isSha512 =
      activeCandidate.hashcatMode === '1800' || activeCandidate.hashcatMode === '7400';

    const currentCreds = targetMachine.credentials || [];
    const trimmedHash = inputHash.trim();
    const existingIndex = currentCreds.findIndex((c) => c.secret === trimmedHash);

    let updatedCreds: CredentialItem[];
    if (existingIndex >= 0) {
      updatedCreds = currentCreds.map((c, i) =>
        i === existingIndex
          ? {
              ...c,
              type: isNtlm ? 'ntlm' : isSha512 ? 'sha512' : c.type,
              notes:
                c.notes ||
                `Identified as ${activeCandidate.name} (Hashcat -m ${activeCandidate.hashcatMode})`,
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
        notes: `Identified as ${activeCandidate.name} (Hashcat -m ${activeCandidate.hashcatMode})`,
        createdAt: new Date().toISOString(),
      };
      updatedCreds = [newCred, ...currentCreds];
    }

    updateMachine(activeTargetId, { credentials: updatedCreds });
    setSentToVault(true);
    playCyberSound('flag');
    setTimeout(() => setSentToVault(false), 3000);
  };

  // Send Batch Hashes to Active Target Credential Vault
  const handleBatchSendToVault = () => {
    if (!activeTargetId || batchResult.validItems.length === 0) return;
    const targetMachine = machines.find((m) => m.id === activeTargetId);
    if (!targetMachine) return;

    const currentCreds = targetMachine.credentials || [];
    const newCreds: CredentialItem[] = [];

    for (const item of batchResult.validItems) {
      const exists = currentCreds.some((c) => c.secret === item.hash);
      if (!exists) {
        newCreds.push({
          id: 'cred-batch-' + Math.random().toString(36).substring(2, 9),
          username: item.username || 'unknown',
          domain: item.domain,
          secret: item.hash,
          type: item.type === 'NTLM' ? 'ntlm' : 'other',
          service: item.type === 'NTLM' ? 'smb' : 'other',
          isPrivileged:
            item.username?.toLowerCase() === 'administrator' || item.username?.toLowerCase() === 'root',
          notes: item.notes || `Batch parsed: ${item.type}`,
          createdAt: new Date().toISOString(),
        });
      }
    }

    if (newCreds.length > 0) {
      updateMachine(activeTargetId, { credentials: [...newCreds, ...currentCreds] });
      setBatchSentToVault(true);
      playCyberSound('flag');
      setTimeout(() => setBatchSentToVault(false), 3000);
    }
  };

  if (!hashForgeModalOpen) return null;

  const charLength = inputHash.trim().length;
  const isHexOnly = /^[0-9a-fA-F]+$/.test(inputHash.trim());

  return createPortal(
    <AnimatePresence>
      <div
        className="fixed inset-0 z-[125] flex items-center justify-center p-2 sm:p-4 bg-black/85 backdrop-blur-md overflow-y-auto"
        onClick={handleClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.15 }}
          ref={modalContainerRef}
          className={`w-full flex flex-col rounded-2xl border border-slate-200 dark:border-cyber-border bg-white dark:bg-cyber-card shadow-2xl overflow-hidden my-auto transition-all duration-200 ${
            isFullscreen ? 'max-w-none w-screen h-screen rounded-none max-h-none' : 'max-w-5xl max-h-[92vh]'
          }`}
          onClick={(e) => e.stopPropagation()}
          role="dialog"
          aria-modal="true"
          aria-labelledby="hashforge-title"
        >
          {/* Header Bar */}
          <div className="flex-shrink-0 flex items-center justify-between border-b border-slate-200 dark:border-cyber-border p-3.5 sm:p-4 bg-slate-50 dark:bg-cyber-bg/95">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-amber-500/15 border border-amber-500/40 text-amber-500">
                <Flame className="w-5 h-5 animate-pulse" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h2
                    id="hashforge-title"
                    className="text-base sm:text-lg font-bold text-slate-900 dark:text-white font-mono tracking-wide"
                  >
                    HASHFORGE 2.0 // TACTICAL CRACKING STUDIO
                  </h2>
                  <span className="text-[10px] px-2 py-0.5 rounded-full font-mono font-bold bg-amber-500/15 text-amber-600 dark:text-amber-400 border border-amber-500/40">
                    40+ ALGORITHMS • OFFLINE ENGINE
                  </span>
                </div>
                <p className="text-xs text-slate-500 dark:text-cyber-muted mt-0.5">
                  Heuristic identification, micro-rainbow instant cracker, batch dump sanitizer & *2john extractors.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsFullscreen(!isFullscreen)}
                className="p-1.5 rounded-lg bg-slate-100 dark:bg-cyber-bg border border-slate-200 dark:border-cyber-border text-slate-500 dark:text-cyber-muted hover:text-slate-900 dark:hover:text-white transition-colors"
                title={isFullscreen ? 'Exit Fullscreen' : 'Expand Fullscreen'}
                aria-label="Toggle Fullscreen"
              >
                {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
              </button>
              <button
                onClick={handleClose}
                className="p-1.5 rounded-lg bg-slate-100 dark:bg-cyber-bg border border-slate-200 dark:border-cyber-border text-slate-500 dark:text-cyber-muted hover:text-slate-900 dark:hover:text-white transition-colors"
                title="Close modal"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Tactical Studio Tabs */}
          <div className="flex-shrink-0 flex items-center gap-1 border-b border-slate-200 dark:border-cyber-border px-4 py-2 bg-slate-100/70 dark:bg-cyber-bg/60">
            <button
              onClick={() => setActiveTab('analyzer')}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${
                activeTab === 'analyzer'
                  ? 'bg-amber-500 text-black shadow-md shadow-amber-500/20'
                  : 'text-slate-600 dark:text-cyber-muted hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/50 dark:hover:bg-cyber-card'
              }`}
            >
              <Zap className="w-3.5 h-3.5" />
              <span>⚡ Hash Analyzer & Cracker</span>
            </button>

            <button
              onClick={() => setActiveTab('batch')}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${
                activeTab === 'batch'
                  ? 'bg-amber-500 text-black shadow-md shadow-amber-500/20'
                  : 'text-slate-600 dark:text-cyber-muted hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/50 dark:hover:bg-cyber-card'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>📋 Batch Harvester & Sanitizer</span>
              {batchResult.validItems.length > 0 && (
                <span className="px-1.5 py-0.2 rounded-full bg-black/30 text-[10px]">
                  {batchResult.validItems.length}
                </span>
              )}
            </button>

            <button
              onClick={() => setActiveTab('extractors')}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${
                activeTab === 'extractors'
                  ? 'bg-amber-500 text-black shadow-md shadow-amber-500/20'
                  : 'text-slate-600 dark:text-cyber-muted hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/50 dark:hover:bg-cyber-card'
              }`}
            >
              <FolderArchive className="w-3.5 h-3.5" />
              <span>🛠️ *2John Extraction Arsenal</span>
              <span className="px-1.5 py-0.2 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-[10px]">
                {EXTRACTOR_ARSENAL.length}
              </span>
            </button>
          </div>

          {/* Modal Content Scroll Area */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-5 font-mono text-xs">
            {/* TAB 1: SINGLE HASH ANALYZER */}
            {activeTab === 'analyzer' && (
              <div className="space-y-5">
                {/* Input Section */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-bold text-slate-700 dark:text-cyber-text uppercase flex items-center gap-1.5">
                      <Hash className="w-3.5 h-3.5 text-amber-500" />
                      Paste Target Hash, Ticket, or Ciphertext
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
                          className="text-red-500 hover:underline flex items-center gap-0.5"
                        >
                          <Trash2 className="w-3 h-3" />
                          <span>Clear</span>
                        </button>
                      )}
                    </div>
                  </div>

                  <textarea
                    id="hashforge-target-hash"
                    name="hashforgeTargetHash"
                    aria-label="Paste Target Hash or Ciphertext"
                    value={inputHash}
                    onChange={(e) => handleInputChange(e.target.value)}
                    placeholder="Paste NTLM (32 hex), Kerberoast ($krb5tgs$), NetNTLMv2, DCC2 ($DCC2$), Linux shadow ($6$), KeePass ($keepass$), JWT (ey...), or bcrypt..."
                    rows={3}
                    className="w-full p-3 rounded-xl border border-slate-300 dark:border-cyber-border bg-slate-50 dark:bg-cyber-bg text-slate-900 dark:text-white font-mono text-xs focus:border-amber-500 dark:focus:border-amber-400 focus:outline-none focus:ring-1 focus:ring-amber-500/50 transition-all resize-none shadow-inner"
                  />

                  {/* Quick Sample Chips */}
                  <div className="flex flex-wrap items-center gap-1.5 pt-1">
                    <span className="text-[10px] text-slate-400 dark:text-cyber-muted uppercase font-bold mr-1">
                      Test Presets:
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

                {/* ⚡ INSTANT MICRO-CRACK NEON BANNER */}
                {instantMicroCrack && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="rounded-xl border border-emerald-500/50 bg-emerald-950/40 p-3.5 flex flex-wrap items-center justify-between gap-3 shadow-lg shadow-emerald-950/20"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-emerald-500 text-black font-bold">
                        <Zap className="w-5 h-5 fill-current" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold text-emerald-400 tracking-wide">
                            ⚡ INSTANT CRACK DISCOVERED!
                          </span>
                          <span className="px-2 py-0.2 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-[10px]">
                            {instantMicroCrack.algorithm}
                          </span>
                        </div>
                        <div className="text-sm font-mono font-bold text-white mt-0.5 flex items-center gap-2">
                          <span>Plaintext:</span>
                          <code className="px-2 py-0.5 rounded bg-black/60 text-cyber-cyan border border-cyan-500/30">
                            {instantMicroCrack.plaintext || '<EMPTY STRING>'}
                          </code>
                          <span className="text-[10px] text-emerald-400/80 font-normal">
                            (Found in ZeroBox Micro-Dictionary)
                          </span>
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={() => handleCopy('instant-plain', instantMicroCrack.plaintext)}
                      className="px-3.5 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-xs flex items-center gap-1.5 transition-all shadow-md"
                    >
                      {copiedId === 'instant-plain' ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>Copied Plaintext!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy Plaintext</span>
                        </>
                      )}
                    </button>
                  </motion.div>
                )}

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
                              {activeCandidate.name}
                            </span>
                            <span
                              className={`text-[10px] px-2 py-0.2 rounded-full font-bold uppercase ${
                                activeCandidate.confidence === 'High'
                                  ? 'bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-400 border border-emerald-300 dark:border-emerald-800'
                                  : 'bg-amber-100 dark:bg-amber-950/80 text-amber-800 dark:text-amber-400 border border-amber-300 dark:border-amber-800'
                              }`}
                            >
                              {activeCandidate.confidence} Confidence
                            </span>
                          </div>
                          <span className="text-[10px] text-slate-500 dark:text-cyber-muted">
                            Category: <strong>{activeCandidate.category}</strong>
                          </span>
                        </div>
                      </div>

                      {/* Mode & Format Badges */}
                      <div className="flex items-center gap-2">
                        <div className="px-2.5 py-1 rounded-lg bg-slate-900 text-amber-400 border border-amber-500/40 font-bold text-xs shadow-sm">
                          Hashcat: <code>-m {activeCandidate.hashcatMode}</code>
                        </div>
                        <div className="px-2.5 py-1 rounded-lg bg-slate-900 text-cyan-400 border border-cyan-500/40 font-bold text-xs shadow-sm">
                          John: <code>--format={activeCandidate.johnFormat}</code>
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

                    {activeCandidate.notes && (
                      <p className="text-xs text-slate-600 dark:text-slate-300 italic">
                        💡 {activeCandidate.notes}
                      </p>
                    )}

                    {/* INTERACTIVE CANDIDATE SWITCHER */}
                    {analysis.candidates.length > 1 && (
                      <div className="pt-2 border-t border-amber-200/40 dark:border-amber-900/30">
                        <div className="text-[10px] uppercase font-bold text-slate-500 dark:text-cyber-muted mb-1.5 flex items-center justify-between">
                          <span>Competing Algorithm Possibilities (Click to Switch):</span>
                          <span className="text-amber-500 text-[10px]">Select candidate to regenerate syntax</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {analysis.candidates.map((c, idx) => {
                            const isSelected = idx === selectedCandidateIdx;
                            return (
                              <button
                                key={idx}
                                onClick={() => setSelectedCandidateIdx(idx)}
                                className={`px-2.5 py-1 rounded-lg text-[11px] flex items-center gap-2 border transition-all ${
                                  isSelected
                                    ? 'bg-amber-500 text-black font-bold border-amber-400 shadow-sm'
                                    : 'bg-white dark:bg-cyber-card border-slate-200 dark:border-cyber-border text-slate-700 dark:text-cyber-muted hover:border-amber-500/50'
                                }`}
                              >
                                <span>{c.name}</span>
                                <span
                                  className={`text-[10px] font-mono px-1 rounded ${
                                    isSelected
                                      ? 'bg-black/20 text-black'
                                      : 'bg-slate-100 dark:bg-slate-800 text-amber-500'
                                  }`}
                                >
                                  -m {c.hashcatMode}
                                </span>
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="rounded-xl border border-dashed border-slate-200 dark:border-cyber-border p-6 text-center text-slate-400 dark:text-cyber-muted">
                    Paste a hash or click a test preset above to inspect algorithm profiles and generate cracking commands.
                  </div>
                )}

                {/* ATTACK CUSTOMIZER ACCORDION */}
                {charLength > 0 && (
                  <div className="rounded-xl border border-slate-200 dark:border-cyber-border bg-slate-50/50 dark:bg-cyber-bg/60 overflow-hidden">
                    <button
                      onClick={() => setShowOptionsDrawer(!showOptionsDrawer)}
                      className="w-full flex items-center justify-between p-3 px-4 text-xs font-bold text-slate-700 dark:text-cyber-text hover:bg-slate-100 dark:hover:bg-cyber-card transition-colors"
                    >
                      <span className="flex items-center gap-2 text-amber-600 dark:text-amber-400">
                        <Sliders className="w-3.5 h-3.5" />
                        <span>Attack Parameters & Hardware Controls (Mode -a, Rules, Masks)</span>
                      </span>
                      <div className="flex items-center gap-2 text-[10px] text-slate-500 dark:text-cyber-muted font-normal">
                        <span>Mode: -a {customOptions.attackMode}</span>
                        <span>•</span>
                        <span>{customOptions.optimized ? '-O on' : '-O off'}</span>
                        <ChevronRight className={`w-3.5 h-3.5 transition-transform ${showOptionsDrawer ? 'rotate-90' : ''}`} />
                      </div>
                    </button>

                    {showOptionsDrawer && (
                      <div className="p-4 border-t border-slate-200 dark:border-cyber-border bg-white dark:bg-cyber-card space-y-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
                          {/* Attack Mode */}
                          <div>
                            <label className="text-[10px] uppercase font-bold text-slate-500 dark:text-cyber-muted block mb-1">
                              Attack Mode (-a)
                            </label>
                            <select
                              id="hashforge-attack-mode"
                              name="hashforgeAttackMode"
                              aria-label="Attack Mode"
                              value={customOptions.attackMode}
                              onChange={(e) =>
                                setCustomOptions({
                                  ...customOptions,
                                  attackMode: e.target.value as any,
                                })
                              }
                              className="w-full p-2 rounded-lg bg-slate-50 dark:bg-cyber-bg border border-slate-200 dark:border-cyber-border text-slate-900 dark:text-white text-xs font-mono"
                            >
                              <option value="0">-a 0 | Wordlist Dictionary</option>
                              <option value="3">-a 3 | Mask / Brute Force</option>
                              <option value="1">-a 1 | Wordlist Combinator</option>
                              <option value="6">-a 6 | Hybrid (Wordlist + Mask)</option>
                            </select>
                          </div>

                          {/* Wordlist */}
                          <div>
                            <label className="text-[10px] uppercase font-bold text-slate-500 dark:text-cyber-muted block mb-1">
                              Wordlist Dictionary
                            </label>
                            <select
                              id="hashforge-wordlist"
                              name="hashforgeWordlist"
                              aria-label="Wordlist Dictionary"
                              value={customOptions.wordlist}
                              onChange={(e) =>
                                setCustomOptions({ ...customOptions, wordlist: e.target.value })
                              }
                              className="w-full p-2 rounded-lg bg-slate-50 dark:bg-cyber-bg border border-slate-200 dark:border-cyber-border text-slate-900 dark:text-white text-xs font-mono"
                            >
                              <option value="/usr/share/wordlists/rockyou.txt">rockyou.txt</option>
                              <option value="/usr/share/seclists/Passwords/Common-Credentials/10-million-password-list-top-100000.txt">
                                SecLists Top 100k
                              </option>
                              <option value="/usr/share/wordlists/fasttrack.txt">fasttrack.txt</option>
                              <option value="passwords.txt">Local passwords.txt</option>
                            </select>
                          </div>

                          {/* Mutation Rule */}
                          <div>
                            <label className="text-[10px] uppercase font-bold text-slate-500 dark:text-cyber-muted block mb-1">
                              Mutation Rule
                            </label>
                            <select
                              id="hashforge-rule"
                              name="hashforgeRule"
                              aria-label="Mutation Rule"
                              value={customOptions.rule}
                              onChange={(e) =>
                                setCustomOptions({ ...customOptions, rule: e.target.value })
                              }
                              className="w-full p-2 rounded-lg bg-slate-50 dark:bg-cyber-bg border border-slate-200 dark:border-cyber-border text-slate-900 dark:text-white text-xs font-mono"
                            >
                              <option value="/usr/share/hashcat/rules/best64.rule">best64.rule (Fast)</option>
                              <option value="/usr/share/hashcat/rules/OneRuleToRuleThemAll.rule">
                                OneRuleToRuleThemAll
                              </option>
                              <option value="/usr/share/hashcat/rules/rockyou-30000.rule">
                                rockyou-30000.rule
                              </option>
                              <option value="none">None (Pure Dictionary)</option>
                            </select>
                          </div>

                          {/* Mask Preset */}
                          <div>
                            <label className="text-[10px] uppercase font-bold text-slate-500 dark:text-cyber-muted block mb-1">
                              Mask Pattern
                            </label>
                            <input
                              type="text"
                              id="hashforge-mask"
                              name="hashforgeMask"
                              aria-label="Mask Pattern"
                              value={customOptions.mask}
                              onChange={(e) =>
                                setCustomOptions({ ...customOptions, mask: e.target.value })
                              }
                              placeholder="?u?l?l?l?d?d?d?d"
                              className="w-full p-2 rounded-lg bg-slate-50 dark:bg-cyber-bg border border-slate-200 dark:border-cyber-border text-slate-900 dark:text-white text-xs font-mono"
                            />
                          </div>
                        </div>

                        {/* Performance & Output Toggles */}
                        <div className="flex flex-wrap items-center gap-4 pt-2 border-t border-slate-200 dark:border-cyber-border text-[11px]">
                          <label className="flex items-center gap-1.5 cursor-pointer">
                            <input
                              type="checkbox"
                              checked={customOptions.optimized}
                              onChange={(e) =>
                                setCustomOptions({ ...customOptions, optimized: e.target.checked })
                              }
                              className="rounded border-slate-300 text-amber-500 focus:ring-amber-400"
                            />
                            <span>-O Optimized Kernels</span>
                          </label>

                          <label className="flex items-center gap-1.5 cursor-pointer">
                            <input
                              type="checkbox"
                              checked={customOptions.force}
                              onChange={(e) =>
                                setCustomOptions({ ...customOptions, force: e.target.checked })
                              }
                              className="rounded border-slate-300 text-amber-500 focus:ring-amber-400"
                            />
                            <span>--force (VM / Container Bypass)</span>
                          </label>

                          <label className="flex items-center gap-1.5 cursor-pointer">
                            <input
                              type="checkbox"
                              checked={customOptions.status}
                              onChange={(e) =>
                                setCustomOptions({ ...customOptions, status: e.target.checked })
                              }
                              className="rounded border-slate-300 text-amber-500 focus:ring-amber-400"
                            />
                            <span>--status (Progress Monitor)</span>
                          </label>

                          <div className="flex items-center gap-1.5 ml-auto">
                            <span className="text-slate-500">Workload (-w):</span>
                            <select
                              id="hashforge-workload"
                              name="hashforgeWorkload"
                              aria-label="Workload profile"
                              value={customOptions.workload}
                              onChange={(e) =>
                                setCustomOptions({ ...customOptions, workload: e.target.value })
                              }
                              className="p-1 rounded bg-slate-50 dark:bg-cyber-bg border border-slate-200 dark:border-cyber-border text-xs"
                            >
                              <option value="1">1 (Low)</option>
                              <option value="2">2 (Default)</option>
                              <option value="3">3 (High / Standard)</option>
                              <option value="4">4 (Nightmare)</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* GENERATED ATTACK COMMANDS DECK */}
                {charLength > 0 && activeCommands && (
                  <div className="space-y-4">
                    {/* Hashcat Section */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-xs font-bold text-slate-700 dark:text-cyber-text uppercase">
                        <span className="flex items-center gap-1.5 text-amber-600 dark:text-amber-400">
                          <Cpu className="w-3.5 h-3.5" />
                          Hashcat Cracking Commands (-m {activeCandidate.hashcatMode})
                        </span>
                        <span className="text-[10px] text-slate-400 font-normal">
                          GPU accelerated
                        </span>
                      </div>

                      <div className="space-y-2">
                        {activeCommands.hashcatCommands.map((cmdItem, idx) => {
                          const id = `hc-${idx}`;
                          const isCopied = copiedId === id;
                          return (
                            <div
                              key={id}
                              className="flex items-center justify-between gap-3 p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-amber-500/50 transition-colors group"
                            >
                              <div className="min-w-0 flex-1">
                                <div className="text-[10px] text-amber-400 font-bold mb-0.5 flex items-center gap-1.5">
                                  <span>{cmdItem.label}</span>
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
                          John the Ripper Commands (--format={activeCandidate.johnFormat})
                        </span>
                        <span className="text-[10px] text-slate-400 font-normal">
                          CPU / Rule-Based
                        </span>
                      </div>

                      <div className="space-y-2">
                        {activeCommands.johnCommands.map((cmdItem, idx) => {
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

                    {/* External Cloud Rainbow Lookup Options */}
                    <div className="flex flex-wrap items-center justify-between gap-2 p-3 rounded-xl bg-slate-100 dark:bg-cyber-bg border border-slate-200 dark:border-cyber-border text-[11px]">
                      <span className="text-slate-500 dark:text-cyber-muted flex items-center gap-1.5">
                        <ExternalLink className="w-3.5 h-3.5 text-amber-500" />
                        External Cloud Rainbow Tables (Browser Redirect):
                      </span>
                      <div className="flex items-center gap-2">
                        <a
                          href="https://crackstation.net/"
                          target="_blank"
                          rel="noreferrer noopener"
                          className="px-2.5 py-1 rounded-lg bg-slate-200 dark:bg-cyber-card text-slate-800 dark:text-cyber-text hover:text-amber-500 transition-colors flex items-center gap-1"
                        >
                          <span>CrackStation.net</span>
                          <ArrowRight className="w-3 h-3" />
                        </a>
                        <a
                          href="https://gchq.github.io/CyberChef/"
                          target="_blank"
                          rel="noreferrer noopener"
                          className="px-2.5 py-1 rounded-lg bg-slate-200 dark:bg-cyber-card text-slate-800 dark:text-cyber-text hover:text-cyan-400 transition-colors flex items-center gap-1"
                        >
                          <span>CyberChef</span>
                          <ArrowRight className="w-3 h-3" />
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* TAB 2: BATCH HARVESTER & SANITIZER */}
            {activeTab === 'batch' && (
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-bold text-slate-700 dark:text-cyber-text uppercase flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5 text-amber-500" />
                      Paste Multiline Hash Dump (/etc/shadow, secretsdump, Responder logs)
                    </label>
                    <div className="flex items-center gap-2 text-[10px] text-slate-500 dark:text-cyber-muted">
                      <span>{batchResult.totalLines} lines</span>
                      {batchInput && (
                        <button
                          onClick={() => setBatchInput('')}
                          className="text-red-500 hover:underline flex items-center gap-0.5"
                        >
                          <Trash2 className="w-3 h-3" />
                          <span>Clear</span>
                        </button>
                      )}
                    </div>
                  </div>

                  <textarea
                    id="hashforge-batch-input"
                    name="hashforgeBatchInput"
                    aria-label="Paste Multiline Hash Dump"
                    value={batchInput}
                    onChange={(e) => setBatchInput(e.target.value)}
                    placeholder="Paste secretsdump lines (Administrator:500:aad3b...:31d6c...), /etc/shadow, or Responder NetNTLMv2 capture logs..."
                    rows={6}
                    className="w-full p-3 rounded-xl border border-slate-300 dark:border-cyber-border bg-slate-50 dark:bg-cyber-bg text-slate-900 dark:text-white font-mono text-xs focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500/50 transition-all resize-y shadow-inner"
                  />

                  {/* Load Batch Presets */}
                  <div className="flex flex-wrap items-center gap-2 pt-1">
                    <span className="text-[10px] text-slate-400 uppercase font-bold mr-1">
                      Load Dumps:
                    </span>
                    <button
                      onClick={() => setBatchInput(BATCH_SAMPLES.secretsdump)}
                      className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-cyber-card border border-slate-200 dark:border-cyber-border text-slate-700 dark:text-cyber-muted hover:text-white hover:border-amber-500 text-[10px]"
                    >
                      Windows secretsdump (SAM / NTDS)
                    </button>
                    <button
                      onClick={() => setBatchInput(BATCH_SAMPLES.shadow)}
                      className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-cyber-card border border-slate-200 dark:border-cyber-border text-slate-700 dark:text-cyber-muted hover:text-white hover:border-amber-500 text-[10px]"
                    >
                      Linux /etc/shadow Dump
                    </button>
                    <button
                      onClick={() => setBatchInput(BATCH_SAMPLES.responder)}
                      className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-cyber-card border border-slate-200 dark:border-cyber-border text-slate-700 dark:text-cyber-muted hover:text-white hover:border-amber-500 text-[10px]"
                    >
                      Responder NetNTLMv2 Capture
                    </button>
                  </div>
                </div>

                {/* Batch Analysis Telemetry */}
                {batchResult.validItems.length > 0 ? (
                  <div className="space-y-4">
                    <div className="p-3.5 rounded-xl border border-amber-500/30 bg-amber-500/10 flex flex-wrap items-center justify-between gap-3">
                      <div className="flex flex-wrap items-center gap-3">
                        <div className="px-2.5 py-1 rounded bg-black/40 text-amber-400 font-bold border border-amber-500/30">
                          {batchResult.formatIdentified}
                        </div>
                        <div className="text-xs text-slate-700 dark:text-slate-300">
                          Parsed <strong>{batchResult.validItems.length}</strong> items (
                          <strong>{batchResult.uniqueHashes.length}</strong> unique hashes)
                        </div>
                      </div>

                      <div className="flex flex-wrap items-center gap-2">
                        <button
                          onClick={() => handleCopy('batch-hashes', batchResult.cleanHashesText)}
                          className="px-3 py-1.5 rounded-lg bg-slate-900 text-amber-400 border border-amber-500/40 hover:bg-amber-500 hover:text-black transition-all flex items-center gap-1.5 font-bold text-xs"
                          title="Copy clean hashes.txt with blank LMs stripped"
                        >
                          {copiedId === 'batch-hashes' ? (
                            <Check className="w-3.5 h-3.5 text-emerald-400" />
                          ) : (
                            <Copy className="w-3.5 h-3.5" />
                          )}
                          <span>Copy Clean Hashes (hashes.txt)</span>
                        </button>

                        {batchResult.userHashText && (
                          <button
                            onClick={() => handleCopy('batch-user-hash', batchResult.userHashText)}
                            className="px-3 py-1.5 rounded-lg bg-slate-900 text-cyan-400 border border-cyan-500/40 hover:bg-cyan-500 hover:text-black transition-all flex items-center gap-1.5 font-bold text-xs"
                            title="Copy user:hash format"
                          >
                            {copiedId === 'batch-user-hash' ? (
                              <Check className="w-3.5 h-3.5 text-emerald-400" />
                            ) : (
                              <Copy className="w-3.5 h-3.5" />
                            )}
                            <span>Copy user:hash</span>
                          </button>
                        )}

                        {batchResult.pthCommands.length > 0 && (
                          <button
                            onClick={() => handleCopy('batch-pth', batchResult.pthCommands.join('\n'))}
                            className="px-3 py-1.5 rounded-lg bg-slate-900 text-emerald-400 border border-emerald-500/40 hover:bg-emerald-500 hover:text-black transition-all flex items-center gap-1.5 font-bold text-xs"
                            title="Copy NetExec Pass-the-Hash commands"
                          >
                            {copiedId === 'batch-pth' ? (
                              <Check className="w-3.5 h-3.5" />
                            ) : (
                              <Terminal className="w-3.5 h-3.5" />
                            )}
                            <span>Copy PTH Commands</span>
                          </button>
                        )}

                        {activeTargetId && (
                          <button
                            onClick={handleBatchSendToVault}
                            className="px-3 py-1.5 rounded-lg bg-cyber-emerald text-black font-bold hover:bg-cyber-emerald/90 transition-all flex items-center gap-1.5 text-xs shadow-sm"
                            title="Import all extracted credentials into target vault"
                          >
                            {batchSentToVault ? (
                              <>
                                <Check className="w-3.5 h-3.5" />
                                <span>Imported!</span>
                              </>
                            ) : (
                              <>
                                <Key className="w-3.5 h-3.5" />
                                <span>Send All to Vault</span>
                              </>
                            )}
                          </button>
                        )}
                      </div>
                    </div>

                    {/* Parsed List Table */}
                    <div className="rounded-xl border border-slate-200 dark:border-cyber-border overflow-hidden bg-white dark:bg-cyber-card">
                      <div className="max-h-60 overflow-y-auto divide-y divide-slate-100 dark:divide-cyber-border/40">
                        {batchResult.validItems.map((item, idx) => (
                          <div
                            key={idx}
                            className="flex items-center justify-between p-2.5 px-3 hover:bg-slate-50 dark:hover:bg-cyber-bg/50 transition-colors"
                          >
                            <div className="flex items-center gap-3 min-w-0 flex-1">
                              <span className="text-slate-400 text-[10px] w-6">#{idx + 1}</span>
                              {item.username && (
                                <span className="font-bold text-slate-800 dark:text-white px-2 py-0.5 rounded bg-slate-100 dark:bg-cyber-bg border border-slate-200 dark:border-cyber-border">
                                  {item.username}
                                </span>
                              )}
                              <code className="text-slate-600 dark:text-slate-300 truncate text-[11px] select-all flex-1">
                                {item.hash}
                              </code>
                              <span className="px-1.5 py-0.2 rounded text-[10px] bg-amber-500/10 text-amber-500 border border-amber-500/30">
                                {item.type}
                              </span>
                              {item.isLmBlank && (
                                <span className="px-1.5 py-0.2 rounded text-[9px] bg-slate-800 text-slate-400">
                                  Blank LM Stripped
                                </span>
                              )}
                            </div>

                            <button
                              onClick={() => handleCopy(`item-${idx}`, item.hash)}
                              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-900 dark:hover:text-white ml-2 transition-colors"
                              title="Copy hash"
                            >
                              {copiedId === `item-${idx}` ? (
                                <Check className="w-3.5 h-3.5 text-emerald-400" />
                              ) : (
                                <Copy className="w-3.5 h-3.5" />
                              )}
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="rounded-xl border border-dashed border-slate-200 dark:border-cyber-border p-6 text-center text-slate-400 dark:text-cyber-muted">
                    Paste raw credential output from secretsdump, /etc/shadow, or Responder to filter blank LM hashes, extract usernames, and export clean wordlists.
                  </div>
                )}
              </div>
            )}

            {/* TAB 3: *2JOHN EXTRACTION ARSENAL */}
            {activeTab === 'extractors' && (
              <div className="space-y-4">
                <div className="border-b border-slate-200 dark:border-cyber-border pb-3 flex items-center justify-between">
                  <div>
                    <h3 className="font-bold text-sm text-slate-900 dark:text-white flex items-center gap-2">
                      <FolderArchive className="w-4 h-4 text-amber-500" />
                      <span>OFFLINE EXTRACTION SYNTAX ARSENAL (*2john)</span>
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-cyber-muted mt-0.5">
                      Tactical commands to extract crackable password hashes from encrypted archives, keys, and containers.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {EXTRACTOR_ARSENAL.map((ext, idx) => {
                    const id = `ext-${idx}`;
                    const isCopied = copiedId === id;
                    return (
                      <div
                        key={id}
                        className="rounded-xl border border-slate-200 dark:border-cyber-border bg-slate-50 dark:bg-cyber-bg/60 p-3.5 space-y-2 hover:border-amber-500/50 transition-colors"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-slate-900 dark:text-white">
                              {ext.name}
                            </span>
                            <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-amber-500/10 text-amber-500 border border-amber-500/30">
                              {ext.tool}
                            </span>
                          </div>
                          <span className="text-[10px] text-slate-500 dark:text-cyber-muted">
                            {ext.target}
                          </span>
                        </div>

                        <p className="text-[11px] text-slate-600 dark:text-slate-400">
                          {ext.desc}
                        </p>

                        <div className="flex items-center justify-between gap-2 p-2 rounded-lg bg-slate-900 border border-slate-800">
                          <code className="text-xs font-mono text-amber-400 truncate select-all flex-1">
                            {ext.cmd}
                          </code>
                          <button
                            onClick={() => handleCopy(id, ext.cmd)}
                            className="p-1.5 rounded-md bg-slate-800 hover:bg-amber-500 hover:text-black text-slate-300 transition-colors"
                            title="Copy extraction command"
                          >
                            {isCopied ? (
                              <Check className="w-3.5 h-3.5 text-emerald-400" />
                            ) : (
                              <Copy className="w-3.5 h-3.5" />
                            )}
                          </button>
                        </div>

                        <div className="text-[10px] font-mono text-cyan-400/90 truncate">
                          Crack: <code>{ext.crackCmd}</code>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Footer Bar */}
          <div className="flex-shrink-0 flex items-center justify-between border-t border-slate-200 dark:border-cyber-border p-3 px-4 bg-slate-50 dark:bg-cyber-bg/90 font-mono text-xs">
            <div className="text-slate-500 dark:text-cyber-muted text-[11px] flex items-center gap-2">
              <Shield className="w-3.5 h-3.5 text-emerald-500" />
              <span>100% Client-Side Heuristics • Zero Network Egress • Local Micro-Rainbow Resident</span>
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
