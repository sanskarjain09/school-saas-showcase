
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Heading } from "@/components/ui/Heading";
import { FadeUp } from "@/components/animations/FadeUp";
import Image from "next/image";

// --- DATA ARRAYS ---

const institutions = [
    { title: "Early Learning Centers", desc: "Designed for play-based learning environments.", img: "/images/inst-1.png" },
    { title: "Pre-Schools", desc: "Manage admissions, student records and communication.", img: "/images/inst-2.png" },
    { title: "Kindergartens", desc: "Support early education with intuitive digital experiences.", img: "/images/inst-3.png" },
    { title: "Primary Schools", desc: "Simplify academics, attendance and school administration.", img: "/images/inst-4.png" },
    { title: "Secondary Schools", desc: "Connect classrooms, administration and everyday operations.", img: "/images/inst-5.png" },
    { title: "Higher Secondary Schools", desc: "Support advanced academic structures and student success.", img: "/images/inst-6.png" },
    { title: "CBSE Schools", desc: "Flexible workflows for structured academic environments.", img: "/images/inst-7.png" },
    { title: "ICSE Schools", desc: "Manage curriculum, assessments and school administration.", img: "/images/inst-8.png" },
    { title: "State Board Schools", desc: "Adapt to local academic structures and requirements.", img: "/images/inst-9.png" },
    { title: "International Schools", desc: "Deliver a premium experience for global learning communities.", img: "/images/inst-10.png" },
    { title: "Residential & Boarding Schools", desc: "Manage academics, hostel, activities and campus life.", img: "/images/inst-11.png" },
    { title: "Junior Colleges", desc: "Support student administration and academic operations.", img: "/images/inst-12.png" },
    { title: "Degree Colleges", desc: "Create connected experiences across departments.", img: "/images/inst-13.png" },
    { title: "Engineering Colleges", desc: "Manage departments, labs and student records.", img: "/images/inst-14.png" },
    { title: "Medical Colleges", desc: "Support academic administration and campus operations.", img: "/images/inst-15.png" },
    { title: "Universities", desc: "Scale across faculties, campuses and departments.", img: "/images/inst-16.png" },
];

const adapfeatures = [
    { title: "Flexible Academic Structures", desc: "Support different academic models without changing the core platform." },
    { title: "Role-Based Access", desc: "Provide the right experience for administrators, educators, students and staff." },
    { title: "White Label Experience", desc: "Every institution gets its own branded digital platform." },
    { title: "Scalable Architecture", desc: "Grow from a single institution to a multi-campus group with ease." },
    { title: "Connected Operations", desc: "Academics, administration, finance and communication work together." },
    { title: "Cloud Platform", desc: "Access your institution securely from anywhere, any time." },
];

const dashboards = [
    { title: "Administrator Dashboard", img: "/images/admin-dash.png" },
    { title: "Educator Workspace", img: "/images/teacher-dash.png" },
    { title: "Student Mobile App", img: "/images/student-dash.png" },
    { title: "Finance Management", img: "/images/finance-dash.png" },
    // { title: "Library Management", img: "/images/library-dash.png" },
    // { title: "Hostel Management", img: "/images/hostel-dash.png" },
    // { title: "Global Dashboard", img: "/images/global-dash.png" },
];

const benefits = [
    { title: "Designed Around Education", desc: "Built specifically for educational institutions." },
    { title: "Beautiful User Experience", desc: "Intuitive, clean and easy for every user." },
    { title: "Cloud Based", desc: "Access securely from anywhere, anytime." },
    { title: "White Label Ready", desc: "Your brand. Your identity. Your platform." },
    { title: "Scalable Platform", desc: "Grow without limits. We scale with you." },
    { title: "Enterprise Security", desc: "Protecting data with care and responsibility." },
    { title: "Reliable Performance", desc: "Fast, stable and built for everyday use." },
    { title: "Long-Term Technology Partner", desc: "Supporting your journey today and tomorrow." },
];

const gallery = [
    { title: "Modern School", img: "/images/gallery-1.png" },
    { title: "Engineering College", img: "/images/gallery-2.png" },
    { title: "University Campus", img: "/images/gallery-3.png" },
    { title: "Medical Colleges", img: "/images/gallery-4.png" },
    { title: "Training Center", img: "/images/gallery-5.png" },
    { title: "Residential Campus", img: "/images/gallery-6.png" },
    { title: "International School", img: "/images/gallery-7.png" },
    { title: "Trust Headquarters", img: "/images/gallery-8.png" },
];

export default function IndustriesPage() {
    return (
        <main className="overflow-hidden bg-background">

            {/* 1. HERO SECTION */}
            <Section className="py-16 lg:py-24 relative overflow-hidden">
                <div className="pointer-events-none absolute inset-0 -z-10 bg-aurora-1 opacity-40" />
                <div className="pointer-events-none absolute inset-0 -z-10 bg-aurora-2 opacity-40" />
                <div className="pointer-events-none absolute inset-0 -z-10 bg-grid opacity-50" />
                <Container>
                    <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">

                        {/* Left Content */}
                        <FadeUp>
                            <div className="flex flex-col items-start max-w-xl">
                                <p className="mb-4 text-sm font-semibold tracking-wider text-accent uppercase">
                                    Industries We Serve
                                </p>

                                <h1 className="text-4xl md:text-5xl lg:text-section font-bold tracking-tight text-foreground leading-[1.15]">
                                    One Platform. Every Institution.
                                </h1>

                                <p className="mt-6 text-lg text-muted leading-relaxed">
                                    Every educational institution has unique academic structures, operational workflows and administrative requirements. JiNANAM Campus adapts to institutions of every size while providing one beautifully connected digital platform that simplifies campus operations and enhances everyday experiences.
                                </p>

                                {/* CTAs */}
                                <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                                    <Button href="/book-demo" variant="primary" showArrow className="w-full sm:w-auto">
                                        Book a Personalized Demo
                                    </Button>

                                    <Button href="/features" variant="secondary" className="w-full sm:w-auto">
                                        Explore Platform Features
                                    </Button>
                                </div>
                            </div>
                        </FadeUp>

                        {/* Right Hero Graphic */}
                        <FadeUp delay={0.02}>
                            <div className="relative w-full aspect-square flex items-center justify-center">
                                <Image
                                    src="/images/industries-hero.png"
                                    alt="Institutions Connected Network"
                                    fill
                                    priority
                                    className="object-contain w-full h-full drop-shadow-2xl scale-105 md:scale-110 lg:scale-[1.15] origin-center"
                                />
                            </div>
                        </FadeUp>

                    </div>
                </Container>
            </Section>



            {/* 2. EDUCATIONAL INSTITUTIONS GRID */}
            <Section className="py-section-sm lg:py-section-lg bg-surface border-t border-border">
                <Container>
                    <div className="text-center mb-16">
                        <p className="text-xs font-semibold tracking-[0.2em] text-accent uppercase mb-3">Educational Institutions</p>
                        <Heading title="Tailored for Every Learning Environment" align="center" className="mx-auto max-w-3xl" />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                        {institutions.map((inst, idx) => (
                            <FadeUp key={inst.title} delay={idx * 0.02}>
                                {/* Sirf image aur clean rounded card */}
                                <div className="group relative aspect-square w-full overflow-hidden rounded-3xl bg-transparent transition-transform duration-300 hover:scale-105 flex items-center justify-center">
                                    <Image
                                        src={inst.img}
                                        alt={inst.title}
                                        fill
                                        className="object-contain w-full h-full"
                                    />
                                </div>
                            </FadeUp>
                        ))}
                    </div>
                </Container>
            </Section>

            {/* 3. ONE PLATFORM & HOW JINANAM ADAPTS */}
            <Section className="py-section-sm lg:py-section-lg bg-background">
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

                        {/* Left Side: Diagram (Fixed sizing for guaranteed visibility) */}
                        <div className="lg:col-span-5 flex justify-center w-full">
                            <FadeUp>
                                <div className="relative w-full max-w-lg aspect-square min-h-[350px] flex items-center justify-center">
                                    <Image
                                        src="/images/unlimited-possibilities.png"
                                        alt="Unlimited Possibilities"
                                        fill
                                        sizes="(max-width: 768px) 100vw, 500px"
                                        className="object-contain w-full h-full drop-shadow-xl scale-105 md:scale-110 lg:scale-[1.4] origin-center"
                                        priority
                                    />
                                </div>
                            </FadeUp>
                        </div>

                        {/* Right Side: Feature Adaptability */}
                        <div className="lg:col-span-7">
                            <FadeUp>
                                <p className="text-xs font-semibold tracking-[0.2em] text-accent uppercase mb-3">One Platform</p>
                                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
                                    Unlimited Possibilities
                                </h2>
                                <p className="text-muted mb-10 text-base leading-relaxed">
                                    One powerful platform that adapts to every type of institution with extreme flexibility and robust features.
                                </p>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    {adapfeatures.map((feat) => (
                                        <div key={feat.title} className="p-6 rounded-2xl bg-surface border border-border">
                                            <h4 className="font-semibold text-foreground text-base mb-2">{feat.title}</h4>
                                            <p className="text-xs text-muted leading-relaxed">{feat.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </FadeUp>
                        </div>

                    </div>
                </Container>
            </Section>

            {/* 4. CAMPUS EXPERIENCE ACROSS EVERY ROLE */}
            <Section className="py-section-sm lg:py-section-lg bg-surface/50 border-t border-border">
                <Container>
                    <div className="mb-16 text-center max-w-3xl mx-auto">
                        <p className="text-xs font-semibold tracking-[0.2em] text-accent uppercase mb-3">Role-Based Workspaces</p>
                        <Heading title="Campus Experience Across Every Role" align="center" />
                        <p className="text-muted mt-3 text-base">Customized dashboards and interfaces built specifically for administrators, educators, students, and support departments.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {dashboards.slice(0, 4).map((dash, idx) => (
                            <FadeUp key={dash.title} delay={idx * 0.02}>
                                <div className="bg-card border border-border rounded-3xl shadow-card-sm hover:shadow-card-md transition-all flex flex-col justify-between p-4">
                                    <div className="relative w-full aspect-video mb-4 rounded-xl overflow-hidden bg-surface">
                                        <Image src={dash.img} alt={dash.title} fill className="object-cover" />
                                    </div>
                                    <h4 className="font-semibold mb-2 text-foreground text-center text-sm mt-2">{dash.title}</h4>
                                </div>
                            </FadeUp>
                        ))}
                    </div>
                </Container>
            </Section>


            <Section className="py-section-sm lg:py-section-lg bg-background">
                <Container>
                    <div className="mb-16 text-center max-w-2xl mx-auto">
                        <p className="text-xs font-semibold tracking-[0.2em] text-accent mb-3">WHY JiNANAM</p>
                        <Heading title="Why Every Institution Chooses Jinanam Campus" align="center" />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {benefits.map((ben, idx) => (
                            <FadeUp key={ben.title} delay={idx * 0.02}>
                                <div className="p-8 rounded-3xl bg-surface border border-border h-full flex flex-col justify-between hover:border-accent transition-all">
                                    <div>
                                        <h4 className="font-semibold text-foreground text-lg mb-3">{ben.title}</h4>
                                        <p className="text-sm text-muted leading-relaxed">{ben.desc}</p>
                                    </div>
                                </div>
                            </FadeUp>
                        ))}
                    </div>
                </Container>
            </Section>



            {/* 7. BOTTOM CTA SECTION */}
            <Section className="py-section-sm lg:py-section-lg bg-background">
                <Container>
                    <FadeUp>
                        <div className="bg-accent rounded-[2.5rem] p-10 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-10 text-white relative overflow-hidden shadow-2xl">
                            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />

                            <div className="relative z-10 max-w-2xl">
                                <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-6">
                                    No Matter What Type of Institution You Lead, JiNANAM Campus Adapts to You.
                                </h2>
                                <p className="text-white/80 text-lg leading-relaxed">
                                    Whether you&apos;re managing an early learning center, school, college, university or a multi-campus educational group, JINANAM Campus provides one connected digital platform designed to simplify operations, strengthen communication and create exceptional experiences for everyone.
                                </p>
                            </div>

                            <div className="relative z-10 flex gap-4 shrink-0 flex-wrap">
                                <Button href="/book-demo" variant="secondary" className="rounded-full bg-white text-accent hover:bg-surface px-8 py-4 font-medium">
                                    Book a Personalized Demo &rarr;
                                </Button>
                                <Button href="/contact-us" variant="secondary" className="rounded-full border border-white/30 text-white bg-transparent hover:bg-white/10 px-8 py-4 font-medium">
                                    Contact Our Team &rarr;
                                </Button>
                            </div>
                        </div>
                    </FadeUp>
                </Container>
            </Section>

        </main>
    );
}