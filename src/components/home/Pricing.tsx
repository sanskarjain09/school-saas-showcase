import { Check } from "lucide-react";
import { pricingPlans } from "@/data/pricing";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { Button } from "@/components/ui/Button";
import { Pill } from "@/components/ui/Pill";
import { FadeUp } from "@/components/animations/FadeUp";
import { cn } from "@/lib/utils";

export function Pricing() {
  return (
    <Section id="pricing" className="bg-surface/20 py-section-sm lg:py-section-lg">
      <Container>
        <Heading
          eyebrow="Pricing"
          title="Plans that grow with your school."
          description="Every plan includes core academics, fee collection and mobile apps. Upgrade as your group expands."
          align="center"
          className="mx-auto"
        />

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {pricingPlans.map((plan, idx) => (
            <FadeUp key={plan.id} delay={idx *0.02}>
              <div
                className={cn(
                  "flex h-full flex-col rounded-2xl border p-8",
                  plan.highlighted
                    ? "border-accent-purple/50 bg-surface shadow-glow-purple"
                    : "border-border bg-surface/60"
                )}
              >
                {plan.highlighted ? <Pill className="mb-4 w-fit bg-gradient-blue-purple text-white">Most Popular</Pill> : null}
                <h3 className="text-xl font-semibold text-foreground">{plan.name}</h3>
                <p className="mt-1.5 text-sm text-muted">{plan.description}</p>

                <div className="mt-6 flex items-baseline gap-1.5">
                  <span className="text-4xl font-semibold tracking-tight text-foreground">{plan.price}</span>
                </div>
                <p className="mt-1 text-xs text-muted">{plan.billingNote}</p>

                <ul className="mt-8 flex-1 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-sm text-foreground/80">
                      <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent-cyan" aria-hidden />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  href={plan.cta.href}
                  variant={plan.highlighted ? "primary" : "secondary"}
                  className="mt-8 w-full"
                >
                  {plan.cta.label}
                </Button>
              </div>
            </FadeUp>
          ))}
        </div>
      </Container>
    </Section>
  );
}
