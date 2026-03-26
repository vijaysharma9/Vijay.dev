import { useEffect } from 'react';

/**
 * Adds `.visible` to elements matching `selector` as they enter the viewport.
 * Uses IntersectionObserver and respects `prefers-reduced-motion`.
 */
export function useScrollReveal(selector = '.reveal') {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const prefersReducedMotion = window.matchMedia?.(
      '(prefers-reduced-motion: reduce)'
    )?.matches;

    if (prefersReducedMotion) {
      document.querySelectorAll(selector).forEach((el) => el.classList.add('visible'));
      return;
    }

    const elements = Array.from(document.querySelectorAll<HTMLElement>(selector));
    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).classList.add('visible');
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12 }
    );

    for (const el of elements) observer.observe(el);

    return () => observer.disconnect();
  }, [selector]);
}

