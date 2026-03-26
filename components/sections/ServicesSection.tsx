import type { Service } from '@/types';

import { SERVICES } from '@/constants/services';

import ServiceCard from '@/components/modules/ServiceCard';

export default function ServicesSection() {
  const services: Service[] = SERVICES;

  return (
    <section id="services" aria-labelledby="services-title">
      <div className="services-header reveal">
        <span className="section-label">What We Do</span>
        <div className="divider" aria-hidden="true" />
        <h2 id="services-title" className="section-title">
          End-to-End IT Services Under One Roof
        </h2>
        <p className="section-desc">
          From concept to deployment, we cover the complete product lifecycle so you never need
          to juggle multiple vendors.
        </p>
      </div>

      <div className="services-grid" aria-label="Services list">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </section>
  );
}

