import type { Metadata } from "next";
import { companyInfo } from "@/data/company";
import { SITE_URL } from "@/lib/constants";

const title = `Terms & Conditions — ${companyInfo.name || "JiNANAM Campus"}`;
const description =
  "Read the Terms & Conditions of JiNANAM Campus. Understand the rules, licensing, user responsibilities, and legal guidelines governing our platform.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `${SITE_URL}/terms` },
  openGraph: {
    title,
    description,
    url: `${SITE_URL}/terms`,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: title }],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/og-image.png"] },
};

export default function TermsLayout({ children }: { children: React.ReactNode }) {
  return children;
}