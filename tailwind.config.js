/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
      extend: {
        fontFamily: {
          rajdhani: ['Rajdhani', 'sans-serif']
        },
        colors: {
          'app-primary': '#F75049',
          'app-secondary': '#5EF6FF',
          'app-special': '#F8EF00'
        }
      },
    },
    plugins: [],
  }