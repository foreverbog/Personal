/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      title: ["Sulphur Point", "sans-serif"],
    },

    extend: {
      screens: {
        xs: "320px",
      },
    },
  },
  plugins: [],
};
