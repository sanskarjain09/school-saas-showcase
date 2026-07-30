import type { FAQItem } from "@/types";

export const faqData: FAQItem[] = [
  {
    id: "faq-1",
    question: "Can CampusHub handle more than one school or campus?",
    answer:
      "Yes. CampusHub is built multi-tenant from the ground up — each school gets isolated data, its own branding, and can be managed centrally or independently from a super admin dashboard.",
  },
  {
    id: "faq-2",
    question: "How long does onboarding take?",
    answer:
      "Most schools go live within 1-2 weeks. Our team migrates your existing student and fee data, configures your branding, and trains your staff before launch.",
  },
  {
    id: "faq-3",
    question: "Is our data secure?",
    answer:
      "Every school's data is isolated at the database level, encrypted in transit and at rest, and protected by role-based access control with full audit logging.",
  },
  {
    id: "faq-4",
    question: "Can we use our own domain and branding?",
    answer:
      "Yes. Growth and Enterprise plans include white-label branding with your logo, theme colors, and a custom domain for your login portal and mobile apps.",
  },
  {
    id: "faq-5",
    question: "Do parents and teachers need to install anything?",
    answer:
      "Parents, students, teachers and drivers each get a dedicated mobile app available on iOS and Android, alongside a responsive web portal.",
  },
  {
    id: "faq-6",
    question: "What does the AI assistant actually do?",
    answer:
      "It answers natural-language questions about your school's live data — like outstanding fees or attendance trends — and can draft notices and summarize reports automatically.",
  },
];
