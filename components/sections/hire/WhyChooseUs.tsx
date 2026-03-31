import { WHY_REASONS } from '@/lib/hire-data';

export default function WhyChooseUs() {
  return (
    <section className="bg-[#0d0d18] px-5 py-24 sm:px-[5vw]">
      <div className="mx-auto max-w-[1200px]">
        <p className="mb-3 text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-[#4f8cff]">
          Why Work With Us
        </p>
        <h2 className="font-heading text-[clamp(2rem,4vw,2.9rem)] font-extrabold leading-tight tracking-[-0.02em] text-[#e8e8f0]">
          What Makes Us{' '}
          <span className="bg-gradient-to-br from-[#4f8cff] to-[#a259ff] bg-clip-text text-transparent">
            Different
          </span>
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col gap-4">
            {WHY_REASONS.map((r) => (
              <div
                key={r.title}
                className="flex gap-4 rounded-xl border border-white/[0.07] bg-[rgba(255,255,255,0.032)] p-5 transition hover:border-[rgba(79,140,255,0.25)]"
              >
                <span className="mt-0.5 text-[1.4rem] leading-none" aria-hidden>
                  {r.icon}
                </span>
                <div>
                  <h3 className="font-heading text-[0.92rem] font-bold text-[#e8e8f0]">{r.title}</h3>
                  <p className="mt-1 text-[0.83rem] leading-relaxed text-[#7b7b99]">{r.body}</p>
                </div>
              </div>
            ))}
          </div>

          <div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { num: '50+', label: 'Projects Delivered' },
                { num: '8+', label: 'Years Experience' },
                { num: '0', label: 'Missed Deadlines' },
                { num: '5.0★', label: 'Upwork Rating' }
              ].map((s) => (
                <div
                  key={s.label}
                  className="rounded-[14px] border border-white/[0.07] bg-[rgba(255,255,255,0.032)] p-6 text-center transition hover:border-[rgba(79,140,255,0.25)]"
                >
                  <div className="font-heading text-[2.2rem] font-extrabold leading-none text-transparent bg-gradient-to-br from-[#4f8cff] to-[#a259ff] bg-clip-text">
                    {s.num}
                  </div>
                  <div className="mt-2 text-[0.75rem] uppercase tracking-[0.06em] text-[#7b7b99]">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 rounded-[14px] border border-[rgba(79,140,255,0.15)] bg-gradient-to-br from-[rgba(79,140,255,0.07)] to-[rgba(0,229,160,0.05)] p-8">
              <blockquote className="text-[0.92rem] italic leading-relaxed text-[#e8e8f0]">
                &ldquo;They delivered a production-grade SaaS platform in 11 weeks — on time, on budget, and
                with clean code I could actually maintain. Best technical engagement we&apos;ve had in 5
                years of building.&rdquo;
              </blockquote>
              <cite className="mt-4 block text-[0.78rem] not-italic text-[#7b7b99]">
                — <strong className="text-[#4f8cff]">Rahul K.</strong>, Startup Founder · Verified via Upwork
              </cite>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
