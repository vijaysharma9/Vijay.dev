export type PricingPlan = {
  id: string;
  title: string;
  priceLabel: string;
  priceSubLabel: string;
  featured?: boolean;
  features: string[];
  ctaLabel: string;
  ctaVariant: 'primary' | 'secondary';
};

export const PRICING: PricingPlan[] = [
  {
    id: 'starter',
    title: 'Starter',
    priceLabel: '$499',
    priceSubLabel: 'Starting from / project',
    featured: false,
    features: [
      'Single-page or landing page',
      'Mobile responsive design',
      'Basic SEO setup',
      'Contact form integration',
      '1 revision round',
      '5-day delivery'
    ],
    ctaLabel: 'Get Started',
    ctaVariant: 'secondary'
  },
  {
    id: 'growth',
    title: 'Growth',
    priceLabel: '$1,999',
    priceSubLabel: 'Starting from / project',
    featured: true,
    features: [
      'Full multi-page web application',
      'Custom backend and API development',
      'Database design and integration',
      'Payment gateway integration',
      'Admin dashboard',
      '3 revision rounds',
      '14-day delivery'
    ],
    ctaLabel: 'Start Project',
    ctaVariant: 'primary'
  },
  {
    id: 'enterprise',
    title: 'Enterprise',
    priceLabel: 'Custom',
    priceSubLabel: 'Tailored to your needs',
    featured: false,
    features: [
      'Complex SaaS or enterprise apps',
      'AI and automation integrations',
      'Dedicated development team',
      'Full DevOps and cloud setup',
      'Priority support and SLA',
      'IT consultancy included'
    ],
    ctaLabel: 'Request a Quote',
    ctaVariant: 'secondary'
  }
];

