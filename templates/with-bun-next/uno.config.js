import { defineConfig, presetUno } from 'unocss';

// see https://github.com/unocss/unocss/tree/main/packages/postcss
export default defineConfig({
  presets: [
    presetUno({
      dark: 'media',
    }),
  ],
});
