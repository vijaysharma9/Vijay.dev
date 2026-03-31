export type Project = {
  id: string;
  title: string;
  category: string;
  cat: 'all' | 'saas' | 'ai' | 'ecommerce' | 'mobile' | 'fintech' | 'health' | 'devops';
  desc: string;
  tags: string[];
  result: string;
  resultColor: 'green' | 'blue' | 'orange' | 'yellow' | 'pink' | 'cyan';
  imgClass: string;
  icon: string;
};

export type FeaturedCase = {
  title: string;
  eyebrow: string;
  description: string;
  industry: string;
  timeline: string;
  teamSize: string;
  region: string;
  results: { num: string; label: string }[];
  stack: string[];
  anchorId: string;
  terminalLines: string[];
};

export type CaseDeep = {
  heading: string;
  subheading: string;
  challenges: string[];
  solutions: string[];
  outcomes: { num: string; label: string }[];
};

export type WorkIndustry = {
  icon: string;
  name: string;
  desc: string;
  count: string;
};

export type WorkTestimonial = {
  id: string;
  quote: string;
  name: string;
  role: string;
  initials: string;
  avatarGradient: string;
};

export type Step = {
  num: string;
  title: string;
  desc: string;
};

export const PROJECTS: Project[] = [
  {
    id: 'saas-analytics',
    title: 'Multi-Tenant Analytics Platform',
    category: 'SaaS · Dashboard',
    cat: 'saas',
    desc: 'Real-time business intelligence dashboard with multi-tenancy, RBAC, Stripe billing, and white-label support for 2,400+ concurrent tenants.',
    tags: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe'],
    result: '↑ 4× Revenue Growth',
    resultColor: 'green',
    imgClass: 'saas',
    icon: '📊'
  },
  {
    id: 'ecom-payments',
    title: 'Custom eCommerce Store with Payments',
    category: 'eCommerce · Shopify',
    cat: 'ecommerce',
    desc: 'Full-featured Shopify store with custom Liquid theme, Razorpay integration, automated inventory sync, and a headless checkout flow.',
    tags: ['Shopify', 'Liquid', 'Razorpay', 'Node.js'],
    result: '↑ 38% Conversion Rate',
    resultColor: 'orange',
    imgClass: 'ecom',
    icon: '🛒'
  },
  {
    id: 'ai-chatbot',
    title: 'AI Chatbot System for B2B SaaS',
    category: 'AI · LLM Integration',
    cat: 'ai',
    desc: 'Custom AI assistant with conversation memory, lead capture, CRM sync, and RAG over product docs. Handles 85% of support queries autonomously.',
    tags: ['OpenAI', 'LangChain', 'Next.js', 'Pinecone'],
    result: '85% Queries Automated',
    resultColor: 'green',
    imgClass: 'ai',
    icon: '🤖'
  },
  {
    id: 'custom-crm',
    title: 'Custom CRM for Sales Teams',
    category: 'SaaS · CRM',
    cat: 'saas',
    desc: 'Bespoke CRM with pipeline management, email automation, reporting dashboards, and a mobile app — replacing Salesforce for a 60-person sales team.',
    tags: ['Angular', 'Node.js', 'PostgreSQL', 'SendGrid'],
    result: '↓ 65% CRM Cost Savings',
    resultColor: 'blue',
    imgClass: 'crm',
    icon: '🗂️'
  },
  {
    id: 'ai-docs',
    title: 'AI Document Processing Pipeline',
    category: 'AI · Automation',
    cat: 'ai',
    desc: 'Automated invoice extraction, classification, and ERP sync using LLMs. Processes 10,000+ documents/day with 97.3% accuracy — replacing a 5-person team.',
    tags: ['Python', 'GPT-4o', 'FastAPI', 'AWS Lambda'],
    result: '97.3% Accuracy',
    resultColor: 'yellow',
    imgClass: 'seo',
    icon: '⚡'
  },
  {
    id: 'mobile-booking',
    title: 'On-Demand Service Booking App',
    category: 'Mobile · React Native',
    cat: 'mobile',
    desc: 'iOS & Android app for booking home services — real-time tracking, in-app payments, push notifications, and provider dashboards. 10k+ downloads in 3 months.',
    tags: ['React Native', 'Expo', 'Stripe', 'Firebase'],
    result: '10k+ Downloads · 3 Months',
    resultColor: 'pink',
    imgClass: 'mobile',
    icon: '📱'
  },
  {
    id: 'health-telemed',
    title: 'Telemedicine & Appointment Platform',
    category: 'HealthTech · Patient Portal',
    cat: 'health',
    desc: 'HIPAA-aware patient portal with video consultations, appointment scheduling, prescription management, and insurance verification API integrations.',
    tags: ['Next.js', 'Node.js', 'Twilio', 'PostgreSQL'],
    result: '↑ 220% Appointments/Month',
    resultColor: 'green',
    imgClass: 'health',
    icon: '🏥'
  },
  {
    id: 'fintech-gateway',
    title: 'Multi-Currency Payment Gateway',
    category: 'FinTech · Payments',
    cat: 'fintech',
    desc: 'Custom payment processing platform supporting 12 currencies, fraud detection, reconciliation dashboards, and webhook-based accounting system integrations.',
    tags: ['Laravel', 'Stripe', 'React', 'Redis'],
    result: '$2M+ Monthly Volume',
    resultColor: 'blue',
    imgClass: 'fintech',
    icon: '💰'
  },
  {
    id: 'iot-monitoring',
    title: 'Industrial IoT Monitoring Platform',
    category: 'IoT · Real-Time Dashboard',
    cat: 'devops',
    desc: 'Real-time monitoring for 500+ industrial sensors — MQTT broker, time-series database, alerting system, and a live dashboard with anomaly detection.',
    tags: ['MQTT', 'Node.js', 'InfluxDB', 'AWS IoT'],
    result: '500+ Live Sensors',
    resultColor: 'cyan',
    imgClass: 'iot',
    icon: '📡'
  }
];

export const FEATURED_CASE: FeaturedCase = {
  title: 'Multi-Tenant SaaS Analytics Dashboard',
  eyebrow: '✦ Featured — SaaS Platform',
  description:
    'A B2B SaaS platform for real-time business analytics — built from scratch with multi-tenancy, role-based access, subscription billing, and a white-label option for enterprise clients. Shipped in 11 weeks from discovery to production.',
  industry: 'B2B SaaS',
  timeline: '11 weeks',
  teamSize: 'Solo → 3 devs',
  region: 'UK / India',
  results: [
    { num: '2,400', label: 'Concurrent Tenants' },
    { num: '99.97%', label: 'Uptime (6mo)' },
    { num: '847ms', label: 'Avg Response' },
    { num: '4×', label: 'Revenue Growth' }
  ],
  stack: ['Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Redis', 'Stripe', 'AWS', 'Docker'],
  anchorId: 'case-saas',
  terminalLines: [
    '// SaaS multi-tenant dashboard',
    "const tenant = await getTenant(ctx.id);",
    'const metrics = await getMetrics({',
    "  tenantId: tenant.id,",
    "  period: 'last_30_days',",
    '  realtime: true,',
    '});',
    '',
    '// ✓ 847ms avg response',
    '// ✓ 99.97% uptime — 6 months',
    '// ✓ 2,400 concurrent tenants'
  ]
};

export const CASE_DEEP: CaseDeep = {
  heading: 'How We Built a SaaS Platform That Scaled to 2,400 Tenants',
  subheading:
    'A behind-the-scenes look at the architecture decisions, challenges, and outcomes from one of our most complex engagements.',
  challenges: [
    'Existing codebase was a single-tenant monolith — needed full multi-tenant refactor without downtime.',
    'Real-time dashboard needed sub-second query performance across 100GB+ of time-series data.',
    'Stripe billing had to support 4 pricing tiers, usage-based billing, and annual/monthly toggle.',
    'White-label requirement meant custom domain, branding, and email per enterprise tenant.',
    '11-week deadline to hit a Series A investor milestone — no buffer for rewrites.'
  ],
  solutions: [
    'Strangler-fig migration pattern — extracted tenant module incrementally while keeping prod live.',
    'TimescaleDB on PostgreSQL + Redis caching layer → 847ms p95 on 100GB dataset.',
    'Stripe Billing portal integration with webhook idempotency and retry logic from day one.',
    'Subdomain routing + per-tenant config store for white-label with zero shared infrastructure bleed.',
    'Shipped week 10 — one week early — with full test coverage and Playwright E2E suite.'
  ],
  outcomes: [
    { num: '11wk', label: 'Discovery to Production' },
    { num: '99.97%', label: 'Uptime First 6 Months' },
    { num: '4×', label: 'Revenue in 90 Days Post-Launch' },
    { num: '0', label: 'Downtime During Migration' }
  ]
};

export const INDUSTRIES: WorkIndustry[] = [
  { icon: '🏢', name: 'SaaS & Startups', desc: 'MVPs, growth features, billing architecture.', count: '18 projects' },
  {
    icon: '🛍️',
    name: 'eCommerce & Retail',
    desc: 'Stores, inventory, conversion optimisation.',
    count: '10 projects'
  },
  {
    icon: '🤖',
    name: 'AI & Automation',
    desc: 'LLM integrations, agents, workflow pipelines.',
    count: '8 projects'
  },
  {
    icon: '🏥',
    name: 'HealthTech',
    desc: 'Patient portals, telemedicine, scheduling.',
    count: '4 projects'
  },
  { icon: '💰', name: 'FinTech', desc: 'Payment flows, compliance, dashboards.', count: '5 projects' },
  {
    icon: '📱',
    name: 'Mobile Apps',
    desc: 'iOS & Android, React Native, PWAs.',
    count: '6 projects'
  },
  {
    icon: '📡',
    name: 'IoT & Industrial',
    desc: 'Device dashboards, MQTT, real-time monitoring.',
    count: '3 projects'
  },
  {
    icon: '📣',
    name: 'Marketing & SEO',
    desc: 'Landing pages, CMS, Core Web Vitals.',
    count: '6 projects'
  }
];

export const TESTIMONIALS: WorkTestimonial[] = [
  {
    id: 'rk',
    quote:
      '"Delivered a production-grade SaaS platform in 11 weeks. The architecture was clean, the code was documented, and the Stripe integration worked flawlessly from day one."',
    name: 'Rahul K.',
    role: 'Startup Founder, SaaS',
    initials: 'RK',
    avatarGradient: 'linear-gradient(135deg,#4f8cff,#a259ff)'
  },
  {
    id: 'sp',
    quote:
      '"The eCommerce store they built increased our conversion rate by 38% compared to our previous Shopify theme. Payment integration was seamless across markets."',
    name: 'Sarah P.',
    role: 'eCommerce Owner',
    initials: 'SP',
    avatarGradient: 'linear-gradient(135deg,#ff7a45,#ffd24d)'
  },
  {
    id: 'am',
    quote:
      '"The AI chatbot they built handles 85% of our support tickets without human intervention. ROI was positive within the first month. Communication throughout was outstanding."',
    name: 'Amit M.',
    role: 'Product Manager, B2B SaaS',
    initials: 'AM',
    avatarGradient: 'linear-gradient(135deg,#00e5a0,#4f8cff)'
  }
];

export const PROCESS_STEPS: Step[] = [
  {
    num: '01',
    title: 'Discovery',
    desc: 'Free 30-min call. Map requirements, define success, identify risks early.'
  },
  {
    num: '02',
    title: 'Scoped Proposal',
    desc: 'Fixed-price quote, written spec, milestone breakdown — signed before work begins.'
  },
  {
    num: '03',
    title: 'Iterative Build',
    desc: 'Weekly demos, daily async updates, GitHub visibility. No surprises.'
  },
  {
    num: '04',
    title: 'QA & UAT',
    desc: 'Automated test suite, Playwright E2E, client sign-off before go-live.'
  },
  {
    num: '05',
    title: 'Launch + Support',
    desc: 'Production deploy, full docs, training, 30-day post-launch support included.'
  }
];

