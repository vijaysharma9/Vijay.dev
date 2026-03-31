'use client';

import PageCta from '@/components/ui/PageCta';

export default function ServicesPageCta() {
  return (
    <PageCta
      eyebrow="Ready to Build?"
      title={
        <>
          Pick a Service.
          <br />
          Let&apos;s{' '}
          <em className="not-italic bg-gradient-to-br from-[#4f8cff] to-[#a259ff] bg-clip-text text-transparent">
            Start
          </em>{' '}
          This Week.
        </>
      }
      description="Free 30-minute discovery call. Scoped proposal within 24 hours. No commitment required."
      primary={{ href: '/hire', label: 'Book a Free Call' }}
      secondary={{ href: 'https://wa.me/918527594730', label: '💬 WhatsApp Us', external: true }}
    />
  );
}
