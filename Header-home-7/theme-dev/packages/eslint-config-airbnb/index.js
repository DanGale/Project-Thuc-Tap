module.exports = {
  env: {
    'browser': true,
    'es2021': true
  },
  extends: [
    'airbnb-base',
    'airbnb-typescript/base',
    'plugin:import/recommended',
    'plugin:import/typescript'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },
  rules: {
    'import/prefer-default-export': 'off',
    'max-len': ['error', { 'code': 180 }],
    'no-plusplus': 0,
    'no-param-reassign': 0,
    'object-curly-newline': ['error', { multiline: true, consistent: true, minProperties: 7 }],
    'import/order': [ 1, {
      groups: [
        'builtin',
        'external',
        'internal',
        'parent',
        'sibling',
        'index',
        'type',
      ],
      pathGroups: [
        // {
        //   pattern: '*.scss',
        //   patternOptions: { matchBase: true },
        //   group: 'unknown',
        //   position: 'after',
        // },
        // {pattern: '@theme/**', group: 'internal'},
        {
          pattern: '{.,..}/**/*.+(css|sass|less|scss|pcss|styl)',
          group: 'unknown',
          position: 'after',
        },
      ],
      warnOnUnassignedImports: true,
    }],
  },
}
