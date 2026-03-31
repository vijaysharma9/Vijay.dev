'use client';

import { useEffect, useState } from 'react';

import { cn } from '@/utils/cn';

export default function BillingToggle({
  isAnnual,
  onChange
}: {
  isAnnual: boolean;
  onChange: (value: boolean) => void;
}) {
  // Local state to drive the thumb animation and satisfy toggle-state requirement.
  const [on, setOn] = useState<boolean>(false);

  useEffect(() => {
    setOn(isAnnual);
  }, [isAnnual]);

  return (
    <div className="mt-10 flex items-center justify-center gap-4">
      <span className={cn('text-[0.88rem] font-medium', !on ? 'text-[#e8e8f0]' : 'text-[#7b7b99]')}>
        Monthly
      </span>
      <button
        type="button"
        aria-label="Toggle annual billing"
        aria-pressed={on}
        onClick={() => {
          const next = !on;
          setOn(next);
          onChange(next);
        }}
        className={cn(
          'relative h-[26px] w-12 cursor-pointer rounded-full border transition-colors',
          on
            ? 'border-[rgba(79,140,255,0.3)] bg-[rgba(79,140,255,0.4)]'
            : 'border-[rgba(79,140,255,0.3)] bg-[rgba(79,140,255,0.2)]'
        )}
      >
        <span
          className={cn(
            'absolute left-0 top-0 h-5 w-5 translate-x-0 translate-y-[2px] rounded-full bg-[#4f8cff] shadow-[0_0_8px_rgba(79,140,255,0.5)] transition-transform duration-200',
            on && 'translate-x-[22px]'
          )}
        />
      </button>
      <span className={cn('text-[0.88rem] font-medium', on ? 'text-[#e8e8f0]' : 'text-[#7b7b99]')}>
        Annual
      </span>
      <span className="rounded-full border border-[rgba(0,229,160,0.25)] bg-[rgba(0,229,160,0.1)] px-2.5 py-1 text-[0.68rem] font-extrabold tracking-[0.04em] text-[#00e5a0]">
        Save 20%
      </span>
    </div>
  );
}

