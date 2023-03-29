import { defineConfig } from "windicss/helpers";

// see https://windicss.org/integrations/postcss.html
export default defineConfig({
  extract: {
    include: [
      "./{src,app,pages,components}/**/*.{html,js{,x},ts{,x},vue,svelte,astro}",
    ],
  },
});
