/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mirage: "#1f1d2b",
        charade: "#262837",
        terracotta: "#ec7c6a",
      },
    },
  },
  plugins: [],
};
