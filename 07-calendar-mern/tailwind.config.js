/** @type {import('tailwindcss').Config} */

import { nextui } from "@nextui-org/react";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        blueDark: {
          50: '#e0efff',
          100: '#b5d4fd',
          200: '#88bcfa',
          300: '#5ba8f6',
          400: '#3996f4',
          500: '#2a85da',
          600: '#1d6baa',
          700: '#11507a',
          800: '#02324a',
          900: '#00101c',
        },

        blueLight : {
          50: '#e1f5ff',
          100: '#bde1f3',
          200: '#97cee8',
          300: '#6fb2de',
          400: '#4a94d3',
          500: '#3372ba',
          600: '#245191',
          700: '#173468',
          800: '#071841',
          900: '#00051a',
        },

        yellow: {
          50: '#fff8da',
          100: '#ffe9ad',
          200: '#ffdb7d',
          300: '#ffcc4b',
          400: '#ffbd1a',
          500: '#e6a400',
          600: '#b37f00',
          700: '#805b00',
          800: '#4e3700',
          900: '#1e1100',
        },

        orange: {
          50: '#fff8da',
          100: '#ffe5ae',
          200: '#ffd07d',
          300: '#ffb74c',
          400: '#ff9b1a',
          500: '#e67a00',
          600: '#b36b00',
          700: '#815500',
          800: '#4f3800',
          900: '#1f1400',
        }

      }
    },
  },
  darkMode: "class",
  plugins: [nextui()]
}

