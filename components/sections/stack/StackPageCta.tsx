'use client';

import PageCta from '@/components/ui/PageCta';

export default function StackPageCta() {
  return (
    <PageCta
      eyebrow="Ready to Build?"
      title={
        <>
          Got a Stack in Mind?
          <br />
          Let&apos;s{' '}
          <em className="not-italic bg-gradient-to-br from-[#4f8cff] to-[#a259ff] bg-clip-text text-transparent">
            Architect It
          </em>{' '}
          Together.
        </>
      }
      description="Not sure what technology fits your project? Book a free 30-minute technical consultation. We'll map out the right stack for your use case, team, and budget."
      primary={{ href: '/hire', label: 'Book a Free Tech Call' }}
      secondary={{ href: 'https://wa.me/918527594730', label: '💬 WhatsApp Us', external: true }}
    />
  );
}
