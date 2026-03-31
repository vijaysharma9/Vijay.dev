import Link from 'next/link';

import { CONTACT_LINKS, AVAILABILITY_NOTE } from '@/lib/hire-data';

import { cn } from '@/utils/cn';

const iconShell: Record<string, string> = {
  blue: 'bg-[rgba(79,140,255,0.1)]',
  green: 'bg-[rgba(0,229,160,0.1)]',
  purple: 'bg-[rgba(162,89,255,0.1)]',
  orange: 'bg-[rgba(255,122,69,0.1)]'
};

/** Decorative “screenshot” of the hire flow — reads as the page feature image (no bitmap asset required). */
function HirePageFeaturePreview() {
  return (
    <div
      className="relative overflow-hidden rounded-2xl border border-white/[0.09] bg-[#07070d] shadow-[0_24px_80px_rgba(0,0,0,0.55),0_0_0_1px_rgba(255,255,255,0.04)_inset]"
      aria-hidden
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(79,140,255,0.18),transparent),radial-gradient(ellipse_60%_50%_at_100%_50%,rgba(162,89,255,0.12),transparent)]" />
      <div className="relative border-b border-white/[0.07] bg-[#0a0a12]/90 px-3 py-2.5 sm:px-4">
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="flex gap-1.5" aria-hidden>
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]/90" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]/90" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]/90" />
          </div>
          <div className="min-w-0 flex-1 rounded-md border border-white/[0.06] bg-[#0d0d18] px-2.5 py-1.5 text-left font-mono text-[0.65rem] text-[#7b7b99] sm:text-[0.7rem]">
            <span className="text-[#5a5a72]">https://</span>
            <span className="text-[#a8a8c0]">hiredevelopershop.com</span>
            <span className="text-[#e8e8f0]">/hire</span>
          </div>
        </div>
      </div>

      <div className="relative grid gap-3 p-3 sm:gap-4 sm:p-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)]">
        <div className="space-y-5">
          <div>
            <div className="mb-2 inline-flex rounded-full border border-[rgba(79,140,255,0.25)] bg-[rgba(79,140,255,0.08)] px-2.5 py-1 text-[0.58rem] font-semibold uppercase tracking-[0.12em] text-[#4f8cff]">
              Project inquiry
            </div>
            <div className="font-heading text-[1.05rem] font-extrabold leading-tight text-[#e8e8f0] sm:text-[1.15rem]">
              Tell us about your project
            </div>
            <p className="mt-1 text-[0.72rem] leading-relaxed text-[#7b7b99] sm:text-[0.78rem]">
              4 quick steps — fixed scope, fixed price.
            </p>
          </div>

          <div className="space-y-2">
            {[
              { n: '1', label: 'About you', active: true },
              { n: '2', label: 'Project type', active: false },
              { n: '3', label: 'Scope & budget', active: false },
              { n: '4', label: 'Details', active: false }
            ].map((row) => (
              <div
                key={row.n}
                className={cn(
                  'flex items-center gap-2.5 rounded-lg border px-2.5 py-2.5 sm:px-3',
                  row.active
                    ? 'border-[rgba(79,140,255,0.35)] bg-[rgba(79,140,255,0.08)]'
                    : 'border-white/[0.06] bg-white/[0.02]'
                )}
              >
                <div
                  className={cn(
                    'flex h-7 w-7 shrink-0 items-center justify-center rounded-full border font-heading text-[0.65rem] font-bold',
                    row.active
                      ? 'border-[rgba(79,140,255,0.45)] bg-[rgba(79,140,255,0.15)] text-[#4f8cff]'
                      : 'border-white/[0.08] bg-white/[0.04] text-[#7b7b99]'
                  )}
                >
                  {row.n}
                </div>
                <div className="min-w-0">
                  <div className="font-heading text-[0.78rem] font-bold text-[#e8e8f0]">{row.label}</div>
                  <div className="text-[0.65rem] text-[#7b7b99] sm:text-[0.7rem]">
                    {row.n === '1'
                      ? 'Name, email, company'
                      : row.n === '2'
                        ? 'Multi-select categories'
                        : row.n === '3'
                          ? 'Timeline & investment'
                          : 'Brief, stack & refs'}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex min-h-[200px] flex-col rounded-xl border border-white/[0.07] bg-[#0c0c14]/80 p-3 sm:min-h-[220px] sm:p-4">
          <div className="mb-3 flex items-center justify-between gap-2">
            <span className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#7b7b99] sm:text-[0.68rem]">
              Step 1 of 4
            </span>
            <span className="rounded-full border border-[rgba(0,229,160,0.25)] bg-[rgba(0,229,160,0.08)] px-2 py-0.5 text-[0.6rem] font-semibold text-[#00e5a0] sm:text-[0.65rem]">
              Live
            </span>
          </div>
          <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/[0.06]">
            <div className="h-full w-1/4 rounded-full bg-gradient-to-r from-[#4f8cff] to-[#00e5a0] transition-[width] duration-700" />
          </div>
          <div className="mt-4 grid flex-1 grid-cols-2 gap-2">
            <div className="h-9 rounded-lg border border-white/[0.06] bg-[#0a0a12]" />
            <div className="h-9 rounded-lg border border-white/[0.06] bg-[#0a0a12]" />
            <div className="col-span-2 h-9 rounded-lg border border-white/[0.06] bg-[#0a0a12]" />
            <div className="col-span-2 mt-auto h-10 rounded-lg bg-gradient-to-r from-[#4f8cff] to-[#a259ff] opacity-90" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HireHero() {
  return (
    <section className="relative min-h-[80vh] overflow-hidden px-5 pb-16 pt-[7.5rem] sm:px-[5vw]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-[100px] -top-[200px] h-[800px] w-[800px] rounded-full bg-[radial-gradient(circle,rgba(79,140,255,0.09)_0%,transparent_65%)]" />
        <div className="absolute bottom-[-50px] right-0 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,rgba(0,229,160,0.07)_0%,transparent_65%)]" />
        <div
          className="absolute inset-0 opacity-50 [mask-image:linear-gradient(to_bottom,transparent,rgba(0,0,0,0.5)_20%,rgba(0,0,0,0.5)_80%,transparent)]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.018) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.018) 1px, transparent 1px)',
            backgroundSize: '55px 55px'
          }}
        />
      </div>

      <div className="relative z-[1] mx-auto grid max-w-[1200px] grid-cols-1 items-start gap-6 lg:grid-cols-2 lg:gap-[5vw]">
        <div>
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[rgba(79,140,255,0.25)] bg-[rgba(79,140,255,0.1)] px-3.5 py-1.5 text-[0.72rem] font-semibold uppercase tracking-[0.1em] text-[#4f8cff]">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#4f8cff]" aria-hidden />
            Start a Project
          </div>
          <h1 className="font-heading text-[clamp(2.6rem,5.5vw,4.5rem)] font-extrabold leading-[1.05] tracking-[-0.03em] text-[#e8e8f0]">
            Senior Team.
            <br />
            Clear Scope.{` `}
            <span className="bg-gradient-to-br from-[#4f8cff] to-[#00e5a0] bg-clip-text text-transparent">
              Shipped Fast.
            </span>
          </h1>
          <p className="mt-5 max-w-[480px] text-base leading-relaxed text-[#7b7b99]">
            We&apos;re a senior freelance full-stack team — developers and IT consultants who ship scalable
            digital products. No agency bloat, no juniors, just focused engineering.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="#project-form"
              className="inline-flex items-center justify-center rounded-lg bg-[#4f8cff] px-7 py-3 text-[0.95rem] font-semibold text-white shadow-[0_0_30px_rgba(79,140,255,0.25)] transition hover:-translate-y-0.5 hover:shadow-[0_0_40px_rgba(79,140,255,0.4)]"
            >
              Start Your Brief
            </Link>
            <Link
              href="/work"
              className="inline-flex items-center justify-center rounded-lg border border-white/[0.07] px-7 py-3 text-[0.95rem] font-medium text-[#e8e8f0] transition hover:border-[#4f8cff] hover:text-[#4f8cff]"
            >
              View Our Work
            </Link>
          </div>
          <ul className="mt-8 flex flex-col gap-3">
            <li className="flex items-center gap-3 text-[0.88rem] text-[#7b7b99]">
              <span
                className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-[rgba(0,229,160,0.25)] bg-[rgba(0,229,160,0.1)] text-[0.65rem] text-[#00e5a0]"
                aria-hidden
              >
                ✓
              </span>
              <span>
                <strong className="text-[#e8e8f0]">Free 30-min discovery call</strong> — no commitment
                required
              </span>
            </li>
            <li className="flex items-center gap-3 text-[0.88rem] text-[#7b7b99]">
              <span
                className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-[rgba(0,229,160,0.25)] bg-[rgba(0,229,160,0.1)] text-[0.65rem] text-[#00e5a0]"
                aria-hidden
              >
                ✓
              </span>
              <span>
                <strong className="text-[#e8e8f0]">Clear written scope</strong> before we quote
              </span>
            </li>
            <li className="flex items-center gap-3 text-[0.88rem] text-[#7b7b99]">
              <span
                className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-[rgba(0,229,160,0.25)] bg-[rgba(0,229,160,0.1)] text-[0.65rem] text-[#00e5a0]"
                aria-hidden
              >
                ✓
              </span>
              <span>
                <strong className="text-[#e8e8f0]">Fixed-price proposal</strong> within 24 hours of call
              </span>
            </li>
            <li className="flex items-center gap-3 text-[0.88rem] text-[#7b7b99]">
              <span
                className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-[rgba(0,229,160,0.25)] bg-[rgba(0,229,160,0.1)] text-[0.65rem] text-[#00e5a0]"
                aria-hidden
              >
                ✓
              </span>
              <span>
                <strong className="text-[#e8e8f0]">NDA available</strong> before any sensitive discussion
              </span>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-5 lg:gap-6">
          <div className="inline-flex w-fit flex-wrap items-center gap-2.5 rounded-[10px] border border-[rgba(0,229,160,0.2)] bg-[rgba(0,229,160,0.08)] px-4 py-2.5">
            <span className="h-2 w-2 animate-pulse rounded-full bg-[#00e5a0]" aria-hidden />
            <span className="text-[0.82rem] font-medium text-[#00e5a0]">Available for new projects</span>
            <span className="text-[0.75rem] text-[#7b7b99]">— {AVAILABILITY_NOTE}</span>
          </div>

          <div className="relative">
            <p className="mb-3 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-[#7b7b99]">
              Page preview
            </p>
            <div className="relative">
              <div
                className="pointer-events-none absolute -inset-4 rounded-[28px] bg-[radial-gradient(closest-side,rgba(79,140,255,0.14),transparent_70%)] blur-2xl"
                aria-hidden
              />
              <HirePageFeaturePreview />
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[20px] border border-white/[0.07] bg-[#0d0d18] p-6 before:absolute before:left-0 before:right-0 before:top-0 before:h-0.5 before:rounded-t-[20px] before:bg-gradient-to-r before:from-[#4f8cff] before:to-[#00e5a0]">
            <h2 className="font-heading text-[1.05rem] font-bold text-[#e8e8f0] sm:text-[1.15rem]">
              Reach us directly
            </h2>
            <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {CONTACT_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  target={link.href.startsWith('mailto:') ? undefined : '_blank'}
                  rel={link.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                  className="flex items-center gap-3 rounded-[10px] border border-white/[0.07] bg-[rgba(255,255,255,0.032)] px-3.5 py-3 transition hover:border-[rgba(79,140,255,0.3)] hover:translate-x-0.5"
                >
                  <div
                    className={cn(
                      'flex h-[36px] w-[36px] shrink-0 items-center justify-center rounded-[9px] text-[1.05rem]',
                      iconShell[link.colorClass]
                    )}
                    aria-hidden
                  >
                    {link.icon}
                  </div>
                  <div className="min-w-0">
                    <div className="text-[0.65rem] uppercase tracking-[0.07em] text-[#7b7b99]">{link.label}</div>
                    <div className="truncate text-[0.82rem] font-semibold text-[#e8e8f0]">{link.value}</div>
                  </div>
                </Link>
              ))}
            </div>
            <hr className="my-5 border-0 border-t border-white/[0.07]" />
            <div className="flex items-center gap-2 text-[0.82rem] text-[#7b7b99]">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#00e5a0]" aria-hidden />
              <span>
                Typical response: <strong className="text-[#e8e8f0]">under 4 hours</strong> during business
                hours (IST)
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
