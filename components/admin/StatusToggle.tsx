'use client';

import { cn } from '@/utils/cn';

export default function StatusToggle({
  value,
  onChange
}: {
  value: 'draft' | 'published';
  onChange: (v: 'draft' | 'published') => void;
}) {
  return (
    <div className="flex rounded-full border border-[rgba(255,255,255,0.1)] bg-[#09090f] p-1">
      <button
        type="button"
        onClick={() => onChange('draft')}
        className={cn(
          'flex-1 rounded-full px-3 py-2 text-xs font-semibold uppercase tracking-wide transition',
          value === 'draft'
            ? 'bg-[rgba(245,158,11,0.2)] text-amber-200'
            : 'text-[#7b7b99] hover:text-[#e8e8f0]'
        )}
      >
        Draft
      </button>
      <button
        type="button"
        onClick={() => onChange('published')}
        className={cn(
          'flex-1 rounded-full px-3 py-2 text-xs font-semibold uppercase tracking-wide transition',
          value === 'published'
            ? 'bg-[rgba(0,229,160,0.15)] text-[#00e5a0]'
            : 'text-[#7b7b99] hover:text-[#e8e8f0]'
        )}
      >
        Published
      </button>
    </div>
  );
}
