import React, { useState, useEffect, useMemo } from 'react';
import { 
  Flag, 
  Play, 
  Pause, 
  RotateCcw, 
  Eye, 
  EyeOff, 
  Copy, 
  Check, 
  Star, 
  FileText, 
  Tag, 
  Crosshair, 
  AlertCircle,
  Clock,
  BookOpen,
  Sparkles,
  ShieldAlert,
  ChevronDown,
  ChevronUp,
  Lock,
  Plus,
  X,
  ExternalLink
} from 'lucide-react';
import { Machine, PipelineStatus, Difficulty } from '../../../types';
import { useCtfStore } from '../../../store/useCtfStore';
import { 
  formatSeconds, 
  playCyberSound, 
  triggerRootCelebration, 
  safeCopyToClipboard, 
  interpolateCommand 
} from '../../../utils/helpers';
import { classifyMachine, VULN_CATEGORIES } from '../../../utils/categoryUtils';
import { getRecommendedNotesForMachine } from '../../../utils/obsidianManualUtils';
import { SessionTimerDisplay } from '../../common/SessionTimerDisplay';
import { CveBadge } from '../../common/CveBadge';
import { extractMachineCves } from '../../../utils/cveUtils';

interface MachineOverviewTabProps {
  machine: Machine;
  onOpenWalkthroughTab: () => void;
}

export const MachineOverviewTab: React.FC<MachineOverviewTabProps> = ({
  machine,
  onOpenWalkthroughTab,
}) => {
  const {
    updateMachine,
    toggleUserFlag,
    toggleRootFlag,
    activeTargetId,
    setActiveTarget,
    isTimerRunning,
    startTimer,
    pauseTimer,
    resetTimer,
    soundEnabled,
    globalVars,
    userNotes = [],
  } = useCtfStore();

  const [showUserFlag, setShowUserFlag] = useState(false);
  const [showRootFlag, setShowRootFlag] = useState(false);
  const [copiedUser, setCopiedUser] = useState(false);
  const [copiedRoot, setCopiedRoot] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [newTagInput, setNewTagInput] = useState('');
  const [expandedNotes, setExpandedNotes] = useState<Record<string, boolean>>({});
  const [copiedCommand, setCopiedCommand] = useState<string | null>(null);

  const [localNotes, setLocalNotes] = useState(machine.quickNotes || '');

  useEffect(() => {
    setLocalNotes(machine.quickNotes || '');
    setShowUserFlag(false);
    setShowRootFlag(false);
    setShowHint(false);
    setNewTagInput('');
    setCopiedUser(false);
    setCopiedRoot(false);
  }, [machine.id]);

  useEffect(() => {
    const handler = setTimeout(() => {
      if (localNotes !== (machine.quickNotes || '')) {
        updateMachine(machine.id, { quickNotes: localNotes });
      }
    }, 400);
    return () => clearTimeout(handler);
  }, [localNotes, machine.id, machine.quickNotes, updateMachine]);

  const isActiveTarget = Boolean(activeTargetId === machine.id);

  const isUserPwned = Boolean(
    Boolean(machine.userFlag?.trim()) ||
    ((machine.status === 'foothold' || machine.status === 'root' || machine.status === 'completed') && Boolean(machine.userPwnedAt))
  );

  const isRootPwned = Boolean(
    Boolean(machine.rootFlag?.trim()) ||
    ((machine.status === 'root' || machine.status === 'completed') && Boolean(machine.rootPwnedAt))
  );

  const recommendedNotes = useMemo(() => getRecommendedNotesForMachine(machine, 4), [machine]);

  const pipelineStages: { id: PipelineStatus; label: string; color: string }[] = [
    { id: 'backlog', label: 'Backlog', color: 'border-slate-500 text-slate-500' },
    { id: 'recon', label: 'Recon', color: 'border-cyan-500 text-cyan-500' },
    { id: 'foothold', label: 'Foothold', color: 'border-amber-500 text-amber-500' },
    { id: 'root', label: 'Root Pwned', color: 'border-emerald-500 text-emerald-500' },
    { id: 'completed', label: 'Completed', color: 'border-emerald-500 text-emerald-500' },
  ];

  const handleStatusChange = (status: PipelineStatus) => {
    updateMachine(machine.id, { status });
    if (status === 'completed' || status === 'root') {
      triggerRootCelebration();
      if (soundEnabled) playCyberSound('root');
    } else {
      if (soundEnabled) playCyberSound('click');
    }
  };

  const handleCopy = async (text: string, type: 'user' | 'root') => {
    if (!text) return;
    await safeCopyToClipboard(text);
    if (soundEnabled) playCyberSound('copy');
    if (type === 'user') {
      setCopiedUser(true);
      setTimeout(() => setCopiedUser(false), 2000);
    } else {
      setCopiedRoot(true);
      setTimeout(() => setCopiedRoot(false), 2000);
    }
  };

  const handleAppendNoteStamp = (stamp: string) => {
    const next = localNotes ? `${localNotes.trimEnd()}\n${stamp}` : stamp;
    setLocalNotes(next);
    updateMachine(machine.id, { quickNotes: next });
    if (soundEnabled) playCyberSound('click');
  };

  const handleAddTag = () => {
    const tag = newTagInput.trim();
    if (!tag || machine.tags.includes(tag)) return;
    updateMachine(machine.id, { tags: [...machine.tags, tag] });
    setNewTagInput('');
  };

  const handleRemoveTag = (tagToRemove: string) => {
    updateMachine(machine.id, {
      tags: machine.tags.filter((t) => t !== tagToRemove),
    });
  };

  return (
    <div className="space-y-6">
      {/* Section 1: Attack Lifecycle Pipeline */}
      <div>
        <div className="text-[10px] uppercase font-bold tracking-wider text-cyber-muted mb-2 flex items-center gap-1.5">
          <Crosshair className="w-3.5 h-3.5 text-cyber-emerald" /> ATTACK LIFECYCLE STATUS
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
          {pipelineStages.map((stage) => {
            const isSelected = machine.status === stage.id;
            return (
              <button
                key={stage.id}
                onClick={() => handleStatusChange(stage.id)}
                className={`p-2 rounded-lg border text-center font-semibold transition-all ${
                  isSelected
                    ? `bg-white dark:bg-cyber-bg border-2 ${stage.color} shadow-md`
                    : 'bg-slate-50 dark:bg-cyber-bg/40 border-slate-200 dark:border-cyber-border/80 text-slate-600 dark:text-cyber-muted hover:text-slate-900 dark:hover:text-white hover:border-slate-300 dark:hover:border-cyber-border'
                }`}
              >
                {stage.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Section 2: Engagement Stopwatch & Time Metrics */}
      <div className="p-3.5 rounded-lg bg-slate-50 dark:bg-cyber-bg border border-slate-200 dark:border-cyber-border grid grid-cols-1 sm:grid-cols-3 gap-4 items-center">
        <div>
          <div className="text-[10px] uppercase font-semibold text-slate-500 dark:text-cyber-muted flex items-center gap-1">
            <Clock className="w-3 h-3 text-cyan-600 dark:text-cyber-cyan" /> SESSION TIMER
          </div>
          <SessionTimerDisplay machineId={machine.id} staticSeconds={machine.timeSpentSeconds} />
          <div className="text-[10px] text-slate-500 dark:text-cyber-muted">
            {isActiveTarget ? 'Active Engagement' : 'Standby'}
          </div>
        </div>

        <div className="flex items-center gap-2">
          {!isActiveTarget ? (
            <button
              onClick={() => {
                setActiveTarget(machine.id);
                startTimer();
                if (soundEnabled) playCyberSound('timer');
              }}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-emerald-100 dark:bg-cyber-emerald/10 border border-emerald-300 dark:border-cyber-emerald/40 text-emerald-900 dark:text-cyber-emerald hover:bg-emerald-500 hover:text-white dark:hover:bg-cyber-emerald dark:hover:text-black font-semibold transition-all"
            >
              <Crosshair className="w-3.5 h-3.5" /> Set Active Target
            </button>
          ) : (
            <>
              {isTimerRunning ? (
                <button
                  onClick={pauseTimer}
                  className="flex items-center gap-1 px-3 py-1.5 rounded-md bg-amber-100 dark:bg-cyber-amber/10 border border-amber-300 dark:border-cyber-amber/40 text-amber-900 dark:text-cyber-amber hover:bg-amber-500 hover:text-white dark:hover:bg-cyber-amber dark:hover:text-black font-semibold transition-all"
                >
                  <Pause className="w-3.5 h-3.5" /> Pause
                </button>
              ) : (
                <button
                  onClick={startTimer}
                  className="flex items-center gap-1 px-3 py-1.5 rounded-md bg-emerald-100 dark:bg-cyber-emerald/10 border border-emerald-300 dark:border-cyber-emerald/40 text-emerald-900 dark:text-cyber-emerald hover:bg-emerald-500 hover:text-white dark:hover:bg-cyber-emerald dark:hover:text-black font-semibold transition-all"
                >
                  <Play className="w-3.5 h-3.5" /> Resume
                </button>
              )}
              <button
                onClick={() => {
                  if (confirm('Reset session timer?')) {
                    resetTimer();
                    if (soundEnabled) playCyberSound('click');
                  }
                }}
                className="p-1.5 rounded-md bg-white dark:bg-cyber-card border border-slate-200 dark:border-cyber-border text-slate-600 dark:text-cyber-muted hover:text-slate-900 dark:hover:text-white"
                title="Reset Timer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </>
          )}
        </div>

        {/* Time to User & Root Milestones */}
        <div className="grid grid-cols-2 gap-2 text-[10px] w-full sm:w-auto border-t sm:border-t-0 sm:border-l border-slate-200 dark:border-cyber-border pt-2 sm:pt-0 sm:pl-4">
          <div>
            <span className="text-slate-500 dark:text-cyber-muted block">Time to User:</span>
            <span className="font-bold text-cyan-700 dark:text-cyber-cyan font-mono">
              {machine.timeToUserSeconds ? formatSeconds(machine.timeToUserSeconds) : '--:--:--'}
            </span>
          </div>
          <div>
            <span className="text-slate-500 dark:text-cyber-muted block">Time to Root:</span>
            <span className="font-bold text-rose-700 dark:text-cyber-crimson font-mono">
              {machine.timeToRootSeconds ? formatSeconds(machine.timeToRootSeconds) : '--:--:--'}
            </span>
          </div>
        </div>
      </div>

      {/* Section 3: Flags Vault */}
      <div>
        <div className="text-[10px] uppercase font-bold tracking-wider text-slate-600 dark:text-cyber-muted mb-2 flex items-center gap-1.5">
          <Flag className="w-3.5 h-3.5 text-amber-600 dark:text-cyber-amber" /> FLAGS VAULT (OBFUSCATED & COPYABLE)
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {/* User Flag */}
          <div className="p-3 rounded-lg border border-slate-200 dark:border-cyber-border bg-slate-50/50 dark:bg-cyber-bg/50 space-y-2">
            <div className="flex items-center justify-between text-[11px]">
              <span className="text-cyan-800 dark:text-cyber-cyan font-semibold flex items-center gap-1">
                <Flag className="w-3 h-3" /> USER FLAG
              </span>
              <div className="flex items-center gap-1.5">
                {isUserPwned ? (
                  <button
                    type="button"
                    onClick={() => {
                      toggleUserFlag(machine.id);
                      if (soundEnabled) playCyberSound('toggle');
                    }}
                    className="text-[9px] px-2 py-0.5 rounded bg-emerald-100 dark:bg-cyber-emerald/15 text-emerald-800 dark:text-cyber-emerald border border-emerald-300 dark:border-cyber-emerald/40 hover:bg-rose-100 dark:hover:bg-rose-950/40 hover:text-rose-800 dark:hover:text-rose-300 hover:border-rose-400 flex items-center gap-0.5 font-bold transition-all cursor-pointer group"
                    title="User Pwned! Click to remove user solve if clicked by mistake"
                  >
                    <Check className="w-3 h-3 text-emerald-600 dark:text-cyber-emerald group-hover:hidden" />
                    <X className="w-3 h-3 text-rose-500 hidden group-hover:block" />
                    <span className="group-hover:hidden">PWNED</span>
                    <span className="hidden group-hover:inline">REMOVE</span>
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => {
                      toggleUserFlag(machine.id);
                      if (soundEnabled) playCyberSound('flag');
                    }}
                    className="text-[9px] px-2 py-0.5 rounded bg-slate-100 dark:bg-cyber-card text-slate-600 dark:text-cyber-muted hover:text-cyan-800 dark:hover:text-cyber-cyan border border-slate-300 dark:border-cyber-border hover:border-cyan-400 flex items-center gap-0.5 font-semibold transition-all cursor-pointer"
                    title="Mark User Flag as Pwned"
                  >
                    <Plus className="w-3 h-3" />
                    <span>MARK USER</span>
                  </button>
                )}
              </div>
            </div>
            <div className="relative">
              <input
                id={`machine-user-flag-${machine.id}`}
                name="machine-user-flag"
                aria-label="Enter user flag"
                type={showUserFlag ? 'text' : 'password'}
                value={machine.userFlag || ''}
                onChange={(e) => {
                  const val = e.target.value;
                  if (!val.trim()) {
                    updateMachine(machine.id, { 
                      userFlag: undefined,
                      userPwnedAt: undefined,
                      status: machine.status === 'foothold' ? 'backlog' : machine.status,
                    });
                  } else {
                    updateMachine(machine.id, { 
                      userFlag: val,
                      userPwnedAt: machine.userPwnedAt || new Date().toISOString(),
                      status: machine.status === 'backlog' ? 'foothold' : machine.status,
                    });
                  }
                }}
                placeholder="Enter user flag (e.g. 7a3f...)"
                className="w-full bg-white dark:bg-cyber-card px-2.5 py-1.5 rounded border border-slate-200 dark:border-cyber-border text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-cyber-muted text-xs focus:outline-none focus:border-cyan-500 dark:focus:border-cyber-cyan pr-20 font-mono shadow-sm"
              />
              <div className="absolute right-1.5 top-1/2 -translate-y-1/2 flex items-center gap-1">
                {machine.userFlag && (
                  <button
                    type="button"
                    onClick={() => {
                      toggleUserFlag(machine.id);
                      if (soundEnabled) playCyberSound('toggle');
                    }}
                    className="p-1 rounded text-slate-400 hover:text-rose-500 transition-colors cursor-pointer"
                    title="Remove / Clear user flag"
                  >
                    <X className="w-3 h-3" />
                  </button>
                )}
                <button
                  type="button"
                  onClick={() => setShowUserFlag(!showUserFlag)}
                  className="p-1 rounded text-slate-500 dark:text-cyber-muted hover:text-slate-900 dark:hover:text-white"
                  title={showUserFlag ? 'Hide Flag' : 'Show Flag'}
                >
                  {showUserFlag ? <EyeOff className="w-3 h-3" /> : <Eye className="w-3 h-3" />}
                </button>
                <button
                  type="button"
                  onClick={() => handleCopy(machine.userFlag || '', 'user')}
                  className={`p-1 rounded transition-all flex items-center gap-1 ${
                    copiedUser
                      ? 'bg-cyber-emerald text-black font-extrabold shadow-glow-emerald px-1.5'
                      : 'text-slate-500 dark:text-cyber-muted hover:text-slate-900 dark:hover:text-white'
                  }`}
                  title="Copy User Flag"
                >
                  {copiedUser ? (
                    <>
                      <Check className="w-3 h-3 stroke-[3]" />
                      <span className="text-[9px] uppercase font-bold text-black">COPIED!</span>
                    </>
                  ) : (
                    <Copy className="w-3 h-3" />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Root Flag */}
          <div className="p-3 rounded-lg border border-slate-200 dark:border-cyber-border bg-slate-50/50 dark:bg-cyber-bg/50 space-y-2">
            <div className="flex items-center justify-between text-[11px]">
              <span className="text-emerald-800 dark:text-cyber-emerald font-semibold flex items-center gap-1">
                <Flag className="w-3 h-3" /> ROOT / SYSTEM FLAG
              </span>
              <div className="flex items-center gap-1.5">
                {isRootPwned ? (
                  <button
                    type="button"
                    onClick={() => {
                      toggleRootFlag(machine.id);
                      if (soundEnabled) playCyberSound('toggle');
                    }}
                    className="text-[9px] px-2 py-0.5 rounded bg-emerald-100 dark:bg-cyber-emerald/15 text-emerald-800 dark:text-cyber-emerald border border-emerald-300 dark:border-cyber-emerald/40 hover:bg-rose-100 dark:hover:bg-rose-950/40 hover:text-rose-800 dark:hover:text-rose-300 hover:border-rose-400 flex items-center gap-0.5 font-bold transition-all cursor-pointer group"
                    title="Rooted! Click to remove root solve if clicked by mistake"
                  >
                    <Check className="w-3 h-3 text-emerald-600 dark:text-cyber-emerald group-hover:hidden" />
                    <X className="w-3 h-3 text-rose-500 hidden group-hover:block" />
                    <span className="group-hover:hidden">ROOTED</span>
                    <span className="hidden group-hover:inline">REMOVE</span>
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => {
                      toggleRootFlag(machine.id);
                      triggerRootCelebration();
                      if (soundEnabled) playCyberSound('root');
                    }}
                    className="text-[9px] px-2 py-0.5 rounded bg-slate-100 dark:bg-cyber-card text-slate-600 dark:text-cyber-muted hover:text-emerald-800 dark:hover:text-cyber-emerald border border-slate-300 dark:border-cyber-border hover:border-emerald-400 flex items-center gap-0.5 font-semibold transition-all cursor-pointer"
                    title="Mark Root Flag as Captured"
                  >
                    <Flag className="w-3 h-3" />
                    <span>MARK ROOT</span>
                  </button>
                )}
              </div>
            </div>
            <div className="relative">
              <input
                id={`machine-root-flag-${machine.id}`}
                name="machine-root-flag"
                aria-label="Enter root flag"
                type={showRootFlag ? 'text' : 'password'}
                value={machine.rootFlag || ''}
                onChange={(e) => {
                  const val = e.target.value;
                  if (!val.trim()) {
                    const hasUser = Boolean(machine.userPwnedAt || machine.userFlag);
                    updateMachine(machine.id, { 
                      rootFlag: undefined,
                      rootPwnedAt: undefined,
                      status: hasUser ? 'foothold' : 'backlog',
                    });
                  } else {
                    updateMachine(machine.id, { 
                      rootFlag: val,
                      rootPwnedAt: machine.rootPwnedAt || new Date().toISOString(),
                      status: 'root',
                    });
                  }
                }}
                placeholder="Enter root flag (e.g. 9b1c...)"
                className="w-full bg-white dark:bg-cyber-card px-2.5 py-1.5 rounded border border-slate-200 dark:border-cyber-border text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-cyber-muted text-xs focus:outline-none focus:border-emerald-500 dark:focus:border-cyber-emerald pr-20 font-mono shadow-sm"
              />
              <div className="absolute right-1.5 top-1/2 -translate-y-1/2 flex items-center gap-1">
                {machine.rootFlag && (
                  <button
                    type="button"
                    onClick={() => {
                      toggleRootFlag(machine.id);
                      if (soundEnabled) playCyberSound('toggle');
                    }}
                    className="p-1 rounded text-slate-400 hover:text-rose-500 transition-colors cursor-pointer"
                    title="Remove / Clear root flag"
                  >
                    <X className="w-3 h-3" />
                  </button>
                )}
                <button
                  type="button"
                  onClick={() => setShowRootFlag(!showRootFlag)}
                  className="p-1 rounded text-slate-500 dark:text-cyber-muted hover:text-slate-900 dark:hover:text-white"
                  title={showRootFlag ? 'Hide Flag' : 'Show Flag'}
                >
                  {showRootFlag ? <EyeOff className="w-3 h-3" /> : <Eye className="w-3 h-3" />}
                </button>
                <button
                  type="button"
                  onClick={() => handleCopy(machine.rootFlag || '', 'root')}
                  className={`p-1 rounded transition-all flex items-center gap-1 ${
                    copiedRoot
                      ? 'bg-cyber-emerald text-black font-extrabold shadow-glow-emerald px-1.5'
                      : 'text-slate-500 dark:text-cyber-muted hover:text-slate-900 dark:hover:text-white'
                  }`}
                  title="Copy Root Flag"
                >
                  {copiedRoot ? (
                    <>
                      <Check className="w-3 h-3 stroke-[3]" />
                      <span className="text-[9px] uppercase font-bold text-black">COPIED!</span>
                    </>
                  ) : (
                    <Copy className="w-3 h-3" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Elevated Tactical Field Notes & Operator Scratchpad */}
      <div className="p-3.5 rounded-xl border border-amber-300/80 dark:border-amber-500/40 bg-amber-50/50 dark:bg-amber-950/15 space-y-2.5 shadow-sm">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center gap-2">
            <span className="text-[11px] text-amber-900 dark:text-amber-300 uppercase font-bold flex items-center gap-1.5 tracking-wider">
              <FileText className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
              <span>OPERATOR SCRATCHPAD & FIELD NOTES</span>
            </span>
            <span className="text-[9px] px-2 py-0.5 rounded font-mono bg-amber-200/60 dark:bg-amber-900/40 border border-amber-300 dark:border-amber-700/50 text-amber-900 dark:text-amber-300 font-bold">
              {localNotes.trim().length > 0 ? `${localNotes.trim().length} chars · Auto-Saved` : 'Ready'}
            </span>
          </div>

          {/* Quick Helper Action Stamps */}
          <div className="flex items-center gap-1 flex-wrap">
            <button
              type="button"
              onClick={() => handleAppendNoteStamp(`[${new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}] `)}
              className="px-2 py-0.5 rounded bg-white dark:bg-cyber-card border border-amber-300 dark:border-amber-500/40 text-[10px] font-mono font-semibold text-amber-900 dark:text-amber-300 hover:bg-amber-100 dark:hover:bg-amber-900/40 transition-colors"
              title="Insert current timestamp"
            >
              + Time
            </button>
            <button
              type="button"
              onClick={() => handleAppendNoteStamp(`- [ ] `)}
              className="px-2 py-0.5 rounded bg-white dark:bg-cyber-card border border-amber-300 dark:border-amber-500/40 text-[10px] font-mono font-semibold text-amber-900 dark:text-amber-300 hover:bg-amber-100 dark:hover:bg-amber-900/40 transition-colors"
              title="Insert task checkbox"
            >
              + Todo
            </button>
            <button
              type="button"
              onClick={() => handleAppendNoteStamp(`[+] Cred: username:password`)}
              className="px-2 py-0.5 rounded bg-white dark:bg-cyber-card border border-amber-300 dark:border-amber-500/40 text-[10px] font-mono font-semibold text-amber-900 dark:text-amber-300 hover:bg-amber-100 dark:hover:bg-amber-900/40 transition-colors"
              title="Insert credential note template"
            >
              + Cred
            </button>
            <button
              type="button"
              onClick={() => handleAppendNoteStamp(`[+] Attack Vector / Pivot Lead: `)}
              className="px-2 py-0.5 rounded bg-white dark:bg-cyber-card border border-amber-300 dark:border-amber-500/40 text-[10px] font-mono font-semibold text-amber-900 dark:text-amber-300 hover:bg-amber-100 dark:hover:bg-amber-900/40 transition-colors"
              title="Insert attack vector lead"
            >
              + Lead
            </button>
            {localNotes.trim().length > 0 && (
              <button
                type="button"
                onClick={() => {
                  if (window.confirm('Clear all tactical field notes for this target?')) {
                    setLocalNotes('');
                    updateMachine(machine.id, { quickNotes: '' });
                  }
                }}
                className="px-1.5 py-0.5 rounded bg-rose-50 dark:bg-rose-950/40 border border-rose-300 dark:border-rose-800 text-[10px] font-mono text-rose-700 dark:text-rose-400 hover:bg-rose-100 transition-colors"
                title="Clear notes"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        <textarea
          id={`machine-field-notes-${machine.id}`}
          name="machine-field-notes"
          aria-label="Tactical field notes"
          rows={4}
          value={localNotes}
          onChange={(e) => setLocalNotes(e.target.value)}
          onBlur={() => {
            if (localNotes !== (machine.quickNotes || '')) {
              updateMachine(machine.id, { quickNotes: localNotes });
            }
          }}
          placeholder="Record tactical scratchpad notes, unfinished leads, hashes, discovered creds, or port forwarding pivots to resume anytime..."
          className="w-full bg-white dark:bg-cyber-card p-3 rounded-lg border border-amber-300/80 dark:border-cyber-border text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-cyber-muted text-xs font-mono focus:outline-none focus:border-amber-500 dark:focus:border-amber-400 resize-y shadow-inner leading-relaxed"
        />
      </div>

      {/* Official HTB Intel Briefing Card */}
      {machine.officialSynopsis && (
        <div className="p-3.5 rounded-lg border border-emerald-300 dark:border-cyber-emerald/40 bg-emerald-50 dark:bg-cyber-emerald/5 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-[10px] text-emerald-800 dark:text-cyber-emerald uppercase font-bold flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5 text-emerald-700 dark:text-cyber-emerald" /> OFFICIAL HTB SYNOPSIS & INTEL
            </span>
            <button
              type="button"
              onClick={onOpenWalkthroughTab}
              className="text-[10px] text-emerald-700 dark:text-cyber-emerald hover:underline flex items-center gap-1 font-bold"
            >
              <span>Open Full Walkthrough</span>
              <ExternalLink className="w-3 h-3" />
            </button>
          </div>
          <p className="text-xs text-slate-800 dark:text-white/90 leading-relaxed font-sans font-normal">
            {machine.officialSynopsis}
          </p>
          {machine.skillsLearned && machine.skillsLearned.length > 0 && (
            <div className="flex flex-wrap gap-1.5 pt-1">
              {machine.skillsLearned.slice(0, 4).map((sk, skIdx) => (
                <span
                  key={skIdx}
                  className="px-2 py-0.5 rounded bg-white dark:bg-cyber-card border border-emerald-300 dark:border-cyber-emerald/30 text-emerald-900 dark:text-cyber-emerald text-[10px] font-medium shadow-xs"
                >
                  {sk}
                </span>
              ))}
              {machine.skillsLearned.length > 4 && (
                <span className="text-[10px] text-slate-500 dark:text-cyber-muted self-center">
                  +{machine.skillsLearned.length - 4} more
                </span>
              )}
            </div>
          )}
        </div>
      )}

      {/* Section 4: Spoiler-Masked Hint / Active ToS Guard */}
      {machine.isActive ? (
        <div className="p-3 rounded-lg border border-amber-300 dark:border-amber-500/40 bg-amber-50 dark:bg-amber-950/20 text-amber-900 dark:text-amber-300 flex items-center gap-2">
          <Lock className="w-4 h-4 text-amber-600 dark:text-amber-400 flex-shrink-0" />
          <span className="text-[11px] font-mono">
            Active Lab: Intel hints and spoilers are strictly prohibited by Hack The Box Terms of Service (AUP §8.2).
          </span>
        </div>
      ) : machine.hint ? (
        <div className="p-3 rounded-lg border border-slate-200 dark:border-cyber-border bg-slate-50 dark:bg-cyber-bg/40">
          <div className="flex items-center justify-between mb-1">
            <span className="text-[10px] text-amber-800 dark:text-cyber-amber uppercase font-semibold flex items-center gap-1">
              <AlertCircle className="w-3 h-3 text-amber-600 dark:text-cyber-amber" /> INTEL HINT (SPOILER MASKED)
            </span>
            <button
              type="button"
              onClick={() => setShowHint(!showHint)}
              className="text-[10px] text-slate-500 dark:text-cyber-muted hover:text-slate-900 dark:hover:text-white flex items-center gap-1"
            >
              {showHint ? <EyeOff className="w-3 h-3" /> : <Eye className="w-3 h-3" />}
              <span>{showHint ? 'Mask Hint' : 'Reveal Hint'}</span>
            </button>
          </div>
          <div
            onClick={() => setShowHint(!showHint)}
            className={`p-2 rounded border border-slate-200 dark:border-cyber-border text-xs cursor-pointer select-none transition-all ${
              showHint ? 'bg-white dark:bg-cyber-card text-slate-900 dark:text-white' : 'blur-sm text-transparent bg-slate-200/60 dark:bg-cyber-card/60'
            }`}
            title="Click to toggle hint spoiler"
          >
            {machine.hint}
          </div>
        </div>
      ) : null}

      {/* Section 5: Perceived Difficulty & Enjoyment Rating */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div className="p-3 rounded-lg border border-slate-200 dark:border-cyber-border bg-slate-50 dark:bg-cyber-bg/50">
          <div className="text-[10px] uppercase font-bold tracking-wider text-slate-500 dark:text-cyber-muted mb-2">
            PERCEIVED DIFFICULTY VS OFFICIAL
          </div>
          <div className="flex items-center gap-1.5">
            {(['Very Easy', 'Easy', 'Medium', 'Hard', 'Insane'] as Difficulty[]).map((diff) => (
              <button
                key={diff}
                onClick={() => updateMachine(machine.id, { perceivedDifficulty: diff })}
                className={`px-2 py-1 rounded text-[10px] border transition-colors ${
                  machine.perceivedDifficulty === diff
                    ? 'bg-emerald-600 text-white dark:bg-cyber-emerald dark:text-black font-bold border-emerald-600 dark:border-cyber-emerald shadow-xs'
                    : 'bg-white dark:bg-cyber-card text-slate-700 dark:text-cyber-muted border-slate-200 dark:border-cyber-border hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {diff}
              </button>
            ))}
          </div>
        </div>

        <div className="p-3 rounded-lg border border-slate-200 dark:border-cyber-border bg-slate-50 dark:bg-cyber-bg/50">
          <div className="text-[10px] uppercase font-bold tracking-wider text-slate-500 dark:text-cyber-muted mb-2">
            MATRIX OF SATISFACTION (ENJOYMENT)
          </div>
          <div className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                onClick={() => updateMachine(machine.id, { rating: star })}
                className="p-1 text-slate-400 dark:text-cyber-muted hover:text-amber-500 dark:hover:text-cyber-amber transition-colors"
              >
                <Star
                  className={`w-4 h-4 ${
                    (machine.rating || 0) >= star ? 'text-amber-500 fill-amber-500 dark:text-cyber-amber dark:fill-cyber-amber' : ''
                  }`}
                />
              </button>
            ))}
            <span className="text-[10px] text-slate-600 dark:text-cyber-muted ml-2">
              {machine.rating ? `${machine.rating} / 5 Stars` : 'Unrated'}
            </span>
          </div>
        </div>
      </div>

      {/* Section 6: Identified Vulnerability Archetypes & Tags */}
      <div className="space-y-4">
        <div>
          <div className="text-[10px] uppercase font-bold tracking-wider text-slate-500 dark:text-cyber-muted mb-2 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-purple-600 dark:text-cyber-purple" /> IDENTIFIED VULNERABILITY ARCHETYPES
          </div>
          <div className="flex flex-wrap gap-1.5">
            {classifyMachine(machine).categories.length > 0 ? (
              classifyMachine(machine).categories.map((catId) => {
                const catDef = VULN_CATEGORIES.find((c) => c.id === catId);
                return (
                  <span
                    key={catId}
                    className={`px-2.5 py-1 rounded text-xs font-mono font-bold border ${catDef?.badgeColor || 'bg-white dark:bg-cyber-card border-slate-200 dark:border-cyber-border text-slate-900 dark:text-white'}`}
                  >
                    {catDef?.label || catId}
                  </span>
                );
              })
            ) : (
              <span className="text-xs text-slate-500 dark:text-cyber-muted italic">Standard Host Operations</span>
            )}
          </div>
        </div>

        {/* Identified CVE Vulnerabilities */}
        {extractMachineCves(machine).length > 0 && (
          <div>
            <div className="text-[10px] uppercase font-bold tracking-wider text-rose-600 dark:text-rose-400 mb-2 flex items-center gap-1.5">
              <ShieldAlert className="w-3.5 h-3.5 text-rose-500" /> IDENTIFIED CVE VULNERABILITIES ({extractMachineCves(machine).length})
            </div>
            <div className="flex flex-wrap gap-1.5">
              {extractMachineCves(machine).map((cve) => (
                <CveBadge key={cve} cve={cve} size="md" showExternalLink />
              ))}
            </div>
          </div>
        )}

        <div>
          <div className="text-[10px] uppercase font-bold tracking-wider text-slate-500 dark:text-cyber-muted mb-2 flex items-center gap-1.5">
            <Tag className="w-3.5 h-3.5 text-cyan-700 dark:text-cyber-cyan" /> ATTACK VECTORS & TAGS
          </div>
          <div className="flex flex-wrap gap-1.5 mb-2">
            {machine.tags.map((t) => (
              <span
                key={t}
                className="px-2 py-0.5 rounded bg-cyan-100 dark:bg-cyber-cyan/10 border border-cyan-300 dark:border-cyber-cyan/30 text-cyan-900 dark:text-cyber-cyan text-[11px] flex items-center gap-1"
              >
                {t}
                <button
                  onClick={() => handleRemoveTag(t)}
                  className="hover:text-red-600 dark:hover:text-cyber-crimson ml-0.5"
                >
                  ×
                </button>
              </span>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <input
              id="machine-new-tag-input"
              name="machine-new-tag"
              aria-label="Add new attack vector tag"
              type="text"
              value={newTagInput}
              onChange={(e) => setNewTagInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault();
                  handleAddTag();
                }
              }}
              placeholder="Add tag (e.g. SSRF, Kerberoast)..."
              className="flex-1 bg-white dark:bg-cyber-bg px-2.5 py-1.5 rounded border border-slate-300 dark:border-cyber-border text-slate-900 dark:text-white text-xs focus:outline-none focus:border-cyan-600 dark:focus:border-cyber-cyan placeholder-slate-400 dark:placeholder-cyber-muted"
            />
            <button
              type="button"
              onClick={handleAddTag}
              className="px-3 py-1.5 rounded bg-slate-100 hover:bg-slate-200 dark:bg-cyber-card dark:hover:bg-cyber-card/80 border border-slate-300 dark:border-cyber-border hover:border-cyan-600 dark:hover:border-cyber-cyan text-slate-900 dark:text-white text-xs font-medium"
            >
              Add
            </button>
          </div>
        </div>
      </div>

      {/* Section 7: Tactical Intel (Obsidian Notes Vault) */}
      {recommendedNotes.length > 0 && (
        <div className="p-3.5 rounded-xl bg-purple-50/70 dark:bg-cyber-bg/80 border border-purple-200 dark:border-purple-500/40 space-y-3 shadow-sm">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <span className="text-[10px] text-purple-800 dark:text-purple-400 uppercase font-bold flex items-center gap-1.5 tracking-wider">
              <BookOpen className="w-3.5 h-3.5 text-purple-700 dark:text-purple-400" />
              TACTICAL INTEL // OBSIDIAN VAULT ({recommendedNotes.length} MATCHING NOTES)
            </span>
            <span className="text-[9px] px-2 py-0.5 rounded font-mono bg-purple-100 dark:bg-purple-950/40 border border-purple-300 dark:border-purple-800/60 text-purple-900 dark:text-purple-300 font-bold">
              {userNotes.length > 0 ? `Private Vault (${userNotes.length} Notes)` : 'Field Manual Vault'}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
            {recommendedNotes.map((note) => {
              const isExpanded = Boolean(expandedNotes[note.id]);
              const targetVars = { ...globalVars, targetIp: machine.ip || globalVars.targetIp };
              const extraCommandsCount = note.commands ? note.commands.length - 1 : 0;

              return (
                <div
                  key={note.id}
                  className="p-2.5 rounded-lg bg-white dark:bg-cyber-card border border-slate-200 dark:border-cyber-border hover:border-purple-400 dark:hover:border-purple-500/50 transition-all space-y-1.5 shadow-xs"
                >
                  <div className="flex items-center justify-between gap-1">
                    <span className="text-xs font-bold text-slate-900 dark:text-white truncate max-w-[210px]" title={note.title}>
                      {note.title}
                    </span>
                    <div className="flex items-center gap-1.5 flex-shrink-0">
                      <span className="text-[9px] px-1.5 py-0.2 rounded bg-purple-100 dark:bg-purple-500/15 text-purple-900 dark:text-purple-300 border border-purple-300 dark:border-purple-500/30 font-mono font-bold">
                        {note.difficulty}
                      </span>
                      {note.commands && note.commands.length > 1 && (
                        <button
                          type="button"
                          onClick={() => setExpandedNotes(prev => ({ ...prev, [note.id]: !prev[note.id] }))}
                          className="text-[9px] text-cyan-700 dark:text-cyber-cyan hover:underline flex items-center gap-0.5 font-semibold"
                          title="Toggle all commands"
                        >
                          {isExpanded ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
                          <span>{note.commands.length} cmds</span>
                        </button>
                      )}
                    </div>
                  </div>

                  <div className="text-[10px] text-slate-600 dark:text-cyber-muted line-clamp-2 font-sans">
                    {note.summary || note.subCategory}
                  </div>

                  {note.commands && note.commands.length > 0 && (
                    <div className="space-y-1.5 pt-1">
                      {/* First command (always visible) - permanent dark terminal */}
                      {(() => {
                        const interpolated0 = interpolateCommand(note.commands[0], targetVars);
                        return (
                          <div className="flex items-center justify-between gap-2 p-1.5 rounded bg-slate-950 border border-slate-800 font-mono text-[10px]">
                            <code className="text-cyan-300 truncate flex-1 select-all" title={interpolated0}>
                              {interpolated0}
                            </code>
                            <button
                              type="button"
                              onClick={async () => {
                                await safeCopyToClipboard(interpolated0);
                                setCopiedCommand(interpolated0);
                                setTimeout(() => setCopiedCommand(null), 2000);
                                if (soundEnabled) playCyberSound('copy');
                              }}
                              className="px-1.5 py-0.5 rounded text-[9px] bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors flex-shrink-0 font-bold"
                              title="Copy command"
                            >
                              {copiedCommand === interpolated0 ? '✓ COPIED' : 'COPY'}
                            </button>
                          </div>
                        );
                      })()}

                      {/* Remaining commands when expanded - permanent dark terminal */}
                      {isExpanded && note.commands.slice(1).map((cmd, cIdx) => {
                        const interpolated = interpolateCommand(cmd, targetVars);
                        return (
                          <div key={cIdx} className="flex items-center justify-between gap-2 p-1.5 rounded bg-slate-950 border border-purple-900/60 font-mono text-[10px]">
                            <code className="text-purple-300 truncate flex-1 select-all" title={interpolated}>
                              {interpolated}
                            </code>
                            <button
                              type="button"
                              onClick={async () => {
                                await safeCopyToClipboard(interpolated);
                                setCopiedCommand(interpolated);
                                setTimeout(() => setCopiedCommand(null), 2000);
                                if (soundEnabled) playCyberSound('copy');
                              }}
                              className="px-1.5 py-0.5 rounded text-[9px] bg-slate-900 hover:bg-slate-800 text-purple-300 hover:text-white transition-colors flex-shrink-0 font-bold"
                              title="Copy command"
                            >
                              {copiedCommand === interpolated ? '✓ COPIED' : 'COPY'}
                            </button>
                          </div>
                        );
                      })}

                      {extraCommandsCount > 0 && !isExpanded && (
                        <button
                          type="button"
                          onClick={() => setExpandedNotes(prev => ({ ...prev, [note.id]: true }))}
                          className="text-[9px] text-slate-500 dark:text-cyber-muted hover:text-purple-700 dark:hover:text-purple-300 transition-colors flex items-center gap-1 font-mono"
                        >
                          <span>+ {extraCommandsCount} more commands from this note...</span>
                        </button>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
