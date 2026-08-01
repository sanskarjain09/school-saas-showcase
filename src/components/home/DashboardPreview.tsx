import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { FadeUp } from "@/components/animations/FadeUp";
import Image from "next/image";

export function DashboardPreview() {
  return (
    <Section id="dashboard-preview" className="bg-surface/20 py-section-sm lg:py-section-lg overflow-hidden">
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
            <Image 
              src="/images/dashboard/2.png"
              alt="Desktop Dashboard Mockup"
              width={800}
              height={500}
              className="shadow-glow rounded-xl w-full h-auto" 
            />
          </FadeUp>

          {/* Secondary Mobile Viewport Mockup */}
          <FadeUp
            delay={0.02}
            className="w-full max-w-xs lg:absolute lg:left-[12%] lg:top-[62%] lg:w-64 lg:-translate-y-1/2"
          >
            <Image 
              src="/images/dashboard/3.png"
              alt="Mobile Dashboard Mockup"
              width={400}
              height={800}
              className="animate-float shadow-glow-purple rounded-xl w-full h-auto" 
            />
          </FadeUp>

          {/* Tertiary Finance/Widget Viewport Mockup */}
          <FadeUp
            delay={0.02}
            className="w-full max-w-xs lg:absolute lg:right-[10%] lg:top-[20%] lg:w-72"
          >
            <Image 
              src="/images/dashboard/4.png"
              alt="Finance Dashboard Mockup"
              width={400}
              height={500}
              className="animate-float shadow-glow-cyan rounded-xl w-full h-auto" 
            />
          </FadeUp>
        </div>
      </Container>
    </Section>
  );
}