import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Crosshair, 
  Play, 
  Pause, 
  RotateCcw, 
  Tv, 
  Volume2, 
  VolumeX, 
  Database, 
  Search, 
  Plus, 
  Copy, 
  Check, 
  Server,
  ChevronDown,
  Sparkles,
  Flag,
  ExternalLink,
  Zap
} from 'lucide-react';
import { useCtfStore, BRAND_THEMES } from '../../store/useCtfStore';
import { formatSeconds, playCyberSound, triggerRootCelebration } from '../../utils/helpers';
import { CyberLogo } from '../common/CyberLogo';
import { PlatformIcon } from '../common/PlatformBadge';
import { UserMenu } from '../auth/UserMenu';

export const Header: React.FC = () => {
  const {
    appBrand,
    setAppBrand,
    globalVars,
    setGlobalVars,
    activeTargetId,
    machines,
    isTimerRunning,
    activeTimerSeconds,
    startTimer,
    pauseTimer,
    resetTimer,
    tickTimer,
    crtOverlay,
    toggleCrtOverlay,
    soundEnabled,
    toggleSound,
    setCommandPaletteOpen,
    setNewMachineModalOpen,
    setBackupModalOpen,
    setReconAutomationModalOpen,
    setActiveTarget,
    setSelectedMachineId,
    updateMachineStatus,
    updateMachine,
  } = useCtfStore();

  const [copiedLhost, setCopiedLhost] = useState(false);
  const [copiedTargetIp, setCopiedTargetIp] = useState(false);
  const [brandDropdownOpen, setBrandDropdownOpen] = useState(false);
  const [targetSelectorOpen, setTargetSelectorOpen] = useState(false);
  const [targetSearchTerm, setTargetSearchTerm] = useState('');

  const activeMachine = machines.find((m) => m.id === activeTargetId);
  const activeBrand = BRAND_THEMES.find((b) => b.id === appBrand) || BRAND_THEMES[0];

  const handleQuickUserPwn = () => {
    if (!activeMachine) return;
    updateMachineStatus(activeMachine.id, 'foothold');
    updateMachine(activeMachine.id, { 
      userPwnedAt: new Date().toISOString(),
      userFlag: activeMachine.userFlag || 'FLAG{USER_CAPTURED_VIA_COMBAT_HUD}'
    });
    if (soundEnabled) playCyberSound('flag');
  };

  const handleQuickRootPwn = () => {
    if (!activeMachine) return;
    updateMachineStatus(activeMachine.id, 'root');
    updateMachine(activeMachine.id, { 
      rootPwnedAt: new Date().toISOString(),
      rootFlag: activeMachine.rootFlag || 'FLAG{ROOT_CAPTURED_VIA_COMBAT_HUD}'
    });
    triggerRootCelebration();
    if (soundEnabled) playCyberSound('root');
  };

  const handleCopyTargetIp = () => {
    if (!activeMachine) return;
    navigator.clipboard.writeText(activeMachine.ip);
    setCopiedTargetIp(true);
    if (soundEnabled) playCyberSound('copy');
    setTimeout(() => setCopiedTargetIp(false), 2000);
  };

  // Timer ticker interval
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isTimerRunning) {
      interval = setInterval(() => {
        tickTimer();
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isTimerRunning, tickTimer]);

  const handleCopyLhost = () => {
    navigator.clipboard.writeText(globalVars.lhost);
    setCopiedLhost(true);
    if (soundEnabled) playCyberSound('copy');
    setTimeout(() => setCopiedLhost(false), 2000);
  };

  return (
    <header className="sticky top-0 z-40 border-b border-cyber-border bg-cyber-bg/95 backdrop-blur-md px-4 py-2.5 transition-colors">
      <div className="flex flex-wrap items-center justify-between gap-3 max-w-[1920px] mx-auto">
        
        {/* Left: Brand & Tactical Identity */}
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="flex items-center gap-2.5">
              <Link to="/tracker" className="flex items-center gap-2.5 group">
                <CyberLogo size="md" />
                <div className="text-left">
                  <div className="flex items-center">
                    <span className="font-mono font-bold text-base tracking-wider text-white">
                      {activeBrand.namePrefix}
                      <span className={activeBrand.suffixColor}>{activeBrand.nameSuffix}</span>
                    </span>
                  </div>
                  <div className="hidden sm:flex text-[10px] font-mono text-cyber-muted tracking-tight items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyber-emerald inline-block shadow-[0_0_6px_#10B981]" />
                    <span>{activeBrand.tagline}</span>
                  </div>
                </div>
              </Link>

              {/* Callsign / Brand Switcher Trigger */}
              <button
                onClick={() => setBrandDropdownOpen(!brandDropdownOpen)}
                className="hidden sm:block p-1 rounded text-cyber-muted hover:text-white hover:bg-cyber-card transition-colors"
                title="Switch Callsign / Brand Theme"
              >
                <ChevronDown className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Brand Theme Switcher Dropdown */}
            {brandDropdownOpen && (
              <div 
                className="absolute left-0 top-full mt-2 w-64 p-2 rounded-xl bg-cyber-card border border-cyber-border shadow-2xl z-50 font-mono text-xs space-y-1 backdrop-blur-md"
                onMouseLeave={() => setBrandDropdownOpen(false)}
              >
                <div className="text-[10px] text-cyber-muted uppercase px-2 py-1 font-bold border-b border-cyber-border/70 flex items-center justify-between">
                  <span>SELECT CALLSIGN / BRAND</span>
                  <Sparkles className="w-3 h-3 text-cyber-cyan" />
                </div>
                {BRAND_THEMES.map((b) => (
                  <button
                    key={b.id}
                    onClick={() => {
                      setAppBrand(b.id);
                      setBrandDropdownOpen(false);
                      if (soundEnabled) playCyberSound('toggle');
                    }}
                    className={`w-full p-2 rounded-lg text-left transition-all flex items-center justify-between ${
                      appBrand === b.id
                        ? 'bg-cyber-bg border border-cyber-emerald/50 text-white font-bold'
                        : 'hover:bg-cyber-bg/80 text-cyber-muted hover:text-white'
                    }`}
                  >
                    <div>
                      <div className="font-bold">
                        {b.namePrefix}<span className={b.suffixColor}>{b.nameSuffix}</span>
                      </div>
                      <div className="text-[9px] text-cyber-muted">{b.tagline.split('//')[0]}</div>
                    </div>
                    {appBrand === b.id && <Check className="w-3.5 h-3.5 text-cyber-emerald" />}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Quick Command Palette Launcher */}
          <button
            onClick={() => setCommandPaletteOpen(true)}
            className="hidden md:flex items-center gap-2 px-3 py-1.5 text-xs font-mono rounded-md bg-cyber-card border border-cyber-border text-cyber-muted hover:text-cyber-text hover:border-cyber-emerald/50 transition-all shadow-inner"
            title="Global Quick Search (Ctrl+K)"
          >
            <Search className="w-3.5 h-3.5 text-cyber-emerald" />
            <span>Search machines, cheats...</span>
            <kbd className="ml-2 px-1.5 py-0.5 rounded text-[10px] bg-cyber-border/70 text-gray-300">
              Ctrl+K
            </kbd>
          </button>
        </div>

        {/* Center: Live Variable Injection Hub */}
        <div className="hidden xl:flex items-center gap-2 bg-cyber-card/80 border border-cyber-border/80 rounded-lg p-1 px-2.5 font-mono text-xs">
          <span className="text-[10px] uppercase font-semibold text-cyber-cyan tracking-wider flex items-center gap-1">
            <Server className="w-3 h-3" /> PAYLOAD VARS:
          </span>

          {/* LHOST */}
          <div className="flex items-center gap-1 bg-cyber-bg px-2 py-1 rounded border border-cyber-border focus-within:border-cyber-cyan">
            <span className="text-[10px] text-cyber-muted">LHOST:</span>
            <input
              type="text"
              value={globalVars.lhost}
              onChange={(e) => setGlobalVars({ lhost: e.target.value })}
              className="w-24 md:w-28 bg-transparent text-white font-mono text-xs focus:outline-none"
              placeholder="10.10.14.x"
            />
            <button
              onClick={handleCopyLhost}
              className="text-cyber-muted hover:text-cyber-cyan transition-colors"
              title="Copy LHOST to clipboard"
            >
              {copiedLhost ? <Check className="w-3 h-3 text-cyber-emerald" /> : <Copy className="w-3 h-3" />}
            </button>
          </div>

          {/* LPORT */}
          <div className="flex items-center gap-1 bg-cyber-bg px-2 py-1 rounded border border-cyber-border focus-within:border-cyber-cyan">
            <span className="text-[10px] text-cyber-muted">LPORT:</span>
            <input
              type="text"
              value={globalVars.lport}
              onChange={(e) => setGlobalVars({ lport: e.target.value })}
              className="w-14 bg-transparent text-white font-mono text-xs focus:outline-none"
              placeholder="4444"
            />
          </div>

          {/* TARGET_IP */}
          <div className="flex items-center gap-1 bg-cyber-bg px-2 py-1 rounded border border-cyber-border focus-within:border-cyber-emerald">
            <span className="text-[10px] text-cyber-muted">TARGET:</span>
            <input
              type="text"
              value={globalVars.targetIp}
              onChange={(e) => setGlobalVars({ targetIp: e.target.value })}
              className="w-24 md:w-28 bg-transparent text-cyber-emerald font-mono text-xs font-semibold focus:outline-none"
              placeholder="10.10.10.x"
            />
          </div>
        </div>

        {/* Right: Active Target Stopwatch & Tactical Toggles */}
        <div className="flex items-center gap-2.5">
          {/* Active Target Combat HUD / Selector */}
          {activeMachine ? (
            <div className="flex items-center gap-2 bg-cyber-card border border-cyber-emerald/50 px-2.5 py-1 rounded-lg text-xs font-mono shadow-[0_0_15px_rgba(16,185,129,0.25)] relative">
              <PlatformIcon platform={activeMachine.platform} className="w-4 h-4 flex-shrink-0" />
              
              {/* Machine Name & IP */}
              <div className="flex items-center gap-1.5">
                <Link
                  to={`/target/${activeMachine.id}`}
                  className="font-bold text-white hover:text-cyber-cyan transition-colors truncate max-w-[110px]"
                  title="Open Mission Command Center"
                >
                  {activeMachine.name}
                </Link>

                {/* Quick Copy IP */}
                <button
                  onClick={handleCopyTargetIp}
                  className="px-1.5 py-0.5 rounded bg-cyber-bg border border-cyber-border text-cyber-muted hover:text-white flex items-center gap-1 text-[10px]"
                  title="Click to copy target IP"
                >
                  <span>{activeMachine.ip}</span>
                  {copiedTargetIp ? <Check className="w-2.5 h-2.5 text-cyber-emerald" /> : <Copy className="w-2.5 h-2.5" />}
                </button>
              </div>

              {/* 1-Click Quick Flags */}
              <div className="flex items-center gap-1 border-l border-cyber-border pl-1.5">
                {/* User Flag */}
                {Boolean(activeMachine.userPwnedAt || activeMachine.userFlag || activeMachine.status === 'foothold' || activeMachine.status === 'root' || activeMachine.status === 'completed') ? (
                  <span 
                    className="px-1.5 py-0.5 rounded text-[9px] font-bold bg-cyber-amber/20 text-cyber-amber border border-cyber-amber/40 flex items-center gap-0.5"
                    title="User flag captured!"
                  >
                    ✓ USER
                  </span>
                ) : (
                  <button
                    onClick={handleQuickUserPwn}
                    className="px-1.5 py-0.5 rounded text-[9px] font-bold bg-cyber-bg hover:bg-cyber-amber hover:text-black text-cyber-amber border border-cyber-amber/50 transition-all flex items-center gap-0.5"
                    title="1-Click: Log User Foothold Pwn"
                  >
                    <Flag className="w-2.5 h-2.5" /> +USER
                  </button>
                )}

                {/* Root Flag */}
                {Boolean(activeMachine.rootPwnedAt || activeMachine.rootFlag || activeMachine.status === 'root' || activeMachine.status === 'completed') ? (
                  <span 
                    className="px-1.5 py-0.5 rounded text-[9px] font-bold bg-cyber-emerald/20 text-cyber-emerald border border-cyber-emerald/40 shadow-glow-emerald/20 flex items-center gap-0.5"
                    title="System rooted!"
                  >
                    👑 ROOT
                  </span>
                ) : (
                  <button
                    onClick={handleQuickRootPwn}
                    className="px-1.5 py-0.5 rounded text-[9px] font-bold bg-cyber-bg hover:bg-cyber-crimson hover:text-white text-cyber-crimson border border-cyber-crimson/60 animate-pulse transition-all flex items-center gap-0.5"
                    title="1-Click: Log Root Pwn (Celebration!)"
                  >
                    <Flag className="w-2.5 h-2.5" /> +ROOT
                  </button>
                )}
              </div>

              {/* Mission Stopwatch */}
              <div className="flex items-center gap-1 border-l border-cyber-border pl-1.5">
                <span className="text-[10px] text-cyber-emerald font-bold px-1 py-0.2 rounded bg-cyber-bg border border-cyber-emerald/30">
                  {formatSeconds(activeTimerSeconds)}
                </span>
                {isTimerRunning ? (
                  <button
                    onClick={() => {
                      pauseTimer();
                      if (soundEnabled) playCyberSound('click');
                    }}
                    className="p-1 rounded hover:bg-cyber-bg text-cyber-amber transition-colors"
                    title="Pause Stopwatch"
                  >
                    <Pause className="w-3 h-3" />
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      startTimer();
                      if (soundEnabled) playCyberSound('timer');
                    }}
                    className="p-1 rounded hover:bg-cyber-bg text-cyber-emerald transition-colors"
                    title="Start Stopwatch"
                  >
                    <Play className="w-3 h-3" />
                  </button>
                )}
                <button
                  onClick={() => {
                    resetTimer();
                    if (soundEnabled) playCyberSound('click');
                  }}
                  className="p-1 rounded hover:bg-cyber-bg text-cyber-muted hover:text-white transition-colors"
                  title="Reset Timer"
                >
                  <RotateCcw className="w-3 h-3" />
                </button>
                <button
                  onClick={() => {
                    setActiveTarget(null);
                    if (soundEnabled) playCyberSound('click');
                  }}
                  className="text-[10px] text-cyber-muted hover:text-cyber-crimson ml-1 p-0.5"
                  title="Disengage Active Target"
                >
                  ✕
                </button>
              </div>
            </div>
          ) : (
            <div className="relative">
              <button
                onClick={() => setTargetSelectorOpen(!targetSelectorOpen)}
                className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-cyber-card border border-cyber-border hover:border-cyber-emerald text-cyber-muted hover:text-white text-xs font-mono transition-all group"
                title="Select machine to engage"
              >
                <Crosshair className="w-3.5 h-3.5 text-cyber-emerald transition-transform group-hover:rotate-45" />
                <span>ENGAGE TARGET</span>
                <ChevronDown className="w-3 h-3 text-cyber-muted" />
              </button>

              {/* Target Quick Selector Dropdown */}
              {targetSelectorOpen && (
                <div 
                  className="absolute right-0 top-full mt-2 w-72 p-2 rounded-xl bg-cyber-card border border-cyber-border shadow-2xl z-50 font-mono text-xs space-y-1.5 backdrop-blur-md"
                  onMouseLeave={() => setTargetSelectorOpen(false)}
                >
                  <div className="text-[10px] text-cyber-muted uppercase px-1 font-bold flex items-center justify-between">
                    <span>ENGAGE MACHINE</span>
                    <span className="text-cyber-cyan">{machines.length} TARGETS</span>
                  </div>
                  <input
                    type="text"
                    value={targetSearchTerm}
                    onChange={(e) => setTargetSearchTerm(e.target.value)}
                    placeholder="Type box name or IP..."
                    className="w-full px-2.5 py-1.5 rounded bg-cyber-bg border border-cyber-border text-xs text-white placeholder-cyber-muted focus:outline-none focus:border-cyber-emerald"
                    autoFocus
                  />
                  <div className="max-h-56 overflow-y-auto space-y-1 scrollbar-thin">
                    {machines
                      .filter(m => !targetSearchTerm || m.name.toLowerCase().includes(targetSearchTerm.toLowerCase()) || m.ip.includes(targetSearchTerm))
                      .slice(0, 10)
                      .map(m => (
                        <button
                          key={m.id}
                          onClick={() => {
                            setActiveTarget(m.id);
                            setTargetSelectorOpen(false);
                            setTargetSearchTerm('');
                            if (soundEnabled) playCyberSound('toggle');
                          }}
                          className="w-full p-1.5 rounded hover:bg-cyber-bg flex items-center justify-between text-left transition-colors text-xs"
                        >
                          <div className="flex items-center gap-1.5 truncate">
                            <PlatformIcon platform={m.platform} className="w-3.5 h-3.5 flex-shrink-0" />
                            <span className="font-bold text-white truncate">{m.name}</span>
                            <span className="text-[10px] text-cyber-muted">{m.ip}</span>
                          </div>
                          <span className={`text-[9px] px-1 py-0.2 rounded font-bold ${
                            m.status === 'root' || m.status === 'completed' ? 'text-cyber-emerald' :
                            m.status === 'foothold' ? 'text-cyber-amber' : 'text-cyber-muted'
                          }`}>
                            {m.status.toUpperCase()}
                          </span>
                        </button>
                      ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Tactical Automation Hub */}
          <button
            onClick={() => setReconAutomationModalOpen(true)}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-md bg-cyber-cyan/10 text-cyber-cyan border border-cyber-cyan/40 hover:bg-cyber-cyan hover:text-black font-mono text-xs font-semibold transition-all shadow-glow-cyan/20"
            title="Open Tactical Automation Hub (Nmap Parser & Payload Engine)"
          >
            <Zap className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Automations</span>
          </button>

          {/* Quick Add Custom Machine */}
          <button
            onClick={() => setNewMachineModalOpen(true)}
            className="hidden sm:flex items-center gap-1 px-2.5 py-1.5 rounded-md bg-cyber-emerald/10 text-cyber-emerald border border-cyber-emerald/40 hover:bg-cyber-emerald hover:text-black font-mono text-xs font-semibold transition-all shadow-sm"
            title="Deploy Custom Lab Box"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Add Box</span>
          </button>

          {/* Tactical Utilities (CRT, Sound, Backup) */}
          <div className="hidden sm:flex items-center gap-1 border-l border-cyber-border pl-2">
            <button
              onClick={toggleCrtOverlay}
              className={`p-1.5 rounded-md border transition-all ${
                crtOverlay 
                  ? 'bg-cyber-cyan/20 border-cyber-cyan text-cyber-cyan shadow-glow-cyan/50' 
                  : 'bg-cyber-card border-cyber-border text-cyber-muted hover:text-white'
              }`}
              title="Toggle Retro CRT Scanline Overlay"
            >
              <Tv className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={toggleSound}
              className={`p-1.5 rounded-md border transition-all ${
                soundEnabled 
                  ? 'bg-cyber-card border-cyber-border text-cyber-emerald hover:border-cyber-emerald/50' 
                  : 'bg-cyber-card border-cyber-border text-cyber-muted hover:text-white'
              }`}
              title={soundEnabled ? 'Mute Cyber Audio FX' : 'Enable Cyber Audio FX'}
            >
              {soundEnabled ? <Volume2 className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5" />}
            </button>

            <button
              onClick={() => setBackupModalOpen(true)}
              className="p-1.5 rounded-md bg-cyber-card border border-cyber-border text-cyber-muted hover:text-white hover:border-cyber-purple transition-all"
              title="Backup & Restore JSON State"
            >
              <Database className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Google Sign-In / User Profile Station */}
          <div className="flex items-center pl-1 border-l border-cyber-border">
            <UserMenu />
          </div>

        </div>

      </div>
    </header>
  );
};
