import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const { defineConfig } = require('vite');
import yaml from 'yaml';
import { glob } from 'glob';
import * as fs from 'fs';
import * as path from 'path';

export const mergeYamlConfigs = () => {
  return {
    name: 'merge-yaml-configs',
    buildStart: async () => {
      const configFiles = await glob('public/admin/config/**/*.yml');
      let mergedConfig = {};
      
      // Load components first to ensure anchors are available
      const componentFiles = configFiles.filter(file => file.includes('/components/'));
      const otherFiles = configFiles.filter(file => !file.includes('/components/'));
      
      // Process component files first
      for (const file of componentFiles) {
        const content = fs.readFileSync(file, 'utf8');
        const parsed = yaml.parse(content);
        mergedConfig = { ...mergedConfig, ...parsed };
      }
      
      // Then process other files
      for (const file of otherFiles) {
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

export default {
  plugins: [mergeYamlConfigs()]
};
