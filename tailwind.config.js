const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
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
        wiggle: "wiggle 1s  infinite",
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
        wiggle: {
          "0%, 100%": { transform: "translate(0px, 0px) scale(1)" },
          "50%": { transform: "translate(20px, 0px) scale(0.95)" },
        },
      },
    },
  },
  daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
  },
  // daisyui: {
  //   themes: [
  //     {
  //       mytheme: {
  //         primary: "#fedbb0",

  //         secondary: "#f0abfc",

  //         accent: "#67CBA0",

  //         neutral: "#1d1d20",

  //         "base-100": "#fffded",

  //         info: "#85edf9",

  //         success: "#b9f4ce",

  //         warning: "#f97316",

  //         error: "#f87171",
  //       },
  //     },
  //   ],
  // },
  plugins: [
    // ...
    require("tailwind-scrollbar"),
    require("prettier-plugin-tailwindcss"),
    require("daisyui"),
    require("@tailwindcss/typography"),
  ],
};
