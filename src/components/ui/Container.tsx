import { cn } from "@/lib/utils";

type ContainerSize = "sm" | "md" | "lg" | "full";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: ContainerSize;
  as?: "div" | "section" | "article" | "main" | "header" | "footer";
}

const sizeStyles: Record<ContainerSize, string> = {
  sm: "max-w-3xl",  // 768px
  md: "max-w-5xl",  // 1024px
  lg: "max-w-[1440px]",  // 1440px - Increased from 1280px
  full: "max-w-[1600px]", // 1600px - Increased from 1440px
};

export function Container({
  children,
  className,
  size = "lg", // Defaults strictly to max-w-7xl for 100% layout consistency
  as: As = "div",
}: ContainerProps) {
  return (
    <As
      className={cn(
        // 1. Centering & Full Width
        "mx-auto w-full",
        // 2. Strict Layout Width (Default: max-w-7xl / 1280px)
        sizeStyles[size],
        // 3. Responsive Horizontal Padding Scale
        "px-4 md:px-6 lg:px-8",
        className
      )}
    >
      {children}
    </As>
  );
}