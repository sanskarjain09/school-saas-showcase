# CampusHub — School ERP SaaS Showcase

A premium, data-driven Next.js 15 marketing site for a multi-tenant School ERP platform.

## Stack

Next.js 15 (App Router) · TypeScript · Tailwind CSS · GSAP + ScrollTrigger · Framer Motion · Lenis smooth scroll · Lucide React

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Editing content

**No component should ever need a code change to update copy.** Every section reads from `src/data/*.ts`:

| File | Powers |
|---|---|
| `hero.ts` | Hero headline, stats, CTAs |
| `navigation.ts` | Navbar links |
| `company.ts` | Name, tagline, contact info (used in footer + SEO) |
| `trustedSchools.ts` | Logo marquee |
| `stats.ts` | Statistics band |
| `whyChooseUs.ts` | "Why CampusHub" cards |
| `products.ts` | Product Showcase (alternating image/text blocks) |
| `modules.ts` | Curated Core Modules grid |
| `allFeatures.ts` | Full 250+ feature list (the "All Features" accordion) |
| `aiFeatures.ts` | AI section bullets |
| `testimonials.ts` | Testimonial cards |
| `pricing.ts` | Pricing plans |
| `faq.ts` | FAQ accordion |
| `footer.ts` | Footer link groups |

Design tokens (colors, gradients, radii, animation easing) live in `tailwind.config.ts` and `src/lib/theme.ts`. Global constants (routes, socials, animation timing) live in `src/lib/constants.ts`.

## Architecture

```
src/
  app/            # routes, layout, metadata, sitemap, robots
  components/
    layout/       # Navbar, Footer
    ui/           # Design system: Button, Card, Badge, Heading, StatCard...
    animations/   # GSAP/CSS animation primitives (FadeUp, RevealText, Counter, Marquee)
    home/         # Page sections (Hero, ProductShowcase, Pricing...) — map over data only
  data/           # All copy, strongly typed
  lib/            # constants, theme tokens, metadata, utils
  hooks/          # useMagnetic, etc.
  providers/      # SmoothScrollProvider (Lenis + GSAP ticker)
  types/          # Shared interfaces for every data shape
```

## Notes

- Dashboard "screenshots" are rendered as CSS/SVG mockups (`components/home/DashboardMockup.tsx`) rather than static images, so the whole showcase stays framework-native and easy to re-skin — swap in real product screenshots via `next/image` when available.
- Animations respect `prefers-reduced-motion`.
- Replace `SITE_URL` in `src/lib/constants.ts` and add `/public/og-image.png` before deploying.

## New in this update

**1. Working demo form (`src/components/ui/DemoForm.tsx`)**
- Backend: [Web3Forms](https://web3forms.com) — free, no signup needed to test.
- Before going live: get your access key from web3forms.com and replace `WEB3FORMS_ACCESS_KEY` inside `src/components/ui/DemoForm.tsx`.
- Handles Idle / Loading / Success / Error states, field validation, and a honeypot field for spam protection.
- Used on the homepage Contact section, `/book-demo`, and `/contact-us`.

**2. Admin Login (UI only — no auth wired up yet)**
- `/admin/login` — a styled sign-in screen linked from the navbar.
- `middleware.ts` — starter template with instructions for protecting `/admin/*` routes once you add a real auth provider (NextAuth, Clerk, Supabase Auth, etc). It currently does not block anything.

**3. Error handling**
- `src/app/not-found.tsx` — branded 404 page.
- `src/app/error.tsx` — branded runtime error boundary with a "Try again" action.

**4. SEO**
- Every route now has its own title/description/OpenGraph tags (see `layout.tsx` inside each route folder).
- `sitemap.ts` lists all pages; `robots.ts` disallows `/admin`.
- Add a real `/public/og-image.png` (1200×630) before launch — the metadata already points to it.

**5. Lightweight analytics**
- `src/lib/analytics.ts` + `src/components/analytics/GoogleAnalytics.tsx` — loads GA4 only if `NEXT_PUBLIC_GA_ID` is set in `.env.local`. Zero cost if you skip it.
- Demo CTA clicks and form submissions are tracked automatically once GA is configured.

**6. Environment variables**
- Copy `.env.example` to `.env.local` and fill in `NEXT_PUBLIC_GA_ID` if you want analytics.
