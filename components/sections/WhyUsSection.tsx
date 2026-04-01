import { WHY_CTA, WHY_ITEMS } from '@/constants/whyUs';
import Link from 'next/link';

export default function WhyUsSection() {
  return (
    <section id="why" aria-labelledby="why-title">
      <div className="why-grid">
        <div className="reveal">
          <span className="section-label">Why Us</span>
          <div className="divider" aria-hidden="true" />
          <h2 id="why-title" className="section-title">
            Why Clients{' '}
            <span className="bg-gradient-to-br from-[#4f8cff] to-[#a259ff] bg-clip-text text-transparent">
              Choose Us
            </span>
          </h2>

          <ul className="why-list" aria-label="Why clients choose us">
            {WHY_ITEMS.map((item) => (
              <li key={item.id} className="why-item">
                <div className="why-check" aria-hidden="true">
                  ✓
                </div>
                <div>
                  <div className="why-text">{item.title}</div>
                  <div className="why-sub">{item.description}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="why-cta-box reveal">
          <div className="quote">
            We don't just build projects — we build <em>{WHY_CTA.quoteEmphasis}</em>
            {WHY_CTA.quoteSuffix}
          </div>
          <p className="text-muted text-[0.9rem] mb-8 leading-relaxed">
            {WHY_CTA.paragraph}
          </p>

          <Link href="/hire" className="btn-primary inline-flex justify-center">
            Start Your Project
          </Link>

          <div className="mt-6 flex flex-wrap justify-center gap-8">
            {WHY_CTA.stats.map((stat) => (
              <div key={stat.id} className="text-center">
                <div className="font-heading text-[1.6rem] font-extrabold text-accent">
                  {stat.value}
                </div>
                <div className="text-xs text-muted">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

