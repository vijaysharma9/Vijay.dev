import { PRICING } from '@/constants/pricing';

import PricingCard from '@/components/modules/PricingCard';

export default function PricingSection() {
  return (
    <section id="pricing" aria-labelledby="pricing-title">
      <div className="pricing-header reveal">
        <span className="section-label">Pricing</span>
        <div className="divider" aria-hidden="true" />
        <h2 id="pricing-title" className="section-title">
          Transparent, Budget-Friendly IT Consultancy Packages
        </h2>
        <p className="section-desc">
          No hidden fees. No agency markups. Just honest pricing for high-quality
          development and consultancy work.
        </p>
      </div>

      <div className="pricing-grid" aria-label="Pricing plans">
        {PRICING.map((plan) => (
          <PricingCard key={plan.id} plan={plan} />
        ))}
      </div>
    </section>
  );
}

