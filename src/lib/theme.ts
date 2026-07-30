export type Accent = "blue" | "purple" | "cyan";

export const accentText: Record<Accent, string> = {
  blue: "text-accent-blue",
  purple: "text-accent-purple",
  cyan: "text-accent-cyan",
};

export const accentBg: Record<Accent, string> = {
  blue: "bg-accent-blue/10",
  purple: "bg-accent-purple/10",
  cyan: "bg-accent-cyan/10",
};

export const accentBorder: Record<Accent, string> = {
  blue: "border-accent-blue/30",
  purple: "border-accent-purple/30",
  cyan: "border-accent-cyan/30",
};

export const accentGlow: Record<Accent, string> = {
  blue: "shadow-glow",
  purple: "shadow-glow-purple",
  cyan: "shadow-glow",
};

export const accentGradient: Record<Accent, string> = {
  blue: "from-accent-blue to-accent-purple",
  purple: "from-accent-purple to-accent-cyan",
  cyan: "from-accent-cyan to-accent-blue",
};
