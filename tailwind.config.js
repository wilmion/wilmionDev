module.exports = {
  purge: [
    './public/index.html',
    './src/**/*.ts',
    './src/styles/sass/**/*.scss'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#FAC71E',
        secondary: '#C79F18',
        terciary: '#332C24'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
