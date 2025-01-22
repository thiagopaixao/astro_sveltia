import { defineConfig } from 'astro/config';
import { execSync } from 'child_process';
import path from 'path';

function getRepoName() {
  try {
    const remoteUrl = execSync('git config --get remote.origin.url')
      .toString()
      .trim();
    const match = remoteUrl.match(
      /(?:github\.com|gitlab\.com)[/:](.+?)\/(.+?)(?:\.git)?$/
    );
    if (match) {
      return match[2]; // Nome do repositório
    }
  } catch (e) {
    console.warn('Failed to get repo name from git remote:', e);
  }

  try {
    const repoName = path.basename(process.cwd());
    return repoName;
  } catch (e) {
    console.warn('Failed to get repo name from current directory:', e);
  }

  return 'documental';
}

const BASE_PATH = `/${getRepoName()}/`;
//const BASE_PATH = 'astro_sveltia';

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
