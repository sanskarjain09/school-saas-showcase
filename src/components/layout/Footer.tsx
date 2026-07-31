import Link from "next/link";
import Image from "next/image";
import * as Icons from "lucide-react";
import { footerData } from "@/data/footer";
import { companyInfo } from "@/data/company";
import { SOCIAL_LINKS } from "@/lib/constants";
import { Container } from "@/components/ui/Container";
import type { LucideIcon } from "@/types";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      {/* 1. Responsive Vertical Padding aligned with the Design System */}
      <Container className="pt-section-sm pb-8">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-6 lg:gap-12">
          
          {/* Brand & Description */}
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/images/logo.png"
                alt="School ERP Logo"
                width={200}
                height={50}
                className="object-contain"
                // Removed 'priority' - Footer images should be lazy loaded for better LCP
              />
            </Link>
            
            {/* Semantic spacing (mt-content-sm) and typography (text-small) */}
            <p className="mt-content-sm max-w-xs text-small leading-relaxed text-muted">
              {companyInfo.description}
            </p>
            
            {/* Social Links with improved touch targets (40x40) */}
            {/* <div className="mt-content-md flex items-center gap-3">
              {SOCIAL_LINKS.map((social) => {
                const Icon = (Icons as unknown as Record<string, LucideIcon>)[social.icon] ?? Icons.Link;
                return (
                  <Link
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface text-muted transition-all duration-300 hover:border-border-hover hover:bg-surface-hover hover:text-foreground"
                  >
                    <Icon className="h-4 w-4" aria-hidden />
                  </Link>
                );
              })}
            </div> */}
          </div>

          {/* Links Groups */}
          {footerData.groups.map((group) => (
            <div key={group.title}>
              {/* Heading mapped to text-body */}
              <h3 className="text-body font-semibold text-foreground">
                {group.title}
              </h3>
              <ul className="mt-content-sm space-y-3">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link 
                      href={link.href} 
                      className="text-small text-muted transition-colors duration-200 hover:text-accent"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar: Copyright & System Status */}
        <div className="mt-0 flex flex-col items-center justify-between gap-4 border-t border-border pt-4 text-caption text-muted sm:flex-row md:mt-8">
          <p>
            © {new Date().getFullYear()} {companyInfo.legalName}. All rights reserved.
          </p>
          <p className="flex items-center gap-2 font-medium">
            <span className="flex h-2 w-2 shrink-0 rounded-full bg-emerald-400" aria-hidden />
            {footerData.bottomNote}
          </p>
        </div>
      </Container>
    </footer>
  );
}