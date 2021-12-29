module.exports = {
  purge: {
    mode: "all",
    content: ["./**/*.html"],
    options: {
      whitelist: [],
    },
  },
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        'seraphim-grey': '#BDBAB9',
        'seraphim-grey-light': '#DEDCDC',
        'seraphim-gold': '#9d8e6c',
        'seraphim-gold-dark': '#7D7153',
        'gw2-rarity-junk': '#AAAAAA',
        'gw2-rarity-basic': '#000',
        'gw2-rarity-fine': '#62A4DA',
        'gw2-rarity-masterwork': '#1a9306',
        'gw2-rarity-rare': '#dbb50a',
        'gw2-rarity-exotic': '#ffa405',
        'gw2-rarity-ascended': '#fb3e8d',
        'gw2-rarity-legendary': '#4C139D',
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
};
