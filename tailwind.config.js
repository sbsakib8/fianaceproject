/** @type {import('tailwindcss').Config} */
const {nextui} = require("@nextui-org/react");

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'body': ["M PLUS Rounded 1c", 'sans-serif'],
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '3rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      colors:{
        primary: '#772AB3',
        secondary: '#ADB2B1',
        boxColor: '#27322F3D',
        
      },
      // background: ;

      backgroundImage: {
        'gradient-text': "linear-gradient(90deg, #772AB3 0%, #C753FE 100%)",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()]
}

