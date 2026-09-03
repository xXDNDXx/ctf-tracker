import React from 'react';
import logoImg from '../../assets/logo.png';

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
    sm: 'w-7 h-7',
    md: 'w-8 h-8',
    lg: 'w-10 h-10',
    xl: 'w-14 h-14',
  };

  return (
    <div
      className={`relative flex items-center justify-center transition-all duration-200 group-hover:scale-110 ${containerSizeMap[size]} ${
        glow ? 'drop-shadow-[0_0_10px_rgba(56,189,248,0.5)] group-hover:drop-shadow-[0_0_18px_rgba(56,189,248,0.85)]' : ''
      } ${className}`}
      title="SPECTER CTF // OPEN BLUE BOX"
    >
      <img
        src={logoImg}
        alt="Specter CTF Open Blue Box"
        className="w-full h-full object-contain select-none filter transition-all duration-200"
      />
    </div>
  );
};
