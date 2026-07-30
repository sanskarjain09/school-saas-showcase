import type { ModuleCategory } from "@/types";
import {
  Building2,
  Palette,
  LayoutDashboard,
  Users, // Using Users for User Management
  BookMarked,
  BedDouble,
  Package,
  DoorOpen,
  BadgeCheck,
  BarChart3
} from "lucide-react";

export const moduleCategories: ModuleCategory[] = [
  {
    id: "mod-saas",
    icon: Building2, // String ke bajaye actual component reference
    title: "SaaS & Super Admin",
    description: "Run unlimited schools on one platform with isolated data per tenant.",
    features: [
      { id: "f1", text: "Multi-tenant architecture" },
      { id: "f2", text: "School creation & trial management" },
      { id: "f3", text: "Subscription & billing control" },
      { id: "f4", text: "Platform-wide analytics" },
    ],
  },
  {
    id: "mod-branding",
    icon: Palette,
    title: "White Label & Branding",
    description: "Every school gets its own logo, theme colors and custom domain.",
    features: [
      { id: "f1", text: "Custom domain mapping" },
      { id: "f2", text: "School logo & login branding" },
      { id: "f3", text: "Configurable theme colors" },
      { id: "f4", text: "Branded mobile apps" },
    ],
  },
  {
    id: "mod-admin",
    icon: LayoutDashboard,
    title: "School Administration",
    description: "Configure sessions, branches, classes and school-wide settings.",
    features: [
      { id: "f1", text: "Academic session setup" },
      { id: "f2", text: "Branch & class management" },
      { id: "f3", text: "Holidays & working days" },
      { id: "f4", text: "School profile & settings" },
    ],
  },
  {
    id: "mod-users",
    icon: Users,
    title: "User Management & RBAC",
    description: "Give every role — from reception to accountant — exactly the access they need.",
    features: [
      { id: "f1", text: "Role-based access control" },
      { id: "f2", text: "Custom roles & permissions" },
      { id: "f3", text: "Staff, driver & accountant accounts" },
      { id: "f4", text: "Full activity logs" },
    ],
  },
  {
    id: "mod-library",
    icon: BookMarked,
    title: "Library",
    description: "Barcode-driven cataloguing with automated issue, return and fine tracking.",
    features: [
      { id: "f1", text: "Barcode & ISBN cataloguing" },
      { id: "f2", text: "Book issue & return" },
      { id: "f3", text: "Automated fine collection" },
      { id: "f4", text: "Inventory reports" },
    ],
  },
  {
    id: "mod-hostel",
    icon: BedDouble,
    title: "Hostel",
    description: "Manage rooms, bed allocation and hostel fees for boarding students.",
    features: [
      { id: "f1", text: "Room & bed allocation" },
      { id: "f2", text: "Hostel fee tracking" },
      { id: "f3", text: "Occupancy reports" },
      { id: "f4", text: "Warden management" },
    ],
  },
  {
    id: "mod-inventory",
    icon: Package,
    title: "Inventory & Procurement",
    description: "Track stock, suppliers and purchase orders down to the barcode.",
    features: [
      { id: "f1", text: "Purchase orders & goods receipt" },
      { id: "f2", text: "Supplier & vendor billing" },
      { id: "f3", text: "Barcode stock management" },
      { id: "f4", text: "Point of sale" },
    ],
  },
  {
    id: "mod-visitor",
    icon: DoorOpen,
    title: "Visitor & Gate Management",
    description: "Log every visitor, courier and gate pass with a digital register.",
    features: [
      { id: "f1", text: "Visitor & postal register" },
      { id: "f2", text: "Digital gate passes" },
      { id: "f3", text: "Visitor history logs" },
      { id: "f4", text: "Front-desk dashboard" },
    ],
  },
  {
    id: "mod-certificates",
    icon: BadgeCheck,
    title: "Certificates & ID Cards",
    description: "Generate polished certificates and ID cards from custom templates.",
    features: [
      { id: "f1", text: "Certificate generator" },
      { id: "f2", text: "Student & staff ID cards" },
      { id: "f3", text: "Custom templates" },
      { id: "f4", text: "Bulk generation" },
    ],
  },
  {
    id: "mod-reports",
    icon: BarChart3,
    title: "Reports & Analytics",
    description: "One reporting layer across academics, finance, transport and HR.",
    features: [
      { id: "f1", text: "Academic & attendance reports" },
      { id: "f2", text: "Fee & payroll reports" },
      { id: "f3", text: "Transport & library reports" },
      { id: "f4", text: "Exportable audit reports" },
    ],
  },
];