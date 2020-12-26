const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: [
    './src/components/**/*.js',
    './src/components/**/*.scss',
    './src/styles/*.js',
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    extend: {
      fontFamily: {
        body: ['Raleway', ...defaultTheme.fontFamily.sans],
        sans: ['Raleway', ...defaultTheme.fontFamily.sans],
        serif: ['Raleway', ...defaultTheme.fontFamily.serif],
      },
      fontSize: {
        xxs: '0.6875rem',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            a: {
              textDecoration: 'none',
              cursor: 'pointer',
            },
          },
        },
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
