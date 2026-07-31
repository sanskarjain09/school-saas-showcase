import { whyChooseUsData } from "@/data/whyChooseUs";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { FadeUp } from "@/components/animations/FadeUp";
// import { Button } from "@/components/ui/Button"; 

export function WhyChooseUs() {
  return (
    // Added a subtle background tint to differentiate it from the Platform Overview section
    <Section id="why-choose-us" className="bg-surface/30 py-section-sm lg:py-section-lg">
      <Container>
        {/* 1. Centered Header Layout for perfectly balanced UI */}
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <Heading
            eyebrow="Why JiNANAM Campus"
            title="Everything your school runs on, minus the chaos."
            description="Replace a dozen disconnected tools and spreadsheets with one platform your entire staff already knows how to use."
          />

          {/* Optional CTA */}
          {/* <div className="mt-8">
            <Button variant="secondary" className="gap-2" href="/features">
              Explore All Modules <span>&rarr;</span>
            </Button>
          </div> */}
        </div>

        {/* 2. Upgraded Responsive Grid: 1 col (mobile) -> 2 col (tablet) -> 4 col (desktop) */}
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2  lg:grid-cols-4">
          {whyChooseUsData.map((item, idx) => (
            <FadeUp key={item.id} delay={idx *0.02}>
              <FeatureCard
                icon={item.icon}
                title={item.title}
                description={item.description}
              />
            </FadeUp>
          ))}
        </div>
      </Container>
    </Section>
  );
}