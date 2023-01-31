/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00040f',
        secondary: '#00f6ff',
        lightWhite: 'rgba(255, 255, 255, 0.7)',
        lightBlue: 'rgba(9, 151, 124, 0.1)'
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif']
      },
    },
    screens: {
      xs: '480px',
      sm: '620px',
      md: '768px',
      lg: '1060px',
      xl: '1200px',
      xxl: '1700px'
    }
  },
  plugins: [],
}