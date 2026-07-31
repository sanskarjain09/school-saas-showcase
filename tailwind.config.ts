import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      // 1. COLOR SYSTEM (Strict Palette)
      colors: {
        background: "#FFFFFF", // Primary App Background
        surface: "#FAFAFA", // Secondary/Section Background
        card: "#FFFFFF", // Card Background
        border: "#E5E7EB", // Standard Border
        "border-hover": "#D1D5DB", // Hover Border
        foreground: "#0F172A", // Primary Text
        muted: "#6B7280", // Secondary/Muted Text
        accent: {
          DEFAULT: "#2563EB", // Primary Brand Color
          hover: "#1D4ED8",
          purple: "#7C3AED",
          cyan: "#0891B2",
        },
      },

      // 2. TYPOGRAPHY SCALE (No random text sizes)
      fontSize: {
        hero: ["72px", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        section: ["56px", { lineHeight: "1.2", letterSpacing: "-0.02em" }],
        card: ["32px", { lineHeight: "1.3", letterSpacing: "-0.01em" }],
        body: ["18px", { lineHeight: "1.6" }],
        small: ["16px", { lineHeight: "1.5" }],
        caption: ["14px", { lineHeight: "1.5" }],
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        sans: ["var(--font-sans)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },

      // 3. BORDER RADIUS (Strict System)
      borderRadius: {
        button: "14px",
        input: "14px",
        card: "24px",
        modal: "28px",
      },

      // 4. SHADOW SYSTEM (Consistent Depth)
      boxShadow: {
        "card-sm": "0 2px 8px -2px rgba(0, 0, 0, 0.05)",
        "card-md": "0 8px 24px -4px rgba(0, 0, 0, 0.08)",
        "card-lg": "0 20px 40px -8px rgba(0, 0, 0, 0.12)",
        glow: "0 0 40px -10px rgba(37,99,235,0.15)",
        "glow-purple": "0 0 40px -10px rgba(124,58,237,0.15)",
        "glow-cyan": "0 0 40px -10px rgba(8,145,178,0.15)",
      },

      // 5. SPACING SYSTEM (Semantic spacing for world-class rhythm)
      spacing: {
        "section-lg": "120px", // Section top/bottom
        "section-sm": "96px",  // Smaller section gaps
        "content-lg": "64px",  // E.g., Heading to grid
        "content-md": "32px",  // E.g., Title to Description / Card Gap
        "content-sm": "24px",  // Content gaps
        "content-xs": "20px",  // Tight gaps
      },

      // 6. ANIMATIONS & BACKGROUNDS
      animation: {
        marquee: "marquee 8s linear infinite",
        float: "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s ease-in-out infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
      },
      backgroundImage: {
        "aurora-1": "radial-gradient(60% 50% at 20% 20%, rgba(37,99,235,0.08) 0%, rgba(37,99,235,0) 70%)",
        "aurora-2": "radial-gradient(50% 50% at 80% 30%, rgba(124,58,237,0.08) 0%, rgba(124,58,237,0) 70%)",
        "aurora-3": "radial-gradient(45% 45% at 50% 90%, rgba(8,145,178,0.08) 0%, rgba(8,145,178,0) 70%)",
        "grid-lines": "linear-gradient(rgba(229,231,235,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(229,231,235,0.4) 1px, transparent 1px)", // Updated grid to match new border color
        "gradient-blue-purple": "linear-gradient(135deg, #2563EB 0%, #7C3AED 100%)",
        "gradient-purple-cyan": "linear-gradient(135deg, #7C3AED 0%, #0891B2 100%)",
        "gradient-text": "linear-gradient(90deg, #2563EB 0%, #7C3AED 50%, #0891B2 100%)",
      },
      backgroundSize: {
        "grid-size": "48px 48px",
      },
    },
  },
  plugins: [],
};

export default config;