module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    allowImportExportEverywhere: true,
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  settings: {
    react: {
      version: '999.999.999',
    },
    'import/resolver': {
      node: {
        paths: ['src/', 'tests/'],
        extensions: ['.js', '.ts'],
      },
    },
  },
  env: {
    browser: false,
    node: true,
    jest: true,
  },
  globals: {
    process: true,
    Buffer: true,
    setImmediate: true,
  },
  plugins: ['import'],
  extends: ['plugin:import/errors', 'airbnb-base', 'prettier'],
  rules: {
    'class-methods-use-this': 0,
    'import/prefer-default-export': 0,
    'no-await-in-loop': 0,
    'no-console': 0,
    'no-bitwise': 0,
    semi: 0,
    camelcase: 0,
    'consistent-return': 0,
    'semi-style': 0,
    'import/extensions': 0,
    'no-unused-vars': 'off',
    'no-useless-constructor': 'off',
    'lines-between-class-members': 'off',
    'no-empty-function': 'off',
    'no-param-reassign': ['error', { props: false }],
    'no-shadow': 'off',
    'no-restricted-syntax': 'off',
    'no-continue': 'off',
    'no-plusplus': 'off',
    'no-use-before-define': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-promise-executor-return': 'off',
    'prefer-destructuring': 'off',
    'dot-notation': 'off',
  },
}