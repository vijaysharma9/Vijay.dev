'use client';

import { useRef } from 'react';
import { useInView } from 'framer-motion';

import { PLANS } from '@/lib/pricing-data';
import { cn } from '@/utils/cn';
import PlanCard from '@/components/sections/pricing/PlanCard';

export default function PricingCards({ isAnnual }: { isAnnual: boolean }) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} id="plans" className="bg-[#09090f] px-[5vw] py-[100px] text-[#e8e8f0]">
      <div className="mx-auto max-w-[1200px]">
        <div className="grid gap-6 lg:grid-cols-3">
          {PLANS.map((plan, idx) => (
            <div key={plan.id} style={{ transitionDelay: isInView ? `${idx * 70}ms` : undefined }}>
              <PlanCard plan={plan} isAnnual={isAnnual} />
            </div>
          ))}
        </div>

        <div
          className={cn(
            'mt-8 grid items-center gap-8 rounded-[20px] border border-[rgba(79,140,255,0.2)] bg-[linear-gradient(135deg,rgba(79,140,255,0.08),rgba(162,89,255,0.08))] px-8 py-10 transition-all duration-700 ease-out lg:grid-cols-[1fr_auto]',
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-7 opacity-0'
          )}
        >
          <div>
            <div className="mb-2 text-[0.7rem] font-extrabold uppercase tracking-[0.1em] text-[#7b7b99]">
              Enterprise
            </div>
            <h3 className="mb-2 font-heading text-[1.4rem] font-extrabold leading-[1.2]">
              Custom Scope. Fixed-Price. No Surprises.
            </h3>
            <p className="max-w-[540px] text-[0.92rem] leading-[1.65] text-[#7b7b99]">
              Need a complex SaaS platform, enterprise-grade architecture, or a dedicated development
              team? We scope it properly and quote it fixed — no time-and-material billing.
            </p>

            <div className="mt-4 hidden flex-wrap gap-2 sm:flex">
              {['Dedicated Team', 'SLA Included', 'NDA on Request', 'Weekly Demos', 'Custom Contracts', 'Priority Support'].map(
                (t) => (
                  <span
                    key={t}
                    className="rounded-[5px] border border-[rgba(79,140,255,0.18)] bg-[rgba(79,140,255,0.08)] px-2 py-1 text-[0.72rem] font-medium text-[#4f8cff]"
                  >
                    {t}
                  </span>
                )
              )}
            </div>
          </div>

          <div className="flex min-w-[180px] flex-col gap-3">
            <a
              href="/hire"
              className="rounded-lg bg-[#4f8cff] px-6 py-3 text-center text-[0.92rem] font-semibold text-white shadow-[0_0_28px_rgba(79,140,255,0.22)] transition hover:-translate-y-0.5 hover:shadow-[0_0_40px_rgba(79,140,255,0.38)]"
            >
              Book Discovery Call
            </a>
            <a
              href="https://wa.me/918527594730?text=Hi%2C%20I%27d%20like%20to%20discuss%20a%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-white/[0.07] px-6 py-3 text-center text-[0.92rem] font-medium text-[#e8e8f0] transition hover:border-[#4f8cff] hover:text-[#4f8cff]"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

