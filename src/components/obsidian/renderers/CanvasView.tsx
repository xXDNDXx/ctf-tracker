import React, { useState, useRef, useMemo } from 'react';
import { CanvasData, CanvasNode, CanvasEdge } from '../types';
import { ZoomIn, ZoomOut, RotateCcw, Maximize2, Minimize2, ExternalLink, FileText, Folder, LayoutGrid } from 'lucide-react';
import { sanitizeExternalUrl } from '../../../utils/helpers';

interface CanvasViewProps {
  data: CanvasData | string;
  title?: string;
  onOpenFile?: (path: string) => void;
}

export const CanvasView: React.FC<CanvasViewProps> = ({ data, title, onOpenFile }) => {
  const [zoom, setZoom] = useState(0.85);
  const [pan, setPan] = useState({ x: 40, y: 40 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [selectedNodeId, setSelectedNodeId] = useState<string | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);

  // Parse JSON data if passed as string
  const canvasData: CanvasData = useMemo(() => {
    if (typeof data === 'string') {
      try {
        const parsed = JSON.parse(data);
        return {
          nodes: Array.isArray(parsed.nodes) ? parsed.nodes : [],
          edges: Array.isArray(parsed.edges) ? parsed.edges : [],
        };
      } catch (e) {
        console.warn('[CanvasView] Failed to parse canvas JSON:', e);
        return { nodes: [], edges: [] };
      }
    }
    return data || { nodes: [], edges: [] };
  }, [data]);

  // Compute node center coordinates for edge connections
  const nodeCoordsMap = useMemo(() => {
    const map = new Map<string, { x: number; y: number; width: number; height: number; right: number; bottom: number }>();
    for (const node of canvasData.nodes) {
      map.set(node.id, {
        x: node.x,
        y: node.y,
        width: node.width || 250,
        height: node.height || 160,
        right: node.x + (node.width || 250),
        bottom: node.y + (node.height || 160),
      });
    }
    return map;
  }, [canvasData.nodes]);

  // Handle Pan dragging
  const handleMouseDown = (e: React.MouseEvent) => {
    // Only pan if clicking canvas background, not inside a card
    if ((e.target as HTMLElement).closest('.canvas-card')) return;
    setIsDragging(true);
    setDragStart({ x: e.clientX - pan.x, y: e.clientY - pan.y });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    setPan({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y,
    });
  };

  const handleMouseUp = () => setIsDragging(false);

  // Reset viewport to fit content
  const handleFitView = () => {
    if (canvasData.nodes.length === 0) {
      setPan({ x: 40, y: 40 });
      setZoom(1);
      return;
    }
    let minX = Infinity, minY = Infinity;
    for (const n of canvasData.nodes) {
      if (n.x < minX) minX = n.x;
      if (n.y < minY) minY = n.y;
    }
    setPan({ x: -minX + 80, y: -minY + 80 });
    setZoom(0.85);
  };

  // Helper to compute connection anchor point
  const getAnchorPoint = (nodeId: string, side?: string) => {
    const box = nodeCoordsMap.get(nodeId);
    if (!box) return { x: 0, y: 0 };
    switch (side) {
      case 'top':
        return { x: box.x + box.width / 2, y: box.y };
      case 'bottom':
        return { x: box.x + box.width / 2, y: box.bottom };
      case 'left':
        return { x: box.x, y: box.y + box.height / 2 };
      case 'right':
      default:
        return { x: box.right, y: box.y + box.height / 2 };
    }
  };

  // Generate cubic bezier curve path for edges
  const renderEdge = (edge: CanvasEdge) => {
    const from = getAnchorPoint(edge.fromNode, edge.fromSide || 'right');
    const to = getAnchorPoint(edge.toNode, edge.toSide || 'left');

    const dx = Math.abs(to.x - from.x) * 0.5;
    const dy = Math.abs(to.y - from.y) * 0.5;

    let c1x = from.x, c1y = from.y, c2x = to.x, c2y = to.y;

    if (edge.fromSide === 'right') c1x += dx;
    else if (edge.fromSide === 'left') c1x -= dx;
    else if (edge.fromSide === 'bottom') c1y += dy;
    else if (edge.fromSide === 'top') c1y -= dy;

    if (edge.toSide === 'right') c2x += dx;
    else if (edge.toSide === 'left') c2x -= dx;
    else if (edge.toSide === 'bottom') c2y += dy;
    else if (edge.toSide === 'top') c2y -= dy;

    const pathD = `M ${from.x} ${from.y} C ${c1x} ${c1y}, ${c2x} ${c2y}, ${to.x} ${to.y}`;
    const midX = (from.x + to.x) / 2;
    const midY = (from.y + to.y) / 2;
    const strokeColor = edge.color || '#38bdf8';

    return (
      <g key={edge.id || `${edge.fromNode}-${edge.toNode}`}>
        <path
          d={pathD}
          fill="none"
          stroke={strokeColor}
          strokeWidth="2"
          strokeDasharray={edge.label ? '4 2' : undefined}
          markerEnd="url(#arrowhead)"
          className="opacity-75 hover:opacity-100 transition-opacity"
        />
        {edge.label && (
          <g transform={`translate(${midX}, ${midY})`}>
            <rect
              x="-30"
              y="-10"
              width="60"
              height="20"
              rx="4"
              fill="#0f172a"
              stroke="#334155"
              strokeWidth="1"
            />
            <text
              textAnchor="middle"
              dominantBaseline="central"
              fill="#94a3b8"
              fontSize="10"
              fontFamily="monospace"
            >
              {edge.label}
            </text>
          </g>
        )}
      </g>
    );
  };

  return (
    <div
      className={`relative rounded-xl border border-cyber-border bg-[#070b14] overflow-hidden my-4 select-none ${
        isFullscreen ? 'fixed inset-4 z-[999] shadow-2xl flex flex-col' : 'h-[540px]'
      }`}
    >
      {/* Canvas Header */}
      <div className="flex items-center justify-between px-3 py-1.5 bg-slate-900/90 border-b border-cyber-border/70 text-xs z-10">
        <div className="flex items-center gap-2 font-mono text-[11px]">
          <LayoutGrid className="w-3.5 h-3.5 text-purple-400" />
          <span className="font-bold text-purple-300 uppercase">{title || 'Obsidian Canvas'}</span>
          <span className="text-slate-500 font-mono text-[10px]">
            ({canvasData.nodes.length} nodes, {canvasData.edges.length} edges)
          </span>
        </div>

        <div className="flex items-center gap-1">
          <button
            onClick={() => setZoom((z) => Math.min(2, +(z + 0.15).toFixed(2)))}
            className="p-1 rounded text-slate-400 hover:text-white hover:bg-slate-800"
            title="Zoom In"
          >
            <ZoomIn className="w-3.5 h-3.5" />
          </button>
          <span className="text-[10px] text-slate-400 font-mono px-1">{Math.round(zoom * 100)}%</span>
          <button
            onClick={() => setZoom((z) => Math.max(0.3, +(z - 0.15).toFixed(2)))}
            className="p-1 rounded text-slate-400 hover:text-white hover:bg-slate-800"
            title="Zoom Out"
          >
            <ZoomOut className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={handleFitView}
            className="p-1 rounded text-slate-400 hover:text-white hover:bg-slate-800"
            title="Fit View"
          >
            <RotateCcw className="w-3 h-3" />
          </button>
          <div className="h-3 w-px bg-slate-700 mx-1" />
          <button
            onClick={() => setIsFullscreen(!isFullscreen)}
            className="p-1 rounded text-slate-400 hover:text-white hover:bg-slate-800"
            title={isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
          >
            {isFullscreen ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {/* Infinite Canvas Viewport */}
      <div
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        className={`w-full h-full relative overflow-hidden cursor-${isDragging ? 'grabbing' : 'grab'} bg-radial-grid`}
        style={{
          backgroundImage: 'radial-gradient(circle, #1e293b 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      >
        <div
          style={{
            transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})`,
            transformOrigin: '0 0',
            width: '100%',
            height: '100%',
            position: 'absolute',
          }}
        >
          {/* SVG Layer for Connecting Lines */}
          <svg className="absolute inset-0 overflow-visible pointer-events-none w-full h-full">
            <defs>
              <marker
                id="arrowhead"
                markerWidth="8"
                markerHeight="6"
                refX="7"
                refY="3"
                orient="auto"
              >
                <polygon points="0 0, 8 3, 0 6" fill="#38bdf8" />
              </marker>
            </defs>
            {canvasData.edges.map(renderEdge)}
          </svg>

          {/* HTML Nodes Layer */}
          {canvasData.nodes.map((node: CanvasNode) => {
            const isSelected = selectedNodeId === node.id;
            const isGroup = node.type === 'group';

            if (isGroup) {
              return (
                <div
                  key={node.id}
                  style={{
                    position: 'absolute',
                    left: `${node.x}px`,
                    top: `${node.y}px`,
                    width: `${node.width}px`,
                    height: `${node.height}px`,
                    borderColor: node.color || '#334155',
                  }}
                  className="rounded-2xl border-2 border-dashed bg-slate-900/30 p-3 pointer-events-none"
                >
                  {node.label && (
                    <div className="text-xs font-bold font-mono text-slate-400 uppercase tracking-wider">
                      {node.label}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <div
                key={node.id}
                onClick={() => setSelectedNodeId(node.id)}
                style={{
                  position: 'absolute',
                  left: `${node.x}px`,
                  top: `${node.y}px`,
                  width: `${node.width || 260}px`,
                  height: `${node.height || 170}px`,
                }}
                className={`canvas-card rounded-xl border p-3.5 flex flex-col justify-between shadow-xl transition-all ${
                  isSelected
                    ? 'border-cyber-cyan ring-2 ring-cyan-500/40 bg-[#0d1627]'
                    : 'border-slate-700/80 bg-slate-900/95 hover:border-slate-500'
                }`}
              >
                {/* Node Header */}
                <div className="flex items-center justify-between pb-2 border-b border-slate-800 text-[11px] font-mono text-slate-400">
                  <div className="flex items-center gap-1.5 truncate">
                    {node.type === 'file' ? (
                      <FileText className="w-3.5 h-3.5 text-cyber-cyan shrink-0" />
                    ) : node.type === 'link' ? (
                      <ExternalLink className="w-3.5 h-3.5 text-cyber-emerald shrink-0" />
                    ) : (
                      <LayoutGrid className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                    )}
                    <span className="truncate font-bold text-slate-200">
                      {node.file ? node.file.split('/').pop() : node.label || 'Note Card'}
                    </span>
                  </div>
                  {node.color && (
                    <span
                      className="w-2.5 h-2.5 rounded-full shrink-0"
                      style={{ backgroundColor: node.color }}
                    />
                  )}
                </div>

                {/* Node Body */}
                <div className="flex-1 py-2 overflow-hidden text-xs text-slate-300 font-sans leading-relaxed">
                  {node.text ? (
                    <p className="line-clamp-5 whitespace-pre-wrap">{node.text}</p>
                  ) : node.file ? (
                    <div className="text-slate-400 font-mono text-[11px] truncate">
                      File: {node.file}
                    </div>
                  ) : node.url ? (
                    (() => {
                      const safeUrl = sanitizeExternalUrl(node.url);
                      return safeUrl ? (
                        <a
                          href={safeUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-cyber-cyan hover:underline break-all font-mono text-[11px]"
                        >
                          {node.url}
                        </a>
                      ) : (
                        <span className="text-slate-500 font-mono text-[11px] break-all">{node.url}</span>
                      );
                    })()
                  ) : (
                    <div className="text-slate-600 italic">Empty node</div>
                  )}
                </div>

                {/* Node Footer Actions */}
                {node.file && onOpenFile && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onOpenFile(node.file!);
                    }}
                    className="w-full py-1 px-2 rounded bg-slate-800 hover:bg-cyber-cyan/20 border border-slate-700 hover:border-cyber-cyan/50 text-slate-300 hover:text-cyber-cyan text-[10px] font-mono flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <span>Open Linked File</span>
                    <ExternalLink className="w-3 h-3" />
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
