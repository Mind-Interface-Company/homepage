import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: "#F5EFE0",
        tangerine: {
          DEFAULT: "#FF6B35",
          dark: "#E05520",
        },
        aqua: {
          DEFAULT: "#00BCD4",
          dark: "#0097A7",
        },
        canary: "#FFE135",
        navy: "#0D1B2A",
        "teal-deep": "#1C3A3A",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-space-grotesk)", "var(--font-inter)", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 40px rgba(255, 107, 53, 0.15)",
        "glow-aqua": "0 0 40px rgba(0, 188, 212, 0.15)",
      },
      backgroundImage: {
        "hero-gradient":
          "radial-gradient(ellipse 80% 60% at 70% 40%, rgba(0,188,212,0.08) 0%, transparent 60%), radial-gradient(ellipse 60% 80% at 30% 70%, rgba(255,107,53,0.06) 0%, transparent 60%)",
      },
    },
  },
  plugins: [],
};

export default config;
