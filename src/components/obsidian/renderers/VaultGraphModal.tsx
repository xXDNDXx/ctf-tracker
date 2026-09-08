import React, { useEffect, useRef, useState, useMemo } from 'react';
import { VaultGraphData, GraphNode, GraphLink } from '../types';
import { X, Search, ZoomIn, ZoomOut, RotateCcw, Compass, Maximize2, Minimize2, Eye, Filter } from 'lucide-react';

interface VaultGraphModalProps {
  isOpen: boolean;
  onClose: () => void;
  graphData: VaultGraphData;
  activeNodeId?: string;
  onSelectNode: (nodeId: string) => void;
}

export const VaultGraphModal: React.FC<VaultGraphModalProps> = ({
  isOpen,
  onClose,
  graphData,
  activeNodeId,
  onSelectNode,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState<string>('all');
  const [hoveredNode, setHoveredNode] = useState<GraphNode | null>(null);
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Simulation state stored in refs to avoid re-triggering simulation loops
  const nodesRef = useRef<GraphNode[]>([]);
  const linksRef = useRef<GraphLink[]>([]);
  const isDraggingRef = useRef(false);
  const draggedNodeRef = useRef<GraphNode | null>(null);
  const panStartRef = useRef({ x: 0, y: 0 });
  const animationFrameRef = useRef<number | null>(null);

  // Extract unique categories / tags for filtering
  const categories = useMemo(() => {
    const set = new Set<string>();
    graphData.nodes.forEach((n) => {
      if (n.group) set.add(n.group);
    });
    return Array.from(set);
  }, [graphData.nodes]);

  // Filter nodes according to search and tag
  const filteredNodes = useMemo(() => {
    return graphData.nodes.filter((node) => {
      const matchesSearch =
        !searchQuery ||
        node.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
        node.path.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesTag = selectedTag === 'all' || node.group === selectedTag;
      return matchesSearch && matchesTag;
    });
  }, [graphData.nodes, searchQuery, selectedTag]);

  // Initialize simulation positions when graph data or filter changes
  useEffect(() => {
    if (!isOpen) return;

    const width = canvasRef.current?.width || 800;
    const height = canvasRef.current?.height || 600;

    // Map existing positions or randomize around center
    const nodeMap = new Map<string, GraphNode>();
    const initializedNodes: GraphNode[] = filteredNodes.map((n, i) => {
      const existing = nodesRef.current.find((prev) => prev.id === n.id);
      const angle = (i / filteredNodes.length) * 2 * Math.PI;
      const radius = 100 + Math.random() * 150;
      const node: GraphNode = {
        ...n,
        x: existing?.x ?? width / 2 + Math.cos(angle) * radius,
        y: existing?.y ?? height / 2 + Math.sin(angle) * radius,
        vx: existing?.vx ?? 0,
        vy: existing?.vy ?? 0,
      };
      nodeMap.set(node.id, node);
      return node;
    });

    // Only keep links where both source and target exist in filtered nodes
    const validLinks: GraphLink[] = graphData.links.filter(
      (l) => nodeMap.has(l.source) && nodeMap.has(l.target)
    );

    nodesRef.current = initializedNodes;
    linksRef.current = validLinks;
  }, [isOpen, filteredNodes, graphData.links]);

  // Main Force Simulation Loop
  useEffect(() => {
    if (!isOpen) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let running = true;

    const step = () => {
      const nodes = nodesRef.current;
      const links = linksRef.current;
      const width = canvas.width;
      const height = canvas.height;
      const cx = width / 2;
      const cy = height / 2;

      // 1. Repulsion between all node pairs (Coulomb force)
      const kRepulsion = 1200;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const dx = (b.x || 0) - (a.x || 0);
          const dy = (b.y || 0) - (a.y || 0);
          const distSq = dx * dx + dy * dy + 100;
          const dist = Math.sqrt(distSq);
          if (dist < 400) {
            const force = kRepulsion / distSq;
            const fx = (dx / dist) * force;
            const fy = (dy / dist) * force;
            if (a !== draggedNodeRef.current) {
              a.vx = (a.vx || 0) - fx;
              a.vy = (a.vy || 0) - fy;
            }
            if (b !== draggedNodeRef.current) {
              b.vx = (b.vx || 0) + fx;
              b.vy = (b.vy || 0) + fy;
            }
          }
        }
      }

      // 2. Spring attraction along links (Hooke's law)
      const springLength = 80;
      const kSpring = 0.04;
      const nodeLookup = new Map<string, GraphNode>();
      nodes.forEach((n) => nodeLookup.set(n.id, n));

      for (const link of links) {
        const a = nodeLookup.get(link.source);
        const b = nodeLookup.get(link.target);
        if (a && b) {
          const dx = (b.x || 0) - (a.x || 0);
          const dy = (b.y || 0) - (a.y || 0);
          const dist = Math.sqrt(dx * dx + dy * dy) || 1;
          const delta = dist - springLength;
          const fx = (dx / dist) * delta * kSpring;
          const fy = (dy / dist) * delta * kSpring;
          if (a !== draggedNodeRef.current) {
            a.vx = (a.vx || 0) + fx;
            a.vy = (a.vy || 0) + fy;
          }
          if (b !== draggedNodeRef.current) {
            b.vx = (b.vx || 0) - fx;
            b.vy = (b.vy || 0) - fy;
          }
        }
      }

      // 3. Center gravity & velocity damping
      const kGravity = 0.008;
      const damping = 0.82;
      for (const node of nodes) {
        if (node === draggedNodeRef.current) continue;
        const dx = cx - (node.x || cx);
        const dy = cy - (node.y || cy);
        node.vx = ((node.vx || 0) + dx * kGravity) * damping;
        node.vy = ((node.vy || 0) + dy * kGravity) * damping;

        node.x = (node.x || 0) + (node.vx || 0);
        node.y = (node.y || 0) + (node.vy || 0);
      }

      // 4. Render to Canvas
      ctx.clearRect(0, 0, width, height);
      ctx.save();
      ctx.translate(pan.x, pan.y);
      ctx.scale(zoom, zoom);

      // Draw background grid dots
      ctx.fillStyle = '#1e293b';

      // Draw edges
      ctx.lineWidth = 1;
      for (const link of links) {
        const a = nodeLookup.get(link.source);
        const b = nodeLookup.get(link.target);
        if (a && b) {
          const isHighlighted =
            hoveredNode && (hoveredNode.id === a.id || hoveredNode.id === b.id);
          ctx.strokeStyle = isHighlighted ? '#38bdf8' : '#334155';
          ctx.lineWidth = isHighlighted ? 2 : 1;
          ctx.globalAlpha = isHighlighted ? 0.9 : 0.4;
          ctx.beginPath();
          ctx.moveTo(a.x || 0, a.y || 0);
          ctx.lineTo(b.x || 0, b.y || 0);
          ctx.stroke();
        }
      }
      ctx.globalAlpha = 1;

      // Draw nodes
      for (const node of nodes) {
        const isHovered = hoveredNode?.id === node.id;
        const isActive = activeNodeId === node.id;
        const radius = isHovered || isActive ? 8 : (node.val || 5);

        ctx.beginPath();
        ctx.arc(node.x || 0, node.y || 0, radius, 0, Math.PI * 2);
        ctx.fillStyle = isActive ? '#10b981' : isHovered ? '#38bdf8' : node.color || '#94a3b8';
        ctx.fill();

        if (isActive || isHovered) {
          ctx.lineWidth = 2;
          ctx.strokeStyle = '#ffffff';
          ctx.stroke();
        }

        // Draw node labels on hover, active, or large nodes
        if (isHovered || isActive || (node.val && node.val > 6) || nodes.length < 35) {
          ctx.font = isHovered ? 'bold 12px monospace' : '10px monospace';
          ctx.fillStyle = isHovered ? '#ffffff' : '#cbd5e1';
          ctx.textAlign = 'center';
          ctx.fillText(node.label, node.x || 0, (node.y || 0) + radius + 12);
        }
      }

      ctx.restore();

      if (running) {
        animationFrameRef.current = requestAnimationFrame(step);
      }
    };

    animationFrameRef.current = requestAnimationFrame(step);

    return () => {
      running = false;
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isOpen, zoom, pan, hoveredNode, activeNodeId]);

  // Mouse interaction: Hover, Drag, Pan
  const getCanvasCoords = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0, screenX: e.clientX, screenY: e.clientY };
    const rect = canvas.getBoundingClientRect();
    const rawX = e.clientX - rect.left;
    const rawY = e.clientY - rect.top;
    return {
      x: (rawX - pan.x) / zoom,
      y: (rawY - pan.y) / zoom,
      screenX: e.clientX,
      screenY: e.clientY,
    };
  };

  const findNodeAtCoords = (x: number, y: number): GraphNode | null => {
    const nodes = nodesRef.current;
    for (let i = nodes.length - 1; i >= 0; i--) {
      const n = nodes[i];
      const dx = (n.x || 0) - x;
      const dy = (n.y || 0) - y;
      const r = (n.val || 5) + 6;
      if (dx * dx + dy * dy <= r * r) {
        return n;
      }
    }
    return null;
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const { x, y, screenX, screenY } = getCanvasCoords(e);
    const clickedNode = findNodeAtCoords(x, y);

    if (clickedNode) {
      draggedNodeRef.current = clickedNode;
    } else {
      isDraggingRef.current = true;
      panStartRef.current = { x: screenX - pan.x, y: screenY - pan.y };
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const { x, y, screenX, screenY } = getCanvasCoords(e);

    if (draggedNodeRef.current) {
      draggedNodeRef.current.x = x;
      draggedNodeRef.current.y = y;
      draggedNodeRef.current.vx = 0;
      draggedNodeRef.current.vy = 0;
      return;
    }

    if (isDraggingRef.current) {
      setPan({
        x: screenX - panStartRef.current.x,
        y: screenY - panStartRef.current.y,
      });
      return;
    }

    const nodeUnderMouse = findNodeAtCoords(x, y);
    setHoveredNode(nodeUnderMouse);
  };

  const handleMouseUp = () => {
    draggedNodeRef.current = null;
    isDraggingRef.current = false;
  };

  const handleClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const { x, y } = getCanvasCoords(e);
    const clickedNode = findNodeAtCoords(x, y);
    if (clickedNode) {
      onSelectNode(clickedNode.id);
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
      <div
        className={`bg-[#070B14] border border-cyber-border rounded-2xl flex flex-col shadow-2xl overflow-hidden font-mono transition-all ${
          isFullscreen ? 'fixed inset-2 z-[110]' : 'w-[92vw] max-w-5xl h-[80vh]'
        }`}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-4 py-3 bg-slate-900/90 border-b border-cyber-border/80">
          <div className="flex items-center gap-2.5">
            <Compass className="w-5 h-5 text-cyber-cyan animate-pulse" />
            <div>
              <span className="font-bold text-white text-sm tracking-wider uppercase">
                VAULT KNOWLEDGE GRAPH
              </span>
              <span className="text-slate-400 text-xs ml-2">
                ({filteredNodes.length} nodes, {linksRef.current.length} links)
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsFullscreen(!isFullscreen)}
              className="p-1.5 rounded-lg border border-slate-700 bg-slate-800/80 text-slate-300 hover:text-white"
              title={isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
            >
              {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg border border-slate-700 bg-slate-800/80 text-slate-300 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Filter Toolbar */}
        <div className="flex flex-wrap items-center justify-between gap-3 px-4 py-2.5 bg-[#0a0f1d] border-b border-slate-800 text-xs">
          {/* Search Filter */}
          <div className="flex items-center gap-2 bg-slate-900/90 px-3 py-1.5 rounded-xl border border-slate-700/80 w-64">
            <Search className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <input
              type="text"
              placeholder="Search notes in graph..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-transparent text-white focus:outline-none text-xs placeholder:text-slate-500"
            />
            {searchQuery && (
              <button onClick={() => setSearchQuery('')} className="text-slate-500 hover:text-white">
                <X className="w-3 h-3" />
              </button>
            )}
          </div>

          {/* Tag / Category Filter */}
          <div className="flex items-center gap-1.5 overflow-x-auto max-w-md scrollbar-none py-0.5">
            <button
              onClick={() => setSelectedTag('all')}
              className={`px-2 py-1 rounded-lg text-[11px] font-bold transition-all ${
                selectedTag === 'all'
                  ? 'bg-cyber-cyan/20 border border-cyber-cyan text-cyber-cyan'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              All ({graphData.nodes.length})
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedTag(cat)}
                className={`px-2 py-1 rounded-lg text-[11px] whitespace-nowrap transition-all ${
                  selectedTag === cat
                    ? 'bg-purple-600/20 border border-purple-500 text-purple-300 font-bold'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Zoom / Navigation Controls */}
          <div className="flex items-center gap-1">
            <button
              onClick={() => setZoom((z) => Math.min(2.5, +(z + 0.2).toFixed(1)))}
              className="p-1 rounded text-slate-400 hover:text-white hover:bg-slate-800"
              title="Zoom In"
            >
              <ZoomIn className="w-3.5 h-3.5" />
            </button>
            <span className="text-[10px] text-slate-400 font-mono px-1">
              {Math.round(zoom * 100)}%
            </span>
            <button
              onClick={() => setZoom((z) => Math.max(0.4, +(z - 0.2).toFixed(1)))}
              className="p-1 rounded text-slate-400 hover:text-white hover:bg-slate-800"
              title="Zoom Out"
            >
              <ZoomOut className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => {
                setZoom(1);
                setPan({ x: 0, y: 0 });
              }}
              className="p-1 rounded text-slate-400 hover:text-white hover:bg-slate-800"
              title="Reset View"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Interactive Graph Canvas Area */}
        <div className="flex-1 relative overflow-hidden cursor-crosshair">
          <canvas
            ref={canvasRef}
            width={1200}
            height={800}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onClick={handleClick}
            className="w-full h-full block"
          />

          {/* Hover Tooltip Overlay */}
          {hoveredNode && (
            <div className="absolute bottom-4 left-4 p-3 rounded-xl bg-slate-900/95 border border-cyber-cyan/50 shadow-xl max-w-sm pointer-events-none">
              <div className="flex items-center gap-2 mb-1">
                <span
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ backgroundColor: hoveredNode.color || '#38bdf8' }}
                />
                <span className="font-bold text-white text-xs truncate">{hoveredNode.label}</span>
              </div>
              <div className="text-[10px] text-slate-400 font-mono truncate">{hoveredNode.path}</div>
              <div className="text-[10px] text-cyber-cyan mt-1">Click node to open writeup →</div>
            </div>
          )}

          {/* Legend / Tip */}
          <div className="absolute bottom-4 right-4 px-3 py-1.5 rounded-lg bg-black/60 border border-slate-800 text-[10px] text-slate-400 pointer-events-none">
            Drag to pan • Drag nodes to reposition • Scroll/Buttons to zoom
          </div>
        </div>
      </div>
    </div>
  );
};
