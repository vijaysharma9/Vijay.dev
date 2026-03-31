'use client';

import { useRef } from 'react';
import { useInView } from 'framer-motion';

import { TESTIMONIALS } from '@/lib/work-data';
import { cn } from '@/utils/cn';

export default function WorkTestimonials() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      ref={ref}
      className="bg-[#0d0d18] px-[5vw] py-[100px] text-[#e8e8f0]"
      aria-labelledby="work-testimonials-heading"
    >
      <div className="inner mx-auto max-w-[1200px]">
        <div
          className={cn(
            'centered mb-10 text-center transition-all duration-700 ease-out',
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-7 opacity-0'
          )}
        >
          <p className="section-label mb-3 text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-[#4f8cff]">
            Client Feedback
          </p>
          <h2
            id="work-testimonials-heading"
            className="section-title font-heading text-[clamp(2rem,4vw,2.9rem)] font-extrabold leading-[1.1] tracking-[-0.02em]"
          >
            What Clients Say About{' '}
            <em className="not-italic bg-gradient-to-br from-[#4f8cff] to-[#a259ff] bg-clip-text text-transparent">
              The Work
            </em>
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t, idx) => (
            <article
              key={t.id}
              className={cn(
                't-card rounded-[16px] border border-white/[0.07] bg-[rgba(255,255,255,0.032)] p-7 text-left transition-colors duration-200 hover:border-[rgba(79,140,255,0.22)]',
                isInView ? 'translate-y-0 opacity-100' : 'translate-y-7 opacity-0'
              )}
              style={{ transitionDelay: isInView ? `${idx * 70}ms` : undefined }}
            >
              <div className="stars mb-4 text-[0.9rem] tracking-[0.1em] text-[#ffd24d]">★★★★★</div>
              <p className="t-quote mb-5 text-[0.88rem] leading-[1.7] italic text-[#e8e8f0]">
                {t.quote}
              </p>
              <div className="t-author flex items-center gap-[0.8rem]">
                <div
                  className="t-avatar flex h-[38px] w-[38px] items-center justify-center rounded-full font-heading text-[0.85rem] font-bold text-white"
                  style={{ background: t.avatarGradient }}
                >
                  {t.initials}
                </div>
                <div>
                  <div className="t-name text-[0.88rem] font-semibold">{t.name}</div>
                  <div className="t-role text-[0.76rem] text-[#7b7b99]">{t.role}</div>
                </div>
              </div>
              <span className="t-badge mt-2 inline-flex items-center gap-[0.3rem] rounded-full border border-[rgba(0,229,160,0.18)] bg-[rgba(0,229,160,0.07)] px-[0.55rem] py-[0.14rem] text-[0.68rem] text-[#00e5a0]">
                ✓ Verified via Upwork
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

