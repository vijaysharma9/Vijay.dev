'use client';

import Image from 'next/image';
import { useCallback, useState } from 'react';

export default function ImageUpload({
  value,
  onChange,
  label = 'Cover image'
}: {
  value: string | null;
  onChange: (url: string | null) => void;
  label?: string;
}) {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onFile = useCallback(
    async (file: File | null) => {
      if (!file) return;
      setError(null);
      setUploading(true);
      try {
        const fd = new FormData();
        fd.append('file', file);
        const res = await fetch('/api/blog/upload', {
          method: 'POST',
          body: fd
        });
        const data = (await res.json()) as { url?: string; error?: string };
        if (!res.ok) throw new Error(data.error ?? 'Upload failed');
        if (data.url) onChange(data.url);
      } catch (e) {
        setError(e instanceof Error ? e.message : 'Upload failed');
      } finally {
        setUploading(false);
      }
    },
    [onChange]
  );

  return (
    <div>
      <div className="mb-2 text-xs font-semibold uppercase tracking-wide text-[#7b7b99]">
        {label}
      </div>
      <label className="flex cursor-pointer flex-col items-center justify-center rounded-xl border border-dashed border-[rgba(255,255,255,0.15)] bg-[#09090f] px-4 py-8 transition hover:border-[#4f8cff44]">
        <input
          type="file"
          accept="image/*"
          className="hidden"
          disabled={uploading}
          onChange={(e) => {
            const f = e.target.files?.[0];
            void onFile(f ?? null);
            e.target.value = '';
          }}
        />
        {value ? (
          <div className="relative aspect-video w-full max-w-sm overflow-hidden rounded-lg">
            <Image
              src={value}
              alt=""
              fill
              className="object-cover"
              sizes="400px"
            />
          </div>
        ) : (
          <span className="text-sm text-[#7b7b99]">
            {uploading ? 'Uploading…' : 'Click or drop an image'}
          </span>
        )}
      </label>
      {value ? (
        <button
          type="button"
          onClick={() => onChange(null)}
          className="mt-2 text-xs text-red-400 hover:underline"
        >
          Remove image
        </button>
      ) : null}
      {error ? <p className="mt-2 text-xs text-red-400">{error}</p> : null}
    </div>
  );
}
