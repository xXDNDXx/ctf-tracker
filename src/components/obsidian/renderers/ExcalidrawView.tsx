import React, { useState, useMemo } from 'react';
import { ExcalidrawElement, ExcalidrawScene } from '../types';
import { ZoomIn, ZoomOut, RotateCcw, Maximize2, Minimize2, PenTool, AlertCircle } from 'lucide-react';

interface ExcalidrawViewProps {
  content: string | ExcalidrawScene;
  title?: string;
}

export const ExcalidrawView: React.FC<ExcalidrawViewProps> = ({ content, title }) => {
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 30, y: 30 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Parse scene JSON from either .excalidraw or .excalidraw.md
  const scene: ExcalidrawScene | null = useMemo(() => {
    if (typeof content === 'object') return content;
    try {
      // If it's an .excalidraw.md file, extract the embedded JSON block: ```json ... ``` or %%# Drawing ... %%
      let rawJson = content.trim();
      const codeBlockMatch = rawJson.match(/```json\r?\n([\s\S]*?)\r?\n```/);
      if (codeBlockMatch) {
        rawJson = codeBlockMatch[1];
      } else {
        const commentMatch = rawJson.match(/%%[\s\S]*?```json\r?\n([\s\S]*?)\r?\n```[\s\S]*?%%/);
        if (commentMatch) {
          rawJson = commentMatch[1];
        }
      }
      return JSON.parse(rawJson);
    } catch (err) {
      console.warn('[ExcalidrawView] Failed to parse Excalidraw JSON:', err);
      return null;
    }
  }, [content]);

  const elements: ExcalidrawElement[] = useMemo(() => {
    if (!scene || !Array.isArray(scene.elements)) return [];
    return scene.elements.filter((el) => !el.isDeleted);
  }, [scene]);

  // Compute bounding box for fit view
  const bounds = useMemo(() => {
    if (elements.length === 0) return { minX: 0, minY: 0, width: 800, height: 600 };
    let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
    for (const el of elements) {
      if (el.x < minX) minX = el.x;
      if (el.y < minY) minY = el.y;
      if (el.x + (el.width || 0) > maxX) maxX = el.x + (el.width || 0);
      if (el.y + (el.height || 0) > maxY) maxY = el.y + (el.height || 0);
    }
    return {
      minX,
      minY,
      width: Math.max(maxX - minX, 400),
      height: Math.max(maxY - minY, 300),
    };
  }, [elements]);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStart({ x: e.clientX - pan.x, y: e.clientY - pan.y });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    setPan({ x: e.clientX - dragStart.x, y: e.clientY - dragStart.y });
  };

  const handleMouseUp = () => setIsDragging(false);

  const handleFitView = () => {
    setPan({ x: -bounds.minX + 40, y: -bounds.minY + 40 });
    setZoom(1);
  };

  if (!scene || elements.length === 0) {
    return (
      <div className="my-4 rounded-xl border border-slate-700 bg-slate-900/60 p-4 text-xs font-mono text-slate-400 flex items-center gap-2">
        <AlertCircle className="w-4 h-4 text-cyber-amber" />
        <span>No valid vector drawing elements found in Excalidraw file.</span>
      </div>
    );
  }

  return (
    <div
      className={`relative rounded-xl border border-cyber-border bg-[#0a0f1d] overflow-hidden my-4 select-none ${
        isFullscreen ? 'fixed inset-4 z-[999] shadow-2xl flex flex-col' : 'h-[500px]'
      }`}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-3 py-1.5 bg-slate-900/90 border-b border-cyber-border/70 text-xs z-10">
        <div className="flex items-center gap-2 font-mono text-[11px]">
          <PenTool className="w-3.5 h-3.5 text-pink-400" />
          <span className="font-bold text-pink-300 uppercase">{title || 'Excalidraw Exploit Flow'}</span>
          <span className="text-slate-500 font-mono text-[10px]">({elements.length} elements)</span>
        </div>

        <div className="flex items-center gap-1">
          <button
            onClick={() => setZoom((z) => Math.min(2.5, +(z + 0.15).toFixed(2)))}
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

      {/* SVG Canvas */}
      <div
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        className={`w-full h-full relative overflow-hidden cursor-${isDragging ? 'grabbing' : 'grab'}`}
      >
        <svg
          className="w-full h-full"
          style={{
            transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})`,
            transformOrigin: '0 0',
          }}
        >
          <defs>
            <marker
              id="excalidraw-arrow"
              markerWidth="10"
              markerHeight="8"
              refX="8"
              refY="4"
              orient="auto"
            >
              <polygon points="0 0, 10 4, 0 8" fill="#38bdf8" />
            </marker>
          </defs>

          {elements.map((el) => {
            const stroke = el.strokeColor || '#94a3b8';
            const fill = el.backgroundColor && el.backgroundColor !== 'transparent' ? el.backgroundColor : 'none';
            const width = el.strokeWidth || 2;

            if (el.type === 'rectangle') {
              return (
                <rect
                  key={el.id}
                  x={el.x}
                  y={el.y}
                  width={el.width}
                  height={el.height}
                  rx="6"
                  stroke={stroke}
                  fill={fill}
                  strokeWidth={width}
                  strokeDasharray={el.fillStyle === 'hachure' ? '4 2' : undefined}
                />
              );
            }

            if (el.type === 'ellipse') {
              const rx = Math.abs(el.width / 2);
              const ry = Math.abs(el.height / 2);
              return (
                <ellipse
                  key={el.id}
                  cx={el.x + rx}
                  cy={el.y + ry}
                  rx={rx}
                  ry={ry}
                  stroke={stroke}
                  fill={fill}
                  strokeWidth={width}
                />
              );
            }

            if (el.type === 'arrow' || el.type === 'line') {
              if (el.points && el.points.length > 1) {
                const pathData = el.points
                  .map((p, idx) => `${idx === 0 ? 'M' : 'L'} ${el.x + p[0]} ${el.y + p[1]}`)
                  .join(' ');
                return (
                  <path
                    key={el.id}
                    d={pathData}
                    stroke={stroke}
                    strokeWidth={width}
                    fill="none"
                    markerEnd={el.type === 'arrow' ? 'url(#excalidraw-arrow)' : undefined}
                  />
                );
              }
              return (
                <line
                  key={el.id}
                  x1={el.x}
                  y1={el.y}
                  x2={el.x + el.width}
                  y2={el.y + el.height}
                  stroke={stroke}
                  strokeWidth={width}
                  markerEnd={el.type === 'arrow' ? 'url(#excalidraw-arrow)' : undefined}
                />
              );
            }

            if (el.type === 'text') {
              return (
                <text
                  key={el.id}
                  x={el.x}
                  y={el.y + (el.fontSize || 16)}
                  fill={stroke}
                  fontSize={el.fontSize || 16}
                  fontFamily="monospace"
                >
                  {el.text}
                </text>
              );
            }

            if (el.type === 'freedraw' && el.points && el.points.length > 1) {
              const pointsStr = el.points.map((p) => `${el.x + p[0]},${el.y + p[1]}`).join(' ');
              return (
                <polyline
                  key={el.id}
                  points={pointsStr}
                  stroke={stroke}
                  strokeWidth={width}
                  fill="none"
                  strokeLinecap="round"
                />
              );
            }

            return null;
          })}
        </svg>
      </div>
    </div>
  );
};
