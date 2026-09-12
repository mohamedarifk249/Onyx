import { useEffect, useRef } from 'react';

/**
 * Adds a `.is-visible` class to elements with the `.reveal` class
 * once they enter the viewport, powering the fade/slide-up
 * on-scroll animation used throughout the site.
 */
export default function useReveal(containerRef, deps = []) {
  useEffect(() => {
    const root = containerRef?.current || document;
    const targets = root.querySelectorAll('.reveal');

    if (!targets.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );

    targets.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [containerRef, ...deps]);
}
