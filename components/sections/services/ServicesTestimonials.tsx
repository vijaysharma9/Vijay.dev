'use client';

import { useRef } from 'react';
import { useInView } from 'framer-motion';

import { cn } from '@/utils/cn';

const ITEMS = [
  {
    quote:
      '"Highly skilled developer with great communication. Delivered exactly what we needed — on time, on budget, and with exceptional quality."',
    initials: 'RK',
    gradient: 'linear-gradient(135deg,#4f8cff,#a259ff)',
    name: 'Rahul K.',
    role: 'Startup Founder, SaaS'
  },
  {
    quote:
      '"Fast, reliable, and very professional. The team handled everything end-to-end. We will definitely work together again on our next project."',
    initials: 'SP',
    gradient: 'linear-gradient(135deg,#a259ff,#ff4da6)',
    name: 'Sarah P.',
    role: 'eCommerce Owner'
  },
  {
    quote:
      '"Great experience from start to finish. They handled everything from frontend to backend perfectly. Communication was outstanding throughout."',
    initials: 'AM',
    gradient: 'linear-gradient(135deg,#00e5a0,#4f8cff)',
    name: 'Amit M.',
    role: 'Product Manager'
  }
];

export default function ServicesTestimonials() {
  const headerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(headerRef, { once: true, margin: '-80px' });

  return (
    <section className="bg-[#0d0d18] px-[5vw] py-[100px] text-[#e8e8f0]">
      <div className="mx-auto max-w-[1200px]">
        <div
          ref={headerRef}
          className={cn(
            'mb-12 text-center transition-all duration-700 ease-out',
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-7 opacity-0'
          )}
        >
          <p className="mb-4 text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-[#4f8cff]">
            Client Feedback
          </p>
          <h2 className="font-heading text-[clamp(2rem,4vw,2.9rem)] font-extrabold leading-[1.1] tracking-[-0.02em]">
            Real Reviews from{' '}
            <em className="not-italic bg-gradient-to-br from-[#4f8cff] to-[#a259ff] bg-clip-text text-transparent">
              Real Clients
            </em>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {ITEMS.map((t, i) => (
            <article
              key={t.name}
              className={cn(
                'rounded-2xl border border-white/[0.07] bg-[rgba(255,255,255,0.032)] p-8 transition-all duration-700 ease-out hover:border-[rgba(79,140,255,0.22)]',
                isInView ? 'translate-y-0 opacity-100' : 'translate-y-7 opacity-0'
              )}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="mb-4 text-[0.9rem] text-[#ffd24d]" aria-hidden>
                ★★★★★
              </div>
              <p className="mb-5 font-body text-[0.9rem] italic leading-[1.7] text-[#e8e8f0]">
                {t.quote}
              </p>
              <div className="flex items-center gap-3">
                <div
                  className="flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-full font-heading text-[0.85rem] font-bold text-white"
                  style={{ background: t.gradient }}
                >
                  {t.initials}
                </div>
                <div>
                  <div className="text-[0.88rem] font-semibold">{t.name}</div>
                  <div className="text-[0.78rem] text-[#7b7b99]">{t.role}</div>
                </div>
              </div>
              <span className="mt-2 inline-flex items-center gap-1 rounded-full border border-[rgba(0,229,160,0.2)] bg-[rgba(0,229,160,0.08)] px-2.5 py-0.5 text-[0.7rem] text-[#00e5a0]">
                ✓ Verified via Upwork
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
