import { useEffect } from 'react';

const SITE_NAME = 'Onyx';
const DEFAULT_DESCRIPTION =
  'Onyx delivers integrated engineering, instrumentation, automation, and calibration solutions for industrial and commercial organizations across Ethiopia. Endress+Hauser Authorized Service Provider.';

/**
 * Sets the document <title> and meta description per page. The site is a
 * tiny dependency-free SPA (see src/router.jsx) with a single static
 * index.html, so without this every page — Home, Services, About, Contact —
 * would share one generic title/description in the browser tab, bookmarks,
 * and search results. Call once per page component with page-specific copy.
 */
export default function usePageMeta(title, description = DEFAULT_DESCRIPTION) {
  useEffect(() => {
    document.title = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} | Industrial Engineering & Process Automation`;

    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'description');
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', description);
  }, [title, description]);
}
