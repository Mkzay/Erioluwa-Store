/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        cb: ["'CabinetGrotesk-Regular'"],
      },
      colors: {
        db: "#005DA1",
      },
    },
  },
  plugins: [],
};
