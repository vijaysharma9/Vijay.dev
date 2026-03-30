import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/**
 * Adds `.visible` to elements matching `selector` as they enter the viewport.
 * Uses IntersectionObserver and respects `prefers-reduced-motion`.
 *
 * Re-runs when `pathname` changes so client navigations (e.g. /about → /) pick up
 * newly mounted `.reveal` nodes — otherwise sections stay opacity:0 forever.
 */
export function useScrollReveal(selector = '.reveal') {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const prefersReducedMotion = window.matchMedia?.(
      '(prefers-reduced-motion: reduce)'
    )?.matches;

    let observer: IntersectionObserver | null = null;
    let cancelled = false;

    const applyReducedMotion = () => {
      document.querySelectorAll<HTMLElement>(selector).forEach((el) => {
        el.classList.add('visible');
      });
    };

    const setupObserver = () => {
      const elements = Array.from(document.querySelectorAll<HTMLElement>(selector));
      if (elements.length === 0) return;

      observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              (entry.target as HTMLElement).classList.add('visible');
              observer?.unobserve(entry.target);
            }
          }
        },
        { threshold: 0.12 }
      );

      for (const el of elements) observer.observe(el);
    };

    const run = () => {
      if (cancelled) return;

      if (prefersReducedMotion) {
        applyReducedMotion();
        return;
      }

      setupObserver();
    };

    // Defer until after Next.js has committed the new route’s DOM.
    const timeoutId = window.setTimeout(run, 0);

    return () => {
      cancelled = true;
      clearTimeout(timeoutId);
      observer?.disconnect();
    };
  }, [selector, pathname]);
}
