export type ContactLink = {
  icon: string;
  label: string;
  value: string;
  href: string;
  /** Tailwind accent for icon container */
  colorClass: 'blue' | 'green' | 'purple' | 'orange';
};

export type Channel = {
  icon: string;
  title: string;
  desc: string;
  value: string;
  href: string;
};

export type ProjectType = {
  icon: string;
  label: string;
  sub: string;
  /** Stable id for multi-select */
  value: string;
};

export type Step = {
  num: number;
  title: string;
  body: string;
};

export type Reason = {
  icon: string;
  title: string;
  body: string;
};

export type FAQItem = {
  q: string;
  a: string;
};

export const CONTACT_LINKS: ContactLink[] = [
  {
    icon: '✉️',
    label: 'Email',
    value: 'vijaysharma6918h@gmail.com',
    href: 'mailto:vijaysharma6918h@gmail.com',
    colorClass: 'blue'
  },
  {
    icon: '💬',
    label: 'WhatsApp',
    value: '+91 8527594730',
    href: 'https://wa.me/918527594730',
    colorClass: 'green'
  },
  {
    icon: '⭐',
    label: 'Upwork · Top Rated · 5.0',
    value: 'View Profile & Reviews',
    href: 'https://www.upwork.com/freelancers/~019b3aee9c5d781d36',
    colorClass: 'purple'
  },
  {
    icon: '🐙',
    label: 'GitHub',
    value: 'github.com/vijaysharma9',
    href: 'https://github.com/vijaysharma9',
    colorClass: 'orange'
  }
];

export const CALENDLY_BOOK_URL =
  typeof process !== 'undefined' && process.env.NEXT_PUBLIC_CALENDLY_URL
    ? process.env.NEXT_PUBLIC_CALENDLY_URL
    : 'https://calendly.com';

export const QUICK_CHANNELS: Channel[] = [
  {
    icon: '📋',
    title: 'Project Brief Form',
    desc: 'Fill out our 4-step project form below. Get a structured proposal within 24 hours.',
    value: 'Fastest for scoped projects →',
    href: '#project-form'
  },
  {
    icon: '💬',
    title: 'WhatsApp',
    desc: 'Quick questions, fast back-and-forth. Best for informal first contact or urgent queries.',
    value: '+91 8527594730 →',
    href: 'https://wa.me/918527594730'
  },
  {
    icon: '✉️',
    title: 'Email',
    desc: 'Send a detailed overview of your project. Ideal for attaching documents or briefs.',
    value: 'vijaysharma6918h@gmail.com →',
    href: 'mailto:vijaysharma6918h@gmail.com'
  },
  {
    icon: '📅',
    title: 'Book a Call',
    desc: 'Schedule a free 30-min discovery call directly in our calendar. No prep needed.',
    value: 'Pick a time slot →',
    href: CALENDLY_BOOK_URL
  }
];

export const PROJECT_TYPES: ProjectType[] = [
  {
    icon: '🌐',
    label: 'Web App / SaaS',
    sub: 'Full-stack web application',
    value: 'web-saas'
  },
  {
    icon: '🛒',
    label: 'eCommerce Store',
    sub: 'Shopify, WooCommerce, custom',
    value: 'ecommerce'
  },
  {
    icon: '🤖',
    label: 'AI / Automation',
    sub: 'LLM, agents, workflow automation',
    value: 'ai-automation'
  },
  {
    icon: '📱',
    label: 'Mobile App',
    sub: 'iOS, Android, React Native',
    value: 'mobile'
  },
  {
    icon: '☁️',
    label: 'Cloud / DevOps',
    sub: 'AWS setup, CI/CD, Docker',
    value: 'cloud-devops'
  },
  {
    icon: '🔄',
    label: 'Legacy Migration',
    sub: 'PHP, jQuery → modern stack',
    value: 'legacy-migration'
  },
  {
    icon: '📈',
    label: 'Technical SEO',
    sub: 'Core Web Vitals, performance',
    value: 'technical-seo'
  },
  {
    icon: '💡',
    label: 'IT Consultancy',
    sub: 'Architecture, code audit',
    value: 'it-consultancy'
  }
];

export const BUDGET_OPTIONS: string[] = [
  'Under $500',
  '$500 – $2,000',
  '$2,000 – $5,000',
  '$5,000 – $15,000',
  '$15,000+',
  'Not sure yet'
];

export const ROLE_OPTIONS = [
  '',
  'Founder / Co-founder',
  'CEO / CTO',
  'Product Manager',
  'Developer / Technical Lead',
  'Marketing / Growth',
  'Freelancer / Agency',
  'Other'
] as const;

export const TIMELINE_OPTIONS = [
  '',
  'ASAP (under 2 weeks)',
  'Within 1 month',
  '1–3 months',
  '3–6 months',
  'Flexible / Ongoing'
] as const;

export const PROJECT_STAGE_OPTIONS = [
  '',
  'Just an idea — need help scoping',
  'Have a spec / wireframes ready',
  'Existing project that needs features',
  'Existing project that needs fixing',
  'Starting from existing codebase'
] as const;

export const SOURCE_OPTIONS = [
  '',
  'Upwork',
  'Google Search',
  'LinkedIn',
  'Referral from a client',
  'GitHub',
  'Other'
] as const;

export const BOOKING_STEPS: Step[] = [
  {
    num: 1,
    title: 'Pick a 30-min slot',
    body: 'Choose any open slot in our Calendly. Morning or afternoon, IST or your timezone.'
  },
  {
    num: 2,
    title: "Tell us what you're building",
    body: 'Just 2–3 sentences in the booking notes. No formal brief needed at this stage.'
  },
  {
    num: 3,
    title: 'We prepare, you relax',
    body: "We'll review your note and come prepared with questions — not a pitch deck."
  },
  {
    num: 4,
    title: 'Receive a fixed-price proposal',
    body: "Within 24 hours of the call, you'll have a written scope and price in your inbox."
  }
];

export const WHY_REASONS: Reason[] = [
  {
    icon: '🧾',
    title: 'Scope Clarity Before Code',
    body: 'Every project starts with a written brief and scoped deliverables. Surprises are for birthdays, not invoices.'
  },
  {
    icon: '🤝',
    title: 'Async-First Communication',
    body: 'Detailed Loom updates and structured check-ins. No pointless meetings — your time is as valuable as ours.'
  },
  {
    icon: '🔒',
    title: 'You Own Everything',
    body: "Full IP transfer on delivery. Source code, assets, infrastructure — it's all yours from day one, no lock-in."
  },
  {
    icon: '🧠',
    title: 'Long-Term Thinking',
    body: 'We build to last. The code we ship today should still be maintainable in three years, by any developer.'
  }
];

export const HIRE_FAQ: FAQItem[] = [
  {
    q: 'How quickly will you respond to my inquiry?',
    a: "Within 4 business hours during IST (India Standard Time, UTC+5:30). If you submit outside business hours, you'll hear from us first thing the next morning. For urgent projects, WhatsApp is the fastest route."
  },
  {
    q: 'Do I need to have everything figured out before reaching out?',
    a: "Not at all. Many clients come to us with just an idea or a problem they need solved. The discovery call is specifically designed to help you clarify requirements. We ask the right questions so you don't need to have all the answers upfront."
  },
  {
    q: 'Can I sign an NDA before the discovery call?',
    a: "Yes — just mention it in your initial message or project brief. We'll send an NDA for signature before any discussion begins. This is common for early-stage startups and enterprise clients, and we're happy to accommodate it."
  },
  {
    q: 'What timezone do you work in, and can you accommodate UK/US hours?',
    a: "We're based in India (IST, UTC+5:30). Our morning overlaps with UK afternoons and our afternoons overlap with US East mornings. For US West clients, we schedule calls in our evenings. Most communication is async — daily updates, Loom videos — so timezone rarely blocks progress."
  },
  {
    q: 'How are projects billed — upfront, milestones, or on delivery?',
    a: "50% deposit to begin work, 50% on delivery and your sign-off. For larger projects (over $5k), we use milestone-based billing — typically 3 milestones: kickoff, midpoint, and delivery. No payment is ever due before you're satisfied with that milestone."
  }
];

export const AVAILABILITY_NOTE = 'Next slot: April 2026';
