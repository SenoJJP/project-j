/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary': '#f6edce',
        'secondary': '#3a170d',
        'light-brown-1': '#dba75b',
        'light-brown-2': '#c3883d',
        'dark-brown': '#5c2f27',
      },
    },
  },
  plugins: [
    plugin(({addBase, theme}) => {
      addBase({
        'html': {color: theme('colors.primary')},
      });
    })
  ],
}

