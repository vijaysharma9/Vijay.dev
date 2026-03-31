'use client';

import { useRef } from 'react';
import { useInView } from 'framer-motion';

import { COMPARISON_ROWS, type ComparisonTone } from '@/lib/services-data';
import { cn } from '@/utils/cn';

function toneClass(tone: ComparisonTone) {
  if (tone === 'yes') return 'font-bold text-[#00e5a0]';
  if (tone === 'no') return 'text-[#7b7b99]';
  return 'text-[#ffd24d]';
}

export default function ComparisonTable() {
  const headerRef = useRef<HTMLDivElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, margin: '-80px' });
  const tableInView = useInView(wrapRef, { once: true, margin: '-80px' });

  return (
    <section className="bg-[#09090f] px-[5vw] py-[100px] text-[#e8e8f0]">
      <div className="mx-auto max-w-[1200px]">
        <div
          ref={headerRef}
          className={cn(
            'transition-all duration-700 ease-out',
            headerInView ? 'translate-y-0 opacity-100' : 'translate-y-7 opacity-0'
          )}
        >
          <p className="mb-4 text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-[#4f8cff]">
            Why Senior-Only Matters
          </p>
          <h2 className="font-heading text-[clamp(2rem,4vw,2.9rem)] font-extrabold leading-[1.1] tracking-[-0.02em]">
            HireDeveloperShop vs{' '}
            <em className="not-italic bg-gradient-to-br from-[#4f8cff] to-[#a259ff] bg-clip-text text-transparent">
              The Alternatives
            </em>
          </h2>
          <p className="mt-4 max-w-[500px] font-body text-base leading-[1.75] text-[#7b7b99]">
            See exactly what you get — and what you avoid.
          </p>
        </div>

        <div
          ref={wrapRef}
          className={cn(
            'mt-10 overflow-x-auto transition-all delay-100 duration-700 ease-out',
            tableInView ? 'translate-y-0 opacity-100' : 'translate-y-7 opacity-0'
          )}
        >
          <table className="w-full min-w-[640px] border-collapse text-[0.88rem]">
            <thead>
              <tr>
                <th className="border-b border-white/[0.07] px-6 py-4 text-left font-heading text-[0.78rem] font-bold uppercase tracking-[0.06em] text-[#7b7b99]">
                  What You Care About
                </th>
                <th className="border-b border-white/[0.07] px-6 py-4 text-left font-heading text-[0.78rem] font-bold uppercase tracking-[0.06em] text-[#4f8cff]">
                  HireDeveloperShop
                </th>
                <th className="border-b border-white/[0.07] px-6 py-4 text-left font-heading text-[0.78rem] font-bold uppercase tracking-[0.06em] text-[#7b7b99]">
                  Large Agency
                </th>
                <th className="border-b border-white/[0.07] px-6 py-4 text-left font-heading text-[0.78rem] font-bold uppercase tracking-[0.06em] text-[#7b7b99]">
                  Junior Freelancer
                </th>
                <th className="border-b border-white/[0.07] px-6 py-4 text-left font-heading text-[0.78rem] font-bold uppercase tracking-[0.06em] text-[#7b7b99]">
                  Offshore Team
                </th>
              </tr>
            </thead>
            <tbody>
              {COMPARISON_ROWS.map((row) => (
                <tr key={row.feature} className="hover:bg-white/[0.015]">
                  <td className="border-b border-white/[0.07] px-6 py-4 text-[#e8e8f0]">
                    {row.feature}
                  </td>
                  <td
                    className={cn(
                      'border-b border-white/[0.07] px-6 py-4 text-[#e8e8f0] bg-[rgba(79,140,255,0.04)]',
                      toneClass(row.hireDeveloperShop.tone)
                    )}
                  >
                    {row.hireDeveloperShop.text}
                  </td>
                  <td
                    className={cn(
                      'border-b border-white/[0.07] px-6 py-4',
                      toneClass(row.largeAgency.tone)
                    )}
                  >
                    {row.largeAgency.text}
                  </td>
                  <td
                    className={cn(
                      'border-b border-white/[0.07] px-6 py-4',
                      toneClass(row.juniorFreelancer.tone)
                    )}
                  >
                    {row.juniorFreelancer.text}
                  </td>
                  <td
                    className={cn(
                      'border-b border-white/[0.07] px-6 py-4',
                      toneClass(row.offshoreTeam.tone)
                    )}
                  >
                    {row.offshoreTeam.text}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
