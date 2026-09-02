import React from 'react';
import logoImg from '../../assets/logo.png';

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

  return (
    <div
      className={`relative flex items-center justify-center rounded-lg overflow-hidden border border-[#96794a]/40 bg-[#17140f] transition-all duration-200 group-hover:scale-105 group-hover:border-[#96794a] ${containerSizeMap[size]} ${
        glow ? 'hover:shadow-[0_0_15px_rgba(150,121,74,0.45)]' : ''
      } ${className}`}
    >
      <img
        src={logoImg}
        alt="CTF Tracker Logo"
        className="w-full h-full object-contain p-0.5"
      />
    </div>
  );
};
