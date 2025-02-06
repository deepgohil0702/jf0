/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        geist: ['Geist Sans', 'sans-serif'],
      },
      colors: {
        // Add your custom colors here
        'background': '#fdfaf4', // Example red color
        'darkbackground': '#f0eee6', // Example red color
        'buttoncolour': '#c96442', // Example red color
        'progressbar': '#5A1B06', // Example red color
        'secondary': {
          100: '#E6E6E6',
          200: '#CCCCCC',
          300: '#B3B3B3',
          400: '#999999',
          500: '#808080', // Example gray with different shades
        },
        'custom-blue': '#1E90FF', // Example blue color
      }
    },
  },
  plugins: [],
}