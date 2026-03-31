'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

import { FEATURED_CASE } from '@/lib/work-data';
import { cn } from '@/utils/cn';

const INTERVAL_MS = 100;

export default function FeaturedCaseStudy() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });
  const [visibleLines, setVisibleLines] = useState<string[]>([]);

  useEffect(() => {
    if (!isInView) return;

    let index = 0;
    setVisibleLines([]);

    const id = window.setInterval(() => {
      index += 1;
      setVisibleLines(FEATURED_CASE.terminalLines.slice(0, index));

      if (index >= FEATURED_CASE.terminalLines.length) {
        window.clearInterval(id);
      }
    }, INTERVAL_MS);

    return () => window.clearInterval(id);
  }, [isInView]);

  return (
    <section
      ref={sectionRef}
      className="featured bg-[#09090f] px-[5vw] py-[100px] text-[#e8e8f0]"
      aria-labelledby="featured-case-heading"
    >
      <div className="inner mx-auto max-w-[1200px]">
        <p
          className={cn(
            'section-label mb-6 text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-[#4f8cff] transition-all duration-700 ease-out',
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-7 opacity-0'
          )}
        >
          Featured Case Study
        </p>

        <div
          className={cn(
            'feat-card grid overflow-hidden rounded-[20px] border border-white/[0.07] bg-[#0d0d18] transition-colors duration-300 lg:grid-cols-2',
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-7 opacity-0'
          )}
        >
          <div className="feat-visual relative flex min-h-[320px] items-center justify-center overflow-hidden bg-[linear-gradient(135deg,#0d0d20,#12122a)]">
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(79,140,255,0.08),rgba(0,229,160,0.06))]" />
            <div className="feat-mock relative z-[1] w-[85%] max-w-[380px] rounded-[12px] border border-[rgba(79,140,255,0.2)] bg-[#0a0a15] p-[1.2rem] font-mono text-[0.75rem] leading-relaxed text-[#4ade80]">
              <div className="mock-bar mb-4 flex gap-[0.4rem]">
                <span className="m-dot r h-[10px] w-[10px] rounded-full bg-[#ff5f57]" />
                <span className="m-dot y h-[10px] w-[10px] rounded-full bg-[#febc2e]" />
                <span className="m-dot g h-[10px] w-[10px] rounded-full bg-[#28c840]" />
              </div>
              <div className="space-y-1.5">
                {visibleLines.map((line, idx) => (
                  <div
                    // eslint-disable-next-line react/no-array-index-key
                    key={idx}
                    className="mock-line text-[0.75rem]"
                  >
                    {line}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="feat-content px-8 py-10 md:px-10">
            <div className="mb-5 inline-flex items-center gap-[0.4rem] rounded-full border border-[rgba(0,229,160,0.2)] bg-[rgba(0,229,160,0.08)] px-[0.7rem] py-[0.22rem] text-[0.7rem] font-semibold uppercase tracking-[0.06em] text-[#00e5a0]">
              {FEATURED_CASE.eyebrow}
            </div>
            <h2
              id="featured-case-heading"
              className="feat-title mb-3 font-heading text-[1.8rem] font-extrabold leading-[1.15] tracking-[-0.02em]"
            >
              {FEATURED_CASE.title}
            </h2>
            <p className="feat-desc mb-6 text-[0.92rem] leading-[1.75] text-[#7b7b99]">
              {FEATURED_CASE.description}
            </p>

            <dl className="feat-meta mb-7 grid grid-cols-2 gap-3">
              <div className="meta-item rounded-[10px] border border-white/[0.07] bg-[rgba(255,255,255,0.032)] px-4 py-3.5">
                <dt className="meta-label mb-1 text-[0.65rem] uppercase tracking-[0.08em] text-[#7b7b99]">
                  Industry
                </dt>
                <dd className="meta-value text-[0.88rem] font-semibold text-[#e8e8f0]">
                  {FEATURED_CASE.industry}
                </dd>
              </div>
              <div className="meta-item rounded-[10px] border border-white/[0.07] bg-[rgba(255,255,255,0.032)] px-4 py-3.5">
                <dt className="meta-label mb-1 text-[0.65rem] uppercase tracking-[0.08em] text-[#7b7b99]">
                  Timeline
                </dt>
                <dd className="meta-value text-[0.88rem] font-semibold text-[#e8e8f0]">
                  {FEATURED_CASE.timeline}
                </dd>
              </div>
              <div className="meta-item rounded-[10px] border border-white/[0.07] bg-[rgba(255,255,255,0.032)] px-4 py-3.5">
                <dt className="meta-label mb-1 text-[0.65rem] uppercase tracking-[0.08em] text-[#7b7b99]">
                  Team Size
                </dt>
                <dd className="meta-value text-[0.88rem] font-semibold text-[#e8e8f0]">
                  {FEATURED_CASE.teamSize}
                </dd>
              </div>
              <div className="meta-item rounded-[10px] border border-white/[0.07] bg-[rgba(255,255,255,0.032)] px-4 py-3.5">
                <dt className="meta-label mb-1 text-[0.65rem] uppercase tracking-[0.08em] text-[#7b7b99]">
                  Region
                </dt>
                <dd className="meta-value text-[0.88rem] font-semibold text-[#e8e8f0]">
                  {FEATURED_CASE.region}
                </dd>
              </div>
            </dl>

            <div className="feat-results mb-6 flex flex-wrap gap-6 rounded-[10px] border border-[rgba(0,229,160,0.12)] bg-[rgba(0,229,160,0.05)] px-5 py-4">
              {FEATURED_CASE.results.map((r) => (
                <div key={r.label} className="result-item text-center">
                  <div className="result-num font-heading text-[1.4rem] font-extrabold text-[#00e5a0]">
                    {r.num}
                  </div>
                  <div className="result-label mt-[0.2rem] text-[0.7rem] text-[#7b7b99]">
                    {r.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="feat-stack mb-6 flex flex-wrap gap-[0.4rem]">
              {FEATURED_CASE.stack.map((s) => (
                <span
                  key={s}
                  className="stack-tag rounded-[5px] border border-white/[0.07] bg-[rgba(255,255,255,0.04)] px-2 py-[0.18rem] text-[0.72rem] text-[#7b7b99]"
                >
                  {s}
                </span>
              ))}
            </div>

            <a
              href={`#${FEATURED_CASE.anchorId}`}
              className="case-link inline-flex items-center gap-[0.5rem] text-[0.88rem] font-semibold text-[#4f8cff] transition-[gap] duration-200 hover:gap-3"
            >
              Read Full Case Study →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

