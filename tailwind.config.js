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
      colors: {
        primary: {
          light: "#F5F5F5",
          dark: "#1b212c",
        },
        secondary: {
          light: "#9333ea",
          dark: "#",
        },
        accent: {
          light: "#3b82f6 ",
          dark: "#",
        },
      },
    },
  },
  plugins: [],
};
