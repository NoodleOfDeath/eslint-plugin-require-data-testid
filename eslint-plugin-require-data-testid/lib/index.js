const requireButtonTestId = require('./rules/native-button');

module.exports = {
  rules: {
    'native-button': requireButtonTestId,
  },
  configs: {
    recommended: {
      plugins: ['require-data-testid'],
      rules: {
        'require-data-testid/native-button': 'error',
      },
    },
  },
};