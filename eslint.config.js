// eslint.config.js
import eslintPluginPrettier from 'eslint-plugin-prettier';
import eslintConfigPrettier from 'eslint-config-prettier';
import typescriptPlugin from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import astroParser from 'astro-eslint-parser';

export default [
  {
    // Ignorar pastas específicas
    ignores: ['node_modules/**', 'dist/**', '.turbo/**'],
  },
  {
    // Configuração para JavaScript e TypeScript
    files: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'],
    languageOptions: {
      ecmaVersion: 'latest', // ECMAScript mais recente
      sourceType: 'module',
      parser: typescriptParser, // Parser para JavaScript e TypeScript
      globals: {
        window: 'readonly',
        document: 'readonly',
        console: 'readonly',
        module: 'readonly',
        require: 'readonly',
        process: 'readonly',
        __dirname: 'readonly',
      },
    },
    plugins: {
      prettier: eslintPluginPrettier,
      '@typescript-eslint': typescriptPlugin,
    },
    rules: {
      ...eslintConfigPrettier.rules, // Regras do Prettier
      'prettier/prettier': 'error',
      'no-console': 'warn',
      semi: ['error', 'always'],
      quotes: ['error', 'single'],
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
    },
  },
  {
    // Configuração para arquivos Astro
    files: ['**/*.astro'],
    languageOptions: {
      parser: astroParser, // Parser para arquivos Astro
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        extraFileExtensions: ['.astro'],
      },
      globals: {
        window: 'readonly',
        document: 'readonly',
      },
    },
    plugins: {
      prettier: eslintPluginPrettier,
      astro: { rules: {} }, // Plugin Astro (sem regras específicas)
    },
    rules: {
      ...eslintConfigPrettier.rules,
      'prettier/prettier': 'error',
    },
  },
  {
    // Configuração específica para arquivos Node.js
    files: ['**/*.cjs', '**/*.mjs', '**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        module: 'readonly',
        require: 'readonly',
        process: 'readonly',
        __dirname: 'readonly',
      },
    },
    rules: {
      'prettier/prettier': 'error',
      'no-console': 'warn',
      semi: ['error', 'always'],
      quotes: ['error', 'single'],
      indent: ['error', 2, { SwitchCase: 1 }],
      'eol-last': ['error', 'always'],
    },
  },
];
