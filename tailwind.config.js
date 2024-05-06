/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./public/*.html",
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    // fontSize: {
    //   'xs': '.75rem',     // Extra Small
    //   'sm': '.875rem',    // Small
    //   'base': '1rem',     // Base
    //   'lg': '1.125rem',   // Large
    //   'xl': '1.25rem',    // Extra Large
    //   '2xl': '1.5rem',    // 2 Extra Large
    //   '3xl': '1.875rem',  // 3 Extra Large
    //   '4xl': '2.25rem',   // 4 Extra Large
    //   '5xl': '3rem',      // 5 Extra Large
    //   '6xl': '4rem',      // 6 Extra Large
    //   '7xl': '5rem',      // 7 Extra Large
    //   'root': '12px',
    // },
    extend: {
      textColor: {
        skin: {
          purpleColor: "#581c87",
        }
      },
      width: {
        '4/8': '48%',
        '5/2': '52%',
        '3/3': 'calc(33.33% - 13px)',
      },
    },
  },
  plugins: [],
}

