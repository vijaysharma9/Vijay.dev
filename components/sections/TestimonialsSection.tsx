import { TESTIMONIALS } from '@/constants/testimonials';

import TestimonialCard from '@/components/modules/TestimonialCard';

export default function TestimonialsSection() {
  return (
    <section id="testimonials" aria-labelledby="testimonials-title">
      <div className="testimonials-header reveal">
        <span className="section-label">Client Feedback</span>
        <div className="divider" aria-hidden="true" />
        <h2 id="testimonials-title" className="section-title">
          What Clients Say
        </h2>
        <p className="section-desc">
          Real feedback from real clients. We let the work speak for itself.
        </p>
      </div>

      <div className="testimonials-grid" aria-label="Testimonials grid">
        {TESTIMONIALS.map((testimonial) => (
          <TestimonialCard
            key={testimonial.id}
            testimonial={testimonial}
          />
        ))}
      </div>
    </section>
  );
}

