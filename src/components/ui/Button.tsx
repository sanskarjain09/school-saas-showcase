import Link from "next/link";
import { ArrowRight, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "md" | "lg";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: LucideIcon;
  showArrow?: boolean;
  className?: string;
  onClick?: () => void;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    // Utilizing config gradients and shadows. Removed hardcoded rgba.
    "bg-gradient-blue-purple text-white shadow-glow hover:brightness-110 hover:shadow-glow-purple",
  secondary:
    // Added shadow-card-sm and proper surface hover tokens
    "border border-border bg-surface/80 text-foreground backdrop-blur-sm shadow-card-sm hover:border-border-hover hover:bg-surface",
  ghost: 
    // True ghost buttons get a subtle background on hover for tactile feedback
    "text-muted hover:text-foreground hover:bg-surface/60",
};

const sizeStyles: Record<ButtonSize, string> = {
  md: "h-11 px-6 text-caption", // 44px height, exact padding, 14px text
  lg: "h-[52px] px-8 text-small", // 52px height, wider padding, 16px text
};

export function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  icon: Icon,
  showArrow = false,
  className,
  onClick,
}: ButtonProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        // 1. Layout & Radius (Using our rounded-button 14px token)
        "group relative inline-flex items-center justify-center gap-2.5 rounded-button font-medium",
        // 2. Micro-interactions (Hover lift & premium active press state)
        "transition-all duration-300 ease-out will-change-transform hover:-translate-y-0.5 active:scale-[0.98]",
        // 3. Focus state is handled by globals.css, just ensuring outline is clean
        "outline-none",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
    >
      {Icon ? (
        <Icon 
          className={cn("shrink-0", size === "lg" ? "h-5 w-5" : "h-4 w-4")} 
          aria-hidden 
        />
      ) : null}
      
      <span>{children}</span>
      
      {showArrow ? (
        <ArrowRight 
          className={cn(
            "shrink-0 transition-transform duration-300 group-hover:translate-x-1",
            size === "lg" ? "h-5 w-5" : "h-4 w-4"
          )} 
          aria-hidden 
        />
      ) : null}
    </Link>
  );
}