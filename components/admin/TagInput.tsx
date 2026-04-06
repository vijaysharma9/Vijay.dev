'use client';

import { useCallback, useState } from 'react';

import { cn } from '@/utils/cn';

export default function TagInput({
  tags,
  onChange
}: {
  tags: string[];
  onChange: (tags: string[]) => void;
}) {
  const [input, setInput] = useState('');

  const add = useCallback(
    (raw: string) => {
      const t = raw.replace(/,/g, '').trim();
      if (!t || tags.includes(t)) return;
      onChange([...tags, t]);
      setInput('');
    },
    [tags, onChange]
  );

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ',') {
            e.preventDefault();
            add(input);
          }
        }}
        onBlur={() => {
          if (input.trim()) add(input);
        }}
        placeholder="Type tag, Enter or comma"
        className="w-full rounded-lg border border-[rgba(255,255,255,0.1)] bg-[#09090f] px-3 py-2 text-sm text-[#e8e8f0] placeholder:text-[#7b7b99] focus:border-[#4f8cff55] focus:outline-none"
      />
      <div className="mt-2 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <button
            key={tag}
            type="button"
            onClick={() => onChange(tags.filter((x) => x !== tag))}
            className={cn(
              'inline-flex items-center gap-1 rounded-full border border-[rgba(255,255,255,0.1)]',
              'bg-[rgba(79,140,255,0.1)] px-2.5 py-1 text-xs text-[#e8e8f0] transition hover:border-red-400/50'
            )}
          >
            {tag}
            <span className="text-[#7b7b99]">×</span>
          </button>
        ))}
      </div>
    </div>
  );
}
