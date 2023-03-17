/**
 *
 * @type {import('tailwindcss').Config}
 *
 * see https://tailwindcss.com/docs/guides/nextjs
 */
const tailwindConfig = {
  content: [
    "./{src,app,pages,components}/**/*.{html,js{,x},ts{,x},vue,svelte,astro}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};

module.exports = tailwindConfig;
