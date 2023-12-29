/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        default: "#fff",
        primary: "#3f97be",
        primary_dark: "#287DA1",
        secondary: "#5ed1c9",
        secondary_dark: "#40AEA7",
        neutral: "#fff",
      },
    },
  },
  plugins: [],
};
