module.exports = {
  plugins: {
    '@unocss/postcss': {
      content: [
        './{src,app,pages,components}/**/*.{html,js{,x},ts{,x},vue,svelte,astro}',
      ],
    },
    'postcss-nested': {},
    autoprefixer: {},
  },
};
