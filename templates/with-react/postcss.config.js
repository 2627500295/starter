module.exports = {
  plugins: {
    "postcss-import": {},
    'postcss-color-functional-notation': {},
    'postcss-flexbugs-fixes': {},
    'postcss-preset-env': {
      features: { 'nesting-rules': false },
      autoprefixer: { flexbox: 'no-2009' },
      stage: 3
    },
    'postcss-import': {},
    'tailwindcss/nesting': {},
    'tailwindcss': {},
  },
};
