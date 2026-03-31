export type StackLevel = 'expert' | 'advanced' | 'proficient' | 'working';

export type StackItem = {
  name: string;
  icon: string;
  level: StackLevel;
};

export type StackCategory = {
  id: string;
  icon: string;
  /** Tailwind classes for category header icon background */
  colorClass: string;
  title: string;
  count: string;
  items: StackItem[];
};

export type AITool = {
  name: string;
  icon: string;
  desc: string;
  badge: string;
};

export type ExpertiseBarVariant = 'default' | 'green' | 'orange' | 'pink';

export type ExpertiseBar = {
  name: string;
  pct: number;
  years: string;
  variant: ExpertiseBarVariant;
};

export type ExpertiseGroup = {
  label: string;
  bars: ExpertiseBar[];
};

export type TrendBadge = 'hot' | 'new' | 'rising';

export type TrendItem = {
  icon: string;
  title: string;
  desc: string;
  badge: TrendBadge;
  tags: string[];
};

export type CompareTone = 'yes' | 'no' | 'maybe';

export type CompareRow = {
  scenario: string;
  hireDeveloperShop: { text: string; tone: CompareTone };
  genericDev: { text: string; tone: CompareTone };
};

export const STACK_NAV_ITEMS: { id: string; label: string }[] = [
  { id: 'all-stacks', label: 'All' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'backend', label: 'Backend' },
  { id: 'database', label: 'Database' },
  { id: 'cloud', label: 'Cloud & DevOps' },
  { id: 'ai-tools', label: 'AI & LLM' },
  { id: 'mobile', label: 'Mobile' },
  { id: 'cms', label: 'CMS & No-Code' },
  { id: 'testing', label: 'Testing & QA' },
  { id: 'payments', label: 'Payments & APIs' },
  { id: 'iot', label: 'IoT & Realtime' }
];

export const STACK_CATEGORIES: StackCategory[] = [
  {
    id: 'frontend',
    icon: '🎨',
    colorClass: 'bg-[rgba(79,140,255,0.12)]',
    title: 'Frontend & UI',
    count: '14 technologies',
    items: [
      { name: 'React', icon: '⚛️', level: 'expert' },
      { name: 'Next.js 15', icon: '▲', level: 'expert' },
      { name: 'TypeScript', icon: '🟦', level: 'expert' },
      { name: 'Vue.js 3', icon: '💚', level: 'advanced' },
      { name: 'Angular 17', icon: '🔴', level: 'advanced' },
      { name: 'Tailwind CSS', icon: '🌊', level: 'expert' },
      { name: 'Framer Motion', icon: '🎭', level: 'advanced' },
      { name: 'Webpack / Vite', icon: '📦', level: 'advanced' },
      { name: 'Shadcn / UI', icon: '🧩', level: 'expert' },
      { name: 'Radix UI', icon: '🔷', level: 'advanced' },
      { name: 'HTML5 / CSS3', icon: '🌐', level: 'expert' },
      { name: 'JavaScript ES2024', icon: '🟨', level: 'expert' },
      { name: 'React Query', icon: '📡', level: 'advanced' },
      { name: 'Zustand / Redux', icon: '🗂️', level: 'advanced' }
    ]
  },
  {
    id: 'backend',
    icon: '⚙️',
    colorClass: 'bg-[rgba(162,89,255,0.12)]',
    title: 'Backend & APIs',
    count: '12 technologies',
    items: [
      { name: 'Node.js', icon: '🟩', level: 'expert' },
      { name: 'Express.js', icon: '🚂', level: 'expert' },
      { name: 'PHP 8.x', icon: '🐘', level: 'expert' },
      { name: 'Laravel 11', icon: '🔴', level: 'expert' },
      { name: 'Python', icon: '🐍', level: 'advanced' },
      { name: 'FastAPI', icon: '⚡', level: 'advanced' },
      { name: 'GraphQL', icon: '🔗', level: 'advanced' },
      { name: 'REST APIs', icon: '🌐', level: 'expert' },
      { name: 'WebSockets', icon: '🔌', level: 'advanced' },
      { name: 'JWT / OAuth2', icon: '🔐', level: 'expert' },
      { name: 'BullMQ / Queues', icon: '📬', level: 'advanced' },
      { name: 'tRPC', icon: '🧰', level: 'proficient' }
    ]
  },
  {
    id: 'database',
    icon: '🗄️',
    colorClass: 'bg-[rgba(0,212,255,0.12)]',
    title: 'Databases & Storage',
    count: '10 technologies',
    items: [
      { name: 'PostgreSQL', icon: '🐘', level: 'expert' },
      { name: 'MongoDB', icon: '🍃', level: 'expert' },
      { name: 'MySQL', icon: '🐬', level: 'expert' },
      { name: 'Redis', icon: '🔴', level: 'advanced' },
      { name: 'Firebase / Firestore', icon: '🔥', level: 'advanced' },
      { name: 'Prisma ORM', icon: '🌲', level: 'expert' },
      { name: 'Supabase', icon: '📊', level: 'advanced' },
      { name: 'Elasticsearch', icon: '🔍', level: 'proficient' },
      { name: 'Pinecone (Vector)', icon: '📌', level: 'advanced' },
      { name: 'Weaviate (Vector)', icon: '🌀', level: 'proficient' }
    ]
  },
  {
    id: 'cloud',
    icon: '☁️',
    colorClass: 'bg-[rgba(79,140,255,0.12)]',
    title: 'Cloud & DevOps',
    count: '10 technologies',
    items: [
      { name: 'AWS', icon: '🟠', level: 'expert' },
      { name: 'Docker', icon: '🐳', level: 'expert' },
      { name: 'Kubernetes', icon: '⚓', level: 'proficient' },
      { name: 'GitHub Actions', icon: '🔧', level: 'expert' },
      { name: 'Vercel / Netlify', icon: '🌍', level: 'expert' },
      { name: 'Terraform', icon: '🏗️', level: 'advanced' },
      { name: 'CI/CD Pipelines', icon: '🔄', level: 'expert' },
      { name: 'Nginx / Caddy', icon: '🌐', level: 'advanced' },
      { name: 'Linux / Ubuntu', icon: '🐧', level: 'expert' },
      { name: 'Grafana / Prometheus', icon: '📊', level: 'proficient' }
    ]
  },
  {
    id: 'ai-tools',
    icon: '🤖',
    colorClass: 'bg-[rgba(162,89,255,0.12)]',
    title: 'AI, LLM & Dev Tools',
    count: '14 technologies — including AI coding tools',
    items: [
      { name: 'Claude AI (Anthropic)', icon: '🟣', level: 'expert' },
      { name: 'OpenAI API / GPT-4o', icon: '🟢', level: 'expert' },
      { name: 'Google Gemini', icon: '💎', level: 'advanced' },
      { name: 'LLaMA / Ollama', icon: '🦙', level: 'proficient' },
      { name: 'LangChain', icon: '🔗', level: 'expert' },
      { name: 'LangGraph', icon: '🕸️', level: 'advanced' },
      { name: 'Cursor AI', icon: '🖱️', level: 'expert' },
      { name: 'GitHub Copilot', icon: '👾', level: 'expert' },
      { name: 'Windsurf IDE', icon: '🌊', level: 'advanced' },
      { name: 'HuggingFace', icon: '🤗', level: 'proficient' },
      { name: 'LangSmith (Observability)', icon: '🔭', level: 'advanced' },
      { name: 'Whisper / ElevenLabs', icon: '🎙️', level: 'proficient' },
      { name: 'DALL·E / Replicate', icon: '🖼️', level: 'working' },
      { name: 'Vercel AI SDK', icon: '📐', level: 'advanced' }
    ]
  },
  {
    id: 'mobile',
    icon: '📱',
    colorClass: 'bg-[rgba(0,229,160,0.12)]',
    title: 'Mobile & Cross-Platform',
    count: '5 technologies',
    items: [
      { name: 'React Native', icon: '📱', level: 'advanced' },
      { name: 'Expo', icon: '⚡', level: 'advanced' },
      { name: 'Progressive Web Apps', icon: '🌐', level: 'expert' },
      { name: 'iOS (App Store)', icon: '🍎', level: 'proficient' },
      { name: 'Android (Play Store)', icon: '🤖', level: 'proficient' }
    ]
  },
  {
    id: 'cms',
    icon: '📝',
    colorClass: 'bg-[rgba(255,122,69,0.12)]',
    title: 'CMS, eCommerce & No-Code',
    count: '9 technologies',
    items: [
      { name: 'WordPress', icon: '🔵', level: 'expert' },
      { name: 'Webflow', icon: '🌊', level: 'advanced' },
      { name: 'Sanity CMS', icon: '🟣', level: 'advanced' },
      { name: 'Contentful', icon: '📄', level: 'proficient' },
      { name: 'Shopify / Liquid', icon: '🛒', level: 'expert' },
      { name: 'WooCommerce', icon: '🛍️', level: 'expert' },
      { name: 'n8n', icon: '⚡', level: 'advanced' },
      { name: 'Make.com', icon: '🔗', level: 'advanced' },
      { name: 'Zapier', icon: '🔌', level: 'proficient' }
    ]
  },
  {
    id: 'testing',
    icon: '🧪',
    colorClass: 'bg-[rgba(0,229,160,0.12)]',
    title: 'Testing & QA',
    count: '7 technologies',
    items: [
      { name: 'Playwright', icon: '🎭', level: 'expert' },
      { name: 'Cypress', icon: '🌲', level: 'advanced' },
      { name: 'Vitest', icon: '⚡', level: 'expert' },
      { name: 'Jest', icon: '🃏', level: 'expert' },
      { name: 'Testing Library', icon: '🔬', level: 'advanced' },
      { name: 'K6 (Load Testing)', icon: '💪', level: 'proficient' },
      { name: 'Sentry', icon: '🐛', level: 'advanced' }
    ]
  },
  {
    id: 'payments',
    icon: '💳',
    colorClass: 'bg-[rgba(255,210,77,0.12)]',
    title: 'Payments, Comms & Third-Party APIs',
    count: '8 technologies',
    items: [
      { name: 'Stripe', icon: '💳', level: 'expert' },
      { name: 'Razorpay', icon: '🏦', level: 'expert' },
      { name: 'Twilio (SMS / Voice)', icon: '📱', level: 'advanced' },
      { name: 'Resend / SendGrid', icon: '📧', level: 'expert' },
      { name: 'Google / Meta APIs', icon: '🗓️', level: 'advanced' },
      { name: 'Auth0 / Clerk', icon: '🔑', level: 'advanced' },
      { name: 'Google Maps API', icon: '🗺️', level: 'advanced' },
      { name: 'PostHog / Mixpanel', icon: '📊', level: 'proficient' }
    ]
  },
  {
    id: 'iot',
    icon: '📡',
    colorClass: 'bg-[rgba(0,212,255,0.12)]',
    title: 'IoT & Realtime',
    count: '5 technologies',
    items: [
      { name: 'MQTT', icon: '📡', level: 'advanced' },
      { name: 'Socket.io', icon: '⚡', level: 'expert' },
      { name: 'AWS IoT Core', icon: '🟠', level: 'proficient' },
      { name: 'Node-RED', icon: '🔴', level: 'proficient' },
      { name: 'InfluxDB (Time-Series)', icon: '📊', level: 'proficient' }
    ]
  }
];

export const AI_TOOLS: AITool[] = [
  {
    name: 'Cursor AI',
    icon: '🖱️',
    desc: "Our primary IDE. We use Cursor's agent mode for complex refactors, multi-file edits, and architecture-level changes — with human review on every output.",
    badge: '✓ Daily Driver'
  },
  {
    name: 'Claude (Anthropic)',
    icon: '🟣',
    desc: 'Claude Sonnet and Opus for code review, documentation, architecture discussions, and building AI-powered features inside client products.',
    badge: '✓ 2+ Years Use'
  },
  {
    name: 'OpenAI API',
    icon: '🟢',
    desc: 'GPT-4o for production AI features — RAG pipelines, function calling, structured outputs, embeddings, and fine-tuning for client applications.',
    badge: '✓ Production Expert'
  },
  {
    name: 'GitHub Copilot',
    icon: '👾',
    desc: 'Used for boilerplate acceleration, test generation, and inline completions. Paired with rigorous code review to maintain quality standards.',
    badge: '✓ Since Beta'
  }
];

export const AI_SPOTLIGHT_STATS: { num: string; label: string }[] = [
  { num: '3×', label: 'Faster with AI tooling' },
  { num: '12', label: 'AI tools in daily use' },
  { num: '2yr', label: 'LLM API experience' },
  { num: '100%', label: 'Human-reviewed output' }
];

export const AI_SPOTLIGHT_COPY = {
  eyebrow: 'AI-Powered Development',
  body: "Cursor, Claude, and GitHub Copilot aren't gimmicks in our workflow — they're multipliers. We ship 3x faster without compromising code quality because we've mastered how to use AI tools in production development contexts."
};

export const EXPERTISE_GROUPS: ExpertiseGroup[] = [
  {
    label: 'Frontend Mastery',
    bars: [
      { name: 'React / Next.js', pct: 98, years: '8 years', variant: 'default' },
      { name: 'TypeScript', pct: 92, years: '6 years', variant: 'default' },
      { name: 'Vue.js / Angular', pct: 85, years: '5 years', variant: 'default' },
      { name: 'Tailwind / CSS Systems', pct: 90, years: '5 years', variant: 'default' }
    ]
  },
  {
    label: 'AI & LLM Integration',
    bars: [
      { name: 'OpenAI / Claude APIs', pct: 90, years: '2+ years', variant: 'green' },
      { name: 'LangChain / LangGraph', pct: 85, years: '2 years', variant: 'green' },
      { name: 'Vector Databases (RAG)', pct: 80, years: '1.5 years', variant: 'green' },
      { name: 'Cursor / Copilot (Dev AI)', pct: 95, years: '2 years', variant: 'green' }
    ]
  },
  {
    label: 'Backend & Infrastructure',
    bars: [
      { name: 'Node.js / Express', pct: 96, years: '8 years', variant: 'orange' },
      { name: 'PHP / Laravel', pct: 90, years: '6 years', variant: 'orange' },
      { name: 'PostgreSQL / MongoDB', pct: 92, years: '7 years', variant: 'orange' },
      { name: 'AWS / Docker / DevOps', pct: 85, years: '5 years', variant: 'orange' }
    ]
  },
  {
    label: 'eCommerce & Payments',
    bars: [
      { name: 'Shopify / WooCommerce', pct: 90, years: '6 years', variant: 'pink' },
      { name: 'Stripe / Razorpay', pct: 88, years: '5 years', variant: 'pink' },
      { name: 'Payment Gateway Integration', pct: 92, years: '6 years', variant: 'pink' },
      { name: 'Custom Checkout Flows', pct: 87, years: '5 years', variant: 'pink' }
    ]
  }
];

export const TRENDING_ITEMS: TrendItem[] = [
  {
    icon: '🖱️',
    title: 'Cursor AI IDE',
    desc: "Agentic code editing with multi-file context. We use Cursor's Composer mode for complex refactors, debugging sessions, and feature scaffolding across large codebases.",
    badge: 'hot',
    tags: ['AI IDE', 'Agentic Coding', 'Daily Use']
  },
  {
    icon: '▲',
    title: 'Next.js 15 (App Router)',
    desc: 'React Server Components, Server Actions, Partial Prerendering, and Turbopack. All new projects are built on Next.js 15 with the App Router architecture.',
    badge: 'new',
    tags: ['RSC', 'Server Actions', 'Turbopack']
  },
  {
    icon: '🕸️',
    title: 'LangGraph (AI Agents)',
    desc: 'Building stateful, multi-step AI agents with memory, conditional routing, and tool use. Used for complex automation workflows and autonomous agent systems.',
    badge: 'hot',
    tags: ['AI Agents', 'State Machines', 'Tool Use']
  },
  {
    icon: '📊',
    title: 'Supabase',
    desc: 'Open-source Firebase alternative with PostgreSQL, real-time subscriptions, auth, and storage. Our go-to for rapid SaaS MVP development with a self-hostable backend.',
    badge: 'rising',
    tags: ['PostgreSQL', 'Realtime', 'Auth']
  },
  {
    icon: '🌊',
    title: 'Windsurf IDE',
    desc: "Codeium's AI IDE with Cascade agent for cross-file reasoning and multi-step task execution. Complementary to Cursor for certain architectural tasks.",
    badge: 'new',
    tags: ['AI IDE', 'Cascade', 'Agentic']
  },
  {
    icon: '🔭',
    title: 'LangSmith Observability',
    desc: 'Tracing, evaluating, and monitoring LLM applications in production. Essential for debugging RAG pipelines and measuring AI feature quality at scale.',
    badge: 'hot',
    tags: ['LLM Ops', 'Tracing', 'Evals']
  },
  {
    icon: '📐',
    title: 'Vercel AI SDK 4',
    desc: 'Unified API for streaming AI responses across OpenAI, Anthropic, and open-source models. Generative UI, streaming, and tool calling built into Next.js apps seamlessly.',
    badge: 'rising',
    tags: ['Streaming', 'Multi-model', 'Gen UI']
  },
  {
    icon: '🧩',
    title: 'Shadcn / UI',
    desc: 'Copy-paste component system built on Radix and Tailwind. We use it as the base for all design systems — giving clients a production-ready component library they fully own.',
    badge: 'rising',
    tags: ['Components', 'Radix', 'Tailwind']
  },
  {
    icon: '⚡',
    title: 'Bun Runtime',
    desc: "Ultra-fast JavaScript runtime and package manager. We're adopting Bun for new Node.js projects where build speed and runtime performance are critical requirements.",
    badge: 'new',
    tags: ['Runtime', 'Package Manager', 'Fast']
  }
];

export const PHILOSOPHY_CARDS: { num: string; title: string; body: string }[] = [
  {
    num: '01',
    title: 'Production First',
    body: "We only add a technology after running it in production on a real project. No tutorial-tier familiarity counts. If it hasn't shipped on a live system we've built, it's not in the stack."
  },
  {
    num: '02',
    title: 'Right Tool, Right Job',
    body: "We don't have one hammer looking for nails. PostgreSQL for relational data, MongoDB for document storage, Redis for caching. The decision is always driven by the problem, not preference."
  },
  {
    num: '03',
    title: 'Your Team Can Maintain It',
    body: 'We avoid obscure or experimental frameworks unless explicitly required. Every stack choice is made with the question: "Can a mid-level developer on your team maintain this in 2 years?"'
  }
];

export const COMPARE_ROWS: CompareRow[] = [
  {
    scenario: 'Next.js App Router SSR vs SSG decision',
    hireDeveloperShop: { text: '✓ Architects correctly per use case', tone: 'yes' },
    genericDev: { text: '~ Defaults to one approach', tone: 'maybe' }
  },
  {
    scenario: 'PostgreSQL N+1 query performance issue',
    hireDeveloperShop: { text: '✓ Identifies and fixes with joins + indexing', tone: 'yes' },
    genericDev: { text: '✗ Often missed or patched', tone: 'no' }
  },
  {
    scenario: 'LLM hallucination in production RAG pipeline',
    hireDeveloperShop: { text: '✓ Implements evals + guardrails', tone: 'yes' },
    genericDev: { text: '✗ Ships without monitoring', tone: 'no' }
  },
  {
    scenario: 'Docker containerisation for zero-downtime deploy',
    hireDeveloperShop: { text: '✓ Health checks, rolling updates, rollback', tone: 'yes' },
    genericDev: { text: '~ Basic Dockerfile only', tone: 'maybe' }
  },
  {
    scenario: 'Stripe webhook idempotency',
    hireDeveloperShop: { text: '✓ Handled correctly from day one', tone: 'yes' },
    genericDev: { text: '✗ Duplicate events cause bugs', tone: 'no' }
  },
  {
    scenario: 'TypeScript strict mode + Zod runtime validation',
    hireDeveloperShop: { text: '✓ Standard on every project', tone: 'yes' },
    genericDev: { text: '✗ Types often loose or ignored', tone: 'no' }
  },
  {
    scenario: 'AI dev tools (Cursor, Copilot) in workflow',
    hireDeveloperShop: { text: '✓ 3x output with quality control', tone: 'yes' },
    genericDev: { text: '~ Occasional or surface-level use', tone: 'maybe' }
  }
];

export const HERO_BADGES: { label: string; dotClass: string }[] = [
  { label: 'Next.js 15 — Expert', dotClass: 'bg-[#4f8cff]' },
  { label: 'Claude AI — Daily Use', dotClass: 'bg-[#a259ff]' },
  { label: 'Node.js — 8 Yrs', dotClass: 'bg-[#00e5a0]' },
  { label: 'AWS — Certified', dotClass: 'bg-[#00d4ff]' },
  { label: 'Laravel — 6 Yrs', dotClass: 'bg-[#ff7a45]' },
  { label: 'OpenAI API — Expert', dotClass: 'bg-[#ff4da6]' },
  { label: 'TypeScript — Daily', dotClass: 'bg-[#ffd24d]' }
];
