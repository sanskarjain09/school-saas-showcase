
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Heading } from "@/components/ui/Heading";
import { FadeUp } from "@/components/animations/FadeUp";
import {
  ArrowRight,
  BookOpen,
  CalendarCheck,
  Clock,
  MessageSquare,
  CreditCard,
  Users,
  Bus,
  Library,
  Building,
  Box,
  UserCheck,
  BarChart3,
  Cloud,
  ShieldCheck,
  Smartphone,
  Globe,
  Award,
} from "lucide-react";
import Image from "next/image";

// --- DATA ARRAYS ---

const featureShowcase = [
  { icon: Users, title: "Student Information", desc: "Digital student profiles with complete academic history from admission to graduation." },
  { icon: BookOpen, title: "Academic Management", desc: "Manage classes, subjects, academic calendars, lesson planning and classroom activities in one place." },
  { icon: CalendarCheck, title: "Attendance", desc: "Real-time student and staff attendance with instant visibility and historical records." },
  { icon: Clock, title: "Timetable", desc: "Smart timetable management with instant updates for classes, holidays, substitutions and changes." },
  { icon: Award, title: "Examination & Results", desc: "Plan examinations, publish marks, generate report cards and monitor academic progress." },
  { icon: MessageSquare, title: "Communication", desc: "Announcements, notices, circulars, events, push notifications, email, SMS and WhatsApp—one place." },
  { icon: CreditCard, title: "Fee Management", desc: "Fee structures, invoices, online payments, receipts, concessions, refunds and student ledgers." },
  { icon: UserCheck, title: "HR & Staff", desc: "Employee profiles, attendance, leave, payroll, recruitment and department management." },
  { icon: Library, title: "Library", desc: "Book catalogue, issue and return, barcode support, due reminders and reading history." },
  { icon: Building, title: "Hostel", desc: "Room allocation, attendance, visitors, hostel fees, complaints and occupancy management." },
  { icon: Box, title: "Inventory & Assets", desc: "Manage classrooms, laboratories, equipment, stationery and maintenance requests." },
  { icon: Bus, title: "Transport", desc: "Routes, vehicles, pickup points, driver management and real-time transportation updates." },
];

const studentLifecycle = [
  "Admission", "Student Profile", "Attendance", "Timetable", "Homework", "Examinations", "Results", "Certificates", "Alumni"
];

const roles = [
  { img: "/images/admin.png", title: "Institution Management", desc: "Executive dashboards and complete institutional oversight." },
  { img: "/images/teacher.png", title: "Faculty & Staff", desc: "Manage classes, attendance, homework and examinations efficiently." },
  { img: "/images/student.png", title: "Students", desc: "Stay updated with schedules, assignments, results and campus announcements." },
  { img: "/images/aboutfuture.png", title: "Office Administration", desc: "Handle admissions, fees, communication and everyday operations with ease." },
  { img: "/images/support.png", title: "Support Departments", desc: "Reception, Library, Transport, Hostel, HR and Security all work through one platform." },
];

const benefits = [
  { icon: Globe, title: "One Connected Platform", desc: "Everything works together." },
  { icon: Smartphone, title: "Paperless Operations", desc: "Reduce manual work and improve efficiency." },
  { icon: Clock, title: "Real-Time Visibility", desc: "Every update appears instantly across the platform." },
  { icon: Cloud, title: "Cloud Based", desc: "Access securely from anywhere, anytime." },
  { icon: ShieldCheck, title: "White Label Ready", desc: "Every institution gets its own branded platform." },
  { icon: BarChart3, title: "Built for Growth", desc: "Supports institutions from early learning centres to universities." },
];

export default function FeaturesPage() {
  return (
    <main className="overflow-hidden bg-background">
      {/* 1. HERO SECTION */}
      <Section className="py-section-sm lg:py-section-lg relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-aurora-1" />
        <div className="pointer-events-none absolute inset-0 -z-10 bg-aurora-2" />
        <div className="pointer-events-none absolute inset-0 -z-10 bg-aurora-3" />
        <div className="pointer-events-none absolute inset-0 -z-10 bg-grid" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60vw] max-w-[800px] aspect-square bg-accent/10 blur-[120px] rounded-full pointer-events-none -z-10" />
        <Container>
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">

            {/* Left Side: Content & CTA */}
            <FadeUp>
              <div className="flex flex-col items-start max-w-xl">
                {/* Clean Eyebrow (Replacing the solid Badge for a more minimalist look) */}
                <p className="mb-4 text-sm font-semibold tracking-wider text-muted uppercase">
                  Platform Features
                </p>

                {/* Google-Style Large Heading */}
                <h1 className="text-4xl md:text-5xl lg:text-section font-bold tracking-tight text-foreground leading-[1.15]">
                  Complete Ecosystem. Seamlessly Synced.
                </h1>

                {/* Simple Description */}
                <p className="mt-6 text-lg text-muted leading-relaxed">
                  JiNANAM Campus: One intelligent platform to run your entire institution seamlessly.
                </p>

                {/* Pill-shaped Buttons */}
                <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                  <Button
                    href="/book-demo"
                    className="w-full sm:w-auto rounded-full text-center"
                  >
                    Book a Demo
                  </Button>

                  <Button
                    href="/white-label"
                    variant="secondary"
                    className="w-full sm:w-auto rounded-full text-center"
                  >
                    Explore White Label
                  </Button>
                </div>
              </div>
            </FadeUp>

            {/* Right Side: Clean Visual */}
            <FadeUp delay={0.02}>
              {/* 
            Image container ko responsive rakha hai. 
            'fill' property use ki hai taaki width/height na deni pade.
          */}
              <div className="relative w-full aspect-square md:aspect-video lg:aspect-square flex items-center justify-center">
                <Image
                  src="/images/faturesall.png"
                  alt="JiNANAM Campus Devices"
                  fill
                  priority // Ye image upar hai to priority dene se fast load hogi
                  className="object-contain w-full h-full drop-shadow-2xl scale-110 md:scale-125 lg:scale-[1.3] origin-center"
                />
              </div>
            </FadeUp>

          </div>
        </Container>
      </Section>

      {/* 2. COMPLETE CAMPUS ECOSYSTEM */}
      <Section className="py-section-sm lg:py-section-lg bg-surface">
        <Container>
          <div className="text-center mb-16">
            <Heading title="Complete Campus Ecosystem" align="center" />
            <p className="text-muted mt-3 text-lg">One platform. Every module. Seamlessly connected.</p>
          </div>

          <FadeUp>
            <div className="relative w-full max-w-4xl mx-auto px-4 md:px-0">
              <Image
                src="/images/feature.png"
                alt="Complete Campus Ecosystem"
                width={1000}
                height={1000}
                className="w-full h-auto object-contain rounded-xl"
              />
            </div>
          </FadeUp>
        </Container>
      </Section>

      {/* 3. STUDENT LIFECYCLE */}
      <Section className="py-section-sm lg:py-section-lg bg-surface/50 border-y border-border">
        <Container>
          <div className="flex flex-col lg:flex-row gap-10 items-center">
            <div className="lg:w-1/4">
              <h3 className="text-lg font-bold text-foreground uppercase tracking-wider mb-2">Student Lifecycle</h3>
              <p className="text-sm text-muted">From admission to alumni—every step is connected.</p>
            </div>

            <div className="lg:w-3/4 flex w-full justify-between items-center overflow-x-auto pb-4 gap-4 no-scrollbar">
              {studentLifecycle.map((item, i) => (
                <div key={item} className="flex flex-col items-center gap-3 min-w-[90px]">
                  <div className="w-12 h-12 rounded-full bg-surface border border-border flex items-center justify-center text-accent shadow-sm relative z-10">
                    <span className="font-bold text-sm">{i + 1}</span>
                  </div>
                  <span className="text-[11px] font-semibold text-muted text-center uppercase tracking-wide">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* 4. FEATURE SHOWCASE GRID */}
      <Section className="py-section-sm lg:py-section-lg bg-surface">
        <Container>
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <Heading title="Feature Showcase" />
            <p className="text-muted mt-3 text-lg">Powerful features designed to simplify everyday campus operations.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featureShowcase.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <FadeUp key={feature.title} delay={idx *0.02}>
                  <div className="group h-full p-8 bg-surface border border-border rounded-3xl hover:border-accent hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                    <div className="w-12 h-12 rounded-2xl bg-accent/10 text-accent flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h4 className="text-xl font-bold text-foreground mb-3">{feature.title}</h4>
                    <p className="text-sm text-muted leading-7">{feature.desc}</p>
                  </div>
                </FadeUp>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* 5. DAILY CAMPUS EXPERIENCE */}
      <Section className="py-section-sm lg:py-section-lg bg-surface/50">
        <Container>
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <Heading title="Daily Campus Experience" />
            <p className="text-muted mt-3 text-lg">A connected day on campus. Everything happens automatically inside JiNANAM Campus.</p>
          </div>
          <FadeUp>
            <div className="w-full bg-surface rounded-3xl p-8 border border-border shadow-sm flex items-center justify-center">
              <Image
                src="/images/daily-campus.png"
                alt="Daily Campus Flow"
                width={1200}
                height={200}
                className="w-full h-auto object-contain"
              />

            </div>
          </FadeUp>
        </Container>
      </Section>

      {/* 6. ROLE-BASED EXPERIENCE */}
      <Section className="py-section-sm lg:py-section-lg bg-surface">
        <Container>
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <Heading title="Role-Based Experience" />
            <p className="text-muted mt-3 text-lg">The right experience for every role in your institution.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {roles.map((role, idx) => (
              <FadeUp key={role.title} delay={idx *0.02}>
                <div className="group h-full bg-surface rounded-3xl overflow-hidden border border-border hover:shadow-md transition-all duration-300">
                  <div className="aspect-[4/3] relative overflow-hidden bg-border">
                    <Image
                      src={role.img}
                      alt={role.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500 group-hover:grayscale-0"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="font-bold text-foreground text-lg mb-2 leading-tight">{role.title}</h4>
                    <p className="text-xs text-muted leading-relaxed">{role.desc}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </Container>
      </Section>

      {/* 7. WHY INSTITUTIONS LOVE US */}
      <Section className="py-section-sm lg:py-section-lg bg-surface/50 border-y border-border">
        <Container>
          <div className="mb-16 text-center max-w-2xl mx-auto">
            <Heading title="Why Institutions Love JiNANAM Campus" align="center" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6">
            {benefits.map((benefit, idx) => {
              const Icon = benefit.icon;
              return (
                <FadeUp key={benefit.title} delay={idx *0.02}>
                  <div className="flex flex-col items-center text-center p-6 bg-surface rounded-2xl shadow-sm border border-border h-full hover:-translate-y-1 transition-transform">
                    <div className="w-12 h-12 mb-4 text-accent bg-accent/10 rounded-xl flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h4 className="font-semibold text-foreground text-base mb-2">{benefit.title}</h4>
                    <p className="text-xs text-muted leading-relaxed">{benefit.desc}</p>
                  </div>
                </FadeUp>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* 8. BEAUTIFUL DASHBOARD GALLERY */}
      <Section className="py-section-sm lg:py-section-lg bg-surface overflow-hidden">
        <Container>
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <Heading title="Beautiful Dashboard Gallery" />
            <p className="text-muted mt-3 text-lg">Every dashboard is designed for clarity, insight and action.</p>
          </div>

          <FadeUp>
            <div className="w-full flex justify-center bg-surface/50 p-6 rounded-3xl border border-border">
              <Image
                src="/images/dashboard.png"
                alt="Dashboard Gallery"
                width={1200}
                height={300}
                className="w-full h-auto max-w-6xl object-contain"
              />
            </div>
          </FadeUp>
        </Container>
      </Section>

      {/* 9. BOTTOM CTA SECTION */}
      <Section className="py-section-sm lg:py-section-lg bg-surface">
        <Container>
          <FadeUp>
            <div className="bg-accent rounded-3xl p-10 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-10 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>

              <div className="relative z-10 max-w-2xl">
                <h2 className="text-3xl lg:text-4xl font-bold mb-6">One Platform. Every Department. Perfectly Connected.</h2>
                <p className="text-white/90 text-lg leading-relaxed">
                  JiNANAM Campus brings together every department, every workflow and every user into one beautifully designed digital ecosystem that helps educational institutions operate smarter, communicate better and grow with confidence.
                </p>
              </div>

              <div className="relative z-10 flex gap-4 shrink-0 flex-wrap">
                <Button href="/book-demo" variant="secondary" className="bg-white text-accent hover:bg-surface">Book a Personalized Demo</Button>
                <Button href="/contact" variant="ghost" className="border border-white/30 text-white hover:bg-white/10">Contact Our Team</Button>
              </div>
            </div>
          </FadeUp>
        </Container>
      </Section>
    </main>
  );
}