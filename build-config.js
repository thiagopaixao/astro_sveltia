import { glob } from 'glob';
import fs from 'fs';

async function buildConfig() {
  try {
    // Ensure output directory exists
    if (!fs.existsSync('public/admin')) {
      fs.mkdirSync('public/admin', { recursive: true });
    }

    let finalConfig = '';

    // Load main config first
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
