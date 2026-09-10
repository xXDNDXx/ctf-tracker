import React from 'react';
import { motion } from 'framer-motion';
import { useWorkspaceScroll } from '../../context/ScrollContext';

export const ScrollProgressBar: React.FC = () => {
  const { scrollProgress, isScrolled } = useWorkspaceScroll();

  return (
    <>
      {/* Top Cyber Laser Progress Track */}
      <div className="fixed top-0 left-0 right-0 z-50 h-[3px] bg-cyber-bg/80 border-b border-cyber-border/30 pointer-events-none">
        <div
          className="h-full bg-gradient-to-r from-cyber-emerald via-cyber-cyan to-cyber-purple relative will-change-transform transform-gpu transition-transform duration-75 ease-out"
          style={{ 
            transform: `scaleX(${scrollProgress})`,
            transformOrigin: 'left',
            boxShadow: '0 0 12px #06B6D4, 0 0 24px #10B981'
          }}
        >
          {/* Leading Spark Laser Head */}
          {scrollProgress > 0.01 && (
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-[0_0_15px_#fff,0_0_25px_#06B6D4] pointer-events-none" />
          )}
        </div>
      </div>

      {/* Subtle Scroll Percentage HUD in Header Right */}
      {isScrolled && (
        <motion.div
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -5 }}
          className="fixed top-2.5 right-24 z-40 px-2 py-0.5 rounded bg-cyber-card/90 border border-cyber-cyan/40 text-[10px] font-mono text-cyber-cyan shadow-glow-cyan/20 pointer-events-none flex items-center gap-1 backdrop-blur-sm"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-cyber-cyan animate-pulse" />
          <span>DEPTH: {Math.round(scrollProgress * 100)}%</span>
        </motion.div>
      )}
    </>
  );
};
