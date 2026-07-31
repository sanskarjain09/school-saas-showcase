import type { Metadata } from "next";
import { companyInfo } from "@/data/company";
import { SITE_URL } from "@/lib/constants";

const title = `Privacy Policy — ${companyInfo.name || "JiNANAM Campus"}`;
const description =
  "Read the Privacy Policy of JiNANAM Campus. Learn how we collect, use, process, store, and protect your information securely.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `${SITE_URL}/privacy` },
  openGraph: {
    title,
    description,
    url: `${SITE_URL}/privacy`,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: title }],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/og-image.png"] },
};

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return children;
}