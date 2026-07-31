import type { FooterData } from "@/types";
import { ROUTES } from "@/lib/constants";

export const footerData: FooterData = {
  groups: [
    {
      title: "Product",
      links: [
        { label: "Features", href: ROUTES.features },
        { label: "white-label", href: ROUTES.white_label },
        { label: "Industries", href: ROUTES.industries },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About", href: "/about" },
        { label: "Contact", href: "/contact" },
        // { label: "Careers", href: "/#careers" },
      ],
    },
    {
      title: "Policies",
      links: [
        { label: "Privacy Policy", href: "/privacy-policy" },
        { label: "Terms & Conditions", href: "/terms-conditions" },
        { label: "Refund & Cancellation Policy", href: "/refund-cancellation-policy" },
        { label: "Account Deletion Policy", href: "/account-deletion-policy" },
        { label: "Data Security Policy", href: "/data-security-policy" },
        { label: "Cookie Policy", href: "/cookie-policy" },
      ],
    },
  ],
  bottomNote: "All systems operational.",
};

