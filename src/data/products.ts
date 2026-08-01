import type { ProductShowcaseItem } from "@/types";
import { ROUTES } from "@/lib/constants";

export const productShowcaseData: ProductShowcaseItem[] = [
  {
    id: "product-students",
    eyebrow: "Student Management",
    title: "Manage every student with ease.",
    description:
      "Handle admissions, records, documents, and student lifecycle from one dashboard.",
    mockup: "students",
    accent: "blue",
    image: "/images/dashboard/4.png",
    capabilities: [
      { id: "c1", text: "Online admissions" },
      { id: "c2", text: "Student records" },
      { id: "c3", text: "Class allocation" },
      { id: "c4", text: "Promotions & transfers" },
      { id: "c5", text: "Parent linking" },
      { id: "c6", text: "Auto ID cards" },
    ],
    cta: { label: "Explore Student Management", href: ROUTES.demo },
  },
  {
    id: "product-academics",
    eyebrow: "Academics",
    title: "Simplify daily academics.",
    description:
      "Create timetables, manage lessons, homework, and attendance with ease.",
    mockup: "academics",
    accent: "purple",
    image: "/images/dashboard/6.png",
    capabilities: [
      { id: "c1", text: "Smart timetables" },
      { id: "c2", text: "Lesson planning" },
      { id: "c3", text: "Homework tracking" },
      { id: "c4", text: "Attendance" },
      { id: "c5", text: "Teacher allocation" },
      { id: "c6", text: "Session management" },
    ],
    cta: { label: "Explore Academics", href: ROUTES.demo },
  },
  {
    id: "product-finance",
    eyebrow: "Finance",
    title: "Manage fees and payroll.",
    description:
      "Collect fees, process payroll, and track finances from one place.",
    mockup: "finance",
    accent: "blue",
    image: "/images/dashboard/3.png",
    capabilities: [
      { id: "c1", text: "Fee management" },
      { id: "c2", text: "Online payments" },
      { id: "c3", text: "Due reminders" },
      { id: "c4", text: "Payroll" },
      { id: "c5", text: "Accounting" },
      { id: "c6", text: "Financial reports" },
    ],
    cta: { label: "Explore Finance", href: ROUTES.demo },
  },
];