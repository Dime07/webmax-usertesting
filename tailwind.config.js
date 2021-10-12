module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        peach :{
          light : "#FEF1E6",
          default : "#FF8D50"
        },
        blue: {
          dark : "#150D47"
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
