import Image from 'next/image';

import type { Service } from '@/types';

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="service-card reveal" aria-label={service.title}>
      <Image
        src={service.icon.src}
        alt={service.icon.alt}
        width={service.icon.width}
        height={service.icon.height}
        priority={service.id === 'web-development' || service.icon.priority}
        className="service-icon-img"
      />
      <h3 className="service-title">{service.title}</h3>
      <ul className="service-list" aria-label={`${service.title} capabilities`}>
        {service.bullets.map((bullet) => (
          <li key={bullet}>{bullet}</li>
        ))}
      </ul>
    </article>
  );
}

