module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  plugins: ['@typescript-eslint', 'react', 'react-hooks', 'import', 'jsx-a11y', 'prettier'],
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended',
    'prettier',
  ],
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
};
