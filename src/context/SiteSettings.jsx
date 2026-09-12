import { createContext, useContext, useEffect, useState } from 'react';

const SiteSettingsContext = createContext(null);

const THEME_KEY = 'onyx-theme';
const LANG_KEY = 'onyx-lang';

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

function getInitialLang() {
  if (typeof window === 'undefined') return 'en';
  try {
    const stored = window.localStorage.getItem(LANG_KEY);
    if (stored === 'en' || stored === 'ar') return stored;
  } catch {
    /* localStorage unavailable */
  }
  return 'en';
}

/**
 * Site-wide language (en/ar) and theme (light/dark) state. Both are
 * persisted to localStorage and reflected on <html> — `dir`/`lang`
 * attributes for the language (driving RTL layout + the Arabic font
 * swap in index.css) and a `dark` class for Tailwind's class-based
 * dark-mode variant.
 */
export function SiteSettingsProvider({ children }) {
  const [theme, setTheme] = useState(getInitialTheme);
  const [lang, setLang] = useState(getInitialLang);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    try {
      window.localStorage.setItem(THEME_KEY, theme);
    } catch {
      /* best-effort persistence only */
    }
  }, [theme]);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    try {
      window.localStorage.setItem(LANG_KEY, lang);
    } catch {
      /* best-effort persistence only */
    }
  }, [lang]);

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'));
  const toggleLang = () => setLang((l) => (l === 'en' ? 'ar' : 'en'));

  return (
    <SiteSettingsContext.Provider value={{ theme, toggleTheme, lang, toggleLang, isRtl: lang === 'ar' }}>
      {children}
    </SiteSettingsContext.Provider>
  );
}

export function useSiteSettings() {
  const ctx = useContext(SiteSettingsContext);
  if (!ctx) throw new Error('useSiteSettings must be used within a SiteSettingsProvider');
  return ctx;
}
