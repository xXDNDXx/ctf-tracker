import React, { useState, useEffect, useMemo } from 'react';
import { createPortal } from 'react-dom';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  ExternalLink, 
  FileText, 
  Crosshair, 
  Trash2,
  ListChecks,
  Maximize2,
  Zap,
  BookOpen,
  Lock,
  KeyRound
} from 'lucide-react';
import { useCtfStore } from '../../store/useCtfStore';
import { formatSeconds, playCyberSound, safeCopyToClipboard, sanitizeExternalUrl } from '../../utils/helpers';
import { ChecklistWorkspace } from '../checklist/ChecklistWorkspace';
import { PlatformBadge } from '../common/PlatformBadge';
import { OsBadge } from '../common/OsBadge';
import { EditableIpBadge } from '../common/EditableIpBadge';
import { CategoryBadge } from '../common/CategoryBadge';
import { DifficultyBadge } from '../common/DifficultyBadge';
import { ShareLinkButton } from '../common/ShareLinkButton';
import { QuickCommandsTab } from './QuickCommandsTab';
import { TargetCredentialVault } from './TargetCredentialVault';
import { CveBadge } from '../common/CveBadge';
import { extractMachineCves } from '../../utils/cveUtils';
import { useStoredPdfs } from '../../hooks/useStoredPdfs';

// Modular Detail Sub-tabs
import { MachineOverviewTab } from './detail/MachineOverviewTab';
import { MachineAuditReportTab } from './detail/MachineAuditReportTab';
import { MachineWalkthroughTab } from './detail/MachineWalkthroughTab';

export const MachineDetailModal: React.FC = () => {
  const {
    selectedMachineId,
    setSelectedMachineId,
    machines,
    updateMachine,
    soundEnabled,
    setActiveTab,
    setWriteupMachineId,
    setReportMachineId,
    setPdfModalMachineId,
    deleteMachine,
    setReconAutomationModalOpen,
    setAssignIpMachineId,
  } = useCtfStore();

  const { hasPdf, hasStoredPdf } = useStoredPdfs();
  const navigate = useNavigate();

  const [copiedReportMd, setCopiedReportMd] = useState(false);
  const [copiedWalkthrough, setCopiedWalkthrough] = useState(false);
  const [activeModalTab, setActiveModalTab] = useState<'overview' | 'commands' | 'creds' | 'checklist' | 'report' | 'walkthrough'>('overview');

  // Reset tab when target changes
  useEffect(() => {
    setActiveModalTab('overview');
  }, [selectedMachineId]);

  const machine = machines.find((m) => m.id === selectedMachineId);

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

  if (!machine || !selectedMachineId) return null;

  const handleOpenInWriteup = () => {
    setWriteupMachineId(machine.id);
    setActiveTab('writeup');
    setSelectedMachineId(null);
  };

  const handleCopyReportMd = async () => {
    const reportMd = `# Penetration Testing Executive Summary: ${machine.name} (${machine.ip})\n\n` +
      `**Platform:** ${machine.platform} | **OS:** ${machine.os} | **Difficulty:** ${machine.difficulty}\n` +
      `**Status:** ${machine.status.toUpperCase()}\n` +
      `**Time Logged:** ${formatSeconds(machine.timeSpentSeconds)}\n\n` +
      `## Flags Proof of Concept\n` +
      `- **User Flag:** \`${machine.userFlag || (machine.userPwnedAt ? 'HTB{user_flag_verified}' : 'Not captured')}\`\n` +
      `- **Root Flag:** \`${machine.rootFlag || (machine.rootPwnedAt ? 'HTB{root_flag_verified}' : 'Not captured')}\`\n\n` +
      (machine.quickNotes ? `## Assessor Field Notes\n${machine.quickNotes}\n\n` : '') +
      `## Attack Vectors & Tags\n${machine.tags.map(t => `- ${t}`).join('\n')}\n`;
    await safeCopyToClipboard(reportMd);
    setCopiedReportMd(true);
    if (soundEnabled) playCyberSound('copy');
    setTimeout(() => setCopiedReportMd(false), 2000);
  };

  const modalContent = (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/85 backdrop-blur-md font-mono overflow-y-auto"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          setSelectedMachineId(null);
        }
      }}
    >
      <motion.div 
        initial={{ opacity: 0, scale: 0.96, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 10 }}
        transition={{ duration: 0.15 }}
        role="dialog"
        aria-modal="true"
        aria-label={`Machine details for ${machine.name}`}
        className="w-full sm:max-w-4xl max-h-[92vh] flex flex-col rounded-xl sm:rounded-2xl border border-slate-200 dark:border-cyber-border bg-white dark:bg-cyber-card shadow-2xl overflow-hidden relative my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header (Pinned at Top) */}
        <div className="flex-shrink-0 flex items-start justify-between border-b border-slate-200 dark:border-cyber-border p-3.5 sm:p-4 bg-slate-50/95 dark:bg-cyber-bg/95 backdrop-blur-sm">
          <div>
            <div className="flex items-center gap-2.5 flex-wrap">
              <PlatformBadge platform={machine.platform} size="md" />
              <h2 className="text-xl font-bold text-slate-900 dark:text-white tracking-wide">{machine.name}</h2>
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
              {Boolean(machine.ip && machine.ip.includes('x')) && (
                <button
                  type="button"
                  onClick={() => setAssignIpMachineId(machine.id)}
                  className="px-2 py-0.5 rounded bg-amber-100 dark:bg-cyber-amber/15 border border-amber-300 dark:border-cyber-amber/40 text-amber-900 dark:text-cyber-amber hover:bg-amber-200 dark:hover:bg-cyber-amber hover:text-black font-bold text-[10px] transition-all flex items-center gap-1 shadow-sm"
                  title="Target has placeholder IP. Click to assign live spawned IP"
                >
                  <Crosshair className="w-3 h-3" />
                  <span>Assign Spawned IP</span>
                </button>
              )}
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

                  {/* External Community Guide Link */}
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

          <div className="flex items-center gap-1.5 sm:gap-2">
            {machine.isCustom && (
              <button
                onClick={() => {
                  if (confirm(`Delete custom machine ${machine.name}?`)) {
                    deleteMachine(machine.id);
                  }
                }}
                className="p-1.5 rounded bg-slate-100 dark:bg-cyber-bg text-slate-600 dark:text-cyber-muted hover:text-red-600 dark:hover:text-cyber-crimson border border-slate-200 dark:border-cyber-border transition-colors"
                title="Delete Custom Machine"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            )}

            {/* Direct Pentest Pre-Report Button */}
            <button
              onClick={() => setReportMachineId(machine.id)}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded bg-purple-100 dark:bg-purple-950/40 text-purple-900 dark:text-purple-300 border border-purple-300 dark:border-purple-800/60 hover:bg-purple-200 dark:hover:bg-purple-900/60 hover:text-purple-950 dark:hover:text-white font-semibold text-xs transition-all shadow-sm group"
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
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded bg-cyan-100 dark:bg-cyber-cyan/15 text-cyan-900 dark:text-cyber-cyan border border-cyan-300 dark:border-cyber-cyan/40 hover:bg-cyan-400 hover:text-black dark:hover:bg-cyber-cyan dark:hover:text-black font-semibold text-xs transition-all shadow-glow-cyan/20"
              title="Open Multi-Format Scan Importer & Payload Crafter for this target"
            >
              <Zap className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Import Scan & Payloads</span>
            </button>
            <ShareLinkButton
              path={`/target/${machine.id}`}
              title={machine.name}
              className="px-2 py-1.5"
            />
            <button
              onClick={() => {
                navigate(`/target/${machine.id}`);
                setSelectedMachineId(null);
              }}
              className="p-1.5 rounded bg-slate-100 dark:bg-cyber-bg text-slate-600 dark:text-cyber-muted hover:text-cyan-700 dark:hover:text-cyber-cyan border border-slate-200 dark:border-cyber-border hover:border-cyan-500 dark:hover:border-cyber-cyan transition-colors"
              title="Open Dedicated Full Page Mission Workspace"
            >
              <Maximize2 className="w-4 h-4" />
            </button>
            <button
              onClick={() => setSelectedMachineId(null)}
              className="p-1.5 rounded bg-slate-100 dark:bg-cyber-bg text-slate-600 dark:text-cyber-muted hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-cyber-border transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Modal Navigation Tabs (Pinned below Header) */}
        <div className="flex-shrink-0 flex items-center border-b border-slate-200 dark:border-cyber-border bg-slate-100/90 dark:bg-cyber-bg/70 px-4 overflow-x-auto">
          <button
            onClick={() => setActiveModalTab('overview')}
            className={`flex items-center gap-1.5 py-2.5 px-4 font-bold text-xs border-b-2 whitespace-nowrap transition-all ${
              activeModalTab === 'overview'
                ? 'border-emerald-600 dark:border-cyber-emerald text-emerald-900 dark:text-cyber-emerald bg-emerald-50 dark:bg-cyber-emerald/5'
                : 'border-transparent text-slate-600 dark:text-cyber-muted hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <Crosshair className="w-3.5 h-3.5" />
            <span>OVERVIEW & FLAGS</span>
          </button>
          <button
            onClick={() => setActiveModalTab('commands')}
            className={`flex items-center gap-1.5 py-2.5 px-4 font-bold text-xs border-b-2 whitespace-nowrap transition-all ${
              activeModalTab === 'commands'
                ? 'border-amber-600 dark:border-cyber-amber text-amber-900 dark:text-cyber-amber bg-amber-50 dark:bg-cyber-amber/10'
                : 'border-transparent text-slate-600 dark:text-cyber-muted hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <Zap className="w-3.5 h-3.5 text-amber-600 dark:text-cyber-amber" />
            <span>⚡ ATTACK ARSENAL</span>
          </button>
          <button
            onClick={() => setActiveModalTab('creds')}
            className={`flex items-center gap-1.5 py-2.5 px-4 font-bold text-xs border-b-2 whitespace-nowrap transition-all ${
              activeModalTab === 'creds'
                ? 'border-amber-500 text-amber-900 dark:text-amber-400 bg-amber-50 dark:bg-amber-500/10'
                : 'border-transparent text-slate-600 dark:text-cyber-muted hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <KeyRound className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
            <span>🔑 LOOT & CREDS</span>
            {Boolean(machine.credentials?.length) && (
              <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-amber-100 dark:bg-amber-950/60 text-amber-900 dark:text-amber-300 font-bold border border-amber-300 dark:border-amber-800">
                {machine.credentials?.length}
              </span>
            )}
          </button>
          <button
            onClick={() => setActiveModalTab('checklist')}
            className={`flex items-center gap-1.5 py-2.5 px-4 font-bold text-xs border-b-2 whitespace-nowrap transition-all ${
              activeModalTab === 'checklist'
                ? 'border-cyan-600 dark:border-cyber-cyan text-cyan-900 dark:text-cyber-cyan bg-cyan-50 dark:bg-cyber-cyan/5'
                : 'border-transparent text-slate-600 dark:text-cyber-muted hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <ListChecks className="w-3.5 h-3.5" />
            <span>ATTACK CHECKLIST & METHODOLOGY</span>
            {checklistCompletedCount > 0 && (
              <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-cyan-100 dark:bg-cyber-cyan/20 text-cyan-900 dark:text-cyber-cyan font-bold">
                {checklistCompletedCount} done
              </span>
            )}
          </button>
          <button
            onClick={() => setActiveModalTab('report')}
            className={`flex items-center gap-1.5 py-2.5 px-4 font-bold text-xs border-b-2 whitespace-nowrap transition-all ${
              activeModalTab === 'report'
                ? 'border-purple-600 dark:border-purple-400 text-purple-900 dark:text-purple-300 bg-purple-50 dark:bg-purple-950/20'
                : 'border-transparent text-slate-600 dark:text-cyber-muted hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <FileText className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
            <span>📄 PENTEST REPORT</span>
          </button>
          {!machine.isActive && Boolean(machine.officialSynopsis || machine.officialWalkthrough || (machine.skillsLearned && machine.skillsLearned.length > 0) || machine.officialPdf) && (
            <button
              onClick={() => setActiveModalTab('walkthrough')}
              className={`flex items-center gap-1.5 py-2.5 px-4 font-bold text-xs border-b-2 whitespace-nowrap transition-all ${
                activeModalTab === 'walkthrough'
                  ? 'border-emerald-600 dark:border-cyber-emerald text-emerald-900 dark:text-cyber-emerald bg-emerald-50 dark:bg-cyber-emerald/10'
                  : 'border-transparent text-slate-600 dark:text-cyber-muted hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5 text-emerald-600 dark:text-cyber-emerald" />
              <span>OFFICIAL HTB INTEL</span>
              <span className="text-[9px] px-1.5 py-0.5 rounded bg-emerald-100 dark:bg-cyber-emerald/20 text-emerald-900 dark:text-cyber-emerald font-bold border border-emerald-300 dark:border-cyber-emerald/40 uppercase">
                HTB
              </span>
            </button>
          )}
        </div>

        {/* Modal Body (Scrollable Center Workspace) */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 text-xs scrollbar-thin">
          {activeModalTab === 'commands' ? (
            <QuickCommandsTab machine={machine} />
          ) : activeModalTab === 'creds' ? (
            <TargetCredentialVault
              machine={machine}
              onUpdateCredentials={(creds) => updateMachine(machine.id, { credentials: creds })}
            />
          ) : activeModalTab === 'checklist' ? (
            <ChecklistWorkspace machine={machine} onOpenInWriteup={handleOpenInWriteup} />
          ) : activeModalTab === 'report' ? (
            <MachineAuditReportTab
              machine={machine}
              onCopyReportMd={handleCopyReportMd}
              copiedReportMd={copiedReportMd}
              onSetReportMachineId={setReportMachineId}
            />
          ) : activeModalTab === 'walkthrough' ? (
            <MachineWalkthroughTab
              machine={machine}
              soundEnabled={soundEnabled}
              copiedWalkthrough={copiedWalkthrough}
              setCopiedWalkthrough={setCopiedWalkthrough}
              onSetPdfModalMachineId={setPdfModalMachineId}
              onOpenInWriteup={handleOpenInWriteup}
            />
          ) : (
            <MachineOverviewTab
              machine={machine}
              onOpenWalkthroughTab={() => setActiveModalTab('walkthrough')}
            />
          )}
        </div>

        {/* Modal Footer (Pinned at Bottom) */}
        <div className="flex-shrink-0 border-t border-slate-200 dark:border-cyber-border p-3 sm:p-3.5 bg-slate-50/95 dark:bg-cyber-bg/95 backdrop-blur-sm flex items-center justify-between">
          <div className="text-[10px] text-slate-500 dark:text-cyber-muted">
            Created: {new Date(machine.createdAt).toLocaleDateString()}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setReportMachineId(machine.id)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-purple-100 dark:bg-purple-950/40 hover:bg-purple-200 dark:hover:bg-purple-900/60 border border-purple-300 dark:border-purple-800 text-purple-900 dark:text-purple-300 hover:text-purple-950 dark:hover:text-white font-bold text-xs transition-colors shadow-xs"
              title="Open Printable Pentest Report PDF"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Pre-Report PDF</span>
            </button>
            <button
              onClick={handleOpenInWriteup}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-100 dark:bg-cyber-cyan/10 border border-cyan-300 dark:border-cyber-cyan/40 text-cyan-900 dark:text-cyber-cyan hover:bg-cyan-500 hover:text-white dark:hover:bg-cyber-cyan dark:hover:text-black font-semibold transition-all shadow-xs"
            >
              <FileText className="w-3.5 h-3.5" /> Writeup Studio
            </button>
            <button
              onClick={() => setSelectedMachineId(null)}
              className="px-4 py-1.5 rounded-lg bg-white dark:bg-cyber-card border border-slate-300 dark:border-cyber-border text-slate-900 dark:text-white hover:border-emerald-500 transition-colors font-medium shadow-xs"
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
