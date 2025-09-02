import { defineConfig } from 'astro/config';

// Use environment variable or default to empty string for local development
const BASE_PATH = process.env.BASE_PATH || '';

// https://astro.build/config
export default defineConfig({
  site: 'http://localhost',
  base: BASE_PATH,
  //integrations: [svelte()],
  build: {
    assets: 'assets',
    assetsPrefix: '',
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler',
        },
      },
    },
  },
  output: 'static',
});
