import React, { useState, useEffect, useCallback, createContext, useContext } from 'react';

export type ThemeMode = 'light' | 'dark' | 'system';

export interface RippleCoordinates {
  x: number;
  y: number;
}

export interface RippleState {
  active: boolean;
  x: number;
  y: number;
  targetIsDark: boolean;
}

export interface ThemeContextValue {
  theme: ThemeMode;
  effectiveTheme: 'light' | 'dark';
  isDark: boolean;
  setTheme: (mode: ThemeMode) => void;
  toggleTheme: (event?: React.MouseEvent | React.KeyboardEvent) => void;
  prefersReducedMotion: boolean;
  systemTheme: 'light' | 'dark';
  rippleState: RippleState | null;
}

const STORAGE_KEY = 'zerobox-theme-mode';

export function getSystemTheme(): 'light' | 'dark' {
  if (typeof window === 'undefined') return 'dark';
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export function getPrefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export function applyThemeToDOM(effective: 'light' | 'dark', _animate = false) {
  if (typeof document === 'undefined') return;
  const root = document.documentElement;

  if (effective === 'dark') {
    root.classList.add('dark');
    root.classList.remove('light');
    root.style.colorScheme = 'dark';
  } else {
    root.classList.remove('dark');
    root.classList.add('light');
    root.style.colorScheme = 'light';
  }
}

export function useThemeEngine(): ThemeContextValue {
  const [theme, setThemeState] = useState<ThemeMode>(() => {
    if (typeof window === 'undefined') return 'dark';
    try {
      const saved = localStorage.getItem(STORAGE_KEY) as ThemeMode | null;
      if (saved === 'light' || saved === 'dark' || saved === 'system') {
        return saved;
      }
    } catch {
      // Ignore localStorage errors
    }
    return 'dark'; // ZeroBox defaults to cyber dark
  });

  const [systemTheme, setSystemTheme] = useState<'light' | 'dark'>(getSystemTheme);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState<boolean>(getPrefersReducedMotion);

  const effectiveTheme: 'light' | 'dark' = theme === 'system' ? systemTheme : theme;
  const isDark = effectiveTheme === 'dark';

  // Apply initial theme on mount synchronously without animation
  useEffect(() => {
    applyThemeToDOM(effectiveTheme, false);
  }, []);

  // Listen for system theme preference changes
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      const newSys = e.matches ? 'dark' : 'light';
      setSystemTheme(newSys);
      if (theme === 'system') {
        applyThemeToDOM(newSys, false);
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [theme]);

  // Listen for reduced motion preference changes
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const setTheme = useCallback((mode: ThemeMode) => {
    const eff = mode === 'system' ? getSystemTheme() : mode;
    applyThemeToDOM(eff, false);
    setThemeState(mode);

    try {
      localStorage.setItem(STORAGE_KEY, mode);
    } catch {
      // Ignore storage errors
    }
  }, []);

  // Instantaneous, buttery-smooth theme toggle with zero main-thread freezing
  const toggleTheme = useCallback(
    (_event?: React.MouseEvent | React.KeyboardEvent) => {
      const nextIsDark = !isDark;
      const nextMode: ThemeMode = nextIsDark ? 'dark' : 'light';

      applyThemeToDOM(nextMode, false);
      setThemeState(nextMode);

      try {
        localStorage.setItem(STORAGE_KEY, nextMode);
      } catch {
        // Ignore storage errors
      }
    },
    [isDark]
  );

  return {
    theme,
    effectiveTheme,
    isDark,
    setTheme,
    toggleTheme,
    prefersReducedMotion,
    systemTheme,
    rippleState: null,
  };
}

export const ThemeContext = createContext<ThemeContextValue | null>(null);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const value = useThemeEngine();
  return React.createElement(ThemeContext.Provider, { value }, children);
};

export function useTheme(): ThemeContextValue {
  const context = useContext(ThemeContext);
  if (!context) {
    return useThemeEngine();
  }
  return context;
}

