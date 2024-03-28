/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        nunitoLight: ['Nunito-Light', 'sans-serif'],
        nunitoRegular: ['Nunito-Regular', 'sans-serif'],
      },
      fontSize: {
        lg: '18px',
      },
    },
  },
  plugins: [],
}

