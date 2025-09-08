import 'dotenv/config';
import { defineConfig } from 'astro/config';

const SITE = process.env.SITE || 'http://localhost';

// Use environment variable or default to empty string for local development
let BASE_PATH = process.env.BASE_PATH || '';
if (BASE_PATH) {
  if (!BASE_PATH.startsWith('/')) BASE_PATH = `/${BASE_PATH}`;
  if (!BASE_PATH.endsWith('/')) BASE_PATH = `${BASE_PATH}/`;
}

export default defineConfig({
  site: SITE,
  base: BASE_PATH,
  //trailingSlash: 'always',
  output: 'static',
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
});
