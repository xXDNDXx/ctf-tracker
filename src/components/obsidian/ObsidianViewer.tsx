import React, { useState, useEffect, useMemo, useRef } from 'react';
import { 
  FileNode, 
  VaultTree, 
  VaultGraphData, 
  ObsidianCallout, 
  ObsidianTocItem, 
  CtfFlagMatch 
} from './types';
import { FileExplorer } from './FileExplorer';
import { DiagramRenderer, detectDiagramType } from './DiagramRenderer';
import { VaultGraphModal } from './renderers/VaultGraphModal';
const KaTeXView = React.lazy(() => import('./renderers/KaTeXView').then((m) => ({ default: m.KaTeXView })));
import { resolveAttachmentUrl } from './attachmentStore';
import { useCtfStore } from '../../store/useCtfStore';
import { CptsNoteEntry, getAllCptsNotes, getNoteById, resolveWikilink } from '../../utils/obsidianManualUtils';
import { safeCopyToClipboard, playCyberSound, interpolateCommand } from '../../utils/helpers';
import { 
  FileText, 
  Compass, 
  Share2, 
  Copy, 
  Check, 
  ChevronRight, 
  ChevronDown, 
  Search, 
  BookOpen, 
  Flag, 
  LayoutGrid, 
  PenTool, 
  ListOrdered, 
  Network, 
  ExternalLink, 
  Code, 
  Eye, 
  Terminal, 
  Hash, 
  Sliders, 
  Info, 
  AlertTriangle, 
  Flame, 
  CheckCircle2, 
  ShieldAlert, 
  Layers,
  PanelLeftClose,
  PanelLeft,
  PanelRightClose,
  PanelRight,
  Download,
  Image as ImageIcon
} from 'lucide-react';

interface ObsidianViewerProps {
  initialNoteId?: string;
  onClose?: () => void;
  onOpenImporter?: () => void;
}

// Global natural sorter
const naturalSorter = new Intl.Collator(undefined, { numeric: true, sensitivity: 'base' });

/**
 * Obsidian Image attachment resolver component
 */
const ObsidianImage: React.FC<{ src: string; alt?: string }> = ({ src, alt }) => {
  const [blobUrl, setBlobUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    if (src.startsWith('http://') || src.startsWith('https://') || src.startsWith('data:')) {
      setBlobUrl(src);
      setLoading(false);
      return;
    }

    resolveAttachmentUrl(src).then((url) => {
      if (isMounted) {
        setBlobUrl(url);
        setLoading(false);
      }
    });

    return () => {
      isMounted = false;
    };
  }, [src]);

  if (loading) {
    return (
      <div className="animate-pulse bg-slate-900 border border-slate-800 rounded-xl h-40 w-full flex items-center justify-center text-xs text-slate-500 font-mono my-3">
        Resolving vault attachment...
      </div>
    );
  }

  if (!blobUrl) {
    return (
      <div className="my-3 p-3 rounded-xl border border-slate-800 bg-slate-900/60 text-xs font-mono text-slate-400 flex items-center gap-2">
        <ImageIcon className="w-4 h-4 text-slate-500 shrink-0" />
        <span>Attachment: <code className="text-slate-300">{src}</code> (not present in current vault)</span>
      </div>
    );
  }

  return (
    <div className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-black/40 text-center">
      <img src={blobUrl} alt={alt || src} className="max-w-full max-h-[550px] h-auto rounded-lg mx-auto object-contain" />
      {alt && <div className="text-[11px] text-slate-400 py-1.5 font-mono border-t border-slate-800 bg-slate-900/50">{alt}</div>}
    </div>
  );
};

export const ObsidianViewer: React.FC<ObsidianViewerProps> = ({
  initialNoteId,
  onClose,
  onOpenImporter,
}) => {
  const userNotes = useCtfStore((s) => s.userNotes);
  const userWikilinkMap = useCtfStore((s) => s.userWikilinkMap);
  const globalVars = useCtfStore((s) => s.globalVars);
  const soundEnabled = useCtfStore((s) => s.soundEnabled);

  // All active notes pool
  const allNotes: CptsNoteEntry[] = useMemo(() => {
    return userNotes && userNotes.length > 0 ? userNotes : getAllCptsNotes();
  }, [userNotes]);

  // Selected note / file state
  const [selectedNoteId, setSelectedNoteId] = useState<string>(() => {
    if (initialNoteId) return initialNoteId;
    return allNotes[0]?.id || '';
  });

  const [viewMode, setViewMode] = useState<'reader' | 'raw' | 'split'>('reader');
  const [isGraphModalOpen, setIsGraphModalOpen] = useState(false);
  const [showLeftSidebar, setShowLeftSidebar] = useState(true);
  const [showRightSidebar, setShowRightSidebar] = useState(true);
  const [rightPanelTab, setRightPanelTab] = useState<'toc' | 'backlinks' | 'flags'>('toc');

  const [copiedFlag, setCopiedFlag] = useState<string | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [collapsedCallouts, setCollapsedCallouts] = useState<Record<string, boolean>>({});

  // Active note
  const activeNote = useMemo(() => {
    return allNotes.find((n) => n.id === selectedNoteId) || allNotes[0] || null;
  }, [allNotes, selectedNoteId]);

  // Build VaultTree for FileExplorer
  const vaultTree: VaultTree = useMemo(() => {
    const roots: FileNode[] = [];
    const nodeMap: Record<string, FileNode> = {};
    const folderMap = new Map<string, FileNode>();

    const getOrCreateFolder = (dirPath: string): FileNode => {
      const norm = dirPath.replace(/\\/g, '/').replace(/^\/+|\/+$/g, '');
      if (folderMap.has(norm)) return folderMap.get(norm)!;

      const segments = norm.split('/');
      const folderName = segments[segments.length - 1];
      const parentPath = segments.slice(0, -1).join('/');

      const folderNode: FileNode = {
        id: `folder-${norm}`,
        name: folderName,
        path: norm,
        type: 'folder',
        size: 0,
        children: [],
      };

      folderMap.set(norm, folderNode);
      nodeMap[norm] = folderNode;

      if (parentPath) {
        const parent = getOrCreateFolder(parentPath);
        parent.children = parent.children || [];
        parent.children.push(folderNode);
      } else {
        roots.push(folderNode);
      }

      return folderNode;
    };

    for (const note of allNotes) {
      const path = note.relPath || `${note.category}/${note.title}.md`;
      const norm = path.replace(/\\/g, '/').replace(/^\/+/, '');
      const segments = norm.split('/');
      const fileName = segments[segments.length - 1];
      const parentPath = segments.slice(0, -1).join('/');

      const fileNode: FileNode = {
        id: note.id,
        name: note.title || fileName,
        path: norm,
        type: 'file',
        size: (note.rawMarkdown?.length || 0),
        noteId: note.id,
      };

      nodeMap[norm] = fileNode;

      if (parentPath) {
        const parent = getOrCreateFolder(parentPath);
        parent.children = parent.children || [];
        parent.children.push(fileNode);
      } else {
        roots.push(fileNode);
      }
    }

    return { roots, nodeMap, wikilinkMap: userWikilinkMap || {} };
  }, [allNotes, userWikilinkMap]);

  // Build VaultGraphData for Graph View
  const graphData: VaultGraphData = useMemo(() => {
    const nodes = allNotes.map((note) => ({
      id: note.id,
      label: note.title,
      path: note.relPath || note.title,
      type: 'note' as const,
      val: Math.max(4, Math.min(14, (note.backlinks?.length || 0) * 2 + 5)),
      color: note.category.toLowerCase().includes('recon')
        ? '#38bdf8'
        : note.category.toLowerCase().includes('priv')
        ? '#a855f7'
        : note.category.toLowerCase().includes('web')
        ? '#10b981'
        : note.category.toLowerCase().includes('windows')
        ? '#f59e0b'
        : '#ec4899',
      group: note.category,
    }));

    const links: { source: string; target: string }[] = [];
    allNotes.forEach((note) => {
      if (note.outgoingWikilinks) {
        note.outgoingWikilinks.forEach((targetId) => {
          links.push({ source: note.id, target: targetId });
        });
      }
    });

    return { nodes, links };
  }, [allNotes]);

  // CTF Flag detector matches across raw markdown
  const detectedFlags: CtfFlagMatch[] = useMemo(() => {
    if (!activeNote?.rawMarkdown) return [];
    const matches: CtfFlagMatch[] = [];
    const flagRegex = /[a-zA-Z0-9_\-]+{[^}\n\r]+}/g;
    let m: RegExpExecArray | null;
    while ((m = flagRegex.exec(activeNote.rawMarkdown)) !== null) {
      matches.push({
        flag: m[0],
        format: m[0].split('{')[0],
        index: m.index,
      });
    }
    return matches;
  }, [activeNote]);

  // Table of Contents outline items
  const tableOfContents: ObsidianTocItem[] = useMemo(() => {
    if (!activeNote?.rawMarkdown) return [];
    const items: ObsidianTocItem[] = [];
    const headingRegex = /^(#{1,6})\s+(.+)$/gm;
    let match;
    while ((match = headingRegex.exec(activeNote.rawMarkdown)) !== null) {
      const level = match[1].length;
      const text = match[2].trim().replace(/[#*`]/g, '');
      const id = 'heading-' + text.toLowerCase().replace(/[^a-z0-9]+/g, '-');
      items.push({ id, text, level });
    }
    return items;
  }, [activeNote]);

  // Backlinks for active note
  const backlinks = useMemo(() => {
    if (!activeNote) return [];
    const linkedIds = activeNote.backlinks || [];
    return linkedIds
      .map((id) => allNotes.find((n) => n.id === id))
      .filter((n): n is CptsNoteEntry => Boolean(n));
  }, [activeNote, allNotes]);

  const handleCopy = async (text: string, id: string) => {
    await safeCopyToClipboard(text);
    setCopiedId(id);
    if (soundEnabled) playCyberSound('copy');
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleCopyFlag = async (flag: string) => {
    await safeCopyToClipboard(flag);
    setCopiedFlag(flag);
    if (soundEnabled) playCyberSound('root');
    setTimeout(() => setCopiedFlag(null), 2000);
  };

  const scrollToHeading = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Safe Transclusion & Markdown Block Parser with recursion guard (depth <= 3)
  const renderMarkdownContent = (
    raw: string,
    depth = 0,
    visitedIds: Set<string> = new Set()
  ): React.ReactNode[] => {
    if (!raw) return [];
    const blocks: React.ReactNode[] = [];
    const lines = raw.split(/\r?\n/);
    let i = 0;

    while (i < lines.length) {
      const line = lines[i];
      const trimmed = line.trim();

      // 1. Code Blocks & Diagram Blocks (```lang ... ```)
      if (line.startsWith('```')) {
        const lang = line.slice(3).trim();
        const codeLines: string[] = [];
        i++;
        while (i < lines.length && !lines[i].startsWith('```')) {
          codeLines.push(lines[i]);
          i++;
        }
        i++; // skip closing ```
        const rawCode = codeLines.join('\n');
        const diagramType = detectDiagramType(lang);

        if (diagramType) {
          blocks.push(
            <DiagramRenderer
              key={`diag-${i}`}
              type={diagramType}
              raw={rawCode}
              title={lang.toUpperCase()}
              onOpenFile={(path) => {
                const found = allNotes.find((n) => n.relPath === path || n.title === path);
                if (found) setSelectedNoteId(found.id);
              }}
            />
          );
        } else {
          // Regular syntax-highlighted code block
          const blockId = `code-block-${i}`;
          const interpolated = interpolateCommand(rawCode, globalVars);
          blocks.push(
            <div
              key={blockId}
              className="my-3 rounded-xl border border-slate-800 bg-[#090D18] overflow-hidden group shadow-lg font-mono text-xs"
            >
              <div className="flex items-center justify-between px-3 py-1.5 bg-slate-900/90 border-b border-slate-800/80 text-[11px] text-slate-400">
                <div className="flex items-center gap-2">
                  <Terminal className="w-3.5 h-3.5 text-cyber-cyan" />
                  <span className="font-bold text-slate-300 uppercase">{lang || 'TEXT'}</span>
                </div>
                <button
                  onClick={() => handleCopy(interpolated, blockId)}
                  className="flex items-center gap-1 px-2 py-0.5 rounded hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
                >
                  {copiedId === blockId ? (
                    <Check className="w-3 h-3 text-emerald-400" />
                  ) : (
                    <Copy className="w-3 h-3" />
                  )}
                  <span>{copiedId === blockId ? 'COPIED' : 'COPY'}</span>
                </button>
              </div>

              <pre className="p-3.5 overflow-x-auto text-slate-200 text-xs leading-relaxed font-mono">
                {codeLines.map((l, idx) => (
                  <div key={idx} className="table-row">
                    <span className="table-cell select-none text-slate-600 text-right pr-4 text-[10px]">
                      {idx + 1}
                    </span>
                    <span className="table-cell">{l}</span>
                  </div>
                ))}
              </pre>
            </div>
          );
        }
        continue;
      }

      // 2. Obsidian Callouts (> [!TYPE] Title)
      const calloutMatch = line.match(/^>\s*\[!([a-zA-Z]+)\]([+-]?)(.*)$/);
      if (calloutMatch) {
        const cType = calloutMatch[1].toLowerCase();
        const collapseModifier = calloutMatch[2];
        const cTitle = calloutMatch[3].trim() || cType.toUpperCase();
        const isCollapsible = collapseModifier === '+' || collapseModifier === '-';
        const defaultCollapsed = collapseModifier === '-';
        const calloutKey = `callout-${i}-${cTitle}`;

        const isCollapsed =
          collapsedCallouts[calloutKey] !== undefined
            ? collapsedCallouts[calloutKey]
            : defaultCollapsed;

        const calloutLines: string[] = [];
        i++;
        while (i < lines.length && lines[i].startsWith('>')) {
          calloutLines.push(lines[i].replace(/^>\s?/, ''));
          i++;
        }

        const calloutStyles: Record<string, { border: string; bg: string; text: string; icon: any }> = {
          note: { border: 'border-blue-500/50', bg: 'bg-blue-950/20', text: 'text-blue-300', icon: Info },
          tip: { border: 'border-emerald-500/50', bg: 'bg-emerald-950/20', text: 'text-emerald-300', icon: CheckCircle2 },
          warning: { border: 'border-amber-500/50', bg: 'bg-amber-950/20', text: 'text-amber-300', icon: AlertTriangle },
          danger: { border: 'border-red-500/50', bg: 'bg-red-950/20', text: 'text-red-300', icon: Flame },
          flag: { border: 'border-emerald-400', bg: 'bg-emerald-950/40', text: 'text-emerald-200', icon: Flag },
          exp: { border: 'border-purple-500/50', bg: 'bg-purple-950/20', text: 'text-purple-300', icon: ShieldAlert },
        };

        const currentStyle = calloutStyles[cType] || calloutStyles['note'];
        const IconComponent = currentStyle.icon;

        blocks.push(
          <div
            key={calloutKey}
            className={`my-3 rounded-xl border-l-4 ${currentStyle.border} ${currentStyle.bg} p-3.5 shadow-md`}
          >
            <div
              onClick={() => {
                if (isCollapsible) {
                  setCollapsedCallouts((prev) => ({ ...prev, [calloutKey]: !isCollapsed }));
                }
              }}
              className={`flex items-center justify-between font-bold text-xs ${currentStyle.text} ${
                isCollapsible ? 'cursor-pointer select-none' : ''
              }`}
            >
              <div className="flex items-center gap-2">
                <IconComponent className="w-4 h-4 shrink-0" />
                <span>{cTitle}</span>
              </div>
              {isCollapsible && (
                <span className="text-slate-400">
                  {isCollapsed ? <ChevronRight className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                </span>
              )}
            </div>

            {!isCollapsed && (
              <div className="mt-2 text-xs text-slate-300 font-sans space-y-1 pl-6">
                {calloutLines.map((cl, idx) => (
                  <p key={idx}>{parseInlineFormatting(cl, `callout-${i}-${idx}`)}</p>
                ))}
              </div>
            )}
          </div>
        );
        continue;
      }

      // 3. Headings (# Heading)
      const hMatch = line.match(/^(#{1,6})\s+(.+)$/);
      if (hMatch) {
        const level = hMatch[1].length;
        const text = hMatch[2].trim();
        const headingId = 'heading-' + text.toLowerCase().replace(/[^a-z0-9]+/g, '-');
        const Tag = `h${Math.min(level, 4)}` as keyof JSX.IntrinsicElements;

        blocks.push(
          <Tag
            key={`h-${i}`}
            id={headingId}
            className={`font-bold font-mono tracking-tight text-white mt-6 mb-3 scroll-mt-20 ${
              level === 1
                ? 'text-xl border-b border-slate-800 pb-2 text-cyber-cyan'
                : level === 2
                ? 'text-lg text-emerald-300'
                : 'text-sm text-slate-200'
            }`}
          >
            {parseInlineFormatting(text, `h-${i}`)}
          </Tag>
        );
        i++;
        continue;
      }

      // 4. Obsidian Transclusions (![[Embedded Note]]) - Guard depth <= 3 and circular visitedIds
      const transclusionMatch = line.match(/^!\[\[([^\]|#]+)(?:#[^\]|]+)?\]\]$/);
      if (transclusionMatch) {
        const targetName = transclusionMatch[1].trim();
        const targetId = resolveWikilink(targetName, allNotes).targetNoteId;
        const targetNote = targetId ? getNoteById(targetId, allNotes) : null;

        if (!targetNote || depth >= 3 || (targetId && visitedIds.has(targetId))) {
          blocks.push(
            <div
              key={`trans-${i}`}
              className="my-3 p-3 rounded-xl border border-dashed border-slate-700 bg-slate-900/40 text-xs font-mono text-slate-400 flex items-center justify-between"
            >
              <div className="flex items-center gap-2">
                <Layers className="w-4 h-4 text-purple-400" />
                <span>Transclusion: <strong className="text-white">[[{targetName}]]</strong></span>
              </div>
              {depth >= 3 && <span className="text-[10px] text-amber-400 font-bold">Max Transclusion Depth</span>}
            </div>
          );
        } else {
          const nextVisited = new Set(visitedIds);
          if (targetId) nextVisited.add(targetId);

          blocks.push(
            <div
              key={`trans-${i}`}
              className="my-4 rounded-xl border border-purple-500/40 bg-purple-950/10 p-4 shadow-inner"
            >
              <div className="flex items-center justify-between pb-2 mb-3 border-b border-purple-500/20 text-xs font-mono">
                <div className="flex items-center gap-2 text-purple-300 font-bold">
                  <Layers className="w-4 h-4" />
                  <span>EMBEDDED: {targetNote.title}</span>
                </div>
                <button
                  onClick={() => setSelectedNoteId(targetNote.id)}
                  className="flex items-center gap-1 text-[11px] text-purple-400 hover:text-white"
                >
                  <span>Open Full Note</span>
                  <ExternalLink className="w-3 h-3" />
                </button>
              </div>
              <div className="text-xs text-slate-300">
                {renderMarkdownContent(targetNote.rawMarkdown || '', depth + 1, nextVisited)}
              </div>
            </div>
          );
        }
        i++;
        continue;
      }

      // 5. Image attachments (![[image.png]] or ![](path))
      const obsidianImgMatch = line.match(/^!\[\[(.*?\.(?:png|jpg|jpeg|gif|svg|webp|bmp))\]\]$/i);
      const mdImgMatch = line.match(/^!\[([^\]]*)\]\((.*?)\)$/);
      if (obsidianImgMatch) {
        blocks.push(<ObsidianImage key={`img-${i}`} src={obsidianImgMatch[1].trim()} />);
        i++;
        continue;
      } else if (mdImgMatch) {
        blocks.push(
          <ObsidianImage key={`img-${i}`} alt={mdImgMatch[1]} src={mdImgMatch[2].trim()} />
        );
        i++;
        continue;
      }

      // 6. KaTeX Block formulas ($$formula$$)
      if (line.startsWith('$$') && line.endsWith('$$') && line.length > 4) {
        const math = line.slice(2, -2);
        blocks.push(
          <React.Suspense key={`katex-${i}`} fallback={<div className="font-mono text-xs text-cyber-muted p-2">{math}</div>}>
            <KaTeXView math={math} block={true} />
          </React.Suspense>
        );
        i++;
        continue;
      }

      // 7. Regular paragraph with inline formatting, Wikilinks, KaTeX, and CTF flags
      if (trimmed) {
        blocks.push(
          <p key={`p-${i}`} className="my-2 text-xs leading-relaxed text-slate-300 font-sans">
            {parseInlineFormatting(line, `p-${i}`)}
          </p>
        );
      }

      i++;
    }

    return blocks;
  };

  // Helper to parse inline Wikilinks [[Note]], CTF Flags, KaTeX $x$, and markdown formatting
  const parseInlineFormatting = (text: string, keyPrefix: string): React.ReactNode[] => {
    if (!text) return [];

    // Tokens: Wikilinks [[...]], KaTeX $...$, CTF Flags FLAG{...}, Bold **, Code `, Mark ==
    const tokenRegex = /(\[\[[^\]]+\]\]|\$[^$\n]+\$|[a-zA-Z0-9_\-]+{[^}\n]+}|==[^=\n]+==|\*\*[^*\n]+\*\*|`[^`\n]+`)/g;
    const elements: React.ReactNode[] = [];
    let lastIdx = 0;
    let match;

    while ((match = tokenRegex.exec(text)) !== null) {
      if (match.index > lastIdx) {
        elements.push(text.substring(lastIdx, match.index));
      }
      const token = match[1];
      const tKey = `${keyPrefix}-${match.index}`;

      // Wikilink: [[Target|Alias]]
      if (token.startsWith('[[') && token.endsWith(']]')) {
        const inner = token.slice(2, -2);
        const parts = inner.split('|');
        const target = parts[0].trim();
        const alias = parts[1]?.trim() || target;

        const resolvedId = resolveWikilink(target, allNotes).targetNoteId;

        if (resolvedId) {
          elements.push(
            <button
              key={tKey}
              onClick={() => setSelectedNoteId(resolvedId)}
              className="inline-flex items-center gap-1 text-cyber-cyan hover:underline font-bold font-mono px-1 rounded hover:bg-cyber-cyan/10 transition-colors"
            >
              <Hash className="w-3 h-3 opacity-60" />
              <span>{alias}</span>
            </button>
          );
        } else {
          elements.push(
            <span key={tKey} className="text-slate-400 font-mono underline decoration-dotted decoration-slate-600">
              [[{alias}]]
            </span>
          );
        }
      }
      // KaTeX inline: $formula$
      else if (token.startsWith('$') && token.endsWith('$') && token.length > 2) {
        const math = token.slice(1, -1);
        elements.push(
          <React.Suspense key={tKey} fallback={<span className="font-mono text-xs text-cyber-muted">{math}</span>}>
            <KaTeXView math={math} block={false} />
          </React.Suspense>
        );
      }
      // CTF Flag detector: FLAG{...}
      else if (/[a-zA-Z0-9_\-]+{[^}\n]+}/.test(token)) {
        elements.push(
          <button
            key={tKey}
            onClick={() => handleCopyFlag(token)}
            title="Click to copy CTF Flag"
            className="inline-flex items-center gap-1 px-2 py-0.5 rounded-lg bg-emerald-950/80 border border-emerald-400 text-emerald-300 font-mono text-[11px] font-bold shadow-glow-emerald hover:bg-emerald-900 transition-all mx-1"
          >
            <Flag className="w-3 h-3 text-emerald-400 animate-bounce" />
            <span>{token}</span>
            {copiedFlag === token ? (
              <Check className="w-3 h-3 text-white" />
            ) : (
              <Copy className="w-3 h-3 opacity-60 hover:opacity-100" />
            )}
          </button>
        );
      }
      // Highlights: ==text==
      else if (token.startsWith('==') && token.endsWith('==')) {
        elements.push(
          <mark key={tKey} className="bg-amber-400/25 text-amber-200 px-1 py-0.5 rounded font-medium">
            {token.slice(2, -2)}
          </mark>
        );
      }
      // Bold: **text**
      else if (token.startsWith('**') && token.endsWith('**')) {
        elements.push(<strong key={tKey} className="font-bold text-white">{token.slice(2, -2)}</strong>);
      }
      // Code: `text`
      else if (token.startsWith('`') && token.endsWith('`')) {
        elements.push(
          <code key={tKey} className="px-1.5 py-0.5 rounded bg-slate-800 text-cyber-cyan font-mono text-[11px] border border-slate-700">
            {token.slice(1, -1)}
          </code>
        );
      }

      lastIdx = match.index + token.length;
    }

    if (lastIdx < text.length) {
      elements.push(text.substring(lastIdx));
    }

    return elements;
  };

  if (!activeNote) {
    return (
      <div className="flex flex-col items-center justify-center h-full p-8 text-center font-mono">
        <BookOpen className="w-12 h-12 text-slate-600 mb-4 animate-pulse" />
        <h3 className="text-white text-base font-bold mb-2">No Vault Notes Active</h3>
        <p className="text-xs text-slate-400 max-w-md mb-6">
          Import your personal Obsidian vault (via ZIP archive or native folder) to explore recursive writeups, diagrams, and attack graphs.
        </p>
        {onOpenImporter && (
          <button
            onClick={onOpenImporter}
            className="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold transition-all shadow-lg"
          >
            Import Obsidian Vault
          </button>
        )}
      </div>
    );
  }

  return (
    <div className="flex h-full w-full bg-[#070B14] overflow-hidden font-mono select-text">
      {/* 1. Left Recursive File Explorer Pane */}
      {showLeftSidebar && (
        <div className="w-64 shrink-0 h-full">
          <FileExplorer
            tree={vaultTree}
            activePath={activeNote.relPath}
            onSelectFile={(node) => {
              if (node.noteId) setSelectedNoteId(node.noteId);
            }}
          />
        </div>
      )}

      {/* 2. Center Reading & Writing Area */}
      <div className="flex-1 flex flex-col h-full overflow-hidden">
        {/* Top Control Bar */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-slate-900/90 border-b border-cyber-border text-xs z-10">
          <div className="flex items-center gap-2 truncate">
            <button
              onClick={() => setShowLeftSidebar(!showLeftSidebar)}
              className="p-1 rounded text-slate-400 hover:text-white hover:bg-slate-800"
              title={showLeftSidebar ? 'Hide Explorer' : 'Show Explorer'}
            >
              {showLeftSidebar ? <PanelLeftClose className="w-4 h-4" /> : <PanelLeft className="w-4 h-4" />}
            </button>

            <span className="text-slate-500 text-xs">/</span>
            <span className="text-slate-400 text-xs truncate">{activeNote.category}</span>
            <span className="text-slate-500 text-xs">/</span>
            <span className="font-bold text-white text-xs truncate">{activeNote.title}</span>
          </div>

          <div className="flex items-center gap-2">
            {/* CTF Flags Counter */}
            {detectedFlags.length > 0 && (
              <button
                onClick={() => {
                  setShowRightSidebar(true);
                  setRightPanelTab('flags');
                }}
                className="flex items-center gap-1.5 px-2 py-1 rounded-lg bg-emerald-950/60 border border-emerald-500/50 text-emerald-300 text-[11px] font-bold"
              >
                <Flag className="w-3.5 h-3.5 text-emerald-400" />
                <span>{detectedFlags.length} Flags</span>
              </button>
            )}

            {/* Interactive Graph View Trigger */}
            <button
              onClick={() => setIsGraphModalOpen(true)}
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-purple-950/60 border border-purple-500/50 text-purple-300 hover:bg-purple-900/50 text-xs font-bold transition-all"
              title="Open Vault Knowledge Graph"
            >
              <Compass className="w-3.5 h-3.5 text-purple-400" />
              <span className="hidden sm:inline">Graph View</span>
            </button>

            {/* View Mode Toggle */}
            <div className="flex items-center bg-slate-800 rounded-lg p-0.5 border border-slate-700">
              <button
                onClick={() => setViewMode('reader')}
                className={`p-1 rounded text-xs transition-all ${
                  viewMode === 'reader' ? 'bg-cyber-cyan/20 text-cyber-cyan font-bold' : 'text-slate-400 hover:text-white'
                }`}
                title="Reader View"
              >
                <Eye className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setViewMode('raw')}
                className={`p-1 rounded text-xs transition-all ${
                  viewMode === 'raw' ? 'bg-cyber-cyan/20 text-cyber-cyan font-bold' : 'text-slate-400 hover:text-white'
                }`}
                title="Raw Markdown"
              >
                <Code className="w-3.5 h-3.5" />
              </button>
            </div>

            <button
              onClick={() => setShowRightSidebar(!showRightSidebar)}
              className="p-1 rounded text-slate-400 hover:text-white hover:bg-slate-800"
              title={showRightSidebar ? 'Hide Outline' : 'Show Outline'}
            >
              {showRightSidebar ? <PanelRightClose className="w-4 h-4" /> : <PanelRight className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Note Content Viewport */}
        <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-4 scrollbar-thin">
          {/* Note Metadata Banner */}
          <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/50 space-y-2">
            <div className="flex items-center justify-between">
              <h1 className="text-xl font-bold text-white font-mono">{activeNote.title}</h1>
              {activeNote.difficulty && (
                <span className="text-[10px] px-2 py-0.5 rounded bg-slate-800 border border-slate-700 uppercase font-bold text-cyber-cyan">
                  {activeNote.difficulty}
                </span>
              )}
            </div>

            {activeNote.summary && (
              <p className="text-xs text-slate-400 font-sans leading-relaxed">{activeNote.summary}</p>
            )}

            {/* Tags */}
            {activeNote.tags && activeNote.tags.length > 0 && (
              <div className="flex flex-wrap items-center gap-1.5 pt-1">
                {activeNote.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] px-2 py-0.5 rounded-full bg-slate-800/80 border border-slate-700 text-slate-300 font-mono"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Mode Switching: Reader vs Raw Markdown */}
          {viewMode === 'raw' ? (
            <pre className="p-4 rounded-xl border border-slate-800 bg-black/60 text-slate-300 text-xs font-mono overflow-x-auto leading-relaxed">
              {activeNote.rawMarkdown || 'No content.'}
            </pre>
          ) : (
            <div className="note-rendered-markdown max-w-4xl">
              {renderMarkdownContent(activeNote.rawMarkdown || '')}
            </div>
          )}
        </div>
      </div>

      {/* 3. Right Sidebar (TOC Outline, Backlinks, CTF Flags) */}
      {showRightSidebar && (
        <div className="w-64 shrink-0 h-full border-l border-cyber-border bg-[#070B14] flex flex-col font-mono text-xs">
          {/* Panel Tabs */}
          <div className="flex items-center border-b border-slate-800 bg-slate-900/70 p-1 text-[11px]">
            <button
              onClick={() => setRightPanelTab('toc')}
              className={`flex-1 py-1 text-center rounded-lg transition-all ${
                rightPanelTab === 'toc'
                  ? 'bg-cyber-cyan/15 text-cyber-cyan font-bold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Outline ({tableOfContents.length})
            </button>
            <button
              onClick={() => setRightPanelTab('backlinks')}
              className={`flex-1 py-1 text-center rounded-lg transition-all ${
                rightPanelTab === 'backlinks'
                  ? 'bg-purple-600/20 text-purple-300 font-bold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Mentions ({backlinks.length})
            </button>
            <button
              onClick={() => setRightPanelTab('flags')}
              className={`flex-1 py-1 text-center rounded-lg transition-all ${
                rightPanelTab === 'flags'
                  ? 'bg-emerald-950/60 text-emerald-300 font-bold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Flags ({detectedFlags.length})
            </button>
          </div>

          {/* Tab Body */}
          <div className="flex-1 overflow-y-auto p-3 space-y-2 scrollbar-thin">
            {rightPanelTab === 'toc' && (
              <div>
                {tableOfContents.length === 0 ? (
                  <div className="text-slate-500 text-xs italic text-center py-4">No headings found.</div>
                ) : (
                  <div className="space-y-1">
                    {tableOfContents.map((item, idx) => (
                      <div
                        key={idx}
                        onClick={() => scrollToHeading(item.id)}
                        style={{ paddingLeft: `${(item.level - 1) * 8 + 4}px` }}
                        className="py-1 px-2 rounded cursor-pointer hover:bg-slate-800 text-slate-300 hover:text-cyber-cyan text-xs truncate transition-colors"
                      >
                        {item.text}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {rightPanelTab === 'backlinks' && (
              <div>
                {backlinks.length === 0 ? (
                  <div className="text-slate-500 text-xs italic text-center py-4">No incoming backlinks.</div>
                ) : (
                  <div className="space-y-1.5">
                    {backlinks.map((mention) => (
                      <div
                        key={mention.id}
                        onClick={() => setSelectedNoteId(mention.id)}
                        className="p-2 rounded-lg border border-slate-800 bg-slate-900/60 hover:border-purple-500 cursor-pointer transition-colors"
                      >
                        <div className="font-bold text-purple-300 text-xs truncate">{mention.title}</div>
                        <div className="text-[10px] text-slate-500 truncate">{mention.category}</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {rightPanelTab === 'flags' && (
              <div>
                {detectedFlags.length === 0 ? (
                  <div className="text-slate-500 text-xs italic text-center py-4">No CTF flags in note.</div>
                ) : (
                  <div className="space-y-2">
                    {detectedFlags.map((f, idx) => (
                      <div
                        key={idx}
                        className="p-2 rounded-lg border border-emerald-500/40 bg-emerald-950/20 text-xs space-y-1"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] uppercase font-bold text-emerald-400">{f.format}</span>
                          <button
                            onClick={() => handleCopyFlag(f.flag)}
                            className="p-1 rounded text-slate-400 hover:text-white"
                          >
                            {copiedFlag === f.flag ? (
                              <Check className="w-3 h-3 text-emerald-400" />
                            ) : (
                              <Copy className="w-3 h-3" />
                            )}
                          </button>
                        </div>
                        <div className="font-mono text-emerald-200 text-xs break-all font-bold">
                          {f.flag}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}

      {/* 4. Interactive 2D Graph View Modal */}
      <VaultGraphModal
        isOpen={isGraphModalOpen}
        onClose={() => setIsGraphModalOpen(false)}
        graphData={graphData}
        activeNodeId={activeNote.id}
        onSelectNode={(nodeId) => setSelectedNoteId(nodeId)}
      />
    </div>
  );
};
