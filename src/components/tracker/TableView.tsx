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
import { formatSeconds, playCyberSound, triggerRootCelebration, sanitizeExternalUrl } from '../../utils/helpers';
import { PlatformBadge, PlatformIcon } from '../common/PlatformBadge';
import { OsBadge } from '../common/OsBadge';
import { EditableIpBadge } from '../common/EditableIpBadge';
import { CategoryBadge } from '../common/CategoryBadge';

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
  } = useCtfStore();

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

  const sortedMachines = useMemo(() => {
    if (!customColumnSorted) {
      return filteredMachines;
    }
    const list = [...filteredMachines];
    list.sort((a, b) => {
      let valA = a[sortField];
      let valB = b[sortField];
      if (typeof valA === 'string' && typeof valB === 'string') {
        return sortAsc ? valA.localeCompare(valB) : valB.localeCompare(valA);
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

  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>, machineId: string) => {
    const newStatus = e.target.value as PipelineStatus;
    updateMachineStatus(machineId, newStatus);
    if (newStatus === 'root' || newStatus === 'completed') {
      triggerRootCelebration();
      if (soundEnabled) playCyberSound('root');
    }
  };

  const statusOptions: { value: PipelineStatus; label: string }[] = [
    { value: 'backlog', label: 'Backlog' },
    { value: 'recon', label: 'Recon' },
    { value: 'foothold', label: 'Foothold' },
    { value: 'root', label: 'Root Pwned' },
    { value: 'completed', label: 'Completed' },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="rounded-xl border border-cyber-border bg-cyber-card overflow-hidden shadow-xl font-mono text-xs pb-6"
    >
      <div className="overflow-x-auto max-h-[calc(100vh-230px)]">
        <table className="w-full text-left border-collapse">
          <thead className="sticky top-0 z-10 bg-cyber-bg border-b border-cyber-border uppercase text-[10px] text-cyber-muted font-bold tracking-wider">
            <tr>
              <th className="py-3 px-4 cursor-pointer hover:text-white transition-colors" onClick={() => handleSort('name')}>
                <div className="flex items-center gap-1.5">
                  <span>TARGET</span>
                  <ArrowUpDown className="w-3 h-3" />
                </div>
              </th>
              <th className="py-3 px-3 cursor-pointer hover:text-white transition-colors" onClick={() => handleSort('platform')}>
                <div className="flex items-center gap-1.5">
                  <span>PLATFORM</span>
                  <ArrowUpDown className="w-3 h-3" />
                </div>
              </th>
              <th className="py-3 px-3 cursor-pointer hover:text-white transition-colors" onClick={() => handleSort('os')}>
                <div className="flex items-center gap-1.5">
                  <span>OS</span>
                  <ArrowUpDown className="w-3 h-3" />
                </div>
              </th>
              <th className="py-3 px-3 cursor-pointer hover:text-white transition-colors" onClick={() => handleSort('difficulty')}>
                <div className="flex items-center gap-1.5">
                  <span>DIFFICULTY</span>
                  <ArrowUpDown className="w-3 h-3" />
                </div>
              </th>
              <th className="py-3 px-3 cursor-pointer hover:text-white transition-colors" onClick={() => handleSort('status')}>
                <div className="flex items-center gap-1.5">
                  <span>STATUS</span>
                  <ArrowUpDown className="w-3 h-3" />
                </div>
              </th>
              <th className="py-3 px-3">FLAGS</th>
              <th className="py-3 px-3 cursor-pointer hover:text-white transition-colors" onClick={() => handleSort('timeSpentSeconds')}>
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
                <motion.tr
                  key={m.id}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.05 }}
                  transition={{ 
                    duration: 0.22, 
                    delay: Math.min((idx % 12) * 0.02, 0.2),
                    ease: [0.25, 0.1, 0.25, 1.0]
                  }}
                  className={`hover:bg-cyber-cardHover transition-colors group cursor-pointer ${
                    isActiveTarget ? 'bg-cyber-emerald/5 border-l-2 border-l-cyber-emerald' : ''
                  }`}
                  onClick={() => setSelectedMachineId(m.id)}
                >
                  {/* Target Name & IP */}
                  <td className="py-2.5 px-4">
                    <div className="flex items-center gap-2.5">
                      <PlatformIcon platform={m.platform} className="w-4 h-4 flex-shrink-0" />
                      <div>
                        <div className="font-bold text-white group-hover:text-cyber-cyan transition-colors">
                          {m.name}
                        </div>
                        <EditableIpBadge machineId={m.id} initialIp={m.ip} size="xs" className="mt-0.5" />
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
                  </td>

                  {/* Status Pipeline Dropdown */}
                  <td className="py-2.5 px-3" onClick={(e) => e.stopPropagation()}>
                    <select
                      value={m.status}
                      onChange={(e) => handleStatusChange(e, m.id)}
                      className={`bg-cyber-bg px-2 py-1 rounded border text-[10px] font-semibold focus:outline-none transition-colors ${
                        m.status === 'root' || m.status === 'completed'
                          ? 'border-cyber-emerald text-cyber-emerald'
                          : m.status === 'foothold'
                          ? 'border-cyber-amber text-cyber-amber'
                          : m.status === 'recon'
                          ? 'border-cyber-cyan text-cyber-cyan'
                          : 'border-cyber-border text-cyber-muted'
                      }`}
                    >
                      {statusOptions.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                  </td>

                  {/* Flags */}
                  <td className="py-2.5 px-3" onClick={(e) => e.stopPropagation()}>
                    <div className="flex items-center gap-1.5">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => toggleUserFlag(m.id)}
                        className={`px-1.5 py-0.5 rounded border text-[10px] flex items-center gap-0.5 font-bold transition-all ${
                          hasUser
                            ? 'bg-cyber-cyan/10 border-cyber-cyan/50 text-cyber-cyan shadow-glow-cyan/20'
                            : 'bg-cyber-bg border-cyber-border text-cyber-muted hover:text-white'
                        }`}
                        title="Toggle User Flag"
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
                        className={`px-1.5 py-0.5 rounded border text-[10px] flex items-center gap-0.5 font-bold transition-all ${
                          hasRoot
                            ? 'bg-cyber-emerald/10 border-cyber-emerald/50 text-cyber-emerald shadow-glow-emerald/20'
                            : 'bg-cyber-bg border-cyber-border text-cyber-muted hover:text-white'
                        }`}
                        title="Toggle Root Flag"
                      >
                        <Flag className="w-2.5 h-2.5" /> R
                      </motion.button>
                    </div>
                  </td>

                  {/* Time */}
                  <td className="py-2.5 px-3">
                    <span className="text-cyber-muted font-mono">{formatSeconds(m.timeSpentSeconds)}</span>
                  </td>

                  {/* Tracks */}
                  <td className="py-2.5 px-3">
                    <div className="flex items-center gap-1">
                      {m.certifications.map((c) => (
                        <span key={c} className="text-[9px] px-1 py-0.2 rounded bg-cyber-purple/10 border border-cyber-purple/30 text-cyber-purple font-bold">
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
                        className={`p-1 rounded border transition-all ${
                          isActiveTarget
                            ? 'bg-cyber-emerald/20 text-cyber-emerald border-cyber-emerald shadow-glow-emerald/20'
                            : 'bg-cyber-bg border-cyber-border text-cyber-muted hover:text-white hover:border-cyber-emerald'
                        }`}
                        title="Engage Target"
                      >
                        <Crosshair className="w-3.5 h-3.5" />
                      </motion.button>

                      <motion.button
                        whileHover={{ scale: 1.12 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setSelectedMachineId(m.id)}
                        className="p-1 rounded bg-cyber-bg border border-cyber-border text-cyber-muted hover:text-cyber-cyan hover:border-cyber-cyan transition-all"
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
                        className="p-1 rounded bg-cyber-bg border border-cyber-border text-cyber-muted hover:text-cyber-cyan hover:border-cyber-cyan transition-all"
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
                        className="p-1 rounded bg-cyber-bg border border-cyber-border text-cyber-muted hover:text-purple-300 hover:border-purple-600 transition-all"
                        title="Open Executive Pentest Pre-Report"
                      >
                        <FileText className="w-3.5 h-3.5 text-purple-400" />
                      </motion.button>

                      <motion.button
                        whileHover={{ scale: 1.12 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={(e: React.MouseEvent) => {
                          e.stopPropagation();
                          setWriteupMachineId(m.id);
                          setActiveTab('writeup');
                          navigate(`/writeup/${m.id}`);
                        }}
                        className="p-1 rounded bg-cyber-bg border border-cyber-border text-cyber-muted hover:text-cyber-cyan hover:border-cyber-cyan transition-all"
                        title="Writeup Studio"
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
                          className="p-1 rounded bg-cyber-bg border border-cyber-border text-cyber-muted hover:text-white transition-all"
                          title="Open Room"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                        </motion.a>
                      )}
                    </div>
                  </td>
                </motion.tr>
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
