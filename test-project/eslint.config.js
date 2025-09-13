const buttonTestIdPlugin = require('./eslint-plugin-button-testid/lib');
const typescriptPlugin = require('@typescript-eslint/eslint-plugin');
const typescriptParser = require('@typescript-eslint/parser');

module.exports = [
  {
    files: ["**/*.ts", "**/*.tsx", "**/*.js", "**/*.jsx"],
    languageOptions: {
      parser: typescriptParser,
      ecmaVersion: 2021,
      sourceType: "module",
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        },
        project: "./tsconfig.json"
      }
    },
    plugins: {
      "button-testid": buttonTestIdPlugin,
      "@typescript-eslint": typescriptPlugin
    },
    rules: {
      "button-testid/require-button-testid": "error",
      // Some basic TypeScript rules to make the setup more realistic
      "@typescript-eslint/no-unused-vars": "warn",
      "@typescript-eslint/explicit-function-return-type": "off"
    }
  }
];