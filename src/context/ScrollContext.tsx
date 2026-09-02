import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

interface ScrollContextType {
  scrollElement: HTMLElement | null;
  setScrollElement: (el: HTMLElement | null) => void;
  scrollTop: number;
  scrollProgress: number; // 0 to 1
  isScrolled: boolean;
  scrollToTop: () => void;
}

const ScrollContext = createContext<ScrollContextType>({
  scrollElement: null,
  setScrollElement: () => {},
  scrollTop: 0,
  scrollProgress: 0,
  isScrolled: false,
  scrollToTop: () => {},
});

export const useWorkspaceScroll = () => useContext(ScrollContext);

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

  return (
    <ScrollContext.Provider
      value={{
        scrollElement,
        setScrollElement,
        scrollTop,
        scrollProgress,
        isScrolled,
        scrollToTop,
      }}
    >
      {children}
    </ScrollContext.Provider>
  );
};
