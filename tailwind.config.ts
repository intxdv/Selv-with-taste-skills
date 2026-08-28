import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "#0A0A0B",
        foreground: "#F4F3EE",
        surface: {
          50: "#18181C",
          100: "#141416",
          200: "#101012",
          300: "#0D0D0E",
          DEFAULT: "#111114",
        },
        muted: {
          light: "#A1A1AA",
          DEFAULT: "#71717A",
          dark: "#3F3F46",
        },
        accent: {
          DEFAULT: "#D4FF3F", // Electric Lime
          glow: "rgba(212, 255, 63, 0.15)",
          hover: "#E2FF66",
          dark: "#A3D900",
        },
        border: {
          subtle: "rgba(244, 243, 238, 0.07)",
          light: "rgba(244, 243, 238, 0.15)",
          accent: "rgba(212, 255, 63, 0.3)",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "Inter", "sans-serif"],
        display: ["var(--font-syne)", "var(--font-space-grotesk)", "sans-serif"],
        mono: ["var(--font-geist-mono)", "JetBrains Mono", "monospace"],
      },
      animation: {
        "marquee-slow": "marquee 35s linear infinite",
        "marquee-fast": "marquee 20s linear infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
        "scan": "scan 8s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        scan: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(1000%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
