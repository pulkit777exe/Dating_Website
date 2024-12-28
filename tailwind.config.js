/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./page/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage : {
        'hingeImage' : "/public/hinge-hero.svg"
      },
      fontFamily : {
        sans : ['Poppins','san-serif'],
      },
    },
  },
  plugins: [],
}