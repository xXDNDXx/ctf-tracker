import React from 'react';

interface CyberLogoProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  glow?: boolean;
}

export const CyberLogo: React.FC<CyberLogoProps> = ({ 
  size = 'md', 
  className = '',
  glow = true 
}) => {
  const containerSizeMap = {
    sm: 'w-7 h-7 text-[11px] rounded-lg',
    md: 'w-8 h-8 text-xs rounded-lg',
    lg: 'w-10 h-10 text-sm rounded-xl',
  };

  return (
    <div
      className={`relative flex items-center justify-center font-mono font-black select-none border border-[#00ff9c]/50 bg-[#071210] text-[#00ff9c] transition-all duration-200 group-hover:scale-105 group-hover:border-[#00ff9c] ${containerSizeMap[size]} ${
        glow ? 'shadow-[0_0_12px_rgba(0,255,156,0.3)] group-hover:shadow-[0_0_18px_rgba(0,255,156,0.55)]' : ''
      } ${className}`}
      title="SPECTER // ROOT TERMINAL"
    >
      <span className="tracking-tighter">&gt;_</span>
    </div>
  );
};
