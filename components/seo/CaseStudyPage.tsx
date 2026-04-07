import Link from 'next/link'

import { Breadcrumb } from '@/components/Breadcrumb'
import { JsonLd } from '@/components/JsonLd'
import { SITE_URL } from '@/constants/navigation'
import type { CaseStudyPageData } from '@/lib/case-study-pages'
import { PROJECTS } from '@/lib/work-data'

function caseStudyTitle(study: CaseStudyPageData) {
  return study.h1.replace(/\s*—\s*Case Study\s*$/i, '').trim()
}

function projectMeta(study: CaseStudyPageData) {
  const p = PROJECTS.find((x) => x.id === study.projectId)
  return {
    category: p?.category ?? '',
    subtitle: p?.desc ?? undefined
  }
}

export function CaseStudyPage({ study }: { study: CaseStudyPageData }) {
  const { category, subtitle } = projectMeta(study)
  const title = caseStudyTitle(study)
  const base = SITE_URL.replace(/\/$/, '')

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: title,
    description: study.challenge,
    url: `${base}/work/${study.slug}`,
    creator: {
      '@type': 'Organization',
      name: 'HireDeveloperShop',
      url: base
    },
    keywords: study.stack.join(', ')
  }

  return (
    <>
      <JsonLd data={schema} />

      <main className="min-h-screen bg-[#0a0a0a] pt-24">
        {/* Breadcrumb below fixed header */}
        <div className="mx-auto mb-8 max-w-5xl px-6">
          <Breadcrumb
            items={[
              { label: 'Home', href: '/' },
              { label: 'Work', href: '/work' },
              { label: title }
            ]}
          />
        </div>

        {/* Hero */}
        <section className="mx-auto max-w-5xl px-6 pb-20 pt-8">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-400">
            {category}
          </div>
          <h1 className="mb-6 max-w-3xl text-4xl font-bold leading-tight text-white md:text-5xl">
            {title}
          </h1>
          {subtitle ? <p className="max-w-2xl text-xl text-gray-400">{subtitle}</p> : null}
        </section>

        {/* Metrics Bar */}
        {study.metrics?.length ? (
          <section className="border-y border-white/10 bg-white/[0.02]">
            <div className="mx-auto max-w-5xl px-6 py-10">
              <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
                {study.metrics.map((metric, i) => (
                  <div key={`${metric.label}-${i}`} className="text-center">
                    <div className="mb-2 text-3xl font-bold text-blue-400 md:text-4xl">
                      {metric.value}
                    </div>
                    <div className="text-sm uppercase tracking-wider text-gray-500">{metric.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ) : null}

        {/* Content */}
        <section className="mx-auto max-w-5xl px-6 py-20">
          <div className="grid gap-16 md:grid-cols-3">
            {/* Main content */}
            <div className="space-y-14 md:col-span-2">
              <div>
                <div className="mb-5 flex items-center gap-3">
                  <div className="h-6 w-1 rounded-full bg-red-500" />
                  <h2 className="text-xs font-semibold uppercase tracking-[0.15em] text-red-400">
                    The Challenge
                  </h2>
                </div>
                <p className="text-lg leading-relaxed text-gray-300">{study.challenge}</p>
              </div>

              <div>
                <div className="mb-5 flex items-center gap-3">
                  <div className="h-6 w-1 rounded-full bg-blue-500" />
                  <h2 className="text-xs font-semibold uppercase tracking-[0.15em] text-blue-400">
                    Our Solution
                  </h2>
                </div>
                <p className="text-lg leading-relaxed text-gray-300">{study.solution}</p>
              </div>

              <div>
                <div className="mb-5 flex items-center gap-3">
                  <div className="h-6 w-1 rounded-full bg-green-500" />
                  <h2 className="text-xs font-semibold uppercase tracking-[0.15em] text-green-400">
                    Results
                  </h2>
                </div>
                <p className="text-lg leading-relaxed text-gray-300">{study.results}</p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Tech Stack */}
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-gray-400">
                  Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {study.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-900/30 to-blue-950/30 p-6">
                <h3 className="mb-2 font-semibold text-white">Want a similar build?</h3>
                <p className="mb-5 text-sm text-gray-400">
                  Book a free 30-min discovery call. Proposal within 24 hours.
                </p>
                <Link
                  href="/hire"
                  className="block w-full rounded-xl bg-blue-600 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-blue-500"
                >
                  {study.ctaText ?? 'Discuss a Similar Build'}
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* More Work */}
        <section className="border-t border-white/10 bg-white/[0.02]">
          <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-16">
            <div>
              <p className="mb-1 text-sm text-gray-500">More case studies</p>
              <Link
                href="/work"
                className="font-medium text-blue-400 transition-colors hover:text-blue-300"
              >
                ← View all projects
              </Link>
            </div>
            <Link
              href="/hire"
              className="rounded-xl bg-white px-6 py-3 text-sm font-semibold text-black transition-colors hover:bg-gray-100"
            >
              Start your project →
            </Link>
          </div>
        </section>
      </main>
    </>
  )
}
