module.exports = {
  purge: ['./src/*{.js}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        biome_dark: {
          DEFAULT: '#030303',
          brighter: '#1a1a1a',
          brightest: '#272728',
        },
        biome_border: {
          DEFAULT: '#343536',
        },
        biome_text: {
          DEFAULT: 'rgb(215, 218, 220)',
          darker: '#818384',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
