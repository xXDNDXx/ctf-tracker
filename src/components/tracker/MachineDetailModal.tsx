import React, { useState, useEffect, useMemo } from 'react';
import { createPortal } from 'react-dom';
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
  Zap,
  Printer,
  ShieldAlert,
  AlertOctagon,
  CheckCircle2
} from 'lucide-react';
import { useCtfStore, BRAND_THEMES } from '../../store/useCtfStore';
import { PipelineStatus, Difficulty } from '../../types';
import { formatSeconds, playCyberSound, triggerRootCelebration, safeCopyToClipboard } from '../../utils/helpers';
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
    appBrand,
    setActiveTab,
    setWriteupMachineId,
    setReportMachineId,
    deleteMachine,
    setReconAutomationModalOpen,
  } = useCtfStore();

  const navigate = useNavigate();

  const [showUserFlag, setShowUserFlag] = useState(false);
  const [showRootFlag, setShowRootFlag] = useState(false);
  const [copiedUser, setCopiedUser] = useState(false);
  const [copiedRoot, setCopiedRoot] = useState(false);
  const [copiedReportMd, setCopiedReportMd] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [newTagInput, setNewTagInput] = useState('');
  const [activeModalTab, setActiveModalTab] = useState<'overview' | 'checklist' | 'report'>('overview');

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

  const handleCopy = async (text: string, type: 'user' | 'root') => {
    if (!text) return;
    await safeCopyToClipboard(text);
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

  // Prevent background body scroll when modal is open
  useEffect(() => {
    if (selectedMachineId) {
      const orig = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = orig;
      };
    }
  }, [selectedMachineId]);

  const activeBrand = BRAND_THEMES.find((b) => b.id === appBrand) || BRAND_THEMES[0];

  const handleCopyReportMd = () => {
    const md = `# EXECUTIVE PENETRATION TESTING REPORT
**Classification:** STRICTLY CONFIDENTIAL // PROPRIETARY
**Target:** ${machine.name} (${machine.ip})
**Platform / OS:** ${machine.platform} // ${machine.os}
**Difficulty:** ${machine.difficulty}
**Assessment Date:** ${new Date().toLocaleDateString()}
**Assessor:** ${activeBrand.namePrefix}${activeBrand.nameSuffix} Offensive Operations

## 1. Executive Summary
During the security assessment of target host ${machine.name} (${machine.ip}), security vulnerabilities were identified allowing adversaries to establish unauthorized footholds and escalate to administrative root privileges.

## 2. Threat Findings Matrix
- **Initial Foothold:** ${machine.tags.slice(0, 3).join(', ') || 'Remote Service Exploitation'} (CVSS 8.8 - HIGH)
- **Privilege Escalation:** ${machine.tags.slice(3, 6).join(', ') || 'Local Misconfiguration'} (CVSS 9.4 - CRITICAL)

## 3. Proof of Concept & Compromise Flags
- **User Flag:** ${machine.userFlag || (machine.userPwnedAt ? 'CAPTURED' : 'PENDING')}
- **Root Flag:** ${machine.rootFlag || (machine.rootPwnedAt ? 'CAPTURED' : 'PENDING')}
- **Notes:** ${machine.quickNotes || machine.writeupMarkdown || 'No detailed transcript logged.'}

## 4. Remediation Plan
1. Immediate: Patch vulnerable exposed services and restrict listening ports.
2. Short-Term: Enforce strict least-privilege policies.
3. Long-Term: Deploy centralized audit logging and EDR telemetry.
`;
    navigator.clipboard.writeText(md);
    setCopiedReportMd(true);
    if (soundEnabled) playCyberSound('copy');
    setTimeout(() => setCopiedReportMd(false), 2000);
  };

  const pipelineStages: { id: PipelineStatus; label: string; color: string }[] = [
    { id: 'backlog', label: 'Backlog', color: 'border-cyber-muted text-cyber-muted' },
    { id: 'recon', label: 'Recon In-Progress', color: 'border-cyber-cyan text-cyber-cyan' },
    { id: 'foothold', label: 'Foothold Obtained', color: 'border-cyber-amber text-cyber-amber' },
    { id: 'root', label: 'Root / System Pwned', color: 'border-cyber-crimson text-cyber-crimson' },
    { id: 'completed', label: 'Completed & Logged', color: 'border-cyber-emerald text-cyber-emerald' },
  ];

  const modalContent = (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/85 backdrop-blur-md font-mono overflow-y-auto"
      onClick={() => setSelectedMachineId(null)}
    >
      <motion.div 
        initial={{ opacity: 0, scale: 0.96, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 10 }}
        transition={{ duration: 0.15 }}
        className="w-full sm:max-w-4xl max-h-[92vh] flex flex-col rounded-xl sm:rounded-2xl border border-cyber-border bg-cyber-card shadow-2xl overflow-hidden relative my-auto"
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

          <div className="flex items-center gap-1.5 sm:gap-2">
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

            {/* Direct Pentest Pre-Report Button */}
            <button
              onClick={() => setReportMachineId(machine.id)}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded bg-purple-950/40 text-purple-300 border border-purple-800/60 hover:bg-purple-900/60 hover:text-white font-semibold text-xs transition-all shadow-sm group"
              title="Open Executive Pentest Pre-Report"
            >
              <FileText className="w-3.5 h-3.5 text-purple-400 group-hover:scale-110 transition-transform" />
              <span className="hidden sm:inline">Pre-Report</span>
            </button>

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
          <button
            onClick={() => setActiveModalTab('report')}
            className={`flex items-center gap-1.5 py-2.5 px-4 font-bold text-xs border-b-2 transition-all ${
              activeModalTab === 'report'
                ? 'border-purple-400 text-purple-300 bg-purple-950/20'
                : 'border-transparent text-cyber-muted hover:text-white'
            }`}
          >
            <FileText className="w-3.5 h-3.5 text-purple-400" />
            <span>📄 PENTEST REPORT</span>
          </button>
        </div>

        {/* Modal Body (Scrollable Center Workspace) */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 text-xs scrollbar-thin">
          {activeModalTab === 'checklist' ? (
            <ChecklistWorkspace machine={machine} onOpenInWriteup={handleOpenInWriteup} />
          ) : activeModalTab === 'report' ? (
            <div className="space-y-6">
              {/* Report Header Bar */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-xl bg-cyber-bg/80 border border-cyber-border">
                <div>
                  <div className="text-[10px] text-purple-400 font-bold uppercase tracking-wider mb-1 flex items-center gap-1.5">
                    <FileText className="w-3.5 h-3.5" /> EXECUTIVE SECURITY ASSESSMENT PRE-REPORT
                  </div>
                  <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    <span>{machine.name}</span>
                    <span className="text-cyber-muted font-normal text-xs font-mono">({machine.ip})</span>
                  </h3>
                  <div className="text-xs text-cyber-muted mt-1">
                    Classification: <span className="text-cyber-amber font-semibold">CONFIDENTIAL // CLIENT PENETRATION AUDIT</span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handleCopyReportMd}
                    className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-cyber-card border border-cyber-border hover:border-cyber-cyan text-cyber-muted hover:text-white text-xs transition-colors"
                  >
                    {copiedReportMd ? <Check className="w-3.5 h-3.5 text-cyber-emerald" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedReportMd ? 'Copied' : 'Copy MD'}</span>
                  </button>

                  <button
                    onClick={() => setReportMachineId(machine.id)}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-purple-950/50 border border-purple-800 text-purple-300 hover:bg-purple-900/60 hover:text-white font-bold text-xs transition-colors shadow-sm"
                  >
                    <Printer className="w-3.5 h-3.5" />
                    <span>Print / PDF</span>
                  </button>
                </div>
              </div>

              {/* Threat Level & Severity Matrix */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-3.5 rounded-xl bg-cyber-bg border border-cyber-border">
                  <div className="text-[10px] text-cyber-muted uppercase font-bold mb-1">COMPROMISE STATUS</div>
                  <div className="text-sm font-bold flex items-center gap-2">
                    {machine.status === 'completed' || machine.status === 'root' ? (
                      <span className="text-cyber-emerald flex items-center gap-1">
                        <CheckCircle2 className="w-4 h-4" /> 100% ROOT PWNED
                      </span>
                    ) : machine.status === 'foothold' ? (
                      <span className="text-cyber-amber flex items-center gap-1">
                        <AlertOctagon className="w-4 h-4" /> FOOTHOLD OBTAINED
                      </span>
                    ) : (
                      <span className="text-cyber-cyan flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" /> RECON IN-PROGRESS
                      </span>
                    )}
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-cyber-bg border border-cyber-border">
                  <div className="text-[10px] text-cyber-muted uppercase font-bold mb-1">RISK SEVERITY</div>
                  <div className="text-sm font-bold text-cyber-crimson flex items-center gap-1.5">
                    <ShieldAlert className="w-4 h-4" />
                    <span>CVSS 9.4 CRITICAL</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-cyber-bg border border-cyber-border">
                  <div className="text-[10px] text-cyber-muted uppercase font-bold mb-1">TOTAL TIME LOGGED</div>
                  <div className="text-sm font-bold text-cyber-cyan flex items-center gap-1.5">
                    <Clock className="w-4 h-4" />
                    <span>{formatSeconds(machine.timeSpentSeconds)}</span>
                  </div>
                </div>
              </div>

              {/* Executive Summary Narrative */}
              <div className="p-4 rounded-xl bg-cyber-bg/60 border border-cyber-border space-y-2">
                <div className="text-[10px] uppercase font-bold text-cyber-cyan tracking-wider">
                  1. EXECUTIVE SUMMARY
                </div>
                <p className="text-cyber-muted leading-relaxed">
                  During security validation on target host <strong className="text-white">{machine.name}</strong> ({machine.ip}), high-impact vulnerabilities were verified. Remote access vectors allowed adversaries to breach network perimeters and subsequently escalate privileges to root / system administrator.
                </p>
              </div>

              {/* Attack Path & Flag Proof of Compromise */}
              <div className="p-4 rounded-xl bg-cyber-bg/60 border border-cyber-border space-y-3">
                <div className="text-[10px] uppercase font-bold text-cyber-emerald tracking-wider">
                  2. ATTACK CHAIN & PROOF OF COMPROMISE
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono">
                  <div className="p-3 rounded-lg bg-cyber-card border border-cyber-border">
                    <div className="text-[10px] text-cyber-cyan font-bold mb-1 flex items-center justify-between">
                      <span>USER ACCESS FLAG</span>
                      <span>{machine.userPwnedAt ? '✓ PWNED' : 'PENDING'}</span>
                    </div>
                    <div className="p-2 rounded bg-cyber-bg text-cyber-muted text-[11px] truncate">
                      {machine.userFlag || (machine.userPwnedAt ? 'HTB{user_flag_verified}' : 'Not Captured')}
                    </div>
                  </div>
                  <div className="p-3 rounded-lg bg-cyber-card border border-cyber-border">
                    <div className="text-[10px] text-cyber-emerald font-bold mb-1 flex items-center justify-between">
                      <span>ROOT / SYSTEM FLAG</span>
                      <span>{machine.rootPwnedAt ? '✓ ROOTED' : 'PENDING'}</span>
                    </div>
                    <div className="p-2 rounded bg-cyber-bg text-cyber-muted text-[11px] truncate">
                      {machine.rootFlag || (machine.rootPwnedAt ? 'HTB{root_flag_verified}' : 'Not Captured')}
                    </div>
                  </div>
                </div>

                {machine.quickNotes && (
                  <div className="p-3 rounded-lg bg-cyber-card border border-cyber-border space-y-1">
                    <div className="text-[10px] text-cyber-muted font-bold uppercase">Assessor Field Notes:</div>
                    <div className="text-white whitespace-pre-wrap">{machine.quickNotes}</div>
                  </div>
                )}
              </div>

              {/* Remediation Action Plan */}
              <div className="p-4 rounded-xl bg-cyber-bg/60 border border-cyber-border space-y-2">
                <div className="text-[10px] uppercase font-bold text-cyber-amber tracking-wider">
                  3. STRATEGIC REMEDIATION ROADMAP
                </div>
                <ul className="space-y-1.5 text-cyber-muted list-disc list-inside">
                  <li><strong className="text-white">Immediate:</strong> Terminate vulnerable listening services and patch software packages to stable releases.</li>
                  <li><strong className="text-white">Defensive:</strong> Harden local sudoers configurations and eliminate unauthorized SUID binaries.</li>
                  <li><strong className="text-white">Monitoring:</strong> Deploy SIEM ingestion for authentication failure telemetry and privilege escalation alerting.</li>
                </ul>
              </div>
            </div>
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
                    onClick={() => {
                      if (confirm('Reset session timer?')) {
                        resetTimer();
                        if (soundEnabled) playCyberSound('click');
                      }
                    }}
                    className="p-1.5 rounded-md bg-cyber-card border border-cyber-border text-cyber-muted hover:text-white"
                    title="Reset Timer"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                  </button>
                </>
              )}
            </div>

            {/* Time to User & Root Milestones */}
            <div className="grid grid-cols-2 gap-2 text-[10px] w-full sm:w-auto border-t sm:border-t-0 sm:border-l border-cyber-border pt-2 sm:pt-0 sm:pl-4">
              <div>
                <span className="text-cyber-muted block">Time to User:</span>
                <span className="font-bold text-cyber-cyan font-mono">
                  {machine.timeToUserSeconds ? formatSeconds(machine.timeToUserSeconds) : '--:--:--'}
                </span>
              </div>
              <div>
                <span className="text-cyber-muted block">Time to Root:</span>
                <span className="font-bold text-cyber-crimson font-mono">
                  {machine.timeToRootSeconds ? formatSeconds(machine.timeToRootSeconds) : '--:--:--'}
                </span>
              </div>
            </div>
          </div>

          {/* Section 3: Flags Vault */}
          <div>
            <div className="text-[10px] uppercase font-bold tracking-wider text-cyber-muted mb-2 flex items-center gap-1.5">
              <Flag className="w-3.5 h-3.5 text-cyber-amber" /> FLAGS VAULT (OBFUSCATED & COPYABLE)
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {/* User Flag */}
              <div className="p-3 rounded-lg border border-cyber-border bg-cyber-bg/50 space-y-2">
                <div className="flex items-center justify-between text-[11px]">
                  <span className="text-cyber-cyan font-semibold flex items-center gap-1">
                    <Flag className="w-3 h-3" /> USER FLAG
                  </span>
                  {machine.userPwnedAt && (
                    <span className="text-[9px] text-cyber-emerald flex items-center gap-0.5">
                      <Check className="w-3 h-3" /> PWNED
                    </span>
                  )}
                </div>
                <div className="relative">
                  <input
                    type={showUserFlag ? 'text' : 'password'}
                    value={machine.userFlag || ''}
                    onChange={(e) => updateMachine(machine.id, { userFlag: e.target.value })}
                    placeholder="Enter user flag (e.g. 7a3f...)"
                    className="w-full bg-cyber-card px-2.5 py-1.5 rounded border border-cyber-border text-white text-xs focus:outline-none focus:border-cyber-cyan pr-16 font-mono"
                  />
                  <div className="absolute right-1.5 top-1/2 -translate-y-1/2 flex items-center gap-1">
                    <button
                      type="button"
                      onClick={() => setShowUserFlag(!showUserFlag)}
                      className="p-1 rounded text-cyber-muted hover:text-white"
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
                          : 'text-cyber-muted hover:text-white'
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
              <div className="p-3 rounded-lg border border-cyber-border bg-cyber-bg/50 space-y-2">
                <div className="flex items-center justify-between text-[11px]">
                  <span className="text-cyber-emerald font-semibold flex items-center gap-1">
                    <Flag className="w-3 h-3" /> ROOT / SYSTEM FLAG
                  </span>
                  {machine.rootPwnedAt && (
                    <span className="text-[9px] text-cyber-emerald flex items-center gap-0.5">
                      <Check className="w-3 h-3" /> ROOTED
                    </span>
                  )}
                </div>
                <div className="relative">
                  <input
                    type={showRootFlag ? 'text' : 'password'}
                    value={machine.rootFlag || ''}
                    onChange={(e) => updateMachine(machine.id, { rootFlag: e.target.value })}
                    placeholder="Enter root flag (e.g. 9b1c...)"
                    className="w-full bg-cyber-card px-2.5 py-1.5 rounded border border-cyber-border text-white text-xs focus:outline-none focus:border-cyber-emerald pr-16 font-mono"
                  />
                  <div className="absolute right-1.5 top-1/2 -translate-y-1/2 flex items-center gap-1">
                    <button
                      type="button"
                      onClick={() => setShowRootFlag(!showRootFlag)}
                      className="p-1 rounded text-cyber-muted hover:text-white"
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
                          : 'text-cyber-muted hover:text-white'
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

          {/* Section 4: Spoiler-Masked Hint */}
          {machine.hint && (
            <div className="p-3 rounded-lg border border-cyber-border bg-cyber-bg/40">
              <div className="flex items-center justify-between mb-1">
                <span className="text-[10px] text-cyber-amber uppercase font-semibold flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" /> INTEL HINT (SPOILER MASKED)
                </span>
                <button
                  type="button"
                  onClick={() => setShowHint(!showHint)}
                  className="text-[10px] text-cyber-muted hover:text-white flex items-center gap-1"
                >
                  {showHint ? <EyeOff className="w-3 h-3" /> : <Eye className="w-3 h-3" />}
                  <span>{showHint ? 'Mask Hint' : 'Reveal Hint'}</span>
                </button>
              </div>
              <div
                onClick={() => setShowHint(!showHint)}
                className={`p-2 rounded bg-cyber-card text-xs cursor-pointer select-none transition-all ${
                  showHint ? 'text-white' : 'blur-sm text-transparent bg-cyber-card/60'
                }`}
                title="Click to toggle hint spoiler"
              >
                {machine.hint}
              </div>
            </div>
          )}

          {/* Section 5: Perceived Difficulty & Enjoyment Rating */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="p-3 rounded-lg border border-cyber-border bg-cyber-bg/50">
              <div className="text-[10px] uppercase font-bold tracking-wider text-cyber-muted mb-2">
                PERCEIVED DIFFICULTY VS OFFICIAL
              </div>
              <div className="flex items-center gap-1.5">
                {(['Very Easy', 'Easy', 'Medium', 'Hard', 'Insane'] as Difficulty[]).map((diff) => (
                  <button
                    key={diff}
                    onClick={() => updateMachine(machine.id, { perceivedDifficulty: diff })}
                    className={`px-2 py-1 rounded text-[10px] border transition-colors ${
                      machine.perceivedDifficulty === diff
                        ? 'bg-cyber-emerald text-black font-bold border-cyber-emerald'
                        : 'bg-cyber-card text-cyber-muted border-cyber-border hover:text-white'
                    }`}
                  >
                    {diff}
                  </button>
                ))}
              </div>
            </div>

            <div className="p-3 rounded-lg border border-cyber-border bg-cyber-bg/50">
              <div className="text-[10px] uppercase font-bold tracking-wider text-cyber-muted mb-2">
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
                      className={`w-4 h-4 ${
                        (machine.rating || 0) >= star ? 'text-cyber-amber fill-cyber-amber' : ''
                      }`}
                    />
                  </button>
                ))}
                <span className="text-[10px] text-cyber-muted ml-2">
                  {machine.rating ? `${machine.rating} / 5 Stars` : 'Unrated'}
                </span>
              </div>
            </div>
          </div>

          {/* Section 6: Attack Vectors & Tags */}
          <div>
            <div className="text-[10px] uppercase font-bold tracking-wider text-cyber-muted mb-2 flex items-center gap-1.5">
              <Tag className="w-3.5 h-3.5 text-cyber-cyan" /> ATTACK VECTORS & TAGS
            </div>
            <div className="flex flex-wrap gap-1.5 mb-2">
              {machine.tags.map((t) => (
                <span
                  key={t}
                  className="px-2 py-0.5 rounded bg-cyber-cyan/10 border border-cyber-cyan/30 text-cyber-cyan text-[11px] flex items-center gap-1"
                >
                  {t}
                  <button
                    onClick={() => handleRemoveTag(t)}
                    className="hover:text-cyber-crimson ml-0.5"
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <input
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
                className="flex-1 bg-cyber-bg px-2.5 py-1.5 rounded border border-cyber-border text-white text-xs focus:outline-none focus:border-cyber-cyan"
              />
              <button
                type="button"
                onClick={handleAddTag}
                className="px-3 py-1.5 rounded bg-cyber-card border border-cyber-border hover:border-cyber-cyan text-white text-xs"
              >
                Add
              </button>
            </div>
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
              onClick={() => setReportMachineId(machine.id)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-purple-950/40 hover:bg-purple-900/60 border border-purple-800 text-purple-300 hover:text-white font-bold text-xs transition-colors shadow-sm"
              title="Open Printable Pentest Report PDF"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Pre-Report PDF</span>
            </button>
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

  return typeof document !== 'undefined' ? createPortal(modalContent, document.body) : modalContent;
};
