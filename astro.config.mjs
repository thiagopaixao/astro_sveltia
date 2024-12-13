import { defineConfig } from 'astro/config';
import { execSync } from 'child_process';

function getRepoName() {
  const remoteUrl = execSync('git config --get remote.origin.url')
    .toString()
    .trim();
  const match = remoteUrl.match(
    /(?:github\.com|gitlab\.com)[/:](.+?)\/(.+?)(?:\.git)?$/
  );
  if (match) {
    return match[2]; // Nome do repositório
  }
  throw new Error('Não foi possível obter o nome do repositório.');
}

const BASE_PATH = `/${getRepoName()}`;
//const BASE_PATH = '/';

// https://astro.build/config
export default defineConfig({
  site: 'http://localhost',
  base: BASE_PATH,
  //integrations: [svelte()],
  build: {
    assets: 'astro',
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
