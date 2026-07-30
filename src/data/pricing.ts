import type { PricingPlan } from "@/types";
import { ROUTES } from "@/lib/constants";

export const pricingPlans: PricingPlan[] = [
  {
    id: "plan-starter",
    name: "Starter",
    description: "For a single school getting off spreadsheets.",
    price: "$99",
    billingNote: "per month, billed annually",
    highlighted: false,
    features: [
      "Up to 500 students",
      "Student & academics management",
      "Fee collection & receipts",
      "Communication (SMS & email)",
      "Mobile apps for staff & parents",
      "Standard reports",
    ],
    cta: { label: "Start Free Trial", href: ROUTES.demo },
  },
  {
    id: "plan-growth",
    name: "Growth",
    description: "For schools and colleges ready to automate everything.",
    price: "$249",
    billingNote: "per month, billed annually",
    highlighted: true,
    features: [
      "Up to 3,000 students",
      "Everything in Starter",
      "Examination & report cards",
      "Transport with live tracking",
      "HR & payroll",
      "AI chat assistant & AI search",
      "Priority support",
    ],
    cta: { label: "Book a Demo", href: ROUTES.demo },
  },
  {
    id: "plan-enterprise",
    name: "Enterprise",
    description: "For multi-campus groups that need full white-label control.",
    price: "Custom",
    billingNote: "tailored to your group",
    highlighted: false,
    features: [
      "Unlimited students & branches",
      "Everything in Growth",
      "Full white-label & custom domain",
      "Dedicated database isolation",
      "Custom integrations",
      "Dedicated success manager",
    ],
    cta: { label: "Talk to Sales", href: ROUTES.demo },
  },
];
