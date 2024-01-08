module.exports = {
  root: true,
  extends: ['eslint-config-custom'],
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  plugins: ['import'],
  settings: {
    'import/parsers': { '@typescript-eslint/parser': ['.ts', '.tsx'] },
    'import/resolver': {
      typescript: { project: ['tsconfig.json', 'packages/core/tsconfig.json'] },
    },
  },
};
