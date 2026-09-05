import React, { useId } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
  const maskId = useId();

  // Dimensions mapping
  const dimensions = {
    sm: {
      width: 54,
      height: 28,
      knobSize: 22,
      padding: 3,
      travel: 26,
      iconSize: 14,
    },
    md: {
      width: 68,
      height: 34,
      knobSize: 28,
      padding: 3,
      travel: 34,
      iconSize: 18,
    },
    lg: {
      width: 84,
      height: 42,
      knobSize: 34,
      padding: 4,
      travel: 42,
      iconSize: 22,
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

  // Spring physics specification requested: damping 18, stiffness 220, mass 0.8
  const springTransition = prefersReducedMotion
    ? { duration: 0.15 }
    : {
        type: 'spring' as const,
        damping: 18,
        stiffness: 220,
        mass: 0.8,
      };

  return (
    <div className={`inline-flex items-center gap-2.5 select-none ${className}`}>
      <motion.button
        type="button"
        role="switch"
        aria-checked={isDark}
        aria-label={ariaLabel}
        tabIndex={0}
        onClick={handleToggle}
        onKeyDown={handleKeyDown}
        className={`relative flex items-center rounded-full cursor-pointer overflow-hidden transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2 focus-visible:ring-offset-cyber-bg ${
          isDark
            ? 'border border-indigo-500/40 shadow-[inset_0_2px_5px_rgba(0,0,0,0.5),0_0_12px_rgba(99,102,241,0.25)]'
            : 'border border-sky-300/60 shadow-[inset_0_2px_4px_rgba(0,0,0,0.1),0_0_12px_rgba(56,189,248,0.3)]'
        }`}
        style={{
          width: dimensions.width,
          height: dimensions.height,
        }}
        whileHover={prefersReducedMotion ? {} : { scale: 1.03 }}
        whileTap={prefersReducedMotion ? {} : { scale: 0.96 }}
      >
        {/* Dynamic Sky / Midnight Capsule Background */}
        <motion.div
          className="absolute inset-0"
          animate={{
            background: isDark
              ? 'linear-gradient(135deg, #090D16 0%, #0F172A 50%, #1E1B4B 100%)'
              : 'linear-gradient(135deg, #38BDF8 0%, #60A5FA 50%, #93C5FD 100%)',
          }}
          transition={{ duration: prefersReducedMotion ? 0.2 : 0.5, ease: 'easeInOut' }}
        />

        {/* LIGHT MODE: Floating Semi-Transparent Pillowy Cloud Layers */}
        <AnimatePresence>
          {!isDark && (
            <motion.div
              key="clouds"
              initial={{ opacity: 0, x: 8 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 12 }}
              transition={{ duration: prefersReducedMotion ? 0.15 : 0.4 }}
              className="absolute inset-0 pointer-events-none overflow-hidden"
            >
              {/* Back drifting cloud bubble */}
              <motion.div
                animate={
                  prefersReducedMotion
                    ? {}
                    : {
                        x: [0, 2, 0],
                        y: [0, -1, 0],
                      }
                }
                transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
                className="absolute right-7 bottom-1 w-3.5 h-3.5 rounded-full bg-white/40 blur-[0.5px]"
              />

              {/* Main pillowy cloud assembly (right side) */}
              <div className="absolute right-1.5 bottom-0.5 flex items-end">
                <div className="w-4 h-4 -mr-1 rounded-full bg-white/75 shadow-sm" />
                <div className="w-5 h-5 -mr-1 rounded-full bg-white/90 shadow-sm" />
                <div className="w-3.5 h-3.5 rounded-full bg-white/80 shadow-sm" />
              </div>

              {/* Subtle sun reflection light bar at top */}
              <div className="absolute top-0.5 left-2 right-2 h-[1px] bg-gradient-to-r from-white/0 via-white/50 to-white/0" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* DARK MODE: Staggered Twinkling Star Dots */}
        <AnimatePresence>
          {isDark && (
            <motion.div
              key="stars"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: prefersReducedMotion ? 0.15 : 0.4 }}
              className="absolute inset-0 pointer-events-none"
            >
              {/* Star 1: Primary 4-point twinkle star */}
              <motion.div
                animate={
                  prefersReducedMotion
                    ? { opacity: 0.9 }
                    : {
                        opacity: [0.25, 1, 0.4],
                        scale: [0.85, 1.15, 0.85],
                      }
                }
                transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
                className="absolute left-2.5 top-2 w-1.5 h-1.5 rounded-full bg-indigo-100 shadow-[0_0_4px_#A5B4FC]"
              />

              {/* Star 2: Small star */}
              <motion.div
                animate={
                  prefersReducedMotion
                    ? { opacity: 0.8 }
                    : {
                        opacity: [0.3, 0.9, 0.2],
                        scale: [0.8, 1.1, 0.8],
                      }
                }
                transition={{ repeat: Infinity, duration: 1.8, delay: 0.4, ease: 'easeInOut' }}
                className="absolute left-6 top-3.5 w-1 h-1 rounded-full bg-cyan-200 shadow-[0_0_3px_#67E8F9]"
              />

              {/* Star 3: Lower left star */}
              <motion.div
                animate={
                  prefersReducedMotion
                    ? { opacity: 0.7 }
                    : {
                        opacity: [0.2, 0.8, 0.3],
                        scale: [0.9, 1.2, 0.9],
                      }
                }
                transition={{ repeat: Infinity, duration: 2.7, delay: 0.8, ease: 'easeInOut' }}
                className="absolute left-4 bottom-2 w-1.5 h-1.5 rounded-full bg-purple-200 shadow-[0_0_4px_#C084FC]"
              />

              {/* Star 4: Tiny faint star */}
              <motion.div
                animate={
                  prefersReducedMotion
                    ? { opacity: 0.6 }
                    : {
                        opacity: [0.15, 0.75, 0.15],
                      }
                }
                transition={{ repeat: Infinity, duration: 3.1, delay: 1.2, ease: 'easeInOut' }}
                className="absolute left-7 bottom-2.5 w-0.5 h-0.5 rounded-full bg-white"
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Interactive Bouncy Thumb / Slider Knob with Squash & Stretch */}
        <motion.div
          className="absolute z-10 flex items-center justify-center rounded-full"
          style={{
            width: dimensions.knobSize,
            height: dimensions.knobSize,
            top: dimensions.padding,
            left: dimensions.padding,
          }}
          animate={{
            x: isDark ? dimensions.travel : 0,
          }}
          whileTap={
            prefersReducedMotion
              ? {}
              : {
                  // Organic horizontal stretch upon press/drag
                  scaleX: 1.18,
                  scaleY: 0.88,
                }
          }
          transition={springTransition}
        >
          {/* Knob Outer Halo Glow */}
          <motion.div
            className="absolute inset-0 rounded-full"
            animate={{
              boxShadow: isDark
                ? '0 0 14px 2px rgba(165, 180, 252, 0.55), 0 2px 6px rgba(0,0,0,0.4)'
                : '0 0 14px 3px rgba(245, 158, 11, 0.65), 0 2px 6px rgba(0,0,0,0.2)',
              background: isDark
                ? 'linear-gradient(135deg, #1E293B 0%, #0F172A 100%)'
                : 'linear-gradient(135deg, #FFFBEB 0%, #FEF3C7 100%)',
              borderColor: isDark ? 'rgba(129, 140, 248, 0.6)' : 'rgba(251, 191, 36, 0.7)',
            }}
            transition={{ duration: prefersReducedMotion ? 0.15 : 0.4 }}
            style={{
              borderWidth: 1,
            }}
          />

          {/* Morphing Sun & Moon Celestial SVG */}
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
                {/* Dynamic Moon Carving Mask */}
                <mask id={maskId}>
                  {/* Full visible white canvas */}
                  <rect x="0" y="0" width="24" height="24" fill="white" />
                  {/* The Black Carving Circle that cuts out the crescent */}
                  <motion.circle
                    cx="25"
                    cy="-1"
                    r="7.2"
                    fill="black"
                    animate={{
                      x: isDark ? -11 : 0,
                      y: isDark ? 9 : 0,
                    }}
                    transition={springTransition}
                  />
                </mask>

                {/* Sun Gradient */}
                <linearGradient id={`${maskId}-sun`} x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#F59E0B" />
                  <stop offset="100%" stopColor="#D97706" />
                </linearGradient>

                {/* Moon Gradient */}
                <linearGradient id={`${maskId}-moon`} x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#E2E8F0" />
                  <stop offset="100%" stopColor="#94A3B8" />
                </linearGradient>
              </defs>

              {/* SUN RAYS: 8 Rays that contract inward, rotate -45deg, and scale down on Dark Mode */}
              <motion.g
                animate={{
                  scale: isDark ? 0 : 1,
                  opacity: isDark ? 0 : 1,
                  rotate: isDark ? -45 : 0,
                }}
                transition={
                  prefersReducedMotion
                    ? { duration: 0.15 }
                    : {
                        type: 'spring',
                        damping: 15,
                        stiffness: 260,
                        mass: 0.7,
                      }
                }
                style={{ originX: '12px', originY: '12px' }}
                stroke="#D97706"
                strokeWidth="2"
                strokeLinecap="round"
              >
                {/* 12, 3, 6, 9 o'clock rays */}
                <line x1="12" y1="1.5" x2="12" y2="4" />
                <line x1="12" y1="20" x2="12" y2="22.5" />
                <line x1="1.5" y1="12" x2="4" y2="12" />
                <line x1="20" y1="12" x2="22.5" y2="12" />
                {/* Diagonal rays */}
                <line x1="4.5" y1="4.5" x2="6.3" y2="6.3" />
                <line x1="17.7" y1="17.7" x2="19.5" y2="19.5" />
                <line x1="4.5" y1="19.5" x2="6.3" y2="17.7" />
                <line x1="17.7" y1="6.3" x2="19.5" y2="4.5" />
              </motion.g>

              {/* CELESTIAL BODY: Central Disc that morphs into a Crescent Moon via Mask */}
              <motion.g
                animate={{
                  rotate: isDark ? -18 : 0,
                  scale: isDark ? 1.05 : 1,
                }}
                transition={springTransition}
                style={{ originX: '12px', originY: '12px' }}
              >
                <circle
                  cx="12"
                  cy="12"
                  r="6.5"
                  fill={`url(#${maskId}-${isDark ? 'moon' : 'sun'})`}
                  mask={`url(#${maskId})`}
                />

                {/* Moon Craters: 3 subtle craters fading in during dark mode */}
                <motion.g
                  animate={{
                    opacity: isDark ? 0.75 : 0,
                    scale: isDark ? 1 : 0.2,
                  }}
                  transition={{ duration: prefersReducedMotion ? 0.15 : 0.35 }}
                  style={{ originX: '9px', originY: '12px' }}
                  mask={`url(#${maskId})`}
                >
                  {/* Crater 1 */}
                  <circle cx="9.2" cy="10.2" r="1.1" fill="#64748B" opacity="0.65" />
                  {/* Crater 2 */}
                  <circle cx="8.5" cy="14" r="0.8" fill="#64748B" opacity="0.65" />
                  {/* Crater 3 */}
                  <circle cx="11" cy="13.5" r="0.6" fill="#64748B" opacity="0.55" />
                </motion.g>
              </motion.g>
            </svg>
          </div>
        </motion.div>
      </motion.button>

      {/* Optional Mode Label */}
      {showLabel && (
        <span
          className={`font-mono text-xs font-semibold tracking-wider transition-colors duration-200 cursor-pointer ${
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
