import type { Metadata } from "next";
import { companyInfo } from "@/data/company";
import { SITE_URL } from "@/lib/constants";

const title = `About ${companyInfo.name}`;
const description =
  "Learn about the team building Jinanam Campus — a multi-tenant School ERP platform trusted by modern educational institutions.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `${SITE_URL}/about` },
  openGraph: {
    title,
    description,
    url: `${SITE_URL}/about`,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: title }],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/og-image.png"] },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
