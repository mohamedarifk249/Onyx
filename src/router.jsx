import { createContext, useCallback, useContext, useEffect, useState } from 'react';

const RouterContext = createContext(null);

function currentPath() {
  return window.location.pathname || '/';
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
    const targetPath = url.pathname;
    const targetHash = url.hash;

    if (targetPath !== currentPath()) {
      window.history.pushState({}, '', targetPath + targetHash);
      setPath(targetPath);
    } else {
      window.history.replaceState({}, '', targetPath + targetHash);
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
  return (
    <a
      href={href}
      onClick={(event) => {
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
