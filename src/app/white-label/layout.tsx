import type { Metadata } from "next";
import { companyInfo } from "@/data/company";
import { SITE_URL } from "@/lib/constants";

const title = `White Label Platform — ${companyInfo.name}`;
const description =
  "Give your institution its own branded web portal, Android and iPhone apps, powered by the Jinanam Campus platform.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `${SITE_URL}/white-label` },
  openGraph: {
    title,
    description,
    url: `${SITE_URL}/white-label`,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: title }],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/og-image.png"] },
};

export default function WhiteLabelLayout({ children }: { children: React.ReactNode }) {
  return children;
}
