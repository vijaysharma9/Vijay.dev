import Link from 'next/link';

import { CONTACT_LINKS, AVAILABILITY_NOTE } from '@/lib/hire-data';

import { cn } from '@/utils/cn';

const iconShell: Record<string, string> = {
  blue: 'bg-[rgba(79,140,255,0.1)]',
  green: 'bg-[rgba(0,229,160,0.1)]',
  purple: 'bg-[rgba(162,89,255,0.1)]',
  orange: 'bg-[rgba(255,122,69,0.1)]'
};

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

      <div className="relative z-[1] mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-[5vw]">
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
                <strong className="text-[#e8e8f0]">Free 30-min discovery call</strong> — no commitment required
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

        <div>
          <div className="mb-8 inline-flex items-center gap-2.5 rounded-[10px] border border-[rgba(0,229,160,0.2)] bg-[rgba(0,229,160,0.08)] px-4 py-2.5">
            <span className="h-2 w-2 animate-pulse rounded-full bg-[#00e5a0]" aria-hidden />
            <span className="text-[0.82rem] font-medium text-[#00e5a0]">Available for new projects</span>
            <span className="text-[0.75rem] text-[#7b7b99]">— {AVAILABILITY_NOTE}</span>
          </div>

          <div className="relative overflow-hidden rounded-[20px] border border-white/[0.07] bg-[#0d0d18] p-8 before:absolute before:left-0 before:right-0 before:top-0 before:h-0.5 before:rounded-t-[20px] before:bg-gradient-to-r before:from-[#4f8cff] before:to-[#00e5a0]">
            <h2 className="font-heading text-[1.15rem] font-bold text-[#e8e8f0]">Reach us directly</h2>
            <div className="mt-6 flex flex-col gap-3">
              {CONTACT_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  target={link.href.startsWith('mailto:') ? undefined : '_blank'}
                  rel={link.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                  className="flex items-center gap-3.5 rounded-[10px] border border-white/[0.07] bg-[rgba(255,255,255,0.032)] px-4 py-3 transition hover:border-[rgba(79,140,255,0.3)] hover:translate-x-0.5"
                >
                  <div
                    className={cn(
                      'flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-[9px] text-[1.1rem]',
                      iconShell[link.colorClass]
                    )}
                    aria-hidden
                  >
                    {link.icon}
                  </div>
                  <div>
                    <div className="text-[0.7rem] uppercase tracking-[0.07em] text-[#7b7b99]">{link.label}</div>
                    <div className="text-[0.88rem] font-semibold text-[#e8e8f0]">{link.value}</div>
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
