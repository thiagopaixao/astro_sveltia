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

    // First, load and process components
    const componentFiles = await glob('public/admin/config/components/*.yml');
    let components = {};
    
    for (const file of componentFiles) {
      const content = fs.readFileSync(file, 'utf8');
      try {
        const parsed = yaml.load(content, { schema: yaml.DEFAULT_SCHEMA });
        components = { ...components, ...parsed };
      } catch (e) {
        console.error(`Error parsing component file ${file}:`, e);
        throw e;
      }
    }

    // Then load main config and collections
    const mainConfig = yaml.load(fs.readFileSync('public/admin/config/main.yml', 'utf8'));
    let mergedConfig = { ...mainConfig };

    // Load collection configs
    const collectionFiles = await glob('public/admin/config/collections/**/*.yml');

    // Merge collection configurations
    for (const file of collectionFiles) {
      const content = fs.readFileSync(file, 'utf8');
      try {
        const parsed = yaml.load(content, { schema: yaml.DEFAULT_SCHEMA });
        
        // Replace component references in collections
        if (parsed.collections) {
          parsed.collections = parsed.collections.map(collection => {
            if (collection.fields) {
              collection.fields = collection.fields.map(field => {
                if (field.types) {
                  field.types = field.types.map(type => {
                    if (typeof type === 'string' && type.startsWith('*')) {
                      const componentName = type.substring(1);
                      return components.components[componentName];
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
