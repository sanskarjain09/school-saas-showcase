import { cn } from "@/lib/utils";
import type { Accent } from "@/lib/theme";
import { accentBg, accentText, accentBorder } from "@/lib/theme";

interface TagProps {
  children: React.ReactNode;
  accent?: Accent;
  className?: string;
}

export function Tag({ children, accent = "blue", className }: TagProps) {
  return (
    <span
      className={cn(
        // 1. Layout & Shape (rounded-md keeps it distinct from rounded-full Pills)
        "inline-flex items-center justify-center rounded-md border px-2.5 py-1",
        
        // 2. Semantic Typography (Upgraded from 12px to 14px for better legibility)
        "text-caption font-medium",
        
        // 3. Dynamic Theme Tokens (Perfectly mapped to your light theme config)
        accentBg[accent],
        accentText[accent],
        accentBorder[accent],
        
        className
      )}
    >
      {children}
    </span>
  );
}