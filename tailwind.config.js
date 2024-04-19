/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        muli: ['Muli', 'sans-serif'],
      },
      boxShadow: {
        "3xl": "0 4px 13px rgba(0, 0, 0, .05)",
      },
      width: {
        "18": "calc(100% - 100px)",
      },
      screens: {
        'sm': '768px', 
        // i.e the screen starts from 768px and extends to 991px
        'md': '992px',
        // i.e the screen starts from 992px and extends to 1024px
        'lg': '1025px',
        // i.e the screen starts from 1025px and extends to 1280px
        'xl': '1281px',
        // i.e the screen starts from 1281px and extends to 1299px
        '2xl': '1300px',
        // i.e the screen starts from 1300px
      },
    },
  },
  plugins: []
}