import Image from 'next/image';

import type { Project } from '@/types';

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card reveal" aria-label={project.title}>
      <div className={`project-visual ${project.visualClass}`}>
        <Image
          src={project.image.src}
          alt={project.image.alt}
          width={project.image.width}
          height={project.image.height}
          className="project-img"
          priority={project.id === 'saas-dashboard-platform'}
        />
      </div>
      <div className="project-body">
        <h3 className="project-name">{project.title}</h3>
        <div className="project-desc">{project.description}</div>
        <div className="project-tags" aria-label={`${project.title} tags`}>
          {project.tags.map((tag) => (
            <span key={tag} className="project-tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

