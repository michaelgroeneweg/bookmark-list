/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./src/**/*.{html,js,jsx,tsx,ts}"],
  theme: {
    extend: {
      colors: {
        gray: {
          50: '#FFFFFF',
          100: '#F9F9F9',
          200: '#F8F8F8',
          300: '#EBEDF0',
          400: '#D1D1D1',
          500: '#AEAEAE',
          600: '#8E8E8E',
          700: '#484848',
          800: '#2F2F2F',
          900: '#242424',
        },
      }
    },
  },
  plugins: [],
}