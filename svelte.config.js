import { mdsvex } from 'mdsvex';
import mdsvexConfig from './mdsvex.config.js';
import adapter from '@sveltejs/adapter-vercel';
import Unocss from 'unocss/vite';
import { presetUno, presetIcons } from 'unocss';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', ...mdsvexConfig.extensions],
	preprocess: [mdsvex(mdsvexConfig), preprocess()],
	kit: {
		adapter: adapter(),
		vite: {
			plugins: [
				Unocss({
					presets: [presetIcons(), presetUno()]
				})
			],
			server: {
				fs: {
					allow: ['..'],
				},
			}
		}
	},
};

export default config;
