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
        'seraphim-gold-dark':'#7D7153'
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
};
