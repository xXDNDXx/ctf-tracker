import React, { useState, useRef, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ZoomIn, 
  ZoomOut, 
  RotateCcw, 
  Crosshair, 
  Terminal, 
  Shield, 
  Cpu, 
  Flag, 
  ExternalLink,
  Layers,
  X,
  Maximize2,
  Share2
} from 'lucide-react';
import { Machine, Platform } from '../../types';
import { useCtfStore } from '../../store/useCtfStore';
import { PlatformBadge, PlatformIcon } from '../common/PlatformBadge';
import { CategoryBadge } from '../common/CategoryBadge';
import { EditableIpBadge } from '../common/EditableIpBadge';
import { classifyMachine } from '../../utils/categoryUtils';
import { playCyberSound } from '../../utils/helpers';

interface GraphViewProps {
  filteredMachines: Machine[];
}

interface GraphNode {
  id: string;
  name: string;
  ip: string;
  os: string;
  platform: Platform;
  difficulty: string;
  status: string;
  cluster: string;
  x: number;
  y: number;
  machine: Machine;
}

export const GraphView: React.FC<GraphViewProps> = ({ filteredMachines }) => {
  const navigate = useNavigate();
  const { setActiveTarget, setSelectedMachineId, soundEnabled } = useCtfStore();

  const [scale, setScale] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [selectedNode, setSelectedNode] = useState<GraphNode | null>(null);

  // Center coordinate of canvas
  const centerX = 800;
  const centerY = 600;

  // Clusters definition with expanded radii in 1600x1200 canvas
  const clusters = [
    { id: 'htb-early', name: '10.10.10.x [HTB Legacy]', angle: -Math.PI * 0.75, radius: 340, color: '#10B981' },
    { id: 'web-perimeter', name: 'DMZ [Web Surface]', angle: -Math.PI * 0.5, radius: 360, color: '#38BDF8' },
    { id: 'htb-modern', name: '10.10.11.x [HTB Seasons]', angle: -Math.PI * 0.25, radius: 340, color: '#06B6D4' },
    { id: 'thm-network', name: '10.10.x.x [THM Labs]', angle: Math.PI * 0.15, radius: 340, color: '#EF4444' },
    { id: 'ad-forest', name: 'CORP.LOCAL [Active Directory]', angle: Math.PI * 0.5, radius: 370, color: '#A855F7' },
    { id: 'internal-lab', name: '192.168.x.x [Internal Pivots]', angle: Math.PI * 0.85, radius: 340, color: '#F59E0B' },
  ];

  // Map machines to graph nodes using an outward-fanning orbital topology + force relaxation
  const nodes = useMemo(() => {
    // Limit to 48 nodes for peak 120 FPS animation
    const sample = filteredMachines.slice(0, 48);

    // Group machines into their respective clusters
    const clusterBuckets: Record<string, Machine[]> = {};
    clusters.forEach((c) => {
      clusterBuckets[c.id] = [];
    });

    sample.forEach((m) => {
      const { isAD, primary } = classifyMachine(m);
      let clusterId = 'htb-modern';
      if (m.os === 'Active Directory' || isAD) {
        clusterId = 'ad-forest';
      } else if (primary.startsWith('Web')) {
        clusterId = 'web-perimeter';
      } else if (m.platform === 'THM') {
        clusterId = 'thm-network';
      } else if (m.platform === 'VulnHub') {
        clusterId = 'internal-lab';
      } else if (m.ip.startsWith('10.10.10.')) {
        clusterId = 'htb-early';
      }
      if (!clusterBuckets[clusterId]) {
        clusterBuckets[clusterId] = [];
      }
      clusterBuckets[clusterId].push(m);
    });

    const initialNodes: GraphNode[] = [];

    // Fan-out tier definitions for radiating nodes away from central hub
    const tiers = [
      { cap: 4, dist: 110, arc: Math.PI * 0.52 },
      { cap: 6, dist: 190, arc: Math.PI * 0.62 },
      { cap: 8, dist: 270, arc: Math.PI * 0.72 },
    ];

    clusters.forEach((cluster) => {
      const machinesInCluster = clusterBuckets[cluster.id] || [];
      const clusterBaseX = centerX + Math.cos(cluster.angle) * cluster.radius;
      const clusterBaseY = centerY + Math.sin(cluster.angle) * cluster.radius;

      let processedCount = 0;
      for (const tier of tiers) {
        const tierMachines = machinesInCluster.slice(processedCount, processedCount + tier.cap);
        if (tierMachines.length === 0) break;
        processedCount += tierMachines.length;

        const count = tierMachines.length;
        tierMachines.forEach((m, idxInTier) => {
          let fanAngle = cluster.angle;
          if (count > 1) {
            fanAngle = (cluster.angle - tier.arc / 2) + (idxInTier / (count - 1)) * tier.arc;
          }
          const x = clusterBaseX + Math.cos(fanAngle) * tier.dist;
          const y = clusterBaseY + Math.sin(fanAngle) * tier.dist;

          initialNodes.push({
            id: m.id,
            name: m.name,
            ip: m.ip,
            os: m.os,
            platform: m.platform,
            difficulty: m.difficulty,
            status: m.status,
            cluster: cluster.id,
            x,
            y,
            machine: m,
          });
        });
      }
    });

    // 30-iteration multi-body relaxation pass to guarantee minimum node separation >= 68px
    const MIN_DIST = 68.0;
    const MIN_HUB_DIST = 58.0;
    const MIN_OP_DIST = 110.0;

    for (let iter = 0; iter < 30; iter++) {
      // 1. Node-to-node repulsion
      for (let i = 0; i < initialNodes.length; i++) {
        for (let j = i + 1; j < initialNodes.length; j++) {
          const dx = initialNodes[j].x - initialNodes[i].x;
          const dy = initialNodes[j].y - initialNodes[i].y;
          const dist = Math.hypot(dx, dy);
          if (dist < MIN_DIST && dist > 0.001) {
            const overlap = (MIN_DIST - dist) / 2;
            const nx = dx / dist;
            const ny = dy / dist;
            initialNodes[i].x -= nx * overlap;
            initialNodes[i].y -= ny * overlap;
            initialNodes[j].x += nx * overlap;
            initialNodes[j].y += ny * overlap;
          }
        }
      }

      // 2. Subnet hub repulsion (keep nodes clear of subnet hubs and labels)
      for (const node of initialNodes) {
        for (const cluster of clusters) {
          const cx = centerX + Math.cos(cluster.angle) * cluster.radius;
          const cy = centerY + Math.sin(cluster.angle) * cluster.radius;
          const dx = node.x - cx;
          const dy = node.y - cy;
          const dist = Math.hypot(dx, dy);
          if (dist < MIN_HUB_DIST && dist > 0.001) {
            const overlap = MIN_HUB_DIST - dist;
            node.x += (dx / dist) * overlap;
            node.y += (dy / dist) * overlap;
          }
        }

        // 3. Central Operator rig repulsion
        const opDx = node.x - centerX;
        const opDy = node.y - centerY;
        const opDist = Math.hypot(opDx, opDy);
        if (opDist < MIN_OP_DIST && opDist > 0.001) {
          const overlap = MIN_OP_DIST - opDist;
          node.x += (opDx / opDist) * overlap;
          node.y += (opDy / opDist) * overlap;
        }

        // 4. Clamp within canvas boundaries
        node.x = Math.max(60, Math.min(1540, node.x));
        node.y = Math.max(60, Math.min(1140, node.y));
      }
    }

    return initialNodes;
  }, [filteredMachines]);

  // Pan interaction handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).tagName !== 'svg' && (e.target as HTMLElement).id !== 'graph-canvas') return;
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

  const handleZoom = (delta: number) => {
    setScale((prev) => Math.min(Math.max(prev + delta, 0.5), 2.2));
  };

  const handleResetView = () => {
    setScale(1);
    setPan({ x: 0, y: 0 });
    setSelectedNode(null);
  };

  return (
    <div className="relative w-full h-[720px] rounded-2xl border border-cyber-border bg-cyber-card/90 overflow-hidden font-mono shadow-2xl select-none">
      
      {/* Top HUD Controls & Legend */}
      <div className="absolute top-4 left-4 z-20 flex flex-wrap items-center gap-3 pointer-events-auto">
        <div className="px-3 py-1.5 rounded-xl bg-cyber-bg/90 border border-cyber-border shadow-md backdrop-blur-md flex items-center gap-2">
          <Share2 className="w-4 h-4 text-cyber-cyan" />
          <span className="text-xs font-bold text-white uppercase tracking-wider">
            BLOODHOUND // NETWORK ATTACK GRAPH
          </span>
          <span className="text-[10px] text-cyber-muted px-1.5 py-0.2 rounded bg-cyber-card border border-cyber-border">
            {nodes.length} NODES VISIBLE
          </span>
        </div>

        {/* Legend */}
        <div className="hidden md:flex items-center gap-2.5 px-3 py-1.5 rounded-xl bg-cyber-bg/90 border border-cyber-border shadow-md backdrop-blur-md text-[10px]">
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-cyber-emerald shadow-[0_0_6px_#10B981]" />
            <span className="text-cyber-emerald font-bold">Root / Domain Admin</span>
          </span>
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-cyber-amber shadow-[0_0_6px_#F59E0B]" />
            <span className="text-cyber-amber font-bold">Foothold</span>
          </span>
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-cyber-cyan shadow-[0_0_6px_#06B6D4]" />
            <span className="text-cyber-muted">Recon / Standby</span>
          </span>
        </div>
      </div>

      {/* Floating Canvas Navigation Toolbar */}
      <div className="absolute top-4 right-4 z-20 flex items-center gap-1.5 bg-cyber-bg/90 border border-cyber-border p-1 rounded-xl shadow-lg backdrop-blur-md">
        <button
          onClick={() => handleZoom(0.15)}
          className="p-2 rounded-lg hover:bg-cyber-card text-cyber-muted hover:text-white transition-colors"
          title="Zoom In"
        >
          <ZoomIn className="w-4 h-4" />
        </button>
        <button
          onClick={() => handleZoom(-0.15)}
          className="p-2 rounded-lg hover:bg-cyber-card text-cyber-muted hover:text-white transition-colors"
          title="Zoom Out"
        >
          <ZoomOut className="w-4 h-4" />
        </button>
        <button
          onClick={handleResetView}
          className="p-2 rounded-lg hover:bg-cyber-card text-cyber-muted hover:text-white transition-colors"
          title="Reset View"
        >
          <RotateCcw className="w-4 h-4" />
        </button>
      </div>

      {/* Interactive SVG Canvas */}
      <div
        id="graph-canvas"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        className="w-full h-full cursor-grab active:cursor-grabbing overflow-hidden"
      >
        <svg
          className="w-full h-full"
          viewBox="0 0 1600 1200"
          style={{
            transform: `translate(${pan.x}px, ${pan.y}px) scale(${scale})`,
            transformOrigin: 'center center',
            transition: isDragging ? 'none' : 'transform 0.1s ease-out',
          }}
        >
          <defs>
            {/* Grid Pattern */}
            <pattern id="graph-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#06B6D4" strokeWidth="0.5" opacity="0.08" />
            </pattern>

            {/* Gradient Glows */}
            <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#10B981" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#10B981" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Background Grid */}
          <rect width="1600" height="1200" fill="url(#graph-grid)" />

          {/* Subnet Cluster Hubs & Attack Edges */}
          {clusters.map((cluster) => {
            const clusterX = centerX + Math.cos(cluster.angle) * cluster.radius;
            const clusterY = centerY + Math.sin(cluster.angle) * cluster.radius;

            return (
              <g key={cluster.id}>
                {/* Attack Path line from Operator to Cluster */}
                <line
                  x1={centerX}
                  y1={centerY}
                  x2={clusterX}
                  y2={clusterY}
                  stroke={cluster.color}
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                  opacity="0.5"
                />

                {/* Subnet Hub Node */}
                <circle
                  cx={clusterX}
                  cy={clusterY}
                  r="24"
                  fill="#0B0F19"
                  stroke={cluster.color}
                  strokeWidth="2"
                  className="filter drop-shadow-[0_0_8px_rgba(6,182,212,0.4)]"
                />
                <circle cx={clusterX} cy={clusterY} r="8" fill={cluster.color} opacity="0.7" />

                {/* Subnet Label Pill */}
                <rect
                  x={clusterX - 85}
                  y={clusterY + 28}
                  width="170"
                  height="22"
                  rx="4"
                  fill="#0A0E17"
                  fillOpacity="0.9"
                  stroke={cluster.color}
                  strokeWidth="1"
                />
                <text
                  x={clusterX}
                  y={clusterY + 43}
                  fill={cluster.color}
                  fontSize="10"
                  fontFamily="monospace"
                  fontWeight="bold"
                  textAnchor="middle"
                >
                  {cluster.name}
                </text>
              </g>
            );
          })}

          {/* Edges from Subnet Hubs to Target Nodes */}
          {nodes.map((node) => {
            const clusterObj = clusters.find((c) => c.id === node.cluster) || clusters[1];
            const clusterX = centerX + Math.cos(clusterObj.angle) * clusterObj.radius;
            const clusterY = centerY + Math.sin(clusterObj.angle) * clusterObj.radius;

            const isRooted = node.status === 'root' || node.status === 'completed';
            const isFoothold = node.status === 'foothold';

            return (
              <line
                key={`edge-${node.id}`}
                x1={clusterX}
                y1={clusterY}
                x2={node.x}
                y2={node.y}
                stroke={isRooted ? '#10B981' : isFoothold ? '#F59E0B' : '#06B6D4'}
                strokeWidth={isRooted ? 2 : 1}
                strokeDasharray={isRooted ? 'none' : '3 3'}
                opacity={isRooted ? 0.8 : 0.35}
              />
            );
          })}

          {/* Target Nodes */}
          {nodes.map((node) => {
            const isRooted = node.status === 'root' || node.status === 'completed';
            const isFoothold = node.status === 'foothold';
            const isSelected = selectedNode?.id === node.id;

            const nodeColor = isRooted ? '#10B981' : isFoothold ? '#F59E0B' : '#06B6D4';
            const displayName = node.name.length > 14 ? `${node.name.slice(0, 13)}…` : node.name;

            return (
              <g
                key={node.id}
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedNode(node);
                  if (soundEnabled) playCyberSound('click');
                }}
                className="cursor-pointer group"
              >
                {/* Selection Ring */}
                {isSelected && (
                  <circle
                    cx={node.x}
                    cy={node.y}
                    r="24"
                    fill="none"
                    stroke="#06B6D4"
                    strokeWidth="2"
                    strokeDasharray="4 2"
                    className="animate-spin-slow pointer-events-none"
                  />
                )}

                {/* Outer Glow Pulse for Rooted */}
                {isRooted && (
                  <circle
                    cx={node.x}
                    cy={node.y}
                    r="19"
                    fill="none"
                    stroke="#10B981"
                    strokeWidth="1.5"
                    opacity="0.4"
                    className="animate-ping pointer-events-none"
                  />
                )}

                {/* Main Node Body */}
                <circle
                  cx={node.x}
                  cy={node.y}
                  r="14"
                  fill="#0B0F19"
                  stroke={nodeColor}
                  strokeWidth={isSelected ? '2.5' : '1.8'}
                  className="transition-transform group-hover:scale-125"
                />

                {/* Node Center Core */}
                <circle cx={node.x} cy={node.y} r="5" fill={nodeColor} className="pointer-events-none" />

                {/* Machine Name & IP Pill */}
                <rect
                  x={node.x - 46}
                  y={node.y + 16}
                  width="92"
                  height="26"
                  rx="4"
                  fill="#0A0E17"
                  fillOpacity="0.88"
                  stroke={isSelected ? '#06B6D4' : 'rgba(6,182,212,0.22)'}
                  strokeWidth={isSelected ? '1.5' : '0.8'}
                  className="pointer-events-none"
                />

                <text
                  x={node.x}
                  y={node.y + 28}
                  fill={isSelected ? '#06B6D4' : '#FFFFFF'}
                  fontSize="9"
                  fontFamily="monospace"
                  fontWeight="bold"
                  textAnchor="middle"
                  className="pointer-events-none select-none"
                >
                  {displayName}
                </text>
                <text
                  x={node.x}
                  y={node.y + 38}
                  fill="#64748B"
                  fontSize="7.5"
                  fontFamily="monospace"
                  textAnchor="middle"
                  className="pointer-events-none select-none"
                >
                  {node.ip}
                </text>

                {/* Tooltip */}
                <title>{`${node.name} (${node.ip}) - ${node.os} [${node.difficulty}]`}</title>
              </g>
            );
          })}

          {/* Central Operator Node (Kali) */}
          <g>
            <circle cx={centerX} cy={centerY} r="65" fill="url(#centerGlow)" />
            <circle
              cx={centerX}
              cy={centerY}
              r="34"
              fill="#080C14"
              stroke="#10B981"
              strokeWidth="2.5"
              className="filter drop-shadow-[0_0_15px_#10B981]"
            />
            <circle cx={centerX} cy={centerY} r="12" fill="#10B981" />
            <rect
              x={centerX - 80}
              y={centerY + 36}
              width="160"
              height="30"
              rx="6"
              fill="#080C14"
              fillOpacity="0.92"
              stroke="#10B981"
              strokeWidth="1"
            />
            <text
              x={centerX}
              y={centerY + 49}
              fill="#10B981"
              fontSize="11"
              fontFamily="monospace"
              fontWeight="bold"
              textAnchor="middle"
            >
              OPERATOR // KALI
            </text>
            <text
              x={centerX}
              y={centerY + 60}
              fill="#06B6D4"
              fontSize="8.5"
              fontFamily="monospace"
              textAnchor="middle"
            >
              10.10.14.x [ATTACK RIG]
            </text>
          </g>
        </svg>
      </div>

      {/* Selected Node Tactical Detail Card (Flyout) */}
      <AnimatePresence>
        {selectedNode && (
          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 20, scale: 0.95 }}
            className="absolute bottom-4 right-4 z-30 w-80 p-4 rounded-xl bg-cyber-card/95 border border-cyber-cyan shadow-2xl backdrop-blur-md space-y-3"
          >
            <div className="flex items-start justify-between gap-2">
              <div className="space-y-1.5">
                <div className="flex items-center gap-1.5 flex-wrap">
                  <PlatformIcon platform={selectedNode.platform} className="w-4 h-4" />
                  <span className="text-xs font-bold text-white tracking-wide">{selectedNode.name}</span>
                  <CategoryBadge machine={selectedNode.machine} size="xs" />
                </div>
                <div>
                  <EditableIpBadge machineId={selectedNode.id} initialIp={selectedNode.ip} size="xs" showLabel />
                </div>
              </div>

              <button
                onClick={() => setSelectedNode(null)}
                className="p-1 rounded text-cyber-muted hover:text-white flex-shrink-0"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-2 text-[10px]">
              <div className="bg-cyber-bg p-2 rounded border border-cyber-border">
                <span className="text-cyber-muted">OS:</span>
                <div className="font-bold text-white mt-0.5">{selectedNode.os}</div>
              </div>
              <div className="bg-cyber-bg p-2 rounded border border-cyber-border">
                <span className="text-cyber-muted">STATUS:</span>
                <div className={`font-bold mt-0.5 uppercase ${
                  selectedNode.status === 'root' || selectedNode.status === 'completed'
                    ? 'text-cyber-emerald'
                    : selectedNode.status === 'foothold'
                    ? 'text-cyber-amber'
                    : 'text-cyber-cyan'
                }`}>
                  {selectedNode.status}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 pt-2 border-t border-cyber-border/70">
              <button
                onClick={() => {
                  setActiveTarget(selectedNode.id);
                  if (soundEnabled) playCyberSound('engage');
                }}
                className="flex-1 py-1.5 px-2 rounded-lg bg-cyber-emerald/20 border border-cyber-emerald text-cyber-emerald hover:bg-cyber-emerald hover:text-black font-bold text-xs transition-all flex items-center justify-center gap-1"
              >
                <Crosshair className="w-3.5 h-3.5" />
                <span>Engage Target</span>
              </button>

              <button
                onClick={() => {
                  setSelectedMachineId(selectedNode.id);
                  if (soundEnabled) playCyberSound('click');
                }}
                className="py-1.5 px-2.5 rounded-lg bg-cyber-bg border border-cyber-border hover:border-cyber-cyan text-cyber-muted hover:text-white text-xs transition-all"
                title="Open Inspection Modal"
              >
                <Maximize2 className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
