export type Testimonial = {
  id: string;
  stars: string;
  text: string;
  authorInitials: string;
  authorAvatarClass: string;
  authorName: string;
  authorRole: string;
  verifiedLabel: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'rahul-k',
    stars: '★★★★★',
    text: 'Highly skilled developer with great communication. Delivered exactly what we needed — on time, on budget, and with exceptional quality.',
    authorInitials: 'RK',
    authorAvatarClass: 'av1',
    authorName: 'Rahul K.',
    authorRole: 'Startup Founder, SaaS',
    verifiedLabel: '✓ Verified via Upwork'
  },
  {
    id: 'sarah-p',
    stars: '★★★★★',
    text: "Fast, reliable, and very professional. Vijay's team handled everything end-to-end. We will definitely work together again on our next project.",
    authorInitials: 'SP',
    authorAvatarClass: 'av2',
    authorName: 'Sarah P.',
    authorRole: 'eCommerce Owner',
    verifiedLabel: '✓ Verified via Upwork'
  },
  {
    id: 'amit-m',
    stars: '★★★★★',
    text: 'Great experience from start to finish. They handled everything from frontend to backend perfectly. Communication was outstanding throughout.',
    authorInitials: 'AM',
    authorAvatarClass: 'av3',
    authorName: 'Amit M.',
    authorRole: 'Product Manager',
    verifiedLabel: '✓ Verified via Upwork'
  }
];

