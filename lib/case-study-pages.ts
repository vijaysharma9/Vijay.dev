import type { Project } from '@/lib/work-data';
import { PROJECTS } from '@/lib/work-data';
import { SITE_URL } from '@/constants/navigation';

import { WORK_CASE_SLUG_BY_PROJECT_ID } from '@/lib/service-seo-routes';

const base = SITE_URL.replace(/\/$/, '');

export type CaseStudyPageData = {
  slug: string;
  projectId: string;
  h1: string;
  challenge: string;
  solution: string;
  results: string;
  metrics: { label: string; value: string }[];
  stack: string[];
  /** Primary CTA label on case study sidebar (optional). */
  ctaText?: string;
};

function fromProject(p: Project, extra: Omit<CaseStudyPageData, 'projectId' | 'slug' | 'h1'> & { h1?: string }): CaseStudyPageData {
  const slug = WORK_CASE_SLUG_BY_PROJECT_ID[p.id];
  if (!slug) throw new Error(`No slug for ${p.id}`);
  return {
    slug,
    projectId: p.id,
    h1: extra.h1 ?? `${p.title} — Case Study`,
    challenge: extra.challenge,
    solution: extra.solution,
    results: extra.results,
    metrics: extra.metrics,
    stack: extra.stack
  };
}

export const CASE_STUDIES: CaseStudyPageData[] = [
  fromProject(PROJECTS.find((x) => x.id === 'saas-analytics')!, {
    challenge:
      'The client needed a multi-tenant analytics product with strict isolation, real-time dashboards, and Stripe billing—on an 11-week investor deadline.',
    solution:
      'We delivered a Next.js and Node architecture with tenant-scoped Postgres, Redis caching, Stripe webhooks with idempotency, and a phased migration from a legacy monolith.',
    results:
      'Production launch one week early with 99.97% uptime in the first six months and 4× revenue growth in ninety days post-launch.',
    metrics: [
      { value: '2,400+', label: 'Concurrent tenants' },
      { value: '847ms', label: 'Avg dashboard response' },
      { value: '4×', label: 'Revenue growth' },
      { value: '99.97%', label: 'Uptime (6 mo)' }
    ],
    stack: ['Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Redis', 'Stripe', 'AWS']
  }),
  fromProject(PROJECTS.find((x) => x.id === 'ecom-payments')!, {
    challenge:
      'A growing brand needed a high-converting Shopify experience with regional payments and automated inventory—not a generic theme.',
    solution:
      'Custom Liquid sections, Razorpay integration, performance tuning for mobile LCP, and checkout flows tested across markets.',
    results:
      'Conversion rate improved 38% versus the previous theme, with stable payment success rates across regions.',
    metrics: [
      { value: '↑ 38%', label: 'Conversion rate' },
      { value: 'Multi-region', label: 'Payments live' },
      { value: 'Automated', label: 'Inventory sync' }
    ],
    stack: ['Shopify', 'Liquid', 'Razorpay', 'Node.js']
  }),
  fromProject(PROJECTS.find((x) => x.id === 'ai-chatbot')!, {
    challenge:
      'B2B SaaS support volume was unsustainable; the team needed accurate answers grounded in product docs with CRM handoff.',
    solution:
      'RAG pipeline over documentation, structured prompts, conversation memory, and escalation rules into the existing CRM.',
    results:
      'Roughly 85% of tier-1 support queries resolved without human intervention, with positive ROI within the first month.',
    metrics: [
      { value: '85%', label: 'Queries automated' },
      { value: 'Positive', label: 'ROI month one' },
      { value: 'CRM', label: 'Synced handoffs' }
    ],
    stack: ['OpenAI', 'LangChain', 'Next.js', 'Pinecone']
  }),
  fromProject(PROJECTS.find((x) => x.id === 'custom-crm')!, {
    challenge:
      'A 60-person sales team was overpaying for Salesforce features they did not use and needed a tailored pipeline tool.',
    solution:
      'Custom CRM on Angular and Node with pipelines, email automation, reporting, and a companion mobile experience.',
    results:
      'CRM operating cost reduced about 65% while adoption increased because the UI matched their actual sales process.',
    metrics: [
      { value: '↓ 65%', label: 'CRM cost' },
      { value: '60', label: 'Active sales users' },
      { value: 'Mobile', label: 'Field access' }
    ],
    stack: ['Angular', 'Node.js', 'PostgreSQL', 'SendGrid']
  }),
  fromProject(PROJECTS.find((x) => x.id === 'ai-docs')!, {
    challenge:
      'Manual invoice processing required a large offshore team and was error-prone at scale.',
    solution:
      'LLM-based extraction and classification pipeline with human review queues, ERP sync, and monitoring on volume and accuracy.',
    results:
      'More than ten thousand documents processed daily at 97.3% accuracy, replacing significant manual effort.',
    metrics: [
      { value: '10k+', label: 'Documents / day' },
      { value: '97.3%', label: 'Accuracy' },
      { value: 'ERP', label: 'Automated sync' }
    ],
    stack: ['Python', 'GPT-4o', 'FastAPI', 'AWS Lambda']
  }),
  fromProject(PROJECTS.find((x) => x.id === 'mobile-booking')!, {
    challenge:
      'Launch a credible on-demand booking experience on iOS and Android with payments and real-time status in under aggressive timelines.',
    solution:
      'React Native and Expo app with Stripe, push notifications, provider dashboards, and Firebase-backed realtime updates.',
    results:
      'Ten thousand-plus downloads in three months with stable ratings and operational dashboards for providers.',
    metrics: [
      { value: '10k+', label: 'Downloads (3 mo)' },
      { value: 'iOS + Android', label: 'Single codebase' },
      { value: 'Realtime', label: 'Booking status' }
    ],
    stack: ['React Native', 'Expo', 'Stripe', 'Firebase']
  })
];

export function getCaseStudyBySlug(slug: string): CaseStudyPageData | undefined {
  return CASE_STUDIES.find((c) => c.slug === slug);
}

export function getAllCaseStudySlugs(): string[] {
  return CASE_STUDIES.map((c) => c.slug);
}

export function creativeWorkSchema(data: CaseStudyPageData) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: data.h1.replace(' — Case Study', ''),
    url: `${base}/work/${data.slug}`,
    description: `${data.challenge} ${data.solution}`,
    author: { '@type': 'Organization', name: 'HireDeveloperShop', url: base },
    keywords: data.stack.join(', ')
  };
}
