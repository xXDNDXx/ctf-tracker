import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Crosshair, 
  Flag, 
  Clock, 
  ChevronRight, 
  ChevronLeft,
  FileText
} from 'lucide-react';
import { Machine, PipelineStatus } from '../../types';
import { useCtfStore } from '../../store/useCtfStore';
import { formatDurationHuman, playCyberSound, triggerRootCelebration } from '../../utils/helpers';
import { PlatformBadge } from '../common/PlatformBadge';
import { OsBadge } from '../common/OsBadge';

interface KanbanBoardProps {
  filteredMachines: Machine[];
}

interface LaneConfig {
  id: PipelineStatus;
  title: string;
  subtitle: string;
  accentColor: string;
  badgeClass: string;
  borderClass: string;
}

const LANES: LaneConfig[] = [
  {
    id: 'backlog',
    title: 'TARGET BACKLOG',
    subtitle: 'Queued & Scoped Labs',
    accentColor: '#94A3B8',
    badgeClass: 'text-gray-400 bg-gray-900 border-gray-700',
    borderClass: 'border-cyber-border',
  },
  {
    id: 'recon',
    title: 'ACTIVE RECON',
    subtitle: 'Port & Web Enumeration',
    accentColor: '#06B6D4',
    badgeClass: 'text-cyber-cyan bg-cyber-cyan/10 border-cyber-cyan/30',
    borderClass: 'border-cyber-cyan/40',
  },
  {
    id: 'foothold',
    title: 'FOOTHOLD OBTAINED',
    subtitle: 'User Shell / Initial Access',
    accentColor: '#F59E0B',
    badgeClass: 'text-cyber-amber bg-cyber-amber/10 border-cyber-amber/30',
    borderClass: 'border-cyber-amber/40',
  },
  {
    id: 'root',
    title: 'SYSTEM PWNED',
    subtitle: 'Root / System Flag Captured',
    accentColor: '#EF4444',
    badgeClass: 'text-cyber-crimson bg-cyber-crimson/10 border-cyber-crimson/30',
    borderClass: 'border-cyber-crimson/40',
  },
  {
    id: 'completed',
    title: 'COMPLETED & LOGGED',
    subtitle: 'Writeup Archived & Retired',
    accentColor: '#10B981',
    badgeClass: 'text-cyber-emerald bg-cyber-emerald/10 border-cyber-emerald/30',
    borderClass: 'border-cyber-emerald/40',
  },
];

export const KanbanBoard: React.FC<KanbanBoardProps> = ({ filteredMachines }) => {
  const {
    setSelectedMachineId,
    updateMachineStatus,
    activeTargetId,
    setActiveTarget,
    startTimer,
    soundEnabled,
    setReportMachineId,
    filters,
  } = useCtfStore();

  const handleAdvance = (e: React.MouseEvent, m: Machine, nextStatus: PipelineStatus) => {
    e.stopPropagation();
    updateMachineStatus(m.id, nextStatus);
    if (nextStatus === 'root' || nextStatus === 'completed') {
      triggerRootCelebration();
      if (soundEnabled) playCyberSound('root');
    } else {
      if (soundEnabled) playCyberSound('toggle');
    }
  };

  const handleRetreat = (e: React.MouseEvent, m: Machine, prevStatus: PipelineStatus) => {
    e.stopPropagation();
    updateMachineStatus(m.id, prevStatus);
    if (soundEnabled) playCyberSound('toggle');
  };

  const handleSetTarget = (e: React.MouseEvent, machineId: string) => {
    e.stopPropagation();
    setActiveTarget(machineId);
    startTimer();
    if (soundEnabled) playCyberSound('timer');
  };

  const visibleLanes = React.useMemo(() => {
    if (!filters.hideEmptyLanes) return LANES;
    const populated = LANES.filter((lane) => filteredMachines.some((m) => m.status === lane.id));
    return populated.length > 0 ? populated : LANES;
  }, [filters.hideEmptyLanes, filteredMachines]);

  const gridColsClass = React.useMemo(() => {
    const count = visibleLanes.length;
    if (count === 1) return 'grid-cols-1';
    if (count === 2) return 'grid-cols-1 md:grid-cols-2';
    if (count === 3) return 'grid-cols-1 md:grid-cols-3';
    if (count === 4) return 'grid-cols-1 md:grid-cols-2 xl:grid-cols-4';
    return 'grid-cols-1 md:grid-cols-3 xl:grid-cols-5';
  }, [visibleLanes.length]);

  return (
    <div className={`grid ${gridColsClass} gap-3.5 items-start font-mono pb-8 transition-all`}>
      {visibleLanes.map((lane) => {
        const laneMachines = filteredMachines.filter((m) => m.status === lane.id);
        const fullLaneIdx = LANES.findIndex((l) => l.id === lane.id);
        const prevLane = fullLaneIdx > 0 ? LANES[fullLaneIdx - 1].id : null;
        const nextLane = fullLaneIdx < LANES.length - 1 ? LANES[fullLaneIdx + 1].id : null;

        return (
          <motion.div
            layout
            key={lane.id}
            className="flex flex-col rounded-xl border border-cyber-border bg-cyber-card/60 backdrop-blur-sm min-h-[550px] overflow-hidden shadow-lg transition-colors hover:border-cyber-borderGlow"
          >
            {/* Lane Header */}
            <div className={`border-b ${lane.borderClass} p-3 bg-cyber-bg/80`}>
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold tracking-wider text-white">
                  {lane.title}
                </span>
                <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold border ${lane.badgeClass}`}>
                  {laneMachines.length}
                </span>
              </div>
              <div className="text-[10px] text-cyber-muted mt-0.5">{lane.subtitle}</div>
            </div>

            {/* Lane Cards Container */}
            <div className="flex-1 p-2 space-y-2.5 overflow-y-auto max-h-[calc(100vh-250px)]">
              <AnimatePresence mode="popLayout">
                {laneMachines.map((m) => {
                  const isActiveTarget = activeTargetId === m.id;
                  const hasUser = Boolean(m.userPwnedAt || m.userFlag);
                  const hasRoot = Boolean(m.rootPwnedAt || m.rootFlag);

                  return (
                    <motion.div
                      layout
                      initial={{ opacity: 0, scale: 0.92, y: 15 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ 
                        type: 'spring', 
                        stiffness: 400, 
                        damping: 28 
                      }}
                      whileHover={{ y: -3, scale: 1.012 }}
                      whileTap={{ scale: 0.985 }}
                      key={m.id}
                      onClick={() => setSelectedMachineId(m.id)}
                      className={`group relative p-3 rounded-lg border bg-cyber-card hover:bg-cyber-cardHover transition-colors cursor-pointer shadow-sm ${
                        isActiveTarget
                          ? 'border-cyber-emerald shadow-glow-emerald/30 ring-1 ring-cyber-emerald/40'
                          : 'border-cyber-border hover:border-cyber-cyan/50 hover:shadow-glow-cyan/20'
                      }`}
                    >
                      {/* Top Badges */}
                      <div className="flex items-center justify-between gap-1.5 mb-2">
                        <PlatformBadge platform={m.platform} size="sm" />

                        <div className="flex items-center gap-1.5">
                          <OsBadge os={m.os} size="sm" />
                          <span
                            className={`text-[10px] px-2 py-0.5 rounded font-bold uppercase tracking-wider ${
                              m.difficulty === 'Easy' ? 'bg-cyber-emerald/10 text-cyber-emerald border border-cyber-emerald/30' :
                              m.difficulty === 'Medium' ? 'bg-cyber-amber/10 text-cyber-amber border border-cyber-amber/30' :
                              m.difficulty === 'Hard' ? 'bg-cyber-crimson/10 text-cyber-crimson border border-cyber-crimson/30' :
                              'bg-purple-950/40 text-purple-400 border border-purple-800/50'
                            }`}
                          >
                            {m.difficulty}
                          </span>
                        </div>
                      </div>

                      {/* Machine Name & IP */}
                      <div className="flex items-start justify-between gap-1.5">
                        <div>
                          <div className="font-bold text-white text-base group-hover:text-cyber-cyan transition-colors leading-snug">
                            {m.name}
                          </div>
                          <div className="text-xs text-cyber-muted font-mono mt-0.5">{m.ip}</div>
                        </div>

                        {/* Active Target Engage Button */}
                        <motion.button
                          whileHover={{ scale: 1.15 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={(e) => handleSetTarget(e, m.id)}
                          className={`p-1.5 rounded transition-colors ${
                            isActiveTarget
                              ? 'text-cyber-emerald bg-cyber-emerald/10 border border-cyber-emerald/40 shadow-glow-emerald/20'
                              : 'text-cyber-muted hover:text-white bg-cyber-bg hover:bg-cyber-card border border-cyber-border'
                          }`}
                          title={isActiveTarget ? 'Currently Engaged' : 'Engage Target & Start Timer'}
                        >
                          <Crosshair className={`w-4 h-4 ${isActiveTarget ? 'animate-spin-slow' : ''}`} />
                        </motion.button>
                      </div>

                      {/* Flags & Time Spent Pill */}
                      <div className="flex items-center justify-between gap-2 mt-2.5 pt-2.5 border-t border-cyber-border/70 text-xs">
                        <div className="flex items-center gap-1.5">
                          <span
                            className={`flex items-center gap-1 px-2 py-0.5 rounded border text-[11px] font-bold ${
                              hasUser
                                ? 'bg-cyber-cyan/10 border-cyber-cyan/40 text-cyber-cyan'
                                : 'bg-cyber-bg border-cyber-border/60 text-cyber-muted'
                            }`}
                            title={hasUser ? 'User Flag Captured' : 'User Flag Pending'}
                          >
                            <Flag className="w-3 h-3" /> U
                          </span>
                          <span
                            className={`flex items-center gap-1 px-2 py-0.5 rounded border text-[11px] font-bold ${
                              hasRoot
                                ? 'bg-cyber-emerald/10 border-cyber-emerald/40 text-cyber-emerald'
                                : 'bg-cyber-bg border-cyber-border/60 text-cyber-muted'
                            }`}
                            title={hasRoot ? 'Root Flag Captured' : 'Root Flag Pending'}
                          >
                            <Flag className="w-3 h-3" /> R
                          </span>
                        </div>

                        <div className="flex items-center gap-2 text-cyber-muted">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setReportMachineId(m.id);
                            }}
                            className="p-1 rounded bg-cyber-bg hover:bg-purple-950/60 border border-cyber-border hover:border-purple-600 text-cyber-muted hover:text-purple-300 transition-colors"
                            title="Open Pentest Pre-Report"
                          >
                            <FileText className="w-3 h-3" />
                          </button>
                          <div className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            <span>{formatDurationHuman(m.timeSpentSeconds)}</span>
                          </div>
                        </div>
                      </div>

                      {/* Certifications */}
                      {m.certifications.length > 0 && (
                        <div className="flex items-center gap-1 mt-2">
                          {m.certifications.map((cert) => (
                            <span
                              key={cert}
                              className="text-[9px] px-1.5 py-0.2 rounded bg-cyber-purple/10 border border-cyber-purple/30 text-cyber-purple font-bold"
                            >
                              {cert}
                            </span>
                          ))}
                        </div>
                      )}

                      {/* Quick Move Across Lanes Action Footer */}
                      <div className="flex items-center justify-between mt-2.5 pt-1.5 border-t border-dashed border-cyber-border/60">
                        {prevLane ? (
                          <motion.button
                            whileHover={{ x: -2 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={(e) => handleRetreat(e, m, prevLane)}
                            className="flex items-center gap-0.5 text-[9px] text-cyber-muted hover:text-white transition-colors"
                            title="Move back"
                          >
                            <ChevronLeft className="w-3 h-3" /> Back
                          </motion.button>
                        ) : <div />}

                        {nextLane ? (
                          <motion.button
                            whileHover={{ x: 2 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={(e) => handleAdvance(e, m, nextLane)}
                            className="flex items-center gap-0.5 text-[9px] text-cyber-cyan hover:underline font-semibold ml-auto"
                            title="Advance stage"
                          >
                            Advance <ChevronRight className="w-3 h-3" />
                          </motion.button>
                        ) : <div />}
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>

              {laneMachines.length === 0 && (
                <div className="p-6 text-center text-[11px] text-cyber-muted/60 border border-dashed border-cyber-border/50 rounded-lg">
                  No targets in this lane.
                </div>
              )}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};
