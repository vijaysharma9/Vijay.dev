import Link from 'next/link';

import { Breadcrumb } from '@/components/Breadcrumb';
import HireContactLinkIcon from '@/components/sections/hire/HireContactLinkIcon';
import { CONTACT_LINKS, AVAILABILITY_NOTE, type ContactLink } from '@/lib/hire-data';

import { cn } from '@/utils/cn';

const iconShell: Record<ContactLink['colorClass'], string> = {
  blue: 'bg-[rgba(79,140,255,0.14)]',
  green: 'bg-[rgba(0,229,160,0.12)]',
  purple: 'bg-[rgba(162,89,255,0.14)]',
  orange: 'bg-[rgba(255,122,69,0.14)]'
};

const iconTint: Record<ContactLink['colorClass'], string> = {
  blue: 'text-[#7eb0ff]',
  green: 'text-[#00e5a0]',
  purple: 'text-[#c9a3ff]',
  orange: 'text-[#ff9a72]'
};

/** Muted list body — #7b7b99 */
const hireListMuted = 'text-[0.88rem] leading-[1.45] text-[#7b7b99] sm:text-[0.9rem]';
/** Emphasis in checklist — #e8e8f0, weight 700 */
const hireListStrong = 'font-bold text-[#e8e8f0]';
/** Check badge: slightly stronger ring vs 25% so it reads on near-black */
const hireCheckIcon =
  'flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-[rgba(0,229,160,0.38)] bg-[rgba(0,229,160,0.12)] text-[0.62rem] font-semibold leading-none text-[#00e5a0] antialiased';

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

      <div className="relative z-[1] mx-auto grid max-w-[1100px] grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-x-[clamp(2rem,5vw,3.5rem)] lg:gap-y-10">
        <div className="max-w-xl lg:max-w-none">
          <Breadcrumb
            items={[
              { label: 'Home', href: '/' },
              { label: 'Hire' }
            ]}
          />
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[rgba(79,140,255,0.25)] bg-[rgba(79,140,255,0.1)] px-3.5 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-[#4f8cff]">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#4f8cff]" aria-hidden />
            Let&apos;s work together
          </div>
          <h1 className="font-heading text-[clamp(2.8rem,7vw,5.2rem)] font-extrabold leading-[1.05] tracking-[-0.03em] text-[#e8e8f0]">
            Start Your Project
            <br />
            <span className="bg-gradient-to-r from-[#4f8cff] to-[#00e5a0] bg-clip-text text-transparent">
              Today.
            </span>
          </h1>
          <p className="mt-6 max-w-[520px] text-[0.95rem] leading-relaxed text-[#7b7b99] sm:text-base">
            Tell us what you&apos;re building. We&apos;ll reply within 4 hours with a clear path forward — no
            vague proposals, no sales calls until you&apos;re ready.
          </p>
          <ul className="mt-8 flex flex-col gap-[14px]">
            <li className={cn('flex items-start gap-3', hireListMuted)}>
              <span className={hireCheckIcon} aria-hidden>
                ✓
              </span>
              <span>
                <strong className={hireListStrong}>Free 30-min discovery call</strong>
                {' — no commitment required'}
              </span>
            </li>
            <li className={cn('flex items-start gap-3', hireListMuted)}>
              <span className={hireCheckIcon} aria-hidden>
                ✓
              </span>
              <span>
                <strong className={hireListStrong}>Fixed-price quote</strong>
                {' within 24 hours of call'}
              </span>
            </li>
            <li className={cn('flex items-start gap-3', hireListMuted)}>
              <span className={hireCheckIcon} aria-hidden>
                ✓
              </span>
              <span>
                <strong className={hireListStrong}>Start within 72 hours</strong>
                {' of contract signing'}
              </span>
            </li>
            <li className={cn('flex items-start gap-3', hireListMuted)}>
              <span className={hireCheckIcon} aria-hidden>
                ✓
              </span>
              <span>
                <strong className={hireListStrong}>NDA available</strong>
                {' on request before any discussion'}
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

          <div className="relative overflow-hidden rounded-[20px] border border-white/[0.07] bg-[#0d0d18] p-6 sm:p-7 before:absolute before:left-0 before:right-0 before:top-0 before:h-0.5 before:rounded-t-[20px] before:bg-gradient-to-r before:from-[#4f8cff] before:to-[#00e5a0]">
            <h2 className="font-heading text-[1.05rem] font-bold text-[#e8e8f0] sm:text-[1.15rem]">
              Reach us directly
            </h2>
            <ul className="mt-6 flex list-none flex-col gap-4 p-0">
              {CONTACT_LINKS.map((link) => (
                <li key={link.id}>
                  <Link
                    href={link.href}
                    target={link.href.startsWith('mailto:') ? undefined : '_blank'}
                    rel={link.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                    className="flex min-h-[4.25rem] items-center gap-3.5 rounded-[12px] border border-white/[0.08] bg-[rgba(255,255,255,0.035)] px-4 py-3.5 transition hover:border-[rgba(79,140,255,0.28)] hover:bg-[rgba(255,255,255,0.045)]"
                  >
                    <div
                      className={cn(
                        'flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px]',
                        iconShell[link.colorClass],
                        iconTint[link.colorClass]
                      )}
                      aria-hidden
                    >
                      <HireContactLinkIcon id={link.id} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-[0.62rem] font-semibold uppercase tracking-[0.08em] text-[#7b7b99]">
                        {link.label}
                      </div>
                      <div
                        className={cn(
                          'mt-0.5 text-[0.84rem] font-bold leading-snug text-[#e8e8f0]',
                          link.id === 'email' ? 'break-all' : 'truncate'
                        )}
                      >
                        {link.value}
                      </div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
            <hr className="my-6 border-0 border-t border-white/[0.07]" />
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
