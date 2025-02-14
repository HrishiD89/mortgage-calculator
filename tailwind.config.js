/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lime: 'hsl(61, 70%, 52%)',
        lightLime : '#fafae0',
        red: 'hsl(4, 69%, 50%)',
        white: 'hsl(0, 0%, 100%)',
        slate: {
          100: 'hsl(202, 86%, 94%)',
          300: 'hsl(203, 41%, 72%)',
          500: 'hsl(200, 26%, 54%)',
          700: 'hsl(200, 24%, 40%)',
          900: 'hsl(202, 55%, 16%)',
          darkGreen : '#0e2431', 
        },
      },
      fontFamily: {
        'plusJakarta': ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      fontSize: {
        base: '16px',
      },
      fontWeight: {
        medium: 500,
        bold: 700,
      },
      screens: {
        'mobile': '375px',
        'desktop': '1440px',
      },
    },
  },
  plugins: [],
}