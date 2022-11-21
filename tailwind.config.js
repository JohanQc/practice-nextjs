/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'yellow': "#F2B33D",
        'black': '#0D0D0D',
        'white': '#F2F2F2',
        'orange': '#A65D03',
      }
    },
  },
  plugins: [],
}
