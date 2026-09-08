import React, { useState, useMemo, useEffect } from 'react';
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
  AlertCircle,
  Zap,
  X,
  Lock,
  Plus,
  BookOpen,
  Sparkles,
  ShieldCheck,
  ChevronDown,
  ChevronUp,
  Printer,
  KeyRound,
  ShieldAlert
} from 'lucide-react';
import { useCtfStore, BRAND_THEMES } from '../store/useCtfStore';
import { Difficulty, PipelineStatus } from '../types';
import { ChecklistWorkspace } from '../components/checklist/ChecklistWorkspace';
import { formatSeconds, playCyberSound, triggerRootCelebration, safeCopyToClipboard, sanitizeExternalUrl, interpolateCommand } from '../utils/helpers';
import { PlatformBadge } from '../components/common/PlatformBadge';
import { OsBadge } from '../components/common/OsBadge';
import { EditableIpBadge } from '../components/common/EditableIpBadge';
import { CategoryBadge } from '../components/common/CategoryBadge';
import { DifficultyBadge } from '../components/common/DifficultyBadge';
import { ShareLinkButton } from '../components/common/ShareLinkButton';
import { SessionTimerDisplay } from '../components/common/SessionTimerDisplay';
import { QuickCommandsTab } from '../components/tracker/QuickCommandsTab';
import { TargetCredentialVault } from '../components/tracker/TargetCredentialVault';
import { CveBadge } from '../components/common/CveBadge';
import { extractMachineCves } from '../utils/cveUtils';
import { classifyMachine, VULN_CATEGORIES } from '../utils/categoryUtils';
import { getRecommendedNotesForMachine } from '../utils/obsidianManualUtils';
import { useStoredPdfs } from '../hooks/useStoredPdfs';

export const TargetDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const {
    machines,
    updateMachine,
    updateMachineStatus,
    toggleUserFlag,
    toggleRootFlag,
    activeTargetId,
    setActiveTarget,
    isTimerRunning,
    startTimer,
    pauseTimer,
    resetTimer,
    soundEnabled,
    appBrand,
    setWriteupMachineId,
    setReportMachineId,
    setPdfModalMachineId,
    setReconAutomationModalOpen,
    setSelectedMachineId,
    globalVars,
    userNotes = [],
  } = useCtfStore();

  const { hasPdf, hasStoredPdf } = useStoredPdfs();

  const machine = machines.find((m) => m.id === id);

  const [activeTab, setActiveTab] = useState<'overview' | 'commands' | 'creds' | 'checklist' | 'report' | 'walkthrough'>('overview');
  const [showUserFlag, setShowUserFlag] = useState(false);
  const [showRootFlag, setShowRootFlag] = useState(false);
  const [copiedUser, setCopiedUser] = useState(false);
  const [copiedRoot, setCopiedRoot] = useState(false);
  const [copiedReportMd, setCopiedReportMd] = useState(false);
  const [copiedWalkthrough, setCopiedWalkthrough] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [newTagInput, setNewTagInput] = useState('');
  const [expandedNotes, setExpandedNotes] = useState<Record<string, boolean>>({});
  const [copiedCommand, setCopiedCommand] = useState<string | null>(null);

  const [localNotes, setLocalNotes] = useState(machine?.quickNotes || '');

  useEffect(() => {
    if (machine) {
      setLocalNotes(machine.quickNotes || '');
    }
  }, [machine?.id]);

  useEffect(() => {
    const handler = setTimeout(() => {
      if (machine && localNotes !== (machine.quickNotes || '')) {
        updateMachine(machine.id, { quickNotes: localNotes });
      }
    }, 400);
    return () => clearTimeout(handler);
  }, [localNotes, machine?.id]);

  const recommendedNotes = useMemo(() => (machine ? getRecommendedNotesForMachine(machine, 4) : []), [machine]);
  const activeBrand = BRAND_THEMES.find((b) => b.id === appBrand) || BRAND_THEMES[0];

  const checklistCompletedCount = useMemo(() => {
    if (!machine?.checklist?.itemsState) return 0;
    return Object.values(machine.checklist.itemsState).filter((s) => s.status === 'done').length;
  }, [machine?.checklist?.itemsState]);

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

  const isUserPwned = Boolean(
    machine && (
      Boolean(machine.userFlag?.trim()) ||
      ((machine.status === 'foothold' || machine.status === 'root' || machine.status === 'completed') && Boolean(machine.userPwnedAt))
    )
  );

  const isRootPwned = Boolean(
    machine && (
      Boolean(machine.rootFlag?.trim()) ||
      ((machine.status === 'root' || machine.status === 'completed') && Boolean(machine.rootPwnedAt))
    )
  );

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

  const handleCopyReportMd = async () => {
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
    await safeCopyToClipboard(md);
    setCopiedReportMd(true);
    if (soundEnabled) playCyberSound('copy');
    setTimeout(() => setCopiedReportMd(false), 2000);
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
      <div className="p-4 rounded-xl border border-slate-200 dark:border-cyber-border bg-white dark:bg-cyber-card shadow-lg flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate('/tracker')}
            className="p-2 rounded-lg bg-slate-100 dark:bg-cyber-bg border border-slate-200 dark:border-cyber-border text-slate-600 dark:text-cyber-muted hover:text-slate-900 dark:hover:text-white hover:border-cyan-500 dark:hover:border-cyber-cyan transition-colors"
            title="Back to Target List"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>

          <div>
            <div className="flex items-center gap-2.5 flex-wrap">
              <PlatformBadge platform={machine.platform} size="md" />
              <h1 className="text-xl font-bold text-slate-900 dark:text-white tracking-wide">{machine.name}</h1>
              <OsBadge os={machine.os} size="sm" />
              <CategoryBadge machine={machine} size="sm" />
              <DifficultyBadge difficulty={machine.difficulty} size="sm" />
              {machine.isActive && (
                <span className="text-[11px] px-2 py-0.5 rounded font-mono font-bold bg-amber-100 dark:bg-amber-500/20 text-amber-900 dark:text-amber-300 border border-amber-300 dark:border-amber-500/40 flex items-center gap-1">
                  <Lock className="w-3 h-3 text-amber-600 dark:text-amber-400" />
                  <span>ACTIVE LAB</span>
                </span>
              )}
              {extractMachineCves(machine).map((cve) => (
                <CveBadge key={cve} cve={cve} size="sm" showExternalLink />
              ))}
            </div>
            <div className="text-xs text-slate-500 dark:text-cyber-muted mt-1 flex flex-wrap items-center gap-3">
              <EditableIpBadge machineId={machine.id} initialIp={machine.ip} size="sm" showLabel />
              {Boolean(sanitizeExternalUrl(machine.roomUrl)) && (
                <a
                  href={sanitizeExternalUrl(machine.roomUrl)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-cyan-700 dark:text-cyber-cyan hover:underline font-medium"
                >
                  Official Room <ExternalLink className="w-3 h-3" />
                </a>
              )}
              {machine.isActive ? (
                <span className="flex items-center gap-1.5 px-2.5 py-0.5 rounded text-[10px] font-mono font-bold bg-amber-100 dark:bg-amber-950/40 text-amber-900 dark:text-amber-300 border border-amber-300 dark:border-amber-500/40">
                  <Lock className="w-3 h-3 text-amber-600 dark:text-amber-400" />
                  <span>ACTIVE LAB · WRITEUPS PROHIBITED (HTB ToS)</span>
                </span>
              ) : (
                <>
                  {/* Dedicated PDF Writeup Button */}
                  {(hasPdf(machine) || hasStoredPdf(machine.id)) && (
                    <button
                      type="button"
                      onClick={() => {
                        setPdfModalMachineId(machine.id);
                        if (soundEnabled) playCyberSound('click');
                      }}
                      className="flex items-center gap-1 px-2 py-0.5 rounded bg-emerald-100 dark:bg-cyber-emerald/15 border border-emerald-400 dark:border-cyber-emerald/40 text-emerald-950 dark:text-cyber-emerald hover:bg-emerald-500 hover:text-white dark:hover:bg-cyber-emerald dark:hover:text-black font-mono text-[11px] font-bold transition-all shadow-xs"
                      title={hasStoredPdf(machine.id) ? 'Open stored offline writeup PDF' : 'Open official HTB writeup PDF manager'}
                    >
                      <FileText className="w-3 h-3 text-emerald-600 dark:text-cyber-emerald" />
                      <span>{hasStoredPdf(machine.id) ? 'View PDF Writeup' : (machine.officialPdf ? 'Official HTB PDF' : 'View PDF')}</span>
                    </button>
                  )}

                  {/* Attach PDF if not yet stored */}
                  {!hasPdf(machine) && !hasStoredPdf(machine.id) && (
                    <button
                      type="button"
                      onClick={() => {
                        setPdfModalMachineId(machine.id);
                        if (soundEnabled) playCyberSound('click');
                      }}
                      className="flex items-center gap-1 text-cyan-700 dark:text-cyber-cyan hover:underline font-medium text-xs"
                      title="Attach offline walkthrough PDF"
                    >
                      <FileText className="w-3 h-3" />
                      <span>Attach PDF</span>
                    </button>
                  )}

                  {/* External Community Guide Link (Clearly labeled so user knows it is a third-party website) */}
                  {Boolean(sanitizeExternalUrl(machine.writeupUrl)) && (
                    <a
                      href={sanitizeExternalUrl(machine.writeupUrl)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-purple-700 dark:text-purple-400 hover:underline font-medium text-xs"
                      title="External community walkthrough blog (third-party website)"
                    >
                      <span>External Guide</span> <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </>
              )}
            </div>
          </div>
        </div>

        {/* Stopwatch & Action Buttons */}
        <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
          <div className="flex items-center gap-2 bg-slate-100 dark:bg-cyber-bg border border-slate-200 dark:border-cyber-border px-3 py-1.5 rounded-lg shadow-xs">
            <Clock className="w-4 h-4 text-cyan-600 dark:text-cyber-cyan" />
            <SessionTimerDisplay machineId={machine.id} staticSeconds={machine.timeSpentSeconds} className="text-sm font-bold text-slate-900 dark:text-white" />
            {isActiveTarget ? (
              <div className="flex items-center gap-1">
                {isTimerRunning ? (
                  <button onClick={pauseTimer} className="p-1 text-amber-600 dark:text-cyber-amber hover:text-amber-700 dark:hover:text-white" title="Pause">
                    <Pause className="w-3.5 h-3.5" />
                  </button>
                ) : (
                  <button onClick={startTimer} className="p-1 text-emerald-600 dark:text-cyber-emerald hover:text-emerald-700 dark:hover:text-white" title="Resume">
                    <Play className="w-3.5 h-3.5" />
                  </button>
                )}
                <button
                  onClick={() => {
                    setActiveTarget(null);
                    if (soundEnabled) playCyberSound('click');
                  }}
                  className="p-1 text-slate-400 dark:text-cyber-muted hover:text-red-600 dark:hover:text-cyber-crimson transition-colors"
                  title="Disengage Active Target"
                  aria-label="Disengage active target"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
            ) : (
              <button
                onClick={() => {
                  setActiveTarget(machine.id);
                  startTimer();
                }}
                className="px-2 py-0.5 rounded bg-emerald-100 dark:bg-cyber-emerald/20 text-emerald-900 dark:text-cyber-emerald text-[10px] font-bold border border-emerald-300 dark:border-cyber-emerald/40 hover:bg-emerald-500 hover:text-white dark:hover:bg-cyber-emerald dark:hover:text-black transition-all"
              >
                Engage
              </button>
            )}
          </div>

          <ShareLinkButton
            path={`/target/${machine.id}`}
            title={machine.name}
            className="px-2.5 py-1.5"
          />

          <button
            onClick={() => setReportMachineId(machine.id)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-purple-100 dark:bg-purple-950/40 border border-purple-300 dark:border-purple-800/60 text-purple-900 dark:text-purple-300 hover:bg-purple-200 dark:hover:bg-purple-900/60 hover:text-purple-950 dark:hover:text-white font-semibold text-xs transition-all shadow-xs group"
            title="Open Executive Pentest Pre-Report"
          >
            <FileText className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform" />
            <span className="hidden sm:inline">Pre-Report</span>
          </button>

          <button
            onClick={() => {
              setSelectedMachineId(machine.id);
              setReconAutomationModalOpen(true);
            }}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-100 dark:bg-cyber-cyan/10 border border-cyan-300 dark:border-cyber-cyan/40 text-cyan-900 dark:text-cyber-cyan hover:bg-cyan-500 hover:text-white dark:hover:bg-cyber-cyan dark:hover:text-black font-semibold text-xs transition-all shadow-glow-cyan/20"
            title="Open Multi-Format Scan Importer & Payload Crafter for this target"
          >
            <Zap className="w-4 h-4 text-cyan-700 dark:text-cyber-cyan" />
            <span className="hidden sm:inline">Import Scan & Payloads</span>
          </button>

          <button
            onClick={() => {
              setWriteupMachineId(machine.id);
              navigate(`/writeup/${machine.id}`);
            }}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-cyber-card border border-slate-200 dark:border-cyber-border text-slate-700 dark:text-cyber-cyan hover:border-cyan-500 dark:hover:bg-cyber-cyan dark:hover:text-black font-semibold text-xs transition-all"
          >
            <FileText className="w-4 h-4" />
            <span>Writeup Studio</span>
          </button>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex items-center border-b border-slate-200 dark:border-cyber-border bg-slate-100/90 dark:bg-cyber-card/60 px-4 rounded-t-xl overflow-x-auto">
        <button
          onClick={() => setActiveTab('overview')}
          className={`flex items-center gap-2 py-3 px-5 font-bold text-xs border-b-2 whitespace-nowrap transition-all ${
            activeTab === 'overview'
              ? 'border-emerald-600 dark:border-cyber-emerald text-emerald-900 dark:text-cyber-emerald bg-emerald-50 dark:bg-cyber-emerald/5'
              : 'border-transparent text-slate-600 dark:text-cyber-muted hover:text-slate-900 dark:hover:text-white'
          }`}
        >
          <Crosshair className="w-4 h-4" />
          <span>FLAGS VAULT & INTEL OVERVIEW</span>
        </button>

        <button
          onClick={() => setActiveTab('commands')}
          className={`flex items-center gap-2 py-3 px-5 font-bold text-xs border-b-2 whitespace-nowrap transition-all ${
            activeTab === 'commands'
              ? 'border-amber-600 dark:border-cyber-amber text-amber-900 dark:text-cyber-amber bg-amber-50 dark:bg-cyber-amber/10'
              : 'border-transparent text-slate-600 dark:text-cyber-muted hover:text-slate-900 dark:hover:text-white'
          }`}
        >
          <Zap className="w-4 h-4 text-amber-600 dark:text-cyber-amber" />
          <span>⚡ ATTACK ARSENAL</span>
        </button>

        <button
          onClick={() => setActiveTab('creds')}
          className={`flex items-center gap-2 py-3 px-5 font-bold text-xs border-b-2 whitespace-nowrap transition-all ${
            activeTab === 'creds'
              ? 'border-amber-500 text-amber-900 dark:text-amber-400 bg-amber-50 dark:bg-amber-500/10'
              : 'border-transparent text-slate-600 dark:text-cyber-muted hover:text-slate-900 dark:hover:text-white'
          }`}
        >
          <KeyRound className="w-4 h-4 text-amber-600 dark:text-amber-400" />
          <span>🔑 LOOT & CREDENTIALS</span>
          {Boolean(machine.credentials?.length) && (
            <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-amber-100 dark:bg-amber-950/60 text-amber-900 dark:text-amber-300 font-bold border border-amber-300 dark:border-amber-800">
              {machine.credentials?.length}
            </span>
          )}
        </button>

        <button
          onClick={() => setActiveTab('checklist')}
          className={`flex items-center gap-2 py-3 px-5 font-bold text-xs border-b-2 whitespace-nowrap transition-all ${
            activeTab === 'checklist'
              ? 'border-cyan-600 dark:border-cyber-cyan text-cyan-900 dark:text-cyber-cyan bg-cyan-50 dark:bg-cyber-cyan/5'
              : 'border-transparent text-slate-600 dark:text-cyber-muted hover:text-slate-900 dark:hover:text-white'
          }`}
        >
          <ListChecks className="w-4 h-4" />
          <span>ATTACK METHODOLOGY & CHECKLIST</span>
          {checklistCompletedCount > 0 && (
            <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-cyan-100 dark:bg-cyber-cyan/20 text-cyan-900 dark:text-cyber-cyan font-bold">
              {checklistCompletedCount} done
            </span>
          )}
        </button>

        <button
          onClick={() => setActiveTab('report')}
          className={`flex items-center gap-2 py-3 px-5 font-bold text-xs border-b-2 whitespace-nowrap transition-all ${
            activeTab === 'report'
              ? 'border-purple-600 dark:border-purple-400 text-purple-900 dark:text-purple-300 bg-purple-50 dark:bg-purple-950/20'
              : 'border-transparent text-slate-600 dark:text-cyber-muted hover:text-slate-900 dark:hover:text-white'
          }`}
        >
          <FileText className="w-4 h-4 text-purple-600 dark:text-purple-400" />
          <span>📄 PENTEST REPORT</span>
        </button>

        {!machine.isActive && Boolean(machine.officialSynopsis || machine.officialWalkthrough || (machine.skillsLearned && machine.skillsLearned.length > 0) || machine.officialPdf) && (
          <button
            onClick={() => setActiveTab('walkthrough')}
            className={`flex items-center gap-2 py-3 px-5 font-bold text-xs border-b-2 whitespace-nowrap transition-all ${
              activeTab === 'walkthrough'
                ? 'border-emerald-600 dark:border-cyber-emerald text-emerald-900 dark:text-cyber-emerald bg-emerald-50 dark:bg-cyber-emerald/10'
                : 'border-transparent text-slate-600 dark:text-cyber-muted hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <BookOpen className="w-4 h-4 text-emerald-600 dark:text-cyber-emerald" />
            <span>OFFICIAL HTB INTEL</span>
            <span className="text-[9px] px-1.5 py-0.5 rounded bg-emerald-100 dark:bg-cyber-emerald/20 text-emerald-900 dark:text-cyber-emerald font-bold border border-emerald-300 dark:border-cyber-emerald/40 uppercase">
              HTB
            </span>
          </button>
        )}
      </div>

      {/* Main Tab Stage */}
      {activeTab === 'checklist' ? (
        <ChecklistWorkspace 
          machine={machine} 
          onOpenInWriteup={() => {
            setWriteupMachineId(machine.id);
            navigate(`/writeup/${machine.id}`);
          }} 
        />
      ) : activeTab === 'creds' ? (
        <div className="p-4 sm:p-6 rounded-b-xl border border-t-0 border-slate-200 dark:border-cyber-border bg-white dark:bg-cyber-card shadow-sm">
          <TargetCredentialVault
            machine={machine}
            onUpdateCredentials={(creds) => updateMachine(machine.id, { credentials: creds })}
          />
        </div>
      ) : activeTab === 'commands' ? (
        <div className="p-4 sm:p-6 rounded-b-xl border border-t-0 border-slate-200 dark:border-cyber-border bg-white dark:bg-cyber-card shadow-sm">
          <QuickCommandsTab machine={machine} />
        </div>
      ) : activeTab === 'report' ? (
        <div className="p-4 sm:p-6 rounded-b-xl border border-t-0 border-slate-200 dark:border-cyber-border bg-white dark:bg-cyber-card space-y-6 shadow-sm">
          {/* Report Header Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-xl bg-slate-50 dark:bg-cyber-bg/80 border border-slate-200 dark:border-cyber-border">
            <div>
              <div className="text-[10px] text-purple-700 dark:text-purple-400 font-bold uppercase tracking-wider mb-1 flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5" /> EXECUTIVE SECURITY ASSESSMENT PRE-REPORT
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <span>{machine.name}</span>
                <span className="text-slate-500 dark:text-cyber-muted font-normal text-xs font-mono">({machine.ip})</span>
              </h3>
              <div className="text-xs text-slate-600 dark:text-cyber-muted mt-1">
                Classification: <strong className="text-purple-700 dark:text-purple-400">STRICTLY CONFIDENTIAL</strong> // Target Status: <strong className="text-emerald-700 dark:text-cyber-emerald uppercase">{machine.status}</strong>
              </div>
            </div>

            <div className="flex items-center gap-2 flex-wrap">
              <button
                type="button"
                onClick={handleCopyReportMd}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-cyber-card border border-slate-300 dark:border-cyber-border hover:border-purple-500 text-slate-800 dark:text-cyber-muted hover:text-slate-900 dark:hover:text-white text-xs transition-colors shadow-xs"
              >
                {copiedReportMd ? <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-cyber-emerald" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedReportMd ? 'Copied MD' : 'Copy Markdown'}</span>
              </button>
              <button
                type="button"
                onClick={() => setReportMachineId(machine.id)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-purple-100 dark:bg-purple-950/50 border border-purple-300 dark:border-purple-800 text-purple-900 dark:text-purple-300 hover:bg-purple-200 dark:hover:bg-purple-900/60 font-bold text-xs transition-colors shadow-xs"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Printable PDF</span>
              </button>
            </div>
          </div>

          {/* Scope & Assessment Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-cyber-bg border border-slate-200 dark:border-cyber-border">
              <div className="text-[10px] text-slate-500 dark:text-cyber-muted uppercase font-bold mb-1">TARGET HOST SPECIFICATION</div>
              <div className="text-slate-900 dark:text-white font-bold">{machine.platform} // {machine.os}</div>
              <div className="text-[11px] text-slate-500 dark:text-cyber-muted font-mono mt-0.5">Assigned IP: {machine.ip}</div>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-cyber-bg border border-slate-200 dark:border-cyber-border">
              <div className="text-[10px] text-slate-500 dark:text-cyber-muted uppercase font-bold mb-1">COMPROMISE POSTURE</div>
              <div className="text-emerald-700 dark:text-cyber-emerald font-bold flex items-center gap-1.5">
                <Check className="w-4 h-4" />
                <span>{machine.status === 'completed' || machine.status === 'root' ? 'FULL ROOT PRIVILEGE' : machine.status === 'foothold' ? 'INITIAL ACCESS / FOOTHOLD' : 'IN RECONNAISSANCE'}</span>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-cyber-bg border border-slate-200 dark:border-cyber-border">
              <div className="text-[10px] text-slate-500 dark:text-cyber-muted uppercase font-bold mb-1">TOTAL TIME LOGGED</div>
              <div className="text-sm font-bold text-cyan-700 dark:text-cyber-cyan flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                <span>{formatSeconds(machine.timeSpentSeconds)}</span>
              </div>
            </div>
          </div>

          {/* Executive Summary Narrative */}
          <div className="p-4 rounded-xl bg-slate-50/80 dark:bg-cyber-bg/60 border border-slate-200 dark:border-cyber-border space-y-2">
            <div className="text-[10px] uppercase font-bold text-cyan-800 dark:text-cyber-cyan tracking-wider">
              1. EXECUTIVE SUMMARY
            </div>
            <p className="text-slate-600 dark:text-cyber-muted leading-relaxed">
              During security validation on target host <strong className="text-slate-900 dark:text-white">{machine.name}</strong> ({machine.ip}), high-impact vulnerabilities were verified. Remote access vectors allowed adversaries to breach network perimeters and subsequently escalate privileges to root / system administrator.
            </p>
          </div>

          {/* Attack Path & Flag Proof of Compromise */}
          <div className="p-4 rounded-xl bg-slate-50/80 dark:bg-cyber-bg/60 border border-slate-200 dark:border-cyber-border space-y-3">
            <div className="text-[10px] uppercase font-bold text-emerald-800 dark:text-cyber-emerald tracking-wider">
              2. ATTACK CHAIN & PROOF OF COMPROMISE
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono">
              <div className="p-3 rounded-lg bg-white dark:bg-cyber-card border border-slate-200 dark:border-cyber-border">
                <div className="text-[10px] text-cyan-800 dark:text-cyber-cyan font-bold mb-1 flex items-center justify-between">
                  <span>USER ACCESS FLAG</span>
                  <span>{machine.userPwnedAt ? '✓ PWNED' : 'PENDING'}</span>
                </div>
                <div className="p-2 rounded bg-slate-100 dark:bg-cyber-bg text-slate-700 dark:text-cyber-muted text-[11px] truncate">
                  {machine.userFlag || (machine.userPwnedAt ? 'HTB{user_flag_verified}' : 'Not Captured')}
                </div>
              </div>
              <div className="p-3 rounded-lg bg-white dark:bg-cyber-card border border-slate-200 dark:border-cyber-border">
                <div className="text-[10px] text-emerald-800 dark:text-cyber-emerald font-bold mb-1 flex items-center justify-between">
                  <span>ROOT / SYSTEM FLAG</span>
                  <span>{machine.rootPwnedAt ? '✓ ROOTED' : 'PENDING'}</span>
                </div>
                <div className="p-2 rounded bg-slate-100 dark:bg-cyber-bg text-slate-700 dark:text-cyber-muted text-[11px] truncate">
                  {machine.rootFlag || (machine.rootPwnedAt ? 'HTB{root_flag_verified}' : 'Not Captured')}
                </div>
              </div>
            </div>

            {machine.quickNotes && (
              <div className="p-3 rounded-lg bg-white dark:bg-cyber-card border border-slate-200 dark:border-cyber-border space-y-1">
                <div className="text-[10px] text-slate-500 dark:text-cyber-muted font-bold uppercase">Assessor Field Notes:</div>
                <div className="text-slate-800 dark:text-white whitespace-pre-wrap">{machine.quickNotes}</div>
              </div>
            )}
          </div>

          {/* Remediation Action Plan */}
          <div className="p-4 rounded-xl bg-slate-50/80 dark:bg-cyber-bg/60 border border-slate-200 dark:border-cyber-border space-y-2">
            <div className="text-[10px] uppercase font-bold text-amber-800 dark:text-cyber-amber tracking-wider">
              3. STRATEGIC REMEDIATION ROADMAP
            </div>
            <ul className="space-y-1.5 text-slate-600 dark:text-cyber-muted list-disc list-inside">
              <li><strong className="text-slate-900 dark:text-white">Immediate:</strong> Terminate vulnerable listening services and patch software packages to stable releases.</li>
              <li><strong className="text-slate-900 dark:text-white">Defensive:</strong> Harden local sudoers configurations and eliminate unauthorized SUID binaries.</li>
              <li><strong className="text-slate-900 dark:text-white">Monitoring:</strong> Deploy SIEM ingestion for authentication failure telemetry and privilege escalation alerting.</li>
            </ul>
          </div>
        </div>
      ) : activeTab === 'walkthrough' ? (
        machine.isActive ? (
          <div className="p-8 rounded-xl border border-amber-300 dark:border-amber-500/40 bg-amber-50 dark:bg-amber-950/20 text-center space-y-3 font-mono">
            <Lock className="w-8 h-8 text-amber-600 dark:text-amber-400 mx-auto" />
            <h3 className="text-sm font-bold text-amber-900 dark:text-amber-300 uppercase tracking-wider">
              Active Lab · Walkthroughs Strictly Prohibited
            </h3>
            <p className="text-xs text-slate-600 dark:text-cyber-muted max-w-md mx-auto">
              Hack The Box Acceptable Use Policy (§8.2) strictly prohibits walkthroughs, writeups, and solutions for active seasonal content.
            </p>
          </div>
        ) : (
          <div className="p-4 sm:p-6 rounded-b-xl border border-t-0 border-slate-200 dark:border-cyber-border bg-white dark:bg-cyber-card space-y-6 shadow-sm">
            {/* Header banner */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-xl bg-slate-50/90 dark:bg-cyber-bg/90 border border-emerald-400/50 dark:border-cyber-emerald/40 shadow-glow-emerald/10">
              <div>
                <div className="text-[10px] text-emerald-800 dark:text-cyber-emerald font-bold uppercase tracking-wider mb-1 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-cyber-emerald" /> OFFICIAL HACK THE BOX INTELLIGENCE BRIEFING
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <span>{machine.name}</span>
                  <span className="text-slate-500 dark:text-cyber-muted font-normal text-xs font-mono">({machine.ip})</span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-100 dark:bg-cyber-emerald/20 text-emerald-900 dark:text-cyber-emerald font-bold border border-emerald-300 dark:border-cyber-emerald/40">
                    OFFICIAL HTB
                  </span>
                </h3>
                {machine.officialPdf && (
                  <div className="text-xs text-slate-500 dark:text-cyber-muted mt-1 flex items-center gap-1.5">
                    <span>Source Archive:</span>
                    <span className="text-cyan-800 dark:text-cyber-cyan font-mono text-[11px] bg-white dark:bg-cyber-card px-1.5 py-0.5 rounded border border-slate-200 dark:border-cyber-border">
                      {machine.officialPdf}
                    </span>
                  </div>
                )}
              </div>

              <div className="flex items-center gap-2">
                {machine.officialWalkthrough && (
                  <button
                    onClick={async () => {
                      if (machine.officialWalkthrough) {
                        await safeCopyToClipboard(machine.officialWalkthrough);
                        setCopiedWalkthrough(true);
                        if (soundEnabled) playCyberSound('copy');
                        setTimeout(() => setCopiedWalkthrough(false), 2000);
                      }
                    }}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-cyber-card border border-slate-200 dark:border-cyber-border hover:border-emerald-500 text-slate-700 dark:text-cyber-muted hover:text-slate-900 dark:hover:text-white text-xs transition-colors"
                  >
                    {copiedWalkthrough ? <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-cyber-emerald" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedWalkthrough ? 'Copied' : 'Copy Walkthrough'}</span>
                  </button>
                )}
                <button
                  type="button"
                  onClick={() => setPdfModalMachineId(machine.id)}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-100 dark:bg-cyber-cyan/15 border border-cyan-300 dark:border-cyber-cyan/40 text-cyan-900 dark:text-cyber-cyan hover:bg-cyan-500 hover:text-white dark:hover:bg-cyber-cyan dark:hover:text-black font-bold text-xs transition-all shadow-sm"
                  title="Open HTB Writeup PDF Viewer & Manager"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>{machine.officialPdf ? 'View HTB PDF' : 'Attach / View PDF'}</span>
                </button>
                <button
                  onClick={() => {
                    setWriteupMachineId(machine.id);
                    navigate(`/writeup/${machine.id}`);
                  }}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-100 dark:bg-cyber-emerald/20 border border-emerald-300 dark:border-cyber-emerald/50 text-emerald-900 dark:text-cyber-emerald hover:bg-emerald-500 hover:text-white dark:hover:bg-cyber-emerald dark:hover:text-black font-bold text-xs transition-all shadow-sm"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Writeup Studio</span>
                </button>
              </div>
            </div>

            {/* Section 1: Official Synopsis */}
            {machine.officialSynopsis && (
              <div className="p-4 rounded-xl bg-slate-50/80 dark:bg-cyber-bg/70 border border-slate-200 dark:border-cyber-border space-y-2">
                <div className="text-[10px] uppercase font-bold text-cyan-800 dark:text-cyber-cyan tracking-wider flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-cyan-600 dark:text-cyber-cyan" /> OFFICIAL SYNOPSIS & THREAT OVERVIEW
                </div>
                <p className="text-slate-800 dark:text-white text-xs sm:text-sm leading-relaxed font-sans font-normal">
                  {machine.officialSynopsis}
                </p>
              </div>
            )}

            {/* Section 2: Core Skills Learned */}
            {machine.skillsLearned && machine.skillsLearned.length > 0 && (
              <div className="p-4 rounded-xl bg-slate-50/80 dark:bg-cyber-bg/70 border border-slate-200 dark:border-cyber-border space-y-2.5">
                <div className="text-[10px] uppercase font-bold text-emerald-800 dark:text-cyber-emerald tracking-wider flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-600 dark:text-cyber-emerald" /> TARGET SKILLS REQUIRED & LEARNED
                </div>
                <div className="flex flex-wrap gap-2">
                  {machine.skillsLearned.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-1 rounded-lg bg-emerald-100 dark:bg-cyber-emerald/10 border border-emerald-300 dark:border-cyber-emerald/30 text-emerald-900 dark:text-cyber-emerald text-xs font-medium flex items-center gap-1.5"
                    >
                      <Check className="w-3 h-3 text-emerald-600 dark:text-cyber-emerald stroke-[2.5]" />
                      <span>{skill}</span>
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Section 3: Full Structured Walkthrough */}
            {machine.officialWalkthrough && (
              <div className="p-4 rounded-xl bg-slate-50/80 dark:bg-cyber-bg/70 border border-slate-200 dark:border-cyber-border space-y-3">
                <div className="text-[10px] uppercase font-bold text-purple-700 dark:text-purple-400 tracking-wider flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" /> TACTICAL EXPLOITATION WALKTHROUGH
                </div>
                <div className="prose prose-invert max-w-none text-xs leading-relaxed text-slate-700 dark:text-cyber-muted space-y-4 font-sans">
                  {machine.officialWalkthrough.split('\n\n').map((paragraph, pIdx) => {
                    if (paragraph.startsWith('### ')) {
                      const title = paragraph.replace('### ', '');
                      return (
                        <div key={pIdx} className="pt-2 border-b border-slate-200 dark:border-cyber-border/60 pb-1 text-sm font-bold text-slate-900 dark:text-white font-mono flex items-center gap-2">
                          <span>{title}</span>
                        </div>
                      );
                    }
                    if (paragraph.startsWith('- ')) {
                      const items = paragraph.split('\n');
                      return (
                        <ul key={pIdx} className="list-disc list-inside space-y-1 text-slate-700 dark:text-cyber-muted">
                          {items.map((it, itIdx) => (
                            <li key={itIdx} className="text-slate-900 dark:text-white">
                              {it.replace(/^- \*\*(.*?)\*\*$/, '$1').replace(/^- /, '')}
                            </li>
                          ))}
                        </ul>
                      );
                    }
                    return (
                      <p key={pIdx} className="text-slate-800 dark:text-cyber-muted font-mono leading-relaxed bg-white dark:bg-cyber-card/60 p-3 rounded-lg border border-slate-200 dark:border-cyber-border/40 text-xs">
                        {paragraph}
                      </p>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        )
      ) : (
        <div className="p-4 sm:p-6 rounded-b-xl border border-t-0 border-slate-200 dark:border-cyber-border bg-white dark:bg-cyber-card space-y-6 shadow-sm">
          
          {/* Section 1: Pipeline Stage Selector */}
          <div>
            <div className="text-[10px] uppercase font-bold tracking-wider text-slate-500 dark:text-cyber-muted mb-2 flex items-center gap-1.5">
              <Crosshair className="w-3.5 h-3.5 text-emerald-600 dark:text-cyber-emerald" /> ATTACK LIFECYCLE PIPELINE
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
                        ? `bg-slate-100 dark:bg-cyber-bg border-2 ${stage.color} shadow-md`
                        : 'bg-slate-50 dark:bg-cyber-bg/40 border-slate-200 dark:border-cyber-border/80 text-slate-600 dark:text-cyber-muted hover:text-slate-900 dark:hover:text-white hover:border-slate-300 dark:hover:border-cyber-border'
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
            <div className="text-[10px] uppercase font-bold tracking-wider text-slate-500 dark:text-cyber-muted mb-2 flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <Flag className="w-3.5 h-3.5 text-amber-600 dark:text-cyber-amber" /> FLAGS VAULT (OBFUSCATED & COPYABLE)
              </div>
              <span className="text-[10px] text-slate-400 dark:text-cyber-muted font-normal lowercase italic">
                (click pwned badge or ✕ to remove if clicked by mistake)
              </span>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* User Flag */}
              <div className="p-3.5 rounded-lg bg-slate-50/50 dark:bg-cyber-bg border border-slate-200 dark:border-cyber-border space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-cyan-800 dark:text-cyber-cyan flex items-center gap-1">
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
                        className="text-[9px] px-2 py-0.5 rounded bg-emerald-100 dark:bg-cyber-emerald/15 text-emerald-800 dark:text-cyber-emerald border border-emerald-300 dark:border-cyber-emerald/40 hover:bg-rose-100 dark:hover:bg-rose-950/40 hover:text-rose-800 dark:hover:text-rose-300 hover:border-rose-400 flex items-center gap-1 font-bold transition-all cursor-pointer group"
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
                        className="text-[9px] px-2 py-0.5 rounded bg-slate-100 dark:bg-cyber-card text-slate-600 dark:text-cyber-muted hover:text-cyan-800 dark:hover:text-cyber-cyan border border-slate-300 dark:border-cyber-border hover:border-cyan-400 flex items-center gap-1 font-semibold transition-all cursor-pointer"
                        title="Mark User Flag as Pwned"
                      >
                        <Plus className="w-3 h-3" />
                        <span>MARK USER</span>
                      </button>
                    )}
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <input
                    id={`target-user-flag-${machine.id}`}
                    name="target-user-flag"
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
                    className="flex-1 bg-white dark:bg-cyber-card px-2.5 py-1.5 rounded border border-slate-200 dark:border-cyber-border text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-cyber-muted text-xs focus:outline-none focus:border-cyan-500 dark:focus:border-cyber-cyan font-mono"
                  />
                  {machine.userFlag && (
                    <button
                      type="button"
                      onClick={() => {
                        toggleUserFlag(machine.id);
                        if (soundEnabled) playCyberSound('toggle');
                      }}
                      className="p-1.5 rounded bg-white dark:bg-cyber-card border border-slate-200 dark:border-cyber-border text-slate-400 dark:text-cyber-muted hover:text-red-600 dark:hover:text-cyber-crimson hover:border-red-300 transition-colors"
                      title="Clear / Remove User Flag"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  )}
                  <button
                    onClick={() => setShowUserFlag(!showUserFlag)}
                    className="p-1.5 rounded bg-white dark:bg-cyber-card border border-slate-200 dark:border-cyber-border text-slate-500 dark:text-cyber-muted hover:text-slate-900 dark:hover:text-white"
                    title={showUserFlag ? 'Hide Flag' : 'Show Flag'}
                  >
                    {showUserFlag ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                  </button>
                  <button
                    onClick={() => handleCopy(machine.userFlag || '', 'user')}
                    className="p-1.5 rounded bg-white dark:bg-cyber-card border border-slate-200 dark:border-cyber-border text-slate-500 dark:text-cyber-muted hover:text-cyan-700 dark:hover:text-cyber-cyan"
                    title="Copy User Flag"
                  >
                    {copiedUser ? <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-cyber-emerald" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>

              {/* Root Flag */}
              <div className="p-3.5 rounded-lg bg-slate-50/50 dark:bg-cyber-bg border border-slate-200 dark:border-cyber-border space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-emerald-800 dark:text-cyber-emerald flex items-center gap-1">
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
                        className="text-[9px] px-2 py-0.5 rounded bg-emerald-100 dark:bg-cyber-emerald/15 text-emerald-800 dark:text-cyber-emerald border border-emerald-300 dark:border-cyber-emerald/40 hover:bg-rose-100 dark:hover:bg-rose-950/40 hover:text-rose-800 dark:hover:text-rose-300 hover:border-rose-400 flex items-center gap-1 font-bold transition-all cursor-pointer group"
                        title="Root Pwned! Click to remove root solve if clicked by mistake"
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
                        className="text-[9px] px-2 py-0.5 rounded bg-slate-100 dark:bg-cyber-card text-slate-600 dark:text-cyber-muted hover:text-emerald-800 dark:hover:text-cyber-emerald border border-slate-300 dark:border-cyber-border hover:border-emerald-400 flex items-center gap-1 font-semibold transition-all cursor-pointer"
                        title="Mark Root Flag as Pwned"
                      >
                        <Plus className="w-3 h-3" />
                        <span>MARK ROOT</span>
                      </button>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <input
                    id={`target-root-flag-${machine.id}`}
                    name="target-root-flag"
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
                          status: machine.status === 'completed' ? 'completed' : 'root',
                        });
                      }
                    }}
                    placeholder="Enter root flag (e.g. 9b1c...)"
                    className="flex-1 bg-white dark:bg-cyber-card px-2.5 py-1.5 rounded border border-slate-200 dark:border-cyber-border text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-cyber-muted text-xs focus:outline-none focus:border-emerald-500 dark:focus:border-cyber-emerald font-mono"
                  />
                  {machine.rootFlag && (
                    <button
                      type="button"
                      onClick={() => {
                        toggleRootFlag(machine.id);
                        if (soundEnabled) playCyberSound('toggle');
                      }}
                      className="p-1.5 rounded bg-white dark:bg-cyber-card border border-slate-200 dark:border-cyber-border text-slate-400 dark:text-cyber-muted hover:text-red-600 dark:hover:text-cyber-crimson hover:border-red-300 transition-colors"
                      title="Clear / Remove Root Flag"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  )}
                  <button
                    onClick={() => setShowRootFlag(!showRootFlag)}
                    className="p-1.5 rounded bg-white dark:bg-cyber-card border border-slate-200 dark:border-cyber-border text-slate-500 dark:text-cyber-muted hover:text-slate-900 dark:hover:text-white"
                    title={showRootFlag ? 'Hide Flag' : 'Show Flag'}
                  >
                    {showRootFlag ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                  </button>
                  <button
                    onClick={() => handleCopy(machine.rootFlag || '', 'root')}
                    className="p-1.5 rounded bg-white dark:bg-cyber-card border border-slate-200 dark:border-cyber-border text-slate-500 dark:text-cyber-muted hover:text-emerald-700 dark:hover:text-cyber-emerald"
                    title="Copy Root Flag"
                  >
                    {copiedRoot ? <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-cyber-emerald" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Official HTB Intel Briefing Card (if available) */}
          {machine.officialSynopsis && (
            <div className="p-3.5 rounded-lg border border-emerald-300 dark:border-cyber-emerald/40 bg-emerald-50 dark:bg-cyber-emerald/5 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[10px] text-emerald-800 dark:text-cyber-emerald uppercase font-bold flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-emerald-700 dark:text-cyber-emerald" /> OFFICIAL HTB SYNOPSIS & INTEL
                </span>
                <button
                  type="button"
                  onClick={() => setActiveTab('walkthrough')}
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

          {/* Section 3: Spoiler-Masked Hint / Active ToS Guard */}
          {machine.isActive ? (
            <div className="p-3 rounded-lg border border-amber-300 dark:border-amber-500/40 bg-amber-50 dark:bg-amber-950/20 text-amber-900 dark:text-amber-300 flex items-center gap-2">
              <Lock className="w-4 h-4 text-amber-600 dark:text-amber-400 flex-shrink-0" />
              <span className="text-[11px] font-mono">
                Active Lab: Intel hints and spoilers are strictly prohibited by Hack The Box Terms of Service (AUP §8.2).
              </span>
            </div>
          ) : machine.hint ? (
            <div className="p-3.5 rounded-lg bg-slate-50 dark:bg-cyber-bg border border-slate-200 dark:border-cyber-border space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[10px] uppercase font-bold text-amber-800 dark:text-cyber-amber flex items-center gap-1">
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
                className={`p-2.5 rounded border text-xs cursor-pointer select-none transition-all ${
                  showHint
                    ? 'bg-white dark:bg-cyber-card border-amber-300 text-slate-900 dark:text-white'
                    : 'filter blur-[4px] select-none text-transparent bg-slate-200/60 dark:bg-cyber-card/60 border-slate-200 dark:border-cyber-border'
                }`}
                title="Click to toggle hint spoiler"
              >
                {machine.hint}
              </div>
            </div>
          ) : null}

          {/* Section 4: Perceived Difficulty & Enjoyment Rating */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="p-3.5 rounded-lg border border-slate-200 dark:border-cyber-border bg-slate-50 dark:bg-cyber-bg/50">
              <div className="text-[10px] uppercase font-bold tracking-wider text-slate-500 dark:text-cyber-muted mb-2">
                PERCEIVED DIFFICULTY VS OFFICIAL
              </div>
              <div className="flex items-center gap-1.5 flex-wrap">
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

            <div className="p-3.5 rounded-lg border border-slate-200 dark:border-cyber-border bg-slate-50 dark:bg-cyber-bg/50">
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

          {/* Section 5: Identified Vulnerability Archetypes & Tags */}
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
              <div className="text-[10px] uppercase font-bold text-slate-500 dark:text-cyber-muted flex items-center gap-1.5 mb-2">
                <Tag className="w-3.5 h-3.5 text-purple-600 dark:text-cyber-purple" /> ATTACK VECTORS & TAGS
              </div>
              <div className="flex flex-wrap gap-1.5 mb-2">
                {machine.tags.map((t) => (
                  <span key={t} className="px-2 py-1 rounded bg-slate-100 dark:bg-cyber-bg border border-slate-200 dark:border-cyber-border text-cyan-800 dark:text-cyber-cyan text-xs flex items-center gap-1">
                    <span>{t}</span>
                    <button onClick={() => handleRemoveTag(t)} className="text-slate-400 dark:text-cyber-muted hover:text-red-600 dark:hover:text-cyber-crimson">✕</button>
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-2 max-w-sm">
                <input
                  id="target-detail-new-tag-input"
                  name="target-detail-new-tag"
                  aria-label="Add vector tag"
                  type="text"
                  value={newTagInput}
                  onChange={(e) => setNewTagInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleAddTag()}
                  placeholder="Add vector tag..."
                  className="flex-1 bg-white dark:bg-cyber-bg px-2.5 py-1 rounded border border-slate-300 dark:border-cyber-border text-slate-900 dark:text-white text-xs focus:outline-none focus:border-purple-600 dark:focus:border-cyber-purple"
                />
                <button
                  onClick={handleAddTag}
                  className="px-3 py-1 rounded bg-purple-100 dark:bg-cyber-purple/20 border border-purple-300 dark:border-cyber-purple/50 text-purple-900 dark:text-cyber-purple hover:bg-purple-200 dark:hover:bg-cyber-purple dark:hover:text-white font-semibold"
                >
                  Add
                </button>
              </div>
            </div>
          </div>

          {/* Section 6: Tactical Field Notes */}
          <div className="space-y-1.5">
            <div className="text-[10px] uppercase font-bold text-slate-500 dark:text-cyber-muted flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5 text-cyan-600 dark:text-cyber-cyan" /> TACTICAL FIELD NOTES & CREDENTIALS
              </span>
              <span className="text-[10px] text-slate-400 dark:text-cyber-muted lowercase italic">
                (auto-saved locally)
              </span>
            </div>
            <textarea
              id="target-detail-field-notes"
              name="target-detail-field-notes"
              aria-label="Tactical field notes"
              rows={4}
              value={localNotes}
              onChange={(e) => setLocalNotes(e.target.value)}
              onBlur={() => {
                if (machine && localNotes !== (machine.quickNotes || '')) {
                  updateMachine(machine.id, { quickNotes: localNotes });
                }
              }}
              placeholder="Record notes, credentials, and pivot paths..."
              className="w-full bg-white dark:bg-cyber-bg p-3 rounded-lg border border-slate-300 dark:border-cyber-border text-slate-900 dark:text-white text-xs font-mono focus:outline-none focus:border-cyan-500 dark:focus:border-cyber-emerald resize-none shadow-inner"
            />
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
      )}
    </motion.div>
  );
};
