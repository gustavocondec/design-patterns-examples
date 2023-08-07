module.exports = {
  env: {
    es2022: true,
    node: true
  },
  extends: 'standard-with-typescript',
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: '2022',
    sourceType: 'module',
    parser: '@typescript-eslint/parser',
    project: ['./tsconfig.json']
  },
  rules: {
    '@typescript-eslint/explicit-function-return-type': 1,
    '@typescript-eslint/no-extraneous-class': 1
  }
}