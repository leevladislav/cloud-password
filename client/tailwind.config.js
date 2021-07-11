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
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
