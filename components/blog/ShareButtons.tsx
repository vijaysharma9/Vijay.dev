'use client';

import { useState } from 'react';

export default function ShareButtons({
  url,
  title
}: {
  url: string;
  title: string;
}) {
  const [copied, setCopied] = useState(false);

  const shareUrl = encodeURIComponent(url);
  const shareTitle = encodeURIComponent(title);

  async function copy() {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className="flex flex-wrap items-center gap-3">
      <span className="text-sm font-medium text-[var(--muted)]">Share</span>
      <button
        type="button"
        onClick={copy}
        className="rounded-lg border border-[var(--border)] bg-[rgba(79,140,255,0.08)] px-3 py-1.5 text-sm text-[var(--text)] transition hover:border-[#4f8cff55]"
      >
        {copied ? 'Copied!' : 'Copy link'}
      </button>
      <a
        href={`https://wa.me/?text=${shareTitle}%20${shareUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-lg border border-[var(--border)] px-3 py-1.5 text-sm text-[var(--text)] transition hover:border-[#25D36655]"
      >
        WhatsApp
      </a>
      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-lg border border-[var(--border)] px-3 py-1.5 text-sm text-[var(--text)] transition hover:border-[#0a66c255]"
      >
        LinkedIn
      </a>
    </div>
  );
}
