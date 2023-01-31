const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      screens: {
        tall: { raw: "(min-height: 500px)" },
      },
      fontFamily: {
        exo: ["var(--font-exo)", ...defaultTheme.fontFamily.sans],
        maven: ["var(--font-maven)", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        backgroundy: "#1d1d20",
      },
      animation: {
        blob: "blob 7s infinite",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "tranlate(0px, 0px) scale(1)",
          },
        },
      },
    },
  },
  plugins: [
    // ...
    require("tailwind-scrollbar"),
  ],
};
