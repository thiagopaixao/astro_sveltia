import { defineConfig } from 'vite';
import yaml from 'yaml';
import { glob } from 'glob';
import * as fs from 'fs';
import * as path from 'path';

const mergeYamlConfigs = () => {
  return {
    name: 'merge-yaml-configs',
    buildStart: async () => {
      const configFiles = await glob('public/admin/config/**/*.yml');
      let mergedConfig = {};
      
      for (const file of configFiles) {
        const content = fs.readFileSync(file, 'utf8');
        const parsed = yaml.parse(content);
        mergedConfig = { ...mergedConfig, ...parsed };
      }

      // Ensure output directory exists
      if (!fs.existsSync('public/admin')) {
        fs.mkdirSync('public/admin', { recursive: true });
      }

      // Write merged config
      fs.writeFileSync(
        'public/admin/config.yml',
        yaml.stringify(mergedConfig)
      );
    }
  };
}

// Custom build configuration that doesn't require an HTML entry
export default defineConfig({
  plugins: [mergeYamlConfigs()],
  build: {
    // Prevent Vite from looking for an HTML entry
    lib: {
      entry: false,
      formats: []
    },
    rollupOptions: {
      input: undefined
    },
    write: false
  }
});
