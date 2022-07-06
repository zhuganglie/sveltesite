// vite.config.js
import { sveltekit } from '@sveltejs/kit/vite';
import Unocss from 'unocss/vite'
import { presetIcons, presetUno, transformerDirectives } from 'unocss'

/** @type {import('vite').UserConfig} */
const config = {
  plugins: [
    sveltekit(),
    Unocss({
      presets: [
        presetIcons({ /* options */ }),
        presetUno(),
        // ...custom presets
      ],
      transformers: [
        transformerDirectives(),
      ],
    }),
  ],
};

export default config;