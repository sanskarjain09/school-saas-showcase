import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
}

export function GlassCard({ children, className }: GlassCardProps) {
  return (
    <div
      className={cn(
        // 1. Strict Design Tokens (24px radius)
        "rounded-card",
        // 2. Light Theme Glassmorphism (Frosted glass effect)
        "bg-white/60 backdrop-blur-xl",
        // 3. Premium Glass Reflection Border & Depth
        "border border-white/60 shadow-card-lg",
        // 4. Semantic Spacing (Consistent with normal Cards)
        "p-content-sm md:p-content-md",
        className
      )}
    >
      {children}
    </div>
  );
}