import Link from "next/link";
import { Home, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden px-4 py-24">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-aurora-1" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-aurora-2" />

      <div className="mx-auto flex max-w-xl flex-col items-center text-center">
        <Badge>Page not found</Badge>

        <p className="mt-8 font-display text-7xl font-semibold tracking-tight text-foreground sm:text-8xl">
          404
        </p>

        <h1 className="mt-4 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          This page took a wrong turn.
        </h1>
        <p className="mt-3 max-w-sm text-body text-muted">
          The page you're looking for doesn't exist or may have moved. Let's get you back on track.
        </p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <Button href="/" size="lg" icon={Home} showArrow>
            Back to Home
          </Button>
          <Button href="/book-demo" variant="secondary" size="lg">
            Book a Demo
          </Button>
        </div>

        <Link
          href="/contact-us"
          className="mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-muted transition hover:text-foreground"
        >
          Or contact our support team
          <ArrowRight className="h-3.5 w-3.5" aria-hidden />
        </Link>
      </div>
    </section>
  );
}
