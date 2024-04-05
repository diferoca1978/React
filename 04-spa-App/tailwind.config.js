/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'Sky-blue': '#8ECAE6',
        'Blue-Green': '#219EBC',
        'Prussian-blue': '#023047',
        'Selective-yellow': '#FFB703',
        'UT-orange': '#FB8500',
      }
    },
  },
  plugins: [],
}

