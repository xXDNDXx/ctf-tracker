import React, { useId } from 'react';
import { useTheme } from '../../hooks/useTheme';
import { playCyberSound } from '../../utils/helpers';

export interface ThemeToggleProps {
  size?: 'sm' | 'md' | 'lg';
  showLabel?: boolean;
  className?: string;
  soundEnabled?: boolean;
  onToggle?: (isDark: boolean, event: React.MouseEvent | React.KeyboardEvent) => void;
  ariaLabel?: string;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({
  size = 'md',
  showLabel = false,
  className = '',
  soundEnabled = true,
  onToggle,
  ariaLabel = 'Toggle dark and light mode',
}) => {
  const { isDark, toggleTheme, prefersReducedMotion } = useTheme();
  const idPrefix = useId();

  // Snappy dimension metrics
  const dimensions = {
    sm: {
      width: 56,
      height: 28,
      knobSize: 22,
      padding: 3,
      travel: 28,
      iconSize: 18,
    },
    md: {
      width: 68,
      height: 34,
      knobSize: 28,
      padding: 3,
      travel: 34,
      iconSize: 24,
    },
    lg: {
      width: 84,
      height: 42,
      knobSize: 34,
      padding: 4,
      travel: 42,
      iconSize: 30,
    },
  }[size];

  const handleToggle = (e: React.MouseEvent | React.KeyboardEvent) => {
    e.preventDefault();
    if (soundEnabled) {
      playCyberSound(isDark ? 'click' : 'toggle');
    }
    toggleTheme(e);
    if (onToggle) {
      onToggle(!isDark, e);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === ' ' || e.key === 'Enter') {
      handleToggle(e);
    }
  };

  const fastTransition = prefersReducedMotion
    ? 'none'
    : 'transform 150ms cubic-bezier(0.16, 1, 0.3, 1), opacity 150ms ease-out';

  return (
    <div className={`inline-flex items-center gap-2.5 select-none ${className}`}>
      <button
        type="button"
        role="switch"
        aria-checked={isDark}
        aria-label={ariaLabel}
        tabIndex={0}
        onClick={handleToggle}
        onKeyDown={handleKeyDown}
        className={`relative flex items-center rounded-full cursor-pointer overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2 focus-visible:ring-offset-cyber-bg transition-transform duration-100 active:scale-95 hover:scale-[1.02] ${
          isDark
            ? 'border border-indigo-500/40 shadow-[inset_0_2px_5px_rgba(0,0,0,0.5),0_0_12px_rgba(99,102,241,0.25)]'
            : 'border border-sky-300/60 shadow-[inset_0_2px_4px_rgba(0,0,0,0.1),0_0_12px_rgba(56,189,248,0.3)]'
        }`}
        style={{
          width: dimensions.width,
          height: dimensions.height,
        }}
      >
        {/* Dynamic Sky Capsule Background (Light Mode) */}
        <div
          className="absolute inset-0 transition-opacity duration-150 ease-out"
          style={{
            background: 'linear-gradient(135deg, #38BDF8 0%, #60A5FA 50%, #93C5FD 100%)',
            opacity: isDark ? 0 : 1,
          }}
        />

        {/* Dynamic Midnight Capsule Background (Dark Mode) */}
        <div
          className="absolute inset-0 transition-opacity duration-150 ease-out"
          style={{
            background: 'linear-gradient(135deg, #090D16 0%, #0F172A 50%, #1E1B4B 100%)',
            opacity: isDark ? 1 : 0,
          }}
        />

        {/* LIGHT MODE: Floating Pillowy Clouds */}
        <div
          className="absolute inset-0 pointer-events-none overflow-hidden"
          style={{
            opacity: isDark ? 0 : 1,
            transform: isDark ? 'translate3d(8px, 0, 0)' : 'translate3d(0, 0, 0)',
            transition: fastTransition,
          }}
        >
          <div className="absolute right-1.5 bottom-0.5 flex items-end">
            <div className="w-3.5 h-3.5 -mr-1 rounded-full bg-white/75 shadow-sm" />
            <div className="w-4.5 h-4.5 -mr-1 rounded-full bg-white/90 shadow-sm" />
            <div className="w-3 h-3 rounded-full bg-white/80 shadow-sm" />
          </div>
          <div className="absolute top-0.5 left-2 right-2 h-[1px] bg-gradient-to-r from-white/0 via-white/50 to-white/0" />
        </div>

        {/* DARK MODE: Staggered Twinkling Star Field */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            opacity: isDark ? 1 : 0,
            transform: isDark ? 'scale(1)' : 'scale(0.85)',
            transition: fastTransition,
          }}
        >
          {/* Star 1 */}
          <div className="absolute left-2.5 top-2 w-1.5 h-1.5 rounded-full bg-indigo-100 shadow-[0_0_4px_#A5B4FC]" />
          {/* Star 2 */}
          <div className="absolute left-6 top-3.5 w-1 h-1 rounded-full bg-cyan-200 shadow-[0_0_3px_#67E8F9]" />
          {/* Star 3 */}
          <div className="absolute left-4 bottom-2 w-1.5 h-1.5 rounded-full bg-purple-200 shadow-[0_0_4px_#C084FC]" />
          {/* Star 4 */}
          <div className="absolute left-7 bottom-2.5 w-0.5 h-0.5 rounded-full bg-white opacity-80" />
        </div>

        {/* 120 FPS GPU-Accelerated Glide Knob */}
        <div
          className="absolute z-10 flex items-center justify-center rounded-full will-change-transform"
          style={{
            width: dimensions.knobSize,
            height: dimensions.knobSize,
            top: dimensions.padding,
            left: dimensions.padding,
            transform: isDark
              ? `translate3d(${dimensions.travel}px, 0, 0)`
              : 'translate3d(0, 0, 0)',
            transition: prefersReducedMotion
              ? 'none'
              : 'transform 150ms cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        >
          {/* Knob Outer Celestial Halo Glow - Light Mode */}
          <div
            className="absolute inset-0 rounded-full border transition-opacity duration-150 ease-out"
            style={{
              opacity: isDark ? 0 : 1,
              borderColor: 'rgba(251, 191, 36, 0.7)',
              background: 'linear-gradient(135deg, #FFFBEB 0%, #FEF3C7 100%)',
              boxShadow: '0 0 14px 3px rgba(245, 158, 11, 0.65), 0 2px 6px rgba(0,0,0,0.2)',
            }}
          />

          {/* Knob Outer Celestial Halo Glow - Dark Mode */}
          <div
            className="absolute inset-0 rounded-full border transition-opacity duration-150 ease-out"
            style={{
              opacity: isDark ? 1 : 0,
              borderColor: 'rgba(203, 213, 225, 0.5)',
              background: 'linear-gradient(135deg, #1E293B 0%, #0F172A 100%)',
              boxShadow: '0 0 14px 2px rgba(226, 232, 240, 0.45), 0 2px 6px rgba(0,0,0,0.5)',
            }}
          />

          {/* Celestial SVG (Real Moon vs Radiant Sun) */}
          <div
            className="relative z-20 flex items-center justify-center pointer-events-none"
            style={{
              width: dimensions.iconSize,
              height: dimensions.iconSize,
            }}
          >
            <svg
              viewBox="0 0 24 24"
              className="w-full h-full overflow-visible"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                {/* Real Moon Surface Radial Regolith Gradient */}
                <radialGradient id={`${idPrefix}-real-moon`} cx="32%" cy="30%" r="70%">
                  <stop offset="0%" stopColor="#FFFFFF" />
                  <stop offset="22%" stopColor="#F1F5F9" />
                  <stop offset="55%" stopColor="#CBD5E1" />
                  <stop offset="85%" stopColor="#94A3B8" />
                  <stop offset="100%" stopColor="#64748B" />
                </radialGradient>

                {/* Real Moon 3D Spherical Depth Shading */}
                <radialGradient id={`${idPrefix}-real-moon-shading`} cx="38%" cy="34%" r="66%">
                  <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.35" />
                  <stop offset="52%" stopColor="#000000" stopOpacity="0" />
                  <stop offset="82%" stopColor="#1E293B" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#090D16" stopOpacity="0.65" />
                </radialGradient>

                {/* Sun Core Radiant Radial Gradient */}
                <radialGradient id={`${idPrefix}-sun-core`} cx="35%" cy="32%" r="68%">
                  <stop offset="0%" stopColor="#FFFBEB" />
                  <stop offset="25%" stopColor="#FEF08A" />
                  <stop offset="60%" stopColor="#FBBF24" />
                  <stop offset="85%" stopColor="#F59E0B" />
                  <stop offset="100%" stopColor="#D97706" />
                </radialGradient>
              </defs>

              {/* LIGHT MODE: RADIANT GOLDEN SUN */}
              <g
                style={{
                  opacity: isDark ? 0 : 1,
                  transform: isDark ? 'scale(0.3) rotate(45deg)' : 'scale(1) rotate(0deg)',
                  transformOrigin: '12px 12px',
                  transition: fastTransition,
                }}
              >
                {/* Sun Rays */}
                <g stroke="#D97706" strokeWidth="1.8" strokeLinecap="round">
                  <line x1="12" y1="1" x2="12" y2="3.2" />
                  <line x1="12" y1="20.8" x2="12" y2="23" />
                  <line x1="1" y1="12" x2="3.2" y2="12" />
                  <line x1="20.8" y1="12" x2="23" y2="12" />
                  <line x1="4.2" y1="4.2" x2="5.8" y2="5.8" />
                  <line x1="18.2" y1="18.2" x2="19.8" y2="19.8" />
                  <line x1="4.2" y1="19.8" x2="5.8" y2="18.2" />
                  <line x1="18.2" y1="5.8" x2="19.8" y2="4.2" />
                </g>

                {/* Sun Core Disc */}
                <circle cx="12" cy="12" r="6.6" fill={`url(#${idPrefix}-sun-core)`} />
                {/* Specular Highlight */}
                <circle cx="10.2" cy="10.2" r="2.2" fill="#FFFFFF" opacity="0.5" />
              </g>

              {/* DARK MODE: REAL CELESTIAL CRATERED MOON */}
              <g
                style={{
                  opacity: isDark ? 1 : 0,
                  transform: isDark ? 'scale(1) rotate(0deg)' : 'scale(0.3) rotate(-35deg)',
                  transformOrigin: '12px 12px',
                  transition: fastTransition,
                }}
              >
                {/* Moon Base Sphere */}
                <circle cx="12" cy="12" r="8.2" fill={`url(#${idPrefix}-real-moon)`} />

                {/* 3D Spherical Depth Shading */}
                <circle cx="12" cy="12" r="8.2" fill={`url(#${idPrefix}-real-moon-shading)`} />

                {/* Lunar Maria (Basaltic Dark Plains / Seas) */}
                <g opacity="0.35">
                  <ellipse cx="9.2" cy="9.5" rx="3.0" ry="2.2" fill="#334155" transform="rotate(-15 9.2 9.5)" />
                  <ellipse cx="14.5" cy="10.2" rx="2.4" ry="1.7" fill="#334155" transform="rotate(12 14.5 10.2)" />
                  <ellipse cx="10.8" cy="14.6" rx="2.5" ry="1.5" fill="#334155" />
                </g>

                {/* Real Crater 1: Tycho (South / Center) with Bright Rim & Deep Shadow Floor */}
                <g>
                  <circle cx="13.2" cy="15.8" r="1.6" fill="#FFFFFF" opacity="0.8" />
                  <circle cx="13.0" cy="16.0" r="1.2" fill="#475569" />
                  <circle cx="12.9" cy="15.9" r="0.35" fill="#E2E8F0" />
                </g>

                {/* Real Crater 2: Copernicus (Equatorial West) */}
                <g>
                  <circle cx="8.0" cy="12.8" r="1.4" fill="#FFFFFF" opacity="0.75" />
                  <circle cx="7.8" cy="13.0" r="1.0" fill="#475569" />
                  <circle cx="7.7" cy="12.9" r="0.3" fill="#CBD5E1" />
                </g>

                {/* Real Crater 3: Kepler / Aristarchus (Bright ray crater, Northwest) */}
                <g>
                  <circle cx="7.2" cy="7.8" r="1.1" fill="#FFFFFF" opacity="0.8" />
                  <circle cx="7.1" cy="7.9" r="0.8" fill="#475569" />
                </g>

                {/* Real Crater 4: Mare Crisium / Eastern Crater */}
                <g>
                  <circle cx="16.3" cy="12.2" r="1.0" fill="#E2E8F0" opacity="0.7" />
                  <circle cx="16.2" cy="12.3" r="0.7" fill="#475569" />
                </g>

                {/* Micro Craterlets */}
                <circle cx="14.6" cy="7.2" r="0.5" fill="#475569" opacity="0.7" />
                <circle cx="10.5" cy="6.6" r="0.45" fill="#475569" opacity="0.6" />
                <circle cx="15.2" cy="15.0" r="0.45" fill="#475569" opacity="0.6" />
              </g>
            </svg>
          </div>
        </div>
      </button>

      {/* Optional Mode Label */}
      {showLabel && (
        <span
          className={`font-mono text-xs font-semibold tracking-wider transition-colors duration-150 cursor-pointer ${
            isDark ? 'text-indigo-300 hover:text-white' : 'text-sky-700 hover:text-sky-950'
          }`}
          onClick={handleToggle}
        >
          {isDark ? 'DARK' : 'LIGHT'}
        </span>
      )}
    </div>
  );
};
