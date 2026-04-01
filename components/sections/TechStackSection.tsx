import { TECH_STACK } from '@/constants/techStack';

export default function TechStackSection() {
  return (
    <section id="tech" aria-labelledby="tech-title">
      <div className="tech-header reveal">
        <span className="section-label">Technologies</span>
        <div className="divider" aria-hidden="true" />
        <h2 id="tech-title" className="section-title">
          Technologies We{' '}
          <span className="bg-gradient-to-br from-[#4f8cff] to-[#a259ff] bg-clip-text text-transparent">
            Work with
          </span>
        </h2>
        <p className="section-desc">A battle-tested stack for modern, scalable, production-ready applications.</p>
      </div>

      <div className="tech-groups" aria-label="Technology groups">
        {TECH_STACK.map((group) => (
          <div key={group.id} className="tech-group reveal">
            <div className="tech-group-title">{group.title}</div>
            <div className="tech-tags" role="list">
              {group.tags.map((tag) => (
                <span key={tag} className="tech-tag" role="listitem">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

