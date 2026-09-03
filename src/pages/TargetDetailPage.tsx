import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  Crosshair, 
  Flag, 
  ExternalLink, 
  Clock, 
  Play, 
  Pause, 
  RotateCcw, 
  FileText, 
  Check, 
  Copy, 
  Eye, 
  EyeOff, 
  Star, 
  Tag, 
  ListChecks, 
  AlertCircle 
} from 'lucide-react';
import { useCtfStore } from '../store/useCtfStore';
import { Difficulty, PipelineStatus } from '../types';
import { ChecklistWorkspace } from '../components/checklist/ChecklistWorkspace';
import { formatSeconds, playCyberSound, triggerRootCelebration } from '../utils/helpers';
import { PlatformBadge } from '../components/common/PlatformBadge';
import { OsBadge } from '../components/common/OsBadge';
import { EditableIpBadge } from '../components/common/EditableIpBadge';

export const TargetDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const {
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
    setWriteupMachineId,
  } = useCtfStore();

  const machine = machines.find((m) => m.id === id);

  const [activeTab, setActiveTab] = useState<'checklist' | 'overview'>('checklist');
  const [showUserFlag, setShowUserFlag] = useState(false);
  const [showRootFlag, setShowRootFlag] = useState(false);
  const [copiedUser, setCopiedUser] = useState(false);
  const [copiedRoot, setCopiedRoot] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [newTagInput, setNewTagInput] = useState('');

  if (!machine) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[500px] text-center p-6 font-mono space-y-4">
        <AlertCircle className="w-12 h-12 text-cyber-crimson animate-pulse" />
        <h2 className="text-xl font-bold text-white">TARGET NOT FOUND</h2>
        <p className="text-xs text-cyber-muted max-w-md">
          The requested target ID <code className="text-cyber-cyan">{id}</code> could not be located in the local catalog.
        </p>
        <Link
          to="/tracker"
          className="px-4 py-2 rounded-lg bg-cyber-card border border-cyber-cyan text-cyber-cyan hover:bg-cyber-cyan hover:text-black font-bold text-xs transition-all"
        >
          Return to Tracker
        </Link>
      </div>
    );
  }

  const isActiveTarget = activeTargetId === machine.id;

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

  const pipelineStages: { id: PipelineStatus; label: string; color: string }[] = [
    { id: 'backlog', label: 'Backlog', color: 'border-cyber-muted text-cyber-muted' },
    { id: 'recon', label: 'Recon In-Progress', color: 'border-cyber-cyan text-cyber-cyan' },
    { id: 'foothold', label: 'Foothold Obtained', color: 'border-cyber-amber text-cyber-amber' },
    { id: 'root', label: 'Root / System Pwned', color: 'border-cyber-crimson text-cyber-crimson' },
    { id: 'completed', label: 'Completed & Logged', color: 'border-cyber-emerald text-cyber-emerald' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      className="max-w-6xl mx-auto space-y-6 font-mono text-xs pb-16"
    >
      {/* Page Header Bar */}
      <div className="p-4 rounded-xl border border-cyber-border bg-cyber-card shadow-lg flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate('/tracker')}
            className="p-2 rounded-lg bg-cyber-bg border border-cyber-border text-cyber-muted hover:text-white hover:border-cyber-cyan transition-colors"
            title="Back to Target List"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>

          <div>
            <div className="flex items-center gap-2.5">
              <PlatformBadge platform={machine.platform} size="md" />
              <h1 className="text-xl font-bold text-white tracking-wide">{machine.name}</h1>
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
            <div className="text-xs text-cyber-muted mt-1 flex flex-wrap items-center gap-4">
              <EditableIpBadge machineId={machine.id} initialIp={machine.ip} size="sm" showLabel />
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
            </div>
          </div>
        </div>

        {/* Stopwatch & Action Buttons */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 bg-cyber-bg border border-cyber-border px-3 py-1.5 rounded-lg">
            <Clock className="w-4 h-4 text-cyber-cyan" />
            <span className="text-sm font-bold text-white">
              {formatSeconds(isActiveTarget ? activeTimerSeconds : machine.timeSpentSeconds)}
            </span>
            {isActiveTarget ? (
              isTimerRunning ? (
                <button onClick={pauseTimer} className="p-1 text-cyber-amber hover:text-white" title="Pause">
                  <Pause className="w-3.5 h-3.5" />
                </button>
              ) : (
                <button onClick={startTimer} className="p-1 text-cyber-emerald hover:text-white" title="Resume">
                  <Play className="w-3.5 h-3.5" />
                </button>
              )
            ) : (
              <button
                onClick={() => {
                  setActiveTarget(machine.id);
                  startTimer();
                }}
                className="px-2 py-0.5 rounded bg-cyber-emerald/20 text-cyber-emerald text-[10px] font-bold border border-cyber-emerald/40 hover:bg-cyber-emerald hover:text-black transition-all"
              >
                Engage
              </button>
            )}
          </div>

          <button
            onClick={() => {
              setWriteupMachineId(machine.id);
              navigate('/writeup');
            }}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyber-cyan/10 border border-cyber-cyan/40 text-cyber-cyan hover:bg-cyber-cyan hover:text-black font-semibold transition-all"
          >
            <FileText className="w-4 h-4" /> Writeup Studio
          </button>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex items-center border-b border-cyber-border bg-cyber-card/60 px-4 rounded-t-xl">
        <button
          onClick={() => setActiveTab('checklist')}
          className={`flex items-center gap-2 py-3 px-5 font-bold text-xs border-b-2 transition-all ${
            activeTab === 'checklist'
              ? 'border-cyber-cyan text-cyber-cyan bg-cyber-cyan/5'
              : 'border-transparent text-cyber-muted hover:text-white'
          }`}
        >
          <ListChecks className="w-4 h-4" />
          <span>ATTACK METHODOLOGY & DYNAMIC CHECKLIST</span>
        </button>

        <button
          onClick={() => setActiveTab('overview')}
          className={`flex items-center gap-2 py-3 px-5 font-bold text-xs border-b-2 transition-all ${
            activeTab === 'overview'
              ? 'border-cyber-emerald text-cyber-emerald bg-cyber-emerald/5'
              : 'border-transparent text-cyber-muted hover:text-white'
          }`}
        >
          <Crosshair className="w-4 h-4" />
          <span>FLAGS VAULT & INTEL OVERVIEW</span>
        </button>
      </div>

      {/* Main Tab Stage */}
      {activeTab === 'checklist' ? (
        <ChecklistWorkspace 
          machine={machine} 
          onOpenInWriteup={() => {
            setWriteupMachineId(machine.id);
            navigate('/writeup');
          }} 
        />
      ) : (
        <div className="p-6 rounded-b-xl border border-t-0 border-cyber-border bg-cyber-card space-y-6">
          
          {/* Section 1: Pipeline Stage Selector */}
          <div>
            <div className="text-[10px] uppercase font-bold tracking-wider text-cyber-muted mb-2 flex items-center gap-1.5">
              <Crosshair className="w-3.5 h-3.5 text-cyber-emerald" /> ATTACK LIFECYCLE PIPELINE
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
              {pipelineStages.map((stage) => {
                const isSelected = machine.status === stage.id;
                return (
                  <button
                    key={stage.id}
                    onClick={() => handleStatusChange(stage.id)}
                    className={`p-2.5 rounded-lg border text-center font-semibold transition-all ${
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

          {/* Section 2: Flags Vault */}
          <div>
            <div className="text-[10px] uppercase font-bold tracking-wider text-cyber-muted mb-2 flex items-center gap-1.5">
              <Flag className="w-3.5 h-3.5 text-cyber-crimson" /> FLAGS VAULT
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* User Flag */}
              <div className="p-3.5 rounded-lg bg-cyber-bg border border-cyber-border space-y-2">
                <div className="flex items-center justify-between">
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
                    placeholder="Enter user flag..."
                    className="flex-1 bg-cyber-card px-2.5 py-1.5 rounded border border-cyber-border text-white text-xs focus:outline-none focus:border-cyber-cyan"
                  />
                  <button
                    onClick={() => setShowUserFlag(!showUserFlag)}
                    className="p-1.5 rounded bg-cyber-card border border-cyber-border text-cyber-muted hover:text-white"
                  >
                    {showUserFlag ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                  </button>
                  <button
                    onClick={() => handleCopy(machine.userFlag || '', 'user')}
                    className="p-1.5 rounded bg-cyber-card border border-cyber-border text-cyber-muted hover:text-cyber-cyan"
                  >
                    {copiedUser ? <Check className="w-3.5 h-3.5 text-cyber-emerald" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>

              {/* Root Flag */}
              <div className="p-3.5 rounded-lg bg-cyber-bg border border-cyber-border space-y-2">
                <div className="flex items-center justify-between">
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
                    placeholder="Enter root flag..."
                    className="flex-1 bg-cyber-card px-2.5 py-1.5 rounded border border-cyber-border text-white text-xs focus:outline-none focus:border-cyber-emerald"
                  />
                  <button
                    onClick={() => setShowRootFlag(!showRootFlag)}
                    className="p-1.5 rounded bg-cyber-card border border-cyber-border text-cyber-muted hover:text-white"
                  >
                    {showRootFlag ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                  </button>
                  <button
                    onClick={() => handleCopy(machine.rootFlag || '', 'root')}
                    className="p-1.5 rounded bg-cyber-card border border-cyber-border text-cyber-muted hover:text-cyber-emerald"
                  >
                    {copiedRoot ? <Check className="w-3.5 h-3.5 text-cyber-emerald" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Section 3: Spoiler Hint */}
          <div className="p-3.5 rounded-lg bg-cyber-bg border border-cyber-border space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-[10px] uppercase font-bold text-cyber-muted flex items-center gap-1">
                <AlertCircle className="w-3 h-3 text-cyber-amber" /> INTEL HINT
              </span>
              <button
                onClick={() => setShowHint(!showHint)}
                className="text-[10px] text-cyber-amber hover:underline"
              >
                {showHint ? 'Hide Hint' : 'Reveal Hint'}
              </button>
            </div>
            <div className={`p-2.5 rounded border text-xs ${
              showHint ? 'bg-cyber-amber/10 border-cyber-amber/30 text-white' : 'filter blur-[4px] select-none text-transparent'
            }`}>
              {machine.hint || 'No specific hints recorded for this target.'}
            </div>
          </div>

          {/* Section 4: Tags & Tactical Field Notes */}
          <div className="space-y-3">
            <div className="text-[10px] uppercase font-bold text-cyber-muted flex items-center gap-1.5">
              <Tag className="w-3.5 h-3.5 text-cyber-purple" /> ATTACK VECTORS & TAGS
            </div>
            <div className="flex flex-wrap gap-1.5">
              {machine.tags.map((t) => (
                <span key={t} className="px-2 py-1 rounded bg-cyber-bg border border-cyber-border text-cyber-cyan text-xs flex items-center gap-1">
                  <span>{t}</span>
                  <button onClick={() => handleRemoveTag(t)} className="text-cyber-muted hover:text-cyber-crimson">✕</button>
                </span>
              ))}
            </div>
            <div className="flex items-center gap-2 max-w-sm">
              <input
                type="text"
                value={newTagInput}
                onChange={(e) => setNewTagInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleAddTag()}
                placeholder="Add vector tag..."
                className="flex-1 bg-cyber-bg px-2.5 py-1 rounded border border-cyber-border text-white text-xs focus:outline-none focus:border-cyber-purple"
              />
              <button
                onClick={handleAddTag}
                className="px-3 py-1 rounded bg-cyber-purple/20 border border-cyber-purple/50 text-cyber-purple hover:bg-cyber-purple hover:text-white font-semibold"
              >
                Add
              </button>
            </div>
          </div>

          {/* Section 5: Field Notes */}
          <div className="space-y-1.5">
            <div className="text-[10px] uppercase font-bold text-cyber-muted">
              TACTICAL FIELD NOTES
            </div>
            <textarea
              rows={4}
              value={machine.quickNotes || ''}
              onChange={(e) => updateMachine(machine.id, { quickNotes: e.target.value })}
              placeholder="Record notes, credentials, and pivot paths..."
              className="w-full bg-cyber-bg p-3 rounded-lg border border-cyber-border text-white text-xs font-mono focus:outline-none focus:border-cyber-emerald resize-none"
            />
          </div>

        </div>
      )}
    </motion.div>
  );
};
