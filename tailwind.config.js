import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "wa-blue": "#184689",
        "mex-red": "#C8102E",
        "mex-green": "#006341",
        "fra-red": "#ED2939",
        "fra-blue": "#002654",
        "ger-red": "#DD0000",
        "ger-yellow": "#FFCC00",
      },
    },
  },
  plugins: [],
};
