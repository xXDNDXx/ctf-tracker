import React, { useState, useMemo, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Terminal, 
  Copy, 
  Check, 
  Search, 
  Star, 
  Plus, 
  Trash2, 
  Radio, 
  Code,
  BookOpen,
  Sparkles,
  ChevronDown,
  ChevronUp,
  ChevronRight,
  Layers,
  Compass,
  FileText,
  Languages,
  ArrowRightLeft,
  Folder,
  FolderOpen,
  Table,
  LayoutList,
  Zap,
  Filter
} from 'lucide-react';
import { useCtfStore } from '../../store/useCtfStore';
import { 
  CHEATSHEET_CATEGORIES, 
  REVERSE_SHELL_TEMPLATES 
} from '../../data/cheatsheetsData';
import { interpolateCommand, playCyberSound } from '../../utils/helpers';
import { 
  CPTS_NOTES, 
  CptsNoteEntry, 
  CptsTopicGroup,
  getCptsCategories, 
  getCategoryTopicGroups,
  parseSubCategory,
  searchCptsNotes,
  getNoteById
} from '../../utils/obsidianManualUtils';
import { ObsidianNoteViewer } from './ObsidianNoteViewer';

export type CptsLanguageMode = 'en' | 'he';
export type CptsDisplayLayout = 'cards' | 'quick-index' | 'grouped';

interface CheatsheetViewProps {
  defaultMode?: 'tactical' | 'cpts-manual';
}

export const CheatsheetView: React.FC<CheatsheetViewProps> = ({ defaultMode }) => {
  const location = useLocation();
  const {
    cheatsheets,
    globalVars,
    setGlobalVars,
    addCustomCommand,
    deleteCustomCommand,
    toggleStarCommand,
    soundEnabled,
  } = useCtfStore();

  const isManualRoute = defaultMode === 'cpts-manual' || 
    location.pathname.includes('note') || 
    location.pathname.includes('manual') || 
    location.search.includes('manual') || 
    location.search.includes('cpts');

  const [viewMode, setViewMode] = useState<'tactical' | 'cpts-manual'>(isManualRoute ? 'cpts-manual' : 'tactical');
  const [cptsLangMode, setCptsLangMode] = useState<CptsLanguageMode>('en');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedCptsCategory, setSelectedCptsCategory] = useState('ALL');
  const [selectedCptsSubCategory, setSelectedCptsSubCategory] = useState<string>('ALL');
  const [expandedSidebarCategories, setExpandedSidebarCategories] = useState<Record<string, boolean>>({
    '01 Information Gathering & Recon': true,
  });
  const [cptsDisplayLayout, setCptsDisplayLayout] = useState<CptsDisplayLayout>('cards');
  const [expandedIndexRows, setExpandedIndexRows] = useState<Record<string, boolean>>({});
  const [collapsedGroupSections, setCollapsedGroupSections] = useState<Record<string, boolean>>({});
  const [jumpDropdownOpen, setJumpDropdownOpen] = useState(false);
  const [jumpSearchQuery, setJumpSearchQuery] = useState('');
  const [highlightedNoteId, setHighlightedNoteId] = useState<string | null>(null);
  const [cptsLimit, setCptsLimit] = useState(30);
  const [expandedNotes, setExpandedNotes] = useState<Record<string, boolean>>({});
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const [activeObsidianNote, setActiveObsidianNote] = useState<CptsNoteEntry | null>(null);

  // Sync viewMode and activeObsidianNote when route or search query changes
  useEffect(() => {
    if (defaultMode) {
      setViewMode(defaultMode);
    } else if (location.pathname.includes('note') || location.pathname.includes('manual') || location.search.includes('manual') || location.search.includes('cpts')) {
      setViewMode('cpts-manual');
    }

    // Check for direct note opening via query parameter, e.g. ?note=cpts-...
    const params = new URLSearchParams(location.search);
    const noteParam = params.get('note');
    if (noteParam) {
      const found = getNoteById(noteParam);
      if (found) {
        setActiveObsidianNote(found);
        setViewMode('cpts-manual');
      }
    }
  }, [defaultMode, location.pathname, location.search]);

  // New Custom Command Form Modal state
  const [isNewModalOpen, setIsNewModalOpen] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newCategory, setNewCategory] = useState('linux-privesc');
  const [newDesc, setNewDesc] = useState('');
  const [newTemplate, setNewTemplate] = useState('');
  const [newTags, setNewTags] = useState('');

  // Reverse shell builder state (inspired by 0dayCTF/reverse-shell-generator)
  const [selectedRevShellIdx, setSelectedRevShellIdx] = useState(0);
  const [revShellOsFilter, setRevShellOsFilter] = useState<'All' | 'Linux' | 'Windows'>('All');
  const [revShellSelectedShell, setRevShellSelectedShell] = useState<string>('/bin/bash');
  const [revShellListenerType, setRevShellListenerType] = useState<
    'nc' | 'rlwrap' | 'ncat' | 'ncat-ssl' | 'rustcat' | 'pwncat' | 'socat' | 'powercat' | 'windows-nc'
  >('nc');
  const [revShellEncoding, setRevShellEncoding] = useState<'raw' | 'url' | 'double-url' | 'base64'>('raw');
  const [notesTextDirection, setNotesTextDirection] = useState<'auto' | 'rtl' | 'ltr'>('auto');

  const handleIncrementPort = () => {
    const current = parseInt(globalVars.lport, 10) || 4444;
    setGlobalVars({ lport: String(current + 1) });
    if (soundEnabled) playCyberSound('flag');
  };

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    if (soundEnabled) playCyberSound('copy');
    setTimeout(() => {
      setCopiedId(null);
    }, 2000);
  };

  const handleCopyAllNoteCommands = (note: CptsNoteEntry) => {
    if (!note.commands || note.commands.length === 0) return;
    const interpolated = note.commands.map(cmd => interpolateCommand(cmd, globalVars)).join('\n\n');
    handleCopy(interpolated, `all-${note.id}`);
  };

  const handleCreateCustom = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim() || !newTemplate.trim()) return;

    addCustomCommand({
      title: newTitle.trim(),
      category: newCategory,
      description: newDesc.trim(),
      commandTemplate: newTemplate.trim(),
      tags: newTags.split(',').map((t) => t.trim()).filter(Boolean),
    });

    if (soundEnabled) playCyberSound('root');
    setIsNewModalOpen(false);
    setNewTitle('');
    setNewDesc('');
    setNewTemplate('');
    setNewTags('');
  };

  // Filter cheatsheet commands
  const filteredCommands = useMemo(() => {
    return cheatsheets.filter((cmd) => {
      if (selectedCategory === 'starred') {
        if (!cmd.isStarred) return false;
      } else if (selectedCategory === 'custom') {
        if (!cmd.isCustom) return false;
      } else if (selectedCategory !== 'all' && selectedCategory !== 'revshell') {
        if (cmd.category !== selectedCategory) return false;
      }

      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchTitle = cmd.title.toLowerCase().includes(q);
        const matchDesc = cmd.description.toLowerCase().includes(q);
        const matchCmd = cmd.commandTemplate.toLowerCase().includes(q);
        const matchTag = cmd.tags.some((t) => t.toLowerCase().includes(q));
        if (!matchTitle && !matchDesc && !matchCmd && !matchTag) return false;
      }

      return true;
    });
  }, [cheatsheets, selectedCategory, searchQuery]);

  // CPTS Field Manual categories & queries
  const cptsCategories = useMemo(() => getCptsCategories(), []);

  const filteredCptsNotes = useMemo(() => {
    return searchCptsNotes(searchQuery, selectedCptsCategory, selectedCptsSubCategory);
  }, [searchQuery, selectedCptsCategory, selectedCptsSubCategory]);

  const activeCategoryTopicGroups = useMemo(() => {
    return getCategoryTopicGroups(selectedCptsCategory);
  }, [selectedCptsCategory]);

  const activeTopicLeaves = useMemo(() => {
    if (selectedCptsSubCategory === 'ALL') return [];
    const group = activeCategoryTopicGroups.find(g => g.group === selectedCptsSubCategory);
    return group ? group.leaves : [];
  }, [activeCategoryTopicGroups, selectedCptsSubCategory]);

  const groupedCptsNotes = useMemo(() => {
    if (cptsDisplayLayout !== 'grouped') return [];
    const map: Record<string, CptsNoteEntry[]> = {};
    for (const note of filteredCptsNotes) {
      const { group } = parseSubCategory(note.subCategory);
      if (!map[group]) map[group] = [];
      map[group].push(note);
    }
    return Object.entries(map).map(([group, notes]) => ({
      group,
      count: notes.length,
      notes
    })).sort((a, b) => b.count - a.count);
  }, [filteredCptsNotes, cptsDisplayLayout]);

  const visibleCptsNotes = useMemo(() => {
    return filteredCptsNotes.slice(0, cptsLimit);
  }, [filteredCptsNotes, cptsLimit]);

  const totalCptsCommands = useMemo(() => {
    return filteredCptsNotes.reduce((sum, n) => sum + (n.commands ? n.commands.length : 0), 0);
  }, [filteredCptsNotes]);

  const handleJumpToNote = (note: CptsNoteEntry) => {
    setJumpDropdownOpen(false);
    setJumpSearchQuery('');
    setHighlightedNoteId(note.id);
    if (soundEnabled) playCyberSound('root');

    // If note is in another category or subcategory, switch so it is visible
    if (selectedCptsCategory !== 'ALL' && selectedCptsCategory !== note.category) {
      setSelectedCptsCategory(note.category);
      setSelectedCptsSubCategory('ALL');
    } else if (selectedCptsSubCategory !== 'ALL') {
      const { group } = parseSubCategory(note.subCategory);
      if (selectedCptsSubCategory !== group) {
        setSelectedCptsSubCategory('ALL');
      }
    }

    // Ensure note is within pagination window
    setCptsLimit((prev) => Math.max(prev, 60));

    // Auto expand row if in quick-index mode
    if (cptsDisplayLayout === 'quick-index') {
      setExpandedIndexRows((prev) => ({ ...prev, [note.id]: true }));
    }

    // Scroll smoothly to element
    setTimeout(() => {
      const el = document.getElementById(`cpts-note-${note.id}`);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 150);

    setTimeout(() => {
      setHighlightedNoteId(null);
    }, 3000);
  };

  // Filtered reverse shells by OS
  const availableRevShells = useMemo(() => {
    if (revShellOsFilter === 'All') return REVERSE_SHELL_TEMPLATES;
    return REVERSE_SHELL_TEMPLATES.filter(
      t => t.platform === 'Both' || t.platform === revShellOsFilter
    );
  }, [revShellOsFilter]);

  const activeRevShell = availableRevShells[selectedRevShellIdx] || availableRevShells[0] || REVERSE_SHELL_TEMPLATES[0];

  // Dynamic Listener Command based on selected listener type (0dayCTF suite)
  const computedListenerCmd = useMemo(() => {
    const port = globalVars.lport || '4444';
    switch (revShellListenerType) {
      case 'rlwrap':
        return `rlwrap nc -lvnp ${port}`;
      case 'ncat':
        return `ncat -lvnp ${port}`;
      case 'ncat-ssl':
        return `ncat --ssl -lvnp ${port}`;
      case 'rustcat':
        return `rcat -lp ${port}`;
      case 'pwncat':
        return `pwncat-cs -lp ${port}`;
      case 'socat':
        return `socat file:\`tty\`,raw,echo=0 TCP-L:${port}`;
      case 'powercat':
        return `powercat -l -p ${port}`;
      case 'windows-nc':
        return `nc.exe -lvnp ${port}`;
      case 'nc':
      default:
        return `nc -lvnp ${port}`;
    }
  }, [revShellListenerType, globalVars.lport]);

  // Compute final payload with optional encoding & dynamic shell replacement
  const computedPayloadCmd = useMemo(() => {
    let base = interpolateCommand(activeRevShell.command, globalVars);
    base = base.replace(/{shell}/g, revShellSelectedShell);
    if (revShellEncoding === 'url') {
      return encodeURIComponent(base);
    } else if (revShellEncoding === 'double-url') {
      return encodeURIComponent(encodeURIComponent(base));
    } else if (revShellEncoding === 'base64') {
      try {
        return btoa(base);
      } catch (e) {
        return base;
      }
    }
    return base;
  }, [activeRevShell, globalVars, revShellEncoding, revShellSelectedShell]);

  return (
    <div className="space-y-6 w-full font-mono pb-12">
      {/* Top Banner & Dynamic Variable Tuning Station */}
      <motion.div 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="p-4 rounded-xl border border-cyber-border bg-cyber-card/90 shadow-md flex flex-wrap items-center justify-between gap-4"
      >
        <div className="space-y-2">
          <div className="flex items-center gap-3 flex-wrap">
            <h1 className="text-lg font-bold text-white tracking-wider flex items-center gap-2">
              <Terminal className="w-5 h-5 text-cyber-cyan" />
              DYNAMIC OFFENSIVE CHEATSHEETS & PAYLOAD LAB
            </h1>

            {/* Mode Switcher Pill Group */}
            <div className="flex items-center gap-1 bg-cyber-bg p-1 rounded-lg border border-cyber-border text-xs">
              <button
                type="button"
                onClick={() => {
                  setViewMode('tactical');
                  setSearchQuery('');
                }}
                className={`px-3 py-1 rounded font-bold transition-all flex items-center gap-1.5 ${
                  viewMode === 'tactical'
                    ? 'bg-cyber-cyan text-black shadow-glow-cyan'
                    : 'text-cyber-muted hover:text-white'
                }`}
              >
                <Terminal className="w-3.5 h-3.5" />
                <span>Tactical Snippets ({cheatsheets.length})</span>
              </button>
              <button
                type="button"
                onClick={() => {
                  setViewMode('cpts-manual');
                  setSearchQuery('');
                }}
                className={`px-3 py-1 rounded font-bold transition-all flex items-center gap-1.5 ${
                  viewMode === 'cpts-manual'
                    ? 'bg-purple-500 text-black shadow-md shadow-purple-500/30'
                    : 'text-purple-300 hover:text-white hover:bg-purple-950/40'
                }`}
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>CPTS Field Manual ({CPTS_NOTES.length})</span>
              </button>
            </div>
          </div>

          <p className="text-xs text-cyber-muted">
            {viewMode === 'tactical'
              ? 'Real-time parameter injection across network scanning, web exploitation, Active Directory, and reverse shells.'
              : "Daniel Dayan's comprehensive 414 Obsidian field manual notes & 1,574 battle-tested offensive commands with dynamic parameter injection."}
          </p>
        </div>

        {/* Global Parameter Quick Tuning */}
        <div className="flex flex-wrap items-center gap-2 bg-cyber-bg p-1.5 px-3 rounded-lg border border-cyber-border text-xs">
          <div className="flex items-center gap-1.5">
            <span className="text-cyber-muted text-[10px]">LHOST:</span>
            <input
              type="text"
              id="cheatsheet-lhost-input"
              name="cheatsheet-lhost"
              aria-label="Attacker Host LHOST"
              value={globalVars.lhost}
              onChange={(e) => setGlobalVars({ lhost: e.target.value })}
              className="w-28 bg-cyber-card px-2 py-1 rounded border border-cyber-border text-white text-xs focus:outline-none focus:border-cyber-cyan transition-all"
            />
          </div>

          <div className="flex items-center gap-1.5">
            <span className="text-cyber-muted text-[10px]">LPORT:</span>
            <input
              type="text"
              id="cheatsheet-lport-input"
              name="cheatsheet-lport"
              aria-label="Attacker Port LPORT"
              value={globalVars.lport}
              onChange={(e) => setGlobalVars({ lport: e.target.value })}
              className="w-16 bg-cyber-card px-2 py-1 rounded border border-cyber-border text-white text-xs focus:outline-none focus:border-cyber-cyan transition-all"
            />
          </div>

          <div className="flex items-center gap-1.5">
            <span className="text-cyber-muted text-[10px]">TARGET:</span>
            <input
              type="text"
              id="cheatsheet-target-input"
              name="cheatsheet-target"
              aria-label="Target IP Address"
              value={globalVars.targetIp}
              onChange={(e) => setGlobalVars({ targetIp: e.target.value })}
              className="w-28 bg-cyber-card px-2 py-1 rounded border border-cyber-border text-cyber-emerald font-bold text-xs focus:outline-none focus:border-cyber-emerald transition-all"
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsNewModalOpen(true)}
            className="flex items-center gap-1 px-3 py-1 rounded bg-cyber-cyan/10 border border-cyber-cyan/40 text-cyber-cyan hover:bg-cyber-cyan hover:text-black font-semibold transition-all ml-1 shadow-glow-cyan/20"
          >
            <Plus className="w-3.5 h-3.5" /> Add Snippet
          </motion.button>
        </div>
      </motion.div>

      {/* Main Cheatsheet Workspace: Sidebar Categories + Commands Panel */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 items-start">
        
        {/* Left Column: Categories & Filters */}
        <div className="space-y-3">
          <div className="p-3 rounded-xl border border-cyber-border bg-cyber-card shadow-md space-y-1">
            <div className="px-2 py-1 text-[10px] uppercase font-bold tracking-wider text-cyber-muted flex items-center justify-between">
              <span>{viewMode === 'tactical' ? 'TACTICAL CATEGORIES' : 'FIELD MANUAL CATEGORIES'}</span>
              <span className="text-cyber-cyan">{viewMode === 'tactical' ? cheatsheets.length : CPTS_NOTES.length}</span>
            </div>

            {viewMode === 'tactical' ? (
              <>
                {CHEATSHEET_CATEGORIES.map((cat) => {
                  const isSelected = selectedCategory === cat.id;
                  return (
                    <motion.button
                      whileHover={{ x: 3 }}
                      whileTap={{ scale: 0.98 }}
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs transition-all text-left relative ${
                        isSelected
                          ? 'bg-cyber-cyan/15 text-cyber-cyan border border-cyber-cyan/40 font-bold shadow-glow-cyan/20'
                          : 'text-cyber-muted hover:text-white hover:bg-cyber-bg'
                      }`}
                    >
                      <span className="truncate">{cat.name}</span>
                    </motion.button>
                  );
                })}

                <div className="pt-2 border-t border-cyber-border/70 space-y-1">
                  <motion.button
                    whileHover={{ x: 3 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setSelectedCategory('starred')}
                    className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-xs transition-all text-left ${
                      selectedCategory === 'starred'
                        ? 'bg-cyber-amber/15 text-cyber-amber border border-cyber-amber/40 font-bold'
                        : 'text-cyber-muted hover:text-white hover:bg-cyber-bg'
                    }`}
                  >
                    <Star className="w-3.5 h-3.5 text-cyber-amber fill-cyber-amber" />
                    <span>Bookmarked / Starred</span>
                  </motion.button>

                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => {
                        setViewMode('cpts-manual');
                        setSearchQuery('');
                      }}
                      className="w-full p-2.5 rounded-lg border border-purple-500/40 bg-purple-950/30 text-purple-300 hover:bg-purple-900/40 hover:border-purple-400 text-xs flex items-center justify-between transition-all group"
                    >
                      <div className="flex items-center gap-2">
                        <BookOpen className="w-4 h-4 text-purple-400 group-hover:scale-110 transition-transform" />
                        <div className="text-left">
                          <div className="font-bold text-white text-[11px]">CPTS FIELD MANUAL</div>
                          <div className="text-[10px] text-purple-300/80">{CPTS_NOTES.length} Notes · 1,574 Cmds</div>
                        </div>
                      </div>
                      <span className="text-purple-400 font-bold">→</span>
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <>
                {/* CPTS Field Manual Categories */}
                <motion.button
                  whileHover={{ x: 3 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    setSelectedCptsCategory('ALL');
                    setSelectedCptsSubCategory('ALL');
                    setCptsLimit(30);
                  }}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs transition-all text-left ${
                    selectedCptsCategory === 'ALL' && selectedCptsSubCategory === 'ALL'
                      ? 'bg-purple-500/20 text-purple-300 border border-purple-500/40 font-bold shadow-md'
                      : 'text-cyber-muted hover:text-white hover:bg-cyber-bg'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-3.5 h-3.5 text-purple-400" />
                    <span>All Field Notes</span>
                  </div>
                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-black/40 border border-cyber-border">
                    {CPTS_NOTES.length}
                  </span>
                </motion.button>

                {cptsCategories.map((cat, idx) => {
                  const isCatSelected = selectedCptsCategory === cat.category;
                  const isExpanded = Boolean(expandedSidebarCategories[cat.category]);
                  const stageNum = String(idx).padStart(2, '0');
                  const topicGroups = isExpanded ? getCategoryTopicGroups(cat.category) : [];

                  return (
                    <div key={cat.category} className="space-y-0.5">
                      <div
                        onClick={() => {
                          setSelectedCptsCategory(cat.category);
                          setSelectedCptsSubCategory('ALL');
                          setCptsLimit(30);
                          setExpandedSidebarCategories((prev) => ({
                            ...prev,
                            [cat.category]: !prev[cat.category],
                          }));
                        }}
                        className={`w-full flex items-center justify-between px-2.5 py-2 rounded-lg text-xs transition-all text-left cursor-pointer group select-none ${
                          isCatSelected && selectedCptsSubCategory === 'ALL'
                            ? 'bg-purple-500/20 text-purple-300 border border-purple-500/40 font-bold shadow-md'
                            : isCatSelected
                            ? 'bg-purple-950/40 text-purple-200 border border-purple-800/40 font-semibold'
                            : 'text-cyber-muted hover:text-white hover:bg-cyber-bg border border-transparent'
                        }`}
                      >
                        <div className="flex items-center gap-1.5 truncate pr-1 flex-1 min-w-0">
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              setExpandedSidebarCategories((prev) => ({
                                ...prev,
                                [cat.category]: !prev[cat.category],
                              }));
                            }}
                            className="p-0.5 rounded hover:bg-purple-900/50 text-purple-400 focus:outline-none transition-colors"
                            title={isExpanded ? 'Collapse topic folders' : 'Expand topic folders'}
                          >
                            {isExpanded ? (
                              <ChevronDown className="w-3.5 h-3.5" />
                            ) : (
                              <ChevronRight className="w-3.5 h-3.5" />
                            )}
                          </button>
                          <span className="text-[9px] font-mono px-1 py-0.2 rounded bg-purple-950/60 border border-purple-800/40 text-purple-400">
                            {stageNum}
                          </span>
                          <span className="truncate">{cat.category}</span>
                        </div>
                        <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-black/40 border border-cyber-border flex-shrink-0">
                          {cat.count}
                        </span>
                      </div>

                      {/* Indented Subcategory Topic Folders */}
                      {isExpanded && topicGroups.length > 0 && (
                        <div className="pl-3 pr-1 py-0.5 space-y-0.5 border-l-2 border-purple-500/30 ml-4 animate-fade-in">
                          {topicGroups.map((tg) => {
                            const isTopicActive = isCatSelected && selectedCptsSubCategory === tg.group;
                            return (
                              <button
                                key={tg.group}
                                type="button"
                                onClick={() => {
                                  setSelectedCptsCategory(cat.category);
                                  setSelectedCptsSubCategory(tg.group);
                                  setCptsLimit(30);
                                }}
                                className={`w-full flex items-center justify-between px-2 py-1 rounded text-[11px] transition-all text-left ${
                                  isTopicActive
                                    ? 'bg-purple-600/30 text-purple-200 border border-purple-400/40 font-bold shadow-sm'
                                    : 'text-cyber-muted hover:text-white hover:bg-cyber-bg/70'
                                }`}
                              >
                                <span className="truncate pr-1">📁 {tg.group}</span>
                                <span className="text-[9px] font-mono px-1 py-0.2 rounded bg-black/40 text-purple-300">
                                  {tg.count}
                                </span>
                              </button>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                })}

                <div className="pt-2 border-t border-cyber-border/70">
                  <button
                    type="button"
                    onClick={() => {
                      setViewMode('tactical');
                      setSearchQuery('');
                    }}
                    className="w-full px-3 py-2 rounded-lg border border-cyber-border text-cyber-muted hover:text-white hover:bg-cyber-bg text-xs flex items-center gap-2 transition-all"
                  >
                    <Terminal className="w-3.5 h-3.5 text-cyber-cyan" />
                    <span>← Back to Tactical Snippets</span>
                  </button>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Right Column: Dynamic Cheatsheet & Reverse Shell Builder OR CPTS Field Manual */}
        <div className="lg:col-span-3 space-y-4">
          
          {/* SEARCH & REVSHELL SWITCHER */}
          <div className="flex items-center gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-2.5 w-4 h-4 text-cyber-muted" />
              <input
                type="text"
                id="cheatsheet-search-input"
                name="cheatsheet-search"
                aria-label="Search cheatsheets and field manual notes"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCptsLimit(30);
                }}
                placeholder={
                  viewMode === 'tactical'
                    ? 'Search commands, flags, tools (e.g. nmap, ffuf, bloodhound, impacket)...'
                    : 'Search 414 field manual notes, tags, summaries, and 1,574 commands (e.g. kerberoast, suid, bloodhound, smbexec)...'
                }
                className="w-full pl-9 pr-4 py-2 bg-cyber-card border border-cyber-border rounded-lg text-xs text-white placeholder-cyber-muted focus:outline-none focus:border-cyber-cyan transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-2.5 text-xs text-cyber-muted hover:text-white"
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          {/* VIEW MODE 1: TACTICAL CHEATSHEETS */}
          {viewMode === 'tactical' && (
            <>
              {/* DEDICATED REVERSE SHELL GENERATOR (Enhanced with 0dayCTF/reverse-shell-generator capabilities) */}
              {(selectedCategory === 'all' || selectedCategory === 'revshell') && !searchQuery && (
                <motion.div 
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="p-4 rounded-xl border border-cyber-cyan/40 bg-cyber-card shadow-lg shadow-glow-cyan/10 space-y-3"
                >
                  <div className="flex items-center justify-between border-b border-cyber-border pb-2.5 flex-wrap gap-2">
                    <div className="flex items-center gap-2">
                      <Radio className="w-4 h-4 text-cyber-cyan animate-pulse" />
                      <span className="font-bold text-white text-sm tracking-wide">
                        LIVE REVERSE SHELL GENERATOR
                      </span>
                      <span className="text-[10px] text-cyber-muted">
                        (revshells engine)
                      </span>
                    </div>

                    <div className="flex items-center gap-2 flex-wrap text-xs">
                      {/* OS Platform Selector */}
                      <div className="flex items-center gap-1 bg-cyber-bg p-0.5 rounded border border-cyber-border text-[10px]">
                        {(['All', 'Linux', 'Windows'] as const).map(os => (
                          <button
                            key={os}
                            type="button"
                            data-testid={`revshell-os-${os.toLowerCase()}`}
                            onClick={() => {
                              setRevShellOsFilter(os);
                              setSelectedRevShellIdx(0);
                            }}
                            className={`px-2 py-0.5 rounded font-bold transition-all ${
                              revShellOsFilter === os
                                ? 'bg-cyber-cyan text-black'
                                : 'text-cyber-muted hover:text-white'
                            }`}
                          >
                            {os.toUpperCase()}
                          </button>
                        ))}
                      </div>

                      {/* Shell Binary Selector (0dayCTF style) */}
                      <div className="flex items-center gap-1 bg-cyber-bg p-0.5 rounded border border-cyber-border text-[10px]">
                        <span className="text-[9px] text-cyber-muted px-1">SHELL:</span>
                        {(['/bin/bash', '/bin/sh', '/bin/zsh', 'powershell', 'cmd.exe'] as const).map(sh => (
                          <button
                            key={sh}
                            type="button"
                            onClick={() => setRevShellSelectedShell(sh)}
                            className={`px-1.5 py-0.5 rounded font-mono transition-all ${
                              revShellSelectedShell === sh
                                ? 'bg-purple-600 text-white font-bold shadow-sm'
                                : 'text-cyber-muted hover:text-white'
                            }`}
                          >
                            {sh.replace('/bin/', '')}
                          </button>
                        ))}
                      </div>

                      {/* Encoding Selector */}
                      <div className="flex items-center gap-1 bg-cyber-bg p-0.5 rounded border border-cyber-border text-[10px]">
                        {(['raw', 'url', 'double-url', 'base64'] as const).map(enc => (
                          <button
                            key={enc}
                            type="button"
                            data-testid={`revshell-enc-${enc}`}
                            onClick={() => setRevShellEncoding(enc)}
                            className={`px-1.5 py-0.5 rounded font-bold uppercase transition-all ${
                              revShellEncoding === enc
                                ? 'bg-cyber-amber text-black'
                                : 'text-cyber-muted hover:text-white'
                            }`}
                          >
                            {enc === 'double-url' ? '2X URL' : enc.toUpperCase()}
                          </button>
                        ))}
                      </div>

                      {/* Target Host:Port with +1 Port Increment */}
                      <div className="flex items-center gap-1">
                        <span className="text-[10px] text-cyber-cyan uppercase font-semibold px-2 py-0.5 rounded bg-cyber-cyan/10 border border-cyber-cyan/30">
                          {globalVars.lhost}:{globalVars.lport}
                        </span>
                        <button
                          type="button"
                          onClick={handleIncrementPort}
                          className="px-1.5 py-0.5 rounded bg-cyber-bg border border-cyber-cyan/40 text-[10px] text-cyber-cyan hover:bg-cyber-cyan hover:text-black font-bold transition-all"
                          title="Increment listening port by 1 (revshells style)"
                        >
                          +1 PORT
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Language / Payload Selector Pills */}
                  <div className="flex flex-wrap gap-1.5">
                    {availableRevShells.map((tmpl, idx) => (
                      <motion.button
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.96 }}
                        key={tmpl.name}
                        onClick={() => setSelectedRevShellIdx(idx)}
                        className={`px-2.5 py-1 rounded text-xs transition-all ${
                          selectedRevShellIdx === idx
                            ? 'bg-cyber-cyan text-black font-bold shadow-glow-cyan'
                            : 'bg-cyber-bg border border-cyber-border text-cyber-muted hover:text-white'
                        }`}
                      >
                        {tmpl.name}
                      </motion.button>
                    ))}
                  </div>

                  {/* Active Reverse Shell Payload Box */}
                  <div className="space-y-2.5 pt-1">
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] uppercase font-bold text-cyber-muted">
                            PAYLOAD ({activeRevShell.language} - {activeRevShell.platform})
                          </span>
                          {revShellEncoding !== 'raw' && (
                            <span className="text-[9px] px-1.5 py-0.2 rounded bg-cyber-amber/20 border border-cyber-amber/40 text-cyber-amber font-mono uppercase">
                              {revShellEncoding} encoded
                            </span>
                          )}
                        </div>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => handleCopy(computedPayloadCmd, 'revshell-payload')}
                          className="flex items-center gap-1 text-[11px] text-cyber-cyan hover:underline font-semibold"
                        >
                          {copiedId === 'revshell-payload' ? (
                            <>
                              <Check className="w-3.5 h-3.5 text-cyber-emerald" />
                              <span className="text-cyber-emerald font-bold">COPIED!</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3.5 h-3.5" />
                              <span>COPY PAYLOAD</span>
                            </>
                          )}
                        </motion.button>
                      </div>
                      <pre className="p-3 rounded-lg bg-cyber-code border border-cyber-border text-xs text-white overflow-x-auto whitespace-pre-wrap break-all select-all font-mono">
                        {computedPayloadCmd}
                      </pre>
                    </div>

                    {/* Attacker Listener Box with Listener Switcher */}
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] uppercase font-bold text-cyber-muted">
                            ATTACKER LISTENER COMMAND
                          </span>
                          <div className="flex items-center gap-1 text-[9px] font-mono flex-wrap">
                            {(['nc', 'rlwrap', 'ncat', 'ncat-ssl', 'rustcat', 'pwncat', 'socat', 'powercat', 'windows-nc'] as const).map(lt => (
                              <button
                                key={lt}
                                type="button"
                                onClick={() => setRevShellListenerType(lt)}
                                className={`px-1.5 py-0.2 rounded transition-all ${
                                  revShellListenerType === lt
                                    ? 'bg-cyber-emerald text-black font-bold'
                                    : 'text-cyber-muted hover:text-white bg-black/40'
                                }`}
                              >
                                {lt}
                              </button>
                            ))}
                          </div>
                        </div>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => handleCopy(computedListenerCmd, 'revshell-listener')}
                          className="flex items-center gap-1 text-[11px] text-cyber-emerald hover:underline font-semibold"
                        >
                          {copiedId === 'revshell-listener' ? (
                            <>
                              <Check className="w-3.5 h-3.5 text-cyber-emerald" />
                              <span className="text-cyber-emerald font-bold">COPIED!</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3.5 h-3.5" />
                              <span>COPY LISTENER</span>
                            </>
                          )}
                        </motion.button>
                      </div>
                      <pre className="p-2.5 rounded-lg bg-cyber-code border border-cyber-border text-xs text-cyber-emerald overflow-x-auto whitespace-pre-wrap select-all font-mono">
                        {computedListenerCmd}
                      </pre>
                    </div>

                    {activeRevShell.notes && (
                      <div className="text-[10px] text-cyber-muted italic pt-0.5">
                        💡 Intel: {activeRevShell.notes}
                      </div>
                    )}
                  </div>
                </motion.div>
              )}

              {/* COMMAND SNIPPETS LIST with Scroll Entrance */}
              <div className="space-y-3">
                {filteredCommands.length === 0 ? (
                  <div className="p-8 text-center rounded-xl border border-dashed border-cyber-border bg-cyber-card/50 text-cyber-muted text-xs">
                    No command snippets matching this query.
                  </div>
                ) : (
                  filteredCommands.map((cmd, idx) => {
                    const interpolated = interpolateCommand(cmd.commandTemplate, globalVars);
                    const isCopied = copiedId === cmd.id;

                    return (
                      <motion.div
                        key={cmd.id}
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-30px' }}
                        transition={{ duration: 0.25, delay: Math.min((idx % 10) * 0.04, 0.3) }}
                        whileHover={{ y: -2 }}
                        className="p-3.5 rounded-xl border border-cyber-border bg-cyber-card hover:border-cyber-cyan/40 hover:shadow-glow-cyan/15 transition-all shadow-sm group"
                      >
                        {/* Snippet Header */}
                        <div className="flex items-start justify-between gap-2 mb-1.5">
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="font-bold text-white text-sm group-hover:text-cyber-cyan transition-colors">
                                {cmd.title}
                              </span>
                              {cmd.isCustom && (
                                <span className="text-[9px] px-1.5 py-0.2 rounded bg-cyber-purple/10 border border-cyber-purple/30 text-cyber-purple font-semibold">
                                  CUSTOM
                                </span>
                              )}
                              {cmd.platform && (
                                <span className="text-[9px] px-1.5 py-0.2 rounded bg-cyber-bg border border-cyber-border text-cyber-muted">
                                  {cmd.platform}
                                </span>
                              )}
                            </div>
                            <p className="text-[11px] text-cyber-muted mt-0.5">{cmd.description}</p>
                          </div>

                          <div className="flex items-center gap-1.5">
                            <motion.button
                              whileHover={{ scale: 1.15 }}
                              whileTap={{ scale: 0.9 }}
                              onClick={() => toggleStarCommand(cmd.id)}
                              className="p-1 rounded text-cyber-muted hover:text-cyber-amber transition-colors"
                              title="Bookmark / Star Snippet"
                            >
                              <Star
                                className={`w-3.5 h-3.5 ${
                                  cmd.isStarred ? 'fill-cyber-amber text-cyber-amber' : ''
                                }`}
                              />
                            </motion.button>

                            {cmd.isCustom && (
                              <motion.button
                                whileHover={{ scale: 1.15 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={() => deleteCustomCommand(cmd.id)}
                                className="p-1 rounded text-cyber-muted hover:text-cyber-crimson transition-colors"
                                title="Delete Snippet"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </motion.button>
                            )}

                            <motion.button
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              onClick={() => handleCopy(interpolated, cmd.id)}
                              className={`flex items-center gap-1 px-2.5 py-1 rounded text-xs font-semibold transition-all ${
                                isCopied
                                  ? 'bg-cyber-emerald/20 text-cyber-emerald border border-cyber-emerald shadow-glow-emerald/30'
                                  : 'bg-cyber-bg border border-cyber-border text-cyber-muted hover:text-white hover:border-cyber-cyan'
                              }`}
                            >
                              {isCopied ? (
                                <>
                                  <Check className="w-3 h-3 text-cyber-emerald" />
                                  <span className="text-cyber-emerald">Copied!</span>
                                </>
                              ) : (
                                <>
                                  <Copy className="w-3 h-3" />
                                  <span>Copy</span>
                                </>
                              )}
                            </motion.button>
                          </div>
                        </div>

                        {/* Rendered Command Code Box */}
                        <div className="relative">
                          <pre className="p-3 rounded-lg bg-cyber-code border border-cyber-border text-xs text-white overflow-x-auto whitespace-pre-wrap break-all font-mono select-all">
                            {interpolated}
                          </pre>
                        </div>

                        {/* Tags */}
                        {cmd.tags.length > 0 && (
                          <div className="flex flex-wrap gap-1 mt-2">
                            {cmd.tags.map((tag) => (
                              <span
                                key={tag}
                                className="text-[9px] px-1.5 py-0.2 rounded bg-cyber-bg border border-cyber-border text-cyber-cyan"
                              >
                                #{tag}
                              </span>
                            ))}
                          </div>
                        )}
                      </motion.div>
                    );
                  })
                )}
              </div>
            </>
          )}

          {/* VIEW MODE 2: CPTS FIELD MANUAL (HIERARCHICAL TOPIC NAVIGATION & ANTI-SCROLL MODES) */}
          {viewMode === 'cpts-manual' && (
            <div className="space-y-4">
              {/* Field Manual HUD Header with Jump Dropdown, Layout Mode, and Bilingual Switcher */}
              <div className="p-3.5 rounded-xl border border-purple-500/30 bg-purple-950/20 space-y-3 text-xs">
                {/* HUD Top Bar */}
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-2 flex-wrap">
                    <BookOpen className="w-4 h-4 text-purple-400" />
                    <span className="text-white font-bold tracking-wide">
                      DANIEL DAYAN'S CPTS FIELD MANUAL
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 font-mono">
                      {selectedCptsCategory === 'ALL' ? 'ALL 414 NOTES' : selectedCptsCategory.toUpperCase()}
                    </span>
                    {selectedCptsSubCategory !== 'ALL' && (
                      <span className="text-[10px] px-2 py-0.5 rounded bg-purple-600/30 border border-purple-400/40 text-purple-200 font-mono flex items-center gap-1">
                        <span>📁 {selectedCptsSubCategory}</span>
                        <button
                          type="button"
                          onClick={() => setSelectedCptsSubCategory('ALL')}
                          className="hover:text-white text-purple-300 ml-1 font-bold"
                          title="Clear subcategory filter"
                        >
                          ✕
                        </button>
                      </span>
                    )}
                  </div>

                  {/* Controls Capsule */}
                  <div className="flex items-center gap-2 flex-wrap">
                    {/* Jump to Note Combobox */}
                    <div className="relative">
                      <button
                        type="button"
                        onClick={() => setJumpDropdownOpen((prev) => !prev)}
                        className="px-2.5 py-1 rounded-lg bg-cyber-bg border border-purple-500/40 text-purple-300 hover:text-white hover:border-purple-300 text-xs flex items-center gap-1.5 font-semibold transition-all shadow-sm"
                        title="Quick search and jump to any note directly"
                      >
                        <Search className="w-3.5 h-3.5 text-purple-400" />
                        <span>Jump to Note...</span>
                        <ChevronDown className="w-3 h-3 text-purple-400" />
                      </button>

                      {jumpDropdownOpen && (
                        <>
                          <div
                            className="fixed inset-0 z-40"
                            onClick={() => setJumpDropdownOpen(false)}
                          />
                          <div className="absolute right-0 top-full mt-1.5 w-80 max-h-96 rounded-xl border border-purple-500/50 bg-cyber-card/95 backdrop-blur-md shadow-2xl p-2 z-50 space-y-2 animate-fade-in font-mono">
                            <input
                              type="text"
                              autoFocus
                              value={jumpSearchQuery}
                              onChange={(e) => setJumpSearchQuery(e.target.value)}
                              placeholder="Type note name, tag, or tool..."
                              className="w-full bg-cyber-bg px-2.5 py-1.5 rounded-lg border border-purple-500/40 text-white text-xs focus:outline-none focus:border-purple-400"
                            />
                            <div className="max-h-72 overflow-y-auto space-y-1 divide-y divide-cyber-border/30">
                              {(jumpSearchQuery.trim() ? CPTS_NOTES : filteredCptsNotes)
                                .filter((n) => {
                                  if (!jumpSearchQuery.trim()) return true;
                                  const q = jumpSearchQuery.toLowerCase();
                                  return (
                                    n.title.toLowerCase().includes(q) ||
                                    (n.titleEn && n.titleEn.toLowerCase().includes(q)) ||
                                    (n.titleHe && n.titleHe.toLowerCase().includes(q)) ||
                                    (n.subCategory && n.subCategory.toLowerCase().includes(q)) ||
                                    (n.tools && n.tools.some((t) => t.toLowerCase().includes(q)))
                                  );
                                })
                                 .slice(0, 40)
                                 .map((note) => (
                                   <div
                                     key={note.id}
                                     className="flex items-center gap-1 w-full rounded hover:bg-purple-900/40 transition-all p-1 group"
                                   >
                                     <button
                                       type="button"
                                       onClick={() => {
                                         setJumpDropdownOpen(false);
                                         setActiveObsidianNote(note);
                                         if (soundEnabled) playCyberSound('root');
                                       }}
                                       className="flex-1 text-left px-1.5 py-1 rounded transition-all flex flex-col min-w-0 cursor-pointer"
                                       title="Open full Obsidian note"
                                     >
                                       <div className="flex items-center justify-between gap-1">
                                         <span className="text-white text-xs font-bold group-hover:text-purple-300 truncate flex-1">
                                           {note.titleEn || note.title}
                                         </span>
                                         <span className="text-[9px] font-mono px-1 rounded bg-black/40 text-purple-400 flex-shrink-0">
                                           {note.category.split(' ')[0]}
                                         </span>
                                       </div>
                                       <span className="text-[10px] text-cyber-muted truncate block">
                                         {note.subCategory || note.category}
                                       </span>
                                     </button>
                                     <button
                                       type="button"
                                       onClick={() => handleJumpToNote(note)}
                                       className="px-2 py-1 rounded bg-black/50 border border-purple-500/30 text-purple-300 hover:text-white hover:bg-purple-900/60 text-[10px] font-mono flex-shrink-0 cursor-pointer"
                                       title="Scroll to note in page"
                                     >
                                       Jump
                                     </button>
                                   </div>
                                 ))}
                            </div>
                          </div>
                        </>
                      )}
                    </div>

                    {/* Display Layout Switcher */}
                    <div className="flex items-center gap-1 bg-cyber-bg/90 p-1 rounded-lg border border-purple-500/30 text-xs">
                      <button
                        type="button"
                        onClick={() => setCptsDisplayLayout('cards')}
                        className={`px-2 py-0.5 rounded text-xs font-bold transition-all flex items-center gap-1 ${
                          cptsDisplayLayout === 'cards'
                            ? 'bg-purple-600 text-white shadow-md shadow-purple-600/40'
                            : 'text-cyber-muted hover:text-white'
                        }`}
                        title="Detailed cards view with expanded summaries and code blocks"
                      >
                        <LayoutList className="w-3.5 h-3.5" />
                        <span className="hidden sm:inline">Cards</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => setCptsDisplayLayout('quick-index')}
                        className={`px-2 py-0.5 rounded text-xs font-bold transition-all flex items-center gap-1 ${
                          cptsDisplayLayout === 'quick-index'
                            ? 'bg-purple-600 text-white shadow-md shadow-purple-600/40'
                            : 'text-cyber-muted hover:text-white'
                        }`}
                        title="Ultra-compact terminal index table - view 50+ notes without scrolling"
                      >
                        <Table className="w-3.5 h-3.5" />
                        <span className="hidden sm:inline">Quick Index</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => setCptsDisplayLayout('grouped')}
                        className={`px-2 py-0.5 rounded text-xs font-bold transition-all flex items-center gap-1 ${
                          cptsDisplayLayout === 'grouped'
                            ? 'bg-purple-600 text-white shadow-md shadow-purple-600/40'
                            : 'text-cyber-muted hover:text-white'
                        }`}
                        title="Grouped by Obsidian topic folders"
                      >
                        <Folder className="w-3.5 h-3.5" />
                        <span className="hidden sm:inline">Grouped</span>
                      </button>
                    </div>

                    {/* 2-Way Language Selector: English or Hebrew */}
                    <div className="flex items-center gap-1 bg-cyber-bg/90 p-1 rounded-lg border border-purple-500/30 text-xs">
                      <button
                        type="button"
                        data-testid="cpts-lang-en"
                        onClick={() => {
                          if (soundEnabled) playCyberSound('click');
                          setCptsLangMode('en');
                        }}
                        className={`px-2.5 py-1 rounded text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                          cptsLangMode === 'en'
                            ? 'bg-purple-600 text-white shadow-md shadow-purple-600/40'
                            : 'text-cyber-muted hover:text-white'
                        }`}
                        title="English notes only"
                      >
                        <span>🇬🇧 EN</span>
                      </button>
                      <button
                        type="button"
                        data-testid="cpts-lang-he"
                        onClick={() => {
                          if (soundEnabled) playCyberSound('click');
                          setCptsLangMode('he');
                        }}
                        className={`px-2.5 py-1 rounded text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                          cptsLangMode === 'he'
                            ? 'bg-purple-600 text-white shadow-md shadow-purple-600/40'
                            : 'text-cyber-muted hover:text-white'
                        }`}
                        title="עברית בלבד"
                      >
                        <span>🇮🇱 עב</span>
                      </button>
                    </div>

                    {/* RTL / LTR Direction Selector */}
                    <div className="flex items-center gap-1 bg-cyber-bg/90 p-1 rounded-lg border border-purple-500/30 text-xs">
                      <button
                        type="button"
                        onClick={() => setNotesTextDirection('auto')}
                        className={`px-2 py-0.5 rounded text-xs font-bold transition-all ${
                          notesTextDirection === 'auto'
                            ? 'bg-purple-600 text-white shadow-md shadow-purple-600/40'
                            : 'text-cyber-muted hover:text-white'
                        }`}
                        title="Auto direction based on language"
                      >
                        <span>Auto</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => setNotesTextDirection('ltr')}
                        className={`px-2 py-0.5 rounded text-xs font-bold transition-all ${
                          notesTextDirection === 'ltr'
                            ? 'bg-purple-600 text-white shadow-md shadow-purple-600/40'
                            : 'text-cyber-muted hover:text-white'
                        }`}
                        title="Force Left-to-Right layout"
                      >
                        <span>LTR ➔</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => setNotesTextDirection('rtl')}
                        className={`px-2 py-0.5 rounded text-xs font-bold transition-all ${
                          notesTextDirection === 'rtl'
                            ? 'bg-purple-600 text-white shadow-md shadow-purple-600/40'
                            : 'text-cyber-muted hover:text-white'
                        }`}
                        title="Force Right-to-Left layout (עברית)"
                      >
                        <span>⬅️ RTL</span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Top Interactive Topic Filter Chips Bar */}
                {activeCategoryTopicGroups.length > 0 && (
                  <div className="space-y-1.5 pt-1 border-t border-purple-900/30">
                    <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-thin">
                      <span className="text-[10px] text-purple-400 font-bold uppercase tracking-wider flex-shrink-0 flex items-center gap-1">
                        <Filter className="w-3 h-3" />
                        <span>TOPICS:</span>
                      </span>
                      <button
                        type="button"
                        onClick={() => {
                          setSelectedCptsSubCategory('ALL');
                          setCptsLimit(30);
                        }}
                        className={`px-2.5 py-0.5 rounded-full text-xs font-semibold flex-shrink-0 transition-all ${
                          selectedCptsSubCategory === 'ALL'
                            ? 'bg-purple-600 text-white shadow-sm'
                            : 'bg-cyber-bg border border-cyber-border text-cyber-muted hover:text-white'
                        }`}
                      >
                        ALL ({filteredCptsNotes.length})
                      </button>
                      {activeCategoryTopicGroups.map((tg) => {
                        const isGroupActive = selectedCptsSubCategory === tg.group;
                        return (
                          <button
                            key={tg.group}
                            type="button"
                            onClick={() => {
                              setSelectedCptsSubCategory(isGroupActive ? 'ALL' : tg.group);
                              setCptsLimit(30);
                            }}
                            className={`px-2.5 py-0.5 rounded-full text-xs font-semibold flex-shrink-0 transition-all flex items-center gap-1.5 ${
                              isGroupActive
                                ? 'bg-purple-600 text-white shadow-md shadow-purple-600/40 border border-purple-400'
                                : 'bg-cyber-bg border border-cyber-border text-cyber-muted hover:text-purple-200 hover:border-purple-500/40'
                            }`}
                          >
                            <span>📁 {tg.group}</span>
                            <span className={`text-[9px] px-1 rounded-full ${isGroupActive ? 'bg-black/40 text-white' : 'bg-black/30 text-purple-300'}`}>
                              {tg.count}
                            </span>
                          </button>
                        );
                      })}
                    </div>

                    {/* Sub-Topic Leaf Pills */}
                    {selectedCptsSubCategory !== 'ALL' && activeTopicLeaves.length > 1 && (
                      <div className="flex items-center gap-1.5 overflow-x-auto pb-0.5 pl-6 scrollbar-thin">
                        <span className="text-[9px] text-cyber-muted font-mono flex-shrink-0">
                          SUB-LEAVES:
                        </span>
                        {activeTopicLeaves.map((leaf) => (
                          <button
                            key={leaf.leaf}
                            type="button"
                            onClick={() => {
                              setSelectedCptsSubCategory(leaf.leaf);
                              setCptsLimit(30);
                            }}
                            className="px-2 py-0.2 rounded text-[10px] font-mono bg-purple-950/40 border border-purple-800/40 text-purple-300 hover:text-white hover:border-purple-400 transition-all flex-shrink-0"
                          >
                            {leaf.leaf} ({leaf.count})
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                {/* Telemetry Count */}
                <div className="flex items-center justify-between text-[11px] text-cyber-muted font-mono pt-1">
                  <div>
                    Showing <strong className="text-purple-300">{visibleCptsNotes.length}</strong> of <strong className="text-white">{filteredCptsNotes.length}</strong> notes (<strong className="text-cyber-cyan">{totalCptsCommands}</strong> total commands)
                  </div>
                  {cptsDisplayLayout === 'quick-index' && (
                    <span className="text-purple-400 text-[10px]">
                      ⚡ Terminal Quick Index Active · 1-Click Inline Command Expansion
                    </span>
                  )}
                </div>
              </div>

              {/* VIEW RENDERER 1: QUICK INDEX TABLE MODE (High-Density Anti-Scroll Table) */}
              {cptsDisplayLayout === 'quick-index' && (
                <div className="rounded-xl border border-cyber-border bg-cyber-card overflow-hidden shadow-lg">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs font-mono">
                      <thead className="bg-cyber-bg/95 border-b border-cyber-border text-cyber-muted text-[10px] uppercase tracking-wider sticky top-0 z-10 backdrop-blur">
                        <tr>
                          <th className="py-2.5 px-3 w-12 text-center">#</th>
                          <th className="py-2.5 px-3 w-48">TOPIC / FOLDER</th>
                          <th className="py-2.5 px-3">TITLE / OBJECTIVE</th>
                          <th className="py-2.5 px-3 w-28 text-center">STAGE / LEVEL</th>
                          <th className="py-2.5 px-3 w-32 text-center">COMMANDS</th>
                          <th className="py-2.5 px-3 w-28 text-right pr-4">ACTIONS</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-cyber-border/40">
                        {visibleCptsNotes.length === 0 ? (
                          <tr>
                            <td colSpan={6} className="p-8 text-center text-cyber-muted text-xs">
                              No field manual notes matching "{searchQuery}".
                            </td>
                          </tr>
                        ) : (
                          visibleCptsNotes.map((note, idx) => {
                            const isRowExpanded = Boolean(expandedIndexRows[note.id]);
                            const { group, leaf } = parseSubCategory(note.subCategory);
                            const isHighlighted = highlightedNoteId === note.id;
                            const isRtl = notesTextDirection === 'rtl' || (notesTextDirection === 'auto' && cptsLangMode === 'he');

                            return (
                              <React.Fragment key={note.id}>
                                <tr
                                  id={`cpts-note-${note.id}`}
                                  className={`transition-colors hover:bg-purple-950/20 ${
                                    isHighlighted
                                      ? 'bg-purple-500/25 ring-1 ring-purple-400'
                                      : idx % 2 === 0
                                      ? 'bg-cyber-card/50'
                                      : 'bg-cyber-bg/30'
                                  }`}
                                >
                                  {/* Sequential Index */}
                                  <td className="py-2.5 px-3 text-center text-cyber-muted text-[11px] font-mono">
                                    {String(idx + 1).padStart(2, '0')}
                                  </td>

                                  {/* Topic Folder */}
                                  <td className="py-2.5 px-3 font-mono">
                                    <div
                                      className="text-[11px] text-purple-300 font-semibold truncate max-w-[180px]"
                                      title={note.subCategory || group}
                                    >
                                      📁 {group}
                                    </div>
                                    {leaf && leaf !== group && (
                                      <div className="text-[9px] text-cyber-muted truncate max-w-[180px]">
                                        › {leaf}
                                      </div>
                                    )}
                                  </td>

                                  {/* Title & Objective */}
                                  <td className="py-2.5 px-3">
                                    <div dir={isRtl ? 'rtl' : 'ltr'} className={isRtl ? 'text-right' : 'text-left'}>
                                      <button
                                        type="button"
                                        onClick={() => {
                                          if (soundEnabled) playCyberSound('click');
                                          setActiveObsidianNote(note);
                                        }}
                                        className="font-bold text-white text-xs hover:text-purple-300 transition-colors inline-flex items-center gap-1.5 cursor-pointer text-left"
                                        title={cptsLangMode === 'he' ? "פתח הערה באובסידיאן" : "Open authentic Obsidian note"}
                                        dir={cptsLangMode === 'he' ? 'rtl' : 'ltr'}
                                      >
                                        <BookOpen className="w-3 h-3 text-purple-400 flex-shrink-0" />
                                        <span>
                                          {cptsLangMode === 'he'
                                            ? note.titleHe || note.title
                                            : note.titleEn || note.title}
                                        </span>
                                      </button>
                                      <div
                                        className={`text-[10px] text-cyber-muted truncate max-w-md mt-0.5 ${
                                          cptsLangMode === 'he' ? 'font-sans text-right' : 'text-left'
                                        }`}
                                        dir={cptsLangMode === 'he' ? 'rtl' : 'ltr'}
                                      >
                                        {cptsLangMode === 'he'
                                          ? note.heSummary || note.summary || note.subCategory
                                          : note.enSummary || note.summary || note.subCategory}
                                      </div>
                                    </div>
                                  </td>

                                  {/* Stage / Difficulty */}
                                  <td className="py-2.5 px-3 text-center">
                                    {note.stage ? (
                                      <span className="text-[9px] px-1.5 py-0.5 rounded bg-blue-500/15 text-blue-300 border border-blue-500/30">
                                        {note.stage}
                                      </span>
                                    ) : (
                                      <span className="text-[9px] px-1.5 py-0.5 rounded bg-cyber-bg border border-cyber-border text-cyber-muted">
                                        {note.difficulty || 'Core'}
                                      </span>
                                    )}
                                  </td>

                                  {/* Commands Count & Inline Toggle */}
                                  <td className="py-2.5 px-3 text-center">
                                    {note.commands && note.commands.length > 0 ? (
                                      <button
                                        type="button"
                                        onClick={() =>
                                          setExpandedIndexRows((prev) => ({ ...prev, [note.id]: !prev[note.id] }))
                                        }
                                        className={`px-2 py-1 rounded text-[11px] font-bold transition-all inline-flex items-center gap-1 ${
                                          isRowExpanded
                                            ? 'bg-purple-600 text-white shadow-sm'
                                            : 'bg-purple-950/50 border border-purple-800/50 text-purple-300 hover:bg-purple-900/60'
                                        }`}
                                      >
                                        <span>
                                          {isRowExpanded ? '▴' : '▾'} {note.commands.length} cmd
                                          {note.commands.length > 1 ? 's' : ''}
                                        </span>
                                      </button>
                                    ) : (
                                      <span className="text-cyber-muted text-[10px]">Doc only</span>
                                    )}
                                  </td>

                                  {/* Quick Action: Open Note & Copy All */}
                                  <td className="py-2.5 px-3 text-right pr-4">
                                    <div className="flex items-center justify-end gap-1.5">
                                      <button
                                        type="button"
                                        onClick={() => {
                                          if (soundEnabled) playCyberSound('click');
                                          setActiveObsidianNote(note);
                                        }}
                                        className="px-2 py-1 rounded text-[10px] font-semibold bg-purple-950/50 border border-purple-800/50 text-purple-300 hover:text-white hover:bg-purple-900/60 transition-all inline-flex items-center gap-1 cursor-pointer"
                                        title="Open Obsidian personal note"
                                      >
                                        <BookOpen className="w-2.5 h-2.5" />
                                        <span>Note</span>
                                      </button>
                                      {note.commands && note.commands.length > 0 && (
                                        <button
                                          type="button"
                                          onClick={() => handleCopyAllNoteCommands(note)}
                                          className={`px-2 py-1 rounded text-[10px] font-semibold transition-all inline-flex items-center gap-1 cursor-pointer ${
                                            copiedId === `all-${note.id}`
                                              ? 'bg-cyber-emerald/20 text-cyber-emerald border border-cyber-emerald'
                                              : 'bg-cyber-bg border border-cyber-border text-cyber-muted hover:text-white hover:border-purple-400'
                                          }`}
                                          title="Copy all commands in note"
                                        >
                                          {copiedId === `all-${note.id}` ? (
                                            <>
                                              <Check className="w-3 h-3 text-cyber-emerald" />
                                              <span>Copied</span>
                                            </>
                                          ) : (
                                            <>
                                              <Copy className="w-3 h-3" />
                                              <span>Copy All</span>
                                            </>
                                          )}
                                        </button>
                                      )}
                                    </div>
                                  </td>
                                </tr>

                                {/* Inline Expanded Terminal Commands */}
                                {isRowExpanded && note.commands && note.commands.length > 0 && (
                                  <tr className="bg-black/60 border-y border-purple-900/40">
                                    <td colSpan={6} className="p-3 pl-10 pr-4 space-y-2">
                                      <div className="flex items-center justify-between text-[10px] text-purple-400 font-bold border-b border-purple-900/30 pb-1">
                                        <span>COMMANDS FOR: {note.titleEn || note.title}</span>
                                        <span>{note.commands.length} EXECUTABLES</span>
                                      </div>
                                      <div className="space-y-1.5" dir="ltr">
                                        {note.commands.map((cmd, cIdx) => {
                                          const interpolated = interpolateCommand(cmd, globalVars);
                                          const cmdId = `${note.id}-${cIdx}`;
                                          const isCopied = copiedId === cmdId;
                                          return (
                                            <div
                                              key={cIdx}
                                              className="flex items-center justify-between gap-2 p-1.5 px-2 rounded bg-cyber-code border border-purple-900/30 text-xs font-mono"
                                            >
                                              <pre className="text-cyber-cyan overflow-x-auto whitespace-pre-wrap break-all flex-1 select-all">
                                                {interpolated}
                                              </pre>
                                              <button
                                                type="button"
                                                onClick={() => handleCopy(interpolated, cmdId)}
                                                className={`flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-semibold flex-shrink-0 transition-all ${
                                                  isCopied
                                                    ? 'bg-cyber-emerald/20 text-cyber-emerald border border-cyber-emerald'
                                                    : 'bg-cyber-bg border border-cyber-border text-cyber-muted hover:text-white hover:border-cyber-cyan'
                                                }`}
                                              >
                                                {isCopied ? (
                                                  <Check className="w-2.5 h-2.5 text-cyber-emerald" />
                                                ) : (
                                                  <Copy className="w-2.5 h-2.5" />
                                                )}
                                                <span>{isCopied ? 'Copied' : 'Copy'}</span>
                                              </button>
                                            </div>
                                          );
                                        })}
                                      </div>
                                    </td>
                                  </tr>
                                )}
                              </React.Fragment>
                            );
                          })
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* VIEW RENDERER 2: GROUPED VIEW (Accordion Folders by Topic) */}
              {cptsDisplayLayout === 'grouped' && (
                <div className="space-y-4">
                  {groupedCptsNotes.length === 0 ? (
                    <div className="p-8 text-center rounded-xl border border-dashed border-cyber-border bg-cyber-card/50 text-cyber-muted text-xs">
                      No field manual notes matching "{searchQuery}".
                    </div>
                  ) : (
                    groupedCptsNotes.map((grp) => {
                      const isCollapsed = Boolean(collapsedGroupSections[grp.group]);
                      return (
                        <div
                          key={grp.group}
                          className="rounded-xl border border-purple-500/30 bg-cyber-card overflow-hidden shadow-md"
                        >
                          <button
                            type="button"
                            onClick={() =>
                              setCollapsedGroupSections((prev) => ({ ...prev, [grp.group]: !prev[grp.group] }))
                            }
                            className="w-full p-3 bg-purple-950/30 hover:bg-purple-900/40 border-b border-purple-900/30 flex items-center justify-between text-xs transition-colors"
                          >
                            <div className="flex items-center gap-2">
                              {isCollapsed ? (
                                <ChevronRight className="w-4 h-4 text-purple-400" />
                              ) : (
                                <ChevronDown className="w-4 h-4 text-purple-400" />
                              )}
                              <span className="font-bold text-white text-sm">📁 {grp.group}</span>
                              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-black/40 border border-purple-500/40 text-purple-300">
                                {grp.count} notes
                              </span>
                            </div>
                            <span className="text-[11px] text-cyber-muted font-mono">
                              {isCollapsed ? 'Click to expand' : 'Click to collapse'}
                            </span>
                          </button>

                          {!isCollapsed && (
                            <div className="p-3 space-y-3">
                              {grp.notes.map((note) => {
                                const isNoteExpanded = Boolean(expandedNotes[note.id]);
                                const commandsToShow = isNoteExpanded
                                  ? note.commands
                                  : note.commands
                                  ? note.commands.slice(0, 2)
                                  : [];
                                const extraCommandsCount = note.commands
                                  ? Math.max(0, note.commands.length - 2)
                                  : 0;
                                const isRtlCard =
                                  notesTextDirection === 'rtl' ||
                                  (notesTextDirection === 'auto' && cptsLangMode === 'he');
                                const isHighlighted = highlightedNoteId === note.id;

                                return (
                                  <div
                                    key={note.id}
                                    id={`cpts-note-${note.id}`}
                                    dir={isRtlCard ? 'rtl' : 'ltr'}
                                    className={`p-3.5 rounded-xl border border-cyber-border bg-cyber-bg/40 hover:border-purple-500/50 hover:shadow-lg transition-all space-y-2.5 group ${
                                      isRtlCard ? 'text-right' : 'text-left'
                                    } ${isHighlighted ? 'ring-2 ring-purple-400 bg-purple-950/30' : ''}`}
                                  >
                                    <div className="flex items-start justify-between gap-3">
                                      <div className="space-y-1 flex-1 min-w-0">
                                         <button
                                           type="button"
                                           onClick={() => {
                                             if (soundEnabled) playCyberSound('click');
                                             setActiveObsidianNote(note);
                                           }}
                                            className="font-bold text-white text-xs group-hover:text-purple-300 transition-colors cursor-pointer inline-flex items-center gap-1.5"
                                            title={cptsLangMode === 'he' ? "פתח הערה באובסידיאן" : "Open authentic Obsidian note"}
                                            dir={cptsLangMode === 'he' ? 'rtl' : 'ltr'}
                                          >
                                            <BookOpen className="w-3 h-3 text-purple-400 flex-shrink-0" />
                                            <span>
                                              {cptsLangMode === 'he'
                                                ? note.titleHe || note.title
                                                : note.titleEn || note.title}
                                            </span>
                                          </button>
                                          <p
                                            className={`text-[11px] text-cyber-muted line-clamp-2 ${
                                              cptsLangMode === 'he' ? 'font-sans text-right' : 'text-left'
                                            }`}
                                            dir={cptsLangMode === 'he' ? 'rtl' : 'ltr'}
                                          >
                                            {cptsLangMode === 'he'
                                              ? note.heSummary || note.summary || note.subCategory
                                              : note.enSummary || note.summary || note.subCategory}
                                          </p>
                                       </div>
                                       <div className="flex items-center gap-1.5 flex-shrink-0">
                                         <button
                                           type="button"
                                           onClick={() => {
                                             if (soundEnabled) playCyberSound('click');
                                             setActiveObsidianNote(note);
                                           }}
                                           className="px-2 py-1 rounded text-[10px] font-semibold bg-purple-950/60 border border-purple-500/40 text-purple-300 hover:text-white hover:bg-purple-900/80 transition-all flex items-center gap-1 cursor-pointer"
                                           title="Open Obsidian personal note"
                                         >
                                           <BookOpen className="w-2.5 h-2.5" />
                                           <span>Note</span>
                                         </button>
                                         {note.commands && note.commands.length > 0 && (
                                           <button
                                             type="button"
                                             onClick={() => handleCopyAllNoteCommands(note)}
                                             className="px-2 py-1 rounded text-[10px] font-semibold bg-cyber-bg border border-cyber-border text-purple-300 hover:text-white hover:border-purple-400 transition-all flex items-center gap-1 cursor-pointer"
                                           >
                                             <Copy className="w-3 h-3" />
                                             <span>Copy All ({note.commands.length})</span>
                                           </button>
                                         )}
                                       </div>
                                    </div>

                                    {/* Commands preview */}
                                    {commandsToShow && commandsToShow.length > 0 && (
                                      <div className="space-y-1 pt-1 text-left" dir="ltr">
                                        {commandsToShow.map((cmd, cIdx) => {
                                          const interpolated = interpolateCommand(cmd, globalVars);
                                          return (
                                            <div
                                              key={cIdx}
                                              className="p-1.5 px-2 rounded bg-cyber-code border border-cyber-border text-xs font-mono text-cyber-cyan truncate select-all"
                                            >
                                              {interpolated}
                                            </div>
                                          );
                                        })}
                                      </div>
                                    )}
                                  </div>
                                );
                              })}
                            </div>
                          )}
                        </div>
                      );
                    })
                  )}
                </div>
              )}

              {/* VIEW RENDERER 3: DETAILED CARDS MODE (Default) */}
              {cptsDisplayLayout === 'cards' && (
                <div className="space-y-3">
                  {visibleCptsNotes.length === 0 ? (
                    <div className="p-8 text-center rounded-xl border border-dashed border-cyber-border bg-cyber-card/50 text-cyber-muted text-xs">
                      No field manual notes matching "{searchQuery}".
                    </div>
                  ) : (
                    visibleCptsNotes.map((note) => {
                      const isNoteExpanded = Boolean(expandedNotes[note.id]);
                      const commandsToShow = isNoteExpanded
                        ? note.commands
                        : note.commands
                        ? note.commands.slice(0, 2)
                        : [];
                      const extraCommandsCount = note.commands ? Math.max(0, note.commands.length - 2) : 0;
                      const isRtlCard =
                        notesTextDirection === 'rtl' || (notesTextDirection === 'auto' && cptsLangMode === 'he');
                      const isHighlighted = highlightedNoteId === note.id;

                      return (
                        <div
                          key={note.id}
                          id={`cpts-note-${note.id}`}
                          dir={isRtlCard ? 'rtl' : 'ltr'}
                          className={`p-4 rounded-xl border border-cyber-border bg-cyber-card hover:border-purple-500/50 hover:shadow-lg transition-all space-y-3 group ${
                            isRtlCard ? 'text-right' : 'text-left'
                          } ${isHighlighted ? 'ring-2 ring-purple-400 bg-purple-950/30' : ''}`}
                        >
                          {/* Note Header */}
                          <div className="flex items-start justify-between gap-3">
                            <div className="space-y-2 flex-1 min-w-0">
                              {/* Title based on cptsLangMode - ONLY ONE, NEVER BOTH */}
                              {cptsLangMode === 'he' ? (
                                <div className="text-right" dir="rtl">
                                  <button
                                    type="button"
                                    onClick={() => {
                                      if (soundEnabled) playCyberSound('click');
                                      setActiveObsidianNote(note);
                                    }}
                                    className="font-bold text-white text-sm group-hover:text-purple-300 transition-colors font-sans cursor-pointer inline-flex items-center gap-1.5"
                                    title="פתח רשימות אישיות מקיפות"
                                  >
                                    <BookOpen className="w-3.5 h-3.5 text-purple-400 flex-shrink-0" />
                                    <span>{note.titleHe || note.title}</span>
                                  </button>
                                </div>
                              ) : (
                                <div>
                                  <button
                                    type="button"
                                    onClick={() => {
                                      if (soundEnabled) playCyberSound('click');
                                      setActiveObsidianNote(note);
                                    }}
                                    className="font-bold text-white text-sm group-hover:text-purple-300 transition-colors text-left cursor-pointer inline-flex items-center gap-1.5"
                                    title="Open authentic Obsidian note"
                                  >
                                    <BookOpen className="w-3.5 h-3.5 text-purple-400 flex-shrink-0" />
                                    <span>{note.titleEn || note.title}</span>
                                  </button>
                                </div>
                              )}

                              {/* Badges: Stage, Category, SubCategory Topic, Difficulty, Tools */}
                              <div className="flex items-center gap-1.5 flex-wrap">
                                {note.stage && (
                                  <span className="text-[9px] px-2 py-0.5 rounded bg-blue-500/15 text-blue-300 border border-blue-500/30 font-mono font-semibold">
                                    🎯 Stage: {note.stage}
                                  </span>
                                )}
                                <span className="text-[9px] px-2 py-0.5 rounded bg-purple-500/15 text-purple-300 border border-purple-500/30 font-mono">
                                  {note.category}
                                </span>
                                {note.subCategory && (
                                  <span className="text-[9px] px-2 py-0.5 rounded bg-purple-950/40 text-purple-300 border border-purple-800/40 font-mono">
                                    📁 {parseSubCategory(note.subCategory).group}
                                  </span>
                                )}
                                <span className="text-[9px] px-2 py-0.5 rounded bg-cyber-bg border border-cyber-border text-cyber-muted font-mono">
                                  {note.difficulty}
                                </span>
                                {note.tools &&
                                  note.tools.map((t) => (
                                    <span
                                      key={t}
                                      className="text-[9px] px-1.5 py-0.5 rounded bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 font-mono"
                                    >
                                      🔧 {t}
                                    </span>
                                  ))}
                              </div>

                              {/* Summaries based on cptsLangMode - ONLY ONE, NEVER BOTH */}
                              {cptsLangMode === 'he' ? (
                                <div className="text-[11px] text-purple-200/90 leading-relaxed font-sans text-right" dir="rtl">
                                  {note.heSummary || note.summary || note.subCategory}
                                </div>
                              ) : (
                                <div className="text-[11px] text-cyber-muted leading-relaxed font-sans text-left" dir="ltr">
                                  {note.enSummary || note.summary || note.subCategory}
                                </div>
                              )}

                              {/* Tags */}
                              {note.tags && note.tags.length > 0 && (
                                <div className="flex flex-wrap gap-1 pt-0.5">
                                  {note.tags.map((t) => (
                                    <span
                                      key={t}
                                      className="text-[9px] px-1.5 py-0.2 rounded bg-cyber-bg border border-cyber-border/70 text-cyber-cyan"
                                    >
                                      #{t}
                                    </span>
                                  ))}
                                </div>
                              )}
                            </div>

                            {/* Actions: Open Obsidian Note & Copy All Commands */}
                            <div className="flex items-center gap-1.5 flex-shrink-0">
                              <button
                                type="button"
                                onClick={() => {
                                  if (soundEnabled) playCyberSound('click');
                                  setActiveObsidianNote(note);
                                }}
                                className="flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-semibold bg-purple-950/60 border border-purple-500/40 text-purple-300 hover:text-white hover:bg-purple-900/80 hover:border-purple-400 transition-all cursor-pointer shadow-sm"
                                title="Open full authentic Obsidian personal note"
                              >
                                <BookOpen className="w-3.5 h-3.5 text-purple-400" />
                                <span>Open Note</span>
                              </button>
                              {note.commands && note.commands.length > 1 && (
                                <button
                                  type="button"
                                  onClick={() => handleCopyAllNoteCommands(note)}
                                  className={`flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-semibold flex-shrink-0 transition-all cursor-pointer ${
                                    copiedId === `all-${note.id}`
                                      ? 'bg-cyber-emerald/20 text-cyber-emerald border border-cyber-emerald shadow-glow-emerald/30'
                                      : 'bg-cyber-bg border border-cyber-border text-purple-300 hover:border-purple-400 hover:text-white'
                                  }`}
                                  title="Copy all commands in this note to clipboard"
                                >
                                  {copiedId === `all-${note.id}` ? (
                                    <>
                                      <Check className="w-3.5 h-3.5 text-cyber-emerald" />
                                      <span>All Copied!</span>
                                    </>
                                  ) : (
                                    <>
                                      <Copy className="w-3.5 h-3.5" />
                                      <span>Copy All ({note.commands.length})</span>
                                    </>
                                  )}
                                </button>
                              )}
                            </div>
                          </div>

                          {/* Note Commands Container (Always LTR for code) */}
                          {note.commands && note.commands.length > 0 && (
                            <div className="space-y-2 pt-1 border-t border-cyber-border/60 text-left" dir="ltr">
                              {commandsToShow.map((cmd, cIdx) => {
                                const interpolated = interpolateCommand(cmd, globalVars);
                                const cmdId = `${note.id}-${cIdx}`;
                                const isCopied = copiedId === cmdId;

                                return (
                                  <div
                                    key={cIdx}
                                    className="flex items-center justify-between gap-2 p-2 rounded bg-cyber-code border border-cyber-border group-hover:border-purple-900/40 text-xs font-mono"
                                  >
                                    <pre className="text-cyber-cyan overflow-x-auto whitespace-pre-wrap break-all flex-1 select-all" title={interpolated}>
                                      {interpolated}
                                    </pre>
                                    <button
                                      type="button"
                                      onClick={() => handleCopy(interpolated, cmdId)}
                                      className={`flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-semibold flex-shrink-0 transition-all ${
                                        isCopied
                                          ? 'bg-cyber-emerald/20 text-cyber-emerald border border-cyber-emerald shadow-glow-emerald/30'
                                          : 'bg-cyber-bg border border-cyber-border text-cyber-muted hover:text-white hover:border-cyber-cyan'
                                      }`}
                                    >
                                      {isCopied ? (
                                        <>
                                          <Check className="w-3 h-3 text-cyber-emerald" />
                                          <span>Copied!</span>
                                        </>
                                      ) : (
                                        <>
                                          <Copy className="w-3 h-3" />
                                          <span>Copy</span>
                                        </>
                                      )}
                                    </button>
                                  </div>
                                );
                              })}

                              {/* Expand / Collapse for notes with >2 commands */}
                              {extraCommandsCount > 0 && (
                                <button
                                  type="button"
                                  onClick={() => setExpandedNotes((prev) => ({ ...prev, [note.id]: !prev[note.id] }))}
                                  className="text-[10px] text-purple-400 hover:text-purple-300 font-bold flex items-center gap-1 pt-1"
                                >
                                  {isNoteExpanded ? (
                                    <>
                                      <ChevronUp className="w-3.5 h-3.5" />
                                      <span>Collapse Extra Commands</span>
                                    </>
                                  ) : (
                                    <>
                                      <ChevronDown className="w-3.5 h-3.5" />
                                      <span>+ View {extraCommandsCount} more command{extraCommandsCount > 1 ? 's' : ''} from this note</span>
                                    </>
                                  )}
                                </button>
                              )}
                            </div>
                          )}
                        </div>
                      );
                    })
                  )}
                </div>
              )}

              {/* Sliced Pagination Controls */}
              {visibleCptsNotes.length < filteredCptsNotes.length && (
                <div className="p-4 rounded-xl border border-cyber-border bg-cyber-card flex flex-wrap items-center justify-center gap-3">
                  <button
                    type="button"
                    onClick={() => setCptsLimit((prev) => prev + 30)}
                    className="px-5 py-2 rounded-lg bg-purple-500/20 border border-purple-500/50 hover:bg-purple-500 hover:text-black text-purple-300 font-bold text-xs transition-all shadow-md flex items-center gap-2"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>LOAD NEXT 30 NOTES ({filteredCptsNotes.length - visibleCptsNotes.length} REMAINING)</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setCptsLimit(filteredCptsNotes.length)}
                    className="px-4 py-2 rounded-lg bg-cyber-bg border border-cyber-border hover:border-white text-cyber-muted hover:text-white text-xs font-semibold transition-all"
                  >
                    SHOW ALL ({filteredCptsNotes.length})
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

      </div>

      {/* New Custom Command Modal */}
      {isNewModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full max-w-lg rounded-xl border border-cyber-border bg-cyber-card shadow-2xl p-5 space-y-4"
          >
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <Code className="w-4 h-4 text-cyber-cyan" /> ADD CUSTOM EXPLOITATION SNIPPET
            </h3>

            <form onSubmit={handleCreateCustom} className="space-y-3 text-xs">
              <div>
                <label htmlFor="custom-snippet-title" className="block text-cyber-muted uppercase tracking-wider mb-1 font-semibold">
                  Command Title *
                </label>
                <input
                  type="text"
                  id="custom-snippet-title"
                  name="custom-snippet-title"
                  required
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  placeholder="e.g. Chamilo LMS RCE Exploit"
                  className="w-full bg-cyber-bg px-3 py-2 rounded-lg border border-cyber-border text-white focus:outline-none focus:border-cyber-cyan"
                />
              </div>

              <div>
                <label htmlFor="custom-snippet-category" className="block text-cyber-muted uppercase tracking-wider mb-1 font-semibold">
                  Category
                </label>
                <select
                  id="custom-snippet-category"
                  name="custom-snippet-category"
                  value={newCategory}
                  onChange={(e) => setNewCategory(e.target.value)}
                  className="w-full bg-cyber-bg px-3 py-2 rounded-lg border border-cyber-border text-white focus:outline-none focus:border-cyber-cyan"
                >
                  <option value="network">01. Network Discovery & Port Scanning</option>
                  <option value="web">02. Web Enumeration & Fuzzing</option>
                  <option value="exploitation">03. Exploitation & Payloads</option>
                  <option value="linux-privesc">04. Linux PrivEsc & TTY</option>
                  <option value="active-directory">05. Windows & Active Directory</option>
                  <option value="pivoting">06. Pivoting & Tunneling</option>
                  <option value="file-transfer">07. File Transfers</option>
                </select>
              </div>

              <div>
                <label htmlFor="custom-snippet-desc" className="block text-cyber-muted uppercase tracking-wider mb-1 font-semibold">
                  Description
                </label>
                <input
                  type="text"
                  id="custom-snippet-desc"
                  name="custom-snippet-desc"
                  value={newDesc}
                  onChange={(e) => setNewDesc(e.target.value)}
                  placeholder="Brief note on exploit parameters..."
                  className="w-full bg-cyber-bg px-3 py-2 rounded-lg border border-cyber-border text-white focus:outline-none focus:border-cyber-cyan"
                />
              </div>

              <div>
                <label htmlFor="custom-snippet-template" className="block text-cyber-muted uppercase tracking-wider mb-1 font-semibold">
                  Command Template (Supports &#123;TARGET_IP&#125;, &#123;LHOST&#125;, &#123;LPORT&#125;) *
                </label>
                <textarea
                  id="custom-snippet-template"
                  name="custom-snippet-template"
                  rows={3}
                  required
                  value={newTemplate}
                  onChange={(e) => setNewTemplate(e.target.value)}
                  placeholder="python3 exploit.py -t {TARGET_IP} -l {LHOST} -p {LPORT}"
                  className="w-full bg-cyber-bg px-3 py-2 rounded-lg border border-cyber-border text-white focus:outline-none focus:border-cyber-cyan font-mono resize-none"
                />
              </div>

              <div>
                <label htmlFor="custom-snippet-tags" className="block text-cyber-muted uppercase tracking-wider mb-1 font-semibold">
                  Tags (Comma-separated)
                </label>
                <input
                  type="text"
                  id="custom-snippet-tags"
                  name="custom-snippet-tags"
                  value={newTags}
                  onChange={(e) => setNewTags(e.target.value)}
                  placeholder="rce, python, cve-2023-xxxx"
                  className="w-full bg-cyber-bg px-3 py-2 rounded-lg border border-cyber-border text-white focus:outline-none focus:border-cyber-cyan"
                />
              </div>

              <div className="pt-2 flex items-center justify-end gap-2 border-t border-cyber-border">
                <button
                  type="button"
                  onClick={() => setIsNewModalOpen(false)}
                  className="px-4 py-2 rounded-lg bg-cyber-bg border border-cyber-border text-cyber-muted hover:text-white"
                >
                  Cancel
                </button>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  type="submit"
                  className="px-4 py-2 rounded-lg bg-cyber-cyan text-black font-bold hover:bg-cyber-cyan/90 transition-all shadow-glow-cyan"
                >
                  Save Snippet
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      )}

      {/* Authentic Obsidian Personal Note Viewer Modal */}
      {activeObsidianNote && (
        <ObsidianNoteViewer
          note={activeObsidianNote}
          globalVars={globalVars}
          soundEnabled={soundEnabled}
          onClose={() => setActiveObsidianNote(null)}
          onNavigateToNote={(noteId) => {
            const found = getNoteById(noteId);
            if (found) {
              setActiveObsidianNote(found);
            }
          }}
          defaultLanguage={cptsLangMode}
        />
      )}
    </div>
  );
};
