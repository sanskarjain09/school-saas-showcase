import type { Metadata } from "next";
import { companyInfo } from "@/data/company";
import { SITE_URL } from "@/lib/constants";

const title = `Platform Features — ${companyInfo.name}`;
const description =
  "Explore every module inside Jinanam Campus — admissions, academics, attendance, examinations, finance, transport, library, HR and more, all in one connected platform.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `${SITE_URL}/features` },
  openGraph: {
    title,
    description,
    url: `${SITE_URL}/features`,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: title }],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/og-image.png"] },
};

export default function FeaturesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
