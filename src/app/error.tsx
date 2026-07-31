"use client";

import { useEffect } from "react";
import { RotateCcw, Home } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log to your error reporting service (Sentry, LogRocket, etc.) here.
    // eslint-disable-next-line no-console
    console.error("Unhandled application error:", error);
  }, [error]);

  return (
    <section className="relative flex min-h-[calc(100vh-100px)] items-center justify-center overflow-hidden py-section-sm lg:py-section-lg">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-aurora-3" />

      <div className="mx-auto flex max-w-xl flex-col items-center text-center">
        <Badge>Something went wrong</Badge>

        <h1 className="mt-8 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Our platform hit a snag.
        </h1>
        <p className="mt-3 max-w-sm text-body text-muted">
          An unexpected error occurred while loading this page. Try again, or head back home.
        </p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <button
            type="button"
            onClick={() => reset()}
            className="group relative inline-flex h-[52px] items-center justify-center gap-2.5 rounded-button bg-gradient-blue-purple px-8 text-small font-medium text-white shadow-glow transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110 hover:shadow-glow-purple active:scale-[0.98]"
          >
            <RotateCcw className="h-4 w-4" aria-hidden />
            Try again
          </button>
          <Button href="/" variant="secondary" size="lg" icon={Home}>
            Back to Home
          </Button>
        </div>
      </div>
    </section>
  );
}
