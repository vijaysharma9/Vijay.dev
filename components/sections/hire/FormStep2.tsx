'use client';

import { cn } from '@/utils/cn';

import { PROJECT_TYPES } from '@/lib/hire-data';

export default function FormStep2({
  selectedTypes,
  onToggle,
  error
}: {
  selectedTypes: string[];
  onToggle: (value: string) => void;
  error?: string | null;
}) {
  return (
    <div className="space-y-5">
      <header className="mb-8">
        <p className="mb-1 text-[0.68rem] font-bold uppercase tracking-[0.1em] text-[#4f8cff]">
          Step 2 of 4
        </p>
        <h3 className="font-heading text-xl font-extrabold text-[#e8e8f0]">What Are We Building?</h3>
        <p className="mt-1 text-[0.87rem] leading-relaxed text-[#7b7b99]">
          Pick the category that best matches your project. Select all that apply.
        </p>
      </header>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {PROJECT_TYPES.map((pt) => {
          const selected = selectedTypes.includes(pt.value);
          return (
            <button
              key={pt.value}
              type="button"
              onClick={() => onToggle(pt.value)}
              className={cn(
                'relative rounded-[10px] border p-4 text-left transition',
                selected
                  ? 'border-[#4f8cff] bg-[rgba(79,140,255,0.06)]'
                  : 'border-white/[0.07] bg-[rgba(255,255,255,0.032)] hover:border-[rgba(79,140,255,0.3)]'
              )}
              aria-pressed={selected}
            >
              {selected ? (
                <span className="absolute right-3 top-3 text-[0.75rem] font-bold text-[#4f8cff]" aria-hidden>
                  ✓
                </span>
              ) : null}
              <div className="mb-1 text-[1.3rem] leading-none">{pt.icon}</div>
              <div className="font-heading text-[0.85rem] font-bold text-[#e8e8f0]">{pt.label}</div>
              <div className="mt-0.5 text-[0.72rem] text-[#7b7b99]">{pt.sub}</div>
            </button>
          );
        })}
      </div>

      {error ? (
        <p className="text-sm text-red-400" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}
