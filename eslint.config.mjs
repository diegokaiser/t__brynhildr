import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends(
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended',
    'prettier',
    'next/core-web-vitals',
    'next'
  ),
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parserOptions: {
        project: './tsconfig.json',
        sourceType: 'module',
        ecmaVersion: 'latest',
      },
    },
    rules: {
      'prettier/prettier': 'error',
      'react/react-in-jsx-scope': 'off',
      'import/prefer-default-export': 'off',
      'react/jsx-props-no-spreading': 'off',
      '@typescript-eslint/no-unused-vars': ['warn'],
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
];

export default eslintConfig;
