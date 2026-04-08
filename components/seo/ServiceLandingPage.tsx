import Link from 'next/link';

import { Breadcrumb } from '@/components/Breadcrumb';
import { JsonLd } from '@/components/JsonLd';
import {
  getServiceLandingSchema,
  type ServiceLandingConfig
} from '@/lib/seo-service-landings';

const SLUG_BADGE_ICON: Record<string, string> = {
  'web-development': '💻',
  'saas-development': '📊',
  'ai-llm-integration': '🧠',
  'ai-automation': '⚙️',
  'ai-chatbots': '💬',
  ecommerce: '🛒',
  'mobile-development': '📱',
  'frontend-development': '🎨',
  'backend-development': '⚙️',
  'qa-testing': '🧪',
  'iot-embedded': '📡',
  'cloud-devops': '☁️',
  'php-laravel': '🐘',
  'legacy-migration': '🔄',
  'cms-nocode': '📝',
  'database-architecture': '🗄️',
  'technical-seo': '📈',
  'it-consultancy': '💡'
};

const SECTION_ACCENTS = [
  'text-blue-400',
  'text-purple-400',
  'text-green-400',
  'text-cyan-400'
] as const;

const WHO_WE_BUILD_FOR = [
  {
    icon: '🚀',
    title: 'Startups & founders',
    body: 'MVPs, traction milestones, and lean teams that need senior execution without a full in-house roster.'
  },
  {
    icon: '📈',
    title: 'Product & SaaS teams',
    body: 'Roadmaps, integrations, billing, and scale—with clear ownership and weekly visibility.'
  },
  {
    icon: '🛍️',
    title: 'eCommerce & brands',
    body: 'Conversion-focused storefronts, regional payments, and automation that keeps ops calm.'
  },
  {
    icon: '🤝',
    title: 'Agencies & partners',
    body: 'White-label builds, fixed scopes, and reliable delivery your clients can count on.'
  }
];

const TRUST_SIGNALS = [
  { icon: '⭐', text: '5.0 on Upwork · Top Rated' },
  { icon: '🚀', text: '50+ projects delivered' },
  { icon: '🌍', text: 'Available worldwide' },
  { icon: '🔒', text: 'NDA & IP transfer included' }
];

export default function ServiceLandingPage({ config }: { config: ServiceLandingConfig }) {
  const schema = getServiceLandingSchema(config);
  const badgeIcon = SLUG_BADGE_ICON[config.slug] ?? '✨';

  return (
    <>
      <JsonLd data={schema} />

      <main className="min-h-screen bg-[#0a0a0f]">
        {/* ── Hero (case study style) ── */}
        <section className="relative overflow-hidden border-b border-white/10 bg-[#0a0a0f] pb-16 pt-10 md:pb-20 md:pt-14">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
              backgroundSize: '60px 60px'
            }}
          />

          <div className="relative mx-auto max-w-5xl px-6">
            <Breadcrumb
              items={[
                { label: 'Home', href: '/' },
                { label: 'Services', href: '/services' },
                { label: config.breadcrumbLabel }
              ]}
            />

            <div className="mb-4 mt-6 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-400">
              <span aria-hidden>{badgeIcon}</span>
              <span>{config.serviceType}</span>
            </div>

            <h1 className="max-w-4xl text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl lg:text-[2.75rem] lg:leading-[1.15]">
              {config.h1}
            </h1>
            <p className="mt-4 text-base font-medium uppercase tracking-widest text-white/50">
              Service
            </p>
          </div>
        </section>

        {/* ── Trust metrics ── */}
        <section className="border-b border-white/10 bg-[#0d0d14]">
          <div className="mx-auto max-w-5xl px-6">
            <div className="flex flex-col divide-y divide-white/10 md:flex-row md:divide-x md:divide-y-0">
              {[
                { value: '8+', label: 'Years experience' },
                { value: '50+', label: 'Projects delivered' },
                { value: 'Top Rated', label: 'On Upwork' }
              ].map((m) => (
                <div
                  key={m.label}
                  className="flex flex-1 flex-col items-center justify-center px-4 py-8 text-center"
                >
                  <span className="text-2xl font-bold tracking-tight text-white md:text-3xl">
                    {m.value}
                  </span>
                  <span className="mt-1.5 text-xs font-semibold uppercase tracking-widest text-white/40">
                    {m.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Main + sidebar ── */}
        <section className="bg-[#0a0a0f] py-16 md:py-24">
          <div className="mx-auto max-w-5xl px-6">
            <div className="grid gap-12 md:grid-cols-[1fr_320px] md:gap-16 lg:gap-24">
              <div className="space-y-10">
                <div>
                  <div className="mb-4 flex items-center gap-3">
                    <div className="h-px flex-1 bg-white/10" />
                    <span className="text-xs font-bold uppercase tracking-widest text-blue-400">
                      Overview
                    </span>
                    <div className="h-px flex-1 bg-white/10" />
                  </div>
                  <div className="rounded-xl border border-white/[0.08] bg-white/[0.03] p-6 md:p-8">
                    <p className="text-base leading-relaxed text-white/75 md:text-lg">{config.intro}</p>
                    {config.stackTags.length > 0 ? (
                      <div className="mt-6 flex flex-wrap gap-2 border-t border-white/10 pt-6">
                        <span className="w-full text-xs font-bold uppercase tracking-widest text-white/35">
                          Tech stack
                        </span>
                        {config.stackTags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-md border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/70"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    ) : null}
                  </div>
                </div>

                {config.sections.map((s, i) => (
                  <div key={s.heading}>
                    <div className="mb-4 flex items-center gap-3">
                      <div className="h-px flex-1 bg-white/10" />
                      <span
                        className={`text-xs font-bold uppercase tracking-widest ${SECTION_ACCENTS[i % SECTION_ACCENTS.length]}`}
                      >
                        {s.heading}
                      </span>
                      <div className="h-px flex-1 bg-white/10" />
                    </div>
                    <div className="rounded-xl border border-white/[0.08] bg-white/[0.03] p-6 md:p-8">
                      <p className="text-base leading-relaxed text-white/75 md:text-lg">{s.body}</p>
                    </div>
                  </div>
                ))}
              </div>

              <aside className="space-y-6">
                <div className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
                  <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-white/40">
                    Related services
                  </h3>
                  <div className="flex flex-col gap-2">
                    {config.related.map((r) => (
                      <Link
                        key={r.href}
                        href={r.href}
                        className="rounded-lg border border-white/10 bg-white/5 px-3 py-2.5 text-sm font-medium text-white/80 transition-colors hover:border-white/20 hover:text-white"
                      >
                        {r.label}
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="rounded-xl border border-blue-500/30 bg-blue-500/10 p-6">
                  <h3 className="mb-2 text-base font-semibold text-white">Start with a discovery call</h3>
                  <p className="mb-4 text-sm leading-relaxed text-white/55">
                    Tell us about your goals—we&apos;ll reply with a clear scope and fixed-price quote,
                    usually within 24 hours.
                  </p>
                  <Link
                    href="/hire"
                    className="block w-full rounded-lg bg-blue-600 px-4 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-blue-500"
                  >
                    Book a free consultation
                  </Link>
                  <Link
                    href="/pricing"
                    className="mt-3 block w-full rounded-lg border border-white/10 px-4 py-3 text-center text-sm font-medium text-white/60 transition-colors hover:border-white/20 hover:text-white"
                  >
                    View pricing
                  </Link>
                </div>

                <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
                  <div className="space-y-3">
                    {TRUST_SIGNALS.map((item) => (
                      <div key={item.text} className="flex items-center gap-3 text-sm text-white/55">
                        <span className="text-base">{item.icon}</span>
                        <span>{item.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* ── Who we build for ── */}
        <section className="border-t border-white/10 bg-[#0d0d14] py-16 md:py-24">
          <div className="mx-auto max-w-5xl px-6">
            <div className="mb-12 text-center">
              <p className="text-xs font-bold uppercase tracking-widest text-blue-400">Audience</p>
              <h2 className="mt-2 text-2xl font-bold text-white md:text-3xl lg:text-4xl">
                Who we build for
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-base text-white/50">
                Teams worldwide hire us for production-grade delivery—whether you&apos;re validating an
                idea or scaling an existing product.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
              {WHO_WE_BUILD_FOR.map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-white/[0.08] bg-white/[0.03] p-6 transition-colors hover:border-white/15"
                >
                  <span className="text-2xl" aria-hidden>
                    {item.icon}
                  </span>
                  <h3 className="mt-3 font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/55">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Related case studies ── */}
        {config.caseStudies.length > 0 ? (
          <section className="border-t border-white/10 bg-[#0a0a0f] py-16 md:py-20">
            <div className="mx-auto max-w-5xl px-6">
              <div className="mb-10">
                <p className="text-xs font-bold uppercase tracking-widest text-purple-400">
                  Portfolio
                </p>
                <h2 className="mt-2 text-2xl font-bold text-white md:text-3xl">Related case studies</h2>
                <p className="mt-2 max-w-2xl text-white/50">
                  See how we&apos;ve shipped similar work—real outcomes, not slide decks.
                </p>
              </div>
              <ul className="grid gap-4 sm:grid-cols-2">
                {config.caseStudies.map((c) => (
                  <li key={c.href}>
                    <Link
                      href={c.href}
                      className="group flex items-center justify-between gap-4 rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4 transition-colors hover:border-blue-500/30 hover:bg-white/[0.05]"
                    >
                      <span className="font-medium text-white/90 group-hover:text-white">
                        {c.label}
                      </span>
                      <span
                        className="shrink-0 text-blue-400 transition-transform group-hover:translate-x-0.5"
                        aria-hidden
                      >
                        →
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        ) : null}

        {/* ── Ready to build? ── */}
        <section className="border-t border-white/10 bg-[#0d0d14] py-16 text-center md:py-20">
          <div className="mx-auto max-w-2xl px-6">
            <p className="mb-3 text-xs font-bold uppercase tracking-widest text-blue-400">
              Ready to build?
            </p>
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
              Let&apos;s scope your {config.serviceType} project.
            </h2>
            <p className="mb-8 text-base text-white/50">
              Free discovery call · Fixed-price quote in 24h · No commitment required.
            </p>
            <div className="flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/hire"
                className="rounded-lg bg-blue-600 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-blue-500"
              >
                Start a project
              </Link>
              <a
                href="https://wa.me/918527594730"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-white/15 px-7 py-3.5 text-sm font-medium text-white/70 transition-colors hover:border-white/30 hover:text-white"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
