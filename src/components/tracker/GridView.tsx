import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Crosshair, 
  Flag, 
  Clock, 
  Eye, 
  EyeOff, 
  FileText, 
  ExternalLink,
  ListChecks,
  Maximize2,
  Lock
} from 'lucide-react';
import { Machine } from '../../types';
import { useCtfStore } from '../../store/useCtfStore';
import { useShallow } from 'zustand/react/shallow';
import { formatDurationHuman, playCyberSound, triggerRootCelebration, sanitizeExternalUrl } from '../../utils/helpers';
import { PlatformBadge } from '../common/PlatformBadge';
import { OsBadge } from '../common/OsBadge';
import { EditableIpBadge } from '../common/EditableIpBadge';
import { CategoryBadge } from '../common/CategoryBadge';
import { DifficultyBadge } from '../common/DifficultyBadge';
import { ShareLinkButton } from '../common/ShareLinkButton';
import { CveBadge } from '../common/CveBadge';
import { extractMachineCves } from '../../utils/cveUtils';
import { useStoredPdfs } from '../../hooks/useStoredPdfs';

interface GridViewProps {
  filteredMachines: Machine[];
}

export const GridView: React.FC<GridViewProps> = ({ filteredMachines }) => {
  const navigate = useNavigate();
  const {
    setSelectedMachineId,
    activeTargetId,
    setActiveTarget,
    startTimer,
    setWriteupMachineId,
    setActiveTab,
    soundEnabled,
    toggleUserFlag,
    toggleRootFlag,
    setReportMachineId,
    setPdfModalMachineId,
  } = useCtfStore(
    useShallow((s) => ({
      setSelectedMachineId: s.setSelectedMachineId,
      activeTargetId: s.activeTargetId,
      setActiveTarget: s.setActiveTarget,
      startTimer: s.startTimer,
      setWriteupMachineId: s.setWriteupMachineId,
      setActiveTab: s.setActiveTab,
      soundEnabled: s.soundEnabled,
      toggleUserFlag: s.toggleUserFlag,
      toggleRootFlag: s.toggleRootFlag,
      setReportMachineId: s.setReportMachineId,
      setPdfModalMachineId: s.setPdfModalMachineId,
    }))
  );

  const { hasPdf, hasStoredPdf } = useStoredPdfs();

  const [revealedHints, setRevealedHints] = useState<Record<string, boolean>>({});
  const [visibleCount, setVisibleCount] = useState(32);

  // Reset or adjust visibleCount when filters change
  React.useEffect(() => {
    setVisibleCount(32);
  }, [filteredMachines.length]);

  const visibleMachines = React.useMemo(() => {
    return filteredMachines.slice(0, visibleCount);
  }, [filteredMachines, visibleCount]);

  const toggleHint = (e: React.MouseEvent, machineId: string) => {
    e.stopPropagation();
    setRevealedHints((prev) => ({ ...prev, [machineId]: !prev[machineId] }));
    if (soundEnabled) playCyberSound('click');
  };

  return (
    <div className="space-y-6 font-mono pb-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {visibleMachines.map((m, idx) => {
        const isActiveTarget = activeTargetId === m.id;
        const hasUser = Boolean(m.userPwnedAt || m.userFlag);
        const hasRoot = Boolean(m.rootPwnedAt || m.rootFlag);
        const isHintRevealed = Boolean(revealedHints[m.id]);

        return (
          <motion.div
            key={m.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.2,
              ease: 'easeOut',
              delay: Math.min((idx % 12) * 0.02, 0.2)
            }}
            whileHover={{ y: -4, transition: { duration: 0.15 } }}
            whileTap={{ scale: 0.985 }}
            onClick={() => setSelectedMachineId(m.id)}
            style={{ contentVisibility: 'auto', containIntrinsicSize: '0 340px' }}
            className={`group cyber-card-contain rounded-xl border p-4 bg-cyber-card hover:bg-cyber-cardHover transition-colors cursor-pointer shadow-md flex flex-col justify-between relative overflow-hidden ${
              isActiveTarget
                ? 'border-cyber-emerald shadow-glow-emerald/30 ring-1 ring-cyber-emerald/40'
                : 'border-cyber-border hover:border-cyber-cyan/50 hover:shadow-glow-cyan/20'
            }`}
          >
            {/* Ambient edge glow on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyber-cyan/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

            <div>
              {/* Header: Platform, OS, Difficulty */}
              <div className="flex items-center justify-between gap-1.5 mb-2.5">
                <div className="flex items-center gap-1.5 flex-wrap">
                  <PlatformBadge platform={m.platform} size="sm" />
                  <OsBadge os={m.os} size="xs" />
                  <CategoryBadge machine={m} size="xs" />
                </div>

                <DifficultyBadge difficulty={m.difficulty} size="sm" />
              </div>

              {/* Machine Name & IP */}
              <div className="mb-3">
                <div className="text-base font-bold text-slate-900 dark:text-white group-hover:text-cyber-cyan transition-colors flex items-center justify-between">
                  <span className="tracking-wide flex items-center gap-1.5">
                    <span>{m.name}</span>
                    {m.isActive && (
                      <span className="text-[9px] px-1.5 py-0.2 rounded font-mono font-bold bg-amber-100 dark:bg-amber-500/20 text-amber-900 dark:text-amber-300 border border-amber-300 dark:border-amber-500/40">
                        ACTIVE
                      </span>
                    )}
                    {(hasPdf(m) || hasStoredPdf(m.id)) && (
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setPdfModalMachineId(m.id);
                          if (soundEnabled) playCyberSound('click');
                        }}
                        className="text-[9px] px-1.5 py-0.2 rounded font-mono font-bold bg-emerald-100 dark:bg-emerald-950/60 text-emerald-950 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-500/40 hover:bg-emerald-200 dark:hover:bg-emerald-900/60 transition-colors flex items-center gap-1"
                        title={hasStoredPdf(m.id) ? 'View Stored Writeup PDF' : 'View Official HTB Writeup PDF'}
                      >
                        <FileText className="w-2.5 h-2.5 text-emerald-600 dark:text-emerald-400" />
                        <span>PDF</span>
                      </button>
                    )}
                  </span>
                  {isActiveTarget && (
                    <motion.span 
                      initial={{ scale: 0.8 }}
                      animate={{ scale: 1 }}
                      className="text-[10px] text-cyber-emerald flex items-center gap-1 font-semibold"
                    >
                      <Crosshair className="w-3 h-3 animate-spin-slow" /> ENGAGED
                    </motion.span>
                  )}
                </div>
                <EditableIpBadge machineId={m.id} initialIp={m.ip} size="xs" className="mt-0.5" />
              </div>

              {/* Certifications */}
              {m.certifications.length > 0 && (
                <div className="flex items-center gap-1 mb-2.5">
                  {m.certifications.map((c) => (
                    <span
                      key={c}
                      className="text-[9px] px-1.5 py-0.2 rounded bg-cyber-purple/10 border border-cyber-purple/30 text-cyber-purple font-bold"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              )}

              {/* Status and Time Pill */}
              <div className="flex items-center justify-between gap-2 p-2 rounded-lg bg-cyber-bg border border-cyber-border/70 text-xs mb-3">
                <div>
                  <span className="text-[10px] text-cyber-muted uppercase block">Status</span>
                  <span className={`font-bold uppercase text-[11px] ${
                    m.status === 'root' || m.status === 'completed' ? 'text-cyber-emerald' :
                    m.status === 'foothold' ? 'text-cyber-amber' :
                    m.status === 'recon' ? 'text-cyber-cyan' : 'text-cyber-muted'
                  }`}>
                    {m.status}
                  </span>
                </div>

                <div className="text-right">
                  <span className="text-[10px] text-cyber-muted uppercase block">Tracked</span>
                  <span className="text-slate-900 dark:text-white font-mono flex items-center gap-1">
                    <Clock className="w-3 h-3 text-cyber-muted" />
                    {formatDurationHuman(m.timeSpentSeconds)}
                  </span>
                </div>
              </div>

              {/* Hint Spoiler Peek / Active ToS Guard */}
              {m.isActive ? (
                <div className="mb-3 px-2.5 py-1.5 rounded border border-amber-500/30 bg-amber-950/20 text-amber-300 text-[10px] font-mono flex items-center gap-1.5">
                  <Lock className="w-3 h-3 text-amber-400 flex-shrink-0" />
                  <span>Active Lab · Writeups Prohibited (HTB ToS)</span>
                </div>
              ) : m.hint ? (
                <div className="mb-3" onClick={(e) => e.stopPropagation()}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] text-amber-700 dark:text-cyber-amber uppercase font-semibold">Intel Hint</span>
                    <button
                      onClick={(e) => toggleHint(e, m.id)}
                      className="text-[10px] text-slate-600 dark:text-cyber-muted hover:text-slate-900 dark:hover:text-white flex items-center gap-1 transition-colors"
                      aria-label={isHintRevealed ? 'Hide hint' : 'Peek hint'}
                    >
                      {isHintRevealed ? <EyeOff className="w-3 h-3" /> : <Eye className="w-3 h-3" />}
                      {isHintRevealed ? 'Hide' : 'Peek'}
                    </button>
                  </div>
                  <AnimatePresence initial={false}>
                    <motion.div 
                      layout
                      onClick={(e) => {
                        if (!isHintRevealed) toggleHint(e, m.id);
                      }}
                      className={`p-2 rounded border text-[11px] font-mono leading-relaxed transition-[background-color,border-color,color] duration-150 ${
                        isHintRevealed
                          ? 'bg-amber-50 border-amber-200 text-slate-800 dark:bg-cyber-amber/10 dark:border-cyber-amber/40 dark:text-cyber-text'
                          : 'bg-slate-100 dark:bg-cyber-bg/80 border-slate-200 dark:border-cyber-border/80 text-slate-500 dark:text-cyber-muted select-none cursor-pointer hover:border-amber-500/40'
                      }`}
                    >
                      {isHintRevealed ? (
                        m.hint
                      ) : (
                        <div className="flex items-center gap-1.5 text-[10px] text-amber-800/80 dark:text-cyber-amber/70 font-mono tracking-wider">
                          <Lock className="w-3 h-3 text-amber-600 dark:text-cyber-amber flex-shrink-0" />
                          <span>INTEL REDACTED // Click to Peek</span>
                        </div>
                      )}
                    </motion.div>
                  </AnimatePresence>
                </div>
              ) : null}

              {/* CVE Vulnerability Badges */}
              {extractMachineCves(m).length > 0 && (
                <div className="flex flex-wrap gap-1 mb-2">
                  {extractMachineCves(m).slice(0, 2).map((cve) => (
                    <CveBadge key={cve} cve={cve} size="xs" />
                  ))}
                  {extractMachineCves(m).length > 2 && (
                    <span className="text-[8.5px] font-mono font-bold text-cyber-muted self-center">
                      +{extractMachineCves(m).length - 2} CVEs
                    </span>
                  )}
                </div>
              )}

              {/* Tags snippet */}
              {m.tags.length > 0 && (
                <div className="flex flex-wrap gap-1 mb-3">
                  {m.tags.slice(0, 3).map((t) => (
                    <span key={t} className="text-[9px] px-1.5 py-0.5 rounded bg-cyan-50 border border-cyan-200 text-cyan-900 dark:bg-cyber-bg dark:border-cyber-border dark:text-cyber-cyan font-mono">
                      {t}
                    </span>
                  ))}
                  {m.tags.length > 3 && (
                    <span className="text-[9px] text-cyber-muted self-center">+{m.tags.length - 3}</span>
                  )}
                </div>
              )}

              {/* Tactical In-Progress Notes Preview Chip */}
              {m.quickNotes && m.quickNotes.trim().length > 0 && (
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedMachineId(m.id);
                  }}
                  className="mb-3 p-2 rounded-lg bg-amber-50 dark:bg-amber-500/10 border border-amber-200 dark:border-amber-500/30 text-amber-900 dark:text-amber-200/90 text-[10.5px] font-mono hover:border-amber-400 dark:hover:border-amber-500/60 transition-all cursor-pointer group/notes shadow-xs"
                  title="Click to view & edit tactical field notes"
                >
                  <div className="flex items-center justify-between text-[9.5px] text-amber-700 dark:text-amber-400 font-bold uppercase mb-0.5">
                    <span className="flex items-center gap-1">
                      <span>📝</span>
                      <span>TACTICAL NOTES</span>
                    </span>
                    <span className="text-[9px] opacity-70 group-hover/notes:opacity-100 transition-opacity">EDIT ↗</span>
                  </div>
                  <p className="line-clamp-2 leading-relaxed break-words text-slate-800 dark:text-amber-100/90">
                    {m.quickNotes}
                  </p>
                </div>
              )}
            </div>

            {/* Card Footer Actions */}
            <div className="pt-2.5 border-t border-cyber-border/70 flex items-center justify-between gap-2" onClick={(e) => e.stopPropagation()}>
              <div className="flex items-center gap-1.5">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => toggleUserFlag(m.id)}
                  className={`px-2 py-1 rounded text-xs border font-bold flex items-center gap-1 transition-all ${
                    hasUser
                      ? 'bg-cyan-100 border-cyan-400 text-cyan-900 dark:bg-cyber-cyan/10 dark:border-cyber-cyan/50 dark:text-cyber-cyan dark:shadow-glow-cyan/20 hover:border-rose-500/60 hover:text-rose-600 dark:hover:text-rose-400 hover:bg-rose-500/10'
                      : 'bg-slate-100 border-slate-300 text-slate-700 hover:text-slate-950 dark:bg-cyber-bg dark:border-cyber-border dark:text-cyber-muted dark:hover:text-white'
                  }`}
                  title={hasUser ? "User Flag Captured (Click to remove / unmark if clicked by mistake)" : "Mark User Flag Captured"}
                >
                  <Flag className="w-3 h-3" /> User
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    toggleRootFlag(m.id);
                    if (!hasRoot) triggerRootCelebration();
                  }}
                  className={`px-2 py-1 rounded text-xs border font-bold flex items-center gap-1 transition-all ${
                    hasRoot
                      ? 'bg-emerald-100 border-emerald-400 text-emerald-900 dark:bg-cyber-emerald/10 dark:border-cyber-emerald/50 dark:text-cyber-emerald dark:shadow-glow-emerald/20 hover:border-rose-500/60 hover:text-rose-600 dark:hover:text-rose-400 hover:bg-rose-500/10'
                      : 'bg-slate-100 border-slate-300 text-slate-700 hover:text-slate-950 dark:bg-cyber-bg dark:border-cyber-border dark:text-cyber-muted dark:hover:text-white'
                  }`}
                  title={hasRoot ? "Root Flag Captured (Click to remove / unmark if clicked by mistake)" : "Mark Root Flag Captured"}
                >
                  <Flag className="w-3 h-3" /> Root
                </motion.button>
              </div>

              <div className="flex items-center gap-1">
                <motion.button
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.92 }}
                  onClick={() => {
                    setActiveTarget(m.id);
                    startTimer();
                    if (soundEnabled) playCyberSound('timer');
                  }}
                  className={`p-1.5 rounded border transition-all ${
                    isActiveTarget
                      ? 'bg-emerald-100 text-emerald-900 border-emerald-400 dark:bg-cyber-emerald/20 dark:text-cyber-emerald dark:border-cyber-emerald shadow-glow-emerald/30'
                      : 'bg-cyber-bg border-cyber-border text-cyber-muted hover:text-slate-900 dark:hover:text-white hover:border-cyber-emerald'
                  }`}
                  title="Engage Active Target"
                >
                  <Crosshair className="w-3.5 h-3.5" />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.92 }}
                  onClick={() => setSelectedMachineId(m.id)}
                  className="p-1.5 rounded bg-cyber-bg border border-cyber-border text-cyber-muted hover:text-cyan-700 dark:hover:text-cyber-cyan hover:border-cyber-cyan transition-all"
                  title="Attack Methodology Checklist"
                >
                  <ListChecks className="w-3.5 h-3.5" />
                </motion.button>

                <ShareLinkButton
                  path={`/target/${m.id}`}
                  title={m.name}
                  iconOnly
                  className="p-1.5"
                />

                <motion.button
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.92 }}
                  onClick={(e: React.MouseEvent) => {
                    e.stopPropagation();
                    navigate(`/target/${m.id}`);
                  }}
                  className="p-1.5 rounded bg-cyber-bg border border-cyber-border text-cyber-muted hover:text-cyan-700 dark:hover:text-cyber-cyan hover:border-cyber-cyan transition-all"
                  title="Open Dedicated Full-Page Mission"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.92 }}
                  onClick={(e: React.MouseEvent) => {
                    e.stopPropagation();
                    setReportMachineId(m.id);
                  }}
                  className="p-1.5 rounded bg-cyber-bg border border-cyber-border text-cyber-muted hover:text-purple-800 dark:hover:text-purple-300 hover:border-purple-600 transition-all"
                  title="Open Executive Pentest Pre-Report"
                >
                  <FileText className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
                </motion.button>

                {/* Direct PDF Writeup Action Button */}
                {(hasPdf(m) || hasStoredPdf(m.id)) && (
                  <motion.button
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.92 }}
                    onClick={(e: React.MouseEvent) => {
                      e.stopPropagation();
                      setPdfModalMachineId(m.id);
                      if (soundEnabled) playCyberSound('click');
                    }}
                    className="p-1.5 rounded bg-emerald-50 dark:bg-cyber-emerald/10 border border-emerald-300 dark:border-cyber-emerald/40 text-emerald-900 dark:text-cyber-emerald hover:bg-emerald-500 hover:text-white dark:hover:bg-cyber-emerald dark:hover:text-black transition-all shadow-glow-emerald/20"
                    title={hasStoredPdf(m.id) ? 'View Stored Writeup PDF' : 'View Official HTB PDF'}
                  >
                    <FileText className="w-3.5 h-3.5" />
                  </motion.button>
                )}

                <motion.button
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.92 }}
                  onClick={(e: React.MouseEvent) => {
                    e.stopPropagation();
                    setWriteupMachineId(m.id);
                    setActiveTab('writeup');
                    navigate(`/writeup/${m.id}`);
                  }}
                  className="p-1.5 rounded bg-cyber-bg border border-cyber-border text-cyber-muted hover:text-cyan-700 dark:hover:text-cyber-cyan hover:border-cyber-cyan transition-all"
                  title="Writeup Studio (Personal Notes Editor)"
                >
                  <FileText className="w-3.5 h-3.5" />
                </motion.button>

                {Boolean(sanitizeExternalUrl(m.roomUrl)) && (
                  <motion.a
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.92 }}
                    href={sanitizeExternalUrl(m.roomUrl)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded bg-cyber-bg border border-cyber-border text-cyber-muted hover:text-slate-900 dark:hover:text-white transition-all"
                    title="Open Room Link"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </motion.a>
                )}
              </div>
            </div>
          </motion.div>
        );
      })}
      </div>

      {filteredMachines.length > visibleCount && (
        <div className="flex flex-col items-center justify-center pt-4 pb-8">
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => setVisibleCount((prev) => prev + 32)}
            className="px-6 py-2.5 rounded-lg bg-cyber-card border border-cyber-cyan/40 text-cyber-cyan hover:bg-cyber-cyan hover:text-black font-bold text-xs transition-all shadow-glow-cyan/20"
          >
            LOAD MORE TARGETS (+32) — Showing {visibleCount} of {filteredMachines.length}
          </motion.button>
          <span className="text-[10px] text-cyber-muted mt-2">
            60/120 FPS performance optimization enabled
          </span>
        </div>
      )}
    </div>
  );
};
