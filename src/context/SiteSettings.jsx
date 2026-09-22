import { createContext, useContext, useEffect, useState } from 'react';

const SiteSettingsContext = createContext(null);

const THEME_KEY = 'onyx-theme';

function getInitialTheme() {
  if (typeof window === 'undefined') return 'light';
  try {
    const stored = window.localStorage.getItem(THEME_KEY);
    if (stored === 'light' || stored === 'dark') return stored;
  } catch {
    /* localStorage unavailable — fall through to system preference */
  }
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark';
  }
  return 'light';
}

/**
 * Site-wide theme (light/dark) state. Persisted to localStorage and
 * reflected on <html> as a `dark` class for Tailwind's class-based
 * dark-mode variant.
 */
export function SiteSettingsProvider({ children }) {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    try {
      window.localStorage.setItem(THEME_KEY, theme);
    } catch {
      /* best-effort persistence only */
    }
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'));

  return (
    <SiteSettingsContext.Provider value={{ theme, toggleTheme }}>{children}</SiteSettingsContext.Provider>
  );
}

export function useSiteSettings() {
  const ctx = useContext(SiteSettingsContext);
  if (!ctx) throw new Error('useSiteSettings must be used within a SiteSettingsProvider');
  return ctx;
}
