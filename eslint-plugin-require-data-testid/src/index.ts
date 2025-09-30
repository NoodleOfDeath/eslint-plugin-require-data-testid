import type { ESLint, Linter } from 'eslint';
import nativeButton from './rules/native-button.js';

const plugin: ESLint.Plugin = {
  rules: {
    'native-button': nativeButton,
  },
  configs: {
    recommended: {
      plugins: ['require-data-testid'],
      rules: {
        'require-data-testid/native-button': 'error',
      },
    } as Linter.Config,
  },
};

export default plugin;