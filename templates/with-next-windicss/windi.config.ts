import { defineConfig } from 'windicss/helpers'

// see https://windicss.org/integrations/postcss.html
export default defineConfig({
  extract: {
    include: ['**/*.{html,js{,x},ts{,x},vue,svelte,astro}']
  },
})