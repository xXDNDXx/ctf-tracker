import React, { useMemo } from 'react';
import katex from 'katex';
import 'katex/dist/katex.min.css';

interface KaTeXViewProps {
  math: string;
  block?: boolean;
}

function escapeHtml(str: string): string {
  return str.replace(/[&<>"']/g, (m) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[m] || m));
}

export const KaTeXView: React.FC<KaTeXViewProps> = ({ math, block = false }) => {
  const html = useMemo(() => {
    try {
      return katex.renderToString(math.trim(), {
        displayMode: block,
        throwOnError: false,
        strict: false,
        trust: false,
      });
    } catch (e: any) {
      console.warn('[KaTeXView] Error rendering formula:', e);
      return `<span class="text-red-400 font-mono text-xs">${escapeHtml(math)}</span>`;
    }
  }, [math, block]);

  if (block) {
    return (
      <div
        className="my-3 py-2 px-4 rounded-lg bg-slate-900/60 border border-slate-800 text-center overflow-x-auto text-emerald-300 font-serif"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    );
  }

  return (
    <span
      className="inline-block px-1 text-emerald-300"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};
