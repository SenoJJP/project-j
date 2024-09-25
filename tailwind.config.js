/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-text': '#3a1d2a',
        'background': '#fffcf5',
        'primary': '#f8db91',
        'secondary': '#ade0ff',
        'accent': '#f3a477',
      },
    },
  },
  plugins: [
    plugin(({addBase, theme}) => {
      addBase({
        'html': {color: theme('colors.primary-text')},
        'h1': {'font-size': '6rem', 'line-height': 1, color:theme('colors.accent')}
      });
    })
  ],
}

