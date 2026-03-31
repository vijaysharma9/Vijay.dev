'use client';

import { useRef } from 'react';
import { useInView } from 'framer-motion';

import { COMPARE_ROWS, type CompareTone } from '@/lib/stack-data';
import { cn } from '@/utils/cn';

function toneClass(tone: CompareTone) {
  if (tone === 'yes') return 'font-semibold text-[#00e5a0]';
  if (tone === 'no') return 'text-[#7b7b99]';
  return 'text-[#ffd24d]';
}

export default function StackCompare() {
  const headerRef = useRef<HTMLDivElement>(null);
  const tableRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, margin: '-80px' });
  const tableInView = useInView(tableRef, { once: true, margin: '-80px' });

  return (
    <section className="bg-[#0d0d18] px-[5vw] py-[100px] text-[#e8e8f0]">
      <div className="mx-auto max-w-[1200px]">
        <div
          ref={headerRef}
          className={cn(
            'transition-all duration-700 ease-out',
            headerInView ? 'translate-y-0 opacity-100' : 'translate-y-7 opacity-0'
          )}
        >
          <p className="mb-4 text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-[#4f8cff]">
            Why Stack Depth Matters
          </p>
          <h2 className="font-heading text-[clamp(2rem,4vw,2.9rem)] font-extrabold leading-[1.1] tracking-[-0.02em]">
            Senior Stack vs{' '}
            <em className="not-italic bg-gradient-to-br from-[#4f8cff] to-[#a259ff] bg-clip-text text-transparent">
              Generic Dev
            </em>
          </h2>
          <p className="mt-4 max-w-[500px] font-body text-base leading-[1.75] text-[#7b7b99]">
            The difference between knowing a framework and mastering it for production.
          </p>
        </div>

        <div
          ref={tableRef}
          className={cn(
            'mt-10 overflow-x-auto transition-all delay-100 duration-700 ease-out',
            tableInView ? 'translate-y-0 opacity-100' : 'translate-y-7 opacity-0'
          )}
        >
          <table className="w-full min-w-[640px] border-collapse text-[0.87rem]">
            <thead>
              <tr>
                <th className="border-b border-white/[0.07] px-5 py-3 text-left font-heading text-[0.75rem] font-bold uppercase tracking-[0.06em] text-[#7b7b99]">
                  Scenario
                </th>
                <th className="border-b border-white/[0.07] px-5 py-3 text-left font-heading text-[0.75rem] font-bold uppercase tracking-[0.06em] text-[#4f8cff]">
                  HireDeveloperShop
                </th>
                <th className="border-b border-white/[0.07] px-5 py-3 text-left font-heading text-[0.75rem] font-bold uppercase tracking-[0.06em] text-[#7b7b99]">
                  Generic Dev
                </th>
              </tr>
            </thead>
            <tbody>
              {COMPARE_ROWS.map((row) => (
                <tr key={row.scenario} className="hover:bg-white/[0.015]">
                  <td className="border-b border-white/[0.07] px-5 py-3 text-[#e8e8f0]">
                    {row.scenario}
                  </td>
                  <td
                    className={cn(
                      'border-b border-white/[0.07] px-5 py-3 bg-[rgba(79,140,255,0.04)]',
                      toneClass(row.hireDeveloperShop.tone)
                    )}
                  >
                    {row.hireDeveloperShop.text}
                  </td>
                  <td
                    className={cn(
                      'border-b border-white/[0.07] px-5 py-3',
                      toneClass(row.genericDev.tone)
                    )}
                  >
                    {row.genericDev.text}
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
