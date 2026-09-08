import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowUpDown, 
  Flag, 
  Crosshair, 
  FileText, 
  ExternalLink,
  ListChecks,
  Maximize2
} from 'lucide-react';
import { Machine, PipelineStatus } from '../../types';
import { useCtfStore } from '../../store/useCtfStore';
import { useShallow } from 'zustand/react/shallow';
import { formatSeconds, playCyberSound, triggerRootCelebration, sanitizeExternalUrl } from '../../utils/helpers';
import { PlatformBadge, PlatformIcon } from '../common/PlatformBadge';
import { OsBadge } from '../common/OsBadge';
import { EditableIpBadge } from '../common/EditableIpBadge';
import { CategoryBadge } from '../common/CategoryBadge';
import { DifficultyBadge } from '../common/DifficultyBadge';
import { CyberSelect, CyberSelectOption } from '../common/CyberSelect';
import { CveBadge } from '../common/CveBadge';
import { extractMachineCves } from '../../utils/cveUtils';
import { useStoredPdfs } from '../../hooks/useStoredPdfs';

interface TableViewProps {
  filteredMachines: Machine[];
}

type SortField = 'name' | 'platform' | 'os' | 'difficulty' | 'status' | 'timeSpentSeconds';

export const TableView: React.FC<TableViewProps> = ({ filteredMachines }) => {
  const navigate = useNavigate();
  const {
    setSelectedMachineId,
    updateMachineStatus,
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
      updateMachineStatus: s.updateMachineStatus,
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

  const [sortField, setSortField] = useState<SortField>('name');
  const [sortAsc, setSortAsc] = useState(true);
  const [customColumnSorted, setCustomColumnSorted] = useState(false);

  const handleSort = (field: SortField) => {
    setCustomColumnSorted(true);
    if (sortField === field) {
      setSortAsc(!sortAsc);
    } else {
      setSortField(field);
      setSortAsc(true);
    }
  };

  const DIFFICULTY_ORDER: Record<string, number> = {
    'Very Easy': 1,
    'Easy': 2,
    'Medium': 3,
    'Hard': 4,
    'Insane': 5,
  };

  const STATUS_ORDER: Record<string, number> = {
    'backlog': 1,
    'recon': 2,
    'foothold': 3,
    'root': 4,
    'completed': 4,
  };

  const sortedMachines = useMemo(() => {
    if (!customColumnSorted) {
      return filteredMachines;
    }
    const list = [...filteredMachines];
    list.sort((a, b) => {
      if (sortField === 'difficulty') {
        const wa = DIFFICULTY_ORDER[a.difficulty] || 0;
        const wb = DIFFICULTY_ORDER[b.difficulty] || 0;
        return sortAsc ? wa - wb : wb - wa;
      }
      if (sortField === 'status') {
        const sa = STATUS_ORDER[a.status] || 0;
        const sb = STATUS_ORDER[b.status] || 0;
        return sortAsc ? sa - sb : sb - sa;
      }
      let valA = a[sortField];
      let valB = b[sortField];
      if (typeof valA === 'string' && typeof valB === 'string') {
        const sA = valA.toLowerCase();
        const sB = valB.toLowerCase();
        return sortAsc ? (sA > sB ? 1 : sA < sB ? -1 : 0) : (sA < sB ? 1 : sA > sB ? -1 : 0);
      }
      if (typeof valA === 'number' && typeof valB === 'number') {
        return sortAsc ? valA - valB : valB - valA;
      }
      return 0;
    });
    return list;
  }, [filteredMachines, sortField, sortAsc, customColumnSorted]);

  const [visibleRows, setVisibleRows] = useState(50);

  React.useEffect(() => {
    setVisibleRows(50);
  }, [filteredMachines.length, sortField, sortAsc]);

  const visibleSortedMachines = useMemo(() => {
    return sortedMachines.slice(0, visibleRows);
  }, [sortedMachines, visibleRows]);

  const handleStatusChange = (newStatus: PipelineStatus, machineId: string) => {
    updateMachineStatus(machineId, newStatus);
    if (newStatus === 'root' || newStatus === 'completed') {
      triggerRootCelebration();
      if (soundEnabled) playCyberSound('root');
    }
  };

  const statusOptions: CyberSelectOption<PipelineStatus>[] = [
    { value: 'backlog', label: 'Backlog', color: '#64748B' },
    { value: 'recon', label: 'Recon', color: '#06B6D4' },
    { value: 'foothold', label: 'Foothold', color: '#F59E0B' },
    { value: 'root', label: 'Root Pwned', color: '#10B981' },
    { value: 'completed', label: 'Completed', color: '#10B981' },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="rounded-xl border border-cyber-border bg-cyber-card overflow-hidden shadow-xl font-mono text-xs pb-6"
    >
      <div className="overflow-x-auto max-h-[calc(100vh-230px)]">
        <table className="w-full min-w-[820px] text-left border-collapse">
          <thead className="sticky top-0 z-10 bg-cyber-bg border-b border-cyber-border uppercase text-[10px] text-cyber-muted font-bold tracking-wider">
            <tr>
              <th className="py-3 px-4 cursor-pointer hover:text-slate-900 dark:hover:text-white transition-colors" onClick={() => handleSort('name')}>
                <div className="flex items-center gap-1.5">
                  <span>TARGET</span>
                  <ArrowUpDown className="w-3 h-3" />
                </div>
              </th>
              <th className="py-3 px-3 cursor-pointer hover:text-slate-900 dark:hover:text-white transition-colors" onClick={() => handleSort('platform')}>
                <div className="flex items-center gap-1.5">
                  <span>PLATFORM</span>
                  <ArrowUpDown className="w-3 h-3" />
                </div>
              </th>
              <th className="py-3 px-3 cursor-pointer hover:text-slate-900 dark:hover:text-white transition-colors" onClick={() => handleSort('os')}>
                <div className="flex items-center gap-1.5">
                  <span>OS</span>
                  <ArrowUpDown className="w-3 h-3" />
                </div>
              </th>
              <th className="py-3 px-3 cursor-pointer hover:text-slate-900 dark:hover:text-white transition-colors" onClick={() => handleSort('difficulty')}>
                <div className="flex items-center gap-1.5">
                  <span>DIFFICULTY</span>
                  <ArrowUpDown className="w-3 h-3" />
                </div>
              </th>
              <th className="py-3 px-3 cursor-pointer hover:text-slate-900 dark:hover:text-white transition-colors" onClick={() => handleSort('status')}>
                <div className="flex items-center gap-1.5">
                  <span>STATUS</span>
                  <ArrowUpDown className="w-3 h-3" />
                </div>
              </th>
              <th className="py-3 px-3">FLAGS</th>
              <th className="py-3 px-3 cursor-pointer hover:text-slate-900 dark:hover:text-white transition-colors" onClick={() => handleSort('timeSpentSeconds')}>
                <div className="flex items-center gap-1.5">
                  <span>TIME</span>
                  <ArrowUpDown className="w-3 h-3" />
                </div>
              </th>
              <th className="py-3 px-3">TRACKS</th>
              <th className="py-3 px-4 text-right">ACTIONS</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-cyber-border/70">
            {visibleSortedMachines.map((m, idx) => {
              const isActiveTarget = activeTargetId === m.id;
              const hasUser = Boolean(m.userPwnedAt || m.userFlag);
              const hasRoot = Boolean(m.rootPwnedAt || m.rootFlag);

              return (
                <tr
                  key={m.id}
                  style={{ contentVisibility: 'auto', containIntrinsicSize: '0 48px' }}
                  className={`hover:bg-cyber-cardHover transition-colors duration-150 group cursor-pointer ${
                    isActiveTarget ? 'bg-cyber-emerald/5 border-l-2 border-l-cyber-emerald' : ''
                  }`}
                  onClick={() => setSelectedMachineId(m.id)}
                >
                  {/* Target Name & IP */}
                  <td className="py-2.5 px-4">
                    <div className="flex items-center gap-2.5">
                      <PlatformIcon platform={m.platform} className="w-4 h-4 flex-shrink-0" />
                      <div>
                        <div className="font-bold text-slate-900 dark:text-white group-hover:text-cyber-cyan transition-colors flex items-center gap-1.5">
                          <span>{m.name}</span>
                          {m.isActive && (
                            <span className="text-[9px] px-1.5 py-0.5 rounded font-mono font-bold bg-amber-100 dark:bg-amber-500/20 text-amber-900 dark:text-amber-300 border border-amber-300 dark:border-amber-500/40">
                              ACTIVE
                            </span>
                          )}
                          {/* Writeup PDF Badge */}
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
                          {/* Tactical Notes Badge */}
                          {m.quickNotes && m.quickNotes.trim().length > 0 && (
                            <span
                              className="text-[9px] px-1.5 py-0.2 rounded font-mono font-bold bg-amber-100 dark:bg-amber-950/60 text-amber-900 dark:text-amber-300 border border-amber-300 dark:border-amber-500/40 flex items-center gap-1 max-w-[180px] truncate"
                              title={`Tactical Notes: ${m.quickNotes}`}
                            >
                              <span>📝</span>
                              <span className="truncate">{m.quickNotes}</span>
                            </span>
                          )}
                        </div>
                        <EditableIpBadge machineId={m.id} initialIp={m.ip} size="xs" className="mt-0.5" />
                        {extractMachineCves(m).length > 0 && (
                          <div className="flex items-center gap-1 mt-1 flex-wrap">
                            {extractMachineCves(m).slice(0, 2).map((cve) => (
                              <CveBadge key={cve} cve={cve} size="xs" />
                            ))}
                            {extractMachineCves(m).length > 2 && (
                              <span className="text-[8px] font-mono text-cyber-muted font-bold">
                                +{extractMachineCves(m).length - 2}
                              </span>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  </td>

                  {/* Platform */}
                  <td className="py-2.5 px-3">
                    <PlatformBadge platform={m.platform} size="sm" />
                  </td>

                  {/* OS & Category */}
                  <td className="py-2.5 px-3">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <OsBadge os={m.os} size="xs" />
                      <CategoryBadge machine={m} size="xs" />
                    </div>
                  </td>

                  {/* Difficulty */}
                  <td className="py-2.5 px-3">
                    <DifficultyBadge difficulty={m.difficulty} size="sm" />
                  </td>

                  {/* Status Pipeline Dropdown */}
                  <td className="py-2.5 px-3" onClick={(e) => e.stopPropagation()}>
                    <CyberSelect<PipelineStatus>
                      value={m.status}
                      onChange={(newStatus) => handleStatusChange(newStatus, m.id)}
                      options={statusOptions}
                      size="xs"
                      variant={
                        m.status === 'root' || m.status === 'completed'
                          ? 'emerald'
                          : m.status === 'foothold'
                          ? 'amber'
                          : m.status === 'recon'
                          ? 'cyan'
                          : 'default'
                      }
                      soundEnabled={soundEnabled}
                    />
                  </td>

                  {/* Flags */}
                  <td className="py-2.5 px-3" onClick={(e) => e.stopPropagation()}>
                    <div className="flex items-center gap-1.5">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => toggleUserFlag(m.id)}
                        aria-label={`Toggle user flag for ${m.name}`}
                        className={`px-1.5 py-0.5 rounded border text-[10px] flex items-center gap-0.5 font-bold transition-all ${
                          hasUser
                            ? 'bg-cyan-100 border-cyan-400 text-cyan-900 dark:bg-cyber-cyan/10 dark:border-cyber-cyan/50 dark:text-cyber-cyan dark:shadow-glow-cyan/20 hover:border-rose-500/60 hover:text-rose-600 dark:hover:text-rose-400 hover:bg-rose-500/10'
                            : 'bg-slate-100 border-slate-300 text-slate-700 hover:text-slate-950 dark:bg-cyber-bg dark:border-cyber-border dark:text-cyber-muted dark:hover:text-white'
                        }`}
                        title={hasUser ? "User Flag Captured (Click to remove / unmark if clicked by mistake)" : "Mark User Flag Captured"}
                      >
                        <Flag className="w-2.5 h-2.5" /> U
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => {
                          toggleRootFlag(m.id);
                          if (!hasRoot) triggerRootCelebration();
                        }}
                        aria-label={`Toggle root flag for ${m.name}`}
                        className={`px-1.5 py-0.5 rounded border text-[10px] flex items-center gap-0.5 font-bold transition-all ${
                          hasRoot
                            ? 'bg-emerald-100 border-emerald-400 text-emerald-900 dark:bg-cyber-emerald/10 dark:border-cyber-emerald/50 dark:text-cyber-emerald dark:shadow-glow-emerald/20 hover:border-rose-500/60 hover:text-rose-600 dark:hover:text-rose-400 hover:bg-rose-500/10'
                            : 'bg-slate-100 border-slate-300 text-slate-700 hover:text-slate-950 dark:bg-cyber-bg dark:border-cyber-border dark:text-cyber-muted dark:hover:text-white'
                        }`}
                        title={hasRoot ? "Root Flag Captured (Click to remove / unmark if clicked by mistake)" : "Mark Root Flag Captured"}
                      >
                        <Flag className="w-2.5 h-2.5" /> R
                      </motion.button>
                    </div>
                  </td>

                  {/* Time */}
                  <td className="py-2.5 px-3">
                    <span className="text-slate-700 dark:text-cyber-muted font-mono">{formatSeconds(m.timeSpentSeconds)}</span>
                  </td>

                  {/* Tracks */}
                  <td className="py-2.5 px-3">
                    <div className="flex items-center gap-1">
                      {m.certifications.map((c) => (
                        <span key={c} className="text-[9px] px-1 py-0.2 rounded bg-purple-100 border border-purple-300 text-purple-900 dark:bg-cyber-purple/10 dark:border-cyber-purple/30 dark:text-cyber-purple font-bold">
                          {c}
                        </span>
                      ))}
                    </div>
                  </td>

                  {/* Actions */}
                  <td className="py-2.5 px-4 text-right" onClick={(e) => e.stopPropagation()}>
                    <div className="flex items-center justify-end gap-1.5">
                      <motion.button
                        whileHover={{ scale: 1.12 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => {
                          setActiveTarget(m.id);
                          startTimer();
                          if (soundEnabled) playCyberSound('timer');
                        }}
                        aria-label={`Engage target ${m.name}`}
                        className={`p-1 rounded border transition-all ${
                          isActiveTarget
                            ? 'bg-emerald-100 text-emerald-900 border-emerald-400 dark:bg-cyber-emerald/20 dark:text-cyber-emerald dark:border-cyber-emerald shadow-glow-emerald/20'
                            : 'bg-cyber-bg border-cyber-border text-cyber-muted hover:text-slate-900 dark:hover:text-white hover:border-cyber-emerald'
                        }`}
                        title="Engage Target"
                      >
                        <Crosshair className="w-3.5 h-3.5" />
                      </motion.button>

                      <motion.button
                        whileHover={{ scale: 1.12 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setSelectedMachineId(m.id)}
                        aria-label={`Attack methodology checklist for ${m.name}`}
                        className="p-1 rounded bg-cyber-bg border border-cyber-border text-cyber-muted hover:text-cyan-700 dark:hover:text-cyber-cyan hover:border-cyber-cyan transition-all"
                        title="Attack Methodology Checklist"
                      >
                        <ListChecks className="w-3.5 h-3.5" />
                      </motion.button>

                      <motion.button
                        whileHover={{ scale: 1.12 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={(e: React.MouseEvent) => {
                          e.stopPropagation();
                          navigate(`/target/${m.id}`);
                        }}
                        aria-label={`Open dedicated mission page for ${m.name}`}
                        className="p-1 rounded bg-cyber-bg border border-cyber-border text-cyber-muted hover:text-cyan-700 dark:hover:text-cyber-cyan hover:border-cyber-cyan transition-all"
                        title="Open Dedicated Full-Page Mission"
                      >
                        <Maximize2 className="w-3.5 h-3.5" />
                      </motion.button>

                      <motion.button
                        whileHover={{ scale: 1.12 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={(e: React.MouseEvent) => {
                          e.stopPropagation();
                          setReportMachineId(m.id);
                        }}
                        aria-label={`Open pentest report for ${m.name}`}
                        className="p-1 rounded bg-cyber-bg border border-cyber-border text-cyber-muted hover:text-purple-800 dark:hover:text-purple-300 hover:border-purple-600 transition-all"
                        title="Open Executive Pentest Pre-Report"
                      >
                        <FileText className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
                      </motion.button>

                      {/* Direct PDF Writeup Action Button */}
                      {(hasPdf(m) || hasStoredPdf(m.id)) && (
                        <motion.button
                          whileHover={{ scale: 1.12 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={(e: React.MouseEvent) => {
                            e.stopPropagation();
                            setPdfModalMachineId(m.id);
                            if (soundEnabled) playCyberSound('click');
                          }}
                          aria-label={`Open writeup PDF for ${m.name}`}
                          className="p-1 rounded bg-emerald-50 dark:bg-cyber-emerald/10 border border-emerald-300 dark:border-cyber-emerald/40 text-emerald-900 dark:text-cyber-emerald hover:bg-emerald-500 hover:text-white dark:hover:bg-cyber-emerald dark:hover:text-black transition-all shadow-glow-emerald/20"
                          title={hasStoredPdf(m.id) ? 'View Stored Writeup PDF' : 'View Official HTB PDF'}
                        >
                          <FileText className="w-3.5 h-3.5" />
                        </motion.button>
                      )}

                      <motion.button
                        whileHover={{ scale: 1.12 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={(e: React.MouseEvent) => {
                          e.stopPropagation();
                          setWriteupMachineId(m.id);
                          setActiveTab('writeup');
                          navigate(`/writeup/${m.id}`);
                        }}
                        aria-label={`Open writeup studio for ${m.name}`}
                        className="p-1 rounded bg-cyber-bg border border-cyber-border text-cyber-muted hover:text-cyan-700 dark:hover:text-cyber-cyan hover:border-cyber-cyan transition-all"
                        title="Writeup Studio (Personal Notes Editor)"
                      >
                        <FileText className="w-3.5 h-3.5" />
                      </motion.button>

                      {Boolean(sanitizeExternalUrl(m.roomUrl)) && (
                        <motion.a
                          whileHover={{ scale: 1.12 }}
                          whileTap={{ scale: 0.9 }}
                          href={sanitizeExternalUrl(m.roomUrl)}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Open room page for ${m.name}`}
                          className="p-1 rounded bg-cyber-bg border border-cyber-border text-cyber-muted hover:text-slate-900 dark:hover:text-white transition-all"
                          title="Open Room"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                        </motion.a>
                      )}
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {sortedMachines.length > visibleRows && (
        <div className="p-3 text-center border-t border-cyber-border bg-cyber-bg/50">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => setVisibleRows((prev) => prev + 50)}
            className="px-5 py-2 rounded-lg bg-cyber-card border border-cyber-cyan/40 text-cyber-cyan font-bold text-xs hover:bg-cyber-cyan hover:text-black transition-all shadow-glow-cyan/20"
          >
            SHOW MORE ROWS (+50) — Displaying {visibleRows} of {sortedMachines.length}
          </motion.button>
        </div>
      )}
    </motion.div>
  );
};
