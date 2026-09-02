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
  const centerX = 600;
  const centerY = 450;

  // Clusters definition
  const clusters = [
    { id: 'htb-early', name: '10.10.10.x [HTB Legacy]', angle: -Math.PI * 0.75, radius: 240, color: '#10B981' },
    { id: 'htb-modern', name: '10.10.11.x [HTB Seasons]', angle: -Math.PI * 0.25, radius: 240, color: '#06B6D4' },
    { id: 'ad-forest', name: 'CORP.LOCAL [Active Directory]', angle: Math.PI * 0.5, radius: 270, color: '#A855F7' },
    { id: 'thm-network', name: '10.10.x.x [THM Labs]', angle: Math.PI * 0.15, radius: 240, color: '#EF4444' },
    { id: 'internal-lab', name: '192.168.x.x [Internal Pivots]', angle: Math.PI * 0.85, radius: 240, color: '#F59E0B' },
  ];

  // Map machines to graph nodes in an aesthetic circular topology
  const nodes = useMemo(() => {
    // Limit to 50 nodes for peak 120 FPS animation
    const sample = filteredMachines.slice(0, 48);

    return sample.map((m, idx) => {
      let clusterId = 'htb-modern';
      if (m.os === 'Active Directory' || m.tags.includes('active directory') || m.tags.includes('kerberos')) {
        clusterId = 'ad-forest';
      } else if (m.platform === 'THM') {
        clusterId = 'thm-network';
      } else if (m.platform === 'VulnHub') {
        clusterId = 'internal-lab';
      } else if (m.ip.startsWith('10.10.10.')) {
        clusterId = 'htb-early';
      }

      const clusterObj = clusters.find((c) => c.id === clusterId) || clusters[1];
      const clusterBaseX = centerX + Math.cos(clusterObj.angle) * clusterObj.radius;
      const clusterBaseY = centerY + Math.sin(clusterObj.angle) * clusterObj.radius;

      // Spread nodes around their cluster center
      const nodeAngle = (idx * 0.8) % (2 * Math.PI);
      const nodeDist = 55 + (idx % 3) * 35;
      const x = clusterBaseX + Math.cos(nodeAngle) * nodeDist;
      const y = clusterBaseY + Math.sin(nodeAngle) * nodeDist;

      return {
        id: m.id,
        name: m.name,
        ip: m.ip,
        os: m.os,
        platform: m.platform,
        difficulty: m.difficulty,
        status: m.status,
        cluster: clusterId,
        x,
        y,
      };
    });
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
          viewBox="0 0 1200 900"
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
          <rect width="1200" height="900" fill="url(#graph-grid)" />

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

                {/* Subnet Label */}
                <text
                  x={clusterX}
                  y={clusterY + 38}
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
                    className="animate-spin-slow"
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
                    className="animate-ping"
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
                <circle cx={node.x} cy={node.y} r="5" fill={nodeColor} />

                {/* Machine Name & IP */}
                <text
                  x={node.x}
                  y={node.y + 24}
                  fill={isSelected ? '#06B6D4' : '#FFFFFF'}
                  fontSize="10"
                  fontFamily="monospace"
                  fontWeight="bold"
                  textAnchor="middle"
                >
                  {node.name}
                </text>
                <text
                  x={node.x}
                  y={node.y + 34}
                  fill="#64748B"
                  fontSize="8"
                  fontFamily="monospace"
                  textAnchor="middle"
                >
                  {node.ip}
                </text>
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
            <text
              x={centerX}
              y={centerY + 48}
              fill="#10B981"
              fontSize="12"
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
              fontSize="9"
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
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center gap-1.5 mb-1">
                  <PlatformIcon platform={selectedNode.platform} className="w-4 h-4" />
                  <span className="text-xs font-bold text-white tracking-wide">{selectedNode.name}</span>
                </div>
                <span className="text-[11px] text-cyber-cyan font-mono">{selectedNode.ip}</span>
              </div>

              <button
                onClick={() => setSelectedNode(null)}
                className="p-1 rounded text-cyber-muted hover:text-white"
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
