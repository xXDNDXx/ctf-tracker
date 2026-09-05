import React, { useState, useMemo, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { 
  X, 
  Copy, 
  Check, 
  ChevronDown, 
  ChevronRight, 
  FileText, 
  Terminal, 
  AlertTriangle, 
  Lightbulb, 
  Flame, 
  ShieldAlert, 
  Quote, 
  HelpCircle, 
  Info, 
  CheckCircle2, 
  BookOpen, 
  Link as LinkIcon, 
  Clock, 
  ArrowRight,
  Code2,
  FileCode
} from 'lucide-react';
import { 
  CptsNoteEntry, 
  parseObsidianNote, 
  resolveWikilink, 
  getBacklinksForNote,
  ObsidianCallout 
} from '../../utils/obsidianManualUtils';
import { interpolateCommand, playCyberSound } from '../../utils/helpers';
import { GlobalVariables } from '../../types';

export type ObsidianViewMode = 'reading' | 'dual' | 'raw';
export type ObsidianNoteLanguage = 'bilingual' | 'en' | 'he';

interface ObsidianNoteViewerProps {
  note: CptsNoteEntry;
  globalVars: GlobalVariables;
  soundEnabled: boolean;
  onClose: () => void;
  onNavigateToNote: (noteId: string) => void;
  defaultLanguage?: ObsidianNoteLanguage;
}

export const ObsidianNoteViewer: React.FC<ObsidianNoteViewerProps> = ({
  note,
  globalVars,
  soundEnabled,
  onClose,
  onNavigateToNote,
  defaultLanguage = 'bilingual',
}) => {
  const [viewMode, setViewMode] = useState<ObsidianViewMode>('reading');
  const [langMode, setLangMode] = useState<ObsidianNoteLanguage>(defaultLanguage);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [openCallouts, setOpenCallouts] = useState<Record<number, boolean>>({});
  const [checkedItems, setCheckedItems] = useState<Record<number, boolean>>({});

  // Parse note markdown on the fly
  const parsed = useMemo(() => {
    return parseObsidianNote(note.rawMarkdown || '');
  }, [note.rawMarkdown]);

  // Backlinks
  const backlinks = useMemo(() => {
    return getBacklinksForNote(note.id);
  }, [note.id]);

  const modalRef = useRef<HTMLDivElement>(null);

  // Auto-focus container so keyboard shortcuts always target the modal
  useEffect(() => {
    modalRef.current?.focus();
  }, [note.id]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        e.stopPropagation();
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown, true);
    return () => window.removeEventListener('keydown', handleKeyDown, true);
  }, [onClose]);

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    if (soundEnabled) playCyberSound('copy');
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleCopyAllCommands = () => {
    if (!note.commands || note.commands.length === 0) return;
    const interpolated = note.commands.map((cmd) => interpolateCommand(cmd, globalVars)).join('\n\n');
    handleCopy(interpolated, 'all-cmds-' + note.id);
  };

  const handleCopyRawMarkdown = () => {
    if (!note.rawMarkdown) return;
    handleCopy(note.rawMarkdown, 'raw-md-' + note.id);
  };

  const toggleCallout = (index: number, defaultClosed: boolean = false) => {
    setOpenCallouts((prev) => {
      const current = prev[index] !== undefined ? prev[index] : !defaultClosed;
      return { ...prev, [index]: !current };
    });
  };

  const renderWithWikilinks = (text: string) => {
    if (!text) return null;
    const parts = [];
    const linkRegex = /\[\[([^\]|#]+)(?:#[^\]|]+)?(?:\|([^\]]+))?\]\]/g;
    let lastIndex = 0;
    let match;

    while ((match = linkRegex.exec(text)) !== null) {
      if (match.index > lastIndex) {
        parts.push(text.substring(lastIndex, match.index));
      }

      const target = match[1].trim();
      const alias = match[2]?.trim() || target;
      const resolved = resolveWikilink(target);

      if (resolved.exists && resolved.targetNoteId) {
        const targetId = resolved.targetNoteId;
        parts.push(
          <button
            key={'wl-' + match.index}
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              if (soundEnabled) playCyberSound('click');
              onNavigateToNote(targetId);
            }}
            className="inline-flex items-center gap-1 px-1.5 py-0.5 mx-0.5 rounded text-[11px] font-mono font-bold bg-purple-950/60 border border-purple-500/40 text-purple-300 hover:bg-purple-900/80 hover:text-white hover:border-purple-400 hover:shadow-sm transition-all cursor-pointer"
            title={'Jump to note: ' + target}
          >
            <LinkIcon className="w-2.5 h-2.5 text-purple-400" />
            <span>[[{alias}]]</span>
          </button>
        );
      } else {
        parts.push(
          <span
            key={'wl-unres-' + match.index}
            className="inline-flex items-center gap-0.5 px-1 py-0.2 mx-0.5 rounded text-[10px] font-mono text-cyber-muted bg-white/5 border border-white/10"
            title={'Vault reference (not indexed): ' + target}
          >
            [[{alias}]]
          </span>
        );
      }

      lastIndex = match.index + match[0].length;
    }

    if (lastIndex < text.length) {
      parts.push(text.substring(lastIndex));
    }

    return parts;
  };

  const renderCallout = (callout: ObsidianCallout, index: number) => {
    const isDefaultClosed = Boolean(callout.isFoldedByDefault);
    const isOpen = openCallouts[index] !== undefined ? openCallouts[index] : !isDefaultClosed;

    const typeConfig: Record<
      ObsidianCallout['type'],
      { border: string; bg: string; text: string; headerBg: string; icon: React.ReactNode }
    > = {
      abstract: {
        border: 'border-purple-500/50',
        bg: 'bg-purple-950/20',
        headerBg: 'bg-purple-950/40',
        text: 'text-purple-300',
        icon: <FileText className="w-4 h-4 text-purple-400" />,
      },
      tip: {
        border: 'border-emerald-500/50',
        bg: 'bg-emerald-950/20',
        headerBg: 'bg-emerald-950/40',
        text: 'text-emerald-300',
        icon: <Lightbulb className="w-4 h-4 text-emerald-400" />,
      },
      warning: {
        border: 'border-amber-500/50',
        bg: 'bg-amber-950/20',
        headerBg: 'bg-amber-950/40',
        text: 'text-amber-300',
        icon: <AlertTriangle className="w-4 h-4 text-amber-400" />,
      },
      danger: {
        border: 'border-rose-500/50',
        bg: 'bg-rose-950/20',
        headerBg: 'bg-rose-950/40',
        text: 'text-rose-300',
        icon: <Flame className="w-4 h-4 text-rose-400" />,
      },
      example: {
        border: 'border-blue-500/50',
        bg: 'bg-blue-950/20',
        headerBg: 'bg-blue-950/40',
        text: 'text-blue-300',
        icon: <Terminal className="w-4 h-4 text-blue-400" />,
      },
      important: {
        border: 'border-fuchsia-500/50',
        bg: 'bg-fuchsia-950/20',
        headerBg: 'bg-fuchsia-950/40',
        text: 'text-fuchsia-300',
        icon: <ShieldAlert className="w-4 h-4 text-fuchsia-400" />,
      },
      cite: {
        border: 'border-slate-500/50',
        bg: 'bg-slate-900/30',
        headerBg: 'bg-slate-900/50',
        text: 'text-slate-300',
        icon: <Quote className="w-4 h-4 text-slate-400" />,
      },
      success: {
        border: 'border-green-500/50',
        bg: 'bg-green-950/20',
        headerBg: 'bg-green-950/40',
        text: 'text-green-300',
        icon: <CheckCircle2 className="w-4 h-4 text-green-400" />,
      },
      info: {
        border: 'border-cyan-500/50',
        bg: 'bg-cyan-950/20',
        headerBg: 'bg-cyan-950/40',
        text: 'text-cyan-300',
        icon: <Info className="w-4 h-4 text-cyan-400" />,
      },
      question: {
        border: 'border-violet-500/50',
        bg: 'bg-violet-950/20',
        headerBg: 'bg-violet-950/40',
        text: 'text-violet-300',
        icon: <HelpCircle className="w-4 h-4 text-violet-400" />,
      },
      note: {
        border: 'border-purple-500/40',
        bg: 'bg-purple-950/20',
        headerBg: 'bg-purple-950/40',
        text: 'text-purple-300',
        icon: <BookOpen className="w-4 h-4 text-purple-400" />,
      },
    };

    const config = typeConfig[callout.type] || typeConfig.note;
    const isRtl = /[\u0590-\u05FF]/.test(callout.title) || /[\u0590-\u05FF]/.test(callout.content);

    return (
      <div
        key={'callout-' + index}
        className={'rounded-lg border ' + config.border + ' ' + config.bg + ' overflow-hidden shadow-sm my-3'}
        dir={isRtl ? 'rtl' : 'ltr'}
      >
        <button
          type="button"
          onClick={() => toggleCallout(index, isDefaultClosed)}
          className={'w-full p-2.5 px-3 flex items-center justify-between gap-2 text-xs font-bold ' + config.headerBg + ' ' + config.text + ' hover:brightness-110 transition-all cursor-pointer'}
        >
          <div className="flex items-center gap-2">
            {config.icon}
            <span>{callout.title}</span>
          </div>
          {callout.isFoldable && (
            <span className="text-cyber-muted text-[10px] font-mono flex items-center gap-1">
              {isOpen ? <ChevronDown className="w-3.5 h-3.5" /> : <ChevronRight className="w-3.5 h-3.5" />}
            </span>
          )}
        </button>

        {isOpen && (
          <div className={'p-3 text-xs leading-relaxed text-gray-200 ' + (isRtl ? 'text-right' : 'text-left') + ' whitespace-pre-wrap font-sans'}>
            {renderWithWikilinks(callout.content)}
          </div>
        )}
      </div>
    );
  };

  const renderMarkdownBody = (markdown: string, defaultRtl: boolean = false) => {
    if (!markdown) return null;
    const lines = markdown.split('\n');
    const elements: React.ReactNode[] = [];
    let inCodeBlock = false;
    let codeLang = '';
    let codeLines: string[] = [];
    let inTable = false;
    let tableLines: string[] = [];

    const flushCodeBlock = (key: number) => {
      const code = codeLines.join('\n');
      const interpolated = interpolateCommand(code, globalVars);
      const codeId = 'code-block-' + key;
      const isCopied = copiedId === codeId;

      elements.push(
        <div key={'code-' + key} className="relative my-3 rounded-lg border border-purple-900/40 bg-cyber-code overflow-hidden shadow-md group">
          <div className="flex items-center justify-between px-3 py-1.5 bg-black/60 border-b border-purple-900/30 text-[10px] font-mono text-purple-300">
            <span className="flex items-center gap-1.5 uppercase font-bold text-cyber-cyan">
              <Code2 className="w-3 h-3" />
              {codeLang || 'COMMAND / SCRIPT'}
            </span>
            <button
              type="button"
              onClick={() => handleCopy(interpolated, codeId)}
              className={'flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-semibold transition-all cursor-pointer ' + (
                isCopied
                  ? 'bg-cyber-emerald/20 text-cyber-emerald border border-cyber-emerald'
                  : 'bg-cyber-bg border border-cyber-border text-cyber-muted hover:text-white hover:border-purple-400'
              )}
            >
              {isCopied ? <Check className="w-2.5 h-2.5 text-cyber-emerald" /> : <Copy className="w-2.5 h-2.5" />}
              <span>{isCopied ? 'Copied' : 'Copy'}</span>
            </button>
          </div>
          <pre className="p-3 text-xs font-mono text-cyber-cyan overflow-x-auto whitespace-pre-wrap select-all selection:bg-purple-600 selection:text-white" dir="ltr">
            {interpolated}
          </pre>
        </div>
      );
      codeLines = [];
      inCodeBlock = false;
    };

    const flushTable = (key: number) => {
      if (tableLines.length < 2) {
        tableLines = [];
        inTable = false;
        return;
      }
      const headerLine = tableLines[0];
      const dataLines = tableLines.slice(2);

      const parseRow = (line: string) => {
        return line
          .split('|')
          .slice(1, -1)
          .map((c) => c.trim());
      };

      const headers = parseRow(headerLine);
      const rows = dataLines.map(parseRow);

      elements.push(
        <div key={'table-' + key} className="my-3 overflow-x-auto rounded-lg border border-cyber-border bg-cyber-card/60">
          <table className="w-full text-xs text-left">
            <thead className="bg-purple-950/40 border-b border-purple-900/40 text-[11px] font-mono text-purple-300 uppercase">
              <tr>
                {headers.map((h, hIdx) => (
                  <th key={hIdx} className="py-2 px-3 font-bold">
                    {renderWithWikilinks(h)}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-purple-900/20 font-sans">
              {rows.map((r, rIdx) => (
                <tr key={rIdx} className={rIdx % 2 === 0 ? 'bg-cyber-card/40' : 'bg-cyber-bg/30'}>
                  {r.map((cell, cIdx) => (
                    <td key={cIdx} className="py-2 px-3 text-gray-200">
                      {cell.startsWith('`') && cell.endsWith('`') ? (
                        <code className="text-cyber-cyan font-mono bg-cyber-code px-1.5 py-0.5 rounded border border-cyber-border text-[11px]">
                          {cell.slice(1, -1)}
                        </code>
                      ) : (
                        renderWithWikilinks(cell)
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
      tableLines = [];
      inTable = false;
    };

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];

      if (line.startsWith('```')) {
        if (inCodeBlock) {
          flushCodeBlock(i);
        } else {
          if (inTable) flushTable(i);
          inCodeBlock = true;
          codeLang = line.replace('```', '').trim();
        }
        continue;
      }

      if (inCodeBlock) {
        codeLines.push(line);
        continue;
      }

      if (line.trim().startsWith('|') && line.trim().endsWith('|')) {
        inTable = true;
        tableLines.push(line);
        continue;
      } else if (inTable) {
        flushTable(i);
      }

      const checkMatch = line.match(/^-\s*\[([ xX])\]\s*(.+)$/);
      if (checkMatch) {
        const isChecked = checkedItems[i] !== undefined ? checkedItems[i] : checkMatch[1].toLowerCase() === 'x';
        const checkText = checkMatch[2];
        const isRtlCheck = /[\u0590-\u05FF]/.test(checkText);

        elements.push(
          <div
            key={'chk-' + i}
            className="flex items-start gap-2.5 my-1.5 text-xs text-gray-200 font-sans cursor-pointer group"
            dir={isRtlCheck ? 'rtl' : 'ltr'}
            onClick={() => setCheckedItems((prev) => ({ ...prev, [i]: !isChecked }))}
          >
            <div
              className={'w-4 h-4 rounded border flex items-center justify-center mt-0.5 flex-shrink-0 transition-colors ' + (
                isChecked
                  ? 'bg-purple-600 border-purple-500 text-white'
                  : 'border-cyber-border bg-cyber-bg group-hover:border-purple-400'
              )}
            >
              {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
            </div>
            <span className={isChecked ? 'line-through text-cyber-muted' : ''}>
              {renderWithWikilinks(checkText)}
            </span>
          </div>
        );
        continue;
      }

      if (line.startsWith('# ')) {
        const titleText = line.replace('# ', '').trim();
        const isRtlH = /[\u0590-\u05FF]/.test(titleText);
        elements.push(
          <h1 key={'h1-' + i} dir={isRtlH ? 'rtl' : 'ltr'} className="text-lg font-bold text-white mt-4 mb-2 pb-1 border-b border-purple-900/40">
            {renderWithWikilinks(titleText)}
          </h1>
        );
        continue;
      }
      if (line.startsWith('## ')) {
        const titleText = line.replace('## ', '').trim();
        const isRtlH = /[\u0590-\u05FF]/.test(titleText);
        elements.push(
          <h2 key={'h2-' + i} dir={isRtlH ? 'rtl' : 'ltr'} className="text-sm font-bold text-purple-300 mt-4 mb-1.5 flex items-center gap-1.5">
            <span className="text-purple-400">§</span>
            <span>{renderWithWikilinks(titleText)}</span>
          </h2>
        );
        continue;
      }
      if (line.startsWith('### ')) {
        const titleText = line.replace('### ', '').trim();
        const isRtlH = /[\u0590-\u05FF]/.test(titleText);
        elements.push(
          <h3 key={'h3-' + i} dir={isRtlH ? 'rtl' : 'ltr'} className="text-xs font-bold text-cyber-cyan mt-3 mb-1">
            {renderWithWikilinks(titleText)}
          </h3>
        );
        continue;
      }

      if (line.startsWith('> [!') || line.startsWith('>')) {
        continue;
      }

      if (line.trim() === '---' || line.trim() === '***') {
        elements.push(<hr key={'hr-' + i} className="my-4 border-purple-900/30" />);
        continue;
      }

      if (line.trim().startsWith('- ') || line.trim().startsWith('* ')) {
        const bulletText = line.trim().slice(2);
        const isRtlB = /[\u0590-\u05FF]/.test(bulletText);
        elements.push(
          <div key={'b-' + i} dir={isRtlB ? 'rtl' : 'ltr'} className="flex items-start gap-2 my-1 text-xs text-gray-300 font-sans">
            <span className="text-purple-400 mt-1">•</span>
            <div className="flex-1">{renderWithWikilinks(bulletText)}</div>
          </div>
        );
        continue;
      }

      if (line.trim()) {
        const isRtlP = /[\u0590-\u05FF]/.test(line);
        elements.push(
          <p key={'p-' + i} dir={isRtlP ? 'rtl' : 'ltr'} className={'my-1.5 text-xs text-gray-300 leading-relaxed font-sans ' + (isRtlP ? 'text-right' : 'text-left')}>
            {renderWithWikilinks(line)}
          </p>
        );
      }
    }

    if (inCodeBlock) flushCodeBlock(lines.length);
    if (inTable) flushTable(lines.length);

    return elements;
  };

  const modalContent = (
    <div
      ref={modalRef}
      tabIndex={-1}
      onClick={onClose}
      className="fixed inset-0 z-[9999] flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/85 backdrop-blur-md animate-fadeIn outline-none"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-6xl max-h-[92vh] flex flex-col rounded-2xl border border-purple-500/40 bg-cyber-card shadow-2xl shadow-purple-950/50 overflow-hidden"
      >
        {/* Top Header */}
        <div className="flex items-center justify-between px-4 py-3 bg-cyber-bg/90 border-b border-purple-900/40">
          <div className="flex items-center gap-2 text-xs font-mono truncate max-w-xl">
            <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-purple-950/60 border border-purple-500/40 text-purple-300 font-bold">
              <BookOpen className="w-3.5 h-3.5 text-purple-400" />
              <span>CPTS FIELD MANUAL</span>
            </div>
            <span className="text-cyber-muted">/</span>
            <span className="text-cyber-muted truncate">{note.category}</span>
            {note.subCategory && (
              <>
                <span className="text-cyber-muted">/</span>
                <span className="text-purple-300 truncate">{note.subCategory}</span>
              </>
            )}
            <span className="text-cyber-muted">/</span>
            <span className="text-white font-bold truncate">{note.filename || note.titleEn}.md</span>
          </div>

          <div className="flex items-center gap-2">
            <div className="hidden sm:flex items-center p-0.5 rounded-lg bg-black/50 border border-purple-900/40 text-[11px] font-mono">
              <button
                type="button"
                onClick={() => setViewMode('reading')}
                className={'px-2.5 py-1 rounded transition-colors cursor-pointer ' + (
                  viewMode === 'reading'
                    ? 'bg-purple-600 text-white font-bold shadow-sm'
                    : 'text-cyber-muted hover:text-white'
                )}
                title="Obsidian rich formatted reading mode"
              >
                Reading
              </button>
              <button
                type="button"
                onClick={() => setViewMode('dual')}
                className={'px-2.5 py-1 rounded transition-colors cursor-pointer ' + (
                  viewMode === 'dual'
                    ? 'bg-purple-600 text-white font-bold shadow-sm'
                    : 'text-cyber-muted hover:text-white'
                )}
                title="Side-by-side English and Hebrew view"
              >
                Dual View
              </button>
              <button
                type="button"
                onClick={() => setViewMode('raw')}
                className={'px-2.5 py-1 rounded transition-colors cursor-pointer ' + (
                  viewMode === 'raw'
                    ? 'bg-purple-600 text-white font-bold shadow-sm'
                    : 'text-cyber-muted hover:text-white'
                )}
                title="View raw Obsidian markdown"
              >
                Raw MD
              </button>
            </div>

            <div className="flex items-center p-0.5 rounded-lg bg-black/50 border border-purple-900/40 text-[11px] font-mono">
              <button
                type="button"
                onClick={() => setLangMode('bilingual')}
                className={'px-2 py-1 rounded transition-colors cursor-pointer ' + (
                  langMode === 'bilingual'
                    ? 'bg-purple-600 text-white font-bold shadow-sm'
                    : 'text-cyber-muted hover:text-white'
                )}
                title="Bilingual mode"
              >
                Dual
              </button>
              <button
                type="button"
                onClick={() => setLangMode('en')}
                className={'px-2 py-1 rounded transition-colors cursor-pointer ' + (
                  langMode === 'en'
                    ? 'bg-purple-600 text-white font-bold shadow-sm'
                    : 'text-cyber-muted hover:text-white'
                )}
                title="English notes"
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => setLangMode('he')}
                className={'px-2 py-1 rounded transition-colors cursor-pointer ' + (
                  langMode === 'he'
                    ? 'bg-purple-600 text-white font-bold shadow-sm'
                    : 'text-cyber-muted hover:text-white'
                )}
                title="Hebrew notes"
              >
                עב
              </button>
            </div>

            {note.commands && note.commands.length > 0 && (
              <button
                type="button"
                onClick={handleCopyAllCommands}
                className="hidden md:flex items-center gap-1 px-2.5 py-1 rounded bg-purple-950/60 border border-purple-500/40 text-purple-300 hover:text-white hover:bg-purple-900/80 text-xs font-semibold transition-all cursor-pointer"
                title="Copy all commands in note"
              >
                {copiedId === 'all-cmds-' + note.id ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-cyber-emerald" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Terminal className="w-3.5 h-3.5" />
                    <span>Cmds ({note.commands.length})</span>
                  </>
                )}
              </button>
            )}

            <button
              type="button"
              onClick={handleCopyRawMarkdown}
              className="flex items-center gap-1 px-2.5 py-1 rounded bg-black/60 border border-cyber-border text-cyber-muted hover:text-white hover:border-purple-400 text-xs font-semibold transition-all cursor-pointer"
              title="Copy raw markdown to paste into your Obsidian vault"
            >
              {copiedId === 'raw-md-' + note.id ? (
                <>
                  <Check className="w-3.5 h-3.5 text-cyber-emerald" />
                  <span>MD Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Copy MD</span>
                </>
              )}
            </button>

            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-lg bg-cyber-bg border border-cyber-border text-cyber-muted hover:text-white hover:border-rose-500/50 hover:bg-rose-950/30 transition-all cursor-pointer"
              title="Close note (Esc)"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Canvas */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">
          <div className="p-4 sm:p-5 rounded-xl border border-purple-900/40 bg-black/40 space-y-3 shadow-inner">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
              <div className="space-y-1">
                <h1 className="text-xl sm:text-2xl font-black text-white tracking-tight flex items-center gap-2">
                  <span className="text-purple-400">🛡️</span>
                  <span>{note.titleEn || note.title}</span>
                </h1>
                {note.titleHe && note.titleHe !== (note.titleEn || note.title) && (
                  <div className="text-sm font-bold text-purple-300 font-sans" dir="rtl">
                    {note.titleHe}
                  </div>
                )}
              </div>

              <div className="flex items-center gap-1.5 flex-wrap">
                {note.stage && (
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-blue-500/15 text-blue-300 border border-blue-500/30">
                    Stage: {note.stage}
                  </span>
                )}
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-purple-500/15 text-purple-300 border border-purple-500/30">
                  {note.difficulty || 'Core'}
                </span>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-cyber-bg border border-cyber-border text-cyber-muted">
                  {note.noteType || 'Master Note'}
                </span>
                {note.dateModified && (
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono text-cyber-muted bg-black/40 border border-white/5 flex items-center gap-1">
                    <Clock className="w-2.5 h-2.5" />
                    {note.dateModified}
                  </span>
                )}
              </div>
            </div>

            <div className="flex items-center justify-between gap-2 pt-2 border-t border-purple-900/20 flex-wrap">
              <div className="flex items-center gap-1 flex-wrap">
                {note.tags &&
                  note.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] px-2 py-0.5 rounded bg-purple-950/40 border border-purple-800/40 text-purple-300 font-mono"
                    >
                      #{t}
                    </span>
                  ))}
              </div>

              {note.tools && note.tools.length > 0 && (
                <div className="flex items-center gap-1.5 flex-wrap">
                  <span className="text-[10px] font-mono text-cyber-muted">Tools:</span>
                  {note.tools.map((tool) => (
                    <span
                      key={tool}
                      className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 font-mono font-bold"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>

          {viewMode === 'raw' && (
            <div className="rounded-xl border border-purple-900/40 bg-cyber-code overflow-hidden shadow-md">
              <div className="flex items-center justify-between px-4 py-2 bg-black/60 border-b border-purple-900/40 text-xs font-mono text-purple-300">
                <span className="flex items-center gap-2">
                  <FileCode className="w-3.5 h-3.5 text-cyber-cyan" />
                  <span>RAW OBSIDIAN MARKDOWN ({(note.rawMarkdown || '').length} chars)</span>
                </span>
                <button
                  type="button"
                  onClick={handleCopyRawMarkdown}
                  className="flex items-center gap-1 px-2.5 py-1 rounded bg-purple-600 text-white font-bold text-xs hover:bg-purple-500 transition-colors cursor-pointer"
                >
                  <Copy className="w-3 h-3" />
                  <span>Copy Markdown</span>
                </button>
              </div>
              <pre className="p-4 text-xs font-mono text-gray-300 overflow-x-auto whitespace-pre-wrap select-all selection:bg-purple-600 selection:text-white">
                {note.rawMarkdown}
              </pre>
            </div>
          )}

          {viewMode === 'dual' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="p-5 rounded-xl border border-purple-900/30 bg-cyber-bg/40 space-y-4">
                <div className="flex items-center justify-between pb-2 border-b border-purple-900/40">
                  <div className="flex items-center gap-2 text-xs font-bold font-mono text-purple-300">
                    <span>ENGLISH TACTICAL METHODOLOGY</span>
                  </div>
                  <span className="text-[10px] font-mono text-cyber-muted">LTR Execution</span>
                </div>
                {parsed.callouts && parsed.callouts.length > 0 && (
                  <div className="space-y-2">
                    {parsed.callouts.slice(0, 3).map((callout, idx) => renderCallout(callout, idx))}
                  </div>
                )}
                <div className="text-gray-300 text-xs leading-relaxed">
                  {renderMarkdownBody(parsed.englishSection, false)}
                </div>
              </div>

              <div className="p-5 rounded-xl border border-purple-500/30 bg-purple-950/10 space-y-4" dir="rtl">
                <div className="flex items-center justify-between pb-2 border-b border-purple-900/40" dir="ltr">
                  <span className="text-[10px] font-mono text-purple-400">RTL Personal Notes</span>
                  <div className="flex items-center gap-2 text-xs font-bold font-sans text-purple-300">
                    <span>כרטיס עבודה עברי (רשימות אישיות)</span>
                  </div>
                </div>
                {parsed.hebrewSection ? (
                  <div className="text-gray-200 text-xs leading-relaxed">
                    {renderMarkdownBody(parsed.hebrewSection, true)}
                  </div>
                ) : (
                  <div className="p-6 text-center text-cyber-muted text-xs font-sans">
                    רשימות עבריות לפי מתודולוגיית התקיפה המלאה.
                  </div>
                )}
              </div>
            </div>
          )}

          {viewMode === 'reading' && (
            <div className="space-y-6">
              {parsed.callouts && parsed.callouts.length > 0 && (
                <div className="space-y-2">
                  {parsed.callouts.map((c, idx) => renderCallout(c, idx))}
                </div>
              )}

              {(langMode === 'bilingual' || langMode === 'he') && parsed.hebrewSection && (
                <div className="p-4 sm:p-5 rounded-xl border border-purple-500/40 bg-purple-950/20 space-y-3" dir="rtl">
                  <div className="flex items-center justify-between pb-2 border-b border-purple-900/40" dir="ltr">
                    <span className="text-[10px] font-mono text-purple-400">DANIEL DAYAN PERSONAL FIELD CARD</span>
                    <h3 className="text-xs font-bold text-purple-300 font-sans">
                      כרטיס עבודה עברי מקיף — שלב אחר שלב
                    </h3>
                  </div>
                  <div className="text-gray-200 text-xs leading-relaxed font-sans">
                    {renderMarkdownBody(parsed.hebrewSection, true)}
                  </div>
                </div>
              )}

              {(langMode === 'bilingual' || langMode === 'en') && (
                <div className="p-4 sm:p-5 rounded-xl border border-cyber-border bg-cyber-bg/40 space-y-4">
                  <div className="flex items-center justify-between pb-2 border-b border-purple-900/30">
                    <h3 className="text-xs font-bold text-cyber-cyan font-mono flex items-center gap-2">
                      <Terminal className="w-4 h-4 text-purple-400" />
                      <span>OFFENSIVE EXECUTION & TACTICAL PLAYBOOK</span>
                    </h3>
                    <span className="text-[10px] font-mono text-cyber-muted">Battle-Tested Commands</span>
                  </div>
                  <div className="text-gray-300 text-xs leading-relaxed">
                    {renderMarkdownBody(parsed.englishSection, false)}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Obsidian Graph Links & Backlinks */}
          <div className="p-4 rounded-xl border border-purple-900/40 bg-black/40 space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-purple-900/30">
              <h4 className="text-xs font-bold text-purple-300 font-mono flex items-center gap-2">
                <LinkIcon className="w-3.5 h-3.5 text-purple-400" />
                <span>OBSIDIAN GRAPH CONNECTIONS & BACKLINKS</span>
              </h4>
              <span className="text-[10px] font-mono text-cyber-muted">
                {parsed.outgoingWikilinks.length} Outgoing · {backlinks.length} Backlinks
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <span className="text-[10px] font-mono font-bold text-cyber-muted uppercase tracking-wider">
                  Outgoing References ({parsed.outgoingWikilinks.length}):
                </span>
                {parsed.outgoingWikilinks.length === 0 ? (
                  <p className="text-[11px] text-cyber-muted italic">No internal links in this note.</p>
                ) : (
                  <div className="flex flex-wrap gap-1.5">
                    {parsed.outgoingWikilinks.map((target, idx) => {
                      const resolved = resolveWikilink(target);
                      return (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => {
                            if (resolved.exists && resolved.targetNoteId) {
                              if (soundEnabled) playCyberSound('click');
                              onNavigateToNote(resolved.targetNoteId);
                            }
                          }}
                          className={'inline-flex items-center gap-1 px-2 py-1 rounded text-xs font-mono transition-all ' + (
                            resolved.exists
                              ? 'bg-purple-950/60 border border-purple-500/40 text-purple-300 hover:bg-purple-900/80 hover:text-white cursor-pointer'
                              : 'bg-white/5 border border-white/10 text-cyber-muted opacity-60 cursor-default'
                          )}
                        >
                          <LinkIcon className="w-2.5 h-2.5" />
                          <span>[[' + target + ']]</span>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>

              <div className="space-y-2">
                <span className="text-[10px] font-mono font-bold text-cyber-muted uppercase tracking-wider">
                  Referenced By Other Notes ({backlinks.length}):
                </span>
                {backlinks.length === 0 ? (
                  <p className="text-[11px] text-cyber-muted italic">No incoming backlinks to this note.</p>
                ) : (
                  <div className="flex flex-wrap gap-1.5">
                    {backlinks.map((bNote) => (
                      <button
                        key={bNote.id}
                        type="button"
                        onClick={() => {
                          if (soundEnabled) playCyberSound('click');
                          onNavigateToNote(bNote.id);
                        }}
                        className="inline-flex items-center gap-1 px-2 py-1 rounded text-xs font-mono bg-purple-950/60 border border-purple-500/40 text-purple-300 hover:bg-purple-900/80 hover:text-white transition-all cursor-pointer"
                        title={bNote.titleEn}
                      >
                        <ArrowRight className="w-2.5 h-2.5 text-purple-400" />
                        <span className="truncate max-w-[200px]">{bNote.titleEn}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-4 py-2 bg-cyber-bg/95 border-t border-purple-900/40 text-[11px] font-mono text-cyber-muted">
          <div className="flex items-center gap-3">
            <span>ID: {note.id}</span>
            <span className="hidden sm:inline">&middot;</span>
            <span className="hidden sm:inline">Path: {note.relPath}</span>
          </div>
          <div className="flex items-center gap-3">
            <span>ESC to close</span>
            <button
              type="button"
              onClick={onClose}
              className="text-purple-400 hover:text-white font-bold transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return typeof document !== 'undefined' ? createPortal(modalContent, document.body) : modalContent;
};
