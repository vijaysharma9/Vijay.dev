'use client';

import Link from 'next/link';

import ProjectsShowcase from '@/components/sections/work/ProjectsShowcase';
import { PROJECTS } from '@/lib/work-data';

export default function PortfolioSection() {
  return (
    <ProjectsShowcase
      id="portfolio"
      ariaLabelledby="portfolio-title"
      projects={PROJECTS.slice(0, 6)}
      headerAlign="split"
      eyebrow="Our Work"
      title={
        <>
          <span id="portfolio-title">
            Projects{' '}
            <em className="not-italic bg-gradient-to-br from-[#4f8cff] to-[#a259ff] bg-clip-text text-transparent">
              We&apos;ve Built
            </em>
          </span>
        </>
      }
      description={
        <>
          Delivered across industries — startups, SaaS, eCommerce, and enterprise. Each built to
          scale.
        </>
      }
      headerRight={
        <Link
          href="/work"
          className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-[rgba(255,255,255,0.03)] px-4 py-2 text-[0.85rem] font-semibold text-[#e8e8f0] transition-colors hover:border-white/[0.14] hover:bg-[rgba(255,255,255,0.05)]"
        >
          See All 50+ Projects <span aria-hidden>→</span>
        </Link>
      }
    />
  );
}

