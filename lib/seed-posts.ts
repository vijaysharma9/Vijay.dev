import type { Post } from '@/lib/blog-types';

type SeedPost = Pick<
  Post,
  | 'title'
  | 'excerpt'
  | 'content'
  | 'cover_image'
  | 'category'
  | 'tags'
  | 'status'
  | 'featured'
  | 'author'
  | 'read_time'
>;

export const SEED_POSTS: SeedPost[] = [
  {
    title: 'How We Built a Multi-Tenant SaaS Dashboard in 11 Weeks',
    excerpt:
      'A practical breakdown of tenant isolation, billing hooks, and shipping fast without sacrificing security when you are a small team.',
    category: 'Case Studies',
    tags: ['SaaS', 'multi-tenant', 'dashboard', 'PostgreSQL', 'Next.js'],
    status: 'published',
    featured: true,
    author: 'Vijay Sharma',
    read_time: 12,
    cover_image:
      'https://placehold.co/1200x630/09090f/4f8cff?text=Multi-Tenant+SaaS',
    content: `
<h2>Starting from a fuzzy brief</h2>
<p>When the client first described the product, the words were familiar—subscriptions, teams, roles, and “something like Stripe for usage.” What they did not have was a locked schema or a full API contract. That is normal for early-stage SaaS work. Our job was to turn that ambiguity into a shippable multi-tenant dashboard in under three months, without painting ourselves into a corner on data isolation or billing.</p>
<h3>Choosing the tenancy model early</h3>
<p>We evaluated three patterns: shared database with a <code>tenant_id</code> column, schema-per-tenant, and database-per-tenant for enterprise only. For this launch, shared tables with strict row-level scoping won. It keeps operations simple on managed Postgres, avoids a migration cliff, and still lets us move noisy enterprise customers later if contracts demand it. Every query in the application layer goes through a repository that injects <code>tenant_id</code>; we banned ad hoc SQL in route handlers.</p>
<h3>Identity and authorization</h3>
<p>Authentication was handled with short-lived JWT access tokens and rotating refresh cookies stored with strict flags. Authorization layered on top: organization membership, role claims, and fine-grained permissions for billing admin versus editor. We modeled permissions as strings in code (<code>billing:manage</code>, <code>reports:read</code>) instead of scattering booleans across the database, which kept the policy readable when new screens appeared weekly.</p>
<blockquote>Speed did not mean skipping threat modeling. It meant choosing defaults that are hard to misuse—parameterized queries, audited admin actions, and explicit impersonation flows.</blockquote>
<h3>The dashboard UX that actually shipped</h3>
<p>We invested in skeleton states, optimistic updates on task completion, and a unified activity feed so customers felt progress even when heavy analytics jobs lagged a few seconds. Charts used server-side aggregation endpoints to avoid shipping massive raw series to the browser. Empty states explained the next step instead of looking broken—a small detail that reduced support pings during beta.</p>
<h3>Billing and webhooks</h3>
<p>Stripe Billing handled plans and invoices. Webhook handlers were idempotent with stored event IDs, retries with backoff, and dead-letter storage for anything that looked inconsistent. We never trusted the client with entitlement state; the API recomputed access from Stripe and our own usage counters on every sensitive action.</p>
<h3>Observability and on-call sanity</h3>
<p>Structured logs included <code>tenant_id</code> and <code>request_id</code> everywhere. We added synthetic checks for login, signup, and invoice creation so we learned about outages before customers pasted screenshots in chat. Error budgets informed when we paused feature work to harden ingestion paths.</p>
<h3>What we would do again</h3>
<p>Investing in codegen for API types, locking tenancy boundaries in code review, and keeping the first production footprint boring—Postgres, a queue for async work, and a single region until latency complaints were evidenced. Eleven weeks is tight, but with disciplined defaults, it is enough to launch something real and iterate safely.</p>
<pre><code>// Example: tenant-scoped query pattern
const rows = await db.query(
  'SELECT * FROM projects WHERE tenant_id = $1 AND id = $2',
  [tenantId, projectId]
);</code></pre>
<h3>Closing thoughts</h3>
<p>Multi-tenant SaaS is less about clever architecture and more about boring consistency. If you can keep every path explicit about which tenant it is touching, you have room to grow features quickly without turning every release into a security audit emergency.</p>
`.trim()
  },
  {
    title: 'RAG Pipelines in Production: What Actually Works in 2025',
    excerpt:
      'Grounding, chunking, evaluation loops, and failure modes we have seen when retrieval-augmented generation leaves the demo notebook.',
    category: 'AI & Automation',
    tags: ['RAG', 'LLM', 'vector search', 'evaluation', 'production'],
    status: 'published',
    featured: false,
    author: 'Vijay Sharma',
    read_time: 11,
    cover_image:
      'https://placehold.co/1200x630/09090f/a259ff?text=RAG+Production',
    content: `
<h2>Beyond the notebook demo</h2>
<p>Retrieval-augmented generation looks magical in a weekend prototype: embed a PDF, ask questions, watch coherent answers appear. Production is different. Users ask ambiguous questions, documents conflict, and latency budgets evaporate once you add reranking, safety filters, and citation requirements. This article captures what has actually worked for teams shipping RAG in 2025—not theory, but patterns we keep returning to.</p>
<h3>Chunking is still an underrated lever</h3>
<p>Fixed-size splits are easy but noisy. Structure-aware chunking—respecting headings, tables, and list hierarchies—reduces half-answers where the model sees fragments without context. For HTML and Markdown sources, parsing to an AST before splitting pays for itself in fewer “I do not know” responses and less hallucinated glue text.</p>
<h3>Grounding with citations users can verify</h3>
<p>We ask the model to quote short spans and map them back to chunk identifiers. When citations fail validation—string not found in source—we retry with a stricter prompt rather than showing the answer. Users tolerate slightly robotic phrasing more than confident lies. In UI, we link citations to the original document viewer with highlighted passages.</p>
<blockquote>If you cannot trace an answer to a retrieved span, treat that as a bug, not a style choice.</blockquote>
<h3>Hybrid retrieval beats pure vectors</h3>
<p>Dense embeddings miss exact identifiers—order IDs, error codes, legal clauses. A lightweight BM25 stage combined with vector search improves recall on keyword-heavy tickets. Rerankers add cost but trim context windows, which saves tokens downstream and keeps answers focused.</p>
<h3>Evaluation loops that do not rot</h3>
<p>Golden sets of question-answer pairs drift as documents change. We schedule weekly eval runs with freshness checks: if source hashes move, stale expectations are flagged. Human review samples focus on low-confidence scores and user thumbs-down clusters, not random spot checks.</p>
<h3>Failure modes to plan for</h3>
<p>Conflicting policies across documents need explicit precedence rules. Time-sensitive data requires “as of” metadata so the model does not blend outdated pricing with current terms. For PII, redact before embedding unless your contract allows otherwise—vector stores are not magically compliant because they are “just math.”</p>
<pre><code>// Pseudocode: guarded answer step
const chunks = await retrieveHybrid(query, { topK: 12 });
const reranked = await rerank(query, chunks, { topN: 6 });
const answer = await llm.answer({ query, evidence: reranked, requireCitations: true });</code></pre>
<h3>Operational metrics that matter</h3>
<p>Track retrieval hit rate, citation validity, end-to-end latency percentiles, and cost per successful answer. Fancy offline scores are useless if production traffic never matches your eval distribution. Start with a thin dashboard; expand when regressions become hard to attribute.</p>
<h3>What we would ship sooner next time</h3>
<p>Canary prompts to detect answer drift, automated alerts when embedding coverage drops after crawler failures, and explicit user feedback loops wired into the eval backlog. RAG is a living pipeline—treat it like any other data system with owners, runbooks, and rollback paths.</p>
`.trim()
  },
  {
    title: 'Next.js 15 App Router: What Changed and Why It Matters',
    excerpt:
      'A builder-friendly tour of caching defaults, async request APIs, and what to watch when upgrading a real App Router codebase.',
    category: 'Web Development',
    tags: ['Next.js', 'App Router', 'React', 'caching', 'web development'],
    status: 'published',
    featured: false,
    author: 'Vijay Sharma',
    read_time: 10,
    cover_image:
      'https://placehold.co/1200x630/09090f/4f8cff?text=Next.js+App+Router',
    content: `
<h2>Why upgrades feel different now</h2>
<p>The App Router blurred the line between server and client components, pushed caching semantics into everyday debugging, and made route handlers first-class. If you are shipping marketing sites, the shift is mostly ergonomic. If you are building authenticated dashboards, the same shift touches data loading, mutation timing, and how you think about streaming HTML. Here is what changed in Next.js 15-era defaults and why teams should care.</p>
<h3>Request-specific APIs went async</h3>
<p>Functions that touch headers, cookies, or search params increasingly expect asynchronous access. That is a deliberate move to unify behavior across runtimes and to prepare for finer-grained streaming. Practically, it means small refactors in layouts and pages: await the things that used to be synchronous getters. The churn is annoying once; the consistency pays off when debugging subtle cache bugs.</p>
<h3>Caching is explicit on purpose</h3>
<p>“Fetch everything cached by default” helped demos; it hurt dynamic apps. Newer defaults lean toward opt-in caching for fetches and route segments, which matches how most product engineers reason about freshness. You declare what is static with <code>revalidate</code> or cache tags instead of fighting accidental staleness after a deployment.</p>
<blockquote>Treat caching as part of your API design, not a compiler optimization you discover later through bug reports.</blockquote>
<h3>Server Components are not a silver bullet</h3>
<p>They excel at data fetching close to the source and trimming client bundles. They are poor fit for highly interactive widgets. The winning pattern we use is thin client islands—rich editors, maps, drag-and-drop—inside a mostly server-rendered document. Boundaries are explicit, hydration cost stays predictable, and SEO-critical content stays in HTML.</p>
<h3>Route handlers and middleware</h3>
<p>Route handlers work well for JSON and form posts; middleware handles cross-cutting auth gates. The sharp edge is knowing what runs on the edge versus Node runtime—libraries that assume full Node APIs need to stay server-side only. We keep crypto-heavy or long-running tasks in dedicated Node routes with tuned <code>maxDuration</code> where the platform allows.</p>
<h3>Migration advice that survives contact with prod</h3>
<p>Upgrade one vertical slice—say, your blog or settings page—before flipping the entire app. Add integration tests around auth redirects and cookie behavior; those are the first casualties when async request APIs shift. Measure TTFB and LCP before and after; server components can improve both, but mis-split client boundaries can regress interaction times.</p>
<pre><code>// Example: opt into ISR on a read-heavy page
export const revalidate = 60;

export default async function Page() {
  const data = await fetch('https://api.example.com/items', {
    next: { tags: ['items'] },
  }).then((r) => r.json());
  return <Listing items={data} />;
}</code></pre>
<h3>What to watch on Vercel</h3>
<p>Align regions with your database, use <code>waitUntil</code> for non-blocking analytics, and avoid storing session state in function memory—ephemeral instances will humble you. Pair these platform habits with App Router patterns and deployments stop feeling mysterious.</p>
<h3>Closing</h3>
<p>Next.js 15 continues tightening the contract between framework defaults and production reality. The teams that win treat migrations as chances to simplify data flow, delete accidental caches, and document which routes are allowed to be slow versus which must always be fresh.</p>
`.trim()
  }
];
