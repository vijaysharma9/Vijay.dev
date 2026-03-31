'use client';

import { useState } from 'react';

import WorkFilterBar, { type WorkFilterValue } from '@/components/sections/work/WorkFilterBar';
import ProjectsGrid from '@/components/sections/work/ProjectsGrid';

export default function WorkGallery() {
  const [filter, setFilter] = useState<WorkFilterValue>('all');

  return (
    <>
      <WorkFilterBar active={filter} onChange={setFilter} />
      <ProjectsGrid filter={filter} />
    </>
  );
}

