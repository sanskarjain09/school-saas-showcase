import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "article" | "li";
  interactive?: boolean; // Premium touch: Toggle hover physics for clickable cards
}

export function Card({ 
  children, 
  className, 
  as: As = "div",
  interactive = false 
}: CardProps) {
  return (
    <As
      className={cn(
        // 1. Strict Design Tokens (24px radius, #FFFFFF background, standard border)
        "rounded-card bg-card border border-border",
        // 2. Semantic Spacing (24px padding on mobile, 32px on larger screens)
        "p-content-sm md:p-content-md",
        // 3. Base Shadow (Using our custom small shadow token)
        "shadow-card-sm",
        // 4. Smooth base transitions
        "transition-all duration-300 ease-out will-change-transform",
        // 5. Interactive Physics (Only applies if the card is meant to be hovered/clicked)
        interactive && "hover:-translate-y-1 hover:shadow-card-md hover:border-border-hover",
        className
      )}
    >
      {children}
    </As>
  );
}