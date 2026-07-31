import { statsData } from "@/data/stats";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { StatCard } from "@/components/ui/StatCard";
import { FadeUp } from "@/components/animations/FadeUp";

export function Statistics() {
  return (
    <Section className="border-y border-border bg-surface/30 py-section-sm lg:py-section-lg">
      <Container>
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
          {statsData.map((stat, idx) => (
            <FadeUp key={stat.id} delay={idx *0.02}>
              <StatCard icon={stat.icon} value={stat.value} suffix={stat.suffix} label={stat.label} />
            </FadeUp>
          ))}
        </div>
      </Container>
    </Section>
  );
}
