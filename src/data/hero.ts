import type { HeroData } from "@/types";
import { ROUTES } from "@/lib/constants";

export const heroData: HeroData = {
  eyebrow: "NEXT GENERATION CAMPUS MANAGEMENT",
  headlineLines: ["Everything Your", "Campus Needs" ],
  description:
    "Everything your institution needs, beautifully connected through one intelligent, secure, scalable campus management platform.",
  primaryCta: { label: "Book a Free Demo", href: ROUTES.demo },
  secondaryCta: { label: "Explore Platform", href: "#all-features" },
  stats: [
    { id: "schools", value: 1200, suffix: "+", label: "Schools onboarded" },
    { id: "students", value: 850000, suffix: "+", label: "Students managed" },
    { id: "uptime", value: 99, suffix: ".9%", label: "Platform uptime" },
  ],
};
