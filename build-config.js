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
    
    // Sort files to ensure components are loaded first, then main.yml, then collections
    const sortedFiles = allFiles.sort((a, b) => {
      if (a.includes('/components/')) return -1;
      if (b.includes('/components/')) return 1;
      if (path.basename(a) === 'main.yml') return -1;
      if (path.basename(b) === 'main.yml') return 1;
      return a.localeCompare(b);
    });

    let mergedConfig = {};
    let components = {};

    // Process all files in order
    for (const file of sortedFiles) {
      const content = fs.readFileSync(file, 'utf8');
      try {
        // Use YAML_SCHEMA that includes aliases
        const parsed = yaml.load(content, { schema: yaml.DEFAULT_SCHEMA });
        
        if (file.includes('/components/')) {
          // Store components separately
          components = { ...components, ...parsed };
        } else {
          // For collections, process component references
          if (parsed.collections) {
            parsed.collections = parsed.collections.map(collection => {
              if (collection.fields) {
                collection.fields = collection.fields.map(field => {
                  if (field.types) {
                    field.types = field.types.map(type => {
                      if (typeof type === 'string' && type.startsWith('*')) {
                        const componentName = type.substring(1);
                        return components.components?.[componentName];
                      }
                      return type;
                    });
                  }
                  return field;
                });
              }
              return collection;
            });
          }
          
          mergedConfig = { ...mergedConfig, ...parsed };
        }
      } catch (e) {
        console.error(`Error parsing file ${file}:`, e);
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

buildConfig().catch(console.error);
