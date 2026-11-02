/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", './public/index.html'
  ],
  theme: {
    extend: {
      colors: {
        'agar-yellow': '#ffdda8',
        'agar-green': '#68d29f',
        'agar-blue': '#3b82f6'
      }
    },
  },
  plugins: [],
}

