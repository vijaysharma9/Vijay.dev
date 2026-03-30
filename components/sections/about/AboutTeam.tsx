'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

import { ABOUT_TEAM } from '@/lib/about-data';
import { cn } from '@/utils/cn';

export default function AboutTeam() {
  const labelRef = useRef<HTMLParagraphElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const inLabel = useInView(labelRef, { once: true, amount: 0.2 });
  const inTitle = useInView(titleRef, { once: true, amount: 0.2 });

  return (
    <section aria-labelledby="about-team-title" className="bg-[#0f0f1a] px-[5vw] py-[100px] text-[#e8e8f0]">
      <div className="mx-auto max-w-[1200px]">
        <p
          ref={labelRef}
          className={cn(
            'mb-4 font-body text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-[#4f8cff] transition-all duration-[650ms] ease-out',
            inLabel ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          )}
        >
          {ABOUT_TEAM.sectionLabel}
        </p>
        <h2
          ref={titleRef}
          id="about-team-title"
          className={cn(
            'font-heading text-[clamp(2rem,4vw,3rem)] font-extrabold leading-[1.1] tracking-[-0.02em] transition-all delay-75 duration-[650ms] ease-out',
            inTitle ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          )}
        >
          {ABOUT_TEAM.titleLine1}
          <em className="not-italic bg-gradient-to-br from-[#4f8cff] to-[#a259ff] bg-clip-text text-transparent">
            {ABOUT_TEAM.titleEmphasis}
          </em>
        </h2>

        <div className="mt-12 grid items-center gap-[5vw] md:grid-cols-[1fr_1.4fr]">
          <TeamProfile />
          <TeamSkillsColumn />
        </div>
      </div>
    </section>
  );
}

function TeamProfile() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <div
      ref={ref}
      className={cn(
        'relative overflow-hidden rounded-[20px] border border-[rgba(255,255,255,0.07)] bg-[rgba(255,255,255,0.035)] p-10 text-center before:absolute before:left-0 before:right-0 before:top-0 before:h-[3px] before:bg-gradient-to-r before:from-[#4f8cff] before:to-[#a259ff] transition-all duration-[650ms] ease-out',
        isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      )}
    >
      <div className="mx-auto mb-5 flex h-[100px] w-[100px] items-center justify-center rounded-full bg-gradient-to-br from-[#4f8cff] to-[#a259ff] font-heading text-[2.2rem] font-extrabold text-white">
        {ABOUT_TEAM.avatarInitials}
      </div>
      <div className="font-heading text-[1.4rem] font-extrabold">{ABOUT_TEAM.name}</div>
      <div className="mb-4 mt-1 font-body text-[0.85rem] font-medium text-[#4f8cff]">{ABOUT_TEAM.role}</div>
      <p className="mb-6 font-body text-[0.9rem] leading-[1.65] text-[#7b7b99]">{ABOUT_TEAM.bio}</p>
      <div className="flex flex-wrap justify-center gap-2">
        {ABOUT_TEAM.badges.map((b) => (
          <span
            key={b}
            className="rounded-full border border-[rgba(79,140,255,0.2)] bg-[rgba(79,140,255,0.1)] px-3 py-1 font-body text-[0.75rem] font-medium text-[#4f8cff]"
          >
            {b}
          </span>
        ))}
      </div>
    </div>
  );
}

function TeamSkillsColumn() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.12 });

  return (
    <div
      ref={ref}
      className={cn(
        'transition-all delay-100 duration-[650ms] ease-out',
        isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      )}
    >
      <h3 className="mb-6 font-heading text-[1.3rem] font-bold">{ABOUT_TEAM.skillsHeading}</h3>
      <div className="space-y-4">
        {ABOUT_TEAM.skills.map((skill, index) => (
          <div key={skill.id} className="skill-bar">
            <div className="mb-1.5 flex justify-between font-body text-[0.85rem] text-[#e8e8f0]">
              <span>{skill.label}</span>
              <span className="font-semibold text-[#4f8cff]">{skill.percent}%</span>
            </div>
            <div className="h-1.5 overflow-hidden rounded-[10px] bg-[rgba(255,255,255,0.06)]">
              <motion.div
                className="h-full rounded-[10px] bg-gradient-to-r from-[#4f8cff] to-[#a259ff]"
                initial={{ width: 0 }}
                animate={isInView ? { width: `${skill.percent}%` } : { width: 0 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: index * 0.08 }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {ABOUT_TEAM.extraCards.map((card) => (
          <div
            key={card.id}
            className="rounded-xl border border-[rgba(255,255,255,0.07)] bg-[rgba(255,255,255,0.035)] p-5"
          >
            <h4 className="mb-1.5 font-heading text-[0.85rem] font-bold text-[#e8e8f0]">{card.title}</h4>
            <p className="font-body text-[0.8rem] leading-relaxed text-[#7b7b99]">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
