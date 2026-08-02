import type { NavigationData } from "@/types";
import { ROUTES } from "@/lib/constants";

export const navigationData: NavigationData = {
  links: [
    { label: "Features", href: "/features" },
    { label: "White Label", href: "/white-label" },
    { label: "Industries", href: "/industries" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  cta: { label: "Book a Demo", href: ROUTES.demo },
};
