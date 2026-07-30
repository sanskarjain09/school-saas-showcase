"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export function PlatformOverview() {
  return (
    <Section id="platform-overview" className="overflow-hidden py-20 lg:py-32 bg-white dark:bg-background border-t border-gray-100 dark:border-white/5">
      <Container>
        {/* Grid gap ko bada kiya taaki dono sides ko saans lene ki jagah mile */}
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-24">
          
          {/* Left Side: Text Content (max-w-2xl kar diya taaki compressed na lage) */}
          <div className="flex flex-col items-start text-left max-w-2xl">
            
            {/* Clean Eyebrow */}
            <p className="mb-4 text-sm font-semibold tracking-wider text-[#1A73E8] uppercase">
              Platform Overview
            </p>

            {/* Google-Style Large Heading */}
            <h2 className="text-4xl md:text-5xl lg:text-[56px] font-medium tracking-tight text-foreground leading-[1.15]">
              Every Module. Every Workflow. Everything Connected.
            </h2>
            
            {/* Clean Description Text */}
            <p className="mt-6 text-lg lg:text-xl text-muted-foreground leading-relaxed">
              Eliminate data silos with a unified ecosystem designed specifically for modern educational institutions. Seamlessly bridge administration, academics, and student success.
            </p>
          
            {/* Pill-shaped Secondary CTA Button */}
            <div className="mt-10 flex w-full sm:w-auto">
              <a 
                href="/features" 
                className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-full bg-gray-100 dark:bg-white/5 px-8 py-4 text-base font-medium text-foreground transition-all hover:bg-gray-200 dark:hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2"
              >
                Explore All Modules <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>

          {/* Right Side: Large, Uncompressed Image Component */}
          <div className="relative flex w-full justify-center lg:justify-end">
            <div className="relative w-full aspect-video lg:aspect-[16/10] flex items-center justify-center">
              <Image
                src="/images/heroOne.png"
                alt="JINANAM Campus Platform Overview"
                fill
                /* Scale ko bada kiya taaki diagram khul ke aaye aur chota na lage */
                className="object-contain drop-shadow-2xl scale-125 lg:scale-140 origin-center"
              />
              
              {/* Subtle Semantic Glow */}
              <div className="absolute inset-0 -z-10 flex items-center justify-center pointer-events-none">
                <div className="h-96 w-96 rounded-full bg-blue-500/10 blur-[140px]" />
              </div>
            </div>
          </div>

        </div>
      </Container>
    </Section>
  );
}