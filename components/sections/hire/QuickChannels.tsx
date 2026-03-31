import Link from 'next/link';

import { QUICK_CHANNELS } from '@/lib/hire-data';

export default function QuickChannels() {
  return (
    <section className="bg-[#09090f] px-5 py-24 sm:px-[5vw]">
      <div className="mx-auto max-w-[1200px]">
        <div className="text-center">
          <p className="mb-3 text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-[#4f8cff]">
            Ways to Reach Us
          </p>
          <h2 className="font-heading text-[clamp(2rem,4vw,2.9rem)] font-extrabold leading-tight tracking-[-0.02em] text-[#e8e8f0]">
            Pick Your{' '}
            <span className="bg-gradient-to-br from-[#4f8cff] to-[#a259ff] bg-clip-text text-transparent">
              Preferred Channel
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-[500px] text-base leading-relaxed text-[#7b7b99]">
            We&apos;re reachable across all major platforms. Choose whichever works best for you.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {QUICK_CHANNELS.map((ch) => {
            const isHash = ch.href.startsWith('#');
            const className =
              'group block rounded-2xl border border-white/[0.07] bg-[rgba(255,255,255,0.032)] p-8 text-center transition hover:-translate-y-1 hover:border-[rgba(79,140,255,0.28)]';

            const inner = (
              <>
                <div className="mb-3 text-[2rem] leading-none">{ch.icon}</div>
                <h3 className="font-heading text-[0.92rem] font-bold text-[#e8e8f0]">{ch.title}</h3>
                <p className="mt-1 text-[0.8rem] leading-relaxed text-[#7b7b99]">{ch.desc}</p>
                <div className="mt-3 text-[0.82rem] font-semibold text-[#4f8cff]">{ch.value}</div>
              </>
            );

            return isHash ? (
              <Link key={ch.title} href={ch.href} className={className}>
                {inner}
              </Link>
            ) : (
              <a
                key={ch.title}
                href={ch.href}
                target="_blank"
                rel="noopener noreferrer"
                className={className}
              >
                {inner}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
