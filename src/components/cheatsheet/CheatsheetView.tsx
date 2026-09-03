import React, { useState, useMemo } from 'react';
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
  Code
} from 'lucide-react';
import { useCtfStore } from '../../store/useCtfStore';
import { 
  CHEATSHEET_CATEGORIES, 
  REVERSE_SHELL_TEMPLATES 
} from '../../data/cheatsheetsData';
import { interpolateCommand, playCyberSound } from '../../utils/helpers';

export const CheatsheetView: React.FC = () => {
  const {
    cheatsheets,
    globalVars,
    setGlobalVars,
    addCustomCommand,
    deleteCustomCommand,
    toggleStarCommand,
    soundEnabled,
  } = useCtfStore();

  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // New Custom Command Form Modal state
  const [isNewModalOpen, setIsNewModalOpen] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newCategory, setNewCategory] = useState('linux-privesc');
  const [newDesc, setNewDesc] = useState('');
  const [newTemplate, setNewTemplate] = useState('');
  const [newTags, setNewTags] = useState('');

  // Reverse shell builder state
  const [selectedRevShellIdx, setSelectedRevShellIdx] = useState(0);

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    if (soundEnabled) playCyberSound('copy');
    setTimeout(() => {
      setCopiedId(null);
    }, 2000);
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

  const activeRevShell = REVERSE_SHELL_TEMPLATES[selectedRevShellIdx] || REVERSE_SHELL_TEMPLATES[0];
  const interpolatedRevShellCmd = interpolateCommand(activeRevShell.command, globalVars);
  const interpolatedListenerCmd = interpolateCommand(activeRevShell.listener, globalVars);

  return (
    <div className="space-y-6 w-full font-mono pb-12">
      {/* Top Banner & Dynamic Variable Tuning Station */}
      <motion.div 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="p-4 rounded-xl border border-cyber-border bg-cyber-card/90 shadow-md flex flex-wrap items-center justify-between gap-4"
      >
        <div>
          <h1 className="text-lg font-bold text-white tracking-wider flex items-center gap-2">
            <Terminal className="w-5 h-5 text-cyber-cyan" />
            DYNAMIC OFFENSIVE CHEATSHEETS & PAYLOAD LAB
          </h1>
          <p className="text-xs text-cyber-muted mt-0.5">
            Real-time parameter injection across network scanning, web exploitation, Active Directory, and reverse shells.
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
            <div className="px-2 py-1 text-[10px] uppercase font-bold tracking-wider text-cyber-muted">
              COMMAND CATEGORIES
            </div>

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
            </div>
          </div>
        </div>

        {/* Right Column: Dynamic Cheatsheet & Reverse Shell Builder */}
        <div className="lg:col-span-3 space-y-4">
          
          {/* SEARCH & REVSHELL SWITCHER */}
          <div className="flex items-center gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-2.5 w-4 h-4 text-cyber-muted" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search commands, flags, tools (e.g. nmap, ffuf, bloodhound, impacket)..."
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

          {/* DEDICATED REVERSE SHELL GENERATOR (Shown when category is 'revshell' or 'all') */}
          {(selectedCategory === 'all' || selectedCategory === 'revshell') && !searchQuery && (
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="p-4 rounded-xl border border-cyber-cyan/40 bg-cyber-card shadow-lg shadow-glow-cyan/10 space-y-3"
            >
              <div className="flex items-center justify-between border-b border-cyber-border pb-2.5">
                <div className="flex items-center gap-2">
                  <Radio className="w-4 h-4 text-cyber-cyan animate-pulse" />
                  <span className="font-bold text-white text-sm tracking-wide">
                    LIVE REVERSE SHELL GENERATOR
                  </span>
                </div>
                <span className="text-[10px] text-cyber-cyan uppercase font-semibold px-2 py-0.5 rounded bg-cyber-cyan/10 border border-cyber-cyan/30">
                  TUNED: {globalVars.lhost}:{globalVars.lport}
                </span>
              </div>

              {/* Language / Payload Selector Pills */}
              <div className="flex flex-wrap gap-1.5">
                {REVERSE_SHELL_TEMPLATES.map((tmpl, idx) => (
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
                    <span className="text-[10px] uppercase font-bold text-cyber-muted">
                      PAYLOAD ({activeRevShell.language} - {activeRevShell.platform})
                    </span>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleCopy(interpolatedRevShellCmd, 'revshell-payload')}
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
                    {interpolatedRevShellCmd}
                  </pre>
                </div>

                {/* Netcat / Listener Box */}
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] uppercase font-bold text-cyber-muted">
                      ATTACKER LISTENER COMMAND
                    </span>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleCopy(interpolatedListenerCmd, 'revshell-listener')}
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
                    {interpolatedListenerCmd}
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
