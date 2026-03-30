/**
 * About page copy and structure — sourced from about.html (HireDeveloperShop).
 * Components import only from here.
 */

export const ABOUT_HERO = {
  eyebrow: 'About Me',
  titleLine1: 'The Developer',
  titleLine2: 'Behind the ',
  titleEmphasis: 'Work',
  subtitle:
    "I'm Vijay Sharma — a full-stack developer and IT consultant who builds scalable digital products that actually ship. No agency bloat, just focused engineering.",
  primaryCtaLabel: 'Start a Project',
  primaryCtaHref: '/#contact',
  secondaryCtaLabel: 'View My Work',
  /** Homepage portfolio section */
  secondaryCtaHref: '/#portfolio',
  stats: [
    { value: '8+', label: 'Years Experience' },
    { value: '50+', label: 'Projects Delivered' },
    { value: '100%', label: 'Client Satisfaction' },
    { value: '7+', label: 'Technologies Mastered' }
  ]
} as const;

export const ABOUT_STORY = {
  sectionLabel: 'My Story',
  titleLine1: 'From Freelancer to',
  titleEmphasis: 'Full-Stack Partner',
  paragraphs: [
    {
      html: 'I started writing code at 19 with one goal: build things that matter. Over 8 years I\'ve worked with <strong>startups, SaaS companies, and enterprise teams</strong> across India, the UK, US, and Australia — delivering everything from MVP prototypes to production-grade platforms.'
    },
    {
      html: 'What sets me apart isn\'t just the code I write — it\'s how I <strong>think about your business</strong>. I ask the hard questions before writing a single line. I\'ve saved clients months of rework by catching architectural mistakes early.'
    },
    {
      html: 'Today I run <strong>HireDeveloperShop</strong> — a lean, senior-only consultancy that gives you agency-quality output at freelance rates. No juniors, no middlemen, no fluff.'
    }
  ],
  cardTitle: '⚡ Career Timeline',
  timeline: [
    {
      year: '2016',
      textHtml:
        '<strong>First freelance project</strong> — a business website that turned into a 6-month SaaS build.'
    },
    {
      year: '2018',
      textHtml:
        '<strong>Joined Upwork</strong> — quickly reached Top Rated status with 5-star reviews across 15+ clients.'
    },
    {
      year: '2020',
      textHtml:
        '<strong>Pivoted to full-stack</strong> — added React, Next.js, Node.js and cloud infrastructure to the toolkit.'
    },
    {
      year: '2022',
      textHtml:
        '<strong>AI & Automation</strong> — started building LLM-powered tools and workflow automation for B2B clients.'
    },
    {
      year: '2024',
      textHtml:
        '<strong>HireDeveloperShop launched</strong> — formalised as a consultancy. 50+ projects, 3 continents.'
    }
  ]
} as const;

export const ABOUT_MISSION = {
  sectionLabel: 'What Drives Me',
  titleLine1: 'My Mission & ',
  titleEmphasis: 'Approach',
  sub: 'Three principles that shape every project I take on.',
  cards: [
    {
      id: 'outcomes',
      icon: '🎯',
      iconTone: 'blue' as const,
      title: 'Outcomes Over Output',
      description:
        "Lines of code don't move the needle — results do. Every decision is tied to your business goal, not just what looks good in a pull request."
    },
    {
      id: 'depth',
      icon: '🔬',
      iconTone: 'purple' as const,
      title: 'Engineering Depth',
      description:
        'I go beyond surface-level solutions. Performance, scalability, and maintainability are baked in from day one — not bolted on later.'
    },
    {
      id: 'transparency',
      icon: '🤝',
      iconTone: 'cyan' as const,
      title: 'Radical Transparency',
      description:
        "Daily updates, honest timelines, and hard conversations when needed. You'll never wonder what's happening with your project."
    }
  ]
} as const;

export const ABOUT_VALUES = {
  sectionLabel: 'Core Values',
  titleLine1: 'How I Work With ',
  titleEmphasis: 'Clients',
  items: [
    {
      id: 'v1',
      num: '01',
      title: 'You Own Everything',
      description:
        "Full IP transfer on delivery. Source code, assets, infrastructure — it's all yours from day one, no lock-in."
    },
    {
      id: 'v2',
      num: '02',
      title: 'Scope Clarity Before Code',
      description:
        'Every project starts with a written brief and scoped deliverables. Surprises are for birthdays, not invoices.'
    },
    {
      id: 'v3',
      num: '03',
      title: 'Async-First Communication',
      description:
        "Detailed Loom updates and structured check-ins. No pointless meetings — your time is as valuable as mine."
    },
    {
      id: 'v4',
      num: '04',
      title: 'Long-Term Thinking',
      description:
        'I build to last. The code I write today should still be maintainable in three years, by any developer.'
    }
  ],
  quote:
    "I don't just write code — I join your team temporarily and care about your product as if it were my own. That's the only way I know how to work.",
  citeName: 'Vijay Sharma',
  citeRole: 'Founder, HireDeveloperShop',
  tags: [
    'Clean Code',
    'Agile Delivery',
    'Test Coverage',
    'CI/CD Pipelines',
    'Code Reviews',
    'Documentation',
    'Post-Launch Support',
    'Upwork Top Rated'
  ]
} as const;

export const ABOUT_PROCESS = {
  sectionLabel: 'How We Work',
  titleLine1: 'From Idea to ',
  titleEmphasis: 'Launch',
  sub: 'A repeatable, battle-tested process that ships on time.',
  steps: [
    {
      id: 'p1',
      num: '01',
      title: 'Discovery Call',
      description:
        '30-min deep dive into your requirements, goals, and constraints. Free, no commitment.'
    },
    {
      id: 'p2',
      num: '02',
      title: 'Scoped Proposal',
      description:
        'Detailed written spec, timeline, and fixed-price quote. No scope creep surprises.'
    },
    {
      id: 'p3',
      num: '03',
      title: 'Iterative Build',
      description:
        'Weekly demos, daily async updates, and GitHub visibility into every commit.'
    },
    {
      id: 'p4',
      num: '04',
      title: 'Launch + Handoff',
      description:
        'Production deploy, full documentation, and 30-day post-launch support included.'
    }
  ]
} as const;

export const ABOUT_TEAM = {
  sectionLabel: 'The Team',
  titleLine1: 'Senior-Only, ',
  titleEmphasis: 'No Middlemen',
  avatarInitials: 'VS',
  name: 'Vijay Sharma',
  role: 'Full-Stack Developer & IT Consultant',
  bio: 'Based in India, working globally. 8+ years building web apps, SaaS platforms, AI integrations, and eCommerce solutions for clients across 3 continents.',
  badges: ['Upwork Top Rated', '5.0 ⭐ Rating', '50+ Projects'],
  skillsHeading: 'Technical Depth',
  skills: [
    { id: 'sk1', label: 'React / Next.js', percent: 95 },
    { id: 'sk2', label: 'Node.js / Express', percent: 92 },
    { id: 'sk3', label: 'TypeScript', percent: 90 },
    { id: 'sk4', label: 'AWS / DevOps', percent: 85 },
    { id: 'sk5', label: 'AI / LLM Integration', percent: 88 }
  ],
  extraCards: [
    {
      id: 'e1',
      title: '🌍 Timezone Coverage',
      description: 'IST (UTC+5:30) with flexible overlap for UK, EU, and US-East clients.'
    },
    {
      id: 'e2',
      title: '🗣️ Communication',
      description: 'Fluent English. Slack, email, Loom, and Zoom — whichever you prefer.'
    },
    {
      id: 'e3',
      title: '📋 Project Tools',
      description: 'GitHub, Jira, Linear, Notion — I adapt to your workflow, not the other way.'
    },
    {
      id: 'e4',
      title: '⚡ Response Time',
      description: 'Under 4 hours during business hours. Critical issues get same-day response.'
    }
  ]
} as const;

export const ABOUT_STACK = {
  sectionLabel: 'Technology',
  titleLine1: 'Tools I Trust in ',
  titleEmphasis: 'Production',
  sub: "Not trend-chasing — a curated stack I've used on real client projects.",
  rows: [
    [
      { label: 'React', accent: true },
      { label: 'Next.js', accent: true },
      { label: 'Vue.js', accent: false },
      { label: 'Angular', accent: false },
      { label: 'TypeScript', accent: true },
      { label: 'Tailwind CSS', accent: false },
      { label: 'HTML5 / CSS3', accent: false }
    ],
    [
      { label: 'Node.js', accent: true },
      { label: 'Express.js', accent: false },
      { label: 'PHP', accent: false },
      { label: 'Laravel', accent: false },
      { label: 'REST APIs', accent: false },
      { label: 'GraphQL', accent: true }
    ],
    [
      { label: 'MongoDB', accent: false },
      { label: 'PostgreSQL', accent: true },
      { label: 'MySQL', accent: false },
      { label: 'Firebase', accent: false },
      { label: 'Redis', accent: false }
    ],
    [
      { label: 'AWS', accent: true },
      { label: 'Docker', accent: false },
      { label: 'CI/CD', accent: false },
      { label: 'Nginx', accent: false },
      { label: 'OpenAI API', accent: true },
      { label: 'LangChain', accent: false },
      { label: 'Stripe', accent: false },
      { label: 'Razorpay', accent: false }
    ]
  ]
} as const;

export const ABOUT_CTA = {
  sectionLabel: 'Ready to Build?',
  titleBefore: "Let's Turn Your ",
  titleEm: 'Idea',
  titleAfter: ' Into a Product',
  description:
    "Whether you're starting from scratch or scaling an existing platform — I'd love to hear what you're building.",
  primaryLabel: 'Start a Project',
  primaryHref: '/#contact',
  secondaryLabel: '💬 Chat on WhatsApp',
  secondaryHref: 'https://wa.me/918527594730'
} as const;
