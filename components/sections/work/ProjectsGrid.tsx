'use client';

import { PROJECTS, type Project } from '@/lib/work-data';
import type { WorkFilterValue } from '@/components/sections/work/WorkFilterBar';
import ProjectsShowcase from '@/components/sections/work/ProjectsShowcase';

export default function ProjectsGrid({ filter }: { filter: WorkFilterValue }) {
  const visible = PROJECTS.filter(
    (p) => filter === 'all' || p.cat === filter
  );

  return (
    <div id="all-work">
      <ProjectsShowcase
        projects={visible}
        eyebrow="All Projects"
        title={
          <>
            50+ Projects —{' '}
            <em className="not-italic bg-gradient-to-br from-[#4f8cff] to-[#a259ff] bg-clip-text text-transparent">
              9 Highlighted
            </em>
          </>
        }
        description={
          <>
            A curated selection across industries. Every project below was built and shipped by our
            team.
          </>
        }
      />
    </div>
  );
}

