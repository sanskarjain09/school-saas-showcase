"use client";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section"; // Yahan Section component import kiya
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Heading } from "@/components/ui/Heading";
import { FadeUp } from "@/components/animations/FadeUp";
import {
  Lightbulb, Target, Shield, Users,
  Settings, Lock, Award, BookOpen, GraduationCap, Building, Briefcase
} from "lucide-react";

// DUMMY DATA FOR MAPPING
const values = [
  { icon: Lightbulb, title: "Innovation", desc: "Continuously improving through modern technology." },
  { icon: Settings, title: "Simplicity", desc: "Powerful software should always be intuitive and easy to use." },
  { icon: Shield, title: "Reliability", desc: "Building dependable platforms institutions can trust every day." },
  { icon: Lock, title: "Security", desc: "Protecting institutional information through enterprise-grade practices." },
  { icon: Award, title: "Excellence", desc: "Delivering premium experiences through thoughtful design." },
  { icon: Users, title: "Partnership", desc: "Working alongside institutions for long-term success." },
];

const roles = [
  { icon: Users, title: "School Administrators", desc: "Complete visibility and control at your fingertips." },
  { icon: Building, title: "College Management", desc: "Streamline operations and improve institutional efficiency." },
  { icon: BookOpen, title: "Teachers", desc: "Easy tools to teach, manage and engage effectively." },
  { icon: GraduationCap, title: "Students", desc: "A connected experience that supports learning, anytime." },
  { icon: Briefcase, title: "Campus Staff", desc: "Empowered teams that keep campuses running." },
];

export default function AboutPage() {
  return (
    <main>
      <Section className="py-16 lg:py-20 md:py-24 overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-aurora-1" />
        <div className="pointer-events-none absolute inset-0 -z-10 bg-aurora-2" />
        <div className="pointer-events-none absolute inset-0 -z-10 bg-aurora-3" />
        <div className="pointer-events-none absolute inset-0 -z-10 bg-grid" />

        <Container>
<div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20 py-16 lg:py-24">
        
        {/* Left Side: Content & CTA */}
        <FadeUp>
          <div className="flex flex-col items-start max-w-xl">
            
            {/* Clean Eyebrow (Replaced solid badge) */}
            <p className="mb-4 text-sm font-semibold tracking-wider text-gray-500 uppercase">
              About Jinanam Technologies
            </p>

            {/* Google-Style Large Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-[56px] font-medium tracking-tight text-foreground leading-[1.15]">
              Building Technology That Powers Modern Education.
            </h1>
            
            {/* Simple Description with spacing */}
            <div className="mt-6 space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                JINANAM Technologies is a technology company focused on building intelligent, secure and beautifully designed digital platforms for educational institutions.
              </p>
              <p>
                For over 3 years, we have been committed to helping institutions embrace digital transformation through modern, scalable and user-friendly technology.
              </p>
            </div>
            
            {/* Pill-shaped Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <a 
                href="/platform" 
                className="w-full sm:w-auto rounded-full bg-[#1A73E8] px-8 py-3.5 text-base font-medium text-white transition-all hover:bg-blue-700 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 text-center"
              >
                Explore JINANAM Campus
              </a>
              
              <a 
                href="/demo" 
                className="w-full sm:w-auto rounded-full bg-gray-100 dark:bg-white/5 px-8 py-3.5 text-base font-medium text-foreground transition-all hover:bg-gray-200 dark:hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 text-center"
              >
                Book a Demo
              </a>
            </div>

          </div>
        </FadeUp>

        {/* Right Side: Clean Visual Container */}
        <FadeUp delay={0.2}>
          {/* Ek clean aur premium container image ke liye */}
          <div className="relative w-full aspect-square bg-gray-50 dark:bg-white/[0.02] rounded-3xl flex items-center justify-center p-8 overflow-hidden border border-gray-100 dark:border-white/10 shadow-lg">
            <img
              src="/images/aboutmain.png"
              alt="Connected Campus Diagram"
              className="w-full h-full object-contain drop-shadow-md"
            />
          </div>
        </FadeUp>
        
      </div>
        </Container>
      </Section>

      {/* 2. OUR STORY SECTION */}
<Section className="py-16 lg:py-24 bg-gray-50/50 dark:bg-white/[0.02]">
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          
          {/* Left Side: Visual Container (Stacks below text on mobile, left on desktop) */}
          <FadeUp delay={0.2} className="order-2 lg:order-1">
            <div className="relative w-full aspect-square bg-white dark:bg-white/[0.02] rounded-3xl flex items-center justify-center p-8 overflow-hidden border border-gray-100 dark:border-white/10 shadow-lg">
              <img
                src="/images/ourstory.png"
                alt="Our Story Illustration"
                className="w-full h-full object-contain drop-shadow-md"
              />
            </div>
          </FadeUp>

          {/* Right Side: Content (Stacks above image on mobile, right on desktop) */}
          <FadeUp delay={0.2} className="order-1 lg:order-2">
            <div className="flex flex-col items-start max-w-xl">
              
              {/* Subtle Eyebrow */}
              <p className="mb-4 text-sm font-semibold tracking-wider text-gray-500 uppercase">
                The Foundation
              </p>

              {/* Google-Style Large Heading */}
              <h2 className="text-4xl md:text-5xl lg:text-[56px] font-medium tracking-tight text-foreground leading-[1.15]">
                Our Story.
              </h2>
              
              {/* Clean Paragraph Spacing */}
              <div className="mt-8 space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  JINANAM Technologies was founded with a simple vision: educational institutions deserve technology that is powerful, beautifully designed and easy to use.
                </p>
                <p>
                  Instead of disconnected software, manual processes and scattered communication, institutions deserve one connected platform that simplifies daily operations and enhances every experience.
                </p>
                <p>
                  JINANAM Campus was created to become the digital foundation for modern educational institutions—helping them focus on what matters most: education and student success.
                </p>
              </div>

            </div>
          </FadeUp>

        </div>
      </Container>
    </Section>

      {/* 3. VISION & MISSION SECTION */}
      <Section className="py-12 lg:py-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Vision - Dark Card */}
            <FadeUp>
              <div className="bg-slate-900 rounded-3xl p-10 lg:p-12 h-full text-white relative overflow-hidden flex flex-col justify-center">
                <div className="absolute right-0 top-0 opacity-20 w-64 h-64 bg-blue-500 rounded-full blur-3xl"></div>
                <h3 className="text-3xl font-bold mb-6 relative z-10">Our Vision</h3>
                <p className="text-slate-300 text-lg relative z-10 max-w-md mb-10">
                  To become one of the most trusted technology partners for educational institutions by creating connected digital experiences that simplify operations, strengthen collaboration and support better learning environments.
                </p>
                <div className="h-40 w-full bg-slate-800 rounded-xl flex items-center justify-center border border-slate-700/50 relative z-10">
                  <Lightbulb className="w-16 h-16 text-slate-600 opacity-50" />
                </div>
              </div>
            </FadeUp>

            {/* Mission - Light Card */}
            <FadeUp delay={0.2}>
              <div className="bg-white border border-slate-200 shadow-sm rounded-3xl p-10 lg:p-12 h-full flex flex-col justify-center">
                <h3 className="text-3xl font-bold mb-6 text-slate-900">Our Mission</h3>
                <p className="text-slate-600 text-lg max-w-md mb-10">
                  To build reliable, secure and scalable technology solutions that help educational institutions manage academics, administration, communication and everyday campus operations through one beautifully connected platform.
                </p>
                <div className="h-40 w-40 bg-slate-50 rounded-full flex items-center justify-center border border-slate-100 self-center">
                  <Target className="w-16 h-16 text-blue-600 opacity-50" />
                </div>
              </div>
            </FadeUp>
          </div>
        </Container>
      </Section>

      {/* 4. OUR VALUES SECTION */}
      <Section className="py-12 lg:py-20">
        <Container>
          <div className="text-center">
            <Heading title="Our Values" align="center" />
          </div>
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((val, idx) => {
              const Icon = val.icon;
              return (
                <FadeUp key={idx} delay={idx * 0.1}>
                  <div className="bg-white border border-slate-200 p-8 rounded-2xl text-center hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                    <div className="mx-auto w-12 h-12 bg-blue-50 text-blue-600 flex items-center justify-center rounded-xl mb-6">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h4 className="text-xl font-semibold text-slate-900 mb-3">{val.title}</h4>
                    <p className="text-slate-600 text-sm leading-7">{val.desc}</p>
                  </div>
                </FadeUp>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* 5. WHY WE BUILT SECTION */}
<Section className="py-16 lg:py-24 bg-white dark:bg-background border-y border-gray-100 dark:border-white/5">
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          
          {/* Left Side: Content */}
          <FadeUp>
            <div className="flex flex-col items-start max-w-xl">
              
              {/* Subtle Eyebrow (Replaced Badge) */}
              <p className="mb-4 text-sm font-semibold tracking-wider text-gray-500 uppercase">
                Why We Built JINANAM Campus
              </p>

              {/* Google-Style Large Heading */}
              <h2 className="text-4xl md:text-5xl lg:text-[56px] font-medium tracking-tight text-foreground leading-[1.15]">
                More Than Software.<br />
                <span className="text-gray-400 dark:text-gray-500">A Connected Campus Experience.</span>
              </h2>
              
              {/* Clean Paragraph Spacing */}
              <div className="mt-8 space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  JINANAM Campus was designed because educational institutions need one platform that brings together administration, academics, communication, finance, transport, library, HR and campus operations without unnecessary complexity.
                </p>
                <p>
                  Instead of managing multiple disconnected tools, institutions can operate through one unified digital ecosystem—saving time, reducing workload and enhancing every experience across the campus.
                </p>
              </div>

            </div>
          </FadeUp>

          {/* Right Side: Premium Visual Container */}
          <FadeUp delay={0.2}>
            <div className="relative w-full aspect-square bg-gray-50 dark:bg-white/[0.02] rounded-3xl flex items-center justify-center p-8 overflow-hidden border border-gray-100 dark:border-white/10 shadow-lg">
              <img
                src="/images/aboutwhy.png"
                alt="Connected Campus Diagram"
                className="w-full h-full object-contain drop-shadow-md"
              />
            </div>
          </FadeUp>

        </div>
      </Container>
    </Section>

      {/* 6. THE FUTURE (DARK BANNER) */}
<Section className="py-16 lg:py-24">
      <Container>
        <FadeUp>
          {/* Premium Dark Container */}
          <div className="relative overflow-hidden rounded-[2.5rem] bg-[#0A0A0A] sm:bg-[#0B0F19] px-6 py-12 sm:p-12 lg:p-16 border border-white/10 shadow-2xl flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            
            {/* Subtle Background Glow (Minimalist gradient) */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-transparent pointer-events-none" />

            {/* Left Side: Content */}
            <div className="relative z-10 flex-1 flex flex-col items-start">
              
              {/* Clean Eyebrow (Replaced solid Badge) */}
              <p className="mb-4 text-sm font-semibold tracking-wider text-blue-400 uppercase">
                The Future
              </p>

              {/* Google-Style Large Heading in White */}
              <h2 className="text-4xl md:text-5xl lg:text-[52px] font-medium tracking-tight text-white leading-[1.15]">
                Building for the Next Generation of Education.
              </h2>
              
              {/* Clean Paragraph Spacing */}
              <p className="mt-8 text-lg text-gray-400 leading-relaxed max-w-xl">
                JINANAM Technologies continues to invest in innovation, platform enhancements and user experience improvements so institutions always benefit from modern technology designed for long-term growth and lasting impact.
              </p>
            </div>

            {/* Right Side: Premium Visual Container */}
            <div className="relative z-10 flex-1 w-full aspect-video bg-white/[0.03] rounded-3xl border border-white/10 flex items-center justify-center p-6 shadow-inner overflow-hidden">
              <img
                src="/images/aboutfuture.png"
                alt="Future Campus Diagram"
                className="w-full h-full object-contain drop-shadow-2xl"
              />
            </div>
            
          </div>
        </FadeUp>
      </Container>
    </Section>

      {/* 7. ONE PLATFORM, EVERY ROLE */}
      <Section className="py-12 lg:py-20">
        <Container>
          <div className="text-center">
            <Heading title="One Platform, Every Role, Connected Together." align="center" />
          </div>

          <div className="mt-14 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {roles.map((role, idx) => {
              const RoleIcon = role.icon;
              return (
                <FadeUp key={idx} delay={idx * 0.1}>
                  <div className="group cursor-pointer">
                    <div className="aspect-square bg-slate-50 rounded-xl mb-5 overflow-hidden flex items-center justify-center border border-slate-200 transition-colors group-hover:bg-blue-50 group-hover:border-blue-200">
                      <RoleIcon className="w-8 h-8 text-slate-400 transition-colors group-hover:text-blue-600" />
                    </div>
                    <h4 className="font-semibold text-slate-900 text-sm mb-2">{role.title}</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">{role.desc}</p>
                  </div>
                </FadeUp>
              );
            })}

            <FadeUp delay={0.5}>
              <div className="aspect-square bg-slate-900 rounded-xl mb-5 flex flex-col items-center justify-center text-center p-4 border border-slate-800 shadow-lg">
                <GraduationCap className="w-8 h-8 text-white mb-3" />
                <span className="text-white font-bold text-sm leading-tight">JINANAM<br />CAMPUS</span>
                <p className="text-[10px] text-slate-400 mt-2 leading-tight">Everything Connected.<br />Everyone Empowered.</p>
              </div>
            </FadeUp>
          </div>
        </Container>
      </Section>

      {/* 8. CTA SECTION */}
      <Section className="py-12 lg:py-20">
        <Container>
          <FadeUp>
            <div className="bg-blue-600 rounded-3xl p-10 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-10 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
              <div className="relative z-10 max-w-2xl">
                <h2 className="text-3xl lg:text-4xl font-bold mb-6">Let&apos;s Build the Future of Education Together.</h2>
                <p className="text-blue-100 text-lg leading-relaxed">
                  Whether you&apos;re managing a school, college, university, coaching institute or multi-campus educational group, JINANAM Campus provides the connected digital foundation to simplify operations and create better experiences for everyone.
                </p>
              </div>
              <div className="relative z-10 flex gap-4 shrink-0 flex-wrap">
                <Button href="/demo" variant="secondary" className="bg-white text-blue-600 hover:bg-slate-50">Book a Personalized Demo</Button>
                <Button href="/contact" variant="ghost" className="border border-white/30 text-white hover:bg-white/10">Contact Our Team</Button>
              </div>
            </div>
          </FadeUp>
        </Container>
      </Section>

    </main>
  );
}