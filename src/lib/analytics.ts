/**
 * Lightweight analytics utility.
 *
 * Uses GA4 (gtag.js) when NEXT_PUBLIC_GA_ID is set in your environment.
 * No extra npm dependency required — the gtag script is loaded once from
 * the root layout via next/script, and this file just exposes a small
 * `track()` helper you can call from any client component.
 *
 * To enable: add NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX to your .env.local
 * If the id isn't set, track() becomes a safe no-op (logs in dev only).
 */

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID ?? "";

type EventParams = Record<string, string | number | boolean | undefined>;

/**
 * Fire a custom analytics event.
 * Example: track("demo_cta_click", { location: "navbar" })
 */
export function track(eventName: string, params: EventParams = {}) {
  if (typeof window === "undefined") return;

  if (window.gtag && GA_MEASUREMENT_ID) {
    window.gtag("event", eventName, params);
    return;
  }

  if (process.env.NODE_ENV === "development") {
    // Helpful during local development when GA isn't configured yet.
    // eslint-disable-next-line no-console
    console.debug("[analytics:dev]", eventName, params);
  }
}

/** Track a virtual pageview (useful for SPA route changes). */
export function trackPageview(url: string) {
  if (typeof window === "undefined" || !window.gtag || !GA_MEASUREMENT_ID) return;
  window.gtag("config", GA_MEASUREMENT_ID, { page_path: url });
}
