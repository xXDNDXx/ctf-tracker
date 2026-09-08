/**
 * Comprehensive TypeScript definitions for Obsidian-Parity Viewer & Importer
 */

export type FileNodeType = 'file' | 'folder' | 'canvas' | 'excalidraw' | 'image' | 'attachment';

export interface FileNode {
  id: string;
  name: string;
  path: string;
  type: FileNodeType;
  size: number;
  mtime?: string;
  children?: FileNode[];
  noteId?: string;
  blobUrl?: string;
  extension?: string;
}

export interface VaultTree {
  roots: FileNode[];
  nodeMap: Record<string, FileNode>;
  wikilinkMap: Record<string, string>;
}

export type DiagramType = 'mermaid' | 'canvas' | 'excalidraw' | 'katex' | 'memory-layout';

export interface DiagramSpec {
  type: DiagramType;
  raw: string;
  title?: string;
  options?: Record<string, any>;
}

export interface CanvasNode {
  id: string;
  type: 'text' | 'file' | 'link' | 'group';
  text?: string;
  file?: string;
  url?: string;
  label?: string;
  color?: string;
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface CanvasEdge {
  id: string;
  fromNode: string;
  fromSide: 'top' | 'right' | 'bottom' | 'left';
  toNode: string;
  toSide: 'top' | 'right' | 'bottom' | 'left';
  label?: string;
  color?: string;
}

export interface CanvasData {
  nodes: CanvasNode[];
  edges: CanvasEdge[];
}

export interface ExcalidrawElement {
  id: string;
  type: 'rectangle' | 'ellipse' | 'diamond' | 'arrow' | 'line' | 'draw' | 'text' | 'freedraw';
  x: number;
  y: number;
  width: number;
  height: number;
  strokeColor?: string;
  backgroundColor?: string;
  fillStyle?: 'hachure' | 'cross-hatch' | 'solid' | 'zigzag';
  strokeWidth?: number;
  roughness?: number;
  opacity?: number;
  text?: string;
  fontSize?: number;
  fontFamily?: number;
  textAlign?: string;
  verticalAlign?: string;
  points?: [number, number][];
  isDeleted?: boolean;
}

export interface ExcalidrawScene {
  type?: string;
  version?: number;
  source?: string;
  elements: ExcalidrawElement[];
  appState?: {
    viewBackgroundColor?: string;
    gridSize?: number;
  };
}

export interface GraphNode {
  id: string;
  label: string;
  path: string;
  type: 'note' | 'canvas' | 'excalidraw' | 'tag' | 'attachment';
  val: number;
  color: string;
  group: string;
  degree?: number;
  x?: number;
  y?: number;
  vx?: number;
  vy?: number;
}

export interface GraphLink {
  source: string;
  target: string;
}

export interface VaultGraphData {
  nodes: GraphNode[];
  links: GraphLink[];
}

export interface ObsidianCallout {
  type: string;
  title: string;
  content: string;
  collapsible: boolean;
  defaultCollapsed: boolean;
}

export interface ObsidianTocItem {
  id: string;
  text: string;
  level: number;
  line?: number;
}

export interface ObsidianChecklistItem {
  id: string;
  text: string;
  checked: boolean;
}

export interface CtfFlagMatch {
  flag: string;
  format: string;
  index: number;
}

export interface VaultImportProgress {
  phase: 'unzipping' | 'scanning' | 'parsing' | 'attachments' | 'indexing' | 'complete';
  current: number;
  total: number;
  currentFile: string;
}

export interface VaultImportResult {
  notes: any[];
  tree: VaultTree;
  wikilinkMap: Record<string, string>;
  attachmentCount: number;
  summary: {
    totalNotes: number;
    totalCanvases: number;
    totalExcalidraw: number;
    totalAttachments: number;
    categories: string[];
  };
}
