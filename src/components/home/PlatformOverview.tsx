
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

export function PlatformOverview() {
  return (
    <Section id="platform-overview" className="overflow-hidden py-section-sm lg:py-section-lg bg-background border-t border-border">
      <Container>
        {/* Grid gap ko bada kiya taaki dono sides ko saans lene ki jagah mile */}
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-24">
          
          {/* Left Side: Text Content (max-w-2xl kar diya taaki compressed na lage) */}
          <div className="flex flex-col items-start text-left max-w-2xl">
            
            {/* Clean Eyebrow */}
            <p className="mb-4 text-sm font-semibold tracking-wider text-accent uppercase">
              Platform Overview
            </p>

            {/* Google-Style Large Heading */}
            <h2 className="text-4xl md:text-5xl lg:text-section font-bold tracking-tight text-foreground leading-[1.15]">
              Every Module. Every Workflow. Everything Connected.
            </h2>
            
            {/* Clean Description Text */}
            <p className="mt-6 text-lg lg:text-xl text-muted leading-relaxed">
              Eliminate data silos with a unified ecosystem designed specifically for modern educational institutions. Seamlessly bridge administration, academics, and student success.
            </p>
          
            {/* Pill-shaped Secondary CTA Button */}
            <div className="mt-10 flex w-full sm:w-auto">
              <Button href="/features" variant="secondary" size="lg" className="w-full sm:w-auto">
                Explore All Modules <span aria-hidden="true">&rarr;</span>
              </Button>
            </div>
          </div>

          {/* Right Side: Large, Uncompressed Image Component */}
          <div className="relative flex w-full justify-center lg:justify-end">
            <div className="relative w-full aspect-video lg:aspect-[16/10] flex items-center justify-center">
              <Image
                src="/images/heroOne.png"
                alt="JINANAM Campus Platform Overview"
                fill
                /* Added responsive scaling to make it larger on desktop without overlapping navbar */
                className="object-contain w-full h-full drop-shadow-2xl origin-center scale-110 md:scale-125 lg:scale-[1.4]"
              />
              
              {/* Subtle Semantic Glow */}
              <div className="absolute inset-0 -z-10 flex items-center justify-center pointer-events-none">
                <div className="h-96 w-96 rounded-full bg-accent/10 blur-[140px]" />
              </div>
            </div>
          </div>

        </div>
      </Container>
    </Section>
  );
}