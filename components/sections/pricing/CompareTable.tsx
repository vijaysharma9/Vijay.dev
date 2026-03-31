'use client';

import { Fragment, useRef } from 'react';
import { useInView } from 'framer-motion';

import { COMPARE_ROWS } from '@/lib/pricing-data';
import { cn } from '@/utils/cn';

function cellClass(val: string) {
  if (val === '✓') return 'text-[#00e5a0] font-semibold';
  if (val === '—') return 'text-[#7b7b99]';
  return 'text-[#e8e8f0] font-medium';
}

export default function CompareTable() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="bg-[#0d0d18] px-[5vw] py-[100px] text-[#e8e8f0]">
      <div className="mx-auto max-w-[1200px]">
        <div
          className={cn(
            'centered text-center transition-all duration-700 ease-out',
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-7 opacity-0'
          )}
        >
          <p className="section-label mb-3 text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-[#4f8cff]">
            Full Comparison
          </p>
          <h2 className="section-title font-heading text-[clamp(2rem,4vw,2.9rem)] font-extrabold leading-[1.1] tracking-[-0.02em]">
            What&apos;s Included in{' '}
            <em className="not-italic bg-gradient-to-br from-[#4f8cff] to-[#a259ff] bg-clip-text text-transparent">
              Each Plan
            </em>
          </h2>
          <p className="section-sub mx-auto mt-4 max-w-[500px] text-[1rem] leading-[1.75] text-[#7b7b99]">
            Everything side by side so you can pick the right fit without guessing.
          </p>
        </div>

        <div
          className={cn(
            'mt-10 overflow-x-auto rounded-[16px] border border-white/[0.07] transition-all duration-700 ease-out',
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-7 opacity-0'
          )}
        >
          <table className="min-w-[720px] w-full border-collapse text-[0.87rem]">
            <thead>
              <tr className="border-b border-white/[0.07]">
                <th className="w-[35%] px-5 py-4 text-left font-heading text-[0.75rem] font-bold uppercase tracking-[0.07em] text-[#e8e8f0]">
                  Feature
                </th>
                <th className="px-5 py-4 text-left font-heading text-[0.75rem] font-bold uppercase tracking-[0.07em] text-[#7b7b99]">
                  Starter
                </th>
                <th className="bg-[rgba(79,140,255,0.03)] px-5 py-4 text-left font-heading text-[0.75rem] font-bold uppercase tracking-[0.07em] text-[#4f8cff]">
                  Growth
                </th>
                <th className="px-5 py-4 text-left font-heading text-[0.75rem] font-bold uppercase tracking-[0.07em] text-[#a259ff]">
                  Scale
                </th>
                <th className="px-5 py-4 text-left font-heading text-[0.75rem] font-bold uppercase tracking-[0.07em] text-[#00e5a0]">
                  Enterprise
                </th>
              </tr>
            </thead>
            <tbody>
              {COMPARE_ROWS.map((section) => (
                <Fragment key={section.title}>
                  <tr className="bg-[rgba(255,255,255,0.02)]">
                    <td
                      colSpan={5}
                      className="px-5 py-3 font-heading text-[0.7rem] font-bold uppercase tracking-[0.08em] text-[#7b7b99]"
                    >
                      {section.title}
                    </td>
                  </tr>
                  {section.rows.map((row) => (
                    <tr key={`${section.title}:${row.label}`} className="border-b border-white/[0.07] last:border-b-0 hover:bg-white/[0.01]">
                      <td className="px-5 py-4 text-[#e8e8f0]">{row.label}</td>
                      <td className={cn('px-5 py-4', cellClass(row.starter))}>{row.starter}</td>
                      <td className={cn('bg-[rgba(79,140,255,0.03)] px-5 py-4', cellClass(row.growth))}>
                        {row.growth}
                      </td>
                      <td className={cn('px-5 py-4', cellClass(row.scale))}>{row.scale}</td>
                      <td className={cn('px-5 py-4', cellClass(row.enterprise))}>{row.enterprise}</td>
                    </tr>
                  ))}
                </Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

