import Link from 'next/link';

import { Breadcrumb } from '@/components/Breadcrumb';
import { JsonLd } from '@/components/JsonLd';
import { caseStudyArticleSchema, type CaseStudyPageData } from '@/lib/case-study-pages';
import { PROJECTS } from '@/lib/work-data';

function caseStudyTitle(study: CaseStudyPageData) {
  return study.h1.replace(/\s*—\s*Case Study\s*$/i, '').trim();
}

function projectMeta(study: CaseStudyPageData) {
  const p = PROJECTS.find((x) => x.id === study.projectId);
  return {
    category: p?.category ?? '',
    icon: p?.icon ?? ''
  };
}

export function CaseStudyPage({ study }: { study: CaseStudyPageData }) {
  const { category, icon } = projectMeta(study);
  const title = caseStudyTitle(study);
  const schema = caseStudyArticleSchema(study);

  return (
    <>
      <JsonLd data={schema} />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden border-b border-white/10 bg-[#0a0a0f] pb-16 pt-10 md:pb-24 md:pt-14">
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
              { label: 'Work', href: '/work' },
              { label: title }
            ]}
          />

          <div className="mb-4 mt-6 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-400">
            <span>{icon}</span>
            <span>{category}</span>
          </div>

          <h1 className="max-w-4xl text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-4 text-base font-medium uppercase tracking-widest text-white/50">
            Case Study
          </p>
        </div>
      </section>

      {/* ── Metrics Bar ── */}
      {study.metrics && study.metrics.length > 0 ? (
        <section className="border-b border-white/10 bg-[#0d0d14]">
          <div className="mx-auto max-w-5xl px-6">
            <div className="flex flex-col divide-y divide-white/10 md:flex-row md:divide-x md:divide-y-0">
              {study.metrics.map((metric, i) => (
                <div
                  key={`${metric.label}-${i}`}
                  className="flex flex-1 flex-col items-center justify-center px-4 py-8 text-center"
                >
                  <span className="text-3xl font-bold tracking-tight text-white md:text-4xl">
                    {metric.value}
                  </span>
                  <span className="mt-1.5 text-xs font-semibold uppercase tracking-widest text-white/40">
                    {metric.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* ── Main Content ── */}
      <section className="bg-[#0a0a0f] py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid gap-12 md:grid-cols-[1fr_320px] md:gap-16 lg:gap-24">
            <div className="space-y-12">
              <div>
                <div className="mb-4 flex items-center gap-3">
                  <div className="h-px flex-1 bg-white/10" />
                  <span className="text-xs font-bold uppercase tracking-widest text-blue-400">
                    Challenge
                  </span>
                  <div className="h-px flex-1 bg-white/10" />
                </div>
                <div className="rounded-xl border border-white/[0.08] bg-white/[0.03] p-6 md:p-8">
                  <p className="text-base leading-relaxed text-white/75 md:text-lg">{study.challenge}</p>
                </div>
              </div>

              <div>
                <div className="mb-4 flex items-center gap-3">
                  <div className="h-px flex-1 bg-white/10" />
                  <span className="text-xs font-bold uppercase tracking-widest text-purple-400">
                    Solution
                  </span>
                  <div className="h-px flex-1 bg-white/10" />
                </div>
                <div className="rounded-xl border border-white/[0.08] bg-white/[0.03] p-6 md:p-8">
                  <p className="text-base leading-relaxed text-white/75 md:text-lg">{study.solution}</p>
                </div>
              </div>

              <div>
                <div className="mb-4 flex items-center gap-3">
                  <div className="h-px flex-1 bg-white/10" />
                  <span className="text-xs font-bold uppercase tracking-widest text-green-400">
                    Results
                  </span>
                  <div className="h-px flex-1 bg-white/10" />
                </div>
                <div className="rounded-xl border border-green-500/20 bg-green-500/[0.04] p-6 md:p-8">
                  <p className="text-base leading-relaxed text-white/75 md:text-lg">{study.results}</p>
                </div>
              </div>
            </div>

            <aside className="space-y-6">
              <div className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
                <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-white/40">
                  Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {study.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/70 transition-colors hover:border-white/20 hover:text-white"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl border border-blue-500/30 bg-blue-500/10 p-6">
                <h3 className="mb-2 text-base font-semibold text-white">Want a similar build?</h3>
                <p className="mb-4 text-sm leading-relaxed text-white/55">
                  Book a free 30-minute discovery call. We&apos;ll scope your project and send a
                  fixed-price quote within 24 hours.
                </p>
                <Link
                  href="/hire"
                  className="block w-full rounded-lg bg-blue-600 px-4 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-blue-500"
                >
                  {study.ctaText ?? 'Discuss a similar build'}
                </Link>
                <Link
                  href="/work"
                  className="mt-3 block w-full rounded-lg border border-white/10 px-4 py-3 text-center text-sm font-medium text-white/60 transition-colors hover:border-white/20 hover:text-white"
                >
                  ← View all projects
                </Link>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
                <div className="space-y-3">
                  {[
                    { icon: '⭐', text: '5.0 on Upwork · Top Rated' },
                    { icon: '🚀', text: '50+ projects delivered' },
                    { icon: '🌍', text: 'Available worldwide' },
                    { icon: '🔒', text: 'NDA & IP transfer included' }
                  ].map((item) => (
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

      <section className="border-t border-white/10 bg-[#0d0d14] py-16 text-center md:py-20">
        <div className="mx-auto max-w-2xl px-6">
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-blue-400">
            Ready to build?
          </p>
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
            Let&apos;s build something like this for you.
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
    </>
  );
}
