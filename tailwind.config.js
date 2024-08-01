/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      fontFamily: {
        sans: "Inter",
      },
      boxShadow: {
        shape:
          "0px 8px 8px rgba(0,0,0,0.1), 0px 4px 4px rgba(0,0,0,0.1), 0px 2px 2px rgba(0,0,0,0.1), 0px 0px 0px 1px rgba(0,0,0,0.1)",
      },
      colors: {
        line: {
          300: "#16a34a",
          400: "#4ade80",
          500: "#047857",
          950: "#09090b",
          800: "#059669",
          700: "#34d399",
        },
      },
    },
  },
  plugins: [],
};
