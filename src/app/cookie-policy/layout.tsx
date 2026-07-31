import type { Metadata } from "next";
import { companyInfo } from "@/data/company";
import { SITE_URL } from "@/lib/constants";

const title = `Cookie Policy — ${companyInfo.name || "JiNANAM Campus"}`;
const description =
  "Read the Cookie Policy of JiNANAM Campus. Learn how we use cookies and similar technologies to improve your experience on our website.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `${SITE_URL}/cookie-policy` },
  openGraph: {
    title,
    description,
    url: `${SITE_URL}/cookie-policy`,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: title }],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/og-image.png"] },
};

export default function CookiePolicyLayout({ children }: { children: React.ReactNode }) {
  return children;
}