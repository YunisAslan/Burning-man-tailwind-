/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ["./src/**/*.html"],
  theme: {
    extend: {
      colors: {
        myBlue: "#0E1D48"
      },

      fontFamily: {
        anton: ['Anton, sans-serif'],
        open_sans: ['Open_sans, sans-serif']
      },

      screens: {
        mm: '350px'
      }
      

    },
  },
  plugins: [],
}
