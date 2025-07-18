/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Onest', 'sans-serif'], // Sets Onest as the default sans-serif font
      },
    },
  },
  plugins: [],
}