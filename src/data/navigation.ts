import type { NavigationData } from "@/types";
import { ROUTES } from "@/lib/constants";

export const navigationData: NavigationData = {
  links: [
    { label: "Home", href: "/" },
    { label: "Features", href: "/features" },
    { label: "White Label", href: "/white-label" },
    { label: "Contact", href: "/contact-us" },
    { label: "About Us", href: "/about" },
  ],
  cta: { label: "Book a Demo", href: ROUTES.demo },
};
