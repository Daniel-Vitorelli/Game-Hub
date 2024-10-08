/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      rotate: {
        '135': '135deg',
      },
      backgroundImage: {
        'the-worlds-hardest-game': 'linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7)), url("https://cdn.jogos360.com.br/th/ew/the-worlds-hardest-game-d.jpg?width=200&height=200&aspect_ratio=1:1")',
        'fireboy-watergirl-1': 'linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7)), url("https://cdn.jogos360.com.br/fi/re/fireboy-e-watergirl-in-the-forest-temple-d.jpg?width=200&height=200&aspect_ratio=1:1")',
        'bad-ice-cream': 'linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7)), url("https://cdn.jogos360.com.br/ba/di/bad-ice-cream-d.jpg?width=200&height=200&aspect_ratio=1:1")',
        'stumble-guys': 'linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7)), url("https://cdn.jogos360.com.br/st/um/stumble-guys-d.jpg?width=200&height=200&aspect_ratio=1:1")',
        'geometry-dash-online': 'linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7)), url("https://cdn.jogos360.com.br/ge/om/geometry-dash-online-d.jpg?width=200&height=200&aspect_ratio=1:1")',
      },
    },
  },
  plugins: [],
}

