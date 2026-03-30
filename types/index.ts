export type ImageAsset = {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
};

export type Service = {
  id: string;
  title: string;
  icon: ImageAsset;
  bullets: string[];
};

export type PricingPlan = {
  id: string;
  title: string;
  priceLabel: string;
  priceSubLabel: string;
  featured?: boolean;
  features: string[];
  ctaLabel: string;
  ctaVariant: 'primary' | 'secondary';
};

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

export type Project = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image: ImageAsset;
  visualClass: string;
};

export type NavigationItem = {
  id: string;
  label: string;
};

export type TechGroup = {
  id: string;
  title: string;
  tags: string[];
};

export type WhyItem = {
  id: string;
  title: string;
  description: string;
};

export type ContactFormValues = {
  name: string;
  email: string;
  projectType?: string;
  budgetRange?: string;
  message: string;
  /**
   * Honeypot field. Bots often fill this; we require it to stay empty.
   */
  website?: string;
};

export type ContactApiSuccess = {
  success: true;
  message: string;
};

export type ContactApiError = {
  success: false;
  error: string;
};

export type ContactApiResponse = ContactApiSuccess | ContactApiError;

