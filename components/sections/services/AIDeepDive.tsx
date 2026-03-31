'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

import { AI_DEEP_DIVE_FEATURES, AI_TERMINAL_LINES } from '@/lib/services-data';
import { cn } from '@/utils/cn';

function terminalLineClass(line: string) {
  if (line.startsWith('//')) {
    return line.includes('✓') ? 'text-[#4ade80]' : 'text-[#7b7b99]';
  }
  if (line.includes('import') || line.includes('const ') || line.includes('await')) {
    return 'text-[#e8e8f0] [&_span.cmd]:text-[#4f8cff] [&_span.str]:text-[#ffd24d] [&_span.num]:text-[#a259ff]';
  }
  return 'text-[#e8e8f0]';
}

/** Minimal token styling for the import line without full parser. */
function TerminalLine({ line }: { line: string }) {
  if (line.includes('import') && line.includes('RAGChain')) {
    return (
      <p className="mb-0.5 font-mono text-[0.82rem] leading-[1.7] text-[#e8e8f0]">
        <span className="text-[#4f8cff]">import</span> {'{ RAGChain }'}{' '}
        <span className="text-[#4f8cff]">from</span>{' '}
        <span className="text-[#ffd24d]">&apos;@/lib/ai&apos;</span>;
      </p>
    );
  }
  if (line.includes('model:') && line.includes('gpt-4o')) {
    return (
      <p className="mb-0.5 font-mono text-[0.82rem] leading-[1.7] text-[#e8e8f0]">
        &nbsp;&nbsp;model: <span className="text-[#ffd24d]">&apos;gpt-4o&apos;</span>,
      </p>
    );
  }
  if (line.includes('vectorStore:')) {
    return (
      <p className="mb-0.5 font-mono text-[0.82rem] leading-[1.7] text-[#e8e8f0]">
        &nbsp;&nbsp;vectorStore: <span className="text-[#ffd24d]">&apos;pinecone&apos;</span>,
      </p>
    );
  }
  if (line.includes('namespace:')) {
    return (
      <p className="mb-0.5 font-mono text-[0.82rem] leading-[1.7] text-[#e8e8f0]">
        &nbsp;&nbsp;namespace: <span className="text-[#ffd24d]">&apos;client-docs&apos;</span>,
      </p>
    );
  }
  if (line.trim().startsWith('topK:')) {
    return (
      <p className="mb-0.5 font-mono text-[0.82rem] leading-[1.7] text-[#e8e8f0]">
        &nbsp;&nbsp;topK: <span className="text-[#a259ff]">8</span>,
      </p>
    );
  }
  if (line.includes('Summarise Q3')) {
    return (
      <p className="mb-0.5 font-mono text-[0.82rem] leading-[1.7] text-[#e8e8f0]">
        &nbsp;&nbsp;<span className="text-[#ffd24d]">&quot;Summarise Q3 compliance report&quot;</span>
      </p>
    );
  }
  return (
    <p
      className={cn(
        'mb-0.5 font-mono text-[0.82rem] leading-[1.7]',
        terminalLineClass(line)
      )}
    >
      {line || '\u00a0'}
    </p>
  );
}

export default function AIDeepDive() {
  const sectionRef = useRef<HTMLElement>(null);
  const termRef = useRef<HTMLDivElement>(null);
  const contentInView = useInView(sectionRef, { once: true, margin: '-80px' });
  const termInView = useInView(termRef, { once: true, margin: '-80px' });
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    if (!termInView) return;
    if (visibleLines >= AI_TERMINAL_LINES.length) return;
    const t = window.setTimeout(() => {
      setVisibleLines((n) => n + 1);
    }, 120);
    return () => window.clearTimeout(t);
  }, [termInView, visibleLines]);

  return (
    <section
      ref={sectionRef}
      className="bg-[#0d0d18] px-[5vw] py-[100px] text-[#e8e8f0]"
    >
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-[5vw] lg:grid-cols-2">
        <div
          className={cn(
            'transition-all duration-700 ease-out',
            contentInView ? 'translate-y-0 opacity-100' : 'translate-y-7 opacity-0'
          )}
        >
          <p className="mb-4 text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-[#4f8cff]">
            Featured Service
          </p>
          <h2 className="font-heading text-[clamp(2rem,4vw,2.9rem)] font-extrabold leading-[1.1] tracking-[-0.02em]">
            AI &{' '}
            <em className="not-italic bg-gradient-to-br from-[#4f8cff] to-[#a259ff] bg-clip-text text-transparent">
              Automation
            </em>
            <br />
            That Ships
          </h2>
          <p className="mt-4 max-w-full font-body text-base leading-[1.75] text-[#7b7b99]">
            Not demos. Not prototypes. Real AI features integrated into your product, connected to your
            data, and tested for production reliability.
          </p>
          <ul className="mt-8 flex flex-col gap-3.5">
            {AI_DEEP_DIVE_FEATURES.map((item) => (
              <li
                key={item.title}
                className="flex gap-4 rounded-[10px] border border-white/[0.07] bg-[rgba(255,255,255,0.032)] px-5 py-4 transition-colors hover:border-[rgba(79,140,255,0.25)]"
              >
                <span className="mt-0.5 shrink-0 text-base text-[#00e5a0]" aria-hidden>
                  ✓
                </span>
                <div>
                  <h4 className="font-heading text-[0.92rem] font-bold">{item.title}</h4>
                  <p className="mt-1 font-body text-[0.83rem] leading-[1.5] text-[#7b7b99]">
                    {item.body}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div
          ref={termRef}
          className={cn(
            'transition-all delay-100 duration-700 ease-out',
            contentInView ? 'translate-y-0 opacity-100' : 'translate-y-7 opacity-0'
          )}
        >
          <div className="overflow-hidden rounded-2xl border border-[rgba(79,140,255,0.2)] bg-[#0a0a12] p-6 font-mono text-[0.82rem] leading-[1.7]">
            <div className="mb-5 flex gap-2">
              <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
              <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
              <span className="h-3 w-3 rounded-full bg-[#28c840]" />
            </div>
            {AI_TERMINAL_LINES.slice(0, visibleLines).map((line, i) => (
              <TerminalLine key={`${i}-${line}`} line={line} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
