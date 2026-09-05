import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Compass, 
  Search, 
  Copy, 
  Check, 
  Terminal, 
  ShieldAlert, 
  ChevronDown, 
  ChevronRight, 
  Download, 
  Sparkles, 
  Crosshair, 
  Layers, 
  Globe, 
  FolderLock, 
  Key, 
  Database, 
  Network, 
  Cpu, 
  Flame, 
  ExternalLink,
  BookOpen
} from 'lucide-react';
import { useCtfStore } from '../store/useCtfStore';
import { 
  MASTER_METHODOLOGY_FRAMEWORK, 
  SERVICE_BRANCHES, 
  generateApplicablePhases 
} from '../data/methodologyFramework';
import { ServiceBranchType, MethodologyPhase, ChecklistItem } from '../types/checklist';
import { interpolateCommand, playCyberSound } from '../utils/helpers';

export const MethodologyPage: React.FC = () => {
  const navigate = useNavigate();
  const { 
    machines, 
    activeTargetId, 
    globalVars, 
    soundEnabled,
    setActiveTarget,
    startTimer
  } = useCtfStore();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPhaseNumber, setSelectedPhaseNumber] = useState<number | 'all'>('all');
  const [selectedBranch, setSelectedBranch] = useState<ServiceBranchType | 'all'>('all');
  const [expandedPhases, setExpandedPhases] = useState<Record<string, boolean>>({
    'phase-01-surface-mapping': true,
    'phase-02-service-enumeration': true,
  });
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [copiedAllMd, setCopiedAllMd] = useState(false);
  const [targetContextId, setTargetContextId] = useState<string | 'universal'>('universal');

  // Selected Target for context-aware highlighting
  const contextMachine = useMemo(() => {
    if (targetContextId === 'universal') return null;
    return machines.find(m => m.id === targetContextId) || null;
  }, [targetContextId, machines]);

  // Compute phases based on context machine (or full universal framework)
  const displayPhases = useMemo(() => {
    if (contextMachine) {
      return generateApplicablePhases(contextMachine, contextMachine.openPorts || []);
    }
    return MASTER_METHODOLOGY_FRAMEWORK;
  }, [contextMachine]);

  // Toggle Phase Expansion
  const togglePhase = (phaseId: string) => {
    setExpandedPhases(prev => ({
      ...prev,
      [phaseId]: !prev[phaseId]
    }));
    if (soundEnabled) playCyberSound('toggle');
  };

  const expandAll = () => {
    const all: Record<string, boolean> = {};
    displayPhases.forEach(p => { all[p.id] = true; });
    setExpandedPhases(all);
  };

  const collapseAll = () => {
    setExpandedPhases({});
  };

  // Filter items based on search and selected filters
  const filteredPhases = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();

    return displayPhases
      .filter(phase => {
        if (selectedPhaseNumber !== 'all' && phase.phaseNumber !== selectedPhaseNumber) {
          return false;
        }
        return true;
      })
      .map(phase => {
        const matchingSubcats = phase.subcategories
          .filter(subcat => {
            if (selectedBranch !== 'all' && subcat.serviceBranch !== selectedBranch && subcat.serviceBranch !== 'universal') {
              return false;
            }
            return true;
          })
          .map(subcat => {
            const matchingItems = subcat.items.filter(item => {
              if (!q) return true;
              return (
                item.title.toLowerCase().includes(q) ||
                Boolean(item.description && item.description.toLowerCase().includes(q)) ||
                Boolean(item.commandSnippet && item.commandSnippet.toLowerCase().includes(q))
              );
            });

            return {
              ...subcat,
              items: matchingItems,
            };
          })
          .filter(subcat => subcat.items.length > 0);

        return {
          ...phase,
          subcategories: matchingSubcats,
        };
      })
      .filter(phase => phase.subcategories.length > 0);
  }, [displayPhases, selectedPhaseNumber, selectedBranch, searchQuery]);

  // Command Copy Handler
  const handleCopy = (commandSnippet: string, id: string) => {
    const finalCmd = interpolateCommand(commandSnippet, globalVars);
    navigator.clipboard.writeText(finalCmd);
    setCopiedId(id);
    if (soundEnabled) playCyberSound('copy');
    setTimeout(() => setCopiedId(null), 2000);
  };

  // Export Full Methodology as Obsidian/GitBook Markdown
  const handleExportFullMarkdown = () => {
    let md = `# ZEROBOX // UNIVERSAL 8-PHASE PENETRATION TESTING PLAYBOOK\n\n`;
    md += `*Standardized Offensive Methodology & Service Branch Execution Framework*\n\n`;
    md += `**Target IP:** \`${globalVars.targetIp || '10.10.10.X'}\` | **Attacker Host:** \`${globalVars.lhost || '10.10.14.X'}\` | **LPORT:** \`${globalVars.lport || '4444'}\`\n\n`;
    md += `---\n\n`;

    MASTER_METHODOLOGY_FRAMEWORK.forEach(phase => {
      md += `## Phase 0${phase.phaseNumber}: ${phase.title}\n`;
      md += `*${phase.subtitle}*\n\n`;
      md += `${phase.description}\n\n`;

      phase.subcategories.forEach(subcat => {
        md += `### ${subcat.title}\n`;
        if (subcat.serviceBranch) {
          md += `*Branch: \`${subcat.serviceBranch}\`*\n\n`;
        }

        subcat.items.forEach(item => {
          md += `- [ ] **${item.title}**\n`;
          md += `  - *Description:* ${item.description}\n`;
          if (item.commandSnippet) {
            const interpolated = interpolateCommand(item.commandSnippet, globalVars);
            md += `  - *Execution:* \`${interpolated}\`\n`;
          }
          md += `\n`;
        });
      });
      md += `---\n\n`;
    });

    navigator.clipboard.writeText(md);
    setCopiedAllMd(true);
    if (soundEnabled) playCyberSound('copy');
    setTimeout(() => setCopiedAllMd(false), 2500);
  };

  // Branch icons map
  const getBranchIcon = (branch: ServiceBranchType) => {
    switch (branch) {
      case 'web': return <Globe className="w-3.5 h-3.5 text-cyber-cyan" />;
      case 'file_sharing': return <FolderLock className="w-3.5 h-3.5 text-cyber-emerald" />;
      case 'remote_access': return <Key className="w-3.5 h-3.5 text-cyber-amber" />;
      case 'database': return <Database className="w-3.5 h-3.5 text-cyber-purple" />;
      case 'network_mgmt': return <Network className="w-3.5 h-3.5 text-cyber-cyan" />;
      case 'linux_privesc': return <Cpu className="w-3.5 h-3.5 text-cyber-crimson" />;
      case 'windows_privesc': return <Layers className="w-3.5 h-3.5 text-blue-400" />;
      default: return <Compass className="w-3.5 h-3.5 text-cyber-muted" />;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      className="max-w-7xl mx-auto space-y-6 font-mono text-xs pb-20"
    >
      {/* 1. Header Banner */}
      <div className="p-5 rounded-xl border border-cyber-border bg-cyber-card shadow-xl relative overflow-hidden">
        <div className="absolute right-0 top-0 bottom-0 w-96 bg-gradient-to-l from-cyber-cyan/10 to-transparent pointer-events-none" />
        
        <div className="flex flex-wrap items-center justify-between gap-4 relative z-10">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2.5 h-2.5 rounded-full bg-cyber-cyan animate-pulse" />
              <span className="text-[10px] text-cyber-cyan font-bold tracking-widest uppercase">
                METHODOLOGY DIRECTORY // KNOWLEDGE BASE
              </span>
            </div>
            <h1 className="text-2xl font-bold text-white tracking-wide flex items-center gap-2.5">
              <Compass className="w-6 h-6 text-cyber-cyan" />
              <span>THE ATTACK LIFECYCLE & TACTICAL METHODOLOGY PLAYBOOK</span>
            </h1>
            <p className="text-xs text-cyber-muted mt-1 max-w-3xl">
              Universally standardized 8-Phase penetration testing methodology framework coupled with dynamic Service Branches (A–G).
              Commands dynamically interpolate your active attacker IP, target host, and listening ports.
            </p>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              onClick={handleExportFullMarkdown}
              className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-cyber-card border border-cyber-cyan/50 text-cyber-cyan hover:bg-cyber-cyan hover:text-black font-bold text-xs transition-all shadow-glow-cyan/20"
              title="Copy entire 8-Phase Playbook to Obsidian / GitBook Markdown"
            >
              {copiedAllMd ? (
                <>
                  <Check className="w-4 h-4 text-cyber-emerald" />
                  <span className="text-cyber-emerald">Copied Full Playbook!</span>
                </>
              ) : (
                <>
                  <Download className="w-4 h-4" />
                  <span>Export Playbook (.md)</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* 2. Target Context Switcher & Variable Injection Bar */}
      <div className="p-4 rounded-xl border border-cyber-border bg-cyber-bg/90 shadow-md flex flex-wrap items-center justify-between gap-4">
        {/* Context Machine Selector */}
        <div className="flex items-center gap-3 flex-wrap">
          <div className="flex items-center gap-2">
            <Crosshair className="w-4 h-4 text-cyber-emerald" />
            <span className="text-[11px] font-bold text-white uppercase">Target Context:</span>
          </div>

          <select
            value={targetContextId}
            onChange={(e) => setTargetContextId(e.target.value)}
            className="bg-cyber-card border border-cyber-border rounded-lg px-3 py-1.5 text-xs text-cyber-cyan focus:outline-none focus:border-cyber-cyan cursor-pointer"
          >
            <option value="universal">🌐 Universal Reference (All Branches & Phases)</option>
            {machines.slice(0, 50).map(m => (
              <option key={m.id} value={m.id}>
                🎯 {m.name} ({m.platform} - {m.os} - {m.difficulty})
              </option>
            ))}
          </select>

          {contextMachine && (
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded bg-cyber-emerald/10 border border-cyber-emerald/30 text-cyber-emerald text-[11px] font-bold">
                OS: {contextMachine.os}
              </span>
              <button
                onClick={() => navigate(`/target/${contextMachine.id}`)}
                className="flex items-center gap-1 text-cyber-cyan hover:underline text-[11px]"
              >
                <span>Open Target Page</span>
                <ExternalLink className="w-3 h-3" />
              </button>
            </div>
          )}
        </div>

        {/* Global Live Variables Indicator */}
        <div className="flex items-center gap-2 text-[11px] font-mono">
          <span className="text-cyber-muted">Variables:</span>
          <span className="px-2 py-0.5 rounded bg-cyber-card border border-cyber-border text-white">
            TARGET: <strong className="text-cyber-emerald">{globalVars.targetIp || '10.10.10.X'}</strong>
          </span>
          <span className="px-2 py-0.5 rounded bg-cyber-card border border-cyber-border text-white">
            LHOST: <strong className="text-cyber-cyan">{globalVars.lhost || '10.10.14.X'}</strong>
          </span>
          <span className="px-2 py-0.5 rounded bg-cyber-card border border-cyber-border text-white">
            LPORT: <strong className="text-cyber-amber">{globalVars.lport || '4444'}</strong>
          </span>
        </div>
      </div>

      {/* 3. Search & Interactive Phase Stepper / Branch Filter */}
      <div className="space-y-3">
        {/* Search Input */}
        <div className="relative">
          <Search className="w-4 h-4 text-cyber-muted absolute left-3.5 top-3" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search commands, techniques, tools (e.g. ffuf, linpeas, bloodhound, kerberoast, suid)..."
            className="w-full bg-cyber-card border border-cyber-border rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-cyber-muted focus:outline-none focus:border-cyber-cyan shadow-inner"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3.5 top-2.5 text-cyber-muted hover:text-white"
            >
              ✕
            </button>
          )}
        </div>

        {/* 8-Phase Step Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-thin">
          <button
            onClick={() => setSelectedPhaseNumber('all')}
            className={`px-3 py-1.5 rounded-lg border text-xs font-semibold whitespace-nowrap transition-all ${
              selectedPhaseNumber === 'all'
                ? 'bg-cyber-cyan text-black border-cyber-cyan font-bold shadow-glow-cyan'
                : 'bg-cyber-card border-cyber-border text-cyber-muted hover:text-white'
            }`}
          >
            All 8 Phases
          </button>

          {MASTER_METHODOLOGY_FRAMEWORK.map((phase) => {
            const isSelected = selectedPhaseNumber === phase.phaseNumber;
            return (
              <button
                key={phase.id}
                onClick={() => setSelectedPhaseNumber(phase.phaseNumber)}
                className={`px-3 py-1.5 rounded-lg border text-xs whitespace-nowrap transition-all flex items-center gap-1.5 ${
                  isSelected
                    ? 'bg-cyber-cyan text-black border-cyber-cyan font-bold shadow-glow-cyan'
                    : 'bg-cyber-card border-cyber-border text-cyber-muted hover:text-white'
                }`}
              >
                <span className={`font-mono text-[10px] ${isSelected ? 'text-black' : 'text-cyber-cyan'}`}>
                  0{phase.phaseNumber}
                </span>
                <span>{phase.subtitle}</span>
              </button>
            );
          })}
        </div>

        {/* Service Branches Pills (A-G) */}
        <div className="flex items-center justify-between gap-2 flex-wrap">
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
            <span className="text-[10px] text-cyber-muted uppercase font-bold mr-1">Branches:</span>
            <button
              onClick={() => setSelectedBranch('all')}
              className={`px-2.5 py-1 rounded text-[11px] border transition-all ${
                selectedBranch === 'all'
                  ? 'bg-cyber-card text-white border-cyber-emerald font-bold'
                  : 'border-cyber-border text-cyber-muted hover:text-white'
              }`}
            >
              All Branches
            </button>

            {SERVICE_BRANCHES.map((b) => {
              const isSelected = selectedBranch === b.type;
              return (
                <button
                  key={b.type}
                  onClick={() => setSelectedBranch(b.type)}
                  className={`px-2.5 py-1 rounded text-[11px] border transition-all flex items-center gap-1.5 ${
                    isSelected
                      ? 'bg-cyber-card text-white border-cyber-emerald shadow-glow-emerald font-bold'
                      : 'border-cyber-border text-cyber-muted hover:text-white hover:border-cyber-borderGlow'
                  }`}
                >
                  {getBranchIcon(b.type)}
                  <span>{b.name.split(':')[0]}</span>
                </button>
              );
            })}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={expandAll}
              className="text-[10px] text-cyber-muted hover:text-white underline"
            >
              Expand All
            </button>
            <span className="text-cyber-border">|</span>
            <button
              onClick={collapseAll}
              className="text-[10px] text-cyber-muted hover:text-white underline"
            >
              Collapse All
            </button>
          </div>
        </div>
      </div>

      {/* 4. Methodology Phases & Task Playbooks */}
      <div className="space-y-4">
        {filteredPhases.length === 0 ? (
          <div className="p-8 rounded-xl border border-cyber-border bg-cyber-card text-center space-y-2">
            <Compass className="w-10 h-10 text-cyber-muted mx-auto animate-spin-slow" />
            <div className="text-white font-bold">No matching methodology tasks found</div>
            <p className="text-xs text-cyber-muted max-w-sm mx-auto">
              Try adjusting your query or resetting the Phase and Service Branch filters above.
            </p>
          </div>
        ) : (
          filteredPhases.map((phase) => {
            const isExpanded = Boolean(expandedPhases[phase.id]);
            const taskCount = phase.subcategories.reduce((acc, s) => acc + s.items.length, 0);

            return (
              <motion.div
                key={phase.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.08 }}
                transition={{ duration: 0.28 }}
                className="rounded-xl border border-cyber-border bg-cyber-card overflow-hidden shadow-md transition-all"
              >
                {/* Phase Header Accordion */}
                <button
                  onClick={() => togglePhase(phase.id)}
                  className="w-full p-4 flex items-center justify-between gap-4 bg-cyber-bg/60 hover:bg-cyber-bg transition-colors text-left border-b border-cyber-border/70"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-cyber-card border border-cyber-cyan/40 flex items-center justify-center font-bold text-cyber-cyan text-sm shadow-inner">
                      0{phase.phaseNumber}
                    </div>

                    <div>
                      <div className="flex items-center gap-2">
                        <h2 className="text-sm font-bold text-white">{phase.title}</h2>
                        <span className="text-[10px] px-2 py-0.5 rounded bg-cyber-cyan/10 border border-cyber-cyan/30 text-cyber-cyan font-semibold">
                          {phase.subtitle}
                        </span>
                      </div>
                      <p className="text-[11px] text-cyber-muted mt-0.5">{phase.description}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="text-[10px] px-2 py-1 rounded bg-cyber-card border border-cyber-border text-cyber-muted font-mono">
                      {taskCount} micro-tasks
                    </span>
                    {isExpanded ? (
                      <ChevronDown className="w-5 h-5 text-cyber-muted" />
                    ) : (
                      <ChevronRight className="w-5 h-5 text-cyber-muted" />
                    )}
                  </div>
                </button>

                {/* Subcategories & Commands List */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.18 }}
                      className="p-4 space-y-6 bg-cyber-card/40"
                    >
                      {phase.subcategories.map((subcat) => (
                        <div key={subcat.id} className="space-y-2.5">
                          {/* Subcategory Banner */}
                          <div className="flex items-center justify-between border-b border-cyber-border/80 pb-1.5">
                            <div className="flex items-center gap-2">
                              {subcat.serviceBranch && getBranchIcon(subcat.serviceBranch)}
                              <h3 className="font-bold text-cyber-cyan text-xs tracking-wider uppercase">
                                {subcat.title}
                              </h3>
                            </div>

                            {subcat.serviceBranch && subcat.serviceBranch !== 'universal' && (
                              <span className="text-[10px] px-2 py-0.5 rounded bg-cyber-card border border-cyber-border text-cyber-muted font-mono">
                                {subcat.serviceBranch.toUpperCase()}
                              </span>
                            )}
                          </div>

                          {/* Items Grid */}
                          <div className="grid grid-cols-1 gap-2.5">
                            {subcat.items.map((item) => {
                              const isCopied = copiedId === item.id;

                              return (
                                <div
                                  key={item.id}
                                  className="p-3 rounded-lg border border-cyber-border/90 bg-cyber-bg/70 hover:border-cyber-borderGlow transition-all space-y-2 group"
                                >
                                  <div className="flex items-start justify-between gap-3">
                                    <div>
                                      <div className="font-bold text-white text-xs flex items-center gap-2">
                                        <span>{item.title}</span>
                                      </div>
                                      <div className="text-[11px] text-cyber-muted mt-0.5">
                                        {item.description}
                                      </div>
                                    </div>
                                  </div>

                                  {/* Command Snippet Preview */}
                                  {item.commandSnippet && (
                                    <div className="flex items-center justify-between gap-2 p-2 rounded bg-cyber-code border border-cyber-border text-[11px] font-mono group-hover:border-cyber-cyan/40 transition-colors">
                                      <div className="truncate text-cyber-cyan select-all">
                                        {interpolateCommand(item.commandSnippet, globalVars)}
                                      </div>

                                      <button
                                        onClick={() => handleCopy(item.commandSnippet!, item.id)}
                                        className="flex items-center gap-1 px-2.5 py-1 rounded bg-cyber-bg hover:bg-cyber-card border border-cyber-border text-cyber-muted hover:text-white flex-shrink-0 transition-all font-semibold"
                                        title="Copy command to clipboard"
                                      >
                                        {isCopied ? (
                                          <>
                                            <Check className="w-3.5 h-3.5 text-cyber-emerald" />
                                            <span className="text-cyber-emerald">Copied</span>
                                          </>
                                        ) : (
                                          <>
                                            <Copy className="w-3.5 h-3.5" />
                                            <span>Copy</span>
                                          </>
                                        )}
                                      </button>
                                    </div>
                                  )}
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })
        )}
      </div>
    </motion.div>
  );
};

export default MethodologyPage;
