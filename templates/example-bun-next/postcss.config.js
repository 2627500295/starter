module.exports = {
  plugins: {
    "postcss-import": {},
    // "postcss-windicss": {},
    "tailwindcss/nesting": "postcss-nested",
    tailwindcss: {},
    "postcss-preset-env": {
      features: { "nesting-rules": false },
    },
    "postcss-flexbugs-fixes": {},
    autoprefixer: {},
  },
};
