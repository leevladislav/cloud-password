module.exports = {
  prefix: '',
  purge: {
    enabled: false,
    content: [
      './src/**/*.{html,ts}',
    ]
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      container: {
        center: true,
      },
    },
    backgroundColor: () => ({
      'primary': '#f5f8fc',
      'secondary': '#e5f5f9',
    })
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
