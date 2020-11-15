module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      colors: {
          'blue-primary': '#0823E5',
          'blue-lighter': '#68B1E2',
          'orange-primary': '#FFBA3B',
          'orange-lighter': '#FDD531',
          'pink-primary': '#f3bca8',
          'gray-primary': '#F0F0F0',
      },
      rotate: {
        '26': '26deg',
        '-26': '-26deg',
      },
      scale: {
        '70': '.7',
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'ubuntu': ['Ubuntu', 'sans-serif'],
      }
    },
  },
  variants: {},
  plugins: [],
}
