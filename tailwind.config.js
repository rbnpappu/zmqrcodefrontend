/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': '340px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        customBlue: '#1D91AA',
      },
      fontFamily: {
        raleway: ['Raleway', 'sans-serif'],
      },
    }
  },
  plugins: [],
}
