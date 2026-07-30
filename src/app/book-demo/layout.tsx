import type { Metadata } from "next";
import { companyInfo } from "@/data/company";
import { SITE_URL } from "@/lib/constants";

const title = `Book a Free Demo — ${companyInfo.name}`;
const description =
  "See Jinanam Campus in action. Book a free, personalized demo and discover how our platform simplifies campus operations.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `${SITE_URL}/book-demo` },
  openGraph: {
    title,
    description,
    url: `${SITE_URL}/book-demo`,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: title }],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/og-image.png"] },
};

export default function BookDemoLayout({ children }: { children: React.ReactNode }) {
  return children;
}
