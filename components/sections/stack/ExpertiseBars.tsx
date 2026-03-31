'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

import {
  EXPERTISE_GROUPS,
  type ExpertiseBar,
  type ExpertiseBarVariant
} from '@/lib/stack-data';
import { cn } from '@/utils/cn';

const VARIANT: Record<ExpertiseBarVariant, string> = {
  default: 'bg-gradient-to-r from-[#4f8cff] to-[#a259ff]',
  green: 'bg-gradient-to-r from-[#00e5a0] to-[#00d4ff]',
  orange: 'bg-gradient-to-r from-[#ff7a45] to-[#ffd24d]',
  pink: 'bg-gradient-to-r from-[#ff4da6] to-[#a259ff]'
};

function AnimatedBar({ bar }: { bar: ExpertiseBar }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const inView = useInView(trackRef, { once: true, margin: '-80px' });

  return (
    <div className="mb-4">
      <div className="mb-1.5 flex justify-between text-[0.85rem] text-[#e8e8f0]">
        <span>{bar.name}</span>
        <span className="text-[0.78rem] font-semibold text-[#4f8cff]">{bar.years}</span>
      </div>
      <div
        ref={trackRef}
        className="h-[5px] overflow-hidden rounded-[10px] bg-white/[0.05]"
      >
        <motion.div
          className={cn('h-full rounded-[10px]', VARIANT[bar.variant])}
          initial={{ width: 0 }}
          animate={inView ? { width: `${bar.pct}%` } : { width: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        />
      </div>
    </div>
  );
}

export default function ExpertiseBars() {
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, margin: '-80px' });

  const g = EXPERTISE_GROUPS;

  return (
    <section className="bg-[#09090f] px-[5vw] py-[100px] text-[#e8e8f0]">
      <div className="mx-auto max-w-[1200px]">
        <div
          ref={headerRef}
          className={cn(
            'text-center transition-all duration-700 ease-out',
            headerInView ? 'translate-y-0 opacity-100' : 'translate-y-7 opacity-0'
          )}
        >
          <p className="mb-4 text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-[#4f8cff]">
            Depth of Knowledge
          </p>
          <h2 className="font-heading text-[clamp(2rem,4vw,2.9rem)] font-extrabold leading-[1.1] tracking-[-0.02em]">
            Not Just{' '}
            <em className="not-italic bg-gradient-to-br from-[#4f8cff] to-[#a259ff] bg-clip-text text-transparent">
              Familiarity
            </em>{' '}
            — Real Depth
          </h2>
          <p className="mx-auto mt-4 max-w-[500px] font-body text-base leading-[1.75] text-[#7b7b99]">
            Years of production experience, not tutorial hours.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div className="flex flex-col gap-8">
            <div>
              <h3 className="mb-5 font-heading text-base font-bold text-[#4f8cff]">
                {g[0]?.label}
              </h3>
              {g[0]?.bars.map((bar) => (
                <AnimatedBar key={bar.name} bar={bar} />
              ))}
            </div>
            <div>
              <h3 className="mb-5 font-heading text-base font-bold text-[#4f8cff]">
                {g[1]?.label}
              </h3>
              {g[1]?.bars.map((bar) => (
                <AnimatedBar key={bar.name} bar={bar} />
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <div>
              <h3 className="mb-5 font-heading text-base font-bold text-[#4f8cff]">
                {g[2]?.label}
              </h3>
              {g[2]?.bars.map((bar) => (
                <AnimatedBar key={bar.name} bar={bar} />
              ))}
            </div>
            <div>
              <h3 className="mb-5 font-heading text-base font-bold text-[#4f8cff]">
                {g[3]?.label}
              </h3>
              {g[3]?.bars.map((bar) => (
                <AnimatedBar key={bar.name} bar={bar} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
