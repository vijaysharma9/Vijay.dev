export type ServiceLandingConfig = {
  slug: string;
  breadcrumbLabel: string;
  title: string;
  description: string;
  canonicalPath: string;
  ogTitle: string;
  h1: string;
  intro: string;
  sections: { heading: string; body: string }[];
  serviceType: string;
  serviceSchemaDescription: string;
  related: { label: string; href: string }[];
  caseStudies: { label: string; href: string }[];
  /** Tech stack tags (from /services cards). */
  stackTags: string[];
};
