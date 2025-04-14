import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        orange: "var(--orange)",
        white: "var(--white)",
        black: "var(--black)",
        background: "var(--black)",
        foreground: "var(--white)",
      },
      fontFamily: {
        primary: "var(--fonte-poppins)",
      },
    },
  },
  plugins: [],
} satisfies Config;
