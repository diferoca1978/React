/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        primary:["Pragati Narrow", "sans-serif"]
      }
    },
  },
  plugins: [
    require('tailwindcss-animated'),
    "prettier-plugin-tailwindcss"
  ],
}

