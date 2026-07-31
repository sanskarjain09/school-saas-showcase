import type { Metadata } from "next";
import { companyInfo } from "@/data/company";
import { SITE_URL } from "@/lib/constants";

const title = `Refund & Cancellation Policy — ${companyInfo.name || "JiNANAM Campus"}`;
const description =
  "Read the Refund & Cancellation Policy of JiNANAM Campus. Understand our B2B subscription terms, non-refundable policy, and fee handling guidelines.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `${SITE_URL}/refund` },
  openGraph: {
    title,
    description,
    url: `${SITE_URL}/refund`,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: title }],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/og-image.png"] },
};

export default function RefundLayout({ children }: { children: React.ReactNode }) {
  return children;
}