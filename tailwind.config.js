// tailwind.config.js

const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#8E7CC3',
          50: '#F4F1FA',
          100: '#E9E3F5',
          200: '#D3C7EB',
          300: '#BDABE1',
          400: '#A694D7',
          500: '#8E7CC3',
          600: '#7259B5',
          700: '#5B4496',
          800: '#443273',
          900: '#2D2150'
        },
        secondary: {
          DEFAULT: '#C3A47C',
          50: '#FAF6F1',
          100: '#F5EDE3',
          200: '#EBDBC7',
          300: '#E1C9AB',
          400: '#D7B78F',
          500: '#C3A47C',
          600: '#B58B59',
          700: '#967144',
          800: '#735633',
          900: '#503C22'
        },
        neutral: {
          50: '#F8F7FA',
          100: '#F1EFF5',
          200: '#E3E0EB',
          300: '#D5D1E1',
          400: '#C7C2D7',
          500: '#B9B3CD',
          600: '#9A91B8',
          700: '#7B6FA3',
          800: '#5D5280',
          900: '#3E365D'
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 6px -1px rgba(142, 124, 195, 0.1), 0 2px 4px -1px rgba(142, 124, 195, 0.06)',
        'hover': '0 10px 15px -3px rgba(142, 124, 195, 0.1), 0 4px 6px -2px rgba(142, 124, 195, 0.05)',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '2rem',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}