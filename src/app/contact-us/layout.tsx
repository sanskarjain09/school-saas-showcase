import type { Metadata } from "next";
import { companyInfo } from "@/data/company";
import { SITE_URL } from "@/lib/constants";

const title = `Contact Us — ${companyInfo.name}`;
const description =
  "Get in touch with the Jinanam Campus team. Talk to our ERP experts about admissions, academics, finance, communication and more.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `${SITE_URL}/contact-us` },
  openGraph: {
    title,
    description,
    url: `${SITE_URL}/contact-us`,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: title }],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/og-image.png"] },
};

export default function ContactUsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
