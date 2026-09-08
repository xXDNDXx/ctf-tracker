import React, { Suspense, lazy } from 'react';
import { DiagramSpec, DiagramType } from './types';

const MermaidView = lazy(() => import('./renderers/MermaidView').then((m) => ({ default: m.MermaidView })));
const CanvasView = lazy(() => import('./renderers/CanvasView').then((m) => ({ default: m.CanvasView })));
const ExcalidrawView = lazy(() => import('./renderers/ExcalidrawView').then((m) => ({ default: m.ExcalidrawView })));
const KaTeXView = lazy(() => import('./renderers/KaTeXView').then((m) => ({ default: m.KaTeXView })));
const MemoryLayoutView = lazy(() => import('./renderers/MemoryLayoutView').then((m) => ({ default: m.MemoryLayoutView })));

const DiagramFallback = () => (
  <div className="my-2 p-3 rounded-lg bg-cyber-card/60 border border-cyber-border text-center text-[11px] text-cyber-muted font-mono animate-pulse">
    Loading visual telemetry engine...
  </div>
);

interface DiagramRendererProps {
  type?: DiagramType | string;
  raw: string;
  title?: string;
  options?: Record<string, any>;
  onOpenFile?: (path: string) => void;
}

/**
 * Detects diagram type from code fence language identifier
 */
export function detectDiagramType(language: string): DiagramType | null {
  const lang = language.toLowerCase().trim();
  if (lang === 'mermaid') return 'mermaid';
  if (lang === 'canvas' || lang === 'obsidian-canvas') return 'canvas';
  if (lang === 'excalidraw' || lang === 'excalidraw-json') return 'excalidraw';
  if (lang === 'math' || lang === 'latex' || lang === 'katex') return 'katex';
  if (
    lang === 'memory-layout' ||
    lang === 'buffer-overflow' ||
    lang === 'stack-layout' ||
    lang === 'memory'
  ) {
    return 'memory-layout';
  }
  return null;
}

export const DiagramRenderer: React.FC<DiagramRendererProps> = ({
  type,
  raw,
  title,
  options,
  onOpenFile,
}) => {
  const diagramType = (type || 'mermaid').toLowerCase();

  const renderDiagram = () => {
    switch (diagramType) {
      case 'mermaid':
        return <MermaidView chart={raw} title={title} />;

      case 'canvas':
        return <CanvasView data={raw} title={title} onOpenFile={onOpenFile} />;

      case 'excalidraw':
        return <ExcalidrawView content={raw} title={title} />;

      case 'katex':
      case 'math':
      case 'latex':
        return <KaTeXView math={raw} block={true} />;

      case 'memory-layout':
      case 'buffer-overflow':
      case 'stack-layout':
        return <MemoryLayoutView raw={raw} title={title} />;

      default:
        return <MermaidView chart={raw} title={title} />;
    }
  };

  return (
    <Suspense fallback={<DiagramFallback />}>
      {renderDiagram()}
    </Suspense>
  );
};
