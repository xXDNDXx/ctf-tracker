import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useShallow } from 'zustand/react/shallow';
import { useCtfStore } from '../../store/useCtfStore';
import { useAuthStore } from '../../store/useAuthStore';
import { 
  Search, 
  Plus, 
  Volume2, 
  VolumeX, 
  ChevronDown, 
  Play, 
  Pause, 
  RotateCcw, 
  Terminal, 
  Copy, 
  Check, 
  Crosshair, 
  Flag, 
  Server, 
  Sparkles, 
  Zap,
  X,
  Dices
} from 'lucide-react';
import { Machine } from '../../types';
import { CyberLogo } from '../common/CyberLogo';
import { PlatformIcon } from '../common/PlatformBadge';
import { EditableIpBadge } from '../common/EditableIpBadge';
import { extractMachineCves } from '../../utils/cveUtils';
import { playCyberSound, formatSeconds, triggerRootCelebration, safeCopyToClipboard } from '../../utils/helpers';
import { recordCurrentVisit } from '../../utils/trafficTracker';
import { UserMenu } from '../auth/UserMenu';
import { ThemeToggle } from '../common/ThemeToggle';


export const pickBalancedRandomMachine = (machines: Machine[], currentId?: string | null): Machine | null => {
  if (!machines.length) return null;
  const pickHtb = Math.random() < 0.5;
  const primary = pickHtb ? 'HTB' : 'THM';
  const secondary = pickHtb ? 'THM' : 'HTB';

  const candidates = currentId ? machines.filter((m) => m.id !== currentId) : machines;
  const poolBase = candidates.length > 0 ? candidates : machines;

  let pool = poolBase.filter(
    (m) => m.platform === primary && m.status !== 'root' && m.status !== 'completed'
  );
  if (pool.length === 0) {
    pool = poolBase.filter(
      (m) => m.platform === secondary && m.status !== 'root' && m.status !== 'completed'
    );
  }
  if (pool.length === 0) {
    pool = poolBase.filter((m) => m.platform === primary);
  }
  if (pool.length === 0) {
    pool = poolBase;
  }

  if (!pool.length) return null;
  return pool[Math.floor(Math.random() * pool.length)];
};

const MissionStopwatchDisplay: React.FC = () => {
  const activeTimerSeconds = useCtfStore((s) => s.activeTimerSeconds);
  return (
    <span className="text-[10px] text-emerald-800 dark:text-cyber-emerald font-bold px-1.5 py-0.5 rounded bg-emerald-50 dark:bg-cyber-bg border border-emerald-300 dark:border-cyber-emerald/30 font-mono">
      {formatSeconds(activeTimerSeconds)}
    </span>
  );
};

const TargetSelectorDropdown: React.FC<{
  onClose: () => void;
  onSelect: (id: string | null) => void;
  soundEnabled: boolean;
  activeTargetId?: string | null;
}> = ({ onClose, onSelect, soundEnabled, activeTargetId }) => {
  const machines = useCtfStore((s) => s.machines);
  const [searchTerm, setSearchTerm] = useState('');

  const handleRollRandom = () => {
    const chosen = pickBalancedRandomMachine(machines, activeTargetId);
    if (chosen) {
      onSelect(chosen.id);
      onClose();
      if (soundEnabled) playCyberSound('flag');
    }
  };

  const filtered = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();
    if (!term) {
      // Balanced 50/50 interleaved selection between HTB and THM
      const htb = machines.filter((m) => m.platform === 'HTB');
      const thm = machines.filter((m) => m.platform === 'THM');
      const balanced: typeof machines = [];
      const maxLen = Math.max(htb.length, thm.length);
      for (let i = 0; i < maxLen && balanced.length < 14; i++) {
        if (htb[i]) balanced.push(htb[i]);
        if (thm[i] && balanced.length < 14) balanced.push(thm[i]);
      }
      return balanced;
    }
    return machines
      .filter((m) => {
        if (m.name.toLowerCase().includes(term) || m.ip.includes(term)) return true;
        const cves = extractMachineCves(m);
        return cves.some((c) => c.toLowerCase().includes(term));
      })
      .slice(0, 14);
  }, [machines, searchTerm]);

  return (
    <div 
      className="absolute left-0 top-full mt-2 w-80 p-2 rounded-xl bg-white dark:bg-cyber-card border border-slate-200 dark:border-cyber-border shadow-2xl z-50 font-mono text-xs space-y-2 backdrop-blur-md"
      onMouseLeave={onClose}
    >
      <div className="text-[10px] text-slate-500 dark:text-cyber-muted uppercase px-1 font-bold flex items-center justify-between">
        <span>ENGAGE MACHINE</span>
        <span className="text-cyan-700 dark:text-cyber-cyan">{machines.length} TARGETS (HTB / THM)</span>
      </div>

      <input
        id="header-target-search-input"
        name="header-target-search"
        aria-label="Type box name, IP, or CVE"
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search box name, IP, or CVE..."
        className="w-full px-2.5 py-1.5 rounded bg-slate-50 dark:bg-cyber-bg border border-slate-200 dark:border-cyber-border text-xs text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-cyber-muted focus:outline-none focus:border-cyan-500 dark:focus:border-cyber-emerald"
        autoFocus
      />

      {/* 🎲 Roll Random Target Button (50/50 HTB / THM) */}
      <button
        type="button"
        onClick={handleRollRandom}
        className="w-full p-1.5 rounded bg-gradient-to-r from-purple-100 via-cyan-100 to-emerald-100 dark:from-purple-500/15 dark:via-cyan-500/15 dark:to-emerald-500/15 hover:from-purple-200 hover:via-cyan-200 hover:to-emerald-200 dark:hover:from-purple-500/25 dark:hover:via-cyan-500/25 dark:hover:to-emerald-500/25 border border-purple-300 dark:border-purple-500/30 hover:border-purple-400 text-slate-900 dark:text-white text-[11px] font-bold transition-all shadow-xs group"
        title="Randomly choose an uncompleted machine (50/50 balanced between HTB & THM)"
        aria-label="Roll Random Target (50/50 balanced between HTB and THM)"
      >
        <Dices className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400 group-hover:rotate-180 transition-transform duration-300" />
        <span>ROLL RANDOM TARGET (50/50 HTB / THM)</span>
      </button>

      {activeTargetId && (
        <button
          type="button"
          onClick={() => {
            onSelect(null);
            onClose();
            if (soundEnabled) playCyberSound('click');
          }}
          className="w-full p-1.5 rounded bg-cyber-crimson/10 border border-cyber-crimson/30 hover:bg-cyber-crimson/20 flex items-center justify-center gap-1.5 text-cyber-crimson text-[11px] font-bold transition-colors"
          aria-label="Disengage active target"
        >
          <X className="w-3 h-3" />
          <span>DISENGAGE / CLOSE ACTIVE TARGET</span>
        </button>
      )}

      <div className="max-h-56 overflow-y-auto space-y-1 scrollbar-thin">
        {filtered.map((m) => {
          const cves = extractMachineCves(m);
          return (
            <button
              key={m.id}
              onClick={() => {
                onSelect(m.id);
                onClose();
                if (soundEnabled) playCyberSound('toggle');
              }}
              className="w-full p-1.5 rounded hover:bg-cyber-bg flex items-center justify-between text-left transition-colors text-xs group"
              aria-label={`Select target ${m.name} (${m.platform})`}
            >
              <div className="flex items-center justify-between gap-2 min-w-0 flex-1 mr-2">
                <div className="flex items-center gap-1.5 min-w-0 flex-wrap">
                  <PlatformIcon platform={m.platform} className="w-3.5 h-3.5 flex-shrink-0" />
                  <span className="font-bold text-slate-900 dark:text-white truncate group-hover:text-cyber-cyan transition-colors">
                    {m.name}
                  </span>
                  {cves.length > 0 && (
                    <span className="text-[8px] font-mono px-1 py-0.2 rounded bg-rose-500/15 text-rose-500 dark:text-rose-400 font-bold border border-rose-500/30">
                      {cves[0]}
                    </span>
                  )}
                </div>
                <span className="text-[10px] text-cyber-muted flex-shrink-0 font-mono">{m.ip}</span>
              </div>
              <span className={`text-[9px] px-1 py-0.2 rounded font-bold ${
                m.status === 'root' || m.status === 'completed' ? 'text-cyber-emerald' :
                m.status === 'foothold' ? 'text-cyber-amber' : 'text-cyber-muted'
              }`}>
                {m.status.toUpperCase()}
              </span>
            </button>
          );
        })}
        {filtered.length === 0 && (
          <div className="text-center py-2 text-cyber-muted text-[10px]">No targets matching query</div>
        )}
      </div>
    </div>
  );
};

export const Header: React.FC = () => {
  const {
    activeTargetId,
    setActiveTarget,
    isTimerRunning,
    startTimer,
    pauseTimer,
    resetTimer,
    soundEnabled,
    toggleSound,
    globalVars,
    setGlobalVars,
    appBrand,
    setAppBrand,
    updateMachine,
    toggleUserFlag,
    toggleRootFlag,
    setCommandPaletteOpen,
    setNewMachineModalOpen,
    setReconAutomationModalOpen,
  } = useCtfStore(
    useShallow((s) => ({
      activeTargetId: s.activeTargetId,
      setActiveTarget: s.setActiveTarget,
      isTimerRunning: s.isTimerRunning,
      startTimer: s.startTimer,
      pauseTimer: s.pauseTimer,
      resetTimer: s.resetTimer,
      soundEnabled: s.soundEnabled,
      toggleSound: s.toggleSound,
      globalVars: s.globalVars,
      setGlobalVars: s.setGlobalVars,
      appBrand: s.appBrand,
      setAppBrand: s.setAppBrand,
      updateMachine: s.updateMachine,
      toggleUserFlag: s.toggleUserFlag,
      toggleRootFlag: s.toggleRootFlag,
      setCommandPaletteOpen: s.setCommandPaletteOpen,
      setNewMachineModalOpen: s.setNewMachineModalOpen,
      setReconAutomationModalOpen: s.setReconAutomationModalOpen,
    }))
  );

  const activeMachine = useCtfStore((s) => 
    s.activeTargetId ? s.machines.find((m) => m.id === s.activeTargetId) || null : null
  );

  const { user } = useAuthStore();

  const [targetSelectorOpen, setTargetSelectorOpen] = useState(false);
  const [copiedTargetIp, setCopiedTargetIp] = useState(false);
  const [copiedVar, setCopiedVar] = useState<'lhost' | 'lport' | 'target' | null>(null);

  useEffect(() => {
    recordCurrentVisit();
  }, []);

  const brand = {
    namePrefix: 'ZERO',
    nameSuffix: 'BOX',
    suffixColor: 'text-cyber-cyan',
    tagline: 'Tactical Cyber Operations Suite',
  };

  const handleQuickUserPwn = () => {
    if (!activeMachine) return;
    toggleUserFlag(activeMachine.id);
  };

  const handleQuickRootPwn = () => {
    if (!activeMachine) return;
    const willBeRoot = !Boolean(activeMachine.rootPwnedAt || activeMachine.rootFlag || activeMachine.status === 'root' || activeMachine.status === 'completed');
    toggleRootFlag(activeMachine.id);
    if (willBeRoot) {
      triggerRootCelebration();
    }
  };

  const handleCopyTargetIp = async () => {
    if (!activeMachine) return;
    await safeCopyToClipboard(activeMachine.ip);
    setCopiedTargetIp(true);
    if (soundEnabled) playCyberSound('copy');
    setTimeout(() => setCopiedTargetIp(false), 2000);
  };

  const handleCopyVar = async (val: string, field: 'lhost' | 'lport' | 'target') => {
    if (!val) return;
    await safeCopyToClipboard(val);
    setCopiedVar(field);
    if (soundEnabled) playCyberSound('copy');
    setTimeout(() => setCopiedVar(null), 2000);
  };

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 dark:border-cyber-border bg-white/95 dark:bg-cyber-bg/95 text-slate-900 dark:text-cyber-text backdrop-blur-md transition-colors">
      
      {/* Tier 1: Primary Bar (Brand on Left, Centered Global Search, Tools & Profile on Right) */}
      <div className="w-full px-4 xl:px-6 py-2 border-b border-slate-200/60 dark:border-cyber-border/40 flex items-center justify-between gap-3">
        
        {/* Left: Brand Identity (Unified ZEROBOX) */}
        <div className="flex items-center gap-3">
          <Link to="/tracker" className="flex items-center gap-3 group">
            <CyberLogo size="lg" />
            <div className="text-left">
              <div className="flex items-center">
                <span className="font-mono font-extrabold text-lg tracking-wider text-slate-900 dark:text-white">
                  {brand.namePrefix}
                  <span className={brand.suffixColor}>{brand.nameSuffix}</span>
                </span>
              </div>
              <div className="hidden sm:flex text-[11px] font-mono text-slate-600 dark:text-cyber-muted tracking-tight items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-cyber-emerald inline-block shadow-[0_0_8px_#10B981]" />
                <span>{brand.tagline}</span>
              </div>
            </div>
          </Link>
        </div>

        {/* Center: Global Quick Command Search (Ctrl+K) */}
        <div className="hidden sm:flex items-center flex-1 max-w-md mx-4 min-w-0">
          <button
            onClick={() => setCommandPaletteOpen(true)}
            className="w-full flex items-center justify-between px-3 py-1.5 text-xs font-mono rounded-lg bg-slate-100 dark:bg-cyber-card/80 border border-slate-200 dark:border-cyber-border text-slate-500 dark:text-cyber-muted hover:text-slate-900 dark:hover:text-cyber-text hover:border-cyan-500 dark:hover:border-cyber-cyan/50 transition-all shadow-inner group"
            title="Global Quick Search (Ctrl+K)"
            aria-label="Global Quick Search (Ctrl+K)"
          >
            <div className="flex items-center gap-2 truncate">
              <Search className="w-3.5 h-3.5 text-emerald-700 dark:text-cyber-emerald group-hover:text-cyan-700 dark:group-hover:text-cyber-cyan transition-colors flex-shrink-0" />
              <span className="text-[11px] text-slate-600 dark:text-cyber-muted group-hover:text-slate-900 dark:group-hover:text-white transition-colors truncate">
                Search machines, cheats, tools...
              </span>
            </div>
            <kbd className="px-1.5 py-0.5 rounded text-[10px] bg-white dark:bg-cyber-bg border border-slate-300 dark:border-cyber-border text-cyan-800 dark:text-cyber-cyan font-bold shadow-sm flex-shrink-0 ml-1">
              Ctrl+K
            </kbd>
          </button>
        </div>

        {/* Right: Tactical Toggles & User Profile */}
        <div className="flex items-center gap-2">
          {/* Tactical Utilities (Theme, Sound) */}
          <div className="flex items-center gap-1.5 border-r border-slate-200 dark:border-cyber-border/80 pr-2">
            <ThemeToggle size="sm" soundEnabled={soundEnabled} />
            <button
              onClick={toggleSound}
              className={`p-1.5 rounded-md border transition-all ${
                soundEnabled 
                  ? 'bg-slate-100 dark:bg-cyber-card border-slate-200 dark:border-cyber-border text-emerald-700 dark:text-cyber-emerald hover:border-emerald-500' 
                  : 'bg-slate-100 dark:bg-cyber-card border-slate-200 dark:border-cyber-border text-slate-500 dark:text-cyber-muted hover:text-slate-900 dark:hover:text-white'
              }`}
              title={soundEnabled ? 'Mute Cyber Audio FX' : 'Enable Cyber Audio FX'}
              aria-label={soundEnabled ? 'Mute Cyber Audio FX' : 'Enable Cyber Audio FX'}
            >
              {soundEnabled ? <Volume2 className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5" />}
            </button>
          </div>

          {/* User Profile & 1-Click Save Station */}
          <UserMenu />
        </div>
      </div>

      {/* Tier 2: Tactical Operations Strip (Combat HUD, Automations, Add Box & Payload Vars) */}
      <div className="w-full px-3 xl:px-5 py-1 bg-slate-100/90 dark:bg-cyber-card/40 border-b border-slate-200/60 dark:border-transparent flex flex-wrap xl:flex-nowrap items-center justify-between gap-2 text-xs font-mono relative z-20">
        
        {/* Left: Active Target HUD / Quick Selector & Action Buttons */}
        <div className="flex items-center gap-2 flex-shrink-0">
          {activeMachine ? (
            <div className="flex items-center gap-2 bg-white dark:bg-cyber-card border border-emerald-400 dark:border-cyber-emerald/50 px-2.5 py-1 rounded-lg text-xs font-mono shadow-[0_0_15px_rgba(16,185,129,0.25)] relative">
              <PlatformIcon platform={activeMachine.platform} className="w-4 h-4 flex-shrink-0" />
              
              {/* Machine Name & IP */}
              <div className="flex items-center gap-1.5">
                <Link
                  to={`/target/${activeMachine.id}`}
                  className="font-bold text-slate-900 dark:text-white hover:text-cyber-cyan transition-colors truncate max-w-[110px]"
                  title="Open Mission Command Center"
                >
                  {activeMachine.name}
                </Link>

                {/* Editable Target IP Badge */}
                <EditableIpBadge machineId={activeMachine.id} initialIp={activeMachine.ip} size="xs" />
              </div>

              {/* 1-Click Quick Flags */}
              <div className="flex items-center gap-1 border-l border-cyber-border pl-1.5">
                {Boolean(activeMachine.userPwnedAt || activeMachine.userFlag || activeMachine.status === 'foothold' || activeMachine.status === 'root' || activeMachine.status === 'completed') ? (
                  <button 
                    onClick={handleQuickUserPwn}
                    className="px-1.5 py-0.5 rounded text-[9px] font-bold bg-amber-100 dark:bg-cyber-amber/20 text-amber-900 dark:text-cyber-amber border border-amber-300 dark:border-cyber-amber/40 hover:border-rose-500/60 hover:text-rose-600 dark:hover:text-rose-400 hover:bg-rose-500/10 flex items-center gap-0.5 transition-all group"
                    title="User flag captured! Click to unmark / remove if clicked by mistake"
                    aria-label="User flag captured (click to unmark)"
                  >
                    <span>✓ USER</span>
                    <span className="hidden group-hover:inline text-[8px] text-rose-500 ml-0.5">✕</span>
                  </button>
                ) : (
                  <button
                    onClick={handleQuickUserPwn}
                    className="px-1.5 py-0.5 rounded text-[9px] font-bold bg-cyber-bg hover:bg-amber-500 hover:text-black text-amber-700 dark:text-cyber-amber border border-amber-400 dark:border-cyber-amber/50 transition-all flex items-center gap-0.5"
                    title="1-Click: Log User Foothold Pwn"
                    aria-label="Log user foothold pwn"
                  >
                    <Flag className="w-2.5 h-2.5" /> +USER
                  </button>
                )}

                {Boolean(activeMachine.rootPwnedAt || activeMachine.rootFlag || activeMachine.status === 'root' || activeMachine.status === 'completed') ? (
                  <button 
                    onClick={handleQuickRootPwn}
                    className="px-1.5 py-0.5 rounded text-[9px] font-bold bg-emerald-100 dark:bg-cyber-emerald/20 text-emerald-900 dark:text-cyber-emerald border border-emerald-300 dark:border-cyber-emerald/40 shadow-glow-emerald/20 hover:border-rose-500/60 hover:text-rose-600 dark:hover:text-rose-400 hover:bg-rose-500/10 flex items-center gap-0.5 transition-all group"
                    title="System rooted! Click to unmark / remove if clicked by mistake"
                    aria-label="Root system pwned (click to unmark)"
                  >
                    <span>👑 ROOT</span>
                    <span className="hidden group-hover:inline text-[8px] text-rose-500 ml-0.5">✕</span>
                  </button>
                ) : (
                  <button
                    onClick={handleQuickRootPwn}
                    className="px-1.5 py-0.5 rounded text-[9px] font-bold bg-cyber-bg hover:bg-rose-600 hover:text-white text-rose-700 dark:text-cyber-crimson border border-rose-400 dark:border-cyber-crimson/60 animate-pulse transition-all flex items-center gap-0.5"
                    title="1-Click: Log Root Pwn (Celebration!)"
                    aria-label="Log root pwn"
                  >
                    <Flag className="w-2.5 h-2.5" /> +ROOT
                  </button>
                )}
              </div>

              {/* Mission Stopwatch */}
              <div className="flex items-center gap-1 border-l border-cyber-border pl-1.5">
                <MissionStopwatchDisplay />
                {isTimerRunning ? (
                  <button
                    onClick={() => {
                      pauseTimer();
                      if (soundEnabled) playCyberSound('click');
                    }}
                    className="p-1 rounded hover:bg-cyber-bg text-amber-600 dark:text-cyber-amber transition-colors"
                    title="Pause Stopwatch"
                    aria-label="Pause Stopwatch"
                  >
                    <Pause className="w-3 h-3" />
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      startTimer();
                      if (soundEnabled) playCyberSound('timer');
                    }}
                    className="p-1 rounded hover:bg-cyber-bg text-emerald-600 dark:text-cyber-emerald transition-colors"
                    title="Start Stopwatch"
                    aria-label="Start Stopwatch"
                  >
                    <Play className="w-3 h-3" />
                  </button>
                )}
                <button
                  onClick={() => {
                    resetTimer();
                    if (soundEnabled) playCyberSound('click');
                  }}
                  className="p-1 rounded hover:bg-cyber-bg text-cyber-muted hover:text-slate-900 dark:hover:text-white transition-colors"
                  title="Reset Stopwatch"
                  aria-label="Reset Stopwatch"
                >
                  <RotateCcw className="w-3 h-3" />
                </button>
              </div>

              {/* Target Controls: Switch, Roll Next, & Close/Disengage */}
              <div className="flex items-center gap-0.5 border-l border-cyber-border pl-1">
                <button
                  type="button"
                  onClick={() => {
                    const next = pickBalancedRandomMachine(useCtfStore.getState().machines, activeTargetId);
                    if (next) {
                      setActiveTarget(next.id);
                      if (soundEnabled) playCyberSound('flag');
                    }
                  }}
                  className="p-1 rounded hover:bg-purple-500/20 text-cyber-muted hover:text-purple-400 transition-colors"
                  title="Roll Next Random Target (50/50 HTB / THM)"
                  aria-label="Roll Next Random Target"
                >
                  <Dices className="w-3 h-3" />
                </button>

                <button
                  onClick={() => setTargetSelectorOpen(!targetSelectorOpen)}
                  className="p-1 rounded hover:bg-cyber-bg text-cyber-muted hover:text-slate-900 dark:hover:text-white transition-colors"
                  title="Switch Target Box"
                  aria-label="Switch Target Box"
                >
                  <ChevronDown className={`w-3 h-3 transition-transform ${targetSelectorOpen ? 'rotate-180 text-cyber-cyan' : ''}`} />
                </button>

                <button
                  onClick={() => {
                    setActiveTarget(null);
                    setTargetSelectorOpen(false);
                    if (soundEnabled) playCyberSound('click');
                  }}
                  className="p-1 rounded hover:bg-cyber-crimson/20 hover:text-cyber-crimson text-cyber-muted transition-colors"
                  title="Close / Disengage Active Target HUD"
                  aria-label="Close active target"
                >
                  <X className="w-3 h-3" />
                </button>
              </div>

              {/* Target Selector Dropdown */}
              {targetSelectorOpen && (
                <TargetSelectorDropdown
                  onClose={() => setTargetSelectorOpen(false)}
                  onSelect={setActiveTarget}
                  soundEnabled={soundEnabled}
                  activeTargetId={activeTargetId}
                />
              )}
            </div>
          ) : (
            <div className="relative flex items-center gap-1.5">
              <button
                onClick={() => setTargetSelectorOpen(!targetSelectorOpen)}
                className="flex items-center gap-2 px-3 py-1 rounded-lg bg-white dark:bg-cyber-bg border border-slate-300 dark:border-cyber-border hover:border-cyan-500 dark:hover:border-cyber-cyan text-slate-900 dark:text-white text-xs font-semibold transition-all shadow-xs group"
                aria-label="Engage Target Box"
              >
                <span className="w-2 h-2 rounded-full bg-slate-400 dark:bg-cyber-muted group-hover:bg-cyan-600 dark:group-hover:bg-cyber-cyan transition-colors" />
                <span>ENGAGE TARGET</span>
                <ChevronDown className={`w-3 h-3 text-slate-500 dark:text-cyber-muted group-hover:text-cyan-600 dark:group-hover:text-cyber-cyan transition-transform ${targetSelectorOpen ? 'rotate-180' : ''}`} />
              </button>

              <button
                type="button"
                onClick={() => {
                  const allMachines = useCtfStore.getState().machines;
                  const pickHtb = Math.random() < 0.5;
                  const primary = pickHtb ? 'HTB' : 'THM';
                  const secondary = pickHtb ? 'THM' : 'HTB';
                  let pool = allMachines.filter(
                    (m) => m.platform === primary && m.status !== 'root' && m.status !== 'completed'
                  );
                  if (pool.length === 0) {
                    pool = allMachines.filter(
                      (m) => m.platform === secondary && m.status !== 'root' && m.status !== 'completed'
                    );
                  }
                  if (pool.length === 0) pool = allMachines.filter((m) => m.platform === primary);
                  if (pool.length === 0) pool = allMachines;
                  if (pool.length > 0) {
                    const chosen = pool[Math.floor(Math.random() * pool.length)];
                    setActiveTarget(chosen.id);
                    if (soundEnabled) playCyberSound('flag');
                  }
                }}
                className="flex items-center gap-1 px-2 py-1 rounded-lg bg-white dark:bg-cyber-bg border border-slate-300 dark:border-cyber-border hover:border-purple-500/60 text-slate-700 dark:text-cyber-muted hover:text-slate-900 dark:hover:text-white text-xs font-semibold transition-all shadow-xs group"
                title="Roll Random Target (50/50 balanced between HTB & THM)"
                aria-label="Roll Random Target (50/50 balanced between HTB and THM)"
              >
                <Dices className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400 group-hover:rotate-180 transition-transform duration-300" />
                <span className="hidden lg:inline text-[11px]">Roll</span>
              </button>

              {/* Target Selector Dropdown */}
              {targetSelectorOpen && (
                <TargetSelectorDropdown
                  onClose={() => setTargetSelectorOpen(false)}
                  onSelect={setActiveTarget}
                  soundEnabled={soundEnabled}
                  activeTargetId={activeTargetId}
                />
              )}
            </div>
          )}

          {/* Tactical Automation Hub Button */}
          <button
            onClick={() => setReconAutomationModalOpen(true)}
            className="flex items-center gap-1 px-2 py-1 rounded-md bg-cyan-100 dark:bg-cyber-cyan/10 text-cyan-900 dark:text-cyber-cyan border border-cyan-400 dark:border-cyber-cyan/40 hover:bg-cyan-500 hover:text-black font-mono text-xs font-semibold transition-all shadow-glow-cyan/20"
            title="Open Tactical Automation Hub (Multi-Format Scan Importer & Payload Crafter)"
            aria-label="Open Tactical Automation Hub"
          >
            <Zap className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Scans</span>
          </button>


          {/* Quick Add Custom Machine Button */}
          <button
            onClick={() => setNewMachineModalOpen(true)}
            className="flex items-center gap-1 px-2 py-1 rounded-md bg-emerald-100 dark:bg-cyber-emerald/10 text-emerald-900 dark:text-cyber-emerald border border-emerald-300 dark:border-cyber-emerald/40 hover:bg-emerald-600 dark:hover:bg-cyber-emerald hover:text-white dark:hover:text-black font-mono text-xs font-semibold transition-all shadow-sm"
            title="Deploy Custom Lab Box"
            aria-label="Deploy Custom Lab Box"
          >
            <Plus className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Box</span>
          </button>
        </div>



        {/* Right: Live Variable Injection Hub (LHOST, LPORT, TARGET) */}
        <div className="hidden sm:flex items-center gap-1.5 bg-white/95 dark:bg-cyber-card/80 border border-slate-200 dark:border-cyber-border/80 rounded-lg p-1 px-2 font-mono text-xs flex-shrink-0 shadow-xs">
          <span className="text-[10px] uppercase font-semibold text-cyan-800 dark:text-cyber-cyan tracking-wider flex items-center gap-1">
            <Server className="w-3 h-3" />
            <span className="hidden xl:inline">VARS:</span>
          </span>

          {/* LHOST */}
          <div className={`flex items-center gap-1 bg-slate-50 dark:bg-cyber-bg px-1.5 py-0.5 rounded border transition-all ${
            copiedVar === 'lhost'
              ? 'border-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.35)] bg-emerald-50 dark:bg-cyber-emerald/10'
              : 'border-slate-200 dark:border-cyber-border focus-within:border-cyan-500 dark:focus-within:border-cyber-cyan'
          }`}>
            <span className="text-[10px] text-slate-500 dark:text-cyber-muted font-bold flex-shrink-0">L:</span>
            <input
              type="text"
              id="header-lhost-input"
              name="header-lhost"
              aria-label="Attacker IP LHOST"
              size={15}
              title={`LHOST: ${globalVars.lhost || '10.10.14.x'} (Click to edit, full IP always visible)`}
              value={globalVars.lhost}
              onChange={(e) => setGlobalVars({ lhost: e.target.value })}
              onFocus={(e) => e.target.select()}
              className="w-[110px] bg-transparent text-slate-900 dark:text-white font-mono text-[11px] tracking-tight focus:outline-none selection:bg-cyan-500/25 selection:text-current"
              placeholder="10.10.14.x"
            />
            <button
              onClick={() => handleCopyVar(globalVars.lhost, 'lhost')}
              className={`p-0.5 rounded transition-all flex items-center flex-shrink-0 ${
                copiedVar === 'lhost'
                  ? 'text-emerald-700 dark:text-cyber-emerald'
                  : 'text-slate-500 dark:text-cyber-muted hover:text-cyan-600 dark:hover:text-cyber-cyan'
              }`}
              title="Copy LHOST to clipboard"
              aria-label="Copy LHOST to clipboard"
            >
              {copiedVar === 'lhost' ? (
                <Check className="w-3 h-3 stroke-[3] text-emerald-700 dark:text-cyber-emerald" />
              ) : (
                <Copy className="w-3 h-3" />
              )}
            </button>
          </div>

          {/* LPORT */}
          <div className={`flex items-center gap-1 bg-slate-50 dark:bg-cyber-bg px-1.5 py-0.5 rounded border transition-all ${
            copiedVar === 'lport'
              ? 'border-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.35)] bg-emerald-50 dark:bg-cyber-emerald/10'
              : 'border-slate-200 dark:border-cyber-border focus-within:border-cyan-500 dark:focus-within:border-cyber-cyan'
          }`}>
            <span className="text-[10px] text-slate-500 dark:text-cyber-muted font-bold flex-shrink-0">P:</span>
            <input
              type="text"
              id="header-lport-input"
              name="header-lport"
              aria-label="Attacker Port LPORT"
              size={5}
              title={`LPORT: ${globalVars.lport || '4444'}`}
              value={globalVars.lport}
              onChange={(e) => setGlobalVars({ lport: e.target.value })}
              onFocus={(e) => e.target.select()}
              className="w-[44px] bg-transparent text-slate-900 dark:text-white font-mono text-[11px] text-center tracking-tight focus:outline-none selection:bg-cyan-500/25 selection:text-current"
              placeholder="4444"
            />
            <button
              onClick={() => handleCopyVar(globalVars.lport, 'lport')}
              className={`p-0.5 rounded transition-all flex items-center flex-shrink-0 ${
                copiedVar === 'lport'
                  ? 'text-emerald-700 dark:text-cyber-emerald'
                  : 'text-slate-500 dark:text-cyber-muted hover:text-cyan-600 dark:hover:text-cyber-cyan'
              }`}
              title="Copy LPORT to clipboard"
              aria-label="Copy LPORT to clipboard"
            >
              {copiedVar === 'lport' ? (
                <Check className="w-3 h-3 stroke-[3] text-emerald-700 dark:text-cyber-emerald" />
              ) : (
                <Copy className="w-3 h-3" />
              )}
            </button>
          </div>

          {/* TARGET_IP */}
          <div className={`flex items-center gap-1 bg-slate-50 dark:bg-cyber-bg px-1.5 py-0.5 rounded border transition-all ${
            copiedVar === 'target'
              ? 'border-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.35)] bg-emerald-50 dark:bg-cyber-emerald/10'
              : 'border-slate-200 dark:border-cyber-border focus-within:border-emerald-500'
          }`}>
            <span className="text-[10px] text-slate-500 dark:text-cyber-muted font-bold flex-shrink-0">T:</span>
            <input
              type="text"
              id="header-target-ip-input"
              name="header-target-ip"
              aria-label="Target IP Address"
              data-testid="header-target-ip-input"
              size={15}
              title={`Target IP: ${globalVars.targetIp || '10.10.10.x'} (Click to edit, full IP always visible)`}
              value={globalVars.targetIp}
              onChange={(e) => setGlobalVars({ targetIp: e.target.value })}
              onFocus={(e) => e.target.select()}
              className="w-[110px] bg-transparent text-emerald-800 dark:text-cyber-emerald font-mono text-[11px] font-semibold tracking-tight focus:outline-none selection:bg-cyan-500/25 selection:text-current"
              placeholder="10.10.10.x"
            />
            <button
              onClick={() => handleCopyVar(globalVars.targetIp, 'target')}
              className={`p-0.5 rounded transition-all flex items-center flex-shrink-0 ${
                copiedVar === 'target'
                  ? 'text-emerald-700 dark:text-cyber-emerald'
                  : 'text-slate-500 dark:text-cyber-muted hover:text-emerald-700 dark:hover:text-cyber-emerald'
              }`}
              title="Copy Target IP to clipboard"
              aria-label="Copy Target IP to clipboard"
            >
              {copiedVar === 'target' ? (
                <Check className="w-3 h-3 stroke-[3] text-emerald-700 dark:text-cyber-emerald" />
              ) : (
                <Copy className="w-3 h-3" />
              )}
            </button>
          </div>
        </div>

      </div>
    </header>
  );
};
