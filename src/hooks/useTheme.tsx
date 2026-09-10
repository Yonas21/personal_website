import {createContext, FC, memo, PropsWithChildren, useCallback, useContext, useEffect, useMemo, useState} from 'react';

import {applyTheme, getSystemTheme, readStoredTheme, resolveTheme, Theme, THEME_STORAGE_KEY} from './theme';

interface ThemeContextValue {
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
  theme: Theme;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

export const ThemeProvider: FC<PropsWithChildren> = memo(({children}) => {
  const [theme, setThemeState] = useState<Theme>('dark');

  useEffect(() => {
    const initial = resolveTheme();
    setThemeState(initial);
    applyTheme(initial);
    if (readStoredTheme()) {
      localStorage.setItem(THEME_STORAGE_KEY, initial);
    }

    const media = window.matchMedia('(prefers-color-scheme: dark)');
    const onSystemChange = () => {
      if (readStoredTheme()) {
        return;
      }
      const next = getSystemTheme();
      setThemeState(next);
      applyTheme(next);
    };

    media.addEventListener('change', onSystemChange);
    return () => media.removeEventListener('change', onSystemChange);
  }, []);

  const setTheme = useCallback((next: Theme) => {
    localStorage.setItem(THEME_STORAGE_KEY, next);
    setThemeState(next);
    applyTheme(next);
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme(document.documentElement.classList.contains('dark') ? 'light' : 'dark');
  }, [setTheme]);

  const value = useMemo(
    () => ({
      setTheme,
      theme,
      toggleTheme,
    }),
    [setTheme, toggleTheme, theme],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
});

ThemeProvider.displayName = 'ThemeProvider';

export const useTheme = (): ThemeContextValue => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};
