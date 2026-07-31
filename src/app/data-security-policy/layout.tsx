import type { Metadata } from "next";
import { companyInfo } from "@/data/company";
import { SITE_URL } from "@/lib/constants";

const title = `Data Security Policy — ${companyInfo.name || "JiNANAM Campus"}`;
const description =
  "Read the Data Security Policy of JiNANAM Campus. Learn about our administrative, technical, and organizational measures to safeguard your information.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `${SITE_URL}/data-security` },
  openGraph: {
    title,
    description,
    url: `${SITE_URL}/data-security`,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: title }],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/og-image.png"] },
};

export default function DataSecurityLayout({ children }: { children: React.ReactNode }) {
  return children;
}