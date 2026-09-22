import { createContext, useCallback, useContext, useEffect, useState } from 'react';

const RouterContext = createContext(null);

// Vite's BASE_URL matches the `base` config in vite.config.js (see there for
// why: GitHub Pages project sites live under a sub-path). Internally the app
// always works with root-relative paths ('/', '/services', ...); this strips
// / re-adds that sub-path so deployment location never leaks into app logic.
const BASE = import.meta.env.BASE_URL || '/';
const BASE_PREFIX = BASE === '/' ? '' : BASE.replace(/\/$/, '');

function currentPath() {
  let p = window.location.pathname || '/';
  if (BASE_PREFIX && p.startsWith(BASE_PREFIX)) {
    p = p.slice(BASE_PREFIX.length) || '/';
  }
  return p;
}

/**
 * Tiny, dependency-free router. The site only has two real pages (Home and
 * Contact), so a full router library isn't needed — this just keeps the
 * URL, browser back/forward, and in-page hash scrolling all in sync.
 */
export function RouterProvider({ children }) {
  const [path, setPath] = useState(currentPath());

  useEffect(() => {
    const onPopState = () => setPath(currentPath());
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  // Whenever the page changes, scroll to the requested hash (once the new
  // page has rendered) or back to the top.
  useEffect(() => {
    const hash = window.location.hash;
    const frame = requestAnimationFrame(() => {
      const el = hash ? document.querySelector(hash) : null;
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
    return () => cancelAnimationFrame(frame);
  }, [path]);

  const navigate = useCallback((href) => {
    const url = new URL(href, window.location.origin);
    const targetPath = url.pathname; // root-relative, e.g. '/services'
    const targetHash = url.hash;
    // Re-add the deployment sub-path (if any) only in the URL bar; app state
    // (`path`) always stays root-relative so every component's comparisons
    // (isActive, data-nav, etc.) work the same regardless of where it's hosted.
    const browserPath = BASE_PREFIX + (targetPath === '/' ? '/' : targetPath);

    if (targetPath !== currentPath()) {
      window.history.pushState({}, '', browserPath + targetHash);
      setPath(targetPath);
    } else {
      window.history.replaceState({}, '', browserPath + targetHash);
      const el = targetHash ? document.querySelector(targetHash) : null;
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  }, []);

  return <RouterContext.Provider value={{ path, navigate }}>{children}</RouterContext.Provider>;
}

export function useRouter() {
  const ctx = useContext(RouterContext);
  if (!ctx) throw new Error('useRouter must be used within a RouterProvider');
  return ctx;
}

/** Anchor that navigates through the router instead of a full page reload. */
export function RouterLink({ href, onClick, children, ...rest }) {
  const { navigate } = useRouter();
  // `href` is always the app's own root-relative path (e.g. '/services');
  // the rendered attribute additionally carries the deployment sub-path so
  // the link still resolves correctly for a real hard navigation — right-click
  // "open in new tab", middle-click, or a crawler that never fires onClick.
  const isInternal = href.startsWith('/');
  const resolvedHref = isInternal ? BASE_PREFIX + href : href;
  return (
    <a
      href={resolvedHref}
      onClick={(event) => {
        if (!isInternal) return; // let external/mailto/etc. links behave normally
        event.preventDefault();
        navigate(href);
        onClick?.(event);
      }}
      {...rest}
    >
      {children}
    </a>
  );
}
