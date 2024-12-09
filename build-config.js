import yaml from 'js-yaml';
import { glob } from 'glob';
import fs from 'fs';
import path from 'path';

// Carrega todos os componentes primeiro
async function loadComponents() {
  const components = {};
  const componentFiles = await glob('public/admin/config/components/*.yml');
  
  for (const file of componentFiles) {
    try {
      const content = fs.readFileSync(file, 'utf8');
      const schema = yaml.DEFAULT_SCHEMA;
      const parsed = yaml.load(content, { schema });
      if (parsed?.components) {
        Object.assign(components, parsed.components);
      }
    } catch (error) {
      console.error(`Error loading component ${file}:`, error);
    }
  }
  return components;
}

// Cria um schema YAML personalizado que inclui as referências aos componentes
function createSchemaWithComponents(components) {
  const types = Object.entries(components).map(([name, def]) => {
    return new yaml.Type(`!${name}`, {
      kind: 'scalar',
      construct: () => def
    });
  });

  return yaml.DEFAULT_SCHEMA.extend(types);
}

async function buildConfig() {
  try {
    // Ensure output directory exists
    if (!fs.existsSync('public/admin')) {
      fs.mkdirSync('public/admin', { recursive: true });
    }

    // Carrega componentes e cria schema
    const components = await loadComponents();
    const schema = createSchemaWithComponents(components);
    
    console.log('Components loaded:', Object.keys(components));

    // Load main config
    const mainConfig = yaml.load(
      fs.readFileSync('public/admin/config/main.yml', 'utf8'),
      { schema }
    ) || {};

    // Load collections with component references
    const collections = [];
    const collectionFiles = await glob('public/admin/config/collections/*.yml');
    
    for (const file of collectionFiles) {
      try {
        const content = fs.readFileSync(file, 'utf8');
        // Substitui referências *group por !group
        const processedContent = content.replace(/\*(\w+)/g, '!$1');
        const parsed = yaml.load(processedContent, { schema });
        if (parsed?.collections) {
          collections.push(...parsed.collections);
        }
      } catch (error) {
        console.error(`Error loading collection ${file}:`, error);
      }
    }

    console.log('Collections processed:', collections.length);

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
      sortKeys: false,
      skipInvalid: true,
      schema
    });

    console.log('Config generated with:');
    console.log('- Collections:', finalConfig.collections?.length || 0);

    fs.writeFileSync('public/admin/config.yml', outputYaml);
    console.log('Successfully generated config.yml');
  } catch (error) {
    console.error('Error generating config:', error);
    throw error;
  }
}

buildConfig().catch(console.error);
