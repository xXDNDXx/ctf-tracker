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
  Layers,
  Compass,
  FileText,
  Languages,
  ArrowRightLeft
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
  getCptsCategories, 
  searchCptsNotes 
} from '../../utils/obsidianManualUtils';

export type CptsLanguageMode = 'bilingual' | 'en' | 'he';

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
  const [cptsLangMode, setCptsLangMode] = useState<CptsLanguageMode>('bilingual');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedCptsCategory, setSelectedCptsCategory] = useState('ALL');
  const [cptsLimit, setCptsLimit] = useState(30);
  const [expandedNotes, setExpandedNotes] = useState<Record<string, boolean>>({});
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Sync viewMode when route changes
  useEffect(() => {
    if (defaultMode) {
      setViewMode(defaultMode);
    } else if (location.pathname.includes('note') || location.pathname.includes('manual') || location.search.includes('manual') || location.search.includes('cpts')) {
      setViewMode('cpts-manual');
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
    let list = searchCptsNotes(searchQuery, selectedCptsCategory);
    if (cptsLangMode === 'en') {
      list = list.filter(n => (n.titleEn && n.titleEn.length > 2) || (n.enSummary && n.enSummary.length > 2) || !/[\u0590-\u05FF]/.test(n.title));
    } else if (cptsLangMode === 'he') {
      list = list.filter(n => /[\u0590-\u05FF]/.test(n.title + ' ' + (n.heSummary || '') + ' ' + (n.summary || '')));
    }
    return list;
  }, [searchQuery, selectedCptsCategory, cptsLangMode]);

  const visibleCptsNotes = useMemo(() => {
    return filteredCptsNotes.slice(0, cptsLimit);
  }, [filteredCptsNotes, cptsLimit]);

  const totalCptsCommands = useMemo(() => {
    return filteredCptsNotes.reduce((sum, n) => sum + (n.commands ? n.commands.length : 0), 0);
  }, [filteredCptsNotes]);

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
              value={globalVars.lhost}
              onChange={(e) => setGlobalVars({ lhost: e.target.value })}
              className="w-28 bg-cyber-card px-2 py-1 rounded border border-cyber-border text-white text-xs focus:outline-none focus:border-cyber-cyan transition-all"
            />
          </div>

          <div className="flex items-center gap-1.5">
            <span className="text-cyber-muted text-[10px]">LPORT:</span>
            <input
              type="text"
              value={globalVars.lport}
              onChange={(e) => setGlobalVars({ lport: e.target.value })}
              className="w-16 bg-cyber-card px-2 py-1 rounded border border-cyber-border text-white text-xs focus:outline-none focus:border-cyber-cyan transition-all"
            />
          </div>

          <div className="flex items-center gap-1.5">
            <span className="text-cyber-muted text-[10px]">TARGET:</span>
            <input
              type="text"
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
                    setCptsLimit(30);
                  }}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs transition-all text-left ${
                    selectedCptsCategory === 'ALL'
                      ? 'bg-purple-500/20 text-purple-300 border border-purple-500/40 font-bold shadow-md'
                      : 'text-cyber-muted hover:text-white hover:bg-cyber-bg'
                  }`}
                >
                  <span>All Field Notes</span>
                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-black/40 border border-cyber-border">
                    {CPTS_NOTES.length}
                  </span>
                </motion.button>

                {cptsCategories.map((cat, idx) => {
                  const isSelected = selectedCptsCategory === cat.category;
                  const stageNum = String(idx).padStart(2, '0');
                  return (
                    <motion.button
                      whileHover={{ x: 3 }}
                      whileTap={{ scale: 0.98 }}
                      key={cat.category}
                      onClick={() => {
                        setSelectedCptsCategory(cat.category);
                        setCptsLimit(30);
                      }}
                      className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs transition-all text-left ${
                        isSelected
                          ? 'bg-purple-500/20 text-purple-300 border border-purple-500/40 font-bold shadow-md'
                          : 'text-cyber-muted hover:text-white hover:bg-cyber-bg'
                      }`}
                    >
                      <div className="flex items-center gap-1.5 truncate pr-1">
                        <span className="text-[9px] font-mono px-1 py-0.2 rounded bg-purple-950/60 border border-purple-800/40 text-purple-400">
                          {stageNum}
                        </span>
                        <span className="truncate">{cat.category}</span>
                      </div>
                      <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-black/40 border border-cyber-border flex-shrink-0">
                        {cat.count}
                      </span>
                    </motion.button>
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

          {/* VIEW MODE 2: CPTS FIELD MANUAL (SLICED INCREMENTAL RENDERING AT 120 FPS) */}
          {viewMode === 'cpts-manual' && (
            <div className="space-y-4">
              {/* Field Manual HUD Header with 3-Way Bilingual Switcher */}
              <div className="p-3.5 rounded-xl border border-purple-500/30 bg-purple-950/20 flex flex-wrap items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-2 flex-wrap">
                  <BookOpen className="w-4 h-4 text-purple-400" />
                  <span className="text-white font-bold tracking-wide">
                    DANIEL DAYAN'S CPTS FIELD MANUAL
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 font-mono">
                    {selectedCptsCategory === 'ALL' ? 'ALL 414 NOTES' : selectedCptsCategory.toUpperCase()}
                  </span>
                </div>

                {/* 3-Way Language Selector */}
                <div className="flex items-center gap-1 bg-cyber-bg/90 p-1 rounded-lg border border-purple-500/30 text-xs">
                  <span className="text-[10px] text-purple-400 font-semibold px-1.5 flex items-center gap-1">
                    <Languages className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">LANG:</span>
                  </span>
                  <button
                    type="button"
                    data-testid="cpts-lang-bilingual"
                    onClick={() => setCptsLangMode('bilingual')}
                    className={`px-2 py-0.5 rounded text-xs font-bold transition-all flex items-center gap-1 ${
                      cptsLangMode === 'bilingual'
                        ? 'bg-purple-600 text-white shadow-md shadow-purple-600/40'
                        : 'text-cyber-muted hover:text-white'
                    }`}
                    title="Display English and Hebrew side-by-side"
                  >
                    <span>🌐 Bilingual</span>
                  </button>
                  <button
                    type="button"
                    data-testid="cpts-lang-en"
                    onClick={() => setCptsLangMode('en')}
                    className={`px-2 py-0.5 rounded text-xs font-bold transition-all flex items-center gap-1 ${
                      cptsLangMode === 'en'
                        ? 'bg-purple-600 text-white shadow-md shadow-purple-600/40'
                        : 'text-cyber-muted hover:text-white'
                    }`}
                    title="English only"
                  >
                    <span>🇬🇧 EN</span>
                  </button>
                  <button
                    type="button"
                    data-testid="cpts-lang-he"
                    onClick={() => setCptsLangMode('he')}
                    className={`px-2 py-0.5 rounded text-xs font-bold transition-all flex items-center gap-1 ${
                      cptsLangMode === 'he'
                        ? 'bg-purple-600 text-white shadow-md shadow-purple-600/40'
                        : 'text-cyber-muted hover:text-white'
                    }`}
                    title="עברית בלבד"
                  >
                    <span>🇮🇱 עברית</span>
                  </button>
                </div>

                {/* RTL / LTR Direction Selector */}
                <div className="flex items-center gap-1 bg-cyber-bg/90 p-1 rounded-lg border border-purple-500/30 text-xs">
                  <span className="text-[10px] text-purple-400 font-semibold px-1.5 flex items-center gap-1">
                    <ArrowRightLeft className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">DIR:</span>
                  </span>
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

                <div className="text-[11px] text-cyber-muted font-mono">
                  Showing <strong className="text-purple-300">{visibleCptsNotes.length}</strong> of <strong className="text-white">{filteredCptsNotes.length}</strong> notes (<strong className="text-cyber-cyan">{totalCptsCommands}</strong> total commands)
                </div>
              </div>

              {/* Sliced List of Field Manual Notes (Pure CSS Hover, Zero Layout Shift) */}
              <div className="space-y-3">
                {visibleCptsNotes.length === 0 ? (
                  <div className="p-8 text-center rounded-xl border border-dashed border-cyber-border bg-cyber-card/50 text-cyber-muted text-xs">
                    No field manual notes matching "{searchQuery}".
                  </div>
                ) : (
                  visibleCptsNotes.map((note) => {
                    const isNoteExpanded = Boolean(expandedNotes[note.id]);
                    const commandsToShow = isNoteExpanded ? note.commands : (note.commands ? note.commands.slice(0, 2) : []);
                    const extraCommandsCount = note.commands ? Math.max(0, note.commands.length - 2) : 0;
                    const isRtlCard = notesTextDirection === 'rtl' || (notesTextDirection === 'auto' && cptsLangMode === 'he');

                    return (
                      <div
                        key={note.id}
                        dir={isRtlCard ? 'rtl' : 'ltr'}
                        className={`p-4 rounded-xl border border-cyber-border bg-cyber-card hover:border-purple-500/50 hover:shadow-lg transition-all space-y-3 group ${
                          isRtlCard ? 'text-right' : 'text-left'
                        }`}
                      >
                        {/* Note Header */}
                        <div className="flex items-start justify-between gap-3">
                          <div className="space-y-2 flex-1 min-w-0">
                            {/* Titles based on cptsLangMode */}
                            {cptsLangMode === 'en' ? (
                              <div>
                                <span className="font-bold text-white text-sm group-hover:text-purple-300 transition-colors">
                                  {note.titleEn || note.title}
                                </span>
                              </div>
                            ) : cptsLangMode === 'he' ? (
                              <div className="text-right" dir="rtl">
                                <span className="font-bold text-white text-sm group-hover:text-purple-300 transition-colors font-sans">
                                  {note.titleHe || note.title}
                                </span>
                                {note.titleEn && note.titleEn !== (note.titleHe || note.title) && (
                                  <div className="text-[11px] text-cyber-muted font-mono mt-0.5 text-left" dir="ltr">
                                    EN: {note.titleEn}
                                  </div>
                                )}
                              </div>
                            ) : (
                              /* Bilingual Title */
                              <div className="space-y-0.5">
                                <div className="font-bold text-white text-sm group-hover:text-purple-300 transition-colors">
                                  {note.titleEn || note.title}
                                </div>
                                {note.titleHe && note.titleHe !== (note.titleEn || note.title) && (
                                  <div className="text-xs text-purple-300 font-sans font-medium text-right" dir="rtl">
                                    {note.titleHe}
                                  </div>
                                )}
                              </div>
                            )}

                            {/* Badges: Stage, Category, Difficulty, Tools */}
                            <div className="flex items-center gap-1.5 flex-wrap">
                              {note.stage && (
                                <span className="text-[9px] px-2 py-0.5 rounded bg-blue-500/15 text-blue-300 border border-blue-500/30 font-mono font-semibold">
                                  🎯 Stage: {note.stage}
                                </span>
                              )}
                              <span className="text-[9px] px-2 py-0.5 rounded bg-purple-500/15 text-purple-300 border border-purple-500/30 font-mono">
                                {note.category}
                              </span>
                              <span className="text-[9px] px-2 py-0.5 rounded bg-cyber-bg border border-cyber-border text-cyber-muted font-mono">
                                {note.difficulty}
                              </span>
                              {note.tools && note.tools.map((t) => (
                                <span
                                  key={t}
                                  className="text-[9px] px-1.5 py-0.5 rounded bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 font-mono"
                                >
                                  🔧 {t}
                                </span>
                              ))}
                            </div>

                            {/* Summaries based on cptsLangMode */}
                            {cptsLangMode === 'en' ? (
                              <div className="text-[11px] text-cyber-muted leading-relaxed font-sans">
                                {note.enSummary || note.summary || note.subCategory}
                              </div>
                            ) : cptsLangMode === 'he' ? (
                              <div className="text-[11px] text-purple-200/90 leading-relaxed font-sans text-right" dir="rtl">
                                {note.heSummary || note.summary || note.subCategory}
                              </div>
                            ) : (
                              /* Bilingual dual summary cards */
                              note.heSummary && note.enSummary && note.heSummary !== note.enSummary ? (
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-[11px] leading-relaxed pt-1">
                                  <div className="p-2.5 rounded-lg bg-black/40 border border-white/5 font-sans text-gray-300 space-y-1">
                                    <div className="flex items-center gap-1 text-[9px] font-mono font-bold text-cyber-muted uppercase tracking-wider">
                                      <span>🇬🇧 ENGLISH INTEL</span>
                                    </div>
                                    <p className="line-clamp-3">{note.enSummary}</p>
                                  </div>
                                  <div className="p-2.5 rounded-lg bg-purple-950/20 border border-purple-500/20 font-sans text-purple-200 space-y-1 text-right" dir="rtl">
                                    <div className="flex items-center justify-between gap-1 text-[9px] font-mono font-bold text-purple-400 uppercase tracking-wider" dir="ltr">
                                      <span>🇮🇱 HEBREW INTEL (מטרה מעשית)</span>
                                    </div>
                                    <p className="line-clamp-3">{note.heSummary}</p>
                                  </div>
                                </div>
                              ) : (
                                <div className="text-[11px] text-cyber-muted leading-relaxed font-sans">
                                  {note.summary || note.enSummary || note.heSummary || note.subCategory}
                                </div>
                              )
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

                          {/* Quick Action: Copy All Commands in Note */}
                          {note.commands && note.commands.length > 1 && (
                            <button
                              type="button"
                              onClick={() => handleCopyAllNoteCommands(note)}
                              className={`flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-semibold flex-shrink-0 transition-all ${
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
                                onClick={() => setExpandedNotes(prev => ({ ...prev, [note.id]: !prev[note.id] }))}
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

              {/* Sliced Pagination Controls */}
              {visibleCptsNotes.length < filteredCptsNotes.length && (
                <div className="p-4 rounded-xl border border-cyber-border bg-cyber-card flex flex-wrap items-center justify-center gap-3">
                  <button
                    type="button"
                    onClick={() => setCptsLimit(prev => prev + 30)}
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
                <label className="block text-cyber-muted uppercase tracking-wider mb-1 font-semibold">
                  Command Title *
                </label>
                <input
                  type="text"
                  required
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  placeholder="e.g. Chamilo LMS RCE Exploit"
                  className="w-full bg-cyber-bg px-3 py-2 rounded-lg border border-cyber-border text-white focus:outline-none focus:border-cyber-cyan"
                />
              </div>

              <div>
                <label className="block text-cyber-muted uppercase tracking-wider mb-1 font-semibold">
                  Category
                </label>
                <select
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
                <label className="block text-cyber-muted uppercase tracking-wider mb-1 font-semibold">
                  Description
                </label>
                <input
                  type="text"
                  value={newDesc}
                  onChange={(e) => setNewDesc(e.target.value)}
                  placeholder="Brief note on exploit parameters..."
                  className="w-full bg-cyber-bg px-3 py-2 rounded-lg border border-cyber-border text-white focus:outline-none focus:border-cyber-cyan"
                />
              </div>

              <div>
                <label className="block text-cyber-muted uppercase tracking-wider mb-1 font-semibold">
                  Command Template (Supports &#123;TARGET_IP&#125;, &#123;LHOST&#125;, &#123;LPORT&#125;) *
                </label>
                <textarea
                  rows={3}
                  required
                  value={newTemplate}
                  onChange={(e) => setNewTemplate(e.target.value)}
                  placeholder="python3 exploit.py -t {TARGET_IP} -l {LHOST} -p {LPORT}"
                  className="w-full bg-cyber-bg px-3 py-2 rounded-lg border border-cyber-border text-white focus:outline-none focus:border-cyber-cyan font-mono resize-none"
                />
              </div>

              <div>
                <label className="block text-cyber-muted uppercase tracking-wider mb-1 font-semibold">
                  Tags (Comma-separated)
                </label>
                <input
                  type="text"
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
    </div>
  );
};
