import React, { useState, useMemo } from 'react';
import { FileNode, VaultTree } from './types';
import { 
  Folder, 
  FolderOpen, 
  FileText, 
  ChevronRight, 
  ChevronDown, 
  Search, 
  LayoutGrid, 
  PenTool, 
  Image as ImageIcon, 
  File, 
  ChevronsDownUp, 
  ChevronsUpDown,
  X
} from 'lucide-react';

interface FileExplorerProps {
  tree: VaultTree;
  activePath?: string;
  onSelectFile: (node: FileNode) => void;
  className?: string;
}

// Module-scoped Intl.Collator to prevent thousands of comparator re-allocations
const naturalSorter = new Intl.Collator(undefined, { numeric: true, sensitivity: 'base' });

export function sortFileNodes(nodes: FileNode[]): FileNode[] {
  return [...nodes].sort((a, b) => {
    // Folders come first
    if (a.type === 'folder' && b.type !== 'folder') return -1;
    if (a.type !== 'folder' && b.type === 'folder') return 1;
    // Natural alphanumeric sorting: 1-recon, 2-enum, 10-privesc, 100-root
    return naturalSorter.compare(a.name, b.name);
  });
}

const FileTreeItem: React.FC<{
  node: FileNode;
  activePath?: string;
  onSelectFile: (node: FileNode) => void;
  expandedFolders: Set<string>;
  toggleFolder: (path: string) => void;
  searchFilter?: string;
  depth?: number;
}> = ({
  node,
  activePath,
  onSelectFile,
  expandedFolders,
  toggleFolder,
  searchFilter,
  depth = 0,
}) => {
  const isFolder = node.type === 'folder';
  const isExpanded = expandedFolders.has(node.path);
  const isActive = activePath === node.path;

  // Filter check
  const matchesSearch =
    !searchFilter || node.name.toLowerCase().includes(searchFilter.toLowerCase());

  // Count items inside folder
  const itemCount = isFolder ? (node.children?.length || 0) : null;

  // Icon mapping
  const getNodeIcon = () => {
    if (isFolder) {
      return isExpanded ? (
        <FolderOpen className="w-4 h-4 text-cyber-cyan shrink-0" />
      ) : (
        <Folder className="w-4 h-4 text-cyber-cyan/70 shrink-0" />
      );
    }
    if (node.type === 'canvas') {
      return <LayoutGrid className="w-4 h-4 text-purple-400 shrink-0" />;
    }
    if (node.type === 'excalidraw') {
      return <PenTool className="w-4 h-4 text-pink-400 shrink-0" />;
    }
    if (node.type === 'image') {
      return <ImageIcon className="w-4 h-4 text-emerald-400 shrink-0" />;
    }
    if (node.type === 'file') {
      return <FileText className="w-4 h-4 text-slate-300 shrink-0" />;
    }
    return <File className="w-4 h-4 text-slate-500 shrink-0" />;
  };

  const sortedChildren = useMemo(() => {
    return isFolder && node.children ? sortFileNodes(node.children) : [];
  }, [isFolder, node.children]);

  return (
    <div className="select-none font-mono text-xs">
      <div
        onClick={() => {
          if (isFolder) {
            toggleFolder(node.path);
          } else {
            onSelectFile(node);
          }
        }}
        style={{ paddingLeft: `${depth * 14 + 8}px` }}
        className={`flex items-center justify-between py-1.5 pr-2 rounded-lg cursor-pointer transition-colors group ${
          isActive
            ? 'bg-cyan-50 dark:bg-cyber-cyan/15 border-l-2 border-cyan-600 dark:border-cyber-cyan text-cyan-800 dark:text-cyber-cyan font-bold shadow-xs'
            : 'hover:bg-slate-100 dark:hover:bg-slate-800/60 text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white'
        }`}
      >
        <div className="flex items-center gap-2 truncate">
          {isFolder && (
            <span className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300">
              {isExpanded ? (
                <ChevronDown className="w-3.5 h-3.5" />
              ) : (
                <ChevronRight className="w-3.5 h-3.5" />
              )}
            </span>
          )}
          {getNodeIcon()}
          <span className={`truncate text-xs ${isActive ? 'text-cyan-800 dark:text-cyber-cyan font-bold' : ''}`}>
            {node.name}
          </span>
        </div>

        {itemCount !== null && itemCount > 0 && (
          <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700/60 font-mono">
            {itemCount}
          </span>
        )}
      </div>

      {/* Recursive Children */}
      {isFolder && isExpanded && sortedChildren.length > 0 && (
        <div className="border-l border-slate-200 dark:border-slate-800/80 ml-3">
          {sortedChildren.map((child) => (
            <FileTreeItem
              key={child.id || child.path}
              node={child}
              activePath={activePath}
              onSelectFile={onSelectFile}
              expandedFolders={expandedFolders}
              toggleFolder={toggleFolder}
              searchFilter={searchFilter}
              depth={depth + 1}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export const FileExplorer: React.FC<FileExplorerProps> = ({
  tree,
  activePath,
  onSelectFile,
  className = '',
}) => {
  const [search, setSearch] = useState('');
  const [expandedFolders, setExpandedFolders] = useState<Set<string>>(() => {
    // Expand root folders by default
    const set = new Set<string>();
    tree.roots.forEach((n) => {
      if (n.type === 'folder') set.add(n.path);
    });
    return set;
  });

  const toggleFolder = (path: string) => {
    setExpandedFolders((prev) => {
      const next = new Set(prev);
      if (next.has(path)) next.delete(path);
      else next.add(path);
      return next;
    });
  };

  const handleExpandAll = () => {
    const all = new Set<string>();
    const collect = (nodes: FileNode[]) => {
      for (const n of nodes) {
        if (n.type === 'folder') {
          all.add(n.path);
          if (n.children) collect(n.children);
        }
      }
    };
    collect(tree.roots);
    setExpandedFolders(all);
  };

  const handleCollapseAll = () => {
    setExpandedFolders(new Set());
  };

  const sortedRoots = useMemo(() => {
    return sortFileNodes(tree.roots);
  }, [tree.roots]);

  return (
    <div className={`flex flex-col h-full bg-slate-50 dark:bg-[#070B14] border-r border-slate-200 dark:border-cyber-border font-mono text-xs ${className}`}>
      {/* Search Header */}
      <div className="p-3 border-b border-slate-200 dark:border-cyber-border/70 space-y-2">
        <div className="flex items-center justify-between text-cyber-muted text-[10px] font-bold uppercase tracking-wider">
          <span>VAULT EXPLORER</span>
          <div className="flex items-center gap-1">
            <button
              onClick={handleExpandAll}
              className="p-1 rounded text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
              title="Expand All"
            >
              <ChevronsUpDown className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={handleCollapseAll}
              className="p-1 rounded text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
              title="Collapse All"
            >
              <ChevronsDownUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        <div className="flex items-center gap-2 bg-white dark:bg-slate-900 px-2.5 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 text-xs shadow-xs">
          <Search className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500 shrink-0" />
          <input
            type="text"
            placeholder="Search notes & files..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-transparent text-slate-900 dark:text-white focus:outline-none text-xs placeholder:text-slate-400 dark:placeholder:text-slate-500"
          />
          {search && (
            <button onClick={() => setSearch('')} className="text-slate-400 hover:text-slate-700 dark:text-slate-500 dark:hover:text-white">
              <X className="w-3 h-3" />
            </button>
          )}
        </div>
      </div>

      {/* File Tree List */}
      <div className="flex-1 overflow-y-auto p-2 space-y-0.5 scrollbar-thin scrollbar-thumb-slate-300 dark:scrollbar-thumb-slate-800">
        {sortedRoots.length === 0 ? (
          <div className="p-4 text-center text-slate-400 dark:text-slate-500 text-xs italic">
            Vault is empty.
          </div>
        ) : (
          sortedRoots.map((node) => (
            <FileTreeItem
              key={node.id || node.path}
              node={node}
              activePath={activePath}
              onSelectFile={onSelectFile}
              expandedFolders={expandedFolders}
              toggleFolder={toggleFolder}
              searchFilter={search}
            />
          ))
        )}
      </div>
    </div>
  );
};
