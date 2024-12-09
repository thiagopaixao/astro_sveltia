import { build } from 'vite';
import { mergeYamlConfigs } from './vite.config.mjs';

async function buildConfig() {
  const plugin = mergeYamlConfigs();
  await plugin.buildStart();
}

buildConfig().catch(console.error);
