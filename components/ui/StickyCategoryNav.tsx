'use client';

import { useEffect, useState } from 'react';

import { cn } from '@/utils/cn';

export type StickyCategoryNavItem = {
  id: string;
  label: string;
};

export default function StickyCategoryNav({
  items,
  defaultActiveId,
  className,
  innerClassName,
  topOffsetPx = 64
}: {
  items: StickyCategoryNavItem[];
  defaultActiveId: string;
  className?: string;
  innerClassName?: string;
  /**
   * Root margin uses this to compensate for fixed header height.
   * Default matches the 64px nav.
   */
  topOffsetPx?: number;
}) {
  const [activeId, setActiveId] = useState(defaultActiveId);

  useEffect(() => {
    const ids = items.map((i) => i.id);
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length === 0) return;
        const sorted = [...visible].sort(
          (a, b) => a.boundingClientRect.top - b.boundingClientRect.top
        );
        const first = sorted[0];
        if (!first) return;
        const id = first.target.id;
        if (id) setActiveId(id);
      },
      {
        root: null,
        rootMargin: `-${topOffsetPx}px 0px -45% 0px`,
        threshold: [0, 0.05, 0.1, 0.25]
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [items, topOffsetPx]);

  return (
    <div
      className={cn(
        'sticky top-16 z-[90] border-b border-white/[0.07] bg-[#0d0d18] px-[5vw]',
        className
      )}
    >
      <div className={cn('mx-auto flex max-w-[1200px] flex-wrap', innerClassName)}>
        {items.map((item) => {
          const isActive = activeId === item.id;
          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={cn(
                'whitespace-nowrap rounded-full border px-[10px] py-1.5 text-[0.78rem] font-medium transition-colors',
                isActive
                  ? 'border-[rgba(79,140,255,0.35)] bg-[rgba(79,140,255,0.12)] text-[#4f8cff]'
                  : 'border-white/[0.07] bg-[rgba(255,255,255,0.032)] text-[#7b7b99] hover:border-[rgba(79,140,255,0.35)] hover:bg-[rgba(79,140,255,0.12)] hover:text-[#4f8cff]'
              )}
            >
              {item.label}
            </a>
          );
        })}
      </div>
    </div>
  );
}

