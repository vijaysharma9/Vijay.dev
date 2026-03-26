import { PROJECTS } from '@/constants/projects';

import ProjectCard from '@/components/modules/ProjectCard';

export default function PortfolioSection() {
  return (
    <section id="portfolio" aria-labelledby="portfolio-title">
      <div className="portfolio-header reveal">
        <span className="section-label">Our Work</span>
        <div className="divider" aria-hidden="true" />
        <h2 id="portfolio-title" className="section-title">
          Projects We've Built
        </h2>
        <p className="section-desc">
          Delivered across industries — startups, SaaS, eCommerce, and enterprise. Each built
          to scale.
        </p>
      </div>

      <div className="portfolio-grid" aria-label="Projects grid">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

