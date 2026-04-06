'use client';

import Link from 'next/link';
import { useRef } from 'react';
import { useInView } from 'framer-motion';

import { cn } from '@/utils/cn';
import type { Project } from '@/lib/work-data';
import { getWorkCaseStudyHref } from '@/lib/service-seo-routes';

function WorkProjectCard({ project }: { project: Project }) {
  const caseHref = getWorkCaseStudyHref(project.id);
  const inner = (
    <>
      <div
        className={cn(
          'proj-img relative flex h-[180px] items-center justify-center',
          `proj-img-${project.imgClass}`
        )}
      >
        <div className="proj-img-glow absolute inset-0 opacity-50" aria-hidden />
        <div className="proj-img-inner relative z-[1] text-[3.5rem]" aria-hidden>
          {project.icon}
        </div>
      </div>
      <div className="proj-body p-6">
        <div className="proj-category mb-2 text-[0.68rem] font-semibold uppercase tracking-[0.08em] text-[#4f8cff]">
          {project.category}
        </div>
        <h3 className="proj-title mb-2 font-heading text-[1.05rem] font-bold leading-[1.3] text-[#e8e8f0]">
          {project.title}
        </h3>
        <p className="proj-desc mb-4 text-[0.83rem] leading-[1.6] text-[#7b7b99]">
          {project.desc}
        </p>
        <div className="proj-tags mb-4 flex flex-wrap gap-[0.35rem]">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="p-tag rounded-[5px] border border-white/[0.07] bg-[rgba(255,255,255,0.04)] px-2 py-[0.15rem] text-[0.7rem] text-[#7b7b99]"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="proj-footer flex items-center justify-between border-t border-white/[0.07] pt-3.5">
          <span
            className={cn('proj-result text-[0.78rem] font-semibold', {
              'text-[#00e5a0]': project.resultColor === 'green',
              'text-[#4f8cff]': project.resultColor === 'blue',
              'text-[#ff7a45]': project.resultColor === 'orange',
              'text-[#ffd24d]': project.resultColor === 'yellow',
              'text-[#ff4da6]': project.resultColor === 'pink',
              'text-[#00d4ff]': project.resultColor === 'cyan'
            })}
          >
            {project.result}
          </span>
          <span className="proj-arrow text-[1rem] text-[#7b7b99] transition-colors duration-200 group-hover:text-[#4f8cff]">
            →
          </span>
        </div>
      </div>
    </>
  );

  if (caseHref) {
    return (
      <Link
        href={caseHref}
        className="proj-card group block cursor-pointer overflow-hidden rounded-[18px] border border-white/[0.07] bg-[rgba(255,255,255,0.032)] no-underline transition-[transform,border-color] duration-200 hover:-translate-y-1 hover:border-[rgba(79,140,255,0.28)]"
      >
        {inner}
      </Link>
    );
  }

  return (
    <article className="proj-card cursor-default overflow-hidden rounded-[18px] border border-white/[0.07] bg-[rgba(255,255,255,0.032)] transition-[transform,border-color] duration-200 hover:-translate-y-1 hover:border-[rgba(79,140,255,0.28)]">
      {inner}
    </article>
  );
}

export default function ProjectsShowcase({
  projects,
  eyebrow,
  title,
  description,
  headerAlign = 'center',
  headerRight,
  as = 'section',
  id,
  ariaLabelledby
}: {
  projects: Project[];
  eyebrow: React.ReactNode;
  title: React.ReactNode;
  description?: React.ReactNode;
  headerAlign?: 'center' | 'split';
  headerRight?: React.ReactNode;
  as?: 'section' | 'div';
  id?: string;
  ariaLabelledby?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const Wrapper = as;

  return (
    <Wrapper
      id={id}
      aria-labelledby={ariaLabelledby}
      className="projects bg-[#0d0d18] px-[5vw] py-[100px] text-[#e8e8f0]"
    >
      <div className="inner mx-auto max-w-[1200px]">
        {headerAlign === 'split' ? (
          <div
            ref={ref}
            className={cn(
              'mb-10 flex flex-col items-start justify-between gap-6 transition-all duration-700 ease-out md:flex-row md:items-end',
              isInView ? 'translate-y-0 opacity-100' : 'translate-y-7 opacity-0'
            )}
          >
            <div className="max-w-[680px]">
              <p className="section-label mb-3 text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-[#4f8cff]">
                {eyebrow}
              </p>
              <h2 className="section-title font-heading text-[clamp(2.1rem,4.2vw,3.05rem)] font-extrabold leading-[1.05] tracking-[-0.02em]">
                {title}
              </h2>
              {description ? (
                <p className="section-sub mt-4 max-w-[560px] text-[1rem] leading-[1.75] text-[#7b7b99]">
                  {description}
                </p>
              ) : null}
            </div>
            {headerRight ? <div className="shrink-0">{headerRight}</div> : null}
          </div>
        ) : (
          <div
            ref={ref}
            className={cn(
              'centered mb-10 text-center transition-all duration-700 ease-out',
              isInView ? 'translate-y-0 opacity-100' : 'translate-y-7 opacity-0'
            )}
          >
            <p className="section-label mb-3 text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-[#4f8cff]">
              {eyebrow}
            </p>
            <h2 className="section-title font-heading text-[clamp(2rem,4vw,2.9rem)] font-extrabold leading-[1.1] tracking-[-0.02em]">
              {title}
            </h2>
            {description ? (
              <p className="section-sub mx-auto mt-4 max-w-[500px] text-[1rem] leading-[1.75] text-[#7b7b99]">
                {description}
              </p>
            ) : null}
          </div>
        )}

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.id}
              className={cn(
                'transition-all duration-700 ease-out',
                isInView ? 'translate-y-0 opacity-100' : 'translate-y-7 opacity-0'
              )}
            >
              <WorkProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
}

