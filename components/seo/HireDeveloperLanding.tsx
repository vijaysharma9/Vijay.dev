import Link from 'next/link';

import { Breadcrumb } from '@/components/Breadcrumb';
import { JsonLd } from '@/components/JsonLd';
import { TESTIMONIALS } from '@/constants/testimonials';
import {
  hireFaqSchema,
  hireServiceSchema,
  type HireLandingConfig
} from '@/lib/seo-hire-landings';

const PROCESS = [
  { title: 'Understand', desc: 'We clarify goals, users, stack, and success metrics on a free call.' },
  { title: 'Plan', desc: 'Written scope, milestones, and timeline—aligned with /pricing before work starts.' },
  { title: 'Build', desc: 'Weekly demos, transparent Git history, and QA before each release.' },
  { title: 'Deliver', desc: 'Production deploy, handover docs, and optional ongoing support.' }
];

export default function HireDeveloperLanding({ config }: { config: HireLandingConfig }) {
  return (
    <main className="min-h-screen bg-[#09090f] px-[5vw] py-28 pb-24 text-[#e8e8f0]">
      <JsonLd data={hireServiceSchema(config)} />
      <JsonLd data={hireFaqSchema(config)} />

      <div className="mx-auto max-w-[800px]">
        <Breadcrumb
          items={[
            { label: 'Home', href: '/' },
            { label: 'Hire', href: '/hire' },
            { label: config.breadcrumbLabel }
          ]}
        />

        <h1 className="font-heading text-[clamp(1.85rem,4vw,2.6rem)] font-extrabold leading-tight tracking-[-0.02em]">
          {config.h1}
        </h1>
        <p className="mt-6 text-base leading-relaxed text-[#7b7b99]">{config.description}</p>

        <section className="mt-12">
          <h2 className="font-heading text-xl font-bold">Core skills</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-[#bdbdd5]">
            {config.skills.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </section>

        <section className="mt-12">
          <h2 className="font-heading text-xl font-bold">How we work</h2>
          <ol className="mt-4 space-y-4">
            {PROCESS.map((step, i) => (
              <li key={step.title} className="flex gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[rgba(79,140,255,0.2)] text-sm font-bold text-[#4f8cff]">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-semibold text-[#e8e8f0]">{step.title}</h3>
                  <p className="mt-1 text-sm text-[#7b7b99]">{step.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-12 rounded-[18px] border border-white/[0.08] bg-[rgba(255,255,255,0.03)] p-6">
          <h2 className="font-heading text-xl font-bold">Pricing</h2>
          <p className="mt-3 text-[#7b7b99]">
            Transparent packages and add-ons are on our{' '}
            <Link href="/pricing" className="text-[#4f8cff] hover:underline">
              pricing page
            </Link>
            . We align scope to your milestone before any deposit.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="font-heading text-xl font-bold">What clients say</h2>
          <div className="mt-6 space-y-6">
            {TESTIMONIALS.slice(0, 3).map((t) => (
              <blockquote
                key={t.id}
                className="rounded-[14px] border border-white/[0.07] bg-[rgba(255,255,255,0.03)] p-5"
              >
                <p className="text-sm leading-relaxed text-[#bdbdd5]">{t.text}</p>
                <footer className="mt-3 text-xs text-[#7b7b99]">
                  {t.authorName} — {t.authorRole}
                </footer>
              </blockquote>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="font-heading text-xl font-bold">FAQ</h2>
          <dl className="mt-6 space-y-6">
            {config.faqs.map((faq) => (
              <div key={faq.question}>
                <dt className="font-semibold text-[#e8e8f0]">{faq.question}</dt>
                <dd className="mt-2 text-sm leading-relaxed text-[#7b7b99]">{faq.answer}</dd>
              </div>
            ))}
          </dl>
        </section>

        <div className="mt-14">
          <Link
            href="/hire"
            className="inline-flex rounded-lg bg-[#4f8cff] px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-[#3d7ae6]"
          >
            Start hiring — book a call
          </Link>
        </div>
      </div>
    </main>
  );
}
