"use client";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { FadeUp } from "@/components/animations/FadeUp";
import { Badge } from "@/components/ui/Badge";
import {
  Globe,
  Palette,
  Smartphone,
  ShieldCheck,
  BadgeCheck,
  Building2,
  Check, // Naya import bottom list ke liye
} from "lucide-react";

const features = [
  {
    icon: Palette,
    title: "Custom Branding",
    description:
      "Replace our logo, colors and identity with your school's own brand across the platform.",
  },
  {
    icon: Globe,
    title: "Custom Domain",
    description:
      "Launch your ERP on your own domain like erp.schoolname.com with complete branding.",
  },
  {
    icon: Smartphone,
    title: "Branded Mobile Apps",
    description:
      "Android & iOS applications with your logo, splash screen and application name.",
  },
  {
    icon: Building2,
    title: "Independent School Portal",
    description:
      "Every school gets its own dedicated login portal and personalized experience.",
  },
  {
    icon: ShieldCheck,
    title: "Tenant Isolation",
    description:
      "Every school's database remains completely isolated for maximum security.",
  },
  {
    icon: BadgeCheck,
    title: "Complete Ownership",
    description:
      "Parents, students and staff only see your brand—not ours—creating a premium experience.",
  },
];

const includedFeatures = [
  "Custom Logo",
  "Custom Domain",
  "Brand Colors",
  "Email Templates",
  "Login Branding",
  "Mobile Apps",
  "School Portal",
  "Tenant Isolation",
];

export default function WhiteLabelPage() {
  return (
    <Section
      id="white-label"
      className="overflow-hidden bg-surface/25 py-16 lg:py-20" // Cleaned up padding classes
    >
            <div className="pointer-events-none absolute inset-0 -z-10 bg-aurora-1" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-aurora-2" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-aurora-3" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid" />

      <Container>
        <Badge className="mb-4">White Label</Badge>
        <Heading
          // eyebrow="White Label"
          title="Launch your own branded School ERP Platform."
          description="Create a fully branded experience with your own logo, colors, domain and mobile applications while we handle the technology behind the scenes."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <FadeUp key={item.title} delay={index * 0.05}>
                <div className="group rounded-2xl border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-border-hover">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-cyan/10 text-accent-cyan">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="mt-5 text-xl font-semibold text-foreground">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-muted">
                    {item.description}
                  </p>
                </div>
              </FadeUp>
            );
          })}
        </div>

        <FadeUp delay={0.35}>
          <div className="mt-16 rounded-3xl border border-border bg-gradient-to-r from-surface to-background p-8 lg:p-12">
            <div className="grid gap-10 lg:grid-cols-2">
              <div>
                <p className="text-sm font-semibold uppercase tracking-widest text-accent-cyan">
                  Included with Every White Label Setup
                </p>

                <h3 className="mt-4 text-3xl font-bold text-foreground">
                  Everything your institution needs to launch under its own
                  brand.
                </h3>
              </div>

              {/* Improved UI list mapping */}
              <ul className="grid grid-cols-2 gap-4 text-sm text-muted">
                {includedFeatures.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-accent-cyan" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </FadeUp>
      </Container>
    </Section>
  );
}