
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { FadeUp } from "@/components/animations/FadeUp";
import { DashboardMockup } from "./DashboardMockup";
import { Button } from "@/components/ui/Button";

export function AIFeaturesSection() {
  return (
    <Section id="ai" className="relative overflow-hidden py-section-sm lg:py-section-lg bg-background">

      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          
          {/* Left Side: Content & CTA (Matches the image layout) */}
          <FadeUp>
            <div className="flex flex-col items-start max-w-xl">
              <h2 className="text-4xl md:text-5xl lg:text-section font-bold tracking-tight text-foreground leading-[1.15]">
                An assistant that already knows your school.
              </h2>
              
              <p className="mt-6 text-lg text-muted leading-relaxed">
                JINANAM Campus&apos;s AI reads your live data — attendance, fees, results — and answers in seconds, in plain language.
              </p>
              
              {/* Action Button */}
              <div className="mt-8">
                <Button href="/features" variant="primary">
                  Learn More
                </Button>
              </div>
            </div>
          </FadeUp>

          {/* Right Side: Visual / Dashboard Mockup */}
          <FadeUp delay={0.02}>
            <div className="relative w-full rounded-2xl overflow-hidden">
              {/* DashboardMockup acts as a visual preview */}
              <DashboardMockup 
                kind="ai" 
                accent="cyan" 
                className="w-full h-auto shadow-glow-cyan rounded-2xl" 
              />
            </div>
          </FadeUp>
          
        </div>
      </Container>
    </Section>
  );
}