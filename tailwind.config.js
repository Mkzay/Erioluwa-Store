/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        cb: ["'CabinetGrotesk'", "sans-serif"],
        hn: ["'HelveticaNeue'", "sans-serif"],
      },
      colors: {
        db: "#005DA1",
      },
    },
  },
  plugins: [],
};
