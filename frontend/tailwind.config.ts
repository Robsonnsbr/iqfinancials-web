/* cSpell:disable */
import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.2s ease-in 0.3s forwards",
      },
      screens: {
        "3xl": "1920px",
      },

      fontFamily: {
        raleway: ["var(--font-raleway)"],
        openSans: ["var(--font-open-sans)"],
        poppins: ["var(--font-poppins)"],
      },
      colors: {
        background: "var(--color-bg)",

        dark: "var(--color-dark)",
        "dark-blue": "var(--color-dark-blue)",
        "mid-dark": "var(--color-mid-dark)",
        accent: "var(--color-accent)",
        light: "var(--color-light)",
        red: "var(--color-red)",
        success: "var(--color-success)",
        blue: "var(--color-blue)",
        "blue-light": "var(--color-blue-light)",
        green: "var(--color-green)",
        "light-green": "var(--color-light-green)",
        "extra-light-green": "var(--color-extra-light-green)",
      },
      backgroundImage: {
        "parallax-hero-section": 'url("/background/hero-section.webp")',
        "insights-section": 'url("/background/insights-section.webp")',
        "parallax-customer-section": 'url("/background/customer-section.webp")',
        "instructions-section": 'url("/background/instructions-section.webp")',
        "parallax-form-section": 'url("/background/form-section.webp")',
        "background-form": 'url("/background/background-form.webp")',
        "custom-gradient-right":
          "linear-gradient(to right, var(--color-blue) 90%, var(--color-red) 90%)",
        "custom-gradient-left":
          "linear-gradient(to left, var(--color-blue) 90%, var(--color-red) 90%)",
      },
    },
  },
  plugins: [],
} satisfies Config;
