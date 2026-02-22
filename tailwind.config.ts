import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Fresh Light Theme Palette
        "fpo-primary": "#16a34a", // Green 600
        "fpo-yellow": "#d97706",  // Amber 600
        "fpo-orange": "#ea580c",  // Orange 600
        "fpo-dark": "#0f172a",    // Slate 900 (For strong text if needed)
        "fpo-soil": "#f8fafc",    // Slate 50 (Soft light background)
        "fpo-accent": "#22c55e",  // Green 500
        
        "khewra-primary": "#15803D",
        "khewra-dark": "#0F172A",
        "khewra-accent": "#22C55E",
      },
      fontFamily: {
        sans: ["var(--font-poppins)"],
      },
    },
  },
  plugins: [],
};
export default config;