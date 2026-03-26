export type WhyItem = {
  id: string;
  title: string;
  description: string;
};

export const WHY_ITEMS: WhyItem[] = [
  {
    id: 'dedicated-team',
    title: 'Dedicated Freelance Team',
    description: 'Not just one developer — a full team of specialists'
  },
  {
    id: 'fast-reliable',
    title: 'Fast & Reliable Delivery',
    description: 'Agile sprints, clear milestones, on-time delivery'
  },
  {
    id: 'clean-scalable',
    title: 'Clean & Scalable Code',
    description: 'Production-grade architecture that grows with you'
  },
  {
    id: 'transparent-comm',
    title: 'Transparent Communication',
    description: 'Daily updates, open channels, no surprises'
  },
  {
    id: 'support-maint',
    title: 'Long-Term Support & Maintenance',
    description: "We're partners, not just project vendors"
  },
  {
    id: 'cost-effective',
    title: 'Cost-Effective Solutions',
    description: 'Agency-quality work at freelance rates'
  }
];

export const WHY_CTA = {
  quotePrefix: "We don't just build projects — we build ",
  quoteEmphasis: 'long-term partnerships',
  quoteSuffix: ' that help your business grow.',
  paragraph:
    'Every project is delivered with a commitment to excellence, scalability, and your long-term success. Our clients come back because we treat their product like our own.',
  stats: [
    { id: 'upwork-rating', value: '⭐ 5.0', label: 'Upwork Rating' },
    { id: 'top-rated', value: 'Top Rated', label: 'Upwork Badge' },
    { id: 'experience', value: '8+ Yrs', label: 'Experience' }
  ]
};

