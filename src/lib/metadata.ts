import type { Metadata } from "next";
import { SITE_URL } from "./constants";
import { companyInfo } from "@/data/company";

const title = `${companyInfo.name} — Multi-Tenant School ERP SaaS`;
const description =
  "The all-in-one School ERP platform for schools, colleges and educational groups. Admissions, academics, examinations, finance, transport, HR and AI, unified in one white-label SaaS.";

export const siteMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: title,
    template: `%s — ${companyInfo.name}`,
  },
  description,

  keywords: [
    "school ERP",
    "school management software",
    "SaaS for schools",
    "multi-tenant school platform",
    "college ERP",
    "student information system",
  ],
  authors: [{ name: companyInfo.name }],
  openGraph: {
    type: "website",
    url: SITE_URL,
    title,
    description,
    siteName: companyInfo.name,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: title }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true },
};
