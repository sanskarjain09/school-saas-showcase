import type { LucideIcon } from "lucide-react";
export type { LucideIcon };

// ==========================================
// SHARED & UTILITY TYPES
// ==========================================

export type ThemeAccent = "blue" | "purple" | "cyan";

export type MockupType = 
  | "students" 
  | "academics" 
  | "exams" 
  | "finance" 
  | "communication" 
  | "transport" 
  | "library" 
  | "hr" 
  | "inventory" 
  | "reports" 
  | "mobile" 
  | "ai";

// ==========================================
// NAVIGATION & COMPANY INFO
// ==========================================

export interface NavLink {
  label: string;
  href: string;
}

export interface NavigationData {
  links: NavLink[];
  cta: { label: string; href: string };
}

export interface CompanyInfo {
  name: string;
  legalName: string;
  tagline: string;
  description: string;
  email: string;
  phone: string;
  address: string;
  foundedYear: number;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: string;
}

// ==========================================
// HERO SECTION
// ==========================================

export interface HeroStat {
  id: string;
  value: number;
  suffix: string;
  label: string;
}

export interface HeroData {
  eyebrow: string;
  headlineLines: string[];
  description: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  stats: HeroStat[];
}

export interface TrustedSchool {
  id: string;
  name: string;
}

// ==========================================
// FEATURES & SHOWCASE
// ==========================================

export interface StatItem {
  id: string;
  icon: string;
  value: number;
  suffix: string;
  label: string;
}

export interface WhyChooseItem {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface ShowcaseCapability {
  id: string;
  text: string;
}

export interface ProductShowcaseItem {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  capabilities: ShowcaseCapability[];
  cta: { label: string; href: string };
  mockup: MockupType;   // Cleaned up inline union
  accent: ThemeAccent;  // Cleaned up inline union
}

// ==========================================
// MODULES & AI FEATURES
// ==========================================

export interface ModuleFeature {
  id: string;
  text: string;
}

export interface ModuleCategory {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  features: ModuleFeature[];
}

export interface AIFeatureItem {
  id: string;
  icon: string;
  title: string;
  description: string;
}

// ==========================================
// TESTIMONIALS & PRICING
// ==========================================

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  school: string;
  initials: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  description: string;
  price: string;
  billingNote: string;
  highlighted: boolean;
  features: string[];
  cta: { label: string; href: string };
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

// ==========================================
// FOOTER & CONTACT
// ==========================================

export interface FooterLinkGroup {
  title: string;
  links: NavLink[];
}

export interface FooterData {
  groups: FooterLinkGroup[];
  bottomNote: string;
}

export interface ContactSocial {
  icon: string;
  href: string;
}

export interface ContactForm {
  title: string;
  subtitle: string;
  button: string;
}

export interface ContactData {
  eyebrow: string;
  title: string;
  description: string;
  phones: string[];
  email: string;
  address: string[];
  // socials: ContactSocial[];
  form: ContactForm;
}