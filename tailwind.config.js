/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      transitionProperty: {
        width: 'width',
      },
      width: {
        30: '7.5rem',
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        lato: ['Lato', 'sans-serif'],
        solway: ['Solway', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
