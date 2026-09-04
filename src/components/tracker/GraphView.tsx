import React, { useState, useRef, useMemo, useEffect, useCallback } from 'react';
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
  Minimize2,
  Share2,
  Radio,
  Server,
  Compass
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

interface ClusterDef {
  id: string;
  name: string;
  angle: number;
  radius: number;
  color: string;
}

export const GraphView: React.FC<GraphViewProps> = ({ filteredMachines }) => {
  const navigate = useNavigate();
  const { setActiveTarget, setSelectedMachineId, soundEnabled } = useCtfStore();

  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [selectedNode, setSelectedNode] = useState<GraphNode | null>(null);
  const [hoveredNodeId, setHoveredNodeId] = useState<string | null>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Touch tracking
  const touchStartRef = useRef<{ x: number; y: number; dist: number }>({ x: 0, y: 0, dist: 0 });

  // Center coordinate of canvas
  const centerX = 800;
  const centerY = 600;

  // 1. Dynamic Intelligent Subnet Clustering:
  // Distributes nodes evenly across tactical subnets based on the active dataset
  const { clusters, nodes } = useMemo(() => {
    // Limit to 48 nodes for peak 120 FPS performance
    const sample = filteredMachines.slice(0, 48);

    // Analyze machine distributions
    const hasOnlyWeb = sample.every(m => classifyMachine(m).primary.startsWith('Web'));
    const hasOnlyAd = sample.every(m => classifyMachine(m).isAD || m.os === 'Active Directory');

    // Base cluster templates
    type RawCluster = { id: string; name: string; color: string; matcher: (m: Machine) => boolean };

    let clusterTemplates: RawCluster[] = [];

    if (hasOnlyWeb) {
      // Specialized Web Archetype Subnets when filtered by ONLY WEB
      clusterTemplates = [
        { id: 'web-sqli', name: 'DMZ [SQLi & Databases]', color: '#38BDF8', matcher: (m) => classifyMachine(m).categories.includes('SQLi') },
        { id: 'web-rce', name: 'DMZ [Command Exec / RCE]', color: '#EF4444', matcher: (m) => classifyMachine(m).categories.includes('RCE') },
        { id: 'web-lfi', name: 'DMZ [LFI & File Inclusion]', color: '#F59E0B', matcher: (m) => classifyMachine(m).categories.includes('LFI') || classifyMachine(m).categories.includes('SSRF') },
        { id: 'web-htb-modern', name: '10.10.11.x [Modern HTB Web]', color: '#06B6D4', matcher: (m) => m.platform === 'HTB' && (m.ip.startsWith('10.10.11.') || !m.ip.startsWith('10.10.10.')) },
        { id: 'web-htb-legacy', name: '10.10.10.x [Legacy HTB Web]', color: '#10B981', matcher: (m) => m.platform === 'HTB' && m.ip.startsWith('10.10.10.') },
        { id: 'web-thm', name: '10.10.x.x [THM Web Labs]', color: '#A855F7', matcher: (m) => m.platform === 'THM' },
      ];
    } else if (hasOnlyAd) {
      // Specialized Active Directory Subnets when filtered by ONLY AD
      clusterTemplates = [
        { id: 'ad-dc', name: 'DC01.CORP [Domain Controllers]', color: '#A855F7', matcher: (m) => m.name.toLowerCase().includes('dc') || m.difficulty === 'Hard' || m.difficulty === 'Insane' },
        { id: 'ad-kerberos', name: 'AUTH [Kerberoast & AS-REP]', color: '#EF4444', matcher: (m) => classifyMachine(m).categories.includes('Active Directory') && (m.tags.some(t => t.toLowerCase().includes('roast') || t.toLowerCase().includes('kerberos'))) },
        { id: 'ad-pivots', name: '172.16.x.x [Internal Forests]', color: '#F59E0B', matcher: (m) => m.ip.startsWith('172.') || m.tags.some(t => t.toLowerCase().includes('pivot')) },
        { id: 'ad-htb', name: '10.10.x.x [HTB AD Domains]', color: '#06B6D4', matcher: (m) => m.platform === 'HTB' },
        { id: 'ad-thm', name: '10.10.x.x [THM AD Labs]', color: '#10B981', matcher: (m) => m.platform === 'THM' },
      ];
    } else {
      // General CTF Network Attack Topology
      clusterTemplates = [
        { id: 'htb-early', name: '10.10.10.x [HTB Legacy]', color: '#10B981', matcher: (m) => m.platform === 'HTB' && (m.ip.startsWith('10.10.10.') || m.difficulty === 'Easy') },
        { id: 'web-perimeter', name: 'DMZ [Web Surface]', color: '#38BDF8', matcher: (m) => classifyMachine(m).primary.startsWith('Web') },
        { id: 'htb-modern', name: '10.10.11.x [HTB Seasons]', color: '#06B6D4', matcher: (m) => m.platform === 'HTB' },
        { id: 'thm-network', name: '10.10.x.x [THM Labs]', color: '#EF4444', matcher: (m) => m.platform === 'THM' },
        { id: 'ad-forest', name: 'CORP.LOCAL [Active Directory]', color: '#A855F7', matcher: (m) => m.os === 'Active Directory' || classifyMachine(m).isAD },
        { id: 'internal-lab', name: '192.168.x.x [Internal Pivots]', color: '#F59E0B', matcher: (m) => m.platform === 'VulnHub' || m.isCustom || m.ip.startsWith('192.168.') },
      ];
    }

    // Partition machines into candidate buckets
    const assignedMachines = new Set<string>();
    const bucketMap: Record<string, Machine[]> = {};
    clusterTemplates.forEach(ct => { bucketMap[ct.id] = []; });

    // Pass 1: Strict matching
    sample.forEach(m => {
      for (const ct of clusterTemplates) {
        if (ct.matcher(m)) {
          bucketMap[ct.id].push(m);
          assignedMachines.add(m.id);
          break;
        }
      }
    });

    // Pass 2: Unmatched fallback distribution to smallest bucket
    sample.forEach(m => {
      if (!assignedMachines.has(m.id)) {
        let minBucket = clusterTemplates[0].id;
        let minSize = bucketMap[minBucket]?.length || 0;
        for (const ct of clusterTemplates) {
          const sz = bucketMap[ct.id]?.length || 0;
          if (sz < minSize) {
            minSize = sz;
            minBucket = ct.id;
          }
        }
        bucketMap[minBucket].push(m);
        assignedMachines.add(m.id);
      }
    });

    // Only keep clusters that actually have nodes
    const activeClusterTemplates = clusterTemplates.filter(ct => (bucketMap[ct.id] || []).length > 0);
    const activeCount = Math.max(1, activeClusterTemplates.length);

    // Compute equidistant angles around 360 degrees
    // Start at -PI/2 (top) and step around evenly
    const activeClusters: ClusterDef[] = activeClusterTemplates.map((ct, idx) => {
      const angle = -Math.PI / 2 + (idx * 2 * Math.PI) / activeCount;
      return {
        id: ct.id,
        name: ct.name,
        angle,
        radius: 350,
        color: ct.color,
      };
    });

    // Multi-tier concentric fanning parameters
    const tiers = [
      { cap: 4, dist: 110, arc: Math.PI * 0.44 },
      { cap: 6, dist: 190, arc: Math.PI * 0.58 },
      { cap: 8, dist: 270, arc: Math.PI * 0.70 },
      { cap: 10, dist: 350, arc: Math.PI * 0.82 },
    ];

    const initialNodes: GraphNode[] = [];

    activeClusters.forEach(cluster => {
      const machinesInCluster = bucketMap[cluster.id] || [];
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

    // 2. 50-iteration Elliptical Bounding-Box Force Relaxation Pass
    // Label pill is 92px wide by 26px high.
    // Elliptical norm clearance: rx = 96px, ry = 52px ensures ZERO label overlapping!
    const RX = 96.0;
    const RY = 52.0;
    const MIN_HUB_DIST = 64.0;
    const MIN_OP_DIST = 120.0;

    for (let iter = 0; iter < 50; iter++) {
      // A. Node-to-node elliptical repulsion
      for (let i = 0; i < initialNodes.length; i++) {
        for (let j = i + 1; j < initialNodes.length; j++) {
          const dx = initialNodes[j].x - initialNodes[i].x;
          const dy = initialNodes[j].y - initialNodes[i].y;
          const normDist = Math.hypot(dx / RX, dy / RY);
          if (normDist < 1.0 && normDist > 0.001) {
            const overlap = (1.0 - normDist) * 0.5;
            const nx = (dx / RX) / normDist;
            const ny = (dy / RY) / normDist;
            initialNodes[i].x -= nx * RX * overlap;
            initialNodes[i].y -= ny * RY * overlap;
            initialNodes[j].x += nx * RX * overlap;
            initialNodes[j].y += ny * RY * overlap;
          }
        }
      }

      // B. Subnet hub and central rig clearance
      for (const node of initialNodes) {
        for (const cluster of activeClusters) {
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

        // Central Kali rig clearance
        const opDx = node.x - centerX;
        const opDy = node.y - centerY;
        const opDist = Math.hypot(opDx, opDy);
        if (opDist < MIN_OP_DIST && opDist > 0.001) {
          const overlap = MIN_OP_DIST - opDist;
          node.x += (opDx / opDist) * overlap;
          node.y += (opDy / opDist) * overlap;
        }

        // Clamp inside canvas boundary with safety padding
        node.x = Math.max(70, Math.min(1530, node.x));
        node.y = Math.max(70, Math.min(1130, node.y));
      }
    }

    return { clusters: activeClusters, nodes: initialNodes };
  }, [filteredMachines]);

  // Panning Engine (Works on background, canvas, and empty SVG space)
  const handleMouseDown = (e: React.MouseEvent) => {
    // Only block dragging if clicking directly on a node group, button, or input
    const target = e.target as HTMLElement | SVGElement;
    if (target.closest('[data-node-interactive]') || target.closest('button') || target.closest('input')) {
      return;
    }
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

  // Native Non-Passive Wheel Listener for Smooth Zoom without console warnings
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      const zoomFactor = e.deltaY < 0 ? 1.12 : 0.89;
      setScale((prev) => Math.min(Math.max(prev * zoomFactor, 0.4), 2.5));
    };
    el.addEventListener('wheel', onWheel, { passive: false });
    return () => el.removeEventListener('wheel', onWheel);
  }, []);

  // Touch handlers for mobile / tablet gestures
  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 1) {
      setIsDragging(true);
      setDragStart({ x: e.touches[0].clientX - pan.x, y: e.touches[0].clientY - pan.y });
    } else if (e.touches.length === 2) {
      const dx = e.touches[0].clientX - e.touches[1].clientX;
      const dy = e.touches[0].clientY - e.touches[1].clientY;
      touchStartRef.current.dist = Math.hypot(dx, dy);
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length === 1 && isDragging) {
      setPan({
        x: e.touches[0].clientX - dragStart.x,
        y: e.touches[0].clientY - dragStart.y,
      });
    } else if (e.touches.length === 2 && touchStartRef.current.dist > 0) {
      const dx = e.touches[0].clientX - e.touches[1].clientX;
      const dy = e.touches[0].clientY - e.touches[1].clientY;
      const newDist = Math.hypot(dx, dy);
      const factor = newDist / touchStartRef.current.dist;
      setScale((prev) => Math.min(Math.max(prev * factor, 0.4), 2.5));
      touchStartRef.current.dist = newDist;
    }
  };

  const handleTouchEnd = () => setIsDragging(false);

  const handleZoom = (delta: number) => {
    setScale((prev) => Math.min(Math.max(prev + delta, 0.4), 2.5));
  };

  const handleResetView = () => {
    setScale(1);
    setPan({ x: 0, y: 0 });
    setSelectedNode(null);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedNode(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Double click canvas to reset view
  const handleDoubleClick = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement | SVGElement;
    if (!target.closest('[data-node-interactive]')) {
      handleResetView();
    }
  };

  return (
    <div 
      ref={containerRef}
      className={`relative w-full rounded-2xl border border-cyber-border bg-cyber-card/90 overflow-hidden font-mono shadow-2xl select-none transition-all duration-300 ${
        isFullscreen ? 'fixed inset-0 z-50 rounded-none h-screen' : 'h-[720px]'
      }`}
    >
      
      {/* Top HUD Controls & Legend */}
      <div className="absolute top-4 left-4 z-20 flex flex-wrap items-center gap-2.5 pointer-events-auto">
        <div className="px-3 py-1.5 rounded-xl bg-cyber-bg/90 border border-cyber-border shadow-md backdrop-blur-md flex items-center gap-2">
          <Share2 className="w-4 h-4 text-cyber-cyan" />
          <span className="text-xs font-bold text-white uppercase tracking-wider">
            BLOODHOUND // NETWORK ATTACK GRAPH
          </span>
          <span className="text-[10px] text-cyber-cyan font-bold px-2 py-0.5 rounded bg-cyber-cyan/10 border border-cyber-cyan/30">
            {nodes.length} NODES
          </span>
          <span className="text-[10px] text-purple-400 font-bold px-2 py-0.5 rounded bg-purple-500/10 border border-purple-500/30">
            {clusters.length} SUBNETS
          </span>
        </div>

        {/* Legend */}
        <div className="hidden lg:flex items-center gap-3 px-3 py-1.5 rounded-xl bg-cyber-bg/90 border border-cyber-border shadow-md backdrop-blur-md text-[10px]">
          <span className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-cyber-emerald shadow-[0_0_8px_#10B981]" />
            <span className="text-cyber-emerald font-bold">Root / Pwned</span>
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-cyber-amber shadow-[0_0_8px_#F59E0B]" />
            <span className="text-cyber-amber font-bold">Foothold</span>
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-cyber-cyan shadow-[0_0_8px_#06B6D4]" />
            <span className="text-cyber-muted">Scoped / Standby</span>
          </span>
        </div>
      </div>

      {/* Floating Canvas Navigation Toolbar */}
      <div className="absolute top-4 right-4 z-20 flex items-center gap-1.5 bg-cyber-bg/90 border border-cyber-border p-1 rounded-xl shadow-lg backdrop-blur-md">
        <span className="text-[10px] font-bold text-cyber-muted px-2 select-none">
          {Math.round(scale * 100)}%
        </span>
        <button
          onClick={() => handleZoom(0.18)}
          className="p-2 rounded-lg hover:bg-cyber-card text-cyber-muted hover:text-white transition-colors"
          title="Zoom In (or Wheel Up)"
        >
          <ZoomIn className="w-4 h-4" />
        </button>
        <button
          onClick={() => handleZoom(-0.18)}
          className="p-2 rounded-lg hover:bg-cyber-card text-cyber-muted hover:text-white transition-colors"
          title="Zoom Out (or Wheel Down)"
        >
          <ZoomOut className="w-4 h-4" />
        </button>
        <button
          onClick={handleResetView}
          className="p-2 rounded-lg hover:bg-cyber-card text-cyber-muted hover:text-white transition-colors"
          title="Center / Reset View"
        >
          <RotateCcw className="w-4 h-4" />
        </button>
        <button
          onClick={() => setIsFullscreen(!isFullscreen)}
          className={`p-2 rounded-lg transition-colors ${
            isFullscreen ? 'bg-cyber-cyan text-black font-bold' : 'hover:bg-cyber-card text-cyber-muted hover:text-white'
          }`}
          title={isFullscreen ? 'Exit Fullscreen' : 'Fullscreen Attack Topology'}
        >
          {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
        </button>
      </div>

      {/* Interactive SVG Canvas */}
      <div
        id="graph-canvas"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onDoubleClick={handleDoubleClick}
        className={`w-full h-full overflow-hidden ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
      >
        <svg
          className="w-full h-full pointer-events-auto"
          viewBox="0 0 1600 1200"
          style={{
            transform: `translate(${pan.x}px, ${pan.y}px) scale(${scale})`,
            transformOrigin: 'center center',
            transition: isDragging ? 'none' : 'transform 0.08s ease-out',
          }}
        >
          <defs>
            {/* Grid Pattern */}
            <pattern id="graph-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#06B6D4" strokeWidth="0.5" opacity="0.08" />
            </pattern>

            {/* Glowing Kali Core */}
            <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#10B981" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#10B981" stopOpacity="0" />
            </radialGradient>

            {/* Subnet Cluster Hub Glow */}
            <radialGradient id="clusterGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#06B6D4" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Background Grid */}
          <rect width="1600" height="1200" fill="url(#graph-grid)" className="pointer-events-none" />

          {/* Subnet Cluster Hubs & Attack Edges */}
          {clusters.map((cluster) => {
            const clusterX = centerX + Math.cos(cluster.angle) * cluster.radius;
            const clusterY = centerY + Math.sin(cluster.angle) * cluster.radius;
            const isSubnetHovered = hoveredNodeId && nodes.some(n => n.id === hoveredNodeId && n.cluster === cluster.id);

            return (
              <g key={cluster.id} className="transition-opacity">
                {/* Attack Path line from Operator to Subnet */}
                <line
                  x1={centerX}
                  y1={centerY}
                  x2={clusterX}
                  y2={clusterY}
                  stroke={cluster.color}
                  strokeWidth={isSubnetHovered ? '2.5' : '1.5'}
                  strokeDasharray="5 5"
                  opacity={isSubnetHovered ? '0.9' : '0.45'}
                />

                {/* Subnet Hub Outer Glow */}
                <circle cx={clusterX} cy={clusterY} r="42" fill="url(#clusterGlow)" opacity="0.6" className="pointer-events-none" />

                {/* Subnet Hub Node */}
                <circle
                  cx={clusterX}
                  cy={clusterY}
                  r="24"
                  fill="#0B0F19"
                  stroke={cluster.color}
                  strokeWidth="2.2"
                  className="filter drop-shadow-[0_0_10px_rgba(6,182,212,0.4)]"
                />
                <circle cx={clusterX} cy={clusterY} r="9" fill={cluster.color} opacity="0.8" className="pointer-events-none" />

                {/* Subnet Label Pill */}
                <rect
                  x={clusterX - 90}
                  y={clusterY + 28}
                  width="180"
                  height="22"
                  rx="4"
                  fill="#0A0E17"
                  fillOpacity="0.94"
                  stroke={cluster.color}
                  strokeWidth="1.2"
                  className="pointer-events-none"
                />
                <text
                  x={clusterX}
                  y={clusterY + 43}
                  fill={cluster.color}
                  fontSize="10"
                  fontFamily="monospace"
                  fontWeight="bold"
                  textAnchor="middle"
                  className="pointer-events-none select-none"
                >
                  {cluster.name}
                </text>
              </g>
            );
          })}

          {/* Edges from Subnet Hubs to Target Nodes */}
          {nodes.map((node) => {
            const clusterObj = clusters.find((c) => c.id === node.cluster) || clusters[0];
            const clusterX = centerX + Math.cos(clusterObj.angle) * clusterObj.radius;
            const clusterY = centerY + Math.sin(clusterObj.angle) * clusterObj.radius;

            const isRooted = node.status === 'root' || node.status === 'completed';
            const isFoothold = node.status === 'foothold';
            const isSelected = selectedNode?.id === node.id;
            const isHovered = hoveredNodeId === node.id;

            return (
              <line
                key={`edge-${node.id}`}
                x1={clusterX}
                y1={clusterY}
                x2={node.x}
                y2={node.y}
                stroke={isSelected ? '#06B6D4' : isRooted ? '#10B981' : isFoothold ? '#F59E0B' : '#06B6D4'}
                strokeWidth={isSelected ? 2.5 : isHovered ? 2 : isRooted ? 1.8 : 1}
                strokeDasharray={isSelected || isRooted ? 'none' : '3 3'}
                opacity={isSelected ? 1 : isHovered ? 0.9 : isRooted ? 0.75 : 0.35}
              />
            );
          })}

          {/* Target Nodes */}
          {nodes.map((node) => {
            const isRooted = node.status === 'root' || node.status === 'completed';
            const isFoothold = node.status === 'foothold';
            const isSelected = selectedNode?.id === node.id;
            const isHovered = hoveredNodeId === node.id;

            const nodeColor = isRooted ? '#10B981' : isFoothold ? '#F59E0B' : '#06B6D4';
            const displayName = node.name.length > 13 ? `${node.name.slice(0, 12)}…` : node.name;

            return (
              <g
                key={node.id}
                data-node-interactive="true"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedNode(node);
                  if (soundEnabled) playCyberSound('click');
                }}
                onMouseEnter={() => setHoveredNodeId(node.id)}
                onMouseLeave={() => setHoveredNodeId(null)}
                className="cursor-pointer group"
              >
                {/* Selection Targeting Reticle */}
                {isSelected && (
                  <>
                    <circle
                      cx={node.x}
                      cy={node.y}
                      r="26"
                      fill="none"
                      stroke="#06B6D4"
                      strokeWidth="2"
                      strokeDasharray="6 3"
                      className="animate-spin-slow pointer-events-none"
                    />
                    <circle
                      cx={node.x}
                      cy={node.y}
                      r="32"
                      fill="none"
                      stroke="#06B6D4"
                      strokeWidth="0.8"
                      opacity="0.4"
                      className="pointer-events-none"
                    />
                  </>
                )}

                {/* Outer Ping Glow for Rooted */}
                {isRooted && (
                  <circle
                    cx={node.x}
                    cy={node.y}
                    r="20"
                    fill="none"
                    stroke="#10B981"
                    strokeWidth="1.5"
                    opacity="0.4"
                    className="animate-ping pointer-events-none"
                  />
                )}

                {/* Invisible Stable Hit Target */}
                <circle cx={node.x} cy={node.y} r="22" fill="transparent" className="cursor-pointer" />

                {/* Node Body Circle */}
                <circle
                  cx={node.x}
                  cy={node.y}
                  r="14"
                  fill="#0B0F19"
                  stroke={isSelected ? '#06B6D4' : isHovered ? '#FFFFFF' : nodeColor}
                  strokeWidth={isSelected ? '3' : isHovered ? '2.5' : '1.8'}
                  className="filter drop-shadow-[0_0_6px_rgba(0,0,0,0.8)] pointer-events-none"
                />

                {/* Node Center Core */}
                <circle
                  cx={node.x}
                  cy={node.y}
                  r="5"
                  fill={isSelected ? '#06B6D4' : nodeColor}
                  className="pointer-events-none"
                />

                {/* Anti-Collision Label Badge Pill (92x26) */}
                <rect
                  x={node.x - 46}
                  y={node.y + 16}
                  width="92"
                  height="26"
                  rx="5"
                  fill="#080C14"
                  fillOpacity="0.94"
                  stroke={isSelected ? '#06B6D4' : isHovered ? '#FFFFFF' : 'rgba(6,182,212,0.28)'}
                  strokeWidth={isSelected ? '1.8' : isHovered ? '1.2' : '0.8'}
                  className="pointer-events-none"
                />

                {/* Target Name */}
                <text
                  x={node.x}
                  y={node.y + 28}
                  fill={isSelected ? '#06B6D4' : isHovered ? '#38BDF8' : '#FFFFFF'}
                  fontSize="9.5"
                  fontFamily="monospace"
                  fontWeight="bold"
                  textAnchor="middle"
                  className="pointer-events-none select-none"
                >
                  {displayName}
                </text>

                {/* Target IP */}
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

                {/* Native Browser Tooltip */}
                <title>{`${node.name} (${node.ip}) · ${node.os} · ${node.difficulty}`}</title>
              </g>
            );
          })}

          {/* Central Operator Node (Kali Attack Rig) */}
          <g className="pointer-events-none">
            <circle cx={centerX} cy={centerY} r="70" fill="url(#centerGlow)" />
            <circle
              cx={centerX}
              cy={centerY}
              r="34"
              fill="#080C14"
              stroke="#10B981"
              strokeWidth="2.8"
              className="filter drop-shadow-[0_0_16px_#10B981]"
            />
            <circle cx={centerX} cy={centerY} r="12" fill="#10B981" />
            <rect
              x={centerX - 85}
              y={centerY + 36}
              width="170"
              height="30"
              rx="6"
              fill="#080C14"
              fillOpacity="0.95"
              stroke="#10B981"
              strokeWidth="1.2"
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

      {/* Selected Node Tactical Detail Flyout Card */}
      <AnimatePresence>
        {selectedNode && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.16 }}
            className="absolute bottom-4 right-4 z-30 w-80 p-4 rounded-xl bg-cyber-card/95 border border-cyber-cyan shadow-2xl backdrop-blur-md space-y-3 pointer-events-auto"
          >
            <div className="flex items-start justify-between gap-2">
              <div className="space-y-1.5">
                <div className="flex items-center gap-1.5 flex-wrap">
                  <PlatformIcon platform={selectedNode.platform} className="w-4 h-4" />
                  <span className="text-sm font-bold text-white tracking-wide">{selectedNode.name}</span>
                  <CategoryBadge machine={selectedNode.machine} size="xs" />
                </div>
                <div>
                  <EditableIpBadge machineId={selectedNode.id} initialIp={selectedNode.ip} size="xs" showLabel />
                </div>
              </div>

              <button
                data-testid="flyout-close-btn"
                onClick={() => setSelectedNode(null)}
                className="p-1 rounded text-cyber-muted hover:text-white flex-shrink-0"
                title="Dismiss Details"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-2 text-[10px]">
              <div className="bg-cyber-bg p-2 rounded border border-cyber-border">
                <span className="text-cyber-muted uppercase font-bold">OS / System:</span>
                <div className="font-bold text-white mt-0.5 truncate">{selectedNode.os}</div>
              </div>
              <div className="bg-cyber-bg p-2 rounded border border-cyber-border">
                <span className="text-cyber-muted uppercase font-bold">Status:</span>
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
                className="flex-1 py-1.5 px-3 rounded-lg bg-cyber-emerald/20 border border-cyber-emerald text-cyber-emerald hover:bg-cyber-emerald hover:text-black font-bold text-xs transition-all flex items-center justify-center gap-1.5 shadow-glow-emerald/20"
              >
                <Crosshair className="w-3.5 h-3.5" />
                <span>Engage Target</span>
              </button>

              <button
                onClick={() => {
                  setSelectedMachineId(selectedNode.id);
                  if (soundEnabled) playCyberSound('click');
                }}
                className="py-1.5 px-3 rounded-lg bg-cyber-bg border border-cyber-border hover:border-cyber-cyan text-cyber-muted hover:text-white text-xs transition-all"
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
