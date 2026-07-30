import type { FooterData } from "@/types";
import { ROUTES } from "@/lib/constants";

export const footerData: FooterData = {
  groups: [
    {
      title: "Product",
      links: [
        { label: "Features", href: ROUTES.features },
        { label: "white-label", href: ROUTES.white_label },
        { label: "Contact", href: ROUTES.contact },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "All Features", href: ROUTES.features },
        { label: "FAQ", href: ROUTES.faq },
        { label: "Book a Demo", href: ROUTES.demo },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About", href: "/#about" },
        { label: "Contact", href: ROUTES.contact },
        { label: "Careers", href: "/#careers" },
      ],
    },
  ],
  bottomNote: "All systems operational.",
};
