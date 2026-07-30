// import { aiFeatures } from "@/data/aiFeatures";
// import { Container } from "@/components/ui/Container";
// import { Section } from "@/components/ui/Section";
// import { Heading } from "@/components/ui/Heading";
// import { FadeUp } from "@/components/animations/FadeUp";
// import { DashboardMockup } from "./DashboardMockup";
// import * as Icons from "lucide-react";
// import type { LucideIcon } from "@/types";

// export function AIFeaturesSection() {
//   return (
//     <Section id="ai" className="relative overflow-hidden py-16 lg:py-10 md:py-24">
//       {/* Aurora Background Glow Effect */}
//       <div className="pointer-events-none absolute inset-0 -z-10 bg-aurora-2 opacity-70" />
      
//       <Container>
//         <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
//           {/* Left Side: Content & Feature Grid */}
//           <FadeUp>
//             <Heading
//               eyebrow="AI, built in"
//               title="An assistant that already knows your school."
//               description="JINANAM Campus's AI reads your live data — attendance, fees, results — and answers in seconds, in plain language."
//             />

//             <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
//               {aiFeatures.map((feature) => {
//                 const Icon = (Icons as unknown as Record<string, LucideIcon>)[feature.icon] ?? Icons.Sparkles;
//                 return (
//                   <div key={feature.id} className="flex items-start gap-3">
//                     <span className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-purple-cyan/10">
//                       <Icon className="h-[18px] w-[18px] text-accent-cyan" aria-hidden />
//                     </span>
//                     <div>
//                       <p className="text-sm font-semibold text-foreground">{feature.title}</p>
//                       <p className="mt-1 text-sm leading-relaxed text-muted">{feature.description}</p>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           </FadeUp>

//           {/* Right Side: Floating Dashboard Mockup */}
//           <FadeUp delay={0.1}>
//             <DashboardMockup kind="ai" accent="cyan" className="animate-float" />
//           </FadeUp>
//         </div>
//       </Container>
//     </Section>
//   );
// }
"use client";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { FadeUp } from "@/components/animations/FadeUp";
import { DashboardMockup } from "./DashboardMockup";

export function AIFeaturesSection() {
  return (
    <Section id="ai" className="relative overflow-hidden py-16 lg:py-24 bg-white dark:bg-background">
      {/* Optional: Agar tumhe purana glow effect chahiye toh ise uncomment kar lena */}
      {/* <div className="pointer-events-none absolute inset-0 -z-10 bg-aurora-2 opacity-70" /> */}

      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          
          {/* Left Side: Content & CTA (Matches the image layout) */}
          <FadeUp>
            <div className="flex flex-col items-start max-w-xl">
              <h2 className="text-4xl md:text-5xl lg:text-[56px] font-medium tracking-tight text-foreground leading-[1.15]">
                An assistant that already knows your school.
              </h2>
              
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                JINANAM Campus's AI reads your live data — attendance, fees, results — and answers in seconds, in plain language.
              </p>
              
              {/* Google-style Pill Button */}
              <button  className="mt-8 rounded-full bg-[#1A73E8] px-8 py-3 text-base font-medium text-white transition-all hover:bg-blue-700 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                              <a 
                href="/features" 
              >
                Learn More
              </a>
              </button>
            </div>
          </FadeUp>

          {/* Right Side: Visual / Dashboard Mockup */}
          <FadeUp delay={0.1}>
            <div className="relative w-full rounded-2xl overflow-hidden">
              {/* Tumhara DashboardMockup exactly weather map screen ki tarah right me dikhega */}
              <DashboardMockup 
                kind="ai" 
                accent="cyan" 
                className="w-full h-auto shadow-2xl rounded-2xl" 
              />
            </div>
          </FadeUp>
          
        </div>
      </Container>
    </Section>
  );
}