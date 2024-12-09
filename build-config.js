import { createServer } from 'vite';

async function buildConfig() {
  const server = await createServer({
    configFile: 'vite.config.mjs',
    mode: 'production'
  });
  
  try {
    await server.pluginContainer.buildStart({});
  } finally {
    await server.close();
  }
}

buildConfig();
