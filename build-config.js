import yaml from 'js-yaml';
import { glob } from 'glob';
import fs from 'fs';
import path from 'path';

async function loadYamlFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    return yaml.load(content);
  } catch (error) {
    console.error(`Error loading ${filePath}:`, error);
    return null;
  }
}

async function buildConfig() {
  try {
    // Ensure output directory exists
    if (!fs.existsSync('public/admin')) {
      fs.mkdirSync('public/admin', { recursive: true });
    }

    // Load main config first
    const mainConfig = await loadYamlFile('public/admin/config/main.yml') || {};
    
    // Load and process component definitions
    const componentFiles = await glob('public/admin/config/components/*.yml');
    const components = {};
    
    for (const file of componentFiles) {
      const content = await loadYamlFile(file);
      if (content?.components) {
        Object.assign(components, content.components);
      }
    }

    // Load collections and other configs
    const otherFiles = await glob('public/admin/config/collections/*.yml');
    const collections = [];
    
    for (const file of otherFiles) {
      const content = await loadYamlFile(file);
      if (content?.collections) {
        // Replace component references with actual definitions
        content.collections.forEach(collection => {
          if (collection.fields) {
            collection.fields.forEach(field => {
              if (field.types) {
                field.types = field.types.map(type => {
                  if (typeof type === 'string' && type.startsWith('*')) {
                    const componentName = type.substring(1);
                    return components[componentName] || type;
                  }
                  return type;
                });
              }
            });
          }
        });
        collections.push(...content.collections);
      }
    }

    // Merge everything together
    const finalConfig = {
      ...mainConfig,
      collections,
    };

    // Write the final config
    const outputYaml = yaml.dump(finalConfig, {
      indent: 2,
      lineWidth: -1,
      noRefs: true,
      sortKeys: false
    });

    fs.writeFileSync('public/admin/config.yml', outputYaml);
    console.log('Successfully generated config.yml');
  } catch (error) {
    console.error('Error generating config:', error);
    throw error;
  }
}

buildConfig().catch(console.error);
