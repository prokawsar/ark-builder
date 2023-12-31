// import adapter from '@sveltejs/adapter-vercel';
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

import { mdsvex } from 'mdsvex';
import mdsvexConfig from './mdsvex.config.js';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', ...mdsvexConfig.extensions],
	kit: {
		adapter: adapter(),
		paths: {
			base: process.env.NODE_ENV === 'production' ? '/ark-builder' : ''
		},
		// remove this if you're not using comment system
		csp: { mode: 'auto' }
	},
	preprocess: [mdsvex(mdsvexConfig), vitePreprocess()]
};

export default config;
