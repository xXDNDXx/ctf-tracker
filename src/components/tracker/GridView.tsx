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
  Maximize2
} from 'lucide-react';
import { Machine } from '../../types';
import { useCtfStore } from '../../store/useCtfStore';
import { formatDurationHuman, playCyberSound, triggerRootCelebration } from '../../utils/helpers';
import { PlatformBadge } from '../common/PlatformBadge';
import { OsBadge } from '../common/OsBadge';
import { EditableIpBadge } from '../common/EditableIpBadge';
import { CategoryBadge } from '../common/CategoryBadge';

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
  } = useCtfStore();

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
            initial={{ opacity: 0, y: 32, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: '-20px', amount: 0.12 }}
            transition={{ 
              type: 'spring',
              stiffness: 280,
              damping: 24,
              delay: Math.min((idx % 8) * 0.035, 0.25)
            }}
            whileHover={{ y: -6, scale: 1.015, transition: { duration: 0.18 } }}
            whileTap={{ scale: 0.985 }}
            onClick={() => setSelectedMachineId(m.id)}
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

                <span
                  className={`text-[10px] px-2 py-0.5 rounded font-bold ${
                    m.difficulty === 'Easy' ? 'text-cyber-emerald bg-cyber-emerald/10 border border-cyber-emerald/20' :
                    m.difficulty === 'Medium' ? 'text-cyber-amber bg-cyber-amber/10 border border-cyber-amber/20' :
                    m.difficulty === 'Hard' ? 'text-cyber-crimson bg-cyber-crimson/10 border border-cyber-crimson/20' :
                    'text-purple-400 bg-purple-950/40 border border-purple-800/40'
                  }`}
                >
                  {m.difficulty}
                </span>
              </div>

              {/* Machine Name & IP */}
              <div className="mb-3">
                <div className="text-base font-bold text-white group-hover:text-cyber-cyan transition-colors flex items-center justify-between">
                  <span className="tracking-wide">{m.name}</span>
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
                  <span className="text-white font-mono flex items-center gap-1">
                    <Clock className="w-3 h-3 text-cyber-muted" />
                    {formatDurationHuman(m.timeSpentSeconds)}
                  </span>
                </div>
              </div>

              {/* Hint Spoiler Peek */}
              {m.hint && (
                <div className="mb-3" onClick={(e) => e.stopPropagation()}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] text-cyber-amber uppercase font-semibold">Intel Hint</span>
                    <button
                      onClick={(e) => toggleHint(e, m.id)}
                      className="text-[10px] text-cyber-muted hover:text-white flex items-center gap-1 transition-colors"
                    >
                      {isHintRevealed ? <EyeOff className="w-3 h-3" /> : <Eye className="w-3 h-3" />}
                      {isHintRevealed ? 'Hide' : 'Peek'}
                    </button>
                  </div>
                  <AnimatePresence initial={false}>
                    <motion.div 
                      layout
                      className={`p-2 rounded border text-[11px] font-mono leading-relaxed transition-all ${
                        isHintRevealed
                          ? 'bg-cyber-amber/10 border-cyber-amber/40 text-cyber-text'
                          : 'bg-cyber-bg border-cyber-border/70 text-transparent select-none blur-[3px]'
                      }`}
                    >
                      {m.hint}
                    </motion.div>
                  </AnimatePresence>
                </div>
              )}

              {/* Tags snippet */}
              {m.tags.length > 0 && (
                <div className="flex flex-wrap gap-1 mb-3">
                  {m.tags.slice(0, 3).map((t) => (
                    <span key={t} className="text-[9px] px-1.5 py-0.5 rounded bg-cyber-bg border border-cyber-border text-cyber-cyan">
                      {t}
                    </span>
                  ))}
                  {m.tags.length > 3 && (
                    <span className="text-[9px] text-cyber-muted self-center">+{m.tags.length - 3}</span>
                  )}
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
                      ? 'bg-cyber-cyan/10 border-cyber-cyan/50 text-cyber-cyan shadow-glow-cyan/20'
                      : 'bg-cyber-bg border-cyber-border text-cyber-muted hover:text-white'
                  }`}
                  title="Toggle User Flag"
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
                      ? 'bg-cyber-emerald/10 border-cyber-emerald/50 text-cyber-emerald shadow-glow-emerald/20'
                      : 'bg-cyber-bg border-cyber-border text-cyber-muted hover:text-white'
                  }`}
                  title="Toggle Root Flag"
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
                      ? 'bg-cyber-emerald/20 text-cyber-emerald border-cyber-emerald shadow-glow-emerald/30'
                      : 'bg-cyber-bg border-cyber-border text-cyber-muted hover:text-white hover:border-cyber-emerald'
                  }`}
                  title="Engage Active Target"
                >
                  <Crosshair className="w-3.5 h-3.5" />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.92 }}
                  onClick={() => setSelectedMachineId(m.id)}
                  className="p-1.5 rounded bg-cyber-bg border border-cyber-border text-cyber-muted hover:text-cyber-cyan hover:border-cyber-cyan transition-all"
                  title="Attack Methodology Checklist"
                >
                  <ListChecks className="w-3.5 h-3.5" />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.92 }}
                  onClick={(e: React.MouseEvent) => {
                    e.stopPropagation();
                    navigate(`/target/${m.id}`);
                  }}
                  className="p-1.5 rounded bg-cyber-bg border border-cyber-border text-cyber-muted hover:text-cyber-cyan hover:border-cyber-cyan transition-all"
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
                  className="p-1.5 rounded bg-cyber-bg border border-cyber-border text-cyber-muted hover:text-purple-300 hover:border-purple-600 transition-all"
                  title="Open Executive Pentest Pre-Report"
                >
                  <FileText className="w-3.5 h-3.5 text-purple-400" />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.92 }}
                  onClick={(e: React.MouseEvent) => {
                    e.stopPropagation();
                    setWriteupMachineId(m.id);
                    setActiveTab('writeup');
                    navigate(`/writeup/${m.id}`);
                  }}
                  className="p-1.5 rounded bg-cyber-bg border border-cyber-border text-cyber-muted hover:text-cyber-cyan hover:border-cyber-cyan transition-all"
                  title="Open Writeup"
                >
                  <FileText className="w-3.5 h-3.5" />
                </motion.button>

                {m.roomUrl && (
                  <motion.a
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.92 }}
                    href={m.roomUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded bg-cyber-bg border border-cyber-border text-cyber-muted hover:text-white transition-all"
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
