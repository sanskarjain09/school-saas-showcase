"use client";

/**
 * ⚠️ UI SHELL ONLY — no authentication is wired up yet.
 *
 * Before going live:
 * 1. Connect this form to your real auth provider (NextAuth, Clerk, Supabase Auth, etc.)
 * 2. Protect every route under /admin with Next.js middleware so unauthenticated
 *    users are redirected to /admin/login before any dashboard data loads.
 *    See middleware.ts in the project root for a starter template — it currently
 *    passes every request through untouched; you must implement the session check.
 */

import { useState, type FormEvent } from "react";
import Link from "next/link";
import Image from "next/image";
import { Lock, Mail, Loader2 } from "lucide-react";

export default function AdminLoginPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");

    // TODO: replace with a real sign-in call once auth is wired up.
    setTimeout(() => {
      setLoading(false);
      setError(
        "Admin authentication isn't connected yet. Ask your development team to wire this up."
      );
    }, 900);
  }

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-surface px-4 py-20">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-aurora-1" />

      <div className="w-full max-w-md rounded-3xl border border-border bg-background p-8 shadow-card-lg sm:p-10">
        <div className="flex flex-col items-center text-center">
          <Link href="/" className="inline-flex">
            <Image
              src="/images/logo.png"
              alt="School ERP Logo"
              width={120}
              height={72}
              className="object-contain"
            />
          </Link>

          <div className="mt-6 flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
            <Lock className="h-5 w-5 text-accent" aria-hidden />
          </div>

          <h1 className="mt-4 text-2xl font-bold tracking-tight text-foreground">
            Admin sign in
          </h1>
          <p className="mt-2 text-sm text-muted">
            Access the platform dashboard with your administrator credentials.
          </p>
        </div>

        <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="admin-email" className="sr-only">
              Email
            </label>
            <div className="relative">
              <Mail
                className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted"
                aria-hidden
              />
              <input
                id="admin-email"
                type="email"
                required
                placeholder="you@institution.com"
                className="w-full rounded-xl border border-border bg-background py-3.5 pl-11 pr-4 text-sm outline-none transition focus:border-accent"
              />
            </div>
          </div>

          <div>
            <label htmlFor="admin-password" className="sr-only">
              Password
            </label>
            <div className="relative">
              <Lock
                className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted"
                aria-hidden
              />
              <input
                id="admin-password"
                type="password"
                required
                placeholder="Password"
                className="w-full rounded-xl border border-border bg-background py-3.5 pl-11 pr-4 text-sm outline-none transition focus:border-accent"
              />
            </div>
          </div>

          {error ? (
            <p className="rounded-xl border border-amber-200 bg-amber-50 p-3 text-xs text-amber-700">
              {error}
            </p>
          ) : null}

          <button
            type="submit"
            disabled={loading}
            className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-accent text-sm font-semibold text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {loading ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
                Signing in...
              </>
            ) : (
              "Sign in"
            )}
          </button>
        </form>

        <Link
          href="/"
          className="mt-6 block text-center text-xs font-medium text-muted hover:text-foreground"
        >
          ← Back to website
        </Link>
      </div>
    </section>
  );
}
