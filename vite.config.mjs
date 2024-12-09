import { defineConfig } from 'vite';
import yaml from 'js-yaml';
import { glob } from 'glob';
import fs from 'fs';
import path from 'path';

function mergeYamlConfigs() {
  return {
    name: 'merge-yaml-configs',
    buildStart: async () => {
      try {
        // Ensure directories exist
        if (!fs.existsSync('public/admin')) {
          fs.mkdirSync('public/admin', { recursive: true });
        }

        // Get all YAML files
        const configFiles = await glob('public/admin/config/**/*.yml');
        
        // Sort files to ensure correct order
        const sortedFiles = configFiles.sort((a, b) => {
          // main.yml should be first
          if (path.basename(a) === 'main.yml') return -1;
          if (path.basename(b) === 'main.yml') return 1;
          
          // components next
          const aIsComponent = a.includes('/components/');
          const bIsComponent = b.includes('/components/');
          if (aIsComponent && !bIsComponent) return -1;
          if (!aIsComponent && bIsComponent) return 1;
          
          // alphabetical for the rest
          return a.localeCompare(b);
        });

        // Read and merge YAML files
        let mergedConfig = {};
        
        for (const file of sortedFiles) {
          const content = fs.readFileSync(file, 'utf8');
          try {
            const parsed = yaml.load(content, {
              schema: yaml.DEFAULT_SCHEMA,
              json: true
            });
            mergedConfig = { ...mergedConfig, ...parsed };
          } catch (e) {
            console.error(`Error parsing ${file}:`, e);
            throw e;
          }
        }

        // Write merged config
        const outputYaml = yaml.dump(mergedConfig, {
          indent: 2,
          lineWidth: -1,
          noRefs: true,
          sortKeys: false
        });

        fs.writeFileSync('public/admin/config.yml', outputYaml);
        console.log('Successfully merged YAML configs');
      } catch (error) {
        console.error('Error merging YAML configs:', error);
        throw error;
      }
    }
  };
}

export default defineConfig({
  plugins: [mergeYamlConfigs()]
});
