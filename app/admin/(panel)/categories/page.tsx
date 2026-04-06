'use client';

import { useCallback, useEffect, useState } from 'react';

type Category = {
  id: number;
  name: string;
  slug: string;
  color: string;
  description: string | null;
  post_count?: number;
};

export default function AdminCategoriesPage() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [name, setName] = useState('');
  const [color, setColor] = useState('#4f8cff');
  const [description, setDescription] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const load = useCallback(async () => {
    const res = await fetch('/api/blog/categories');
    const data = (await res.json()) as { categories: Category[] };
    if (data.categories) setCategories(data.categories);
  }, []);

  useEffect(() => {
    void load();
  }, [load]);

  async function addCategory(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const res = await fetch('/api/blog/categories', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, color, description })
      });
      const data = (await res.json()) as { error?: string };
      if (!res.ok) throw new Error(data.error ?? 'Failed');
      setName('');
      setDescription('');
      await load();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed');
    } finally {
      setLoading(false);
    }
  }

  async function remove(id: number) {
    if (!confirm('Delete this category?')) return;
    const res = await fetch(`/api/blog/categories/${id}`, { method: 'DELETE' });
    if (res.ok) await load();
  }

  return (
    <div>
      <h1 className="font-[family-name:var(--font-syne)] text-3xl font-extrabold">
        Categories
      </h1>
      <p className="mt-2 text-sm text-[#7b7b99]">
        Categories are stored for filters; post <code className="text-[#4f8cff]">category</code>{' '}
        field uses the name string.
      </p>

      <form
        onSubmit={addCategory}
        className="mt-8 max-w-xl space-y-4 rounded-xl border border-[rgba(255,255,255,0.08)] bg-[#0d0d18] p-6"
      >
        {error ? (
          <p className="text-sm text-red-300">{error}</p>
        ) : null}
        <div>
          <label className="text-xs font-semibold uppercase text-[#7b7b99]">Name</label>
          <input
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 w-full rounded-lg border border-[rgba(255,255,255,0.1)] bg-[#09090f] px-3 py-2 text-[#e8e8f0]"
          />
        </div>
        <div>
          <label className="text-xs font-semibold uppercase text-[#7b7b99]">Color</label>
          <input
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            className="mt-1 h-10 w-20 cursor-pointer rounded border-0 bg-transparent"
          />
        </div>
        <div>
          <label className="text-xs font-semibold uppercase text-[#7b7b99]">
            Description
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={2}
            className="mt-1 w-full rounded-lg border border-[rgba(255,255,255,0.1)] bg-[#09090f] px-3 py-2 text-[#e8e8f0]"
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="rounded-lg bg-[#4f8cff] px-5 py-2 text-sm font-semibold text-white disabled:opacity-50"
        >
          Add category
        </button>
      </form>

      <div className="mt-12 overflow-x-auto rounded-xl border border-[rgba(255,255,255,0.08)]">
        <table className="w-full min-w-[600px] text-left text-sm">
          <thead className="border-b border-[rgba(255,255,255,0.08)] bg-[#0d0d18] text-[#7b7b99]">
            <tr>
              <th className="px-4 py-3 font-medium">Name</th>
              <th className="px-4 py-3 font-medium">Slug</th>
              <th className="px-4 py-3 font-medium">Color</th>
              <th className="px-4 py-3 font-medium">Posts</th>
              <th className="px-4 py-3 font-medium" />
            </tr>
          </thead>
          <tbody>
            {categories.map((c) => (
              <tr key={c.id} className="border-b border-[rgba(255,255,255,0.05)]">
                <td className="px-4 py-3 font-medium text-[#e8e8f0]">{c.name}</td>
                <td className="px-4 py-3 text-[#7b7b99]">{c.slug}</td>
                <td className="px-4 py-3">
                  <span
                    className="inline-block h-6 w-12 rounded border border-white/10"
                    style={{ background: c.color }}
                  />
                </td>
                <td className="px-4 py-3 text-[#7b7b99]">{c.post_count ?? '—'}</td>
                <td className="px-4 py-3">
                  <button
                    type="button"
                    onClick={() => void remove(c.id)}
                    className="text-sm text-red-400 hover:underline"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
