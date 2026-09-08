import React, { useEffect, useRef, useState, useId, useMemo } from 'react';
import { ZoomIn, ZoomOut, RotateCcw, Maximize2, Minimize2, Copy, Check, AlertCircle } from 'lucide-react';
import { safeCopyToClipboard } from '../../../utils/helpers';
import { sanitizeSvg } from '../../../utils/securityUtils';

interface MermaidViewProps {
  chart: string;
  title?: string;
}

let mermaidPromise: Promise<any> | null = null;
let mermaidInitialized = false;

async function getMermaidInstance() {
  if (!mermaidPromise) {
    mermaidPromise = import('mermaid').then((mod) => mod.default || mod);
  }
  const mermaidInstance = await mermaidPromise;
  if (!mermaidInitialized) {
    mermaidInstance.initialize({
      startOnLoad: false,
      theme: 'dark',
      securityLevel: 'strict',
      fontFamily: 'JetBrains Mono, monospace, ui-monospace',
      themeVariables: {
        darkMode: true,
        background: '#0B0F19',
        primaryColor: '#10b981',
        primaryTextColor: '#f3f4f6',
        primaryBorderColor: '#059669',
        lineColor: '#38bdf8',
        secondaryColor: '#1e293b',
        tertiaryColor: '#0f172a',
        edgeLabelBackground: '#1e293b',
        nodeBorder: '#38bdf8',
        clusterBkg: '#0d1527',
        clusterBorder: '#1e293b',
      },
    });
    mermaidInitialized = true;
  }
  return mermaidInstance;
}

export const MermaidView: React.FC<MermaidViewProps> = ({ chart, title }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const rawId = useId();
  const diagramId = useMemo(
    () => `mermaid-${rawId.replace(/[^a-zA-Z0-9]/g, '')}-${Math.random().toString(36).substring(2, 7)}`,
    [rawId]
  );

  const [svgContent, setSvgContent] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [zoom, setZoom] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    let isMounted = true;

    const renderChart = async () => {
      try {
        setError(null);
        // Clean chart input
        const cleanChart = chart.trim();
        if (!cleanChart) return;

        const mermaidInstance = await getMermaidInstance();
        // Render diagram to SVG string
        const { svg } = await mermaidInstance.render(diagramId, cleanChart);
        if (isMounted) {
          setSvgContent(sanitizeSvg(svg));
        }
      } catch (err: any) {
        if (isMounted) {
          console.warn('[MermaidView] Failed to render diagram:', err);
          setError(err?.message || 'Failed to render Mermaid diagram');
        }
      }
    };

    renderChart();

    return () => {
      isMounted = false;
      // Only clean up temporary elements created directly in document.body
      const tempContainer = document.getElementById(`d${diagramId}`);
      if (tempContainer && tempContainer.parentNode === document.body) {
        tempContainer.remove();
      }
    };
  }, [chart, diagramId]);

  const handleCopy = async () => {
    await safeCopyToClipboard(chart);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleZoomIn = () => setZoom((z) => Math.min(2.5, +(z + 0.2).toFixed(1)));
  const handleZoomOut = () => setZoom((z) => Math.max(0.5, +(z - 0.2).toFixed(1)));
  const handleResetZoom = () => setZoom(1);

  if (error) {
    return (
      <div className="my-4 rounded-xl border border-red-500/30 bg-red-950/20 p-4 font-mono text-xs">
        <div className="flex items-center justify-between text-red-400 font-bold mb-2">
          <div className="flex items-center gap-2">
            <AlertCircle className="w-4 h-4" />
            <span>Mermaid Syntax Error</span>
          </div>
          <button
            onClick={handleCopy}
            className="flex items-center gap-1 text-[11px] text-slate-400 hover:text-white px-2 py-0.5 rounded bg-slate-800"
          >
            {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
            <span>Copy Raw</span>
          </button>
        </div>
        <div className="text-red-300 text-[11px] mb-2">{error}</div>
        <pre className="p-2.5 rounded bg-black/50 text-slate-400 overflow-x-auto text-[11px]">
          {chart}
        </pre>
      </div>
    );
  }

  const content = (
    <div className={`relative group rounded-xl border border-cyber-border bg-[#0B0F19] overflow-hidden my-4 ${
      isFullscreen ? 'fixed inset-4 z-[999] shadow-2xl flex flex-col' : ''
    }`}>
      {/* Diagram Toolbar */}
      <div className="flex items-center justify-between px-3 py-1.5 bg-slate-900/80 border-b border-cyber-border/70 text-xs">
        <div className="flex items-center gap-2 text-cyber-muted font-mono text-[11px]">
          <span className="w-2 h-2 rounded-full bg-cyber-cyan animate-pulse" />
          <span className="font-bold text-cyber-cyan uppercase">{title || 'Mermaid Diagram'}</span>
        </div>

        <div className="flex items-center gap-1">
          <button
            onClick={handleZoomIn}
            className="p-1 rounded text-slate-400 hover:text-white hover:bg-slate-800"
            title="Zoom In"
          >
            <ZoomIn className="w-3.5 h-3.5" />
          </button>
          <span className="text-[10px] text-slate-400 font-mono px-1">{Math.round(zoom * 100)}%</span>
          <button
            onClick={handleZoomOut}
            className="p-1 rounded text-slate-400 hover:text-white hover:bg-slate-800"
            title="Zoom Out"
          >
            <ZoomOut className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={handleResetZoom}
            className="p-1 rounded text-slate-400 hover:text-white hover:bg-slate-800"
            title="Reset Zoom"
          >
            <RotateCcw className="w-3 h-3" />
          </button>
          <div className="h-3 w-px bg-slate-700 mx-1" />
          <button
            onClick={handleCopy}
            className="p-1 rounded text-slate-400 hover:text-white hover:bg-slate-800"
            title="Copy Source"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
          </button>
          <button
            onClick={() => setIsFullscreen(!isFullscreen)}
            className="p-1 rounded text-slate-400 hover:text-white hover:bg-slate-800"
            title={isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
          >
            {isFullscreen ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {/* SVG Canvas Area */}
      <div 
        ref={containerRef}
        className={`p-4 overflow-auto flex items-center justify-center min-h-[180px] ${
          isFullscreen ? 'flex-1' : ''
        }`}
      >
        <div
          style={{ transform: `scale(${zoom})`, transformOrigin: 'center center', transition: 'transform 0.15s ease' }}
          dangerouslySetInnerHTML={{ __html: svgContent }}
          className="mermaid-svg-wrapper flex justify-center [&>svg]:max-w-full [&>svg]:h-auto"
        />
      </div>
    </div>
  );

  return content;
};
