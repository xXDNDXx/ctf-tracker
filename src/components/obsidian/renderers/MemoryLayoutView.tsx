import React, { useMemo } from 'react';
import { Cpu, ShieldAlert, CheckCircle2 } from 'lucide-react';

interface MemoryEntry {
  address?: string;
  name: string;
  size?: string;
  value?: string;
  type?: 'buffer' | 'canary' | 'rbp' | 'rip' | 'heap' | 'data';
  isVulnerable?: boolean;
}

interface MemoryLayoutViewProps {
  raw: string;
  title?: string;
}

export const MemoryLayoutView: React.FC<MemoryLayoutViewProps> = ({ raw, title }) => {
  const entries: MemoryEntry[] = useMemo(() => {
    const lines = raw.trim().split(/\r?\n/);
    const parsed: MemoryEntry[] = [];

    for (const line of lines) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith('#') || trimmed.startsWith('//')) continue;

      // Pattern: [0x7fffffff] Name (size) [Value] {type}
      const addrMatch = trimmed.match(/^\[(0x[0-9a-fA-F]+|\w+)\]\s*(.*)/);
      let address = '';
      let rest = trimmed;

      if (addrMatch) {
        address = addrMatch[1];
        rest = addrMatch[2];
      }

      const sizeMatch = rest.match(/\(([^)]+)\)/);
      const size = sizeMatch ? sizeMatch[1] : undefined;
      const cleanRest = rest.replace(/\(([^)]+)\)/, '').trim();

      const valMatch = cleanRest.match(/\[([^\]]+)\]/);
      const value = valMatch ? valMatch[1] : undefined;
      const name = cleanRest.replace(/\[([^\]]+)\]/, '').trim();

      const lowerName = name.toLowerCase();
      let type: MemoryEntry['type'] = 'buffer';
      let isVulnerable = false;

      if (lowerName.includes('rip') || lowerName.includes('ret') || lowerName.includes('return')) {
        type = 'rip';
        isVulnerable = true;
      } else if (lowerName.includes('rbp') || lowerName.includes('ebp')) {
        type = 'rbp';
      } else if (lowerName.includes('canary')) {
        type = 'canary';
      } else if (lowerName.includes('heap')) {
        type = 'heap';
      } else if (lowerName.includes('data')) {
        type = 'data';
      }

      parsed.push({
        address: address || undefined,
        name: name || 'Segment',
        size,
        value,
        type,
        isVulnerable,
      });
    }

    return parsed;
  }, [raw]);

  const getColor = (type?: string) => {
    switch (type) {
      case 'rip':
        return 'border-red-500 bg-red-950/40 text-red-300';
      case 'rbp':
        return 'border-purple-500 bg-purple-950/40 text-purple-300';
      case 'canary':
        return 'border-yellow-500 bg-yellow-950/40 text-yellow-300';
      case 'heap':
        return 'border-blue-500 bg-blue-950/40 text-blue-300';
      default:
        return 'border-emerald-500 bg-emerald-950/30 text-emerald-300';
    }
  };

  return (
    <div className="my-4 rounded-xl border border-cyber-border bg-[#090d18] overflow-hidden">
      <div className="flex items-center justify-between px-3 py-1.5 bg-slate-900/80 border-b border-cyber-border/70 text-xs font-mono">
        <div className="flex items-center gap-2 text-cyber-cyan">
          <Cpu className="w-3.5 h-3.5" />
          <span className="font-bold uppercase">{title || 'Memory / Stack Layout'}</span>
        </div>
        <span className="text-[10px] text-slate-400">High Memory → Low Memory</span>
      </div>

      <div className="p-4 font-mono space-y-1.5">
        {entries.map((entry, idx) => (
          <div
            key={idx}
            className={`flex items-center justify-between p-2.5 rounded-lg border text-xs transition-all ${getColor(
              entry.type
            )}`}
          >
            <div className="flex items-center gap-3">
              {entry.address && (
                <span className="text-slate-400 text-[11px] font-bold shrink-0">
                  {entry.address}
                </span>
              )}
              <span className="font-bold tracking-wide">{entry.name}</span>
              {entry.size && (
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-black/40 border border-slate-700 text-slate-400">
                  {entry.size}
                </span>
              )}
            </div>

            <div className="flex items-center gap-2">
              {entry.value && (
                <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-black/50 text-slate-200 border border-slate-700">
                  {entry.value}
                </span>
              )}
              {entry.isVulnerable ? (
                <span className="flex items-center gap-1 text-[10px] text-red-400 bg-red-950 px-1.5 py-0.5 rounded border border-red-800">
                  <ShieldAlert className="w-3 h-3" />
                  <span>OVERWRITE</span>
                </span>
              ) : (
                <CheckCircle2 className="w-3.5 h-3.5 text-slate-500 opacity-60" />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
