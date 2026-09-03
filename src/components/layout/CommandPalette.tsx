import React, { useEffect, useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Search, 
  Terminal, 
  ShieldAlert, 
  Plus, 
  Database, 
  Tv, 
  FileText, 
  BarChart3, 
  X, 
  ExternalLink,
  ChevronRight,
  Sparkles,
  Compass,
  Zap,
  Globe
} from 'lucide-react';
import { useCtfStore } from '../../store/useCtfStore';

export const CommandPalette: React.FC = () => {
  const navigate = useNavigate();
  const {
    commandPaletteOpen,
    setCommandPaletteOpen,
    machines,
    cheatsheets,
    setSelectedMachineId,
    setActiveTab,
    setViewMode,
    setNewMachineModalOpen,
    setBackupModalOpen,
    setReconAutomationModalOpen,
    setOperatorModalOpen,
    toggleCrtOverlay,
    setWriteupMachineId
  } = useCtfStore();

  const [query, setQuery] = useState('');

  // Keyboard shortcut listener for Ctrl+K / Cmd+K / Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setCommandPaletteOpen(!commandPaletteOpen);
      } else if (e.key === 'Escape' && commandPaletteOpen) {
        setCommandPaletteOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [commandPaletteOpen, setCommandPaletteOpen]);

  // Filtered results
  const filteredMachines = useMemo(() => {
    if (!query.trim()) return machines.slice(0, 6);
    const q = query.toLowerCase();
    return machines
      .filter(
        (m) =>
          m.name.toLowerCase().includes(q) ||
          m.ip.includes(q) ||
          m.os.toLowerCase().includes(q) ||
          m.tags.some((t) => t.toLowerCase().includes(q))
      )
      .slice(0, 8);
  }, [query, machines]);

  const filteredCheats = useMemo(() => {
    if (!query.trim()) return cheatsheets.slice(0, 4);
    const q = query.toLowerCase();
    return cheatsheets
      .filter(
        (c) =>
          c.title.toLowerCase().includes(q) ||
          c.description.toLowerCase().includes(q) ||
          c.commandTemplate.toLowerCase().includes(q) ||
          c.tags.some((t) => t.toLowerCase().includes(q))
      )
      .slice(0, 6);
  }, [query, cheatsheets]);

  if (!commandPaletteOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 p-4 bg-black/75 backdrop-blur-sm animate-fade-in font-mono">
      <div 
        className="w-full max-w-2xl rounded-xl border border-cyber-border bg-cyber-card shadow-2xl overflow-hidden shadow-glow-emerald/10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 border-b border-cyber-border px-4 py-3 bg-cyber-bg/50">
          <Search className="w-5 h-5 text-cyber-emerald flex-shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a command, machine name, IP, tag, or quick action..."
            className="w-full bg-transparent text-sm text-white placeholder-cyber-muted focus:outline-none"
            autoFocus
          />
          {query && (
            <button onClick={() => setQuery('')} className="text-cyber-muted hover:text-white">
              <X className="w-4 h-4" />
            </button>
          )}
          <kbd className="px-2 py-0.5 rounded text-[10px] bg-cyber-border/70 text-cyber-muted border border-cyber-border">
            ESC
          </kbd>
        </div>

        {/* Results Container */}
        <div className="max-h-[60vh] overflow-y-auto p-3 space-y-4 text-xs">
          
          {/* Quick Actions */}
          <div>
            <div className="px-2 pb-1.5 text-[10px] uppercase font-bold tracking-wider text-cyber-muted flex items-center gap-1.5">
              <Sparkles className="w-3 h-3 text-cyber-cyan" /> QUICK ACTIONS
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
              <a
                href="https://xXDNDXx.github.io/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setCommandPaletteOpen(false)}
                className="flex items-center gap-2 p-2 rounded-lg bg-cyber-emerald/15 hover:bg-cyber-emerald/25 hover:border-cyber-emerald border border-cyber-emerald/40 text-left transition-all group"
              >
                <Globe className="w-4 h-4 text-cyber-emerald group-hover:scale-110 transition-transform" />
                <span className="text-white group-hover:text-cyber-emerald font-bold">Launch Daniel Dayan's Portfolio</span>
              </a>

              <button
                onClick={() => {
                  setCommandPaletteOpen(false);
                  setOperatorModalOpen(true);
                }}
                className="flex items-center gap-2 p-2 rounded-lg bg-cyber-bg hover:bg-cyber-cyan/15 hover:border-cyber-cyan/50 border border-cyber-border text-left transition-all group"
              >
                <Terminal className="w-4 h-4 text-cyber-cyan" />
                <span className="text-white group-hover:text-cyber-cyan font-medium">View Operator Dossier (Daniel Dayan)</span>
              </button>

              <button
                onClick={() => {
                  setCommandPaletteOpen(false);
                  setReconAutomationModalOpen(true);
                }}
                className="flex items-center gap-2 p-2 rounded-lg bg-cyber-bg hover:bg-cyber-emerald/10 hover:border-cyber-emerald/40 border border-cyber-border text-left transition-all group"
              >
                <Zap className="w-4 h-4 text-cyber-emerald" />
                <span className="text-white group-hover:text-cyber-emerald font-medium">Tactical Recon & Scan Automation</span>
              </button>

              <button
                onClick={() => {
                  setCommandPaletteOpen(false);
                  setNewMachineModalOpen(true);
                }}
                className="flex items-center gap-2 p-2 rounded-lg bg-cyber-bg hover:bg-cyber-emerald/10 hover:border-cyber-emerald/40 border border-cyber-border text-left transition-all group"
              >
                <Plus className="w-4 h-4 text-cyber-emerald" />
                <span className="text-white group-hover:text-cyber-emerald font-medium">Add Custom Box</span>
              </button>

              <button
                onClick={() => {
                  setCommandPaletteOpen(false);
                  navigate('/methodology');
                }}
                className="flex items-center gap-2 p-2 rounded-lg bg-cyber-bg hover:bg-cyber-cyan/10 hover:border-cyber-cyan/40 border border-cyber-border text-left transition-all group"
              >
                <Compass className="w-4 h-4 text-cyber-cyan" />
                <span className="text-white group-hover:text-cyber-cyan font-medium">Attack Methodology (8-Phases)</span>
              </button>

              <button
                onClick={() => {
                  setCommandPaletteOpen(false);
                  setActiveTab('writeup');
                  navigate('/writeup');
                }}
                className="flex items-center gap-2 p-2 rounded-lg bg-cyber-bg hover:bg-cyber-cyan/10 hover:border-cyber-cyan/40 border border-cyber-border text-left transition-all group"
              >
                <FileText className="w-4 h-4 text-cyber-cyan" />
                <span className="text-white group-hover:text-cyber-cyan font-medium">Open Writeup Studio</span>
              </button>

              <button
                onClick={() => {
                  setCommandPaletteOpen(false);
                  setBackupModalOpen(true);
                }}
                className="flex items-center gap-2 p-2 rounded-lg bg-cyber-bg hover:bg-cyber-purple/10 hover:border-cyber-purple/40 border border-cyber-border text-left transition-all group"
              >
                <Database className="w-4 h-4 text-cyber-purple" />
                <span className="text-white group-hover:text-cyber-purple font-medium">Backup / Restore JSON</span>
              </button>

              <button
                onClick={() => {
                  toggleCrtOverlay();
                  setCommandPaletteOpen(false);
                }}
                className="flex items-center gap-2 p-2 rounded-lg bg-cyber-bg hover:bg-cyber-amber/10 hover:border-cyber-amber/40 border border-cyber-border text-left transition-all group"
              >
                <Tv className="w-4 h-4 text-cyber-amber" />
                <span className="text-white group-hover:text-cyber-amber font-medium">Toggle CRT Scanlines</span>
              </button>
            </div>
          </div>

          {/* Machine Hits */}
          <div>
            <div className="px-2 pb-1.5 text-[10px] uppercase font-bold tracking-wider text-cyber-muted flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <ShieldAlert className="w-3 h-3 text-cyber-emerald" /> LAB MACHINES
              </span>
              <span className="text-[10px] text-cyber-muted">Total matches: {filteredMachines.length}</span>
            </div>

            <div className="space-y-1">
              {filteredMachines.length === 0 ? (
                <div className="px-3 py-2 text-cyber-muted text-center">No matching machines found.</div>
              ) : (
                filteredMachines.map((m) => (
                  <button
                    key={m.id}
                    onClick={() => {
                      setSelectedMachineId(m.id);
                      setCommandPaletteOpen(false);
                      setActiveTab('tracker');
                      navigate('/tracker');
                    }}
                    className="w-full flex items-center justify-between p-2 rounded-lg hover:bg-cyber-bg border border-transparent hover:border-cyber-border/80 transition-all text-left group"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className={`w-2 h-2 rounded-full ${
                        m.platform === 'HTB' ? 'bg-cyber-emerald' :
                        m.platform === 'THM' ? 'bg-cyber-crimson' : 'bg-cyber-cyan'
                      }`} />
                      <span className="font-bold text-white group-hover:text-cyber-emerald transition-colors">
                        {m.name}
                      </span>
                      <span className="text-[10px] text-cyber-muted font-mono">{m.ip}</span>
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-cyber-bg border border-cyber-border text-cyber-muted">
                        {m.os}
                      </span>
                      <span className={`text-[10px] px-1.5 py-0.5 rounded font-semibold ${
                        m.difficulty === 'Easy' ? 'text-cyber-emerald bg-cyber-emerald/10' :
                        m.difficulty === 'Medium' ? 'text-cyber-amber bg-cyber-amber/10' :
                        m.difficulty === 'Hard' ? 'text-cyber-crimson bg-cyber-crimson/10' :
                        'text-purple-400 bg-purple-950/40'
                      }`}>
                        {m.difficulty}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 text-cyber-muted group-hover:text-white">
                      <span className="text-[10px] uppercase font-mono">{m.status}</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </div>
                  </button>
                ))
              )}
            </div>
          </div>

          {/* Cheatsheet Commands */}
          <div>
            <div className="px-2 pb-1.5 text-[10px] uppercase font-bold tracking-wider text-cyber-muted flex items-center gap-1.5">
              <Terminal className="w-3 h-3 text-cyber-cyan" /> CHEATSHEET SNIPPETS
            </div>

            <div className="space-y-1">
              {filteredCheats.map((c) => (
                <button
                  key={c.id}
                  onClick={() => {
                    setActiveTab('cheatsheet');
                    setCommandPaletteOpen(false);
                  }}
                  className="w-full p-2 rounded-lg hover:bg-cyber-bg border border-transparent hover:border-cyber-border/80 transition-all text-left group"
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-semibold text-white group-hover:text-cyber-cyan transition-colors">
                      {c.title}
                    </span>
                    <span className="text-[10px] text-cyber-muted">{c.category}</span>
                  </div>
                  <div className="font-mono text-[11px] text-cyber-muted truncate bg-black/40 px-2 py-1 rounded border border-cyber-border/40">
                    {c.commandTemplate}
                  </div>
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="border-t border-cyber-border bg-cyber-bg/70 px-4 py-2 flex items-center justify-between text-[10px] text-cyber-muted">
          <div className="flex items-center gap-3">
            <span>Navigate: <kbd className="bg-cyber-card px-1 py-0.5 rounded">↑</kbd> <kbd className="bg-cyber-card px-1 py-0.5 rounded">↓</kbd></span>
            <span>Select: <kbd className="bg-cyber-card px-1 py-0.5 rounded">Enter</kbd></span>
          </div>
          <span>SPECTER CTF PALETTE</span>
        </div>
      </div>
    </div>
  );
};
