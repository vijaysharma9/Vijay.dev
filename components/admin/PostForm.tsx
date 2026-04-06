'use client';

import { useRouter } from 'next/navigation';
import { useCallback, useEffect, useMemo, useState } from 'react';

import ImageUpload from '@/components/admin/ImageUpload';
import PostEditor from '@/components/admin/PostEditor';
import StatusToggle from '@/components/admin/StatusToggle';
import TagInput from '@/components/admin/TagInput';
import type { Post } from '@/lib/blog-types';
import { readTimeFromHtml } from '@/lib/blog-slug';

type CategoryRow = {
  id: number;
  name: string;
  slug: string;
  color: string;
};

export default function PostForm({
  mode,
  initial
}: {
  mode: 'create' | 'edit';
  initial?: Post;
}) {
  const router = useRouter();
  const [title, setTitle] = useState(initial?.title ?? '');
  const [excerpt, setExcerpt] = useState(initial?.excerpt ?? '');
  const [content, setContent] = useState(initial?.content ?? '');
  const [coverImage, setCoverImage] = useState<string | null>(
    initial?.cover_image ?? null
  );
  const [category, setCategory] = useState(initial?.category ?? 'General');
  const [tags, setTags] = useState<string[]>(initial?.tags ?? []);
  const [status, setStatus] = useState<'draft' | 'published'>(
    initial?.status ?? 'draft'
  );
  const [featured, setFeatured] = useState(initial?.featured ?? false);
  const [author, setAuthor] = useState(initial?.author ?? 'Vijay Sharma');
  const [readTime, setReadTime] = useState(initial?.read_time ?? 5);
  const [categories, setCategories] = useState<CategoryRow[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const editorKey = mode === 'edit' && initial?.id ? String(initial.id) : 'new';

  const computedRead = useMemo(
    () => readTimeFromHtml(content),
    [content]
  );

  const loadCategories = useCallback(async () => {
    const res = await fetch('/api/blog/categories');
    const data = (await res.json()) as { categories: CategoryRow[] };
    if (data.categories) setCategories(data.categories);
  }, []);

  useEffect(() => {
    void loadCategories();
  }, [loadCategories]);

  const uploadInlineImage = useCallback(async (file: File) => {
    const fd = new FormData();
    fd.append('file', file);
    const res = await fetch('/api/blog/upload', { method: 'POST', body: fd });
    const data = (await res.json()) as { url?: string; error?: string };
    if (!res.ok) {
      setError(data.error ?? 'Image upload failed');
      return null;
    }
    return data.url ?? null;
  }, []);

  async function save(nextStatus: 'draft' | 'published') {
    setError(null);
    setLoading(true);
    setStatus(nextStatus);
    try {
      const body = {
        title,
        excerpt: excerpt || null,
        content,
        cover_image: coverImage,
        category,
        tags,
        status: nextStatus,
        featured,
        author,
        read_time: readTime > 0 ? readTime : computedRead
      };

      const url =
        mode === 'edit' && initial
          ? `/api/blog/posts/${initial.id}`
          : '/api/blog/posts';
      const res = await fetch(url, {
        method: mode === 'edit' ? 'PATCH' : 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      });
      const data = (await res.json()) as { post?: Post; error?: string };
      if (!res.ok) throw new Error(data.error ?? 'Save failed');
      if (data.post) {
        if (mode === 'create') {
          router.replace(`/admin/posts/${data.post.id}`);
        }
        router.refresh();
      }
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Save failed');
    } finally {
      setLoading(false);
    }
  }

  const slug = initial?.slug;

  async function removePost() {
    if (mode !== 'edit' || !initial?.id) return;
    if (!confirm('Delete this post permanently?')) return;
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`/api/blog/posts/${initial.id}`, {
        method: 'DELETE'
      });
      if (!res.ok) throw new Error('Delete failed');
      router.push('/admin/posts');
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Delete failed');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex flex-col gap-8 lg:flex-row">
      <div className="min-w-0 flex-[0.65] space-y-4">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Post title…"
          className="w-full border-none bg-transparent font-[family-name:var(--font-syne)] text-3xl font-extrabold text-[#e8e8f0] placeholder:text-[#7b7b99] focus:outline-none focus:ring-0"
        />
        <textarea
          value={excerpt}
          onChange={(e) => setExcerpt(e.target.value)}
          placeholder="Short description (used for cards and SEO)"
          rows={3}
          className="w-full rounded-lg border border-[rgba(255,255,255,0.1)] bg-[#09090f] px-3 py-2 text-sm text-[#e8e8f0] placeholder:text-[#7b7b99] focus:border-[#4f8cff55] focus:outline-none"
        />
        <PostEditor
          key={editorKey}
          content={content}
          onChange={setContent}
          onImageFile={uploadInlineImage}
        />
      </div>

      <div className="flex w-full flex-[0.35] flex-col gap-6 lg:max-w-sm">
        {error ? (
          <p className="rounded-lg border border-red-500/40 bg-red-500/10 px-3 py-2 text-sm text-red-200">
            {error}
          </p>
        ) : null}

        <div>
          <div className="mb-2 text-xs font-semibold uppercase text-[#7b7b99]">
            Status
          </div>
          <StatusToggle value={status} onChange={setStatus} />
        </div>

        <label className="flex cursor-pointer items-center gap-2 text-sm text-[#e8e8f0]">
          <input
            type="checkbox"
            checked={featured}
            onChange={(e) => setFeatured(e.target.checked)}
            className="rounded border-[rgba(255,255,255,0.2)] bg-[#09090f]"
          />
          Feature on blog homepage
        </label>

        <div>
          <div className="mb-2 text-xs font-semibold uppercase text-[#7b7b99]">
            Category
          </div>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full rounded-lg border border-[rgba(255,255,255,0.1)] bg-[#09090f] px-3 py-2 text-sm text-[#e8e8f0] focus:border-[#4f8cff55] focus:outline-none"
          >
            {categories.length === 0 ? (
              <option value={category}>{category}</option>
            ) : (
              categories.map((c) => (
                <option key={c.id} value={c.name}>
                  {c.name}
                </option>
              ))
            )}
          </select>
        </div>

        <div>
          <div className="mb-2 text-xs font-semibold uppercase text-[#7b7b99]">
            Tags
          </div>
          <TagInput tags={tags} onChange={setTags} />
        </div>

        <ImageUpload value={coverImage} onChange={setCoverImage} />

        <div>
          <div className="mb-2 text-xs font-semibold uppercase text-[#7b7b99]">
            Author
          </div>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="w-full rounded-lg border border-[rgba(255,255,255,0.1)] bg-[#09090f] px-3 py-2 text-sm text-[#e8e8f0] focus:border-[#4f8cff55] focus:outline-none"
          />
        </div>

        <div>
          <div className="mb-2 text-xs font-semibold uppercase text-[#7b7b99]">
            Read time (min)
          </div>
          <input
            type="number"
            min={1}
            value={readTime}
            onChange={(e) => setReadTime(parseInt(e.target.value, 10) || 1)}
            className="w-full rounded-lg border border-[rgba(255,255,255,0.1)] bg-[#09090f] px-3 py-2 text-sm text-[#e8e8f0] focus:border-[#4f8cff55] focus:outline-none"
          />
          <p className="mt-1 text-[11px] text-[#7b7b99]">
            Auto from words: ~{computedRead} min
          </p>
        </div>

        <div className="flex flex-col gap-2 border-t border-[rgba(255,255,255,0.07)] pt-4">
          <button
            type="button"
            disabled={loading}
            onClick={() => void save('published')}
            className="w-full rounded-lg bg-[#4f8cff] py-3 text-sm font-semibold text-white transition hover:bg-[#3d7ae6] disabled:opacity-50"
          >
            {mode === 'edit' ? 'Publish / update' : 'Publish'}
          </button>
          <button
            type="button"
            disabled={loading}
            onClick={() => void save('draft')}
            className="w-full rounded-lg border border-[rgba(255,255,255,0.12)] py-3 text-sm font-medium text-[#e8e8f0] transition hover:bg-[rgba(255,255,255,0.05)] disabled:opacity-50"
          >
            Save draft
          </button>
          {slug ? (
            <button
              type="button"
              onClick={() => window.open(`/blog/${slug}`, '_blank')}
              disabled={status !== 'published'}
              className="w-full rounded-lg border border-[rgba(255,255,255,0.12)] py-2 text-sm text-[#7b7b99] disabled:cursor-not-allowed disabled:opacity-40"
            >
              Preview live post
            </button>
          ) : null}
          {mode === 'edit' && initial?.id ? (
            <button
              type="button"
              disabled={loading}
              onClick={() => void removePost()}
              className="w-full rounded-lg border border-red-500/40 py-2 text-sm text-red-300 transition hover:bg-red-500/10 disabled:opacity-50"
            >
              Delete post
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
}
