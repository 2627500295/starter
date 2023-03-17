// postcss.config.cjs
module.exports = {
  plugins: {
    'postcss-nested': {},
    // tailwindcss: {},
    autoprefixer: {},
    '@unocss/postcss': {
      // Optional
      content: ['**/*.{html,js{,x},ts{,x},vue,svelte,astro}'],
    },
  },
};
