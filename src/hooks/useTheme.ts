import { useState, useEffect, useCallback, createContext, useContext } from 'react';

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
  const [rippleState, setRippleState] = useState<RippleState | null>(null);

  const effectiveTheme: 'light' | 'dark' = theme === 'system' ? systemTheme : theme;
  const isDark = effectiveTheme === 'dark';

  // Apply class to document root
  useEffect(() => {
    const root = document.documentElement;
    if (effectiveTheme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
      root.style.colorScheme = 'dark';
    } else {
      root.classList.remove('dark');
      root.classList.add('light');
      root.style.colorScheme = 'light';
    }
  }, [effectiveTheme]);

  // Listen for system theme preference changes
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      setSystemTheme(e.matches ? 'dark' : 'light');
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

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
    setThemeState(mode);
    try {
      localStorage.setItem(STORAGE_KEY, mode);
    } catch {
      // Ignore storage errors
    }
  }, []);

  // Execute liquid circular reveal transition
  const toggleTheme = useCallback(
    (event?: React.MouseEvent | React.KeyboardEvent) => {
      const nextIsDark = !isDark;
      const nextMode: ThemeMode = nextIsDark ? 'dark' : 'light';

      // Determine click coordinates
      let clientX = window.innerWidth / 2;
      let clientY = window.innerHeight / 2;

      if (event && 'clientX' in event && event.clientX !== undefined && event.clientX > 0) {
        clientX = event.clientX;
        clientY = event.clientY;
      } else if (event && 'currentTarget' in event && event.currentTarget) {
        const target = event.currentTarget as HTMLElement;
        const rect = target.getBoundingClientRect();
        clientX = rect.left + rect.width / 2;
        clientY = rect.top + rect.height / 2;
      }

      // Check if View Transitions API is available and reduced motion is disabled
      const isViewTransitionSupported =
        typeof document !== 'undefined' &&
        'startViewTransition' in document &&
        typeof (document as any).startViewTransition === 'function';

      if (isViewTransitionSupported && !prefersReducedMotion) {
        const endRadius = Math.hypot(
          Math.max(clientX, window.innerWidth - clientX),
          Math.max(clientY, window.innerHeight - clientY)
        );

        const transition = (document as any).startViewTransition(() => {
          setTheme(nextMode);
        });

        transition.ready.then(() => {
          const clipPath = [
            `circle(0px at ${clientX}px ${clientY}px)`,
            `circle(${endRadius}px at ${clientX}px ${clientY}px)`
          ];

          document.documentElement.animate(
            {
              clipPath: nextIsDark ? [...clipPath].reverse() : clipPath
            },
            {
              duration: 650,
              easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
              pseudoElement: nextIsDark
                ? '::view-transition-old(root)'
                : '::view-transition-new(root)'
            }
          );
        });
      } else {
        // Trigger liquid CSS ripple fallback if View Transitions API is not active
        if (!prefersReducedMotion) {
          setRippleState({
            active: true,
            x: clientX,
            y: clientY,
            targetIsDark: nextIsDark
          });

          setTimeout(() => {
            setTheme(nextMode);
          }, 50);

          setTimeout(() => {
            setRippleState(null);
          }, 700);
        } else {
          // Instant change for reduced motion preference
          setTheme(nextMode);
        }
      }
    },
    [isDark, prefersReducedMotion, setTheme]
  );

  return {
    theme,
    effectiveTheme,
    isDark,
    setTheme,
    toggleTheme,
    prefersReducedMotion,
    systemTheme,
    rippleState
  };
}

export const ThemeContext = createContext<ThemeContextValue | null>(null);

export function useTheme(): ThemeContextValue {
  const context = useContext(ThemeContext);
  if (!context) {
    return useThemeEngine();
  }
  return context;
}
