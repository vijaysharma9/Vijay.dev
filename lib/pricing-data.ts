export type PlanFeature = {
  text: string;
  included: boolean;
  note?: string;
};

export type Plan = {
  id: 'starter' | 'growth' | 'scale';
  tier: string;
  colorClass: 'blue' | 'purple' | 'green';
  monthlyPrice: number;
  annualPrice: number;
  tagline: string;
  cta: { label: string; href: string };
  ctaStyle: 'primary' | 'outline';
  popular: boolean;
  features: PlanFeature[];
};

export type Addon = {
  icon: string;
  title: string;
  desc: string;
  priceFrom: number;
  unit: string;
};

export type CompareRow = {
  label: string;
  starter: string;
  growth: string;
  scale: string;
  enterprise: string;
};

export type CompareSection = {
  title: string;
  rows: CompareRow[];
};

export type Step = {
  num: string;
  title: string;
  desc: string;
};

export type Guarantee = {
  icon: string;
  title: string;
  desc: string;
};

export type FAQItem = {
  q: string;
  a: string;
};

export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  role: string;
  initials: string;
  avatarGradient: string;
};

export const PLANS: Plan[] = [
  {
    id: 'starter',
    tier: 'Starter',
    colorClass: 'blue',
    monthlyPrice: 499,
    annualPrice: 399,
    tagline: 'Per project · Starting from. Perfect for landing pages, business sites, and small web apps.',
    cta: { label: 'Get Started', href: '/hire' },
    ctaStyle: 'outline',
    popular: false,
    features: [
      { text: 'Single-page or landing page', included: true },
      { text: 'Mobile responsive design', included: true },
      { text: 'Basic SEO setup', included: true },
      { text: 'Contact form integration', included: true },
      { text: '1 revision round', included: true },
      { text: '5-day delivery', included: true },
      { text: 'Source code handoff', included: true },
      { text: 'Custom backend / API', included: false },
      { text: 'Admin dashboard', included: false },
      { text: 'Post-launch support', included: false }
    ]
  },
  {
    id: 'growth',
    tier: 'Growth',
    colorClass: 'purple',
    monthlyPrice: 1999,
    annualPrice: 1599,
    tagline: 'Per project · Starting from. Full-stack web apps, SaaS MVPs, and eCommerce platforms.',
    cta: { label: 'Start Project', href: '/hire' },
    ctaStyle: 'primary',
    popular: true,
    features: [
      { text: 'Full multi-page web application', included: true },
      { text: 'Custom backend & API development', included: true },
      { text: 'Database design and integration', included: true },
      { text: 'Payment gateway integration', included: true },
      { text: 'Admin dashboard included', included: true },
      { text: '3 revision rounds', included: true },
      { text: '14-day delivery', included: true },
      { text: 'Full test suite included', included: true },
      { text: 'CI/CD pipeline setup', included: true },
      { text: '30-day post-launch support', included: true }
    ]
  },
  {
    id: 'scale',
    tier: 'Scale',
    colorClass: 'green',
    monthlyPrice: 4999,
    annualPrice: 3999,
    tagline:
      'Per project · Starting from. Complex SaaS, AI-powered platforms, and multi-service architectures.',
    cta: { label: 'Request Quote', href: '/hire' },
    ctaStyle: 'outline',
    popular: false,
    features: [
      { text: 'Everything in Growth', included: true },
      { text: 'AI / LLM feature integration', included: true },
      { text: 'Multi-tenant SaaS architecture', included: true },
      { text: 'Advanced role-based access control', included: true },
      { text: 'Subscription billing (Stripe)', included: true },
      { text: 'Unlimited revision rounds', included: true },
      { text: 'Dedicated project manager', included: true },
      { text: 'Performance & load testing', included: true },
      { text: 'AWS / Docker deployment', included: true },
      { text: '60-day post-launch support', included: true }
    ]
  }
];

export const ADDONS: Addon[] = [
  {
    icon: '🤖',
    title: 'AI / LLM Integration',
    desc: 'Add a RAG pipeline, AI chatbot, document intelligence, or LLM-powered feature to any project.',
    priceFrom: 800,
    unit: 'feature'
  },
  {
    icon: '📱',
    title: 'Mobile App (iOS + Android)',
    desc: 'React Native app built alongside your web project. Shared backend, native feel, App Store ready.',
    priceFrom: 1500,
    unit: 'app'
  },
  {
    icon: '🔍',
    title: 'Technical SEO Audit',
    desc: 'Full Core Web Vitals audit, structured data, crawl fix, and Lighthouse optimisation report.',
    priceFrom: 350,
    unit: 'audit'
  },
  {
    icon: '☁️',
    title: 'AWS / DevOps Setup',
    desc: 'Full cloud infrastructure setup — CI/CD, auto-scaling, monitoring, and deployment hardening.',
    priceFrom: 600,
    unit: 'setup'
  },
  {
    icon: '🔄',
    title: 'Legacy Migration',
    desc: 'Migrate from older stacks to a modern stack — plan-first with zero-downtime cutover.',
    priceFrom: 1200,
    unit: 'migration'
  },
  {
    icon: '🛡️',
    title: 'Monthly Maintenance Retainer',
    desc: 'Ongoing bug fixes, security patches, dependency updates, and 4 hours of feature work per month.',
    priceFrom: 299,
    unit: 'month'
  }
];

export const COMPARE_ROWS: CompareSection[] = [
  {
    title: 'Delivery & Scope',
    rows: [
      { label: 'Starting price', starter: '$499', growth: '$1,999', scale: '$4,999', enterprise: 'Custom' },
      { label: 'Typical timeline', starter: '3–7 days', growth: '2–4 weeks', scale: '4–10 weeks', enterprise: 'Scoped' },
      { label: 'Fixed-price quote', starter: '✓', growth: '✓', scale: '✓', enterprise: '✓' },
      { label: 'Revision rounds', starter: '1', growth: '3', scale: 'Unlimited', enterprise: 'Unlimited' }
    ]
  },
  {
    title: 'Development',
    rows: [
      { label: 'Backend / API', starter: '—', growth: '✓', scale: '✓', enterprise: '✓' },
      { label: 'Database design', starter: '—', growth: '✓', scale: '✓', enterprise: '✓' },
      { label: 'AI / LLM features', starter: '—', growth: 'Add-on', scale: '✓', enterprise: '✓' },
      { label: 'Admin dashboard', starter: '—', growth: '✓', scale: '✓', enterprise: '✓' },
      { label: 'Payment integration', starter: '—', growth: '✓', scale: '✓', enterprise: '✓' },
      { label: 'Multi-tenancy', starter: '—', growth: '—', scale: '✓', enterprise: '✓' }
    ]
  },
  {
    title: 'Quality & Testing',
    rows: [
      { label: 'Automated test suite', starter: '—', growth: '✓', scale: '✓', enterprise: '✓' },
      { label: 'CI/CD pipeline', starter: '—', growth: '✓', scale: '✓', enterprise: '✓' },
      { label: 'Load / performance testing', starter: '—', growth: '—', scale: '✓', enterprise: '✓' }
    ]
  },
  {
    title: 'Delivery & Support',
    rows: [
      { label: 'Daily async updates', starter: '✓', growth: '✓', scale: '✓', enterprise: '✓' },
      { label: 'GitHub access', starter: '—', growth: '✓', scale: '✓', enterprise: '✓' },
      { label: 'Post-launch support', starter: '—', growth: '30 days', scale: '60 days', enterprise: 'SLA' },
      { label: 'Full IP / code ownership', starter: '✓', growth: '✓', scale: '✓', enterprise: '✓' },
      { label: 'Documentation', starter: '—', growth: '✓', scale: '✓', enterprise: '✓' },
      { label: 'NDA on request', starter: '✓', growth: '✓', scale: '✓', enterprise: '✓' }
    ]
  }
];

export const BILLING_STEPS: Step[] = [
  {
    num: '01',
    title: 'Discovery Call',
    desc: 'Free 30-min call to understand your requirements. No commitment, no pitch deck.'
  },
  {
    num: '02',
    title: 'Scoped Proposal',
    desc: 'Written spec + fixed-price quote + timeline delivered within 24 hours. You approve before we start.'
  },
  {
    num: '03',
    title: '50% Upfront',
    desc: "50% deposit to begin. Remaining 50% on delivery and sign-off. No payment before you're satisfied."
  },
  {
    num: '04',
    title: 'Delivery + Handoff',
    desc: 'Full code, docs, and deployment. Final payment on your approval. IP transfers immediately.'
  }
];

export const GUARANTEES: Guarantee[] = [
  {
    icon: '📋',
    title: 'Fixed Scope, Fixed Price',
    desc: `The price in your proposal is the price you pay. If requirements change, we quote the delta separately — with your approval before any work begins.`
  },
  {
    icon: '⏰',
    title: 'On-Time or We Discount',
    desc: `If we miss an agreed milestone date for reasons on our side, we apply a 5% discount to the remaining balance for every week of delay.`
  },
  {
    icon: '🔒',
    title: 'Full IP Transfer',
    desc: `On final payment, you own 100% of the code, assets, and infrastructure we've built. No lock-in — written into every contract.`
  }
];

export const PRICING_TESTIMONIALS: Testimonial[] = [
  {
    id: 'rk',
    quote:
      `"The fixed-price model is what sold me. I'd been burned by hourly agencies before. The team scoped it clearly, delivered exactly what was agreed, and there were no surprise charges."`,
    name: 'Rahul K.',
    role: 'Startup Founder · Growth Plan',
    initials: 'RK',
    avatarGradient: 'linear-gradient(135deg,#4f8cff,#a259ff)'
  },
  {
    id: 'sp',
    quote:
      `"We got agency-quality work at a fraction of the cost. The 30-day post-launch support saved us twice in the first month — issues we didn't even know existed were fixed proactively."`,
    name: 'Sarah P.',
    role: 'eCommerce Owner · Scale Plan',
    initials: 'SP',
    avatarGradient: 'linear-gradient(135deg,#ff7a45,#ffd24d)'
  },
  {
    id: 'am',
    quote:
      `"I've worked with teams charging 5× more who delivered less. The transparency here is different — I knew what I was getting, when I was getting it, and it cost exactly what was quoted."`,
    name: 'Amit M.',
    role: 'Product Manager · Enterprise',
    initials: 'AM',
    avatarGradient: 'linear-gradient(135deg,#00e5a0,#4f8cff)'
  }
];

export const PRICING_FAQ: FAQItem[] = [
  {
    q: 'Are the prices fixed or just estimates?',
    a: `The starting prices shown are minimum project costs for typical scopes in that tier. Every engagement gets a written, fixed-price quote before work begins — based on your exact requirements. It never goes higher without your explicit sign-off on new scope.`
  },
  {
    q: 'What payment methods do you accept?',
    a: `We accept bank transfers, PayPal, Wise, Razorpay, and Stripe. For Upwork projects, payment goes through Upwork's platform.`
  },
  {
    q: 'Can I start with a small project before committing to a larger one?',
    a: `Absolutely — this is how many clients start. A Starter landing page or a small API build is a great way to validate our process before committing to a larger engagement.`
  },
  {
    q: 'What happens if the scope changes mid-project?',
    a: `We use a simple change order process. If you add features not in the original spec, we pause, quote the addition, and you approve before work continues.`
  },
  {
    q: 'Do you offer hourly rates or retainers?',
    a: `Yes — for ongoing maintenance, feature additions after launch, or consulting work, we offer hourly rates and monthly retainers from $299/month.`
  },
  {
    q: 'Is the 20% annual discount applied upfront?',
    a: `When annual billing is selected, the price shown reflects the discounted annual equivalent (20% off) and we display the original monthly price as a reference.`
  },
  {
    q: "What if I'm not satisfied with the final delivery?",
    a: `We don't ask for final payment until you sign off on UAT (user acceptance testing). If something in the spec wasn't delivered correctly, we fix it at no charge.`
  }
];

