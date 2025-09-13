const requireButtonTestId = require('./rules/require-button-testid');

module.exports = {
  rules: {
    'require-button-testid': requireButtonTestId,
  },
  configs: {
    recommended: {
      plugins: ['button-testid'],
      rules: {
        'button-testid/require-button-testid': 'error',
      },
    },
  },
};