"use client";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { FadeUp } from "@/components/animations/FadeUp";
import { DashboardMockup } from "./DashboardMockup";

export function AIFeaturesSection() {
  return (
    <Section id="ai" className="relative overflow-hidden py-16 lg:py-24 bg-white dark:bg-background">
      {/* Optional: Agar tumhe purana glow effect chahiye toh ise uncomment kar lena */}
      {/* <div className="pointer-events-none absolute inset-0 -z-10 bg-aurora-2 opacity-70" /> */}

      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          
          {/* Left Side: Content & CTA (Matches the image layout) */}
          <FadeUp>
            <div className="flex flex-col items-start max-w-xl">
              <h2 className="text-4xl md:text-5xl lg:text-[56px] font-medium tracking-tight text-foreground leading-[1.15]">
                An assistant that already knows your school.
              </h2>
              
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                JINANAM Campus&apos;s AI reads your live data — attendance, fees, results — and answers in seconds, in plain language.
              </p>
              
              {/* Google-style Pill Button */}
              <button  className="mt-8 rounded-full bg-[#1A73E8] px-8 py-3 text-base font-medium text-white transition-all hover:bg-blue-700 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                              <a 
                href="/features" 
              >
                Learn More
              </a>
              </button>
            </div>
          </FadeUp>

          {/* Right Side: Visual / Dashboard Mockup */}
          <FadeUp delay={0.1}>
            <div className="relative w-full rounded-2xl overflow-hidden">
              {/* Tumhara DashboardMockup exactly weather map screen ki tarah right me dikhega */}
              <DashboardMockup 
                kind="ai" 
                accent="cyan" 
                className="w-full h-auto shadow-2xl rounded-2xl" 
              />
            </div>
          </FadeUp>
          
        </div>
      </Container>
    </Section>
  );
}