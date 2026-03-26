import Link from 'next/link';

import type { PricingPlan } from '@/types';

export default function PricingCard({ plan }: { plan: PricingPlan }) {
  const cardClass = plan.featured
    ? 'pricing-card featured reveal'
    : 'pricing-card reveal';

  return (
    <article className={cardClass} aria-label={`${plan.title} pricing plan`}>
      {plan.featured ? (
        <div className="popular-badge">Most Popular</div>
      ) : null}

      <h3 className="pricing-title">{plan.title}</h3>
      <div className="price">{plan.priceLabel}</div>
      <div className="price-sub">{plan.priceSubLabel}</div>

      <ul className="pricing-features" aria-label={`${plan.title} features`}>
        {plan.features.map((feature) => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>

      <Link
        href="/#contact"
        className={plan.ctaVariant === 'primary' ? 'btn-primary' : 'btn-secondary'}
      >
        {plan.ctaLabel}
      </Link>
    </article>
  );
}

