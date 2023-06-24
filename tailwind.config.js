/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkGreen: "#6e8b74",
        ceramic: "#f2e6ce",
      },
    },
  },
  plugins: [],
};
