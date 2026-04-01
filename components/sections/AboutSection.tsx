import { Fragment } from 'react';

export default function AboutSection() {
  const process = [
    { step: '1', label: 'Understand' },
    { step: '2', label: 'Plan' },
    { step: '3', label: 'Build' },
    { step: '4', label: 'Deliver' },
    { step: '5', label: 'Scale' }
  ];

  const stats = [
    { value: '8+', label: 'Years of Experience' },
    { value: '50+', label: 'Projects Delivered' },
    { value: '100%', label: 'Client Satisfaction' },
    { value: '7+', label: 'Technologies Mastered' }
  ];

  return (
    <section id="about" aria-labelledby="about-title">
      <div className="about-grid">
        <div className="reveal">
          <span className="section-label">About Us</span>
          <div className="divider" aria-hidden="true" />

          <h2 id="about-title" className="section-title">
            IT Consultancy That Delivers —{' '}
            <span className="bg-gradient-to-br from-[#4f8cff] to-[#a259ff] bg-clip-text text-transparent">
              Not Just Quotes
            </span>
          </h2>

          <p className="section-desc">
            We are a <strong>full-stack IT consultancy and development team</strong> with over{' '}
            <strong>8 years of experience</strong> building high-performance web applications, SaaS
            platforms, and AI-driven solutions for businesses worldwide.
          </p>

          <p className="section-desc">
            Unlike traditional agencies with inflated overheads, we operate as a{' '}
            <strong>lean, agile team of developers, designers, and QA specialists</strong>{' '}
            giving you agency-quality output at freelance-competitive rates.
          </p>

          <div className="about-process" aria-label="Delivery process">
            {process.map((p, idx) => (
              <Fragment key={p.step}>
                <div className="process-step">
                  <div className="process-dot">{p.step}</div>
                  <span className="process-label">{p.label}</span>
                </div>
                {idx !== process.length - 1 ? (
                  <div className="process-line" aria-hidden="true" />
                ) : null}
              </Fragment>
            ))}
          </div>
        </div>

        <ul className="about-stats reveal" aria-label="Key metrics">
          {stats.map((s) => (
            <li key={s.label} className="stat-card">
              <div className="stat-number">{s.value}</div>
              <div className="stat-label">{s.label}</div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

