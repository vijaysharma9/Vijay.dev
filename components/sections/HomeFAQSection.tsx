import { HOMEPAGE_FAQS } from '@/constants/homepage-faqs';

export default function HomeFAQSection() {
  return (
    <section
      id="faq"
      className="bg-[#0d0d18] px-[5vw] py-[100px] text-[#e8e8f0]"
      aria-labelledby="faq-heading"
    >
      <div className="mx-auto max-w-[800px]">
        <p className="mb-3 text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-[#4f8cff]">
          FAQ
        </p>
        <h2
          id="faq-heading"
          className="font-heading text-[clamp(1.75rem,3.5vw,2.4rem)] font-extrabold leading-tight tracking-[-0.02em]"
        >
          Common questions about hiring &amp; pricing
        </h2>
        <div className="mt-10 space-y-3">
          {HOMEPAGE_FAQS.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-[14px] border border-white/[0.08] bg-[rgba(255,255,255,0.03)] px-5 py-4"
            >
              <summary className="cursor-pointer list-none font-heading text-[1rem] font-semibold text-[#e8e8f0] marker:content-none [&::-webkit-details-marker]:hidden">
                <span className="flex items-center justify-between gap-3">
                  {faq.question}
                  <span className="text-[#4f8cff] transition group-open:rotate-45" aria-hidden>
                    +
                  </span>
                </span>
              </summary>
              <p className="mt-4 text-[0.9rem] leading-relaxed text-[#7b7b99]">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
