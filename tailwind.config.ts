import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
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
