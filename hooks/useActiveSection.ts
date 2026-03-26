import { useEffect, useState } from 'react';

/**
 * Scroll-spy helper that returns the section id closest to the top.
 * Mirrors the legacy logic from the static HTML to keep UX consistent.
 */
export function useActiveSection(sectionIds: string[]) {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (elements.length === 0) return;

    const onScroll = () => {
      const scrollY = window.scrollY + 120;
      let current = '';

      for (const section of elements) {
        if (section.offsetTop <= scrollY) current = section.id;
      }

      setActiveId(current ? current : null);
    };

    onScroll();

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('load', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('load', onScroll);
    };
  }, [sectionIds]);

  return activeId;
}

