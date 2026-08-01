import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Same brand palette as the Clasche app (kept in sync manually --
        // these two projects are separate repos on purpose).
        primary: {
          50: "#eef4ff",
          100: "#dbe6fe",
          200: "#bfd4fe",
          300: "#93b6fd",
          400: "#608ffa",
          500: "#3b6ef5",
          600: "#284fea",
          700: "#213dd6",
          800: "#2233ac",
          900: "#212f88",
        },
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "'Hiragino Sans'",
          "'Hiragino Kaku Gothic ProN'",
          "'Noto Sans JP'",
          "'Yu Gothic'",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};

export default config;
