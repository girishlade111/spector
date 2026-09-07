/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        spector: {
          black: "#0A0A0A",
          dark: "#111111",
          red: "#FF3333",
          grey: "#888888",
          light: "#F5F5F5",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        condensed: ["Oswald", "Inter", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        tightest: "-0.06em",
        tighter: "-0.04em",
        tight: "-0.02em",
      },
      maxWidth: {
        container: "1280px",
      },
    },
  },
  plugins: [],
};
