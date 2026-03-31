'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';

import { HERO_BADGES } from '@/lib/stack-data';
import { cn } from '@/utils/cn';

const STATS = [
  { num: '60+', label: 'Technologies' },
  { num: '8+', label: 'Years in Production' },
  { num: '12', label: 'AI Tools Mastered' },
  { num: '50+', label: 'Projects Shipped' }
];

const badgeContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.15 }
  }
};

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const }
  }
};

export default function StackHero() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      ref={ref}
      aria-labelledby="stack-hero-heading"
      className="relative flex min-h-screen items-center overflow-hidden px-[5vw] pb-20 pt-[120px] text-[#e8e8f0]"
    >
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute -left-[100px] -top-[200px] h-[800px] w-[800px] rounded-full bg-[radial-gradient(circle,rgba(79,140,255,0.09)_0%,transparent_65%)]"
          aria-hidden
        />
        <div
          className="absolute -bottom-[100px] -right-[50px] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,rgba(162,89,255,0.08)_0%,transparent_65%)]"
          aria-hidden
        />
        <div
          className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,rgba(0,0,0,0.5)_25%,rgba(0,0,0,0.5)_75%,transparent)] bg-[length:55px_55px] [background-image:linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)]"
          aria-hidden
        />
      </div>

      <div className="hero-inner">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_auto]">
          <div className="max-w-[900px]">
          <div
            className={cn(
              'mb-8 inline-flex items-center gap-2 rounded-full border border-[rgba(79,140,255,0.25)] bg-[rgba(79,140,255,0.1)] px-[0.9rem] py-[0.32rem] font-body text-[0.72rem] font-semibold uppercase tracking-[0.1em] text-[#4f8cff] transition-all duration-700 ease-out',
              isInView ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
            )}
          >
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#4f8cff]" aria-hidden />
            Our Technology
          </div>

          <h1
            id="stack-hero-heading"
            className={cn(
              'font-heading text-[clamp(2.8rem,7vw,5.2rem)] font-extrabold leading-[1.05] tracking-[-0.03em] text-[#e8e8f0] transition-all delay-75 duration-700 ease-out',
              isInView ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
            )}
          >
            60+ Technologies.
            <br />
            <em className="not-italic bg-gradient-to-br from-[#4f8cff] to-[#a259ff] bg-clip-text text-transparent">
              Zero Trend-Chasing.
            </em>
          </h1>

          <p
            className={cn(
              'mt-6 max-w-[580px] font-body text-[1.1rem] leading-[1.75] text-[#7b7b99] transition-all delay-150 duration-700 ease-out',
              isInView ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
            )}
          >
            A battle-hardened stack built from 8+ years of real production projects — not tutorials.
            Every tool on this page has earned its place through shipping actual products.
          </p>

          <div
            className={cn(
              'mt-10 flex flex-wrap gap-4 transition-all delay-200 duration-700 ease-out',
              isInView ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
            )}
          >
            <Link
              href="/hire"
              className="rounded-lg bg-[#4f8cff] px-[1.7rem] py-[0.72rem] text-[0.92rem] font-semibold text-white shadow-[0_0_28px_rgba(79,140,255,0.22)] transition hover:-translate-y-0.5 hover:shadow-[0_0_40px_rgba(79,140,255,0.38)]"
            >
              Discuss Your Stack
            </Link>
            <a
              href="#all-stacks"
              className="rounded-lg border border-white/[0.07] px-[1.7rem] py-[0.72rem] text-[0.92rem] font-medium text-[#e8e8f0] transition hover:border-[#4f8cff] hover:text-[#4f8cff]"
            >
              Explore Technologies ↓
            </a>
          </div>

          <div
            className={cn(
              'mt-16 flex flex-wrap gap-12 transition-all delay-300 duration-700 ease-out',
              isInView ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
            )}
          >
            {STATS.map((s) => (
              <div key={s.label}>
                <span className="stat-number block text-[2.2rem]">{s.num}</span>
                <div className="stat-label mt-1.5 tracking-[0.06em] text-[#7b7b99]">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

          <motion.div
            className="hidden flex-col gap-3 lg:flex"
            variants={badgeContainer}
            initial="hidden"
            animate="show"
          >
            {HERO_BADGES.map((b) => (
              <motion.div
                key={b.label}
                variants={fadeUp}
                className="flex items-center gap-2 rounded-[10px] border border-white/[0.07] bg-[rgba(255,255,255,0.032)] px-4 py-2.5 text-[0.78rem] font-semibold text-[#e8e8f0] transition-colors hover:border-[rgba(79,140,255,0.4)]"
              >
                <span className={cn('h-2 w-2 shrink-0 rounded-full', b.dotClass)} aria-hidden />
                {b.label}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
