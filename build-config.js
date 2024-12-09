import yaml from 'js-yaml';
import { glob } from 'glob';
import fs from 'fs';
import path from 'path';

async function buildConfig() {
  try {
    // Ensure directories exist
    if (!fs.existsSync('public/admin')) {
      fs.mkdirSync('public/admin', { recursive: true });
    }

    // First load all YAML files
    const allFiles = await glob('public/admin/config/**/*.yml');
    
    // Sort files to ensure components are loaded first
    const sortedFiles = allFiles.sort((a, b) => {
      if (a.includes('/components/')) return -1;
      if (b.includes('/components/')) return 1;
      if (path.basename(a) === 'main.yml') return -1;
      if (path.basename(b) === 'main.yml') return 1;
      return a.localeCompare(b);
    });

    let mergedConfig = {};
    let componentDefs = {};

    // First pass: Load all component definitions
    for (const file of sortedFiles.filter(f => f.includes('/components/'))) {
      const content = fs.readFileSync(file, 'utf8');
      try {
        const parsed = yaml.load(content);
        if (parsed && parsed.components) {
          componentDefs = { ...componentDefs, ...parsed.components };
        }
      } catch (e) {
        console.error(`Error parsing component file ${file}:`, e);
        throw e;
      }
    }

    // Create schema with component types
    const types = {};
    Object.entries(componentDefs).forEach(([key, value]) => {
      types[key] = new yaml.Type(`!${key}`, {
        kind: 'mapping',
        construct: function (data) {
          return data;
        }
      });
    });

    const CUSTOM_SCHEMA = yaml.DEFAULT_SCHEMA.extend(Object.values(types));

    // Second pass: Process all files with component schema
    for (const file of sortedFiles) {
      const content = fs.readFileSync(file, 'utf8');
      try {
        const parsed = yaml.load(content, { schema: CUSTOM_SCHEMA });
        if (parsed) {
          if (file.includes('/components/')) {
            // For component files, only merge the non-components part
            const { components, ...rest } = parsed;
            mergedConfig = { ...mergedConfig, ...rest };
          } else {
            mergedConfig = { ...mergedConfig, ...parsed };
          }
        }
      } catch (e) {
        console.error(`Error parsing file ${file}:`, e);
        throw e;
      }
    }

    // Add component definitions to final config
    mergedConfig.components = componentDefs;

    // Write merged config
    const outputYaml = yaml.dump(mergedConfig, {
      indent: 2,
      lineWidth: -1,
      noRefs: true,
      sortKeys: false,
      schema: CUSTOM_SCHEMA
    });

    fs.writeFileSync('public/admin/config.yml', outputYaml);
    console.log('Successfully merged YAML configs');
  } catch (error) {
    console.error('Error merging YAML configs:', error);
    throw error;
  }
}

buildConfig().catch(console.error);
