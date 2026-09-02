import React from 'react';
import logoImg from '../../assets/logo.jpg';

interface CyberLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  glow?: boolean;
}

export const CyberLogo: React.FC<CyberLogoProps> = ({ 
  size = 'md', 
  className = '',
  glow = true 
}) => {
  const containerSizeMap = {
    sm: 'w-7 h-7 rounded-lg',
    md: 'w-8 h-8 rounded-lg',
    lg: 'w-10 h-10 rounded-xl',
    xl: 'w-14 h-14 rounded-2xl',
  };

  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden border border-cyber-emerald/40 bg-black transition-all duration-200 group-hover:scale-105 group-hover:border-cyber-emerald ${containerSizeMap[size]} ${
        glow ? 'shadow-[0_0_12px_rgba(16,185,129,0.35)] group-hover:shadow-[0_0_20px_rgba(16,185,129,0.6)]' : ''
      } ${className}`}
      title="SPECTER CTF // CYBER EMBLEM"
    >
      <img
        src={logoImg}
        alt="Specter CTF Emblem"
        className="w-full h-full object-cover select-none"
      />
    </div>
  );
};
