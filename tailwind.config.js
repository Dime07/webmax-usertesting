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
        },
        purple: {
          light: "#FA3ECD",
          default: "#5E32E0"
        }
      },
      screens: {
        'sm': '360px',
        // => @media (min-width: 360px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
