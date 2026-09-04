import React from 'react';
import { Globe, Shield, Terminal, Layers, Cpu, Sparkles, Key, AlertTriangle } from 'lucide-react';
import { Machine } from '../../types';
import { classifyMachine } from '../../utils/categoryUtils';

export interface CategoryBadgeProps {
  machine: Machine;
  size?: 'xs' | 'sm';
  className?: string;
  showIcon?: boolean;
}

export const CategoryBadge: React.FC<CategoryBadgeProps> = ({
  machine,
  size = 'xs',
  className = '',
  showIcon = true,
}) => {
  const { primary, badgeColor, isAD, categories } = classifyMachine(machine);

  const getIcon = () => {
    if (isAD) return <Cpu className="w-2.5 h-2.5 text-purple-400" />;
    if (primary.startsWith('Web')) return <Globe className="w-2.5 h-2.5 text-cyan-400" />;
    if (primary.includes('Binary') || primary.includes('BOF')) return <Sparkles className="w-2.5 h-2.5 text-red-400" />;
    if (primary.includes('Linux')) return <Terminal className="w-2.5 h-2.5 text-emerald-400" />;
    if (primary.includes('Windows')) return <Layers className="w-2.5 h-2.5 text-blue-400" />;
    if (primary.includes('Network') || primary.includes('SMB')) return <Key className="w-2.5 h-2.5 text-orange-400" />;
    return <Shield className="w-2.5 h-2.5 text-gray-400" />;
  };

  const sizeClass =
    size === 'xs'
      ? 'text-[9px] px-1.5 py-0.2 rounded'
      : 'text-[10px] px-2 py-0.5 rounded-md';

  return (
    <span
      className={`inline-flex items-center gap-1 font-mono font-bold tracking-tight border uppercase ${badgeColor} ${sizeClass} ${className}`}
      title={`Primary Vector: ${primary} • All Categories: ${categories.join(', ')}`}
    >
      {showIcon && getIcon()}
      <span className="truncate max-w-[110px]">{primary}</span>
    </span>
  );
};
