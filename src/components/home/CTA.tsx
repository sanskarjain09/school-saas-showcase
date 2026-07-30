import { heroData } from "@/data/hero";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { FadeUp } from "@/components/animations/FadeUp";
import { ROUTES } from "@/lib/constants";

export function CTA() {
  return (
    <Section className="lg:py-8 py-8 md:py-10 overflow-hidden">
      <Container>
        <FadeUp>
          <div className="relative overflow-hidden rounded-3xl border border-border bg-surface px-8 py-10 text-center sm:px-16">
            {/* Aurora Background Effects */}
            <div className="pointer-events-none absolute inset-0 -z-10 bg-aurora-1 opacity-70" />
            <div className="pointer-events-none absolute inset-0 -z-10 bg-aurora-2 opacity-70" />
            
            <h2 className="mx-auto max-w-2xl text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl">
              Ready to run your school on one platform?
            </h2>
            
            <p className="mx-auto mt-4 max-w-lg text-base text-muted">
              Book a free demo and see how {heroData.stats[0]?.value.toLocaleString()}+ schools already run their
              day on JINANAM Campus.
            </p>
            
            <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button href={ROUTES.demo} size="lg" showArrow>
                Book a Free Demo
              </Button>
              <Button href={ROUTES.pricing} variant="secondary" size="lg">
                View Pricing
              </Button>
            </div>
          </div>
        </FadeUp>
      </Container>
    </Section>
  );
}