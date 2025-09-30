import nativeButton from './rules/native-button.js';
const plugin = {
    rules: {
        'native-button': nativeButton,
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
export default plugin;
