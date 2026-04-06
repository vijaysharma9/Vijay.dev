'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useMemo, useState } from 'react';

export type AdminPostRow = {
  id: number;
  title: string;
  slug: string;
  excerpt: string | null;
  category: string;
  status: string;
  featured: boolean;
  views: number;
  updated_at: string;
  cover_image: string | null;
};

export default function AdminPostsTable({ posts }: { posts: AdminPostRow[] }) {
  const [filter, setFilter] = useState<'all' | 'published' | 'draft' | 'featured'>(
    'all'
  );
  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState<Set<number>>(new Set());
  const [busy, setBusy] = useState(false);

  const filtered = useMemo(() => {
    return posts.filter((p) => {
      if (filter === 'published' && p.status !== 'published') return false;
      if (filter === 'draft' && p.status !== 'draft') return false;
      if (filter === 'featured' && !p.featured) return false;
      if (search.trim()) {
        const q = search.toLowerCase();
        if (!p.title.toLowerCase().includes(q)) return false;
      }
      return true;
    });
  }, [posts, filter, search]);

  function toggle(id: number) {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  function toggleAll() {
    if (selected.size === filtered.length) {
      setSelected(new Set());
    } else {
      setSelected(new Set(filtered.map((p) => p.id)));
    }
  }

  async function bulkDelete() {
    if (!selected.size || !confirm(`Delete ${selected.size} post(s)?`)) return;
    setBusy(true);
    try {
      for (const id of selected) {
        await fetch(`/api/blog/posts/${id}`, { method: 'DELETE' });
      }
      setSelected(new Set());
      window.location.reload();
    } finally {
      setBusy(false);
    }
  }

  return (
    <div>
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-2">
          {(['all', 'published', 'draft', 'featured'] as const).map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              className={`rounded-full px-3 py-1.5 text-xs font-semibold uppercase ${
                filter === f
                  ? 'bg-[rgba(79,140,255,0.2)] text-[#e8e8f0]'
                  : 'text-[#7b7b99] hover:bg-[rgba(255,255,255,0.05)]'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
        <input
          type="search"
          placeholder="Search title…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full max-w-xs rounded-lg border border-[rgba(255,255,255,0.1)] bg-[#09090f] px-3 py-2 text-sm text-[#e8e8f0] focus:border-[#4f8cff55] focus:outline-none sm:w-64"
        />
      </div>

      {selected.size > 0 ? (
        <div className="mb-4 flex items-center gap-3">
          <button
            type="button"
            disabled={busy}
            onClick={bulkDelete}
            className="rounded-lg bg-red-500/20 px-4 py-2 text-sm font-medium text-red-200 hover:bg-red-500/30 disabled:opacity-50"
          >
            Delete selected ({selected.size})
          </button>
        </div>
      ) : null}

      <div className="overflow-x-auto rounded-xl border border-[rgba(255,255,255,0.08)]">
        <table className="w-full min-w-[800px] text-left text-sm">
          <thead className="border-b border-[rgba(255,255,255,0.08)] bg-[#0d0d18] text-[#7b7b99]">
            <tr>
              <th className="px-3 py-3">
                <input
                  type="checkbox"
                  checked={
                    filtered.length > 0 && selected.size === filtered.length
                  }
                  onChange={toggleAll}
                  aria-label="Select all"
                />
              </th>
              <th className="px-2 py-3 font-medium">Cover</th>
              <th className="px-4 py-3 font-medium">Title</th>
              <th className="px-4 py-3 font-medium">Category</th>
              <th className="px-4 py-3 font-medium">Status</th>
              <th className="px-4 py-3 font-medium">Views</th>
              <th className="px-4 py-3 font-medium">Updated</th>
              <th className="px-4 py-3 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((p) => (
              <tr
                key={p.id}
                className="border-b border-[rgba(255,255,255,0.05)]"
              >
                <td className="px-3 py-2">
                  <input
                    type="checkbox"
                    checked={selected.has(p.id)}
                    onChange={() => toggle(p.id)}
                    aria-label={`Select ${p.title}`}
                  />
                </td>
                <td className="px-2 py-2">
                  <div className="relative h-8 w-8 overflow-hidden rounded bg-[#12122a]">
                    {p.cover_image ? (
                      <Image
                        src={p.cover_image}
                        alt=""
                        fill
                        className="object-cover"
                        sizes="32px"
                      />
                    ) : null}
                  </div>
                </td>
                <td className="max-w-xs px-4 py-2">
                  <div className="font-medium text-[#e8e8f0] line-clamp-2">
                    {p.title}
                  </div>
                  {p.excerpt ? (
                    <div className="mt-0.5 line-clamp-1 text-xs text-[#7b7b99]">
                      {p.excerpt}
                    </div>
                  ) : null}
                </td>
                <td className="px-4 py-2 text-[#7b7b99]">{p.category}</td>
                <td className="px-4 py-2">
                  <span
                    className={
                      p.status === 'published'
                        ? 'rounded-full bg-[rgba(0,229,160,0.15)] px-2 py-0.5 text-xs text-[#00e5a0]'
                        : 'rounded-full bg-[rgba(245,158,11,0.15)] px-2 py-0.5 text-xs text-amber-200'
                    }
                  >
                    {p.status}
                  </span>
                </td>
                <td className="px-4 py-2 text-[#7b7b99]">{p.views}</td>
                <td className="px-4 py-2 text-[#7b7b99]">
                  {new Date(p.updated_at).toLocaleDateString()}
                </td>
                <td className="px-4 py-2">
                  <Link
                    href={`/admin/posts/${p.id}`}
                    className="text-[#4f8cff] hover:underline"
                  >
                    Edit
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
