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
      primary: '#f5f8fc',
      secondary: '#e5f5f9',
    }),
    colors: {
      primary: '#599de4',
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
