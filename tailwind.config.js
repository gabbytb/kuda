/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {    
        "primary-color": "var(--primaryColor)",
        "light-blue-color": "var(--lightBlueColor)",
        "success-color": "var(--successColor)",
        "negative-color": "var(--negativeColor)",
        "color": "var(--textColor)",
        "off-white": "var(--offWhite)",
        "off-white-trans": "var(--offWhiteTrans)",
        "border-off": "var(--borderOff)",
        "off-text": "var(--offText)",
        "bg-offset": "var(--bgOffset)",
        "placeHolder": "var(--placeHolder)",
        "off-blue": "var(--offBlue)",
        "boxShadow": "var(--boxShadow)",
        "offBlue": "var(--offBlueTran)",
        "primaryAlt": "var(--primaryAlt)",
        "offGreen": "var(--offGreen)",
        "cta-offBlue": "var(--ctaOffBlue)",
        "overlay": "var(--overlay)",
        "success-color-trans": "var(--successColorTrans)",
      },
      fontFamily: {
        custom: ['Muli'],
      },
      boxShadow: {
        "3xl": "0 4px 13px rgba(0, 0, 0, .05)",
      }
    },
  },
  plugins: [],
}