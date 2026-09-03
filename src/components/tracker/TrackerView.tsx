import React, { useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  RotateCcw, 
  Kanban, 
  Table, 
  LayoutGrid, 
  Globe,
  Terminal,
  Cpu,
  Layers,
  Sparkles,
  Shield,
  Key,
  FolderGit2,
  ChevronRight,
  Target,
  Zap,
  ArrowUpDown,
  Eye,
  EyeOff
} from 'lucide-react';
import { useCtfStore, BoxVectorCategory, mergeMachinesWithCatalog } from '../../store/useCtfStore';
import { playCyberSound, triggerRootCelebration } from '../../utils/helpers';
import { Platform, Difficulty, OperatingSystem } from '../../types';
import { KanbanBoard } from './KanbanBoard';
import { TableView } from './TableView';
import { GridView } from './GridView';
import { PlatformBadge, PlatformIcon } from '../common/PlatformBadge';
import { OsIcon } from '../common/OsBadge';
import { PRACTICE_TRACKS, PracticeTrack } from '../../data/tracksData';

export const TrackerView: React.FC = () => {
  const {
    machines,
    filters,
    setFilters,
    resetFilters,
    viewMode,
    setViewMode,
    setReconAutomationModalOpen,
  } = useCtfStore();

  // Extract all unique tags across machines
  const allTags = useMemo(() => {
    const set = new Set<string>();
    machines.forEach((m) => {
      m.tags.forEach((t) => set.add(t));
    });
    return Array.from(set).sort();
  }, [machines]);

  // Track statistics (pwned count & total for each track)
  const trackStats = useMemo(() => {
    const stats: Record<string, { total: number; rooted: number; percent: number }> = {};
    
    PRACTICE_TRACKS.forEach((track) => {
      const matching = machines.filter(track.filterFn);
      const total = matching.length;
      const rooted = matching.filter(m => m.status === 'root' || m.status === 'completed').length;
      const percent = total > 0 ? Math.round((rooted / total) * 100) : 0;
      stats[track.id] = { total, rooted, percent };
    });

    return stats;
  }, [machines]);

  // Deferred search query for 120 FPS typing responsiveness
  const deferredQuery = React.useDeferredValue(filters.searchQuery);

  // Filter and sort machines based on active filter state
  const filteredMachines = useMemo(() => {
    const q = deferredQuery ? deferredQuery.trim().toLowerCase() : '';
    const platformFilter = filters.selectedPlatform;
    const diffFilter = filters.selectedDifficulty;
    const osFilter = filters.selectedOs;
    const trackFilter = filters.selectedTrack;
    const catFilter = filters.selectedCategory;
    const certFilter = filters.selectedCert;
    const hasTags = filters.selectedTags.length > 0;
    const selectedTrack = (trackFilter && trackFilter !== 'ALL') ? PRACTICE_TRACKS.find(t => t.id === trackFilter) : null;

    const list = machines.filter((m) => {
      // 1. Fast primitive checks first (0 allocations, rejects immediately)
      if (platformFilter !== 'ALL' && m.platform !== platformFilter) return false;
      if (diffFilter !== 'ALL' && m.difficulty !== diffFilter) return false;
      if (osFilter && osFilter !== 'ALL' && m.os !== osFilter) return false;
      if (certFilter !== 'ALL' && !m.certifications.includes(certFilter)) return false;

      // 2. Curated Track filter
      if (selectedTrack && !selectedTrack.filterFn(m)) return false;

      // 3. Search query (only evaluated on candidates that passed platform/diff)
      if (q) {
        const matchName = m.name.toLowerCase().includes(q);
        const matchIp = m.ip.includes(q);
        const matchOs = m.os.toLowerCase().includes(q);
        const matchTag = m.tags.some((t) => t.toLowerCase().includes(q));
        if (!matchName && !matchIp && !matchOs && !matchTag) return false;
      }

      // 4. Exploit Vector / Box Archetype filter
      if (catFilter && catFilter !== 'ALL') {
        if (catFilter === 'Web') {
          const webTags = ['web', 'sqli', 'xss', 'rce', 'lfi', 'ssti', 'csrf', 'idor', 'deserialization', 'upload', 'ssrf'];
          if (!m.tags.some(t => webTags.includes(t.toLowerCase()))) return false;
        } else if (catFilter === 'Linux PrivEsc') {
          const lpeTags = ['sudo', 'cron', 'suid', 'kernel', 'wildcard', 'path hijack', 'capabilities', 'docker', 'lxd', 'privesc'];
          if (m.os !== 'Linux' || !m.tags.some(t => lpeTags.includes(t.toLowerCase()))) return false;
        } else if (catFilter === 'Windows PrivEsc') {
          const wpeTags = ['token', 'impersonation', 'seimpersonate', 'potato', 'alwaysinstallelevated', 'unquoted', 'dll hijacking', 'uac', 'service'];
          if (m.os !== 'Windows' || !m.tags.some(t => wpeTags.includes(t.toLowerCase()))) return false;
        } else if (catFilter === 'Active Directory') {
          const adTags = ['active directory', 'kerberos', 'roasting', 'bloodhound', 'as-rep', 'kerberoast', 'gpo', 'ldap', 'ad'];
          if (m.os !== 'Active Directory' && !m.tags.some(t => adTags.includes(t.toLowerCase()))) return false;
        } else if (catFilter === 'Binary / Pwn') {
          const bofTags = ['bof', 'buffer overflow', 'pwn', 'binary', 'overflow', 'rop', 'format string'];
          if (!m.tags.some(t => bofTags.includes(t.toLowerCase()))) return false;
        } else if (catFilter === 'Network / SMB') {
          const netTags = ['smb', 'samba', 'ftp', 'snmp', 'ssh', 'rpc', 'nfs', 'anonymous'];
          if (!m.tags.some(t => netTags.includes(t.toLowerCase()))) return false;
        }
      }

      // 5. Selected Tags
      if (hasTags) {
        const hasAllTags = filters.selectedTags.every((t) => m.tags.includes(t));
        if (!hasAllTags) return false;
      }

      return true;
    });

    // Apply Sorting
    if (filters.sortBy && filters.sortBy !== 'default') {
      const difficultyWeights: Record<string, number> = {
        'Very Easy': 1,
        'Easy': 2,
        'Medium': 3,
        'Hard': 4,
        'Insane': 5,
      };

      list.sort((a, b) => {
        let cmp = 0;
        if (filters.sortBy === 'difficulty') {
          const wa = difficultyWeights[a.difficulty] || 0;
          const wb = difficultyWeights[b.difficulty] || 0;
          cmp = wa - wb;
        } else if (filters.sortBy === 'name') {
          cmp = a.name.localeCompare(b.name);
        } else if (filters.sortBy === 'ip') {
          cmp = a.ip.localeCompare(b.ip, undefined, { numeric: true });
        } else if (filters.sortBy === 'recent') {
          const dateA = a.rootPwnedAt || a.userPwnedAt || a.updatedAt || a.createdAt || '';
          const dateB = b.rootPwnedAt || b.userPwnedAt || b.updatedAt || b.createdAt || '';
          cmp = dateB.localeCompare(dateA);
        }

        return filters.sortDirection === 'desc' ? -cmp : cmp;
      });
    }

    return list;
  }, [
    machines, 
    deferredQuery, 
    filters.selectedPlatform, 
    filters.selectedDifficulty, 
    filters.selectedOs,
    filters.selectedCategory,
    filters.selectedTrack,
    filters.selectedCert, 
    filters.selectedTags,
    filters.sortBy,
    filters.sortDirection
  ]);

  const platformList: (Platform | 'ALL')[] = ['ALL', 'HTB', 'THM', 'VulnHub', 'ProLabs', 'Custom'];
  const difficultyList: (Difficulty | 'ALL')[] = ['ALL', 'Very Easy', 'Easy', 'Medium', 'Hard', 'Insane'];
  const osList: ('ALL' | OperatingSystem)[] = ['ALL', 'Linux', 'Windows', 'Active Directory'];
  const vectorCategoryList: BoxVectorCategory[] = [
    'ALL', 
    'Web', 
    'Linux PrivEsc', 
    'Windows PrivEsc', 
    'Active Directory', 
    'Network / SMB', 
    'Binary / Pwn'
  ];

  const isFiltered =
    Boolean(filters.searchQuery) ||
    filters.selectedPlatform !== 'ALL' ||
    filters.selectedDifficulty !== 'ALL' ||
    (filters.selectedOs && filters.selectedOs !== 'ALL') ||
    (filters.selectedCategory && filters.selectedCategory !== 'ALL') ||
    (filters.selectedTrack && filters.selectedTrack !== 'ALL') ||
    filters.selectedCert !== 'ALL' ||
    filters.selectedTags.length > 0;

  return (
    <div className="space-y-4 w-full">
      {/* 1. Curated Practice Tracks Carousel / Pathways */}
      <div className="p-3 rounded-xl border border-cyber-border bg-cyber-card/90 shadow-md font-mono space-y-2">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <Target className="w-4 h-4 text-cyber-cyan" />
            <span className="text-xs font-bold text-white uppercase tracking-wider">
              CURATED TACTICAL PATHWAYS & TRACKS
            </span>
          </div>
          {filters.selectedTrack !== 'ALL' && (
            <button
              onClick={() => setFilters({ selectedTrack: 'ALL' })}
              className="text-[10px] text-cyber-cyan hover:underline flex items-center gap-1"
            >
              <span>Clear Track Selection</span>
              <span>✕</span>
            </button>
          )}
        </div>

        {/* Tracks Horizontal Scroll */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-thin">
          {PRACTICE_TRACKS.map((track) => {
            const isSelected = filters.selectedTrack === track.id;
            const stats = trackStats[track.id] || { total: 0, rooted: 0, percent: 0 };

            return (
              <motion.button
                key={track.id}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() =>
                  setFilters({
                    selectedTrack: isSelected ? 'ALL' : track.id,
                  })
                }
                className={`p-2.5 rounded-lg border text-left flex-shrink-0 min-w-[210px] transition-all relative group overflow-hidden ${
                  isSelected
                    ? 'border-cyber-cyan bg-cyber-card shadow-glow-cyan/20 ring-1 ring-cyber-cyan/40'
                    : 'border-cyber-border bg-cyber-bg hover:border-cyber-borderGlow'
                }`}
              >
                <div className="flex items-center justify-between gap-2 mb-1">
                  <span className={`text-[11px] font-bold truncate ${isSelected ? 'text-cyber-cyan' : 'text-white'}`}>
                    {track.shortName}
                  </span>
                  <span className="text-[10px] px-1.5 py-0.2 rounded font-mono font-bold bg-cyber-card border border-cyber-border text-cyber-muted">
                    {stats.rooted}/{stats.total}
                  </span>
                </div>

                {/* Progress Mini Bar */}
                <div className="w-full bg-cyber-card h-1.5 rounded-full overflow-hidden border border-cyber-border/80">
                  <motion.div
                    className="h-full bg-gradient-to-r from-cyber-emerald to-cyber-cyan"
                    initial={{ width: 0 }}
                    animate={{ width: `${stats.percent}%` }}
                    transition={{ duration: 0.5 }}
                  />
                </div>

                <div className="flex items-center justify-between text-[9px] text-cyber-muted mt-1.5">
                  <span className="truncate max-w-[130px]">{track.category.toUpperCase()}</span>
                  <span className="font-mono text-cyber-emerald font-bold">{stats.percent}% PWN</span>
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* 2. Primary Filter, Search, and View Controls */}
      <div className="p-3.5 rounded-xl border border-cyber-border bg-cyber-card/90 shadow-md font-mono space-y-3">
        
        <div className="flex flex-wrap items-center justify-between gap-3">
          {/* Search Input */}
          <div className="relative flex-1 min-w-[260px]">
            <Search className="absolute left-3 top-2.5 w-4 h-4 text-cyber-muted" />
            <input
              type="text"
              value={filters.searchQuery}
              onChange={(e) => setFilters({ searchQuery: e.target.value })}
              placeholder="Search by target name, IP (10.10.x), OS, exploit vector, or CVE..."
              className="w-full pl-9 pr-4 py-2 bg-cyber-bg border border-cyber-border rounded-lg text-xs text-white placeholder-cyber-muted focus:outline-none focus:border-cyber-emerald"
            />
            {filters.searchQuery && (
              <button
                onClick={() => setFilters({ searchQuery: '' })}
                className="absolute right-3 top-2.5 text-xs text-cyber-muted hover:text-white"
              >
                ✕
              </button>
            )}
          </div>

          {/* Attractive Platform Selector with Genuine Glowing Badges */}
          <div className="flex items-center gap-1.5 overflow-x-auto py-0.5">
            {platformList.map((p) => {
              const active = filters.selectedPlatform === p;
              return (
                <motion.button
                  key={p}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setFilters({ selectedPlatform: p })}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 border ${
                    active
                      ? p === 'HTB'
                        ? 'bg-cyber-emerald/20 border-cyber-emerald text-cyber-emerald shadow-glow-emerald/30 font-bold'
                        : p === 'THM'
                        ? 'bg-cyber-crimson/20 border-cyber-crimson text-cyber-crimson shadow-glow-crimson/30 font-bold'
                        : 'bg-cyber-cyan/20 border-cyber-cyan text-cyber-cyan shadow-glow-cyan/30 font-bold'
                      : 'bg-cyber-bg border-cyber-border text-cyber-muted hover:text-white hover:border-cyber-borderGlow'
                  }`}
                >
                  {p !== 'ALL' && <PlatformIcon platform={p as Platform} className="w-3.5 h-3.5" />}
                  <span>{p === 'ALL' ? 'All Platforms' : p}</span>
                </motion.button>
              );
            })}
          </div>

          {/* Sorting Controls */}
          <div className="flex items-center gap-1.5 bg-cyber-bg px-2.5 py-1 rounded-lg border border-cyber-border text-xs">
            <ArrowUpDown className="w-3.5 h-3.5 text-cyber-cyan" />
            <span className="text-[10px] uppercase font-bold text-cyber-muted">Sort:</span>
            <select
              value={filters.sortBy || 'default'}
              onChange={(e) => setFilters({ sortBy: e.target.value as any })}
              className="bg-transparent text-white text-xs font-semibold focus:outline-none cursor-pointer"
            >
              <option value="default" className="bg-cyber-card text-white">Default Order</option>
              <option value="difficulty" className="bg-cyber-card text-white">Difficulty (Easy → Hard)</option>
              <option value="name" className="bg-cyber-card text-white">Target Name (A-Z)</option>
              <option value="ip" className="bg-cyber-card text-white">IP Address</option>
              <option value="recent" className="bg-cyber-card text-white">Recently Solved</option>
            </select>
            {filters.sortBy && filters.sortBy !== 'default' && (
              <button
                onClick={() => setFilters({ sortDirection: filters.sortDirection === 'asc' ? 'desc' : 'asc' })}
                className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-cyber-card hover:bg-cyber-card/80 text-cyber-cyan border border-cyber-cyan/30"
                title={`Sort ${filters.sortDirection === 'asc' ? 'Ascending' : 'Descending'} (Click to toggle)`}
              >
                {filters.sortDirection === 'asc' ? 'ASC ↑' : 'DESC ↓'}
              </button>
            )}
          </div>

          {/* Kanban Hide Empty Lanes Toggle */}
          {viewMode === 'kanban' && (
            <button
              onClick={() => setFilters({ hideEmptyLanes: !filters.hideEmptyLanes })}
              className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border text-xs font-semibold transition-all whitespace-nowrap ${
                filters.hideEmptyLanes
                  ? 'bg-cyber-amber/15 text-cyber-amber border-cyber-amber/50 shadow-glow-amber/20'
                  : 'bg-cyber-bg border-cyber-border text-cyber-muted hover:text-white'
              }`}
              title="Toggle collapsing empty Kanban columns"
            >
              {filters.hideEmptyLanes ? <EyeOff className="w-3.5 h-3.5 text-cyber-amber" /> : <Eye className="w-3.5 h-3.5 text-cyber-muted" />}
              <span>{filters.hideEmptyLanes ? 'Empty Lanes Hidden' : 'Hide Empty Lanes'}</span>
            </button>
          )}

          {/* Tactical Recon Automation Launcher */}
          <button
            onClick={() => setReconAutomationModalOpen(true)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyber-emerald/10 text-cyber-emerald border border-cyber-emerald/40 hover:bg-cyber-emerald hover:text-black font-semibold text-xs transition-all shadow-glow-emerald/20 whitespace-nowrap"
            title="Launch Tactical Recon & Scan Automation"
          >
            <Zap className="w-3.5 h-3.5" />
            <span>Recon Automation</span>
          </button>

          {/* View Mode Switcher */}
          <div className="flex items-center gap-1 bg-cyber-bg p-1 rounded-lg border border-cyber-border">
            <button
              onClick={() => setViewMode('kanban')}
              className={`p-1.5 rounded transition-all ${
                viewMode === 'kanban'
                  ? 'bg-cyber-card text-cyber-emerald border border-cyber-emerald/40'
                  : 'text-cyber-muted hover:text-white'
              }`}
              title="Kanban Board View"
            >
              <Kanban className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode('table')}
              className={`p-1.5 rounded transition-all ${
                viewMode === 'table'
                  ? 'bg-cyber-card text-cyber-emerald border border-cyber-emerald/40'
                  : 'text-cyber-muted hover:text-white'
              }`}
              title="Data Table View"
            >
              <Table className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode('grid')}
              className={`p-1.5 rounded transition-all ${
                viewMode === 'grid'
                  ? 'bg-cyber-card text-cyber-emerald border border-cyber-emerald/40'
                  : 'text-cyber-muted hover:text-white'
              }`}
              title="Grid Cards View"
            >
              <LayoutGrid className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 3. Quick OS & Box Archetype Vector Filter Bars */}
        <div className="pt-2.5 border-t border-cyber-border/70 space-y-2.5">
          {/* OS Quick Filters */}
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-cyber-muted text-[10px] uppercase font-bold tracking-wider">TARGET OS:</span>
            <div className="flex items-center gap-1.5 flex-wrap">
              {osList.map((os) => {
                const isActive = (filters.selectedOs || 'ALL') === os;
                return (
                  <button
                    key={os}
                    onClick={() => setFilters({ selectedOs: os })}
                    className={`px-2.5 py-1 rounded text-[11px] border font-semibold transition-all flex items-center gap-1.5 ${
                      isActive
                        ? 'bg-cyber-card text-white border-cyber-emerald shadow-glow-emerald/20 font-bold'
                        : 'bg-cyber-bg border-cyber-border text-cyber-muted hover:text-white hover:border-cyber-borderGlow'
                    }`}
                  >
                    {os === 'ALL' ? (
                      <Globe className="w-3.5 h-3.5 text-cyber-cyan" />
                    ) : (
                      <OsIcon os={os} className="w-3.5 h-3.5" />
                    )}
                    <span>{os === 'ALL' ? 'All OS' : os}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Exploit Vector / Box Archetype Quick Filters */}
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-cyber-muted text-[10px] uppercase font-bold tracking-wider">EXPLOIT VECTOR:</span>
            <div className="flex items-center gap-1.5 flex-wrap">
              {vectorCategoryList.map((vec) => {
                const isActive = (filters.selectedCategory || 'ALL') === vec;
                return (
                  <button
                    key={vec}
                    onClick={() => setFilters({ selectedCategory: vec })}
                    className={`px-2.5 py-1 rounded text-[11px] border transition-all flex items-center gap-1.5 ${
                      isActive
                        ? 'bg-cyber-card text-white border-cyber-cyan shadow-glow-cyan/20 font-bold'
                        : 'bg-cyber-bg border-cyber-border text-cyber-muted hover:text-white hover:border-cyber-borderGlow'
                    }`}
                  >
                    {vec === 'Web' && <Globe className="w-3 h-3 text-cyber-cyan" />}
                    {vec === 'Linux PrivEsc' && <Terminal className="w-3 h-3 text-cyber-crimson" />}
                    {vec === 'Windows PrivEsc' && <Layers className="w-3 h-3 text-blue-400" />}
                    {vec === 'Active Directory' && <Cpu className="w-3 h-3 text-cyber-purple" />}
                    {vec === 'Network / SMB' && <Key className="w-3 h-3 text-cyber-amber" />}
                    {vec === 'Binary / Pwn' && <Sparkles className="w-3 h-3 text-cyber-crimson" />}
                    <span>{vec === 'ALL' ? 'All Vectors' : vec}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* 4. Secondary Filters Bar (Difficulty, Cert, Attack Tag, Reset) */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-2.5 border-t border-cyber-border/70 text-xs">
          
          <div className="flex flex-wrap items-center gap-3">
            {/* Difficulty Dropdown */}
            <div className="flex items-center gap-1.5">
              <span className="text-cyber-muted text-[10px] uppercase font-bold">Difficulty:</span>
              <select
                value={filters.selectedDifficulty}
                onChange={(e) => setFilters({ selectedDifficulty: e.target.value as Difficulty | 'ALL' })}
                className="bg-cyber-bg border border-cyber-border px-2 py-1 rounded text-xs text-white focus:outline-none focus:border-cyber-cyan"
              >
                {difficultyList.map((d) => (
                  <option key={d} value={d}>
                    {d}
                  </option>
                ))}
              </select>
            </div>

            {/* Attack Tag Select */}
            <div className="flex items-center gap-1.5">
              <span className="text-cyber-muted text-[10px] uppercase font-bold">Attack Tag:</span>
              <select
                onChange={(e) => {
                  if (e.target.value && !filters.selectedTags.includes(e.target.value)) {
                    setFilters({ selectedTags: [...filters.selectedTags, e.target.value] });
                  }
                  e.target.value = '';
                }}
                className="bg-cyber-bg border border-cyber-border px-2 py-1 rounded text-xs text-cyber-cyan focus:outline-none focus:border-cyber-cyan"
                defaultValue=""
              >
                <option value="" disabled>Filter by vector tag...</option>
                {allTags.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>

            {/* Selected Tag Pills */}
            {filters.selectedTags.map((t) => (
              <span
                key={t}
                className="flex items-center gap-1 px-2 py-0.5 rounded bg-cyber-bg border border-cyber-cyan/40 text-cyber-cyan text-[11px]"
              >
                <span>{t}</span>
                <button
                  onClick={() =>
                    setFilters({
                      selectedTags: filters.selectedTags.filter((x) => x !== t),
                    })
                  }
                  className="hover:text-cyber-crimson"
                >
                  ✕
                </button>
              </span>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <span className="text-cyber-muted text-xs">
              Showing <strong className="text-white">{filteredMachines.length}</strong> / {machines.length} targets
            </span>

            {isFiltered && (
              <button
                onClick={resetFilters}
                className="flex items-center gap-1 text-cyber-muted hover:text-white hover:underline text-xs"
              >
                <RotateCcw className="w-3 h-3" /> Reset All Filters
              </button>
            )}
          </div>

        </div>

      </div>

      {/* Main View Renderer */}
      {viewMode === 'kanban' && <KanbanBoard filteredMachines={filteredMachines} />}
      {viewMode === 'table' && <TableView filteredMachines={filteredMachines} />}
      {viewMode === 'grid' && <GridView filteredMachines={filteredMachines} />}
    </div>
  );
};
