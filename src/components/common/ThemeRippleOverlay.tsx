import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../hooks/useTheme';

export const ThemeRippleOverlay: React.FC = () => {
  const { rippleState, prefersReducedMotion } = useTheme();

  if (!rippleState || !rippleState.active || prefersReducedMotion) {
    return null;
  }

  // Calculate maximum radius to screen boundaries
  const maxRadius = typeof window !== 'undefined'
    ? Math.hypot(
        Math.max(rippleState.x, window.innerWidth - rippleState.x),
        Math.max(rippleState.y, window.innerHeight - rippleState.y)
      ) * 1.05
    : 1000;

  return (
    <AnimatePresence>
      <motion.div
        key="theme-ripple"
        initial={{
          clipPath: `circle(0px at ${rippleState.x}px ${rippleState.y}px)`,
          opacity: 1,
        }}
        animate={{
          clipPath: `circle(${maxRadius}px at ${rippleState.x}px ${rippleState.y}px)`,
          opacity: 1,
        }}
        exit={{
          opacity: 0,
        }}
        transition={{
          duration: 0.65,
          ease: [0.22, 1, 0.36, 1],
        }}
        className={`fixed inset-0 pointer-events-none z-[99999] ${
          rippleState.targetIsDark
            ? 'bg-[#0B0F19]'
            : 'bg-[#F8FAFC]'
        }`}
      />
    </AnimatePresence>
  );
};
