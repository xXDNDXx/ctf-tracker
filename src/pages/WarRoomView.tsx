import React, { useState, useMemo, useCallback, useEffect, useRef } from 'react';
import { 
  Maximize2, 
  Minimize2, 
  Radio, 
  Target, 
  ShieldAlert, 
  Terminal, 
  KeyRound, 
  FileText, 
  Zap, 
  Sparkles, 
  Dices, 
  Sliders, 
  Server, 
  Layers, 
  Trophy, 
  Flag, 
  ExternalLink,
  Search,
  CheckCircle2,
  Copy,
  Check,
  Hash,
  Play,
  Pause,
  RotateCcw
} from 'lucide-react';
import { useCtfStore, BRAND_THEMES } from '../store/useCtfStore';
import { Machine } from '../types';
import { GraphView } from '../components/tracker/GraphView';
import { TargetCredentialVault } from '../components/tracker/TargetCredentialVault';
import { SessionTimerDisplay } from '../components/common/SessionTimerDisplay';
import { EditableIpBadge } from '../components/common/EditableIpBadge';
import { PlatformBadge } from '../components/common/PlatformBadge';
import { safeCopyToClipboard, playCyberSound, interpolateCommand } from '../utils/helpers';
import { INITIAL_CHEATSHEET } from '../data/cheatsheetsData';
import { generateAllObfuscations } from '../utils/payloadObfuscatorUtils';

type SplitRatio = '50-50' | '70-30' | '30-70';
type ActiveTab = 'loot' | 'commands' | 'notes' | 'forge';

export const WarRoomView: React.FC = () => {
  const {
    machines,
    activeTargetId,
    setActiveTarget,
    updateMachine,
    toggleUserFlag,
    toggleRootFlag,
    soundEnabled,
    globalVars,
    isTimerRunning,
    startTimer,
    pauseTimer,
    resetTimer,
    setCyberForgeModalOpen,
    setCvssModalOpen,
    setHashForgeModalOpen,
  } = useCtfStore();

  const [splitRatio, setSplitRatio] = useState<SplitRatio>('50-50');
  const [activeTab, setActiveTab] = useState<ActiveTab>('loot');
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [commandSearch, setCommandSearch] = useState('');
  const [copiedCmd, setCopiedCmd] = useState<string | null>(null);
  const [copiedForgeId, setCopiedForgeId] = useState<string | null>(null);
  const [forgeInput, setForgeInput] = useState('whoami');

  // Synchronize fullscreen status with document fullscreen state (e.g. on Esc key)
  useEffect(() => {
    const handleFsChange = () => {
      setIsFullscreen(Boolean(document.fullscreenElement));
    };
    document.addEventListener('fullscreenchange', handleFsChange);
    return () => document.removeEventListener('fullscreenchange', handleFsChange);
  }, []);

  // Active target resolution
  const activeTarget = useMemo(() => {
    if (activeTargetId) {
      const found = machines.find((m) => m.id === activeTargetId);
      if (found) return found;
    }
    const completed = machines.find((m) => m.status === 'root' || m.status === 'completed');
    return completed || machines[0];
  }, [machines, activeTargetId]);

  // Roll random target (balanced between HTB & THM)
  const handleRollRandom = useCallback(() => {
    const isHtb = Math.random() < 0.5;
    const pool = machines.filter((m) => isHtb ? m.platform === 'HTB' : m.platform === 'THM');
    const finalPool = pool.length > 0 ? pool : machines;
    const randomTarget = finalPool[Math.floor(Math.random() * finalPool.length)];
    if (randomTarget) {
      setActiveTarget(randomTarget.id);
      if (soundEnabled) playCyberSound('flag');
    }
  }, [machines, setActiveTarget, soundEnabled]);

  // Toggle Fullscreen browser API
  const handleToggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
      }
      setIsFullscreen(false);
    }
    if (soundEnabled) playCyberSound('click');
  };

  // Local debounced state for Field Notes
  const [localNotes, setLocalNotes] = useState(activeTarget?.quickNotes || '');
  const notesDebounceRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setLocalNotes(activeTarget?.quickNotes || '');
  }, [activeTarget?.id]);

  const handleNotesChange = (val: string) => {
    setLocalNotes(val);
    if (!activeTarget) return;
    if (notesDebounceRef.current) clearTimeout(notesDebounceRef.current);
    notesDebounceRef.current = setTimeout(() => {
      updateMachine(activeTarget.id, { quickNotes: val });
    }, 300);
  };

  useEffect(() => {
    return () => {
      if (notesDebounceRef.current) clearTimeout(notesDebounceRef.current);
    };
  }, []);

  // Variable context for command interpolation
  const targetVars = useMemo(() => {
    return {
      ...globalVars,
      targetIp: activeTarget?.ip || globalVars.targetIp,
    };
  }, [globalVars, activeTarget]);

  // Filtered tactical commands for quick execution deck
  const cheatsheets = useCtfStore((s) => s.cheatsheets);
  const commandsPool = cheatsheets && cheatsheets.length > 0 ? cheatsheets : INITIAL_CHEATSHEET;

  const tacticalCommands = useMemo(() => {
    if (!commandSearch.trim()) return commandsPool.slice(0, 16);
    const q = commandSearch.toLowerCase();
    return commandsPool.filter(
      (c) =>
        c.title.toLowerCase().includes(q) ||
        c.commandTemplate.toLowerCase().includes(q) ||
        c.category.toLowerCase().includes(q) ||
        c.tags.some((t) => t.toLowerCase().includes(q))
    ).slice(0, 30);
  }, [commandSearch, commandsPool]);

  const handleCopyCommand = async (rawCmd: string, id: string) => {
    const interpolated = interpolateCommand(rawCmd, targetVars);
    await safeCopyToClipboard(interpolated);
    setCopiedCmd(id);
    if (soundEnabled) playCyberSound('copy');
    setTimeout(() => setCopiedCmd(null), 2000);
  };

  const forgeResults = useMemo(() => {
    return generateAllObfuscations(forgeInput).slice(0, 8);
  }, [forgeInput]);

  return (
    <div className="flex flex-col h-[calc(100vh-80px)] min-h-[600px] bg-slate-50 dark:bg-[#050811] text-slate-800 dark:text-slate-200 font-mono overflow-hidden rounded-xl border border-slate-200 dark:border-cyber-border shadow-2xl">
      {/* Top Operations Deck Status Bar */}
      <div className="flex-shrink-0 bg-white dark:bg-[#080d19] border-b border-slate-200 dark:border-cyber-border px-4 py-2.5 flex flex-wrap items-center justify-between gap-3 text-xs">
        {/* Left: Branding & Status Indicator */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
            <span className="text-xs font-black tracking-widest text-slate-900 dark:text-white uppercase flex items-center gap-1.5">
              WAR ROOM <span className="text-cyan-600 dark:text-cyber-cyan">//</span> DUAL-PANE OPS DECK
            </span>
          </div>

          <span className="hidden sm:inline-block px-2 py-0.5 rounded text-[10px] font-bold bg-cyan-500/10 text-cyan-700 dark:text-cyber-cyan border border-cyan-500/30 uppercase tracking-wider">
            OFFENSIVE OPS MODE
          </span>
        </div>

        {/* Center: Target Switcher & Randomizer */}
        <div className="flex items-center gap-2">
          <label htmlFor="warroom-target-select" className="text-[11px] text-slate-500 dark:text-cyber-muted font-bold uppercase hidden md:inline">
            Active Target:
          </label>
          <select
            id="warroom-target-select"
            value={activeTarget?.id || ''}
            onChange={(e) => setActiveTarget(e.target.value)}
            className="bg-slate-100 dark:bg-[#03060d] text-xs font-bold text-cyan-700 dark:text-cyber-cyan px-2.5 py-1 rounded border border-slate-300 dark:border-cyber-border focus:border-cyber-cyan outline-none max-w-[180px] sm:max-w-[240px] truncate"
          >
            {machines.map((m) => (
              <option key={m.id} value={m.id}>
                {m.platform} &middot; {m.name} ({m.difficulty})
              </option>
            ))}
          </select>

          <button
            onClick={handleRollRandom}
            title="Roll Random Balanced Target"
            aria-label="Roll Random Balanced Target"
            className="px-2 py-1 rounded bg-slate-100 dark:bg-cyber-card hover:bg-cyan-50 dark:hover:bg-cyber-cyan/15 text-slate-700 dark:text-slate-300 hover:text-cyan-700 dark:hover:text-cyber-cyan border border-slate-300 dark:border-cyber-border hover:border-cyan-400 dark:hover:border-cyber-cyan/40 transition-all text-xs font-bold flex items-center gap-1"
          >
            <Dices className="w-3.5 h-3.5 text-cyan-600 dark:text-cyber-cyan" />
            <span className="hidden sm:inline">Roll</span>
          </button>
        </div>

        {/* Right: Layout Switcher & Fast Tool Launchers */}
        <div className="flex items-center gap-2">
          {/* Quick Tools */}
          <button
            onClick={() => setCyberForgeModalOpen(true)}
            title="Open CyberForge Obfuscator"
            className="px-2 py-1 rounded bg-cyan-500/10 hover:bg-cyan-500/25 text-cyan-700 dark:text-cyber-cyan border border-cyan-500/30 text-[11px] font-bold flex items-center gap-1 transition-all"
          >
            <Zap className="w-3 h-3" /> Forge
          </button>
          <button
            onClick={() => setCvssModalOpen(true)}
            title="Open CVSS 3.1 Calculator"
            className="px-2 py-1 rounded bg-purple-500/10 hover:bg-purple-500/25 text-purple-700 dark:text-purple-400 border border-purple-500/30 text-[11px] font-bold flex items-center gap-1 transition-all"
          >
            <ShieldAlert className="w-3 h-3" /> CVSS
          </button>
          <button
            onClick={() => setHashForgeModalOpen(true)}
            title="Open HashForge Cracker"
            className="px-2 py-1 rounded bg-amber-500/10 hover:bg-amber-500/25 text-amber-700 dark:text-amber-400 border border-amber-500/30 text-[11px] font-bold flex items-center gap-1 transition-all"
          >
            <Hash className="w-3 h-3" /> Hash
          </button>

          <div className="h-3 w-px bg-slate-300 dark:bg-slate-700 mx-1 hidden sm:block" />

          {/* Split Ratio Controls */}
          <div className="hidden lg:flex items-center gap-1 bg-slate-100 dark:bg-[#03060d] p-0.5 rounded border border-slate-300 dark:border-cyber-border text-[10px]">
            {[
              { id: '50-50', label: '50:50' },
              { id: '70-30', label: '70:30 Graph' },
              { id: '30-70', label: '30:70 Ops' },
            ].map((r) => (
              <button
                key={r.id}
                onClick={() => setSplitRatio(r.id as SplitRatio)}
                className={`px-2 py-0.5 rounded font-bold transition-all ${
                  splitRatio === r.id
                    ? 'bg-cyan-600 dark:bg-cyber-cyan text-white dark:text-black'
                    : 'text-slate-600 dark:text-cyber-muted hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {r.label}
              </button>
            ))}
          </div>

          {/* Fullscreen Button */}
          <button
            onClick={handleToggleFullscreen}
            title={isFullscreen ? 'Exit Fullscreen' : 'Fullscreen War Room'}
            className="p-1.5 rounded bg-slate-100 dark:bg-cyber-card hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white border border-slate-300 dark:border-cyber-border transition-all"
          >
            {isFullscreen ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {/* Main Dual-Pane Split Area */}
      <div className="flex-1 flex flex-col lg:flex-row overflow-hidden">
        {/* Left Pane: Attack Topology Canvas Graph */}
        <div
          className={`flex flex-col border-b lg:border-b-0 lg:border-r border-slate-200 dark:border-cyber-border bg-slate-100/70 dark:bg-[#03060d] relative overflow-hidden transition-all duration-200 ${
            splitRatio === '70-30'
              ? 'lg:w-[68%] h-[50%] lg:h-full'
              : splitRatio === '30-70'
              ? 'lg:w-[32%] h-[40%] lg:h-full'
              : 'lg:w-[50%] h-[50%] lg:h-full'
          }`}
        >
          {/* Subnet Header overlay */}
          <div className="absolute top-3 left-3 z-20 flex items-center gap-2 bg-white/95 dark:bg-[#080d19]/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-200 dark:border-cyber-border shadow-sm text-xs">
            <Radio className="w-3.5 h-3.5 text-cyan-600 dark:text-cyber-cyan animate-pulse" />
            <span className="font-bold text-slate-900 dark:text-white tracking-wider">LIVE TOPOLOGY CLUSTER</span>
            <span className="text-[10px] text-slate-500 dark:text-cyber-muted font-mono">({machines.length} nodes)</span>
          </div>

          <div className="flex-1 relative w-full h-full overflow-hidden">
            <GraphView filteredMachines={machines} />
          </div>
        </div>

        {/* Right Pane: Command & Operations Console */}
        <div
          className={`flex flex-col bg-slate-50 dark:bg-[#070b16] overflow-hidden transition-all duration-200 ${
            splitRatio === '70-30'
              ? 'lg:w-[32%] h-[50%] lg:h-full'
              : splitRatio === '30-70'
              ? 'lg:w-[68%] h-[60%] lg:h-full'
              : 'lg:w-[50%] h-[50%] lg:h-full'
          }`}
        >
          {/* Active Target Operator HUD Card (Header of Right Pane) */}
          {activeTarget && (
            <div className="flex-shrink-0 bg-white dark:bg-[#0a0f1d] border-b border-slate-200 dark:border-cyber-border p-3.5">
              <div className="flex flex-wrap items-center justify-between gap-3">
                {/* Target Name, IP, Platform */}
                <div className="flex items-center gap-2.5 flex-wrap">
                  <PlatformBadge platform={activeTarget.platform} />
                  <h3 className="text-base font-black text-slate-900 dark:text-white tracking-wide">
                    {activeTarget.name}
                  </h3>
                  <EditableIpBadge machineId={activeTarget.id} initialIp={activeTarget.ip} size="xs" />
                  <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${
                    activeTarget.status === 'root' || activeTarget.status === 'completed'
                      ? 'bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 border border-emerald-500/30'
                      : activeTarget.status === 'foothold'
                      ? 'bg-amber-500/15 text-amber-700 dark:text-amber-400 border border-amber-500/30'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-300 dark:border-slate-700'
                  }`}>
                    {activeTarget.status.toUpperCase()}
                  </span>
                </div>

                {/* Live Stopwatch & Flag Progression */}
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-2 bg-slate-100 dark:bg-[#050811] px-2 py-1 rounded border border-slate-200 dark:border-cyber-border">
                    {/* Isolated Timer Leaf (Zero-Render cascading) */}
                    <SessionTimerDisplay machineId={activeTarget.id} staticSeconds={activeTarget.timeSpentSeconds || 0} />

                    {/* Stopwatch Start/Pause and Reset controls */}
                    <div className="flex items-center gap-0.5 border-l border-slate-200 dark:border-cyber-border pl-1.5 ml-1">
                      {isTimerRunning && activeTargetId === activeTarget.id ? (
                        <button
                          onClick={() => {
                            pauseTimer();
                            if (soundEnabled) playCyberSound('toggle');
                          }}
                          title="Pause Engagement Stopwatch"
                          aria-label="Pause Engagement Stopwatch"
                          className="p-1 rounded hover:bg-slate-200 dark:hover:bg-slate-800 text-amber-600 dark:text-amber-400 hover:text-amber-700 dark:hover:text-amber-300 transition-colors"
                        >
                          <Pause className="w-3.5 h-3.5" />
                        </button>
                      ) : (
                        <button
                          onClick={() => {
                            if (activeTargetId !== activeTarget.id) {
                              setActiveTarget(activeTarget.id);
                            }
                            startTimer();
                            if (soundEnabled) playCyberSound('click');
                          }}
                          title="Start Engagement Stopwatch"
                          aria-label="Start Engagement Stopwatch"
                          className="p-1 rounded hover:bg-slate-200 dark:hover:bg-slate-800 text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors"
                        >
                          <Play className="w-3.5 h-3.5" />
                        </button>
                      )}
                      <button
                        onClick={() => {
                          if (confirm(`Reset session stopwatch for ${activeTarget.name}?`)) {
                            resetTimer(activeTarget.id);
                            if (soundEnabled) playCyberSound('toggle');
                          }
                        }}
                        title="Reset Engagement Stopwatch"
                        aria-label="Reset Engagement Stopwatch"
                        className="p-1 rounded hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-500 dark:text-cyber-muted hover:text-slate-900 dark:hover:text-white transition-colors"
                      >
                        <RotateCcw className="w-3 h-3" />
                      </button>
                    </div>
                  </div>

                  {/* Flag Toggles */}
                  <button
                    onClick={() => {
                      toggleUserFlag(activeTarget.id);
                      if (soundEnabled) playCyberSound('flag');
                    }}
                    className={`px-2.5 py-1 rounded text-xs font-bold transition-all border flex items-center gap-1 ${
                      activeTarget.userPwnedAt
                        ? 'bg-amber-500/20 text-amber-700 dark:text-amber-400 border-amber-500/40 shadow-[0_0_8px_rgba(245,158,11,0.3)]'
                        : 'bg-slate-100 dark:bg-cyber-card text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border-slate-300 dark:border-cyber-border'
                    }`}
                  >
                    <Flag className="w-3 h-3" />
                    {activeTarget.userPwnedAt ? 'USER PWNED' : 'USER'}
                  </button>

                  <button
                    onClick={() => {
                      toggleRootFlag(activeTarget.id);
                      if (soundEnabled) playCyberSound('root');
                    }}
                    className={`px-2.5 py-1 rounded text-xs font-bold transition-all border flex items-center gap-1 ${
                      activeTarget.rootPwnedAt
                        ? 'bg-emerald-500/20 text-emerald-700 dark:text-emerald-400 border-emerald-500/40 shadow-[0_0_8px_rgba(16,185,129,0.3)]'
                        : 'bg-slate-100 dark:bg-cyber-card text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border-slate-300 dark:border-cyber-border'
                    }`}
                  >
                    <Trophy className="w-3 h-3" />
                    {activeTarget.rootPwnedAt ? 'ROOT PWNED' : 'ROOT'}
                  </button>
                </div>
              </div>

              {/* Open Ports & Vulnerability Pills */}
              {activeTarget.openPorts && activeTarget.openPorts.length > 0 && (
                <div className="flex items-center gap-1.5 mt-2.5 overflow-x-auto text-[10px]">
                  <span className="text-slate-500 dark:text-cyber-muted font-bold flex-shrink-0">PORTS:</span>
                  {activeTarget.openPorts.map((p) => (
                    <span
                      key={p}
                      className="px-1.5 py-0.5 rounded bg-slate-900 text-emerald-400 border border-slate-800 dark:border-cyber-border font-bold"
                    >
                      {p}
                    </span>
                  ))}
                  {activeTarget.cves && activeTarget.cves.length > 0 && (
                    <>
                      <span className="text-slate-500 dark:text-cyber-muted font-bold ml-2 flex-shrink-0">CVES:</span>
                      {activeTarget.cves.map((cve) => (
                        <span
                          key={cve}
                          className="px-1.5 py-0.5 rounded bg-rose-500/10 border border-rose-500/30 text-rose-700 dark:text-rose-400 font-bold"
                        >
                          {cve}
                        </span>
                      ))}
                    </>
                  )}
                </div>
              )}
            </div>
          )}

          {/* Operations Deck Tab Bar */}
          <div className="flex-shrink-0 bg-white dark:bg-[#080d19] border-b border-slate-200 dark:border-cyber-border px-3 flex items-center gap-1 text-xs">
            {[
              { id: 'loot', label: '🔑 LOOT & CREDS', count: activeTarget?.credentials?.length || 0 },
              { id: 'commands', label: '⚡ TACTICAL COMMANDS' },
              { id: 'notes', label: '📝 FIELD LOG' },
              { id: 'forge', label: '⚙️ PAYLOAD FORGE' },
            ].map((t) => (
              <button
                key={t.id}
                onClick={() => {
                  setActiveTab(t.id as ActiveTab);
                  if (soundEnabled) playCyberSound('click');
                }}
                className={`px-3 py-2.5 font-bold border-b-2 transition-all flex items-center gap-1.5 text-xs ${
                  activeTab === t.id
                    ? 'border-cyan-600 dark:border-cyber-cyan text-cyan-700 dark:text-cyber-cyan bg-cyan-50 dark:bg-cyber-cyan/5'
                    : 'border-transparent text-slate-500 dark:text-cyber-muted hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <span>{t.label}</span>
                {t.count !== undefined && t.count > 0 && (
                  <span className="px-1.5 py-0.2 rounded-full text-[9px] bg-cyan-100 dark:bg-cyber-cyan/20 text-cyan-800 dark:text-cyber-cyan font-extrabold">
                    {t.count}
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Operations Tab Body */}
          <div className="flex-1 overflow-y-auto p-4 bg-slate-50 dark:bg-[#060a14]">
            {/* Tab 1: Loot & Credentials */}
            {activeTab === 'loot' && activeTarget && (
              <TargetCredentialVault
                machine={activeTarget}
                onUpdateCredentials={(creds) =>
                  updateMachine(activeTarget.id, { credentials: creds })
                }
              />
            )}

            {/* Tab 2: Tactical Commands Deck */}
            {activeTab === 'commands' && (
              <div className="flex flex-col gap-3">
                <div className="relative">
                  <Search className="w-3.5 h-3.5 text-slate-400 dark:text-cyber-muted absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={commandSearch}
                    onChange={(e) => setCommandSearch(e.target.value)}
                    placeholder="Filter commands (e.g. nmap, ffuf, ligolo, evil-winrm, kerberoast)..."
                    className="w-full bg-white dark:bg-[#03060d] text-xs text-slate-900 dark:text-white pl-9 pr-3 py-2 rounded-lg border border-slate-200 dark:border-cyber-border focus:border-cyan-500 dark:focus:border-cyber-cyan outline-none placeholder:text-slate-400 dark:placeholder:text-slate-600 shadow-xs"
                  />
                </div>

                <div className="space-y-2">
                  {tacticalCommands.map((cmd, idx) => {
                    const interpolated = interpolateCommand(cmd.commandTemplate, targetVars);
                    const isCopied = copiedCmd === `${idx}-${cmd.title}`;

                    return (
                      <div
                        key={cmd.id || idx}
                        className="p-2.5 rounded-lg border border-slate-200 dark:border-cyber-border bg-white dark:bg-[#0a0f1d] hover:border-cyan-400 dark:hover:border-cyber-cyan/40 transition-all shadow-xs group"
                      >
                        <div className="flex items-center justify-between gap-2 mb-1">
                          <span className="text-xs font-bold text-slate-900 dark:text-white">{cmd.title}</span>
                          <button
                            onClick={() => handleCopyCommand(cmd.commandTemplate, `${idx}-${cmd.title}`)}
                            className={`px-2 py-0.5 rounded text-[11px] font-bold border transition-all flex items-center gap-1 ${
                              isCopied
                                ? 'bg-emerald-500/20 text-emerald-700 dark:text-emerald-400 border-emerald-500/40'
                                : 'bg-cyan-50 hover:bg-cyan-100 text-cyan-700 border-cyan-200 dark:bg-cyber-cyan/10 dark:hover:bg-cyber-cyan dark:text-cyber-cyan dark:hover:text-black dark:border-cyber-cyan/30'
                            }`}
                          >
                            {isCopied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                            {isCopied ? 'Copied' : 'Copy'}
                          </button>
                        </div>
                        <pre className="p-2 rounded bg-slate-900 border border-slate-800 dark:border-cyber-border text-xs text-emerald-400 font-mono overflow-x-auto select-all">
                          {interpolated}
                        </pre>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Tab 3: Field Notes */}
            {activeTab === 'notes' && activeTarget && (
              <div className="flex flex-col h-full gap-2">
                <div className="flex items-center justify-between">
                  <label htmlFor="warroom-field-notes" className="text-xs font-bold text-cyan-700 dark:text-cyber-cyan uppercase flex items-center gap-1">
                    <FileText className="w-3.5 h-3.5" /> ACTIVE ENGAGEMENT FIELD NOTES (AUTOSAVED):
                  </label>
                  <span className="text-[10px] text-slate-500 dark:text-cyber-muted font-mono">
                    Target: {activeTarget.name}
                  </span>
                </div>
                <textarea
                  id="warroom-field-notes"
                  rows={14}
                  value={localNotes}
                  onChange={(e) => handleNotesChange(e.target.value)}
                  placeholder="Record credentials, command outputs, foothold methodology, and privilege escalation vectors..."
                  className="w-full flex-1 bg-white dark:bg-[#03060d] text-slate-900 dark:text-slate-200 font-mono text-xs sm:text-sm p-3.5 rounded-lg border border-slate-200 dark:border-cyber-border focus:border-cyan-500 dark:focus:border-cyber-cyan focus:ring-1 focus:ring-cyber-cyan outline-none resize-none leading-relaxed placeholder:text-slate-400 dark:placeholder:text-slate-600 shadow-xs"
                />
              </div>
            )}

            {/* Tab 4: Quick Payload Forge */}
            {activeTab === 'forge' && (
              <div className="flex flex-col gap-3">
                <div>
                  <label htmlFor="warroom-quick-payload" className="text-xs font-bold text-cyan-700 dark:text-cyber-cyan uppercase flex items-center gap-1 mb-1.5">
                    <Zap className="w-3.5 h-3.5" /> QUICK PAYLOAD STRING:
                  </label>
                  <input
                    id="warroom-quick-payload"
                    type="text"
                    value={forgeInput}
                    onChange={(e) => setForgeInput(e.target.value)}
                    placeholder="Enter command or IP (e.g. bash revshell or 169.254.169.254)..."
                    className="w-full bg-white dark:bg-[#03060d] text-emerald-600 dark:text-emerald-400 font-mono text-xs p-2.5 rounded-lg border border-slate-200 dark:border-cyber-border focus:border-cyan-500 dark:focus:border-cyber-cyan outline-none shadow-xs"
                  />
                </div>

                <div className="space-y-2">
                  {forgeResults.map((item) => (
                    <div
                      key={item.id}
                      className="p-2 rounded-lg border border-slate-200 dark:border-cyber-border bg-white dark:bg-[#0a0f1d] flex flex-col gap-1 shadow-xs"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-slate-900 dark:text-white">{item.name}</span>
                        <button
                          onClick={async () => {
                            await safeCopyToClipboard(item.output);
                            setCopiedForgeId(item.id);
                            if (soundEnabled) playCyberSound('copy');
                            setTimeout(() => setCopiedForgeId(null), 2000);
                          }}
                          aria-label={`Copy ${item.name} payload`}
                          className={`px-2 py-0.5 rounded text-[10px] font-bold border transition-all flex items-center gap-1 ${
                            copiedForgeId === item.id
                              ? 'bg-emerald-500/20 text-emerald-700 dark:text-emerald-400 border-emerald-500/40 shadow-[0_0_8px_rgba(16,185,129,0.3)]'
                              : 'bg-cyan-50 hover:bg-cyan-100 text-cyan-700 border-cyan-200 dark:bg-cyber-cyan/10 dark:hover:bg-cyber-cyan dark:text-cyber-cyan dark:hover:text-black dark:border-cyber-cyan/30'
                          }`}
                        >
                          {copiedForgeId === item.id ? <Check className="w-3 h-3 text-emerald-600 dark:text-emerald-400" /> : <Copy className="w-3 h-3" />}
                          {copiedForgeId === item.id ? 'Copied' : 'Copy'}
                        </button>
                      </div>
                      <pre className="p-1.5 rounded bg-slate-900 border border-slate-800 dark:border-cyber-border text-xs text-emerald-400 font-mono overflow-x-auto whitespace-pre-wrap break-all select-all">
                        {item.output}
                      </pre>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
