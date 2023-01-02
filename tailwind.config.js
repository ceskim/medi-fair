/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: {
          1: '#EC4141',
          2: '#407EF8',
          3: '#AAD86F',
        }
      }
    },
  },
  plugins: [],
}
