import type { ServiceLandingConfig } from '@/lib/seo-service-types';

const cases = {
  saas: { label: 'Multi-tenant analytics platform', href: '/work/multi-tenant-analytics-platform' },
  ecom: { label: 'Custom eCommerce & Shopify', href: '/work/custom-ecommerce-shopify' },
  ai: { label: 'AI chatbot for B2B SaaS', href: '/work/ai-chatbot-b2b-saas' },
  docs: { label: 'AI document processing', href: '/work/ai-document-processing-pipeline' },
  mobile: { label: 'On-demand booking app', href: '/work/on-demand-service-booking-app' },
  crm: { label: 'Custom CRM for sales teams', href: '/work/custom-crm-sales-teams' },
  telemed: { label: 'Telemedicine platform', href: '/work/telemedicine-platform' },
  fintech: { label: 'Multi-currency payment gateway', href: '/work/multi-currency-payment-gateway' },
  iot: { label: 'Industrial IoT platform', href: '/work/industrial-iot-platform' }
};

export const SERVICE_STUBS: Record<string, ServiceLandingConfig> = {
  'frontend-development': {
    slug: 'frontend-development',
    breadcrumbLabel: 'Frontend Development',
    title: 'Frontend Development Services | React, Vue & Angular | HireDeveloperShop',
    description:
      'Component-driven UIs with exceptional UX. Vue, Angular, or React — whatever your stack requires. Mobile-first, WCAG compliant, and optimised for Core Web Vitals.',
    canonicalPath: '/services/frontend-development',
    ogTitle: 'Frontend Development | HireDeveloperShop',
    h1: 'Frontend Development — React, Vue & Angular',
    intro:
      'We build fast, accessible frontends with design-system discipline—component libraries, performance budgets, and testable UI that scales with your product.',
    sections: [
      {
        heading: 'What we build',
        body: 'Design-system implementation, complex dashboards, marketing sites, and authenticated apps—always with semantic HTML, lazy loading, and measurable Core Web Vitals.'
      },
      {
        heading: 'How we work',
        body: 'We align with your Figma or design tokens, ship in small PRs, and document patterns so your team can extend the UI without rework.'
      }
    ],
    serviceType: 'Frontend Development',
    serviceSchemaDescription:
      'Frontend development services including React, Vue, Angular, and performance-focused UI engineering.',
    related: [
      { label: 'Web development', href: '/services/web-development' },
      { label: 'SaaS development', href: '/services/saas-development' },
      { label: 'Technical SEO', href: '/services/technical-seo' }
    ],
    caseStudies: [cases.saas, cases.ecom, cases.ai],
    stackTags: ['React', 'Vue.js', 'Angular', 'UI/UX', 'Core Web Vitals']
  },
  'backend-development': {
    slug: 'backend-development',
    breadcrumbLabel: 'Backend Development',
    title: 'Backend Development Services | Node.js, APIs & Microservices | HireDeveloperShop',
    description:
      'Scalable server-side architecture, REST APIs, GraphQL, and microservices. Built for high availability, security, and clean separation of concerns.',
    canonicalPath: '/services/backend-development',
    ogTitle: 'Backend Development | HireDeveloperShop',
    h1: 'Backend Development — APIs, Microservices & Reliable Data',
    intro:
      'We design APIs and services that survive traffic spikes and messy integrations—clear boundaries, observability, and security baked in from day one.',
    sections: [
      {
        heading: 'Capabilities',
        body: 'REST and GraphQL APIs, event-driven workflows, background jobs, queues, and idempotent webhooks for payments and third-party systems.'
      },
      {
        heading: 'Quality',
        body: 'Automated tests for critical paths, structured logging, rate limiting, and runbooks so on-call is not a guessing game.'
      }
    ],
    serviceType: 'Backend Development',
    serviceSchemaDescription:
      'Backend development including Node.js APIs, microservices, GraphQL, and scalable server architecture.',
    related: [
      { label: 'Web development', href: '/services/web-development' },
      { label: 'Database architecture', href: '/services/database-architecture' },
      { label: 'Cloud & DevOps', href: '/services/cloud-devops' }
    ],
    caseStudies: [cases.saas, cases.crm, cases.fintech],
    stackTags: ['Node.js', 'Express', 'GraphQL', 'REST API', 'Microservices']
  },
  'qa-testing': {
    slug: 'qa-testing',
    breadcrumbLabel: 'QA & Testing',
    title: 'QA & Automated Testing Services | Playwright, Cypress & CI | HireDeveloperShop',
    description:
      'End-to-end, unit, integration, and performance testing. Catch regressions before they ship. Set up CI-integrated test suites that run on every PR automatically.',
    canonicalPath: '/services/qa-testing',
    ogTitle: 'QA & Automated Testing | HireDeveloperShop',
    h1: 'QA & Automated Testing — Playwright, Cypress & CI Gates',
    intro:
      'We turn testing into a safety net: fast unit tests where they matter, E2E flows for revenue-critical paths, and CI gates that block broken deploys.',
    sections: [
      {
        heading: 'Coverage',
        body: 'Playwright and Cypress for E2E, API contract tests, and targeted load tests for checkout and auth flows.'
      },
      {
        heading: 'Process',
        body: 'Tests live next to the code, run on every PR, and report flaky tests with retries and traces—not silent failures.'
      }
    ],
    serviceType: 'QA & Testing',
    serviceSchemaDescription:
      'Quality assurance and test automation including Playwright, Cypress, Vitest, and CI integration.',
    related: [
      { label: 'Web development', href: '/services/web-development' },
      { label: 'SaaS development', href: '/services/saas-development' },
      { label: 'Cloud & DevOps', href: '/services/cloud-devops' }
    ],
    caseStudies: [cases.saas, cases.ecom, cases.mobile],
    stackTags: ['Playwright', 'Cypress', 'Vitest', 'Jest', 'K6']
  },
  'iot-embedded': {
    slug: 'iot-embedded',
    breadcrumbLabel: 'IoT & Embedded',
    title: 'IoT & Embedded Development Services | MQTT, AWS IoT & Real-Time Data | HireDeveloperShop',
    description:
      'Connect physical devices to the cloud. Build firmware interfaces, MQTT brokers, real-time dashboards, and device management platforms for industrial or consumer IoT.',
    canonicalPath: '/services/iot-embedded',
    ogTitle: 'IoT & Embedded Systems | HireDeveloperShop',
    h1: 'IoT & Embedded — Real-Time Telemetry & Device Dashboards',
    intro:
      'We connect sensors and devices to reliable backends—streaming telemetry, alerting, and operator dashboards that stay usable under load.',
    sections: [
      {
        heading: 'Architecture',
        body: 'MQTT brokers, time-series storage, secure device provisioning, and live dashboards with anomaly detection.'
      },
      {
        heading: 'Operations',
        body: 'Monitoring, retries, and backpressure so noisy devices do not take down your core stack.'
      }
    ],
    serviceType: 'IoT Development',
    serviceSchemaDescription:
      'IoT and embedded systems development including MQTT, AWS IoT, and real-time monitoring platforms.',
    related: [
      { label: 'Cloud & DevOps', href: '/services/cloud-devops' },
      { label: 'Backend development', href: '/services/backend-development' },
      { label: 'Database architecture', href: '/services/database-architecture' }
    ],
    caseStudies: [cases.iot, cases.telemed, cases.saas],
    stackTags: ['MQTT', 'WebSockets', 'AWS IoT', 'Node-RED', 'Time-Series DB']
  },
  'cloud-devops': {
    slug: 'cloud-devops',
    breadcrumbLabel: 'Cloud & DevOps',
    title: 'Cloud & DevOps Services | AWS, Docker, CI/CD & Terraform | HireDeveloperShop',
    description:
      'Infrastructure as code, CI/CD pipelines, containerisation, and zero-downtime deployments. Cut cloud costs, improve reliability, and ship faster with automated pipelines.',
    canonicalPath: '/services/cloud-devops',
    ogTitle: 'Cloud & DevOps | HireDeveloperShop',
    h1: 'Cloud & DevOps — CI/CD, Containers & IaC',
    intro:
      'We automate deployments and harden infrastructure—repeatable environments, rollback-friendly pipelines, and cost visibility your finance team can trust.',
    sections: [
      {
        heading: 'Delivery',
        body: 'GitHub Actions, Docker images, multi-stage builds, and promotion from staging to production with guardrails.'
      },
      {
        heading: 'Reliability',
        body: 'Health checks, autoscaling, secrets management, and least-privilege IAM patterns.'
      }
    ],
    serviceType: 'Cloud & DevOps',
    serviceSchemaDescription:
      'Cloud infrastructure and DevOps services including AWS, Docker, Terraform, and CI/CD pipelines.',
    related: [
      { label: 'Backend development', href: '/services/backend-development' },
      { label: 'Database architecture', href: '/services/database-architecture' },
      { label: 'Legacy migration', href: '/services/legacy-migration' }
    ],
    caseStudies: [cases.saas, cases.iot, cases.fintech],
    stackTags: ['AWS', 'Docker', 'GitHub Actions', 'Terraform', 'Nginx']
  },
  'php-laravel': {
    slug: 'php-laravel',
    breadcrumbLabel: 'PHP & Laravel',
    title: 'PHP & Laravel Development Services | APIs, Admin Panels & SaaS | HireDeveloperShop',
    description:
      'Robust backend systems built with Laravel. REST APIs, admin panels, multi-tenant SaaS, authentication, queues, and scheduled jobs — production-grade from day one.',
    canonicalPath: '/services/php-laravel',
    ogTitle: 'PHP & Laravel Development | HireDeveloperShop',
    h1: 'PHP & Laravel — APIs, Admin Panels & Multi-Tenant SaaS',
    intro:
      'We ship Laravel backends with queues, policies, and predictable releases—ideal for teams that want Laravel’s productivity without technical debt.',
    sections: [
      {
        heading: 'Deliverables',
        body: 'REST APIs, Filament/Livewire admin panels, multi-tenant routing, and billing webhooks with idempotent handlers.'
      },
      {
        heading: 'Quality',
        body: 'Feature tests, database migrations with rollback plans, and structured logging for production incidents.'
      }
    ],
    serviceType: 'PHP Development',
    serviceSchemaDescription:
      'PHP and Laravel development including REST APIs, admin panels, and multi-tenant SaaS backends.',
    related: [
      { label: 'Web development', href: '/services/web-development' },
      { label: 'Database architecture', href: '/services/database-architecture' },
      { label: 'Cloud & DevOps', href: '/services/cloud-devops' }
    ],
    caseStudies: [cases.ecom, cases.crm, cases.fintech],
    stackTags: ['Laravel', 'PHP 8.x', 'Livewire', 'Filament', 'MySQL']
  },
  'legacy-migration': {
    slug: 'legacy-migration',
    breadcrumbLabel: 'Legacy Migration',
    title: 'Legacy System Migration Services | Zero-Downtime Modernisation | HireDeveloperShop',
    description:
      'Modernise outdated codebases without downtime. Migrate from legacy PHP, jQuery, ColdFusion, or monoliths to modern stacks with zero data loss and a tested rollback plan.',
    canonicalPath: '/services/legacy-migration',
    ogTitle: 'Legacy System Migration | HireDeveloperShop',
    h1: 'Legacy Migration — Strangler Patterns & Safe Cutovers',
    intro:
      'We de-risk migrations with phased rollouts, feature flags, and parallel runs—so users keep working while the stack evolves underneath.',
    sections: [
      {
        heading: 'Approach',
        body: 'Strangler-fig extraction, incremental API boundaries, and dual-write periods when data must stay consistent.'
      },
      {
        heading: 'Validation',
        body: 'Automated parity checks, migration rehearsal scripts, and rollback drills before the final cutover.'
      }
    ],
    serviceType: 'Legacy Migration',
    serviceSchemaDescription:
      'Legacy application migration and modernisation to modern web stacks with minimal downtime.',
    related: [
      { label: 'Web development', href: '/services/web-development' },
      { label: 'SaaS development', href: '/services/saas-development' },
      { label: 'Technical SEO', href: '/services/technical-seo' }
    ],
    caseStudies: [cases.saas, cases.ecom, cases.crm],
    stackTags: ['PHP → Node.js', 'jQuery → React', 'Monolith → Micro', 'DB Migration']
  },
  'cms-nocode': {
    slug: 'cms-nocode',
    breadcrumbLabel: 'CMS & No-Code',
    title: 'CMS & No-Code Development | Headless CMS, Webflow & WordPress | HireDeveloperShop',
    description:
      'Content-managed sites that your team can update without developers. Headless CMS setups, Webflow custom code, WordPress performance audits, and Sanity integrations.',
    canonicalPath: '/services/cms-nocode',
    ogTitle: 'CMS & No-Code | HireDeveloperShop',
    h1: 'CMS & No-Code — Headless, Webflow & WordPress Performance',
    intro:
      'We connect editors to fast frontends—structured content models, preview workflows, and performance that doesn’t fall apart when marketing ships weekly updates.',
    sections: [
      {
        heading: 'Platforms',
        body: 'Sanity, Contentful, WordPress, and Webflow—chosen for your team’s workflow and your performance budget.'
      },
      {
        heading: 'Frontend',
        body: 'Next.js or Astro frontends over headless APIs, image optimisation, and caching strategies that keep Lighthouse scores high.'
      }
    ],
    serviceType: 'CMS Development',
    serviceSchemaDescription:
      'CMS and no-code development including headless CMS, Webflow, and WordPress.',
    related: [
      { label: 'Web development', href: '/services/web-development' },
      { label: 'Technical SEO', href: '/services/technical-seo' },
      { label: 'Frontend development', href: '/services/frontend-development' }
    ],
    caseStudies: [cases.ecom, cases.saas, cases.ai],
    stackTags: ['WordPress', 'Webflow', 'Sanity', 'Contentful', 'Headless CMS']
  },
  'database-architecture': {
    slug: 'database-architecture',
    breadcrumbLabel: 'Database Architecture',
    title: 'Database Architecture & Performance | PostgreSQL, MongoDB & Redis | HireDeveloperShop',
    description:
      'Schema design, indexing, query optimisation, and data modelling for scale. SQL and NoSQL expertise — from greenfield design to fixing slow production databases.',
    canonicalPath: '/services/database-architecture',
    ogTitle: 'Database Architecture | HireDeveloperShop',
    h1: 'Database Architecture — Schema Design, Indexing & Scale',
    intro:
      'We make data layers predictable: migrations that don’t lock tables for hours, indexes that match real queries, and caching where it actually helps.',
    sections: [
      {
        heading: 'Diagnostics',
        body: 'Slow query analysis, index recommendations, and connection pool tuning for Postgres, MySQL, and MongoDB workloads.'
      },
      {
        heading: 'Delivery',
        body: 'Prisma or SQL migrations with rollback plans, read replicas for read-heavy SaaS, and Redis where session or rate limits demand it.'
      }
    ],
    serviceType: 'Database Architecture',
    serviceSchemaDescription:
      'Database design, optimisation, and performance tuning for PostgreSQL, MongoDB, Redis, and related stacks.',
    related: [
      { label: 'Backend development', href: '/services/backend-development' },
      { label: 'SaaS development', href: '/services/saas-development' },
      { label: 'Cloud & DevOps', href: '/services/cloud-devops' }
    ],
    caseStudies: [cases.saas, cases.crm, cases.fintech],
    stackTags: ['PostgreSQL', 'MongoDB', 'Redis', 'Firebase', 'Prisma ORM']
  },
  'technical-seo': {
    slug: 'technical-seo',
    breadcrumbLabel: 'Technical SEO',
    title: 'Technical SEO & Performance | Core Web Vitals & Schema | HireDeveloperShop',
    description:
      'Core Web Vitals, structured data, crawl optimisation, server-side rendering, image optimisation, and Lighthouse audits. Rank higher by fixing what\'s under the hood.',
    canonicalPath: '/services/technical-seo',
    ogTitle: 'Technical SEO & Performance | HireDeveloperShop',
    h1: 'Technical SEO — Core Web Vitals, Schema & Crawl Health',
    intro:
      'We fix what Lighthouse and Search Console complain about—render-blocking assets, hydration weight, canonicals, hreflang, and structured data that validates.',
    sections: [
      {
        heading: 'Audits',
        body: 'Crawl budget, internal linking, indexability, and duplicate content patterns—paired with actionable fixes in your Next.js or Laravel app.'
      },
      {
        heading: 'Implementation',
        body: 'JSON-LD, sitemaps, robots, image optimisation, and edge caching strategies aligned with your hosting stack.'
      }
    ],
    serviceType: 'Technical SEO',
    serviceSchemaDescription:
      'Technical SEO optimisation including Core Web Vitals, structured data, and crawl performance.',
    related: [
      { label: 'Web development', href: '/services/web-development' },
      { label: 'Frontend development', href: '/services/frontend-development' },
      { label: 'CMS & No-Code', href: '/services/cms-nocode' }
    ],
    caseStudies: [cases.ecom, cases.saas, cases.ai],
    stackTags: ['Core Web Vitals', 'Schema Markup', 'SSR/SSG', 'Lighthouse', 'PageSpeed']
  },
  'it-consultancy': {
    slug: 'it-consultancy',
    breadcrumbLabel: 'IT Consultancy',
    title: 'IT Consultancy & Architecture | Audits, Roadmaps & Stack Choice | HireDeveloperShop',
    description:
      'Tech stack advice, architecture reviews, code audits, and roadmap planning. Get an expert second opinion before you build — or fix what went wrong mid-project.',
    canonicalPath: '/services/it-consultancy',
    ogTitle: 'IT Consultancy & Architecture | HireDeveloperShop',
    h1: 'IT Consultancy — Architecture Reviews, Audits & Roadmaps',
    intro:
      'We help founders and CTOs de-risk decisions—clear written recommendations, tradeoffs, and a phased plan that matches your budget and timeline.',
    sections: [
      {
        heading: 'Engagements',
        body: 'Architecture reviews, security reviews, hiring support, and vendor evaluation for cloud and analytics providers.'
      },
      {
        heading: 'Outcomes',
        body: 'Written findings, prioritized backlog, and optional implementation support so recommendations turn into shipped code.'
      }
    ],
    serviceType: 'IT Consultancy',
    serviceSchemaDescription:
      'IT consulting and software architecture services including technical audits and roadmap planning.',
    related: [
      { label: 'SaaS development', href: '/services/saas-development' },
      { label: 'Technical SEO', href: '/services/technical-seo' },
      { label: 'Cloud & DevOps', href: '/services/cloud-devops' }
    ],
    caseStudies: [cases.saas, cases.crm, cases.telemed],
    stackTags: ['Tech Audit', 'Roadmap', 'Stack Choice', 'Code Review', 'CTO Advisory']
  }
};
