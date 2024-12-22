/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'primary': ['Open Sans', 'sans-serif'],
        'secondary': ['Roboto', 'sans-serif'],
        'tertiary': ['Lato', 'sans-serif'],
        'heading': ['Montserrat', 'sans-serif'],
        'body': ['Merriweather', 'serif'],
      },
      colors: {
        primary: 'rgba(79, 70, 229, 1.1)',
      },
    },
  },
  plugins: [],
}
