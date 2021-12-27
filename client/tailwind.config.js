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
        padding: '1rem',
      },
    },
    backgroundColor: () => ({
      primary: '#ffffff',
      secondary: '#000000',
      accent: '#f6f6f6',
    }),
    colors: {
      primary: '#000000',
      secondary: '#ffffff',
    },
    borderColor: () => ({
      primary: '#e2e2e2',
      transparent: 'transparent',
    })
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
