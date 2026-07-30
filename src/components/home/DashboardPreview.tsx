import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { FadeUp } from "@/components/animations/FadeUp";
import { DashboardMockup } from "./DashboardMockup";

export function DashboardPreview() {
  return (
    <Section id="dashboard-preview" className="bg-surface/20 py-10 lg:py-10 md:py-24 overflow-hidden">
      <Container>
        {/* Centered Heading with max-w constraint */}
        <Heading
          eyebrow="See it in action"
          title="One dashboard, every screen size."
          description="The same live data, beautifully adapted for desktop, tablet and mobile."
          align="center"
          className="mx-auto max-w-3xl"
        />

        {/* Multi-Device Floating Mockup Showcase */}
        <div className="relative mt-0 flex flex-col items-center gap-8 lg:h-[420px] lg:flex-row lg:items-center lg:justify-center lg:gap-0">
          {/* Primary Desktop Viewport Mockup */}
          <FadeUp className="w-full max-w-xl lg:absolute lg:left-1/2 lg:top-1/2 lg:w-[560px] lg:-translate-x-1/2 lg:-translate-y-1/2">
            <DashboardMockup 
              kind="reports" 
              accent="blue" 
              className="shadow-[0_30px_80px_-20px_rgba(59,130,246,0.35)]" 
            />
          </FadeUp>

          {/* Secondary Mobile Viewport Mockup */}
          <FadeUp
            delay={0.15}
            className="w-full max-w-xs lg:absolute lg:left-[12%] lg:top-[62%] lg:w-64 lg:-translate-y-1/2"
          >
            <DashboardMockup 
              kind="mobile" 
              accent="purple" 
              className="animate-float shadow-[0_20px_60px_-15px_rgba(139,92,246,0.4)]" 
            />
          </FadeUp>

          {/* Tertiary Finance/Widget Viewport Mockup */}
          <FadeUp
            delay={0.25}
            className="w-full max-w-xs lg:absolute lg:right-[10%] lg:top-[20%] lg:w-72"
          >
            <DashboardMockup 
              kind="finance" 
              accent="cyan" 
              className="animate-float shadow-[0_20px_60px_-15px_rgba(34,211,238,0.35)]" 
            />
          </FadeUp>
        </div>
      </Container>
    </Section>
  );
}