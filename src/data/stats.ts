import type { StatItem } from "@/types";

export const statsData: StatItem[] = [
  { id: "stat-schools", icon: "School", value: 1200, suffix: "+", label: "Schools & institutions" },
  { id: "stat-students", icon: "Users", value: 850, suffix: "k+", label: "Students managed" },
  { id: "stat-features", icon: "Layers", value: 250, suffix: "+", label: "Platform features" },
  { id: "stat-uptime", icon: "ShieldCheck", value: 99, suffix: ".9%", label: "Uptime SLA" },
];
