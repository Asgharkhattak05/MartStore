/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '290px',
      md: '700px',
      lg: '976px',
      xl: '1440px',
    },
  },
  plugins: [],
}

