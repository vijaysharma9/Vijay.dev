'use client';

import { cn } from '@/utils/cn';

const FILTERS: { id: string; label: string }[] = [
  { id: 'all', label: 'All Projects' },
  { id: 'saas', label: 'SaaS' },
  { id: 'ai', label: 'AI & Automation' },
  { id: 'ecommerce', label: 'eCommerce' },
  { id: 'mobile', label: 'Mobile' },
  { id: 'fintech', label: 'FinTech' },
  { id: 'health', label: 'HealthTech' },
  { id: 'devops', label: 'DevOps' }
];

export type WorkFilterValue = (typeof FILTERS)[number]['id'];

export default function WorkFilterBar({
  active,
  onChange
}: {
  active: WorkFilterValue;
  onChange: (value: WorkFilterValue) => void;
}) {
  return (
    <div className="sticky top-16 z-[90] border-b border-white/[0.07] bg-[#0d0d18] px-[5vw] py-5">
      <div className="mx-auto flex max-w-[1200px] flex-wrap gap-2">
        {FILTERS.map((f) => {
          const isActive = active === f.id;
          return (
            <button
              key={f.id}
              type="button"
              onClick={() => onChange(f.id as WorkFilterValue)}
              className={cn(
                'whitespace-nowrap rounded-full border px-[10px] py-1.5 text-[0.78rem] font-medium transition-colors',
                isActive
                  ? 'border-[rgba(79,140,255,0.35)] bg-[rgba(79,140,255,0.12)] text-[#4f8cff]'
                  : 'border-white/[0.07] bg-[rgba(255,255,255,0.032)] text-[#7b7b99] hover:border-[rgba(79,140,255,0.35)] hover:bg-[rgba(79,140,255,0.12)] hover:text-[#4f8cff]'
              )}
            >
              {f.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

