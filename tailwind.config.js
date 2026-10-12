/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx}', './components/**/*.{js,jsx}', './lib/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: { brick: '#FF6600', brickdark: '#CC5200', ink: '#111111', paper: '#FFFFFF', sand: '#F5F3EF' },
      fontFamily: { sans: ['"Avenir Next"', '"Segoe UI"', '"Helvetica Neue"', 'Arial', 'sans-serif'] },
    },
  },
  plugins: [],
};
