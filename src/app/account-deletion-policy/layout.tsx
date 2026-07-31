import type { Metadata } from "next";
import { companyInfo } from "@/data/company";
import { SITE_URL } from "@/lib/constants";

const title = `Account Deletion Policy — ${companyInfo.name || "JiNANAM Campus"}`;
const description =
  "Read the Account Deletion Policy of JiNANAM Campus. Understand how to request account removal, data retention rules, and institutional data management.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `${SITE_URL}/account-deletion` },
  openGraph: {
    title,
    description,
    url: `${SITE_URL}/account-deletion`,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: title }],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/og-image.png"] },
};

export default function AccountDeletionLayout({ children }: { children: React.ReactNode }) {
  return children;
}