import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  Flag, 
  ExternalLink, 
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
  Trash2,
  ListChecks,
  Maximize2,
  Zap
} from 'lucide-react';
import { useCtfStore } from '../../store/useCtfStore';
import { PipelineStatus, Difficulty } from '../../types';
import { formatSeconds, playCyberSound, triggerRootCelebration } from '../../utils/helpers';
import { ChecklistWorkspace } from '../checklist/ChecklistWorkspace';
import { PlatformBadge } from '../common/PlatformBadge';
import { OsBadge } from '../common/OsBadge';

export const MachineDetailModal: React.FC = () => {
  const {
    selectedMachineId,
    setSelectedMachineId,
    machines,
    updateMachine,
    updateMachineStatus,
    activeTargetId,
    activeTimerSeconds,
    setActiveTarget,
    isTimerRunning,
    startTimer,
    pauseTimer,
    resetTimer,
    soundEnabled,
    setActiveTab,
    setWriteupMachineId,
    deleteMachine,
    setReconAutomationModalOpen,
  } = useCtfStore();

  const navigate = useNavigate();

  const [showUserFlag, setShowUserFlag] = useState(false);
  const [showRootFlag, setShowRootFlag] = useState(false);
  const [copiedUser, setCopiedUser] = useState(false);
  const [copiedRoot, setCopiedRoot] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [newTagInput, setNewTagInput] = useState('');
  const [activeModalTab, setActiveModalTab] = useState<'overview' | 'checklist'>('overview');

  const machine = machines.find((m) => m.id === selectedMachineId);
  const isActiveTarget = Boolean(machine && activeTargetId === machine.id);

  const checklistCompletedCount = useMemo(() => {
    if (!machine?.checklist?.itemsState) return 0;
    return Object.values(machine.checklist.itemsState).filter((s) => s.status === 'done').length;
  }, [machine?.checklist?.itemsState]);

  // Handle ESC key to dismiss modal
  useEffect(() => {
    if (!selectedMachineId) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedMachineId(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedMachineId, setSelectedMachineId]);

  if (!selectedMachineId || !machine) return null;

  const handleCopy = (text: string, type: 'user' | 'root') => {
    if (!text) return;
    navigator.clipboard.writeText(text);
    if (type === 'user') {
      setCopiedUser(true);
      setTimeout(() => setCopiedUser(false), 2000);
    } else {
      setCopiedRoot(true);
      setTimeout(() => setCopiedRoot(false), 2000);
    }
    if (soundEnabled) playCyberSound('copy');
  };

  const handleStatusChange = (newStatus: PipelineStatus) => {
    updateMachineStatus(machine.id, newStatus);
    if (newStatus === 'root' || newStatus === 'completed') {
      triggerRootCelebration();
      if (soundEnabled) playCyberSound('root');
    } else {
      if (soundEnabled) playCyberSound('toggle');
    }
  };

  const handleAddTag = () => {
    if (!newTagInput.trim()) return;
    const clean = newTagInput.trim();
    if (!machine.tags.includes(clean)) {
      updateMachine(machine.id, { tags: [...machine.tags, clean] });
    }
    setNewTagInput('');
  };

  const handleRemoveTag = (tagToRemove: string) => {
    updateMachine(machine.id, {
      tags: machine.tags.filter((t) => t !== tagToRemove),
    });
  };

  const handleOpenInWriteup = () => {
    setWriteupMachineId(machine.id);
    setSelectedMachineId(null);
    setActiveTab('writeup');
  };

  const pipelineStages: { id: PipelineStatus; label: string; color: string }[] = [
    { id: 'backlog', label: 'Backlog', color: 'border-cyber-muted text-cyber-muted' },
    { id: 'recon', label: 'Recon In-Progress', color: 'border-cyber-cyan text-cyber-cyan' },
    { id: 'foothold', label: 'Foothold Obtained', color: 'border-cyber-amber text-cyber-amber' },
    { id: 'root', label: 'Root / System Pwned', color: 'border-cyber-crimson text-cyber-crimson' },
    { id: 'completed', label: 'Completed & Logged', color: 'border-cyber-emerald text-cyber-emerald' },
  ];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-0 sm:p-4 bg-black/85 backdrop-blur-md font-mono"
      onClick={() => setSelectedMachineId(null)}
    >
      <motion.div 
        initial={{ opacity: 0, scale: 0.96, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 10 }}
        transition={{ duration: 0.15 }}
        className="w-full sm:max-w-4xl h-full sm:h-[92vh] max-h-none sm:max-h-[860px] flex flex-col rounded-none sm:rounded-2xl border-0 sm:border border-cyber-border bg-cyber-card shadow-2xl overflow-hidden relative z-10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header (Pinned at Top) */}
        <div className="flex-shrink-0 flex items-start justify-between border-b border-cyber-border p-3.5 sm:p-4 bg-cyber-bg/95 backdrop-blur-sm">
          <div>
            <div className="flex items-center gap-2.5">
              <PlatformBadge platform={machine.platform} size="md" />
              <h2 className="text-xl font-bold text-white tracking-wide">{machine.name}</h2>
              <OsBadge os={machine.os} size="sm" />
              <span className={`text-xs px-2 py-0.5 rounded font-bold ${
                machine.difficulty === 'Easy' ? 'bg-cyber-emerald/10 text-cyber-emerald border border-cyber-emerald/30' :
                machine.difficulty === 'Medium' ? 'bg-cyber-amber/10 text-cyber-amber border border-cyber-amber/30' :
                machine.difficulty === 'Hard' ? 'bg-cyber-crimson/10 text-cyber-crimson border border-cyber-crimson/30' :
                'bg-purple-950/40 text-purple-400 border border-purple-800'
              }`}>
                {machine.difficulty}
              </span>
            </div>
            <div className="text-xs text-cyber-muted mt-1 flex items-center gap-3">
              <span>IP: <strong className="text-white">{machine.ip}</strong></span>
              {machine.roomUrl && (
                <a
                  href={machine.roomUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-cyber-cyan hover:underline"
                >
                  Official Room <ExternalLink className="w-3 h-3" />
                </a>
              )}
              {machine.writeupUrl && (
                <a
                  href={machine.writeupUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-cyber-purple hover:underline"
                >
                  Writeup <ExternalLink className="w-3 h-3" />
                </a>
              )}
            </div>
          </div>

          <div className="flex items-center gap-2">
            {machine.isCustom && (
              <button
                onClick={() => {
                  if (confirm(`Delete custom machine ${machine.name}?`)) {
                    deleteMachine(machine.id);
                  }
                }}
                className="p-1.5 rounded bg-cyber-bg text-cyber-muted hover:text-cyber-crimson border border-cyber-border transition-colors"
                title="Delete Custom Machine"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            )}
            <button
              onClick={() => setReconAutomationModalOpen(true)}
              className="flex items-center gap-1 px-2 py-1.5 rounded bg-cyber-emerald/10 text-cyber-emerald border border-cyber-emerald/40 hover:bg-cyber-emerald hover:text-black font-semibold text-xs transition-all shadow-glow-emerald/20"
              title="Open Recon & Exploitation Automation for this box"
            >
              <Zap className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Auto-Parse</span>
            </button>
            <button
              onClick={() => {
                navigate(`/target/${machine.id}`);
                setSelectedMachineId(null);
              }}
              className="p-1.5 rounded bg-cyber-bg text-cyber-muted hover:text-cyber-cyan border border-cyber-border hover:border-cyber-cyan transition-colors"
              title="Open Dedicated Full Page Mission Workspace"
            >
              <Maximize2 className="w-4 h-4" />
            </button>
            <button
              onClick={() => setSelectedMachineId(null)}
              className="p-1.5 rounded bg-cyber-bg text-cyber-muted hover:text-white border border-cyber-border transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Modal Navigation Tabs (Pinned below Header) */}
        <div className="flex-shrink-0 flex items-center border-b border-cyber-border bg-cyber-bg/70 px-4">
          <button
            onClick={() => setActiveModalTab('overview')}
            className={`flex items-center gap-1.5 py-2.5 px-4 font-bold text-xs border-b-2 transition-all ${
              activeModalTab === 'overview'
                ? 'border-cyber-emerald text-cyber-emerald bg-cyber-emerald/5'
                : 'border-transparent text-cyber-muted hover:text-white'
            }`}
          >
            <Crosshair className="w-3.5 h-3.5" />
            <span>OVERVIEW & FLAGS</span>
          </button>
          <button
            onClick={() => setActiveModalTab('checklist')}
            className={`flex items-center gap-1.5 py-2.5 px-4 font-bold text-xs border-b-2 transition-all ${
              activeModalTab === 'checklist'
                ? 'border-cyber-cyan text-cyber-cyan bg-cyber-cyan/5'
                : 'border-transparent text-cyber-muted hover:text-white'
            }`}
          >
            <ListChecks className="w-3.5 h-3.5" />
            <span>ATTACK CHECKLIST & METHODOLOGY</span>
            {checklistCompletedCount > 0 && (
              <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-cyber-cyan/20 text-cyber-cyan font-bold">
                {checklistCompletedCount} done
              </span>
            )}
          </button>
        </div>

        {/* Modal Body (Scrollable Center Workspace) */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 text-xs scrollbar-thin">
          {activeModalTab === 'checklist' ? (
            <ChecklistWorkspace machine={machine} onOpenInWriteup={handleOpenInWriteup} />
          ) : (
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
                        ? `bg-cyber-bg border-2 ${stage.color} shadow-md`
                        : 'bg-cyber-bg/40 border-cyber-border/80 text-cyber-muted hover:text-white hover:border-cyber-border'
                    }`}
                  >
                    {stage.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Section 2: Engagement Stopwatch & Time Metrics */}
          <div className="p-3.5 rounded-lg bg-cyber-bg border border-cyber-border grid grid-cols-1 sm:grid-cols-3 gap-4 items-center">
            <div>
              <div className="text-[10px] uppercase font-semibold text-cyber-muted flex items-center gap-1">
                <Clock className="w-3 h-3 text-cyber-cyan" /> SESSION TIMER
              </div>
              <div className="text-xl font-bold text-white mt-0.5">
                {formatSeconds(isActiveTarget ? activeTimerSeconds : machine.timeSpentSeconds)}
              </div>
              <div className="text-[10px] text-cyber-muted">
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
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-cyber-emerald/10 border border-cyber-emerald/40 text-cyber-emerald hover:bg-cyber-emerald hover:text-black font-semibold transition-all"
                >
                  <Crosshair className="w-3.5 h-3.5" /> Set Active Target
                </button>
              ) : (
                <>
                  {isTimerRunning ? (
                    <button
                      onClick={pauseTimer}
                      className="flex items-center gap-1 px-3 py-1.5 rounded-md bg-cyber-amber/10 border border-cyber-amber/40 text-cyber-amber hover:bg-cyber-amber hover:text-black font-semibold transition-all"
                    >
                      <Pause className="w-3.5 h-3.5" /> Pause
                    </button>
                  ) : (
                    <button
                      onClick={startTimer}
                      className="flex items-center gap-1 px-3 py-1.5 rounded-md bg-cyber-emerald/10 border border-cyber-emerald/40 text-cyber-emerald hover:bg-cyber-emerald hover:text-black font-semibold transition-all"
                    >
                      <Play className="w-3.5 h-3.5" /> Resume
                    </button>
                  )}
                  <button
                    onClick={() => resetTimer(machine.id)}
                    className="p-1.5 rounded-md bg-cyber-card border border-cyber-border text-cyber-muted hover:text-white"
                    title="Reset Timer"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                  </button>
                </>
              )}
            </div>

            <div className="text-[11px] space-y-1 text-cyber-muted border-t sm:border-t-0 sm:border-l border-cyber-border sm:pl-3 pt-2 sm:pt-0">
              <div className="flex justify-between">
                <span>Time to User:</span>
                <span className="text-cyber-cyan font-bold">
                  {machine.timeToUserSeconds ? formatSeconds(machine.timeToUserSeconds) : '--:--:--'}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Time to Root:</span>
                <span className="text-cyber-emerald font-bold">
                  {machine.timeToRootSeconds ? formatSeconds(machine.timeToRootSeconds) : '--:--:--'}
                </span>
              </div>
            </div>
          </div>

          {/* Section 3: Flags Vault */}
          <div>
            <div className="text-[10px] uppercase font-bold tracking-wider text-cyber-muted mb-2 flex items-center gap-1.5">
              <Flag className="w-3.5 h-3.5 text-cyber-crimson" /> FLAGS VAULT (OBFUSCATED & COPYABLE)
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {/* User Flag */}
              <div className="p-3 rounded-lg bg-cyber-bg border border-cyber-border">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="font-semibold text-cyber-cyan flex items-center gap-1">
                    <Flag className="w-3 h-3" /> USER FLAG
                  </span>
                  {machine.userPwnedAt && (
                    <span className="text-[10px] text-cyber-emerald flex items-center gap-1">
                      <Check className="w-3 h-3" /> PWNED
                    </span>
                  )}
                </div>
                
                <div className="flex items-center gap-2">
                  <input
                    type={showUserFlag ? 'text' : 'password'}
                    value={machine.userFlag || ''}
                    onChange={(e) => updateMachine(machine.id, { userFlag: e.target.value })}
                    placeholder="Enter user flag (e.g. 7a3f...)"
                    className="flex-1 bg-cyber-card px-2.5 py-1.5 rounded border border-cyber-border text-white text-xs focus:outline-none focus:border-cyber-cyan"
                  />
                  <button
                    onClick={() => setShowUserFlag(!showUserFlag)}
                    className="p-1.5 rounded bg-cyber-card border border-cyber-border text-cyber-muted hover:text-white"
                    title={showUserFlag ? 'Hide Flag' : 'Reveal Flag'}
                  >
                    {showUserFlag ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                  </button>
                  <button
                    onClick={() => handleCopy(machine.userFlag || '', 'user')}
                    className="p-1.5 rounded bg-cyber-card border border-cyber-border text-cyber-muted hover:text-cyber-cyan"
                    title="Copy Flag"
                  >
                    {copiedUser ? <Check className="w-3.5 h-3.5 text-cyber-emerald" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>

              {/* Root Flag */}
              <div className="p-3 rounded-lg bg-cyber-bg border border-cyber-border">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="font-semibold text-cyber-emerald flex items-center gap-1">
                    <Flag className="w-3 h-3" /> ROOT / SYSTEM FLAG
                  </span>
                  {machine.rootPwnedAt && (
                    <span className="text-[10px] text-cyber-emerald flex items-center gap-1">
                      <Check className="w-3 h-3" /> ROOTED
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-2">
                  <input
                    type={showRootFlag ? 'text' : 'password'}
                    value={machine.rootFlag || ''}
                    onChange={(e) => updateMachine(machine.id, { rootFlag: e.target.value })}
                    placeholder="Enter root flag (e.g. 9b1c...)"
                    className="flex-1 bg-cyber-card px-2.5 py-1.5 rounded border border-cyber-border text-white text-xs focus:outline-none focus:border-cyber-emerald"
                  />
                  <button
                    onClick={() => setShowRootFlag(!showRootFlag)}
                    className="p-1.5 rounded bg-cyber-card border border-cyber-border text-cyber-muted hover:text-white"
                    title={showRootFlag ? 'Hide Flag' : 'Reveal Flag'}
                  >
                    {showRootFlag ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                  </button>
                  <button
                    onClick={() => handleCopy(machine.rootFlag || '', 'root')}
                    className="p-1.5 rounded bg-cyber-card border border-cyber-border text-cyber-muted hover:text-cyber-emerald"
                    title="Copy Flag"
                  >
                    {copiedRoot ? <Check className="w-3.5 h-3.5 text-cyber-emerald" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Section 4: Key Hint (Spoiler Protected) */}
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[10px] uppercase font-bold tracking-wider text-cyber-muted flex items-center gap-1.5">
                <AlertCircle className="w-3.5 h-3.5 text-cyber-amber" /> INTEL HINT (SPOILER MASKED)
              </span>
              <button
                onClick={() => setShowHint(!showHint)}
                className="text-[10px] text-cyber-amber hover:underline flex items-center gap-1"
              >
                {showHint ? <EyeOff className="w-3 h-3" /> : <Eye className="w-3 h-3" />}
                {showHint ? 'Mask Hint' : 'Reveal Hint'}
              </button>
            </div>

            <div className={`p-3 rounded-lg border font-mono text-xs transition-all ${
              showHint
                ? 'bg-cyber-amber/10 border-cyber-amber/40 text-white'
                : 'bg-cyber-bg border-cyber-border text-transparent select-none cursor-pointer filter blur-[4px] hover:blur-[2px]'
            }`}
              onClick={() => setShowHint(true)}
            >
              {machine.hint || 'No specific hint recorded for this machine. Enumerate services thoroughly.'}
            </div>
          </div>

          {/* Section 5: Ratings & Matrix of Satisfaction */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="p-3 rounded-lg bg-cyber-bg border border-cyber-border">
              <div className="text-[10px] uppercase font-bold text-cyber-muted mb-2">
                PERCEIVED DIFFICULTY VS OFFICIAL
              </div>
              <div className="flex items-center gap-2">
                {(['Very Easy', 'Easy', 'Medium', 'Hard', 'Insane'] as Difficulty[]).map((d) => (
                  <button
                    key={d}
                    onClick={() => updateMachine(machine.id, { perceivedDifficulty: d })}
                    className={`px-2 py-1 rounded text-[10px] border transition-all ${
                      machine.perceivedDifficulty === d
                        ? 'bg-cyber-card border-cyber-emerald text-cyber-emerald font-bold'
                        : 'border-cyber-border text-cyber-muted hover:text-white'
                    }`}
                  >
                    {d}
                  </button>
                ))}
              </div>
            </div>

            <div className="p-3 rounded-lg bg-cyber-bg border border-cyber-border">
              <div className="text-[10px] uppercase font-bold text-cyber-muted mb-2">
                MATRIX OF SATISFACTION (ENJOYMENT)
              </div>
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    onClick={() => updateMachine(machine.id, { rating: star })}
                    className="p-1 text-cyber-muted hover:text-cyber-amber transition-colors"
                  >
                    <Star
                      className={`w-5 h-5 ${
                        (machine.rating || 0) >= star
                          ? 'fill-cyber-amber text-cyber-amber'
                          : 'text-cyber-muted'
                      }`}
                    />
                  </button>
                ))}
                <span className="text-xs text-cyber-muted ml-2 font-bold">
                  {machine.rating ? `${machine.rating} / 5 Stars` : 'Unrated'}
                </span>
              </div>
            </div>
          </div>

          {/* Section 6: Attack Vectors & Tags */}
          <div>
            <div className="text-[10px] uppercase font-bold tracking-wider text-cyber-muted mb-2 flex items-center gap-1.5">
              <Tag className="w-3.5 h-3.5 text-cyber-purple" /> ATTACK VECTORS & TAGS
            </div>
            
            <div className="flex flex-wrap gap-1.5 mb-2">
              {machine.tags.map((tag) => (
                <span
                  key={tag}
                  className="flex items-center gap-1 px-2 py-1 rounded bg-cyber-bg border border-cyber-border text-cyber-cyan text-xs group"
                >
                  <span>{tag}</span>
                  <button
                    onClick={() => handleRemoveTag(tag)}
                    className="text-cyber-muted hover:text-cyber-crimson group-hover:inline-block ml-0.5"
                  >
                    ✕
                  </button>
                </span>
              ))}
            </div>

            <div className="flex items-center gap-2 max-w-sm">
              <input
                type="text"
                value={newTagInput}
                onChange={(e) => setNewTagInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleAddTag()}
                placeholder="Add tag (e.g. SSRF, Kerberoast)..."
                className="flex-1 bg-cyber-bg px-2.5 py-1 rounded border border-cyber-border text-white text-xs focus:outline-none focus:border-cyber-purple"
              />
              <button
                onClick={handleAddTag}
                className="px-2.5 py-1 rounded bg-cyber-purple/20 border border-cyber-purple/50 text-cyber-purple hover:bg-cyber-purple hover:text-white font-semibold"
              >
                Add
              </button>
            </div>
          </div>

          {/* Section 7: Quick Notes */}
          <div>
            <div className="text-[10px] uppercase font-bold tracking-wider text-cyber-muted mb-2">
              TACTICAL FIELD NOTES
            </div>
            <textarea
              rows={3}
              value={machine.quickNotes || ''}
              onChange={(e) => updateMachine(machine.id, { quickNotes: e.target.value })}
              placeholder="Record initial foothold credentials, open ports, or pivot routes..."
              className="w-full bg-cyber-bg p-2.5 rounded-lg border border-cyber-border text-white text-xs focus:outline-none focus:border-cyber-emerald font-mono resize-none"
            />
          </div>
        </div>
      )}
    </div>

        {/* Modal Footer (Pinned at Bottom) */}
        <div className="flex-shrink-0 border-t border-cyber-border p-3 sm:p-3.5 bg-cyber-bg/95 backdrop-blur-sm flex items-center justify-between">
          <div className="text-[10px] text-cyber-muted">
            Created: {new Date(machine.createdAt).toLocaleDateString()}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleOpenInWriteup}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyber-cyan/10 border border-cyber-cyan/40 text-cyber-cyan hover:bg-cyber-cyan hover:text-black font-semibold transition-all"
            >
              <FileText className="w-3.5 h-3.5" /> Writeup Studio
            </button>
            <button
              onClick={() => setSelectedMachineId(null)}
              className="px-4 py-1.5 rounded-lg bg-cyber-card border border-cyber-border text-white hover:border-cyber-emerald transition-colors"
            >
              Done
            </button>
          </div>
        </div>

        </motion.div>
      </div>
    );
};
