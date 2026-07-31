
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { FadeUp } from "@/components/animations/FadeUp";
import { DemoForm } from "@/components/ui/DemoForm";
import { contactData } from "@/data/contact";

export default function BookDemoPage() {
  return (
    <Section id="book-demo" className="pt-32 py-section-sm lg:py-section-lg relative overflow-hidden bg-background">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-aurora-1" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-aurora-2" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-aurora-3" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid" />

      <Container size="md">
        <FadeUp delay={0.02}>
          <DemoForm
            title={contactData.form.title}
            subtitle={contactData.form.subtitle}
            buttonLabel={contactData.form.button}
            source="book-demo-page"
            className="mx-auto"
          />
        </FadeUp>
      </Container>
    </Section>
  );
}
