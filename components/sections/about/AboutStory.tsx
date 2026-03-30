'use client';

import { useRef } from 'react';
import { useInView } from 'framer-motion';

import { ABOUT_STORY } from '@/lib/about-data';
import { cn } from '@/utils/cn';

export default function AboutStory() {
  const contentRef = useRef<HTMLDivElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);
  const inContent = useInView(contentRef, { once: true, amount: 0.15 });
  const inVisual = useInView(visualRef, { once: true, amount: 0.12 });

  return (
    <section
      aria-labelledby="about-story-title"
      className="bg-[#0f0f1a] px-[5vw] py-[100px] text-[#e8e8f0]"
    >
      <div className="mx-auto grid max-w-[1200px] items-center gap-[5vw] md:grid-cols-2">
        <div
          ref={contentRef}
          className={cn(
            'transition-all duration-[650ms] ease-out',
            inContent ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          )}
        >
          <p className="mb-4 font-body text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-[#4f8cff]">
            {ABOUT_STORY.sectionLabel}
          </p>
          <h2
            id="about-story-title"
            className="font-heading text-[clamp(2rem,4vw,3rem)] font-extrabold leading-[1.1] tracking-[-0.02em]"
          >
            {ABOUT_STORY.titleLine1}
            <br />
            <em className="not-italic bg-gradient-to-br from-[#4f8cff] to-[#a259ff] bg-clip-text text-transparent">
              {ABOUT_STORY.titleEmphasis}
            </em>
          </h2>
          <div className="mt-6 flex flex-col gap-4 font-body text-base leading-[1.8] text-[#7b7b99]">
            {ABOUT_STORY.paragraphs.map((p, i) => (
              <p
                key={i}
                dangerouslySetInnerHTML={{ __html: p.html }}
                className="[&_strong]:text-[#e8e8f0]"
              />
            ))}
          </div>
        </div>

        <div
          ref={visualRef}
          className={cn(
            'transition-all delay-150 duration-[650ms] ease-out',
            inVisual ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          )}
        >
          <div className="relative overflow-hidden rounded-2xl border border-[rgba(255,255,255,0.07)] bg-[rgba(255,255,255,0.035)] p-8 before:absolute before:left-0 before:right-0 before:top-0 before:h-0.5 before:bg-gradient-to-r before:from-[#4f8cff] before:to-[#a259ff]">
            <h3 className="mb-6 font-heading text-[1.1rem] font-bold text-[#e8e8f0]">
              {ABOUT_STORY.cardTitle}
            </h3>
            <div className="flex flex-col gap-5">
              {ABOUT_STORY.timeline.map((item) => (
                <div key={item.year} className="flex items-start gap-4">
                  <div
                    className="mt-[5px] h-2.5 w-2.5 shrink-0 rounded-full bg-[#4f8cff] shadow-[0_0_10px_rgba(79,140,255,0.5)]"
                    aria-hidden
                  />
                  <div className="min-w-[40px] font-heading text-xs font-bold text-[#4f8cff]">
                    {item.year}
                  </div>
                  <div
                    className="text-[0.9rem] leading-snug text-[#7b7b99] [&_strong]:text-[#e8e8f0]"
                    dangerouslySetInnerHTML={{ __html: item.textHtml }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
