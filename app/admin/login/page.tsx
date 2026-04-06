'use client';

import { signIn } from 'next-auth/react';
import Link from 'next/link';
import { useState } from 'react';

export default function AdminLoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const res = await signIn('credentials', {
        username,
        password,
        redirect: false,
        callbackUrl: '/admin/dashboard'
      });
      if (res?.error) {
        setError('Invalid username or password.');
        return;
      }
      window.location.href = '/admin/dashboard';
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4">
      <Link href="/" className="mb-8 text-center">
        <span className="bg-gradient-to-r from-[#4f8cff] to-[#06b6d4] bg-clip-text text-2xl font-extrabold text-transparent">
          HireDeveloperShop
        </span>
        <div className="mt-2 text-sm text-[#7b7b99]">Admin Panel</div>
      </Link>

      <form
        onSubmit={onSubmit}
        className="w-full max-w-md rounded-2xl border border-[rgba(255,255,255,0.08)] bg-[#0d0d18] p-8 shadow-xl"
      >
        {error ? (
          <p className="mb-4 rounded-lg border border-red-500/40 bg-red-500/10 px-3 py-2 text-sm text-red-200">
            {error}
          </p>
        ) : null}

        <label className="block text-xs font-semibold uppercase tracking-wide text-[#7b7b99]">
          Username
          <input
            type="text"
            autoComplete="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="mt-1 w-full rounded-lg border border-[rgba(255,255,255,0.1)] bg-[#09090f] px-3 py-2.5 text-[#e8e8f0] focus:border-[#4f8cff55] focus:outline-none"
            required
          />
        </label>

        <label className="mt-4 block text-xs font-semibold uppercase tracking-wide text-[#7b7b99]">
          Password
          <input
            type="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 w-full rounded-lg border border-[rgba(255,255,255,0.1)] bg-[#09090f] px-3 py-2.5 text-[#e8e8f0] focus:border-[#4f8cff55] focus:outline-none"
            required
          />
        </label>

        <button
          type="submit"
          disabled={loading}
          className="mt-6 w-full rounded-lg bg-gradient-to-r from-[#4f8cff] to-[#a259ff] py-3 text-sm font-semibold text-white shadow-lg transition hover:opacity-95 disabled:opacity-50"
        >
          {loading ? 'Signing in…' : 'Sign In'}
        </button>
      </form>
    </div>
  );
}
