import { SITE_URL } from '@/constants/navigation';

const base = SITE_URL.replace(/\/$/, '');

export type ServiceLandingConfig = {
  slug: string;
  breadcrumbLabel: string;
  title: string;
  description: string;
  canonicalPath: string;
  ogTitle: string;
  h1: string;
  intro: string;
  sections: { heading: string; body: string }[];
  serviceType: string;
  serviceSchemaDescription: string;
  related: { label: string; href: string }[];
  caseStudies: { label: string; href: string }[];
};

function serviceSchema(cfg: ServiceLandingConfig) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: cfg.title,
    provider: {
      '@type': 'Organization',
      name: 'HireDeveloperShop',
      url: base
    },
    description: cfg.serviceSchemaDescription,
    areaServed: 'Worldwide',
    serviceType: cfg.serviceType,
    url: `${base}${cfg.canonicalPath}`
  };
}

const related = {
  web: [
    { label: 'SaaS development', href: '/services/saas-development' },
    { label: 'Mobile development', href: '/services/mobile-development' },
    { label: 'eCommerce', href: '/services/ecommerce' }
  ],
  saas: [
    { label: 'Web development', href: '/services/web-development' },
    { label: 'AI & LLM integration', href: '/services/ai-llm-integration' },
    { label: 'Mobile development', href: '/services/mobile-development' }
  ],
  aiLlm: [
    { label: 'AI automation', href: '/services/ai-automation' },
    { label: 'AI chatbots', href: '/services/ai-chatbots' },
    { label: 'SaaS development', href: '/services/saas-development' }
  ],
  aiAuto: [
    { label: 'AI & LLM integration', href: '/services/ai-llm-integration' },
    { label: 'Web development', href: '/services/web-development' },
    { label: 'SaaS development', href: '/services/saas-development' }
  ],
  aiChat: [
    { label: 'AI & LLM integration', href: '/services/ai-llm-integration' },
    { label: 'SaaS development', href: '/services/saas-development' },
    { label: 'Web development', href: '/services/web-development' }
  ],
  ecom: [
    { label: 'Web development', href: '/services/web-development' },
    { label: 'Mobile development', href: '/services/mobile-development' },
    { label: 'SaaS development', href: '/services/saas-development' }
  ],
  mobile: [
    { label: 'Web development', href: '/services/web-development' },
    { label: 'SaaS development', href: '/services/saas-development' },
    { label: 'eCommerce', href: '/services/ecommerce' }
  ]
};

const cases = {
  saas: [{ label: 'Multi-tenant analytics platform', href: '/work/multi-tenant-analytics-platform' }],
  ecom: [{ label: 'Custom eCommerce & Shopify', href: '/work/custom-ecommerce-shopify' }],
  ai: [
    { label: 'AI chatbot for B2B SaaS', href: '/work/ai-chatbot-b2b-saas' },
    { label: 'AI document processing', href: '/work/ai-document-processing-pipeline' }
  ],
  mobile: [{ label: 'On-demand booking app', href: '/work/on-demand-service-booking-app' }]
};

export const SERVICE_LANDING: Record<string, ServiceLandingConfig> = {
  'web-development': {
    slug: 'web-development',
    breadcrumbLabel: 'Web Development',
    title: 'Custom Web Development Services | Next.js, React & Full-Stack',
    description:
      'Custom web development for business sites, SaaS, and dashboards. Next.js, React, TypeScript, performance, accessibility, and SEO. Upwork Top Rated team.',
    canonicalPath: '/services/web-development',
    ogTitle: 'Web Development Services | HireDeveloperShop',
    h1: 'Custom Web Development for SaaS, Business Sites & Dashboards',
    intro:
      'We design and ship fast, accessible web applications—from marketing sites to multi-tenant SaaS—with clear milestones and production-grade code.',
    sections: [
      {
        heading: 'What we build',
        body: 'Landing pages, marketing sites, authenticated dashboards, admin panels, and API-driven SPAs. We prioritise Core Web Vitals, semantic HTML, and maintainable TypeScript.'
      },
      {
        heading: 'How we work',
        body: 'Discovery call, written scope, weekly demos, and automated tests before go-live. You own the repo; we document architecture and handover.'
      }
    ],
    serviceType: 'Web Development',
    serviceSchemaDescription:
      'Custom web application development including Next.js, React, TypeScript, SSR/SSG, and scalable frontends.',
    related: related.web,
    caseStudies: [...cases.saas, ...cases.ecom]
  },
  'saas-development': {
    slug: 'saas-development',
    breadcrumbLabel: 'SaaS Development',
    title: 'SaaS Development Services | Multi-Tenant Apps, Billing & Dashboards',
    description:
      'Dedicated SaaS development: multi-tenancy, RBAC, Stripe billing, analytics dashboards, and scalable APIs. Book a free consultation.',
    canonicalPath: '/services/saas-development',
    ogTitle: 'SaaS Development | HireDeveloperShop',
    h1: 'SaaS Product Development — From MVP to Multi-Tenant Scale',
    intro:
      'We help founders and teams ship B2B SaaS with tenant isolation, subscriptions, and observability baked in—not bolted on later.',
    sections: [
      {
        heading: 'Architecture',
        body: 'Postgres-first data models, idempotent webhooks, background jobs, and clear boundaries between auth, billing, and product domains.'
      },
      {
        heading: 'Delivery',
        body: 'Milestone-based delivery with staging environments, E2E tests for critical flows, and runbooks for deployments.'
      }
    ],
    serviceType: 'SaaS Development',
    serviceSchemaDescription:
      'Multi-tenant SaaS application development including billing integration, RBAC, and analytics dashboards.',
    related: related.saas,
    caseStudies: cases.saas
  },
  'ai-llm-integration': {
    slug: 'ai-llm-integration',
    breadcrumbLabel: 'AI & LLM Integration',
    title: 'AI & LLM Integration Services | OpenAI, LangChain, RAG Pipelines',
    description:
      'Expert AI and LLM integration for SaaS and enterprise: GPT-4, Claude, Gemini, RAG pipelines, agents, and custom wrappers. Free consultation.',
    canonicalPath: '/services/ai-llm-integration',
    ogTitle: 'AI & LLM Integration | HireDeveloperShop',
    h1: 'AI & LLM Integration — RAG, Agents & Production Guardrails',
    intro:
      'We move AI from demos to production: retrieval, evaluation, citations, latency budgets, and cost controls your users can trust.',
    sections: [
      {
        heading: 'Capabilities',
        body: 'RAG over your docs, tool-calling agents, structured outputs, streaming UX, and hybrid search where embeddings alone are not enough.'
      },
      {
        heading: 'Safety & quality',
        body: 'Prompt versioning, eval sets, logging, and fallbacks when models or retrieval fail—so support teams are not firefighting hallucinations.'
      }
    ],
    serviceType: 'AI Development',
    serviceSchemaDescription:
      'LLM integration services including OpenAI, Claude, LangChain, RAG pipelines, and AI agents for SaaS products.',
    related: related.aiLlm,
    caseStudies: cases.ai
  },
  'ai-automation': {
    slug: 'ai-automation',
    breadcrumbLabel: 'AI Automation',
    title: 'AI Automation Services | Workflows, Document AI & Integrations',
    description:
      'Automate operations with AI: document processing, email triage, data enrichment, and multi-step pipelines integrated with your stack.',
    canonicalPath: '/services/ai-automation',
    ogTitle: 'AI Automation | HireDeveloperShop',
    h1: 'AI Automation & Workflow Engineering',
    intro:
      'Replace repetitive manual work with reliable pipelines—human-in-the-loop where needed, full automation where safe.',
    sections: [
      {
        heading: 'Use cases',
        body: 'Invoice extraction, CRM enrichment, ticket classification, lead scoring, and scheduled batch jobs with monitoring and retries.'
      },
      {
        heading: 'Stack',
        body: 'Python and Node services, queues, serverless where appropriate, and observability so failures are visible and recoverable.'
      }
    ],
    serviceType: 'AI Automation',
    serviceSchemaDescription:
      'AI-powered workflow automation including document processing and business process integration.',
    related: related.aiAuto,
    caseStudies: cases.ai
  },
  'ai-chatbots': {
    slug: 'ai-chatbots',
    breadcrumbLabel: 'AI Chatbots',
    title: 'AI Chatbot Development | Customer Support & Lead Capture',
    description:
      'Custom AI chatbots with memory, CRM sync, RAG over your content, and human handoff. Built for B2B SaaS and support teams.',
    canonicalPath: '/services/ai-chatbots',
    ogTitle: 'AI Chatbots | HireDeveloperShop',
    h1: 'AI Chatbots & Assistants for Support and Sales',
    intro:
      'We build assistants that answer from your real docs, capture leads, and escalate cleanly—without frustrating users with generic replies.',
    sections: [
      {
        heading: 'Features',
        body: 'Conversation memory, guardrails, analytics on deflection rate, and integrations with HubSpot, Intercom-style handoff patterns, or custom APIs.'
      },
      {
        heading: 'Outcomes',
        body: 'Many clients target high autonomous resolution on tier-1 questions while keeping compliance and brand voice consistent.'
      }
    ],
    serviceType: 'AI Chatbot Development',
    serviceSchemaDescription:
      'Custom AI chatbot development with RAG, CRM integration, and support automation.',
    related: related.aiChat,
    caseStudies: cases.ai
  },
  ecommerce: {
    slug: 'ecommerce',
    breadcrumbLabel: 'eCommerce',
    title: 'eCommerce Development | Shopify, Custom Stores & Payments',
    description:
      'Shopify themes, headless commerce, custom checkout, and payment integrations. Conversion-focused builds with fast Core Web Vitals.',
    canonicalPath: '/services/ecommerce',
    ogTitle: 'eCommerce Development | HireDeveloperShop',
    h1: 'eCommerce Development — Shopify, Custom & Headless',
    intro:
      'From Shopify customization to bespoke storefronts, we connect inventory, payments, and analytics so you can scale sales.',
    sections: [
      {
        heading: 'Deliverables',
        body: 'Theme development, app integrations, subscription flows, multi-currency, and performance tuning for mobile shoppers.'
      },
      {
        heading: 'Payments',
        body: 'Stripe, Razorpay, PayPal, and regional gateways with webhook-hardened order state.'
      }
    ],
    serviceType: 'eCommerce Development',
    serviceSchemaDescription:
      'eCommerce development including Shopify, custom stores, and payment gateway integration.',
    related: related.ecom,
    caseStudies: cases.ecom
  },
  'mobile-development': {
    slug: 'mobile-development',
    breadcrumbLabel: 'Mobile Development',
    title: 'Mobile App Development | React Native, iOS & Android',
    description:
      'Cross-platform apps with React Native and Expo: bookings, payments, push notifications, and provider dashboards. Worldwide delivery.',
    canonicalPath: '/services/mobile-development',
    ogTitle: 'Mobile Development | HireDeveloperShop',
    h1: 'Mobile App Development with React Native & Expo',
    intro:
      'We ship iOS and Android apps with shared codebases, offline-aware UX, and secure auth—aligned with your backend and brand.',
    sections: [
      {
        heading: 'Capabilities',
        body: 'Onboarding, payments, maps, push notifications, deep links, and app store release support.'
      },
      {
        heading: 'Backend',
        body: 'REST/GraphQL integration with your existing APIs or a new Node/Next backend we co-design with you.'
      }
    ],
    serviceType: 'Mobile App Development',
    serviceSchemaDescription:
      'Mobile application development with React Native, Expo, and native integrations.',
    related: related.mobile,
    caseStudies: cases.mobile
  }
};

export function getServiceLandingSchema(cfg: ServiceLandingConfig) {
  return serviceSchema(cfg);
}
