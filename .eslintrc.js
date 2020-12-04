module.exports = {
  ignorePatterns: ['!.eslintrc.js', '!.prettierrc.js', '!.eleventy.js'],
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  parserOptions: {
    sourceType: 'module',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {},
}
