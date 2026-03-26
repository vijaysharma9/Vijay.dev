import type { Testimonial } from '@/types';

export default function TestimonialCard({
  testimonial
}: {
  testimonial: Testimonial;
}) {
  return (
    <article className="testimonial-card reveal" aria-label={testimonial.authorName}>
      <div className="stars">{testimonial.stars}</div>
      <p className="testimonial-text">"{testimonial.text}"</p>
      <div className="testimonial-author">
        <div className={`author-avatar ${testimonial.authorAvatarClass}`}>
          {testimonial.authorInitials}
        </div>
        <div>
          <div className="author-name">{testimonial.authorName}</div>
          <div className="author-role">{testimonial.authorRole}</div>
        </div>
      </div>
      <div className="upwork-badge">{testimonial.verifiedLabel}</div>
    </article>
  );
}

