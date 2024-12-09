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
      
      // Concatenate all YAML content in the correct order
      let allContent = '';
      
      // Components first (for anchors)
      const componentFiles = configFiles.filter(file => file.includes('/components/'));
      for (const file of componentFiles) {
        const content = fs.readFileSync(file, 'utf8');
        allContent += content + '\n';
      }
      
      // Then other files
      const otherFiles = configFiles.filter(file => !file.includes('/components/'));
      for (const file of otherFiles) {
        const content = fs.readFileSync(file, 'utf8');
        allContent += content + '\n';
      }

      // Parse everything at once to maintain anchor references
      const doc = yaml.parseDocument(allContent);

      // Ensure output directory exists
      if (!fs.existsSync('public/admin')) {
        fs.mkdirSync('public/admin', { recursive: true });
      }

      // Write merged config
      fs.writeFileSync(
        'public/admin/config.yml',
        doc.toString()
      );
    }
  };
}

export default {
  plugins: [mergeYamlConfigs()]
};
