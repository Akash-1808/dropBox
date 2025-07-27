// tailwind.config.js
const {heroui} = require("@heroui/theme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/components/**/*.js"
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [heroui({
    themes: {
      light: {
        colors: {
          default: {
            50: "oklch(0.98 0.001 286.375)",
            100: "oklch(0.967 0.001 286.375)",
            200: "oklch(0.92 0.004 286.32)",
            300: "oklch(0.85 0.007 285.85)",
            400: "oklch(0.705 0.015 286.067)",
            500: "oklch(0.552 0.016 285.938)",
            600: "oklch(0.398 0.07 227.392)",
            700: "oklch(0.35 0.06 227.4)",
            800: "oklch(0.274 0.006 286.033)",
            900: "oklch(0.21 0.006 285.885)",
            950: "oklch(0.141 0.005 285.823)",
            foreground: "oklch(0.141 0.005 285.823)",
            DEFAULT: "oklch(0.398 0.07 227.392)"
          }
        }
      },
      dark: {
        colors: {
          default: {
            50: "oklch(0.141 0.005 285.823)",
            100: "oklch(0.21 0.006 285.885)",
            200: "oklch(0.274 0.006 286.033)",
            300: "oklch(0.35 0.06 227.4)",
            400: "oklch(0.398 0.07 227.392)",
            500: "oklch(0.552 0.016 285.938)",
            600: "oklch(0.705 0.015 286.067)",
            700: "oklch(0.85 0.007 285.85)",
            800: "oklch(0.92 0.004 286.32)",
            900: "oklch(0.967 0.001 286.375)",
            950: "oklch(0.98 0.001 286.375)",
            foreground: "oklch(0.985 0 0)",
            DEFAULT: "oklch(0.398 0.07 227.392)"
          }
        }
      }
    }
  })],
};