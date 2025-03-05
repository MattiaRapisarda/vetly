import { mauve, violet } from "@radix-ui/colors";

/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // Include tutti i file JSX e TSX
  theme: {
    extend: {
      colors: {
        mauve: Object.fromEntries(
          Object.entries(mauve).map(([key, value]) => [key.replace("_", "-"), value])
        ),
        violet: Object.fromEntries(
          Object.entries(violet).map(([key, value]) => [key.replace("_", "-"), value])
        ),
      },
      keyframes: {
        slideDown: {
          from: { height: "0px" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        slideUp: {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0px" },
        },
      },
      animation: {
        slideDown: "slideDown 300ms cubic-bezier(0.87, 0, 0.13, 1)",
        slideUp: "slideUp 300ms cubic-bezier(0.87, 0, 0.13, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
