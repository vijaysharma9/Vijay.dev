'use client';

import { useRef } from 'react';
import { useInView } from 'framer-motion';

import { ABOUT_MISSION } from '@/lib/about-data';
import { cn } from '@/utils/cn';

const iconToneClass = {
  blue: 'bg-[rgba(79,140,255,0.1)]',
  purple: 'bg-[rgba(162,89,255,0.1)]',
  cyan: 'bg-[rgba(0,229,255,0.1)]'
} as const;

export default function AboutMission() {
  const headerRef = useRef<HTMLDivElement>(null);
  const inHeader = useInView(headerRef, { once: true, amount: 0.2 });

  return (
    <section aria-labelledby="about-mission-title" className="bg-[#09090f] px-[5vw] py-[100px] text-[#e8e8f0]">
      <div className="mx-auto max-w-[1200px]">
        <div
          ref={headerRef}
          className={cn(
            'mb-16 text-center transition-all duration-[650ms] ease-out',
            inHeader ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          )}
        >
          <p className="mb-4 font-body text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-[#4f8cff]">
            {ABOUT_MISSION.sectionLabel}
          </p>
          <h2
            id="about-mission-title"
            className="font-heading text-[clamp(2rem,4vw,3rem)] font-extrabold leading-[1.1] tracking-[-0.02em]"
          >
            {ABOUT_MISSION.titleLine1}
            <em className="not-italic bg-gradient-to-br from-[#4f8cff] to-[#a259ff] bg-clip-text text-transparent">
              {ABOUT_MISSION.titleEmphasis}
            </em>
          </h2>
          <p className="mx-auto mt-4 max-w-[520px] font-body text-[1.05rem] leading-[1.7] text-[#7b7b99]">
            {ABOUT_MISSION.sub}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {ABOUT_MISSION.cards.map((card, index) => (
            <MissionCard key={card.id} card={card} delayIndex={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function MissionCard({
  card,
  delayIndex
}: {
  card: (typeof ABOUT_MISSION.cards)[number];
  delayIndex: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <div
      ref={ref}
      className={cn(
        'group relative overflow-hidden rounded-2xl border border-[rgba(255,255,255,0.07)] bg-[rgba(255,255,255,0.035)] p-8 transition-all duration-[650ms] ease-out after:absolute after:bottom-0 after:left-0 after:right-0 after:h-px after:bg-gradient-to-r after:from-transparent after:via-[#4f8cff] after:to-transparent after:opacity-0 after:transition-opacity group-hover:after:opacity-100 hover:-translate-y-1 hover:border-[rgba(79,140,255,0.3)]',
        isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      )}
      style={{ transitionDelay: `${delayIndex * 80}ms` }}
    >
      <div
        className={cn(
          'mb-5 flex h-12 w-12 items-center justify-center rounded-xl text-2xl',
          iconToneClass[card.iconTone]
        )}
        aria-hidden
      >
        {card.icon}
      </div>
      <h3 className="mb-3 font-heading text-[1.1rem] font-bold">{card.title}</h3>
      <p className="font-body text-[0.9rem] leading-[1.65] text-[#7b7b99]">{card.description}</p>
    </div>
  );
}
