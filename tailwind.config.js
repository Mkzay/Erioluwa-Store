/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        cb: ["'CabinetGrotesk'", "sans-serif"],
        hn: ["'HelveticaNeue'", "sans-serif"],
        tp: ["'TrajanPro'", "sans-serif"],
      },
      colors: {
        db: "#005DA1",
        cg1: "#FFFFFF",
        cg2: "#F6F6F6",
      },
    },
  },
  plugins: [],
};
