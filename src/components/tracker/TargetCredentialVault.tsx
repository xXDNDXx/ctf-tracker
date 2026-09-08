import React, { useState } from 'react';
import { 
  KeyRound, 
  Plus, 
  Trash2, 
  Copy, 
  Check, 
  Eye, 
  EyeOff, 
  ShieldAlert, 
  Terminal, 
  ChevronDown, 
  ChevronUp, 
  Sparkles,
  Zap,
  Server,
  Lock,
  FileText,
  User,
  ShieldCheck,
  AlertTriangle,
  X,
  Hash
} from 'lucide-react';
import { Machine, CredentialItem, CredentialType, CredentialService } from '../../types';
import { 
  autoDetectCredentialType, 
  formatCredentialString, 
  generateAttackCommands, 
  analyzeAndIdentifyHash,
  AttackCommand 
} from '../../utils/credentialAttackCrafter';
import { playCyberSound, safeCopyToClipboard } from '../../utils/helpers';
import { useCtfStore } from '../../store/useCtfStore';

interface TargetCredentialVaultProps {
  machine: Machine;
  onUpdateCredentials: (credentials: CredentialItem[]) => void;
}

export const TargetCredentialVault: React.FC<TargetCredentialVaultProps> = ({
  machine,
  onUpdateCredentials,
}) => {
  const credentials = machine.credentials || [];
  const soundEnabled = useCtfStore((s) => s.soundEnabled);
  const setHashForgeModalOpen = useCtfStore((s) => s.setHashForgeModalOpen);

  // Form State
  const [isAdding, setIsAdding] = useState(false);
  const [username, setUsername] = useState('');
  const [secret, setSecret] = useState('');
  const [type, setType] = useState<CredentialType>('plaintext');
  const [service, setService] = useState<CredentialService>(machine.os === 'Windows' ? 'smb' : 'ssh');
  const [domain, setDomain] = useState('');
  const [isPrivileged, setIsPrivileged] = useState(false);
  const [notes, setNotes] = useState('');
  const [userManuallySelectedType, setUserManuallySelectedType] = useState(false);

  // UI State
  const [revealedSecrets, setRevealedSecrets] = useState<Record<string, boolean>>({});
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [activeAttackCredId, setActiveAttackCredId] = useState<string | null>(null);

  const toggleReveal = (id: string) => {
    setRevealedSecrets((prev) => ({ ...prev, [id]: !prev[id] }));
    if (soundEnabled) playCyberSound('click');
  };

  const handleCopy = async (text: string, identifier: string) => {
    if (!text) return;
    await safeCopyToClipboard(text);
    setCopiedId(identifier);
    if (soundEnabled) playCyberSound('copy');
    setTimeout(() => setCopiedId(null), 1800);
  };

  const handleSecretChange = (val: string) => {
    setSecret(val);
    if (!userManuallySelectedType && val.trim()) {
      const detected = autoDetectCredentialType(val);
      setType(detected);
    }
  };

  const handleAddCredential = (e: React.FormEvent) => {
    e.preventDefault();
    if (!username.trim() || !secret.trim()) return;

    const newCred: CredentialItem = {
      id: typeof crypto !== 'undefined' && crypto.randomUUID ? `cred-${crypto.randomUUID()}` : `cred-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      username: username.trim(),
      secret: secret.trim(),
      type,
      service,
      domain: domain.trim() || undefined,
      isPrivileged,
      notes: notes.trim() || undefined,
      createdAt: new Date().toISOString(),
    };

    const updated = [newCred, ...credentials];
    onUpdateCredentials(updated);

    // Reset Form
    setUsername('');
    setSecret('');
    setType('plaintext');
    setDomain('');
    setIsPrivileged(false);
    setNotes('');
    setUserManuallySelectedType(false);
    setIsAdding(false);
    if (soundEnabled) playCyberSound('root');
  };

  const handleDeleteCredential = (id: string) => {
    const updated = credentials.filter((c) => c.id !== id);
    onUpdateCredentials(updated);
    if (activeAttackCredId === id) setActiveAttackCredId(null);
    if (soundEnabled) playCyberSound('click');
  };

  const activeAttackCred = credentials.find((c) => c.id === activeAttackCredId);
  const activeAttackCommands: AttackCommand[] = activeAttackCred
    ? generateAttackCommands(activeAttackCred, machine.ip)
    : [];

  return (
    <div className="space-y-4 font-mono">
      {/* Header / Summary Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 p-3.5 rounded-xl bg-slate-100/80 dark:bg-cyber-card/60 border border-slate-200 dark:border-cyber-border">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-lg bg-amber-500/10 dark:bg-amber-500/20 text-amber-600 dark:text-amber-400 border border-amber-500/30">
            <KeyRound className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                Compromised Loot & Credential Vault
              </h3>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-500/20 text-amber-600 dark:text-amber-400 border border-amber-500/30">
                {credentials.length} {credentials.length === 1 ? 'SECRET' : 'SECRETS'}
              </span>
            </div>
            <p className="text-[11px] text-slate-500 dark:text-cyber-muted">
              Structured hashes, passwords, and tokens with 1-click offensive spray execution
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => {
              setHashForgeModalOpen(true);
              if (soundEnabled) playCyberSound('click');
            }}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold border border-cyan-500/40 text-cyan-700 dark:text-cyber-cyan bg-cyan-500/10 hover:bg-cyan-500/20 transition-all shadow-sm"
            title="Launch HashForge (Offline Hash Identifier & Cracker Syntax Crafter)"
          >
            <Hash className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">HASHFORGE</span>
          </button>

          <button
            onClick={() => {
              setIsAdding(!isAdding);
              if (soundEnabled) playCyberSound('click');
            }}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              isAdding
                ? 'bg-slate-200 dark:bg-cyber-card text-slate-700 dark:text-cyber-muted hover:text-white'
                : 'bg-gradient-to-r from-amber-600 to-amber-500 text-white shadow-md shadow-amber-900/30 hover:brightness-110'
            }`}
          >
            {isAdding ? <X className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
            <span>{isAdding ? 'CANCEL' : 'ADD CREDENTIAL'}</span>
          </button>
        </div>
      </div>

      {/* Add Credential Form Drawer */}
      {isAdding && (
        <form
          onSubmit={handleAddCredential}
          className="p-4 rounded-xl bg-slate-50 dark:bg-cyber-card/90 border border-amber-500/40 shadow-xl space-y-3 animate-fadeIn"
        >
          <div className="flex items-center justify-between border-b border-slate-200 dark:border-cyber-border/70 pb-2">
            <div className="flex items-center gap-1.5 text-xs font-bold text-amber-600 dark:text-amber-400 uppercase">
              <Zap className="w-3.5 h-3.5" />
              <span>Record Extracted Secret / Account</span>
            </div>
            <span className="text-[10px] text-slate-400 dark:text-cyber-muted">
              Bound to {machine.name} ({machine.ip || 'No IP'})
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {/* Username */}
            <div>
              <label className="block text-[10px] uppercase font-bold text-slate-600 dark:text-cyber-muted mb-1">
                Username / Identity *
              </label>
              <div className="relative">
                <User className="absolute left-2.5 top-2 w-3.5 h-3.5 text-slate-400 dark:text-cyber-muted" />
                <input
                  type="text"
                  required
                  placeholder="e.g. administrator, svc_sql, root"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full pl-8 pr-3 py-1.5 text-xs rounded-lg bg-white dark:bg-cyber-bg border border-slate-300 dark:border-cyber-border focus:border-amber-500 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 outline-none"
                />
              </div>
            </div>

            {/* Secret / Password / Hash */}
            <div className="sm:col-span-2">
              <label className="block text-[10px] uppercase font-bold text-slate-600 dark:text-cyber-muted mb-1">
                Password / NTLM Hash / Private Key *
              </label>
              <div className="relative">
                <Lock className="absolute left-2.5 top-2 w-3.5 h-3.5 text-slate-400 dark:text-cyber-muted" />
                <input
                  type="text"
                  required
                  placeholder="e.g. P@ssw0rd123! or 31d6cfe0d16ae931b73c59d7e0c089c0"
                  value={secret}
                  onChange={(e) => handleSecretChange(e.target.value)}
                  className="w-full pl-8 pr-3 py-1.5 text-xs rounded-lg bg-white dark:bg-cyber-bg border border-slate-300 dark:border-cyber-border focus:border-amber-500 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 outline-none font-mono"
                />
              </div>
            </div>

            {/* Credential Type */}
            <div>
              <label className="block text-[10px] uppercase font-bold text-slate-600 dark:text-cyber-muted mb-1">
                Secret Type
              </label>
              <select
                value={type}
                onChange={(e) => {
                  setType(e.target.value as CredentialType);
                  setUserManuallySelectedType(true);
                }}
                className="w-full px-2.5 py-1.5 text-xs rounded-lg bg-white dark:bg-cyber-bg border border-slate-300 dark:border-cyber-border focus:border-amber-500 text-slate-900 dark:text-white outline-none cursor-pointer"
              >
                <option value="plaintext">Plaintext Password</option>
                <option value="ntlm">NTLM Hash (Pass-the-Hash)</option>
                <option value="sha512">Linux SHA-512 ($6$)</option>
                <option value="ssh-key">SSH Private Key</option>
                <option value="token">Bearer / API Token</option>
                <option value="ticket">Kerberos Ticket (.kirbi / TGS)</option>
                <option value="other">Other / Custom</option>
              </select>
            </div>

            {/* Target Service */}
            <div>
              <label className="block text-[10px] uppercase font-bold text-slate-600 dark:text-cyber-muted mb-1">
                Target Service
              </label>
              <div className="relative">
                <Server className="absolute left-2.5 top-2 w-3.5 h-3.5 text-slate-400 dark:text-cyber-muted" />
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value as CredentialService)}
                  className="w-full pl-8 pr-3 py-1.5 text-xs rounded-lg bg-white dark:bg-cyber-bg border border-slate-300 dark:border-cyber-border focus:border-amber-500 text-slate-900 dark:text-white outline-none cursor-pointer"
                >
                  <option value="smb">SMB / RPC (Port 445)</option>
                  <option value="winrm">WinRM (Port 5985/5986)</option>
                  <option value="ssh">SSH (Port 22)</option>
                  <option value="mssql">MSSQL (Port 1433)</option>
                  <option value="rdp">RDP (Port 3389)</option>
                  <option value="ldap">LDAP / AD (Port 389/636)</option>
                  <option value="http">HTTP / Web Application</option>
                  <option value="ftp">FTP (Port 21)</option>
                  <option value="other">Other Protocol</option>
                </select>
              </div>
            </div>

            {/* Domain (Optional) */}
            <div>
              <label className="block text-[10px] uppercase font-bold text-slate-600 dark:text-cyber-muted mb-1">
                Domain / Realm (Optional)
              </label>
              <input
                type="text"
                placeholder="e.g. INLANEFREIGHT.LOCAL"
                value={domain}
                onChange={(e) => setDomain(e.target.value)}
                className="w-full px-3 py-1.5 text-xs rounded-lg bg-white dark:bg-cyber-bg border border-slate-300 dark:border-cyber-border focus:border-amber-500 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 outline-none"
              />
            </div>

            {/* Privileged / Admin Checkbox */}
            <div className="flex items-center gap-2 pt-5">
              <label className="flex items-center gap-2 text-xs font-bold text-slate-700 dark:text-white cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={isPrivileged}
                  onChange={(e) => setIsPrivileged(e.target.checked)}
                  className="rounded border-slate-300 dark:border-cyber-border text-amber-500 focus:ring-amber-500 w-4 h-4"
                />
                <span className="flex items-center gap-1 text-red-600 dark:text-red-400">
                  <ShieldAlert className="w-3.5 h-3.5" />
                  Elevated / Admin / DA
                </span>
              </label>
            </div>

            {/* Notes */}
            <div className="sm:col-span-2 lg:col-span-4">
              <label className="block text-[10px] uppercase font-bold text-slate-600 dark:text-cyber-muted mb-1">
                Context Notes / Loot Source
              </label>
              <input
                type="text"
                placeholder="e.g. Extracted from /etc/shadow, found in wp-config.php, dumped via Mimikatz"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full px-3 py-1.5 text-xs rounded-lg bg-white dark:bg-cyber-bg border border-slate-300 dark:border-cyber-border focus:border-amber-500 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 outline-none"
              />
            </div>
          </div>

          <div className="flex items-center justify-end gap-2 pt-2 border-t border-slate-200 dark:border-cyber-border/70">
            <button
              type="button"
              onClick={() => setIsAdding(false)}
              className="px-3 py-1.5 rounded-lg text-xs font-bold text-slate-600 dark:text-cyber-muted hover:text-slate-900 dark:hover:text-white"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-1.5 rounded-lg text-xs font-bold bg-amber-500 hover:bg-amber-400 text-slate-950 shadow-md transition-all flex items-center gap-1.5"
            >
              <Check className="w-3.5 h-3.5" />
              <span>SAVE TO VAULT</span>
            </button>
          </div>
        </form>
      )}

      {/* Attack Command Deck Drawer (Shown when an operator clicks "Attack" on a cred) */}
      {activeAttackCred && (
        <div className="p-4 rounded-xl bg-slate-900 text-white border border-cyber-cyan/50 shadow-2xl space-y-3 animate-fadeIn">
          <div className="flex items-center justify-between border-b border-slate-800 pb-2.5">
            <div className="flex items-center gap-2">
              <div className="p-1.5 rounded-lg bg-cyan-500/20 text-cyber-cyan border border-cyan-500/40">
                <Terminal className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-cyber-cyan flex items-center gap-2">
                  <span>Attack Command Deck</span>
                  <span className="text-[10px] text-slate-400 font-normal">
                    {activeAttackCred.domain ? `${activeAttackCred.domain}\\` : ''}{activeAttackCred.username} @ {machine.ip || '$TARGET'}
                  </span>
                </h4>
                <p className="text-[10px] text-slate-400">
                  Pre-bound terminal execution payloads ready for instant clipboard export
                </p>
              </div>
            </div>
            <button
              onClick={() => setActiveAttackCredId(null)}
              className="p-1 rounded text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 max-h-72 overflow-y-auto pr-1">
            {activeAttackCommands.map((cmd) => (
              <div
                key={cmd.id}
                className="p-2.5 rounded-lg bg-slate-950/80 border border-slate-800 hover:border-cyber-cyan/40 transition-all flex flex-col justify-between gap-2 group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="text-[10px] font-bold text-white flex items-center gap-1.5">
                      <span className="px-1.5 py-0.5 rounded text-[9px] bg-cyan-950 border border-cyan-500/40 text-cyber-cyan font-mono">
                        {cmd.badge}
                      </span>
                      {cmd.label}
                    </span>
                    <button
                      onClick={() => handleCopy(cmd.command, cmd.id)}
                      className="flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-bold bg-slate-800 hover:bg-cyber-cyan hover:text-slate-950 text-slate-300 transition-all"
                    >
                      {copiedId === cmd.id ? (
                        <>
                          <Check className="w-3 h-3 text-emerald-400" />
                          <span>COPIED</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3" />
                          <span>COPY</span>
                        </>
                      )}
                    </button>
                  </div>
                  <p className="text-[10px] text-slate-400 mb-2 leading-relaxed">
                    {cmd.description}
                  </p>
                </div>
                <div className="p-2 rounded bg-slate-900 border border-slate-800/80 font-mono text-[10px] text-emerald-400 break-all select-all">
                  {cmd.command}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Credential List / Table */}
      {credentials.length === 0 ? (
        <div className="p-8 text-center rounded-xl bg-slate-50 dark:bg-cyber-card/30 border border-dashed border-slate-300 dark:border-cyber-border space-y-3">
          <div className="w-12 h-12 mx-auto rounded-xl bg-amber-500/10 dark:bg-amber-500/20 text-amber-500 flex items-center justify-center">
            <KeyRound className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-slate-800 dark:text-white uppercase tracking-wider">
              No Loot or Credentials Logged
            </h4>
            <p className="text-xs text-slate-500 dark:text-cyber-muted max-w-md mx-auto mt-1">
              {machine.os === 'Windows'
                ? 'Harvest local SAM / LSA hashes, Kerberos tickets, or service passwords, then click "Add Credential" to enable one-click NetExec and Evil-WinRM spray attacks.'
                : 'Extract shadow hashes, SSH private keys (id_rsa), or database configuration secrets, then store them here for automated terminal commands.'}
            </p>
          </div>
          <button
            onClick={() => setIsAdding(true)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold bg-amber-500/20 text-amber-600 dark:text-amber-400 border border-amber-500/30 hover:bg-amber-500/30 transition-all"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>RECORD FIRST CREDENTIAL</span>
          </button>
        </div>
      ) : (
        <div className="space-y-2">
          {credentials.map((cred) => {
            const isRevealed = Boolean(revealedSecrets[cred.id]);
            const isAttackActive = activeAttackCredId === cred.id;
            const pairString = formatCredentialString(
              cred,
              cred.domain ? 'domain\\user:pass' : 'user:pass'
            );

            return (
              <div
                key={cred.id}
                className={`p-3 rounded-xl border transition-all ${
                  isAttackActive
                    ? 'bg-cyan-950/20 dark:bg-cyan-950/40 border-cyber-cyan/60 shadow-lg shadow-cyan-950/20'
                    : 'bg-white dark:bg-cyber-card border-slate-200 dark:border-cyber-border hover:border-amber-500/40'
                }`}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
                  {/* Identity & Metadata Badges */}
                  <div className="flex items-start md:items-center gap-2.5 min-w-0">
                    <div
                      className={`p-2 rounded-lg flex-shrink-0 ${
                        cred.isPrivileged
                          ? 'bg-red-500/15 text-red-600 dark:text-red-400 border border-red-500/30'
                          : 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20'
                      }`}
                    >
                      {cred.isPrivileged ? (
                        <ShieldAlert className="w-4 h-4" />
                      ) : (
                        <User className="w-4 h-4" />
                      )}
                    </div>

                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-1.5 mb-0.5">
                        <span className="font-bold text-xs text-slate-900 dark:text-white font-mono truncate">
                          {cred.domain ? `${cred.domain}\\` : ''}{cred.username}
                        </span>

                        {cred.isPrivileged && (
                          <span className="px-1.5 py-0.2 rounded text-[9px] font-bold bg-red-500/20 text-red-600 dark:text-red-400 border border-red-500/30">
                            PRIVILEGED
                          </span>
                        )}

                        <span className="px-1.5 py-0.2 rounded text-[9px] uppercase font-bold bg-slate-100 dark:bg-cyber-bg text-slate-600 dark:text-cyber-muted border border-slate-200 dark:border-cyber-border">
                          {cred.service.toUpperCase()}
                        </span>

                        <span className="px-1.5 py-0.2 rounded text-[9px] uppercase font-bold bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
                          {cred.type.toUpperCase()}
                        </span>
                      </div>

                      {cred.notes && (
                        <p className="text-[11px] text-slate-500 dark:text-cyber-muted truncate">
                          {cred.notes}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Secret Display & Quick Action Buttons */}
                  <div className="flex items-center gap-1.5 flex-wrap">
                    {/* Secret Mask / Reveal */}
                    <div className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-cyber-bg border border-slate-200 dark:border-cyber-border font-mono text-xs">
                      <span className="text-slate-800 dark:text-emerald-400 select-all max-w-[160px] sm:max-w-[220px] truncate">
                        {isRevealed ? cred.secret : '••••••••••••••••'}
                      </span>
                      <button
                        onClick={() => toggleReveal(cred.id)}
                        className="p-0.5 text-slate-400 hover:text-slate-700 dark:hover:text-white transition-colors"
                        title={isRevealed ? 'Mask secret' : 'Reveal secret'}
                      >
                        {isRevealed ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                      </button>
                    </div>

                    {/* Copy Secret */}
                    <button
                      onClick={() => handleCopy(cred.secret, `sec-${cred.id}`)}
                      className="p-1.5 rounded-lg bg-slate-100 dark:bg-cyber-bg border border-slate-200 dark:border-cyber-border text-slate-600 dark:text-cyber-muted hover:text-slate-900 dark:hover:text-white transition-colors"
                      title="Copy Secret / Password"
                    >
                      {copiedId === `sec-${cred.id}` ? (
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>

                    {/* Copy user:pass */}
                    <button
                      onClick={() => handleCopy(pairString, `pair-${cred.id}`)}
                      className="px-2 py-1 rounded-lg bg-slate-100 dark:bg-cyber-bg border border-slate-200 dark:border-cyber-border text-[10px] font-bold text-slate-600 dark:text-cyber-muted hover:text-slate-900 dark:hover:text-white transition-colors"
                      title="Copy user:pass or domain\\user:pass string"
                    >
                      {copiedId === `pair-${cred.id}` ? 'COPIED' : 'U:P'}
                    </button>

                    {/* HashForge 1-Click Cracker (For hashes or tokens) */}
                    {(cred.type === 'ntlm' || cred.type === 'sha512' || cred.type === 'ticket' || cred.type === 'other' || analyzeAndIdentifyHash(cred.secret).candidates.length > 0) && (
                      <button
                        type="button"
                        onClick={() => {
                          setHashForgeModalOpen(true, cred.secret);
                          if (soundEnabled) playCyberSound('click');
                        }}
                        className="flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-bold bg-amber-500/10 dark:bg-amber-500/20 text-amber-700 dark:text-amber-400 border border-amber-500/30 hover:bg-amber-500/30 transition-all shadow-sm"
                        title="Identify & Crack this hash in HashForge (Hashcat & John syntax)"
                      >
                        <Hash className="w-3.5 h-3.5" />
                        <span>CRACK</span>
                      </button>
                    )}

                    {/* Attack Launcher Toggle */}
                    <button
                      onClick={() => {
                        setActiveAttackCredId(isAttackActive ? null : cred.id);
                        if (soundEnabled) playCyberSound('click');
                      }}
                      className={`flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-bold transition-all ${
                        isAttackActive
                          ? 'bg-cyber-cyan text-slate-950 shadow-md shadow-cyan-500/20'
                          : 'bg-cyan-500/10 dark:bg-cyan-500/20 text-cyan-700 dark:text-cyber-cyan border border-cyan-500/30 hover:bg-cyan-500/30'
                      }`}
                      title="Generate NetExec, Evil-WinRM, or SSH attack commands"
                    >
                      <Terminal className="w-3.5 h-3.5" />
                      <span>ATTACK</span>
                      {isAttackActive ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
                    </button>

                    {/* Delete Credential */}
                    <button
                      onClick={() => handleDeleteCredential(cred.id)}
                      className="p-1.5 rounded-lg text-slate-400 hover:text-red-500 hover:bg-red-500/10 transition-colors"
                      title="Delete credential"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
