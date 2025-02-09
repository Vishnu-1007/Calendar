/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors :{
        customWhite : "#A9B5DF"
      }
    },
  },
  plugins: [],
}