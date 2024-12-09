import yaml from 'js-yaml';
import { glob } from 'glob';
import fs from 'fs';
import path from 'path';

async function loadYamlFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    // Primeiro carregamos todos os componentes para resolver as referências
    const components = {};
    const componentFiles = await glob('public/admin/config/components/*.yml');
    
    for (const file of componentFiles) {
      const componentContent = fs.readFileSync(file, 'utf8');
      const parsed = yaml.load(componentContent);
      if (parsed?.components) {
        Object.assign(components, parsed.components);
      }
    }

    // Agora carregamos o arquivo atual com as referências resolvidas
    return yaml.load(content, {
      schema: yaml.DEFAULT_SCHEMA
    });
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

    // Load collections
    const collectionFiles = await glob('public/admin/config/collections/*.yml');
    const collections = [];
    
    for (const file of collectionFiles) {
      const content = await loadYamlFile(file);
      if (content?.collections) {
        collections.push(...content.collections);
      }
    }

    // Log para debug
    console.log('Components loaded:', Object.keys(components));
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
      skipInvalid: true
    });

    // Log para debug
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
