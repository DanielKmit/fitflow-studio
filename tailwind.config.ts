import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        sage: {
          DEFAULT: "#2D5A4A",
          light: "#3A7460",
          dark: "#1E3D32",
        },
        mint: {
          DEFAULT: "#A8C5B8",
          light: "#C4D9CF",
          dark: "#8FB3A1",
        },
        gold: {
          DEFAULT: "#E8B86D",
          light: "#F0CC8E",
          dark: "#D4A04E",
        },
        cream: {
          DEFAULT: "#F9F7F4",
          dark: "#EDE9E3",
        },
      },
    },
  },
  plugins: [],
};

export default config;
