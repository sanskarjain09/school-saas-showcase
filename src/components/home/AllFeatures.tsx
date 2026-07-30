"use client";

import { allFeatureCategories } from "@/data/allFeatures";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { FadeUp } from "@/components/animations/FadeUp";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { Button } from "@/components/ui/Button";

const TOTAL_FEATURE_COUNT = allFeatureCategories.reduce((sum, cat) => sum + cat.features.length, 0);

export function AllFeatures() {
  return (
    <Section id="all-features" className="py-10 lg:py-8 md:py-24 overflow-hidden">
      <Container>
        {/* Centered Heading with max-w constraint */}
        <Heading
          eyebrow="Complete Feature List"
          title={`Every one of our ${TOTAL_FEATURE_COUNT}+ features, by module.`}
          description="The showcase above covers the highlights. This is the full, unfiltered list for teams doing a detailed evaluation."
          align="center"
          className="mx-auto max-w-3xl"
        />

        {/* Feature Categories Grid: First 6 items */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {allFeatureCategories.slice(0, 6).map((category, index) => (
            <FadeUp key={category.id} delay={index * 0.05}>
              <FeatureCard
                icon={category.icon}
                title={category.title}
                description={category.description}
              />
            </FadeUp>
          ))}
        </div>

        {/* Action CTA */}
        <FadeUp delay={0.2}>
          <div className="mt-4 flex justify-center">
            <Button
              href="/features"
              variant="secondary"
              size="lg"
              showArrow
            >
              Explore All Features
            </Button>
          </div>
        </FadeUp>

        {/* Optional Customer Feedback Footer Note */}
        {/* <FadeUp delay={0.3}>
          <p className="mt-8 text-center text-sm text-muted">
            Don&apos;t see a feature you need? We ship new modules every quarter based on customer feedback.
          </p>
        </FadeUp> */}
      </Container>
    </Section>
  );
}