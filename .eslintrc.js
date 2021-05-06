module.exports = {
  extends: [
    'airbnb',
    'airbnb/hooks',
    'plugin:prettier/recommended',
    'prettier',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  env: {
    node: true,
    browser: true,
    jest: true,
  },
  plugins: ['eslint-plugin-import-helpers'],
  rules: {
    'import-helpers/order-imports': [
      'error',
      {
        groups: [
          '/^@?react/',
          'module',
          ['parent', 'sibling', 'index'],
          '/.*(css|scss)$/',
        ],
        newlinesBetween: 'always',
      },
    ],
    'no-multiple-empty-lines': [
      'error',
      {
        max: 1,
      },
    ],
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'no-param-reassign': [
      'error',
      { props: true, ignorePropertyModificationsFor: ['state'] },
    ],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
