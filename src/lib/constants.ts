export const ROUTES = {
  home: "/",
  demo: "/book-demo",
  pricing: "/#pricing",
  features: "/#all-features",
  products: "/#products",
  faq: "/#faq",
  contact: "/#contact",
  white_label: "/#white-label",
} as const;

export const SITE_URL = "https://www.campushubschools.example";

export const SOCIAL_LINKS = [
  { label: "X", href: "#", icon: "Twitter" },
  { label: "LinkedIn", href: "#", icon: "Linkedin" },
  { label: "YouTube", href: "#", icon: "Youtube" },
  { label: "Instagram", href: "#", icon: "Instagram" },
] as const;

export const ANIMATION = {
  ease: "power3.out",
  easeInOut: "power2.inOut",
  durationShort: 0.5,
  durationMedium: 0.9,
  durationLong: 1.4,
  stagger: 0.08,
} as const;
