import React, { createContext, useContext, useState, useEffect, useCallback, useMemo } from 'react';

interface ScrollControlContextType {
  scrollElement: HTMLElement | null;
  setScrollElement: (el: HTMLElement | null) => void;
  scrollToTop: () => void;
}

interface ScrollProgressContextType {
  scrollTop: number;
  scrollProgress: number; // 0 to 1
  isScrolled: boolean;
}

interface ScrollContextType extends ScrollControlContextType, ScrollProgressContextType {}

const ScrollControlContext = createContext<ScrollControlContextType>({
  scrollElement: null,
  setScrollElement: () => {},
  scrollToTop: () => {},
});

const ScrollProgressContext = createContext<ScrollProgressContextType>({
  scrollTop: 0,
  scrollProgress: 0,
  isScrolled: false,
});

export const useScrollControl = () => useContext(ScrollControlContext);
export const useScrollProgress = () => useContext(ScrollProgressContext);

export const useWorkspaceScroll = (): ScrollContextType => {
  const control = useContext(ScrollControlContext);
  const progress = useContext(ScrollProgressContext);
  return { ...control, ...progress };
};

export const ScrollProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [scrollElement, setScrollElement] = useState<HTMLElement | null>(null);
  const [scrollTop, setScrollTop] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (!scrollElement) return;

    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const top = scrollElement.scrollTop;
          const height = scrollElement.scrollHeight - scrollElement.clientHeight;
          const progress = height > 0 ? Math.min(Math.max(top / height, 0), 1) : 0;

          setScrollTop(top);
          setScrollProgress(progress);
          setIsScrolled(top > 180);
          ticking = false;
        });
        ticking = true;
      }
    };

    scrollElement.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      scrollElement.removeEventListener('scroll', handleScroll);
    };
  }, [scrollElement]);

  const scrollToTop = useCallback(() => {
    if (scrollElement) {
      scrollElement.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [scrollElement]);

  const controlValue = useMemo(() => ({
    scrollElement,
    setScrollElement,
    scrollToTop,
  }), [scrollElement, scrollToTop]);

  const progressValue = useMemo(() => ({
    scrollTop,
    scrollProgress,
    isScrolled,
  }), [scrollTop, scrollProgress, isScrolled]);

  return (
    <ScrollControlContext.Provider value={controlValue}>
      <ScrollProgressContext.Provider value={progressValue}>
        {children}
      </ScrollProgressContext.Provider>
    </ScrollControlContext.Provider>
  );
};
