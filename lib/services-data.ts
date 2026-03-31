export type ServiceColor =
  | 'blue'
  | 'purple'
  | 'green'
  | 'cyan'
  | 'orange'
  | 'pink'
  | 'yellow';

/** Services page grid item (distinct from home `Service` in `@/types`). */
export type Service = {
  id: string;
  title: string;
  desc: string;
  icon: string;
  color: ServiceColor;
  tags: string[];
  category: string;
  /** Present on elements that match legacy `#anchor` scroll targets. */
  scrollAnchor?: string;
};

export type Industry = {
  id: string;
  icon: string;
  title: string;
  desc: string;
};

export type Step = {
  num: string;
  title: string;
  desc: string;
};

export type FAQItem = {
  question: string;
  answer: string;
};

export type ComparisonTone = 'yes' | 'no' | 'maybe';

export type ComparisonCell = {
  text: string;
  tone: ComparisonTone;
};

export type ComparisonRow = {
  feature: string;
  hireDeveloperShop: ComparisonCell;
  largeAgency: ComparisonCell;
  juniorFreelancer: ComparisonCell;
  offshoreTeam: ComparisonCell;
};

export const SERVICES: Service[] = [
  {
    id: 'web-development',
    title: 'Web Development',
    desc: 'Custom, performant web applications built with modern frameworks. From marketing sites to complex SaaS dashboards — pixel-perfect, fast, and accessible.',
    icon: '🌐',
    color: 'blue',
    tags: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'SSR/SSG'],
    category: 'Web & Frontend'
  },
  {
    id: 'frontend-development',
    title: 'Frontend Development',
    desc: 'Component-driven UIs with exceptional UX. Vue, Angular, or React — whatever your stack requires. Mobile-first, WCAG compliant, and optimised for Core Web Vitals.',
    icon: '🎨',
    color: 'blue',
    tags: ['React', 'Vue.js', 'Angular', 'UI/UX', 'Core Web Vitals'],
    category: 'Web & Frontend'
  },
  {
    id: 'backend-development',
    title: 'Backend Development',
    desc: 'Scalable server-side architecture, REST APIs, GraphQL, and microservices. Built for high availability, security, and clean separation of concerns.',
    icon: '⚙️',
    color: 'purple',
    tags: ['Node.js', 'Express', 'GraphQL', 'REST API', 'Microservices'],
    category: 'Backend & API',
    scrollAnchor: 'backend'
  },
  {
    id: 'ai-llm',
    title: 'AI & LLM Integration',
    desc: 'Integrate GPT-4, Claude, Gemini, or open-source LLMs into your product. RAG pipelines, fine-tuning, AI agents, context-aware chat, and custom model wrappers.',
    icon: '🤖',
    color: 'purple',
    tags: ['OpenAI API', 'LangChain', 'Claude API', 'RAG', 'Embeddings'],
    category: 'AI & Automation',
    scrollAnchor: 'ai'
  },
  {
    id: 'ai-automation',
    title: 'AI Automation & Workflow',
    desc: 'Replace manual processes with intelligent automation. Document processing, email triage, data enrichment, lead scoring, and multi-step AI pipelines that run 24/7.',
    icon: '⚡',
    color: 'purple',
    tags: ['n8n', 'Zapier API', 'Make.com', 'Python', 'Custom Pipelines'],
    category: 'AI & Automation'
  },
  {
    id: 'ai-chatbots',
    title: 'AI Chatbots & Agents',
    desc: 'Intelligent conversational agents with memory, tool use, and business logic. Customer support bots, lead qualification agents, internal knowledge assistants, and CRM-synced chat.',
    icon: '💬',
    color: 'purple',
    tags: ['LangGraph', 'Function Calling', 'Vector DB', 'Pinecone', 'Weaviate'],
    category: 'AI & Automation'
  },
  {
    id: 'qa-testing',
    title: 'QA & Automated Testing',
    desc: 'End-to-end, unit, integration, and performance testing. Catch regressions before they ship. Set up CI-integrated test suites that run on every PR automatically.',
    icon: '🧪',
    color: 'green',
    tags: ['Playwright', 'Cypress', 'Vitest', 'Jest', 'K6'],
    category: 'QA & Testing',
    scrollAnchor: 'testing'
  },
  {
    id: 'iot',
    title: 'IoT & Embedded Systems',
    desc: 'Connect physical devices to the cloud. Build firmware interfaces, MQTT brokers, real-time dashboards, and device management platforms for industrial or consumer IoT.',
    icon: '📡',
    color: 'cyan',
    tags: ['MQTT', 'WebSockets', 'AWS IoT', 'Node-RED', 'Time-Series DB'],
    category: 'Mobile & IoT',
    scrollAnchor: 'mobile'
  },
  {
    id: 'mobile-apps',
    title: 'Mobile App Development',
    desc: 'Cross-platform mobile apps that feel native. From MVP to production — App Store and Google Play ready. Offline support, push notifications, and API integration included.',
    icon: '📱',
    color: 'cyan',
    tags: ['React Native', 'Expo', 'iOS', 'Android', 'PWA'],
    category: 'Mobile & IoT'
  },
  {
    id: 'ecommerce',
    title: 'eCommerce Development',
    desc: 'Full-featured online stores built to convert. Custom themes, checkout flows, inventory management, multi-currency, and payment gateway integration for any market.',
    icon: '🛒',
    color: 'orange',
    tags: ['Shopify', 'WooCommerce', 'Next Commerce', 'Stripe', 'Razorpay'],
    category: 'eCommerce',
    scrollAnchor: 'ecommerce'
  },
  {
    id: 'cloud-devops',
    title: 'Cloud & DevOps',
    desc: 'Infrastructure as code, CI/CD pipelines, containerisation, and zero-downtime deployments. Cut cloud costs, improve reliability, and ship 10x faster with automated pipelines.',
    icon: '☁️',
    color: 'blue',
    tags: ['AWS', 'Docker', 'GitHub Actions', 'Terraform', 'Nginx'],
    category: 'Cloud & DevOps',
    scrollAnchor: 'cloud'
  },
  {
    id: 'php-laravel',
    title: 'PHP & Laravel Development',
    desc: 'Robust backend systems built with Laravel. REST APIs, admin panels, multi-tenant SaaS, authentication, queues, and scheduled jobs — production-grade from day one.',
    icon: '🐘',
    color: 'orange',
    tags: ['Laravel', 'PHP 8.x', 'Livewire', 'Filament', 'MySQL'],
    category: 'Migration & Legacy',
    scrollAnchor: 'migration'
  },
  {
    id: 'legacy-migration',
    title: 'Legacy System Migration',
    desc: 'Modernise outdated codebases without downtime. Migrate from legacy PHP, jQuery, ColdFusion, or monoliths to modern stacks with zero data loss and a tested rollback plan.',
    icon: '🔄',
    color: 'yellow',
    tags: ['PHP → Node.js', 'jQuery → React', 'Monolith → Micro', 'DB Migration'],
    category: 'Migration & Legacy'
  },
  {
    id: 'cms-nocode',
    title: 'CMS & No-Code',
    desc: 'Content-managed sites that your team can update without developers. Headless CMS setups, Webflow custom code, WordPress performance audits, and Sanity integrations.',
    icon: '📝',
    color: 'green',
    tags: ['WordPress', 'Webflow', 'Sanity', 'Contentful', 'Headless CMS'],
    category: 'CMS'
  },
  {
    id: 'database-architecture',
    title: 'Database Architecture',
    desc: 'Schema design, indexing, query optimisation, and data modelling for scale. SQL and NoSQL expertise — from greenfield design to fixing slow production databases.',
    icon: '🗄️',
    color: 'blue',
    tags: ['PostgreSQL', 'MongoDB', 'Redis', 'Firebase', 'Prisma ORM'],
    category: 'Data'
  },
  {
    id: 'saas-product',
    title: 'SaaS Product Development',
    desc: 'End-to-end SaaS builds — multi-tenancy, role-based access, subscription billing, onboarding flows, usage analytics, and white-label support. Ship your MVP in weeks.',
    icon: '🚀',
    color: 'purple',
    tags: ['Multi-tenant', 'Stripe Billing', 'Auth', 'Admin Panel', 'Analytics'],
    category: 'SaaS'
  },
  {
    id: 'technical-seo',
    title: 'Technical SEO & Performance',
    desc: 'Core Web Vitals, structured data, crawl optimisation, server-side rendering, image optimisation, and Lighthouse audits. Rank higher by fixing what\'s under the hood.',
    icon: '📈',
    color: 'green',
    tags: ['Core Web Vitals', 'Schema Markup', 'SSR/SSG', 'Lighthouse', 'PageSpeed'],
    category: 'Consulting & SEO',
    scrollAnchor: 'consulting'
  },
  {
    id: 'it-consultancy',
    title: 'IT Consultancy & Architecture',
    desc: 'Tech stack advice, architecture reviews, code audits, and roadmap planning. Get an expert second opinion before you build — or fix what went wrong mid-project.',
    icon: '💡',
    color: 'pink',
    tags: ['Tech Audit', 'Roadmap', 'Stack Choice', 'Code Review', 'CTO Advisory'],
    category: 'Consulting & SEO'
  }
];

export const INDUSTRIES: Industry[] = [
  {
    id: 'saas',
    icon: '🏢',
    title: 'SaaS & Startups',
    desc: 'MVPs, growth features, billing, and multi-tenant architecture.'
  },
  {
    id: 'ecommerce-retail',
    icon: '🛍️',
    title: 'eCommerce & Retail',
    desc: 'Stores, inventory, payments, and conversion optimisation.'
  },
  {
    id: 'healthtech',
    icon: '🏥',
    title: 'HealthTech',
    desc: 'Patient portals, appointment systems, and HIPAA-aware builds.'
  },
  {
    id: 'fintech',
    icon: '💰',
    title: 'FinTech',
    desc: 'Payment flows, dashboards, compliance, and secure APIs.'
  },
  {
    id: 'edtech',
    icon: '🎓',
    title: 'EdTech',
    desc: 'LMS platforms, video delivery, quizzes, and progress tracking.'
  },
  {
    id: 'industrial-iot',
    icon: '🏭',
    title: 'Industrial & IoT',
    desc: 'Device dashboards, MQTT pipelines, and real-time monitoring.'
  },
  {
    id: 'proptech',
    icon: '🏠',
    title: 'Real Estate & PropTech',
    desc: 'Listing platforms, search, CRM integrations, and maps.'
  },
  {
    id: 'marketing',
    icon: '📣',
    title: 'Marketing & Agencies',
    desc: 'Landing pages, CMS setups, analytics, and performance SEO.'
  }
];

export const PROCESS_STEPS: Step[] = [
  {
    num: '01',
    title: 'Discovery',
    desc: 'Free 30-min call. Understand your goals, constraints, and define success criteria upfront.'
  },
  {
    num: '02',
    title: 'Scoped Proposal',
    desc: 'Written brief, fixed-price quote, timeline, and milestone breakdown. No ambiguity.'
  },
  {
    num: '03',
    title: 'Iterative Build',
    desc: 'Weekly demos, daily async updates, GitHub access. You see progress every step.'
  },
  {
    num: '04',
    title: 'QA & Review',
    desc: 'Automated tests, manual review, performance audit, and client UAT sign-off.'
  },
  {
    num: '05',
    title: 'Launch + Handoff',
    desc: 'Production deploy, full docs, training, and 30-day post-launch support included.'
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'How long does a typical project take?',
    answer:
      'It depends on scope. A landing page takes 3–5 days. An MVP SaaS typically 4–6 weeks. Full eCommerce builds run 2–4 weeks. Every project gets a scoped timeline in the proposal before any work begins.'
  },
  {
    question: 'Do you work with existing codebases?',
    answer:
      'Yes — a significant portion of our work is adding features, fixing bugs, or migrating legacy systems. We do a code audit first to understand the existing architecture before quoting.'
  },
  {
    question: 'Can I hire you for a single service, or do I need a full package?',
    answer:
      'Absolutely — you can hire for a single service like "set up CI/CD pipelines" or "build a RAG chatbot". No minimum commitment. Most clients start with one service and expand from there.'
  },
  {
    question: 'What is your pricing model?',
    answer:
      'We offer fixed-price project quotes for defined scopes, and hourly rates for ongoing retainers or maintenance. Starter projects from $499. Full-stack builds from $1,999. Enterprise custom.'
  },
  {
    question: 'Do you sign NDAs and provide contracts?',
    answer:
      'Yes. We sign NDAs before discovery calls when requested, and provide a formal contract outlining scope, deliverables, payment milestones, and IP transfer terms for every engagement.'
  },
  {
    question: 'What happens after the project is delivered?',
    answer:
      'Every project includes 30 days of post-launch support at no extra cost. After that, we offer retainer plans for ongoing maintenance, feature additions, or monitoring. You\'re never left on your own.'
  }
];

export const COMPARISON_ROWS: ComparisonRow[] = [
  {
    feature: 'Senior engineer on every task',
    hireDeveloperShop: { text: '✓ Always', tone: 'yes' },
    largeAgency: { text: '~ Sometimes', tone: 'maybe' },
    juniorFreelancer: { text: '✗ No', tone: 'no' },
    offshoreTeam: { text: '~ Mixed', tone: 'maybe' }
  },
  {
    feature: 'Fixed-price project quotes',
    hireDeveloperShop: { text: '✓ Yes', tone: 'yes' },
    largeAgency: { text: '✗ Time & material', tone: 'no' },
    juniorFreelancer: { text: '~ Sometimes', tone: 'maybe' },
    offshoreTeam: { text: '✗ Rarely', tone: 'no' }
  },
  {
    feature: 'Daily async updates',
    hireDeveloperShop: { text: '✓ Yes', tone: 'yes' },
    largeAgency: { text: '✗ Weekly only', tone: 'no' },
    juniorFreelancer: { text: '~ Varies', tone: 'maybe' },
    offshoreTeam: { text: '✗ Rarely', tone: 'no' }
  },
  {
    feature: 'Automated tests included',
    hireDeveloperShop: { text: '✓ Standard', tone: 'yes' },
    largeAgency: { text: '~ Extra cost', tone: 'maybe' },
    juniorFreelancer: { text: '✗ No', tone: 'no' },
    offshoreTeam: { text: '✗ Extra cost', tone: 'no' }
  },
  {
    feature: 'Full IP transfer on delivery',
    hireDeveloperShop: { text: '✓ Yes', tone: 'yes' },
    largeAgency: { text: '~ Negotiated', tone: 'maybe' },
    juniorFreelancer: { text: '✓ Usually', tone: 'yes' },
    offshoreTeam: { text: '✗ Often retained', tone: 'no' }
  },
  {
    feature: '30-day post-launch support',
    hireDeveloperShop: { text: '✓ Included', tone: 'yes' },
    largeAgency: { text: '✗ Billed extra', tone: 'no' },
    juniorFreelancer: { text: '✗ No', tone: 'no' },
    offshoreTeam: { text: '✗ SLA required', tone: 'no' }
  },
  {
    feature: 'Cost vs agency',
    hireDeveloperShop: { text: '✓ 40-60% less', tone: 'yes' },
    largeAgency: { text: '✗ Highest', tone: 'no' },
    juniorFreelancer: { text: '✓ Cheapest', tone: 'yes' },
    offshoreTeam: { text: '~ Mid-range', tone: 'maybe' }
  }
];

export const AI_DEEP_DIVE_FEATURES = [
  {
    title: 'RAG Pipelines',
    body: 'Connect LLMs to your documents, databases, or knowledge base with retrieval-augmented generation.'
  },
  {
    title: 'AI Agents with Tool Use',
    body: 'Autonomous agents that call APIs, query databases, send emails, and take actions on your behalf.'
  },
  {
    title: 'Custom Model Wrappers',
    body: 'Prompt engineering, token optimisation, fallback logic, and cost monitoring — production-ready from day one.'
  },
  {
    title: 'Document Intelligence',
    body: 'Extract, classify, and transform data from PDFs, invoices, emails, and unstructured text at scale.'
  }
] as const;

/** Lines shown in the AI deep-dive terminal (typewriter order). */
export const AI_TERMINAL_LINES: string[] = [
  '// AI RAG pipeline — production ready',
  "import { RAGChain } from '@/lib/ai';",
  '',
  'const chain = await RAGChain.create({',
  "  model: 'gpt-4o',",
  "  vectorStore: 'pinecone',",
  "  namespace: 'client-docs',",
  '  topK: 8,',
  '});',
  '',
  'const answer = await chain.query(',
  '  "Summarise Q3 compliance report"',
  ');',
  '',
  '// ✓ Retrieved 8 chunks | 1.2s | $0.004',
  '// ✓ Answer generated with citations',
  '// ✓ Logged to observability dashboard'
];

export type CategoryNavItem = {
  id: string;
  label: string;
};

/** Order matches scroll-spy behaviour with section `#id` elements. */
export const CATEGORY_NAV_ITEMS: CategoryNavItem[] = [
  { id: 'all-services', label: 'All Services' },
  { id: 'web', label: 'Web & Frontend' },
  { id: 'backend', label: 'Backend & API' },
  { id: 'ai', label: 'AI & Automation' },
  { id: 'mobile', label: 'Mobile & IoT' },
  { id: 'cloud', label: 'Cloud & DevOps' },
  { id: 'ecommerce', label: 'eCommerce' },
  { id: 'migration', label: 'Migration & Legacy' },
  { id: 'testing', label: 'QA & Testing' },
  { id: 'consulting', label: 'Consulting & SEO' }
];
