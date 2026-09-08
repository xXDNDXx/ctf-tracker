import React from 'react';
import { Bug, ExternalLink } from 'lucide-react';
import { getCveNvdUrl } from '../../utils/cveUtils';
import { useCtfStore } from '../../store/useCtfStore';

interface CveBadgeProps {
  cve: string;
  size?: 'xs' | 'sm' | 'md';
  clickableSearch?: boolean;
  showExternalLink?: boolean;
}

export const CveBadge: React.FC<CveBadgeProps> = ({
  cve,
  size = 'sm',
  clickableSearch = true,
  showExternalLink = false,
}) => {
  const setFilters = useCtfStore((s) => s.setFilters);

  const handleClick = (e: React.MouseEvent) => {
    if (clickableSearch) {
      e.stopPropagation();
      setFilters({ searchQuery: cve });
    }
  };

  const isCriticalYear = cve.startsWith('CVE-2024') || cve.startsWith('CVE-2023');

  const sizeClasses =
    size === 'xs'
      ? 'px-1 py-0.2 text-[8.5px]'
      : size === 'sm'
      ? 'px-1.5 py-0.2 text-[9px]'
      : 'px-2 py-0.5 text-[10px]';

  const iconClasses =
    size === 'xs' ? 'w-2 h-2' : size === 'sm' ? 'w-2.5 h-2.5' : 'w-3 h-3';

  return (
    <span
      onClick={handleClick}
      title={`${cve} - Click to filter targets by this CVE`}
      className={`inline-flex items-center gap-1 font-mono font-bold rounded border transition-all cursor-pointer select-none group ${sizeClasses} ${
        isCriticalYear
          ? 'bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/30 hover:bg-rose-500/20'
          : 'bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-500/30 hover:bg-amber-500/20'
      }`}
    >
      <Bug className={`${iconClasses} opacity-80 group-hover:scale-110 transition-transform`} />
      <span>{cve}</span>
      {showExternalLink && (
        <a
          href={getCveNvdUrl(cve)}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="text-cyber-muted hover:text-white ml-0.5 opacity-60 hover:opacity-100 transition-opacity"
          title={`View ${cve} on National Vulnerability Database (NVD)`}
        >
          <ExternalLink className={iconClasses} />
        </a>
      )}
    </span>
  );
};
