export default function FormSuccess() {
  return (
    <div className="px-6 py-10 text-center sm:px-10 sm:py-12">
      <div className="mb-4 text-[3rem] leading-none" aria-hidden>
        🎉
      </div>
      <h3 className="font-heading text-xl font-extrabold text-[#e8e8f0] sm:text-2xl">
        Brief Received!
      </h3>
      <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-[#7b7b99] sm:text-[0.92rem]">
        Thanks for reaching out. We&apos;ll review your project details and respond within 4 hours with a
        clear path forward.
      </p>
      <div className="mt-8 flex flex-col items-center gap-2 text-sm text-[#7b7b99]">
        <div className="flex items-center justify-center gap-2">
          <span aria-hidden>✉️</span>
          <span>Confirmation sent to your email</span>
        </div>
        <div className="flex items-center justify-center gap-2">
          <span aria-hidden>⏰</span>
          <span>
            Response in <strong className="text-[#e8e8f0]">under 4 hours</strong> (IST business hours)
          </span>
        </div>
        <div className="flex items-center justify-center gap-2">
          <span aria-hidden>📋</span>
          <span>
            Fixed-price proposal delivered <strong className="text-[#e8e8f0]">within 24hrs of call</strong>
          </span>
        </div>
      </div>
    </div>
  );
}
