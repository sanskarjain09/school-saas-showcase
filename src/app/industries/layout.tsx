import type { Metadata } from "next";
import { companyInfo } from "@/data/company";
import { SITE_URL } from "@/lib/constants";

const title = `Industries We Serve — ${companyInfo.name}`;
const description =
  "Discover how JINANAM Campus adapts to every educational institution—from early learning centers and K-12 schools to universities, engineering colleges, and multi-campus groups.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `${SITE_URL}/industries` },
  openGraph: {
    title,
    description,
    url: `${SITE_URL}/industries`,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: title }],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/og-image.png"] },
};

export default function IndustriesLayout({ children }: { children: React.ReactNode }) {
  return children;
}