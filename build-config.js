import { glob } from 'glob';
import fs from 'fs';

const yaml = require('js-yaml');

async function buildConfig() {
  try {
    // Ensure output directory exists
    if (!fs.existsSync('public/admin')) {
      fs.mkdirSync('public/admin', { recursive: true });
    }

    let finalConfig = '';

    // Lê o arquivo components.yml para obter a ordem dos componentes
    const componentsOrder = yaml.load(
      fs.readFileSync('public/admin/components.yml', 'utf8')
    );

    // Carrega os componentes na ordem especificada
    for (const componentPath of componentsOrder.components) {
      const fullPath = `public/admin/config/${componentPath}`;
      if (fs.existsSync(fullPath)) {
        const content = fs.readFileSync(fullPath, 'utf8');
        finalConfig += content + '\n';
      } else {
        console.warn(`Warning: Component file not found: ${fullPath}`);
      }
    }

    // Carrega as configurações principais depois dos componentes
    console.log('Loading main config...');
    finalConfig += fs.readFileSync('public/admin/config/main.yml', 'utf8');
    finalConfig += '\n';

    // Load components
    console.log('Loading components...');
    const componentFiles = await glob('public/admin/config/components/*.yml');
    for (const file of componentFiles) {
      const content = fs.readFileSync(file, 'utf8');
      finalConfig += content;
      finalConfig += '\n';
    }

    // Load collections
    console.log('Loading collections...');
    const collectionFiles = await glob('public/admin/config/collections/*.yml');
    for (const file of collectionFiles) {
      const content = fs.readFileSync(file, 'utf8');
      finalConfig += content;
      finalConfig += '\n';
    }

    // Write the final config
    fs.writeFileSync('public/admin/config.yml', finalConfig);
    console.log('Successfully generated config.yml');
  } catch (error) {
    console.error('Error generating config:', error);
    throw error;
  }
}

buildConfig().catch(console.error);
