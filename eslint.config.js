const buttonTestIdPlugin = require('./eslint-plugin-button-testid');

module.exports = [
  {
    files: ["**/*.jsx", "**/*.js"],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "module",
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      }
    },
    plugins: {
      "button-testid": buttonTestIdPlugin
    },
    rules: {
      "button-testid/require-button-testid": "error"
    }
  }
];