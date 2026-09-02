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
    sm: 'w-7 h-7',
    md: 'w-8 h-8',
    lg: 'w-10 h-10',
  };

  const iconSizeMap = {
    sm: 'w-4 h-4',
    md: 'w-4.5 h-4.5',
    lg: 'w-6 h-6',
  };

  return (
    <div
      className={`relative flex items-center justify-center rounded-lg bg-cyber-card border border-cyber-border transition-all group-hover:border-cyber-emerald ${containerSizeMap[size]} ${
        glow ? 'hover:shadow-[0_0_15px_rgba(16,185,129,0.3)]' : ''
      } ${className}`}
    >
      {/* Sleek Minimalist Terminal / Root Operator Glyph */}
      <svg
        viewBox="0 0 24 24"
        className={`${iconSizeMap[size]} transition-transform duration-200 group-hover:scale-105`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Terminal Prompt Chevron ">" */}
        <path
          d="M4 6L11 12L4 18"
          stroke="#10B981"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Root Cursor Underscore "_" */}
        <path
          d="M13 18H20"
          stroke="#06B6D4"
          strokeWidth="2.4"
          strokeLinecap="round"
        />
        {/* Subtle Top-Right Target Dot */}
        <circle cx="19" cy="6" r="1.5" fill="#10B981" />
      </svg>
    </div>
  );
};
