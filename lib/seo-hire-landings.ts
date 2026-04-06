import { SITE_URL } from '@/constants/navigation';

const base = SITE_URL.replace(/\/$/, '');

export type HireLandingConfig = {
  path: string;
  breadcrumbLabel: string;
  title: string;
  description: string;
  h1: string;
  skills: string[];
  faqs: { question: string; answer: string }[];
  serviceName: string;
  serviceDescription: string;
};

export const HIRE_LANDINGS: Record<string, HireLandingConfig> = {
  'hire-react-developer': {
    path: '/hire-react-developer',
    breadcrumbLabel: 'Hire React Developer',
    title: 'Hire React Developer | Dedicated React.js Experts for SaaS & Web Apps',
    description:
      'Hire dedicated React developers with 8+ years of experience. React.js, Next.js, TypeScript, SaaS dashboards. Upwork Top Rated. Free consultation.',
    h1: 'Hire Dedicated React Developers for SaaS & Modern Web Apps',
    skills: [
      'React 18+ & hooks architecture',
      'Next.js App Router, SSR, and ISR',
      'TypeScript, Zod, and component libraries',
      'State: Redux Toolkit, Zustand, React Query',
      'Testing: Vitest, React Testing Library, Playwright',
      'Performance: code splitting, lazy routes, Core Web Vitals'
    ],
    faqs: [
      {
        question: 'Do you work with existing React codebases?',
        answer:
          'Yes. We onboard quickly, follow your linting and Git conventions, and can refactor incrementally without a big-bang rewrite.'
      },
      {
        question: 'Can you integrate with our design system?',
        answer:
          'We implement Figma specs and can work with Storybook, Tailwind, or your internal component library.'
      },
      {
        question: 'What engagement models do you offer?',
        answer:
          'Fixed-scope milestones for MVPs, or ongoing monthly retainers for product teams. See /pricing for typical packages.'
      },
      {
        question: 'How do we communicate during the project?',
        answer:
          'Slack or Teams, weekly demos, and shared GitHub/GitLab with transparent boards and written weekly summaries.'
      },
      {
        question: 'Do you sign NDAs?',
        answer: 'Yes. We routinely work under mutual NDAs and can use your MSA or our standard SOW template.'
      }
    ],
    serviceName: 'Dedicated React Developer Hiring',
    serviceDescription:
      'Dedicated React and Next.js developers for SaaS dashboards, marketing sites, and design-system implementation.'
  },
  'hire-nextjs-developer': {
    path: '/hire-nextjs-developer',
    breadcrumbLabel: 'Hire Next.js Developer',
    title: 'Hire Next.js Developer | App Router, SSR & Full-Stack Next',
    description:
      'Hire Next.js experts for App Router, server components, API routes, and Vercel-ready deployments. Top Rated on Upwork.',
    h1: 'Hire Next.js Developers — App Router, APIs & Production SEO',
    skills: [
      'Next.js 14+ App Router and layouts',
      'Server & client components, streaming',
      'Route handlers, middleware, auth patterns',
      'Edge and Node runtimes, caching strategy',
      'Integrations: Stripe, Postgres, Redis, OAuth'
    ],
    faqs: [
      {
        question: 'Can you migrate from Pages Router to App Router?',
        answer:
          'Yes. We use a strangler approach: migrate route groups incrementally while keeping production stable.'
      },
      {
        question: 'Do you deploy only on Vercel?',
        answer:
          'Vercel is our default, but we also deploy to AWS, Docker, and other hosts when your compliance requires it.'
      },
      {
        question: 'How do you handle SEO with Next.js?',
        answer:
          'Metadata API, sitemaps, structured data, and performance budgets so marketing pages stay fast and indexable.'
      },
      {
        question: 'What is the typical timeline for a marketing site?',
        answer: 'Many multi-page marketing sites ship in about two weeks after scope sign-off.'
      },
      {
        question: 'Can Next.js power our SaaS dashboard?',
        answer:
          'Absolutely. We combine RSC where it helps with client-heavy analytics views and real-time updates where needed.'
      }
    ],
    serviceName: 'Dedicated Next.js Developer Hiring',
    serviceDescription:
      'Next.js full-stack development including App Router, API routes, and production deployments.'
  },
  'hire-nodejs-developer': {
    path: '/hire-nodejs-developer',
    breadcrumbLabel: 'Hire Node.js Developer',
    title: 'Hire Node.js Developer | APIs, Microservices & Backend Scale',
    description:
      'Hire Node.js developers for REST/GraphQL APIs, queues, Postgres, and cloud-native backends. 8+ years experience.',
    h1: 'Hire Node.js Developers for APIs, Workers & Cloud Backends',
    skills: [
      'Node.js, Express, Fastify, Nest patterns',
      'PostgreSQL, Prisma or raw SQL, migrations',
      'Redis caching, BullMQ / job queues',
      'Auth: JWT, sessions, OAuth2, RBAC',
      'AWS Lambda, Docker, observability'
    ],
    faqs: [
      {
        question: 'Can you maintain our existing Express API?',
        answer:
          'Yes. We add tests where missing, document endpoints, and harden auth and validation before new features.'
      },
      {
        question: 'Do you design database schemas?',
        answer:
          'We model for multi-tenant SaaS, indexing, and future reporting—then implement migrations safely.'
      },
      {
        question: 'How do you handle webhooks from Stripe or other providers?',
        answer:
          'Idempotent handlers, signature verification, replay protection, and dead-letter patterns for failures.'
      },
      {
        question: 'What about real-time features?',
        answer: 'WebSockets, SSE, or managed realtime (e.g. Ably, Pusher) depending on scale and budget.'
      },
      {
        question: 'Fixed price or hourly?',
        answer: 'Both. Greenfield APIs are often fixed-scope; extensions and maintenance are commonly retainer-based.'
      }
    ],
    serviceName: 'Dedicated Node.js Developer Hiring',
    serviceDescription:
      'Node.js backend development including REST APIs, workers, and database design.'
  },
  'hire-full-stack-developer': {
    path: '/hire-full-stack-developer',
    breadcrumbLabel: 'Hire Full-Stack Developer',
    title: 'Hire Full-Stack Developer | React, Next.js, Node & Postgres',
    description:
      'Hire full-stack developers who own frontend and backend end-to-end. SaaS, dashboards, and integrations. Free consultation.',
    h1: 'Hire Full-Stack Developers — End-to-End Product Delivery',
    skills: [
      'React / Next.js frontends',
      'Node.js APIs and serverless functions',
      'PostgreSQL, ORMs, and caching',
      'Stripe billing and webhooks',
      'CI/CD, testing, and production monitoring'
    ],
    faqs: [
      {
        question: 'One developer or a small team?',
        answer:
          'We can start with a senior full-stack lead and add specialists (AI, mobile) as the roadmap grows.'
      },
      {
        question: 'Do you work in our timezone?',
        answer:
          'We overlap with US and EU hours daily and use async updates so decisions never block overnight.'
      },
      {
        question: 'How do you estimate projects?',
        answer:
          'We break work into milestones with acceptance criteria—no surprise invoices mid-sprint.'
      },
      {
        question: 'Can you join an existing sprint team?',
        answer: 'Yes. We adapt to your ceremonies and ticket workflow while keeping code review standards high.'
      },
      {
        question: 'What if we need AI features later?',
        answer:
          'We design APIs so LLM features can plug in later without rewriting your core domain model.'
      }
    ],
    serviceName: 'Dedicated Full-Stack Developer Hiring',
    serviceDescription:
      'Full-stack development spanning React, Next.js, Node.js, and PostgreSQL for SaaS products.'
  },
  'hire-ai-developer': {
    path: '/hire-ai-developer',
    breadcrumbLabel: 'Hire AI Developer',
    title: 'Hire AI Developer | LLM Integration, RAG & Agents',
    description:
      'Hire AI developers for GPT-4, Claude, RAG, agents, and production guardrails. B2B SaaS and automation focus.',
    h1: 'Hire AI Developers for LLMs, RAG & Production Guardrails',
    skills: [
      'OpenAI / Anthropic APIs and streaming UX',
      'LangChain-style orchestration and tools',
      'Vector search, chunking, and evaluation loops',
      'Prompt versioning and observability',
      'Cost controls and fallback UX'
    ],
    faqs: [
      {
        question: 'Can you improve our existing chatbot?',
        answer:
          'We audit retrieval quality, add evals, tighten prompts, and fix citation and safety gaps.'
      },
      {
        question: 'Do you fine-tune models?',
        answer:
          'When data volume justifies it; often strong RAG + prompting reaches production quality faster.'
      },
      {
        question: 'How do you prevent hallucinations?',
        answer:
          'Ground answers in retrieved sources, validate citations, and use human-in-the-loop for high-risk flows.'
      },
      {
        question: 'What about data privacy?',
        answer:
          'We help choose regional hosting, redact PII before embedding, and align with your DPA requirements.'
      },
      {
        question: 'Pricing for AI work?',
        answer:
          'Scoped pilots are common, then monthly retainers for iteration as models and docs evolve.'
      }
    ],
    serviceName: 'Dedicated AI Developer Hiring',
    serviceDescription:
      'AI and LLM integration including RAG pipelines, agents, and production deployment.'
  },
  'hire-shopify-developer': {
    path: '/hire-shopify-developer',
    breadcrumbLabel: 'Hire Shopify Developer',
    title: 'Hire Shopify Developer | Themes, Apps & Custom Checkout',
    description:
      'Hire Shopify developers for Liquid themes, headless storefronts, apps, and payment flows. Conversion-focused builds.',
    h1: 'Hire Shopify Developers — Themes, Apps & Store Performance',
    skills: [
      'Liquid, Online Store 2.0 sections',
      'Shopify APIs, webhooks, and app extensions',
      'Headless with Hydrogen or custom frontends',
      'Subscriptions and international pricing',
      'CWV and mobile checkout optimisation'
    ],
    faqs: [
      {
        question: 'Can you speed up our existing theme?',
        answer:
          'Yes. We profile LCP/CLS, lazy-load media, trim apps, and fix render-blocking scripts.'
      },
      {
        question: 'Do you build private apps?',
        answer:
          'Custom admin apps, ERP sync, and automation using Shopify Admin API and bulk operations.'
      },
      {
        question: 'Headless or Liquid?',
        answer:
          'Liquid when speed-to-market matters; headless when you need a fully custom frontend or multi-channel.'
      },
      {
        question: 'Payment gateways outside Shopify Payments?',
        answer:
          'We integrate regional gateways and ensure webhook-driven order state stays consistent.'
      },
      {
        question: 'Ongoing retainer?',
        answer:
          'Many stores keep us for seasonal launches, A/B iterations, and monitoring after go-live.'
      }
    ],
    serviceName: 'Dedicated Shopify Developer Hiring',
    serviceDescription:
      'Shopify development including themes, custom apps, and eCommerce integrations.'
  }
};

export function hireServiceSchema(cfg: HireLandingConfig) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: cfg.serviceName,
    provider: {
      '@type': 'Organization',
      name: 'HireDeveloperShop',
      url: base
    },
    description: cfg.serviceDescription,
    areaServed: 'Worldwide',
    url: `${base}${cfg.path}`
  };
}

export function hireFaqSchema(cfg: HireLandingConfig) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: cfg.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer }
    }))
  };
}
