import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Custom FPO Earthy Palette
        "fpo-primary": "#2d5a27", // Deep Forest Green
        "fpo-dark": "#1a2e1a",    // Dark Moss
        "fpo-accent": "#8db600",  // Apple Green
        "fpo-soil": "#f4f1ea",    // Off-white/Cream
        "fpo-light": "#e8f5e9",   // Pale Leaf
        // Khewra Specifics
        "khewra-primary": "#1b4332",
        "khewra-dark": "#081c15",
        "khewra-accent": "#52b788",
      },
      fontFamily: {
        sans: ["var(--font-poppins)"],
      },
    },
  },
  plugins: [],
};
export default config;