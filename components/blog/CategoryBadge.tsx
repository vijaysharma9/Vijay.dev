import Link from 'next/link';
import type { CSSProperties } from 'react';

import { cn } from '@/utils/cn';

export default function CategoryBadge({
  name,
  color,
  href
}: {
  name: string;
  color?: string | null;
  href?: string;
}) {
  const style = color
    ? ({
        backgroundColor: `${color}22`,
        borderColor: `${color}55`,
        color
      } as CSSProperties)
    : undefined;

  const className = cn(
    'inline-flex items-center rounded-full border px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide',
    !color &&
      'border-[var(--border)] bg-[rgba(79,140,255,0.12)] text-[var(--accent)]'
  );

  const inner = (
    <span className={className} style={style}>
      {name}
    </span>
  );

  if (href) {
    return (
      <Link href={href} className="no-underline">
        {inner}
      </Link>
    );
  }
  return inner;
}
