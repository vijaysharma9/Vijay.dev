'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { useInView } from 'framer-motion';

import { cn } from '@/utils/cn';

const STATS = [
  { num: '50+', label: 'Projects Shipped' },
  { num: '8+', label: 'Years Experience' },
  { num: '3', label: 'Continents' },
  { num: '100%', label: 'Client Satisfaction' }
];

export default function WorkHero() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      ref={ref}
      aria-labelledby="work-hero-heading"
      className="relative flex min-h-screen items-center overflow-hidden px-[5vw] pb-20 pt-[120px] text-[#e8e8f0]"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-[100px] -top-[200px] h-[800px] w-[800px] rounded-full bg-[radial-gradient(circle,rgba(79,140,255,0.09)_0%,transparent_65%)]" />
        <div className="absolute -bottom-[100px] -right-[50px] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,rgba(0,229,160,0.07)_0%,transparent_65%)]" />
        <div className="absolute inset-0 bg-[length:55px_55px] [background-image:linear-gradient(rgba(255,255,255,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.018)_1px,transparent_1px)] [mask-image:linear-gradient(to_bottom,transparent,rgba(0,0,0,0.5)_25%,rgba(0,0,0,0.5)_75%,transparent)]" />
      </div>

      <div className="hero-inner">
        <div className="max-w-[900px]">
          <div
            className={cn(
              'mb-8 inline-flex items-center gap-2 rounded-full border border-[rgba(79,140,255,0.25)] bg-[rgba(79,140,255,0.1)] px-[0.9rem] py-[0.32rem] font-body text-[0.72rem] font-semibold uppercase tracking-[0.1em] text-[#4f8cff] transition-all duration-700 ease-out',
              isInView ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
            )}
          >
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#4f8cff]" aria-hidden />
            Our Work
          </div>

          <h1
            id="work-hero-heading"
            className={cn(
              'font-heading text-[clamp(2.8rem,7vw,5.2rem)] font-extrabold leading-[1.05] tracking-[-0.03em] text-[#e8e8f0] transition-all delay-75 duration-700 ease-out',
              isInView ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
            )}
          >
            Real Projects.
            <br />
            <em className="not-italic bg-gradient-to-br from-[#4f8cff] to-[#22c55e] bg-clip-text text-transparent">
              Real Results.
            </em>
          </h1>

          <p
            className={cn(
              'mt-6 max-w-[560px] font-body text-[1.1rem] leading-[1.75] text-[#7b7b99] transition-all delay-150 duration-700 ease-out',
              isInView ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
            )}
          >
            50+ projects shipped across SaaS, eCommerce, AI, HealthTech, and FinTech. Every case
            study here is a real engagement — no mockups, no demos, no filler.
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
              Start Your Project
            </Link>
            <a
              href="#all-work"
              className="rounded-lg border border-white/[0.07] px-[1.7rem] py-[0.72rem] text-[0.92rem] font-medium text-[#e8e8f0] transition hover:border-[#4f8cff] hover:text-[#4f8cff]"
            >
              Browse Case Studies ↓
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
                <div className="stat-label mt-1.5 tracking-[0.06em] text-[#7b7b99]">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

