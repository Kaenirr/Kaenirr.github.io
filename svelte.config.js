import adapter from '@sveltejs/adapter-static';

import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */

const config = {

    preprocess: vitePreprocess(),

    kit: {

        adapter: adapter(),
        
        alias: {
            $lib: './src/lib',
            '@data': './src/lib/data',
        },

        paths: {
            base: process.env.NODE_ENV === 'production' ? '/Kaenirr.github.io' : '',
        }
    }
};

export default config;

