import { cn } from "@/lib/utils";

interface AnimatedBorderProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Wraps content with a subtle conic-gradient border that becomes visible on hover,
 * evoking a "premium" card treatment without extra JS.
 */
export function AnimatedBorder({ children, className }: AnimatedBorderProps) {
  return (
    <div
      className={cn(
        // 1. Used 'rounded-card' from our new design system tokens
        "group relative p-px rounded-card overflow-hidden",
        // 2. -inset-[100%] is needed if we want the gradient to spin smoothly without cutting corners
        "before:absolute before:-inset-[100%] before:opacity-0 before:transition-opacity before:duration-500",
        // 3. MAGIC HERE: Using theme() to pull colors directly from tailwind.config.ts!
        "before:bg-[conic-gradient(from_0deg,theme(colors.accent.DEFAULT),theme(colors.accent.purple),theme(colors.accent.cyan),theme(colors.accent.DEFAULT))] before:content-['']",
        // 4. Premium touch: Added a slow spin animation on hover
        "hover:before:opacity-100 hover:before:animate-[spin_4s_linear_infinite]",
        className
      )}
    >
      {/* 5. Used bg-card instead of bg-surface, and added our custom shadow tokens */}
      <div className="relative h-full w-full rounded-[23px] bg-card shadow-card-sm transition-shadow duration-500 group-hover:shadow-card-md">
        {children}
      </div>
    </div>
  );
}