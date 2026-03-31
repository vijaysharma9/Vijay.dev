import { BOOKING_STEPS, CALENDLY_BOOK_URL } from '@/lib/hire-data';

export default function BookACall() {
  return (
    <section className="bg-[#09090f] px-5 py-24 sm:px-[5vw]">
      <div className="mx-auto max-w-[1200px]">
        <p className="mb-3 text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-[#4f8cff]">
          Book a Call
        </p>
        <h2 className="font-heading text-[clamp(2rem,4vw,2.9rem)] font-extrabold leading-tight tracking-[-0.02em] text-[#e8e8f0]">
          Not Ready to Fill the Form?
          <br />
          <span className="bg-gradient-to-br from-[#4f8cff] to-[#a259ff] bg-clip-text text-transparent">
            Just Talk First.
          </span>
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div>
            <p className="max-w-xl text-base leading-relaxed text-[#7b7b99]">
              Book a free, no-obligation 30-minute discovery call. We&apos;ll listen to what you&apos;re
              building, ask the right questions, and tell you honestly whether we&apos;re the right fit.
            </p>
            <div className="mt-8 flex flex-col gap-3">
              {BOOKING_STEPS.map((s) => (
                <div
                  key={s.num}
                  className="flex gap-4 rounded-xl border border-white/[0.07] bg-[rgba(255,255,255,0.032)] p-5 transition hover:border-[rgba(79,140,255,0.22)]"
                >
                  <div className="mt-0.5 flex h-[26px] w-[26px] shrink-0 items-center justify-center rounded-full border border-[rgba(79,140,255,0.2)] bg-[rgba(79,140,255,0.08)] font-heading text-[0.75rem] font-extrabold text-[#4f8cff]">
                    {s.num}
                  </div>
                  <div>
                    <h3 className="font-heading text-[0.88rem] font-bold text-[#e8e8f0]">{s.title}</h3>
                    <p className="mt-1 text-[0.8rem] leading-relaxed text-[#7b7b99]">{s.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[20px] border border-white/[0.07] bg-[#0d0d18] p-10 text-center before:absolute before:left-0 before:right-0 before:top-0 before:h-0.5 before:bg-gradient-to-r before:from-[#4f8cff] before:to-[#00e5a0]">
            <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-[#4f8cff] to-[#a259ff] font-heading text-[1.6rem] font-extrabold text-white">
              VS
            </div>
            <div className="font-heading text-[1.2rem] font-extrabold text-[#e8e8f0]">Vijay Sharma</div>
            <div className="mt-1 text-[0.82rem] font-medium text-[#4f8cff]">
              Full-Stack Developer & IT Consultant
            </div>
            <p className="mx-auto mt-4 max-w-sm text-[0.84rem] leading-relaxed text-[#7b7b99]">
              8+ years building SaaS, AI, eCommerce, and enterprise platforms. Based in India, working with
              clients globally across UK, US, and Australia.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-2">
              {['Upwork Top Rated', '5.0 ⭐ Rating', '50+ Projects', '3 Continents'].map((b) => (
                <span
                  key={b}
                  className="rounded-full border border-[rgba(79,140,255,0.18)] bg-[rgba(79,140,255,0.08)] px-2.5 py-0.5 text-[0.7rem] font-semibold text-[#4f8cff]"
                >
                  {b}
                </span>
              ))}
            </div>
            <a
              href={CALENDLY_BOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 block w-full rounded-[10px] bg-gradient-to-r from-[#4f8cff] to-[#a259ff] py-3 text-[0.92rem] font-bold text-white transition hover:opacity-95"
            >
              📅 Book a Free 30-Min Call
            </a>
            <a
              href="https://wa.me/918527594730"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 block w-full rounded-[10px] border border-white/[0.07] py-3 text-[0.88rem] font-medium text-[#e8e8f0] transition hover:border-[#4f8cff] hover:text-[#4f8cff]"
            >
              💬 WhatsApp Instead
            </a>
            <p className="mt-4 text-[0.75rem] text-[#7b7b99]">
              📍 India (IST · UTC+5:30) — Flexible overlap for UK, EU & US-East
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
