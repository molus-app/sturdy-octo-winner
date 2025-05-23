/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./script.js"
  ],
  theme: {
    extend: {
      colors: {
        'space-blue': '#000814',
        'space-blue-light': '#001d3d',
        'accent-yellow': '#ffd60a',
        'text-white': '#ffffff',
      },
      fontFamily: {
        'mono': ['Courier New', 'Courier', 'monospace'],
      },
      animation: {
        'blink': 'blink 1s infinite',
        'twinkle': 'twinkle ease-in-out infinite',
      },
    },
  },
  plugins: [],
} 