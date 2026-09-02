import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Crosshair, 
  Terminal, 
  FileText, 
  BarChart3, 
  Kanban, 
  Table, 
  LayoutGrid, 
  ChevronLeft, 
  ChevronRight,
  Flame,
  Award,
  Radio,
  Compass,
  GraduationCap,
  Share2
} from 'lucide-react';
import { useCtfStore } from '../../store/useCtfStore';
import { playCyberSound } from '../../utils/helpers';

export const Sidebar: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const { 
    activeTab, 
    setActiveTab, 
    viewMode, 
    setViewMode, 
    machines, 
    soundEnabled 
  } = useCtfStore();

  const totalMachines = machines.length;
  const rootedMachines = machines.filter(m => m.status === 'root' || m.status === 'completed').length;
  const footholdMachines = machines.filter(m => m.status === 'foothold').length;
  const pwnPercentage = totalMachines > 0 ? Math.round((rootedMachines / totalMachines) * 100) : 0;

  const navItems = [
    {
      id: 'tracker',
      path: '/tracker',
      label: 'Lab & Target Tracker',
      icon: Crosshair,
      badge: `${rootedMachines}/${totalMachines}`,
      badgeColor: 'text-cyber-emerald bg-cyber-emerald/10 border-cyber-emerald/30',
    },
    {
      id: 'methodology',
      path: '/methodology',
      label: 'Attack Methodology',
      icon: Compass,
      sublabel: '8-Phase & Branches A-G',
    },
    {
      id: 'cheatsheet',
      path: '/cheatsheets',
      label: 'Offensive Cheatsheets',
      icon: Terminal,
      sublabel: 'RevShells & Payloads',
    },
    {
      id: 'writeup',
      path: '/writeup',
      label: 'Writeup Studio',
      icon: FileText,
      sublabel: 'Obsidian / GitBook',
    },
    {
      id: 'analytics',
      path: '/analytics',
      label: 'Skill Radar & Analytics',
      icon: BarChart3,
      sublabel: 'Heatmap & Matrix',
    },
    {
      id: 'exam',
      path: '/exam',
      label: '24h Exam Simulator',
      icon: GraduationCap,
      badge: 'OSCP/CPTS',
      badgeColor: 'text-purple-400 bg-purple-950/40 border-purple-800/50',
    },
  ] as const;

  const handleTabClick = (item: typeof navItems[number]) => {
    setActiveTab(item.id);
    navigate(item.path);
    if (soundEnabled) playCyberSound('click');
  };

  return (
    <aside
      className={`hidden md:flex relative flex-col border-r border-cyber-border bg-cyber-bg transition-all duration-300 z-30 ${
        collapsed ? 'w-16' : 'w-72'
      }`}
    >
      {/* Collapse Toggle Button */}
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="absolute -right-3 top-5 z-20 flex h-6 w-6 items-center justify-center rounded-full border border-cyber-border bg-cyber-card text-cyber-muted hover:text-white hover:border-cyber-cyan transition-all shadow-md"
        title={collapsed ? 'Expand Sidebar' : 'Collapse Sidebar'}
      >
        {collapsed ? <ChevronRight className="h-3.5 w-3.5" /> : <ChevronLeft className="h-3.5 w-3.5" />}
      </button>

      {/* Main Navigation List */}
      <div className="flex-1 px-2.5 py-4 space-y-1.5 font-mono">
        <div className={`px-2 text-[10px] uppercase font-bold tracking-wider text-cyber-muted mb-2 ${collapsed ? 'hidden' : 'block'}`}>
          OPERATIONS // MODULES
        </div>

        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = 
            location.pathname === item.path || 
            (item.id === 'tracker' && (location.pathname === '/' || location.pathname.startsWith('/target')));
          return (
            <motion.button
              key={item.id}
              whileTap={{ scale: 0.96 }}
              onClick={() => handleTabClick(item)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-xs transition-colors relative group ${
                isActive
                  ? 'bg-cyber-card text-white border border-cyber-emerald/40 shadow-glow-emerald/20'
                  : 'text-cyber-muted hover:text-white hover:bg-cyber-card/50 border border-transparent'
              }`}
            >
              {isActive && (
                <motion.span 
                  layoutId="activeSidebarIndicator"
                  className="absolute left-0 top-1.5 bottom-1.5 w-1 rounded-r bg-cyber-emerald shadow-[0_0_10px_#10B981]"
                  transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                />
              )}
              <motion.div
                whileHover={{ scale: 1.15 }}
                transition={{ duration: 0.15 }}
                className="flex-shrink-0"
              >
                <Icon className={`w-4 h-4 ${
                  isActive ? 'text-cyber-emerald' : 'text-cyber-muted group-hover:text-cyber-text'
                }`} />
              </motion.div>
              
              {!collapsed && (
                <div className="flex-1 flex items-center justify-between min-w-0 text-left">
                  <span className="font-semibold truncate mr-2">{item.label}</span>
                  {'badge' in item && item.badge && (
                    <span className={`text-[10px] px-2 py-0.5 rounded border flex-shrink-0 font-mono font-bold whitespace-nowrap shadow-sm ${item.badgeColor}`}>
                      {item.badge}
                    </span>
                  )}
                </div>
              )}
            </motion.button>
          );
        })}

        {/* View switcher when in Tracker view */}
        {activeTab === 'tracker' && !collapsed && (
          <div className="mt-6 pt-4 border-t border-cyber-border/70">
            <div className="px-2 text-[10px] uppercase font-bold tracking-wider text-cyber-muted mb-2">
              LAYOUT MODES
            </div>
            <div className="grid grid-cols-4 gap-1 bg-cyber-card p-1 rounded-lg border border-cyber-border">
              <button
                onClick={() => {
                  setViewMode('kanban');
                  if (soundEnabled) playCyberSound('click');
                }}
                className={`flex flex-col items-center justify-center py-1.5 rounded text-[10px] transition-all ${
                  viewMode === 'kanban'
                    ? 'bg-cyber-emerald/20 text-cyber-emerald border border-cyber-emerald/40 font-bold'
                    : 'text-cyber-muted hover:text-white'
                }`}
                title="Kanban Board View"
              >
                <Kanban className="w-3.5 h-3.5 mb-0.5" />
                <span>Kanban</span>
              </button>
              <button
                onClick={() => {
                  setViewMode('table');
                  if (soundEnabled) playCyberSound('click');
                }}
                className={`flex flex-col items-center justify-center py-1.5 rounded text-[10px] transition-all ${
                  viewMode === 'table'
                    ? 'bg-cyber-emerald/20 text-cyber-emerald border border-cyber-emerald/40 font-bold'
                    : 'text-cyber-muted hover:text-white'
                }`}
                title="Data Table View"
              >
                <Table className="w-3.5 h-3.5 mb-0.5" />
                <span>Table</span>
              </button>
              <button
                onClick={() => {
                  setViewMode('grid');
                  if (soundEnabled) playCyberSound('click');
                }}
                className={`flex flex-col items-center justify-center py-1.5 rounded text-[10px] transition-all ${
                  viewMode === 'grid'
                    ? 'bg-cyber-emerald/20 text-cyber-emerald border border-cyber-emerald/40 font-bold'
                    : 'text-cyber-muted hover:text-white'
                }`}
                title="Grid Cards View"
              >
                <LayoutGrid className="w-3.5 h-3.5 mb-0.5" />
                <span>Cards</span>
              </button>
              <button
                onClick={() => {
                  setViewMode('graph');
                  if (soundEnabled) playCyberSound('click');
                }}
                className={`flex flex-col items-center justify-center py-1.5 rounded text-[10px] transition-all ${
                  viewMode === 'graph'
                    ? 'bg-cyber-emerald/20 text-cyber-emerald border border-cyber-emerald/40 font-bold'
                    : 'text-cyber-muted hover:text-white'
                }`}
                title="BloodHound Attack Graph View"
              >
                <Share2 className="w-3.5 h-3.5 mb-0.5" />
                <span>Graph</span>
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Footer / Mission Readiness Stats */}
      {!collapsed ? (
        <div className="p-3 border-t border-cyber-border bg-cyber-card/40 font-mono text-xs">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-[10px] text-cyber-muted uppercase tracking-wider flex items-center gap-1">
              <Flame className="w-3 h-3 text-cyber-amber" /> PWN PROGRESS
            </span>
            <span className="text-cyber-emerald font-bold">{pwnPercentage}%</span>
          </div>
          
          <div className="w-full bg-cyber-bg rounded-full h-1.5 border border-cyber-border overflow-hidden mb-2.5">
            <div
              className="h-full bg-gradient-to-r from-cyber-emerald via-cyber-cyan to-cyber-purple transition-all duration-500"
              style={{ width: `${Math.min(100, Math.max(0, pwnPercentage))}%` }}
            />
          </div>

          <div className="grid grid-cols-2 gap-1.5 text-[10px]">
            <div className="bg-cyber-bg/70 px-2 py-1 rounded border border-cyber-border/70 flex items-center justify-between">
              <span className="text-cyber-muted">Rooted:</span>
              <span className="text-cyber-emerald font-bold">{rootedMachines}</span>
            </div>
            <div className="bg-cyber-bg/70 px-2 py-1 rounded border border-cyber-border/70 flex items-center justify-between">
              <span className="text-cyber-muted">Footholds:</span>
              <span className="text-cyber-cyan font-bold">{footholdMachines}</span>
            </div>
          </div>
        </div>
      ) : (
        <div className="p-2 border-t border-cyber-border flex flex-col items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-cyber-card border border-cyber-emerald/30 flex items-center justify-center" title={`${rootedMachines} Rooted`}>
            <Award className="w-4 h-4 text-cyber-emerald" />
          </div>
        </div>
      )}
    </aside>
  );
};
