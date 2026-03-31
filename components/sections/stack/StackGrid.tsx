'use client';

import {
  STACK_CATEGORIES,
  type StackItem,
  type StackLevel
} from '@/lib/stack-data';
import { cn } from '@/utils/cn';

const LEVEL_LABEL: Record<StackLevel, string> = {
  expert: 'Expert',
  advanced: 'Advanced',
  proficient: 'Proficient',
  working: 'Working'
};

const LEVEL_BADGE: Record<StackLevel, string> = {
  expert:
    'border border-emerald-500/25 bg-emerald-500/10 text-[0.65rem] font-semibold text-[#00e5a0]',
  advanced:
    'border border-[rgba(79,140,255,0.25)] bg-[rgba(79,140,255,0.12)] text-[0.65rem] font-semibold text-[#4f8cff]',
  proficient:
    'border border-[rgba(162,89,255,0.25)] bg-[rgba(162,89,255,0.12)] text-[0.65rem] font-semibold text-[#a259ff]',
  working:
    'border border-[rgba(255,210,77,0.2)] bg-[rgba(255,210,77,0.1)] text-[0.65rem] font-semibold text-[#ffd24d]'
};

function TechChip({ item }: { item: StackItem }) {
  return (
    <div className="relative flex cursor-default items-center gap-2.5 rounded-[10px] border border-white/[0.07] bg-[rgba(255,255,255,0.032)] px-4 py-[0.55rem] transition-all duration-300 hover:-translate-y-0.5 hover:border-[rgba(79,140,255,0.3)] hover:bg-[rgba(79,140,255,0.05)]">
      <span className="text-[1.1rem] leading-none" aria-hidden>
        {item.icon}
      </span>
      <span className="text-[0.85rem] font-semibold text-[#e8e8f0]">{item.name}</span>
      <span className={cn('rounded px-[0.45rem] py-[0.12rem]', LEVEL_BADGE[item.level])}>
        {LEVEL_LABEL[item.level]}
      </span>
    </div>
  );
}

export default function StackGrid() {
  return (
    <section
      id="all-stacks"
      className="scroll-mt-20 bg-[#09090f] px-[5vw] py-[100px] text-[#e8e8f0]"
    >
      <div className="mx-auto max-w-[1200px]">
        {STACK_CATEGORIES.map((cat) => (
          <div key={cat.id} id={cat.id} className="mb-16 scroll-mt-24 last:mb-0">
            <div className="mb-7 flex items-center gap-4 border-b border-white/[0.07] pb-4">
              <div
                className={cn(
                  'flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-[10px] text-xl',
                  cat.colorClass
                )}
                aria-hidden
              >
                {cat.icon}
              </div>
              <div>
                <h3 className="font-heading text-[1.1rem] font-bold">{cat.title}</h3>
                <span className="text-[0.82rem] text-[#7b7b99]">{cat.count}</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              {cat.items.map((item) => (
                <TechChip key={`${cat.id}-${item.name}`} item={item} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
