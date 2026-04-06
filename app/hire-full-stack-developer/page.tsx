import HireDeveloperLanding from '@/components/seo/HireDeveloperLanding';
import { HIRE_LANDINGS } from '@/lib/seo-hire-landings';
import { hirePageMetadata } from '@/lib/seo-page-metadata';

const cfg = HIRE_LANDINGS['hire-full-stack-developer']!;

export const metadata = hirePageMetadata(cfg);

export default function Page() {
  return <HireDeveloperLanding config={cfg} />;
}
