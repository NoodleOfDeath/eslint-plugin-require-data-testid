const { v5: uuidv5 } = require('uuid');

// Namespace for generating consistent UUIDs (can be any valid UUID)
const TESTID_NAMESPACE = '6ba7b810-9dad-11d1-80b4-00c04fd430c8';

module.exports = {
  meta: {
    type: 'problem',
    docs: {
      description: 'enforce data-testid attribute on native HTML button elements',
      category: 'Best Practices',
      recommended: true,
    },
    fixable: 'code',
    schema: [],
    messages: {
      missingTestId: 'Native HTML button elements must have a data-testid attribute',
    },
  },

  create(context) {
    return {
      JSXElement(node) {
        const openingElement = node.openingElement;

        if (openingElement.name.type === 'JSXIdentifier' &&
            openingElement.name.name === 'button') {

          const hasDataTestId = openingElement.attributes.some(attr => {
            return attr.type === 'JSXAttribute' &&
                   attr.name &&
                   attr.name.name === 'data-testid';
          });

          if (!hasDataTestId) {
            context.report({
              node: openingElement,
              messageId: 'missingTestId',
              fix(fixer) {
                // Generate a UUID based on the button's location and content for consistency
                const sourceCode = context.getSourceCode();
                const buttonText = sourceCode.getText(node);
                const location = `${context.getFilename()}:${openingElement.loc.start.line}:${openingElement.loc.start.column}`;
                const seed = `${buttonText}${location}`;
                const testId = uuidv5(seed, TESTID_NAMESPACE);

                // Find the position after the opening tag name to insert the data-testid
                const tagNameEnd = openingElement.name.range[1];

                return fixer.insertTextAfterRange(
                  [tagNameEnd, tagNameEnd],
                  ` data-testid="${testId}"`
                );
              },
            });
          }
        }
      },
      
      // Handle template literals and HTML parsing for frameworks like Vue
      TemplateLiteral(node) {
        const source = context.getSourceCode();
        const templateContent = source.getText(node);

        // Simple regex to find button tags without data-testid
        const buttonRegex = /<button(?![^>]*data-testid)[^>]*>/g;
        let match;

        while ((match = buttonRegex.exec(templateContent)) !== null) {
          const start = node.range[0] + match.index;
          const end = start + match[0].length;
          const matchedText = match[0];

          context.report({
            node,
            loc: {
              start: source.getLocFromIndex(start),
              end: source.getLocFromIndex(end)
            },
            messageId: 'missingTestId',
            fix(fixer) {
              // Generate a UUID based on the button's location and content for consistency
              const location = `${context.getFilename()}:${source.getLocFromIndex(start).line}:${source.getLocFromIndex(start).column}`;
              const seed = `${matchedText}${location}`;
              const testId = uuidv5(seed, TESTID_NAMESPACE);

              // Insert data-testid before the closing >
              const insertPosition = end - 1; // Before the closing >
              const absolutePosition = insertPosition;

              return fixer.insertTextAfterRange(
                [absolutePosition - 1, absolutePosition - 1],
                ` data-testid="${testId}"`
              );
            },
          });
        }
      }
    };
  },
};