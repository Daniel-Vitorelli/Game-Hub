/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      rotate: {
        '135': '135deg',
      },
      backgroundImage: theme => ({
        'the-worlds-hardest-game' : 'linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7)), url("https://cdn.jogos360.com.br/th/ew/the-worlds-hardest-game-d.jpg?width=200&height=200&aspect_ratio=1:1")'
      }),
    },
  },
  plugins: [],
}

