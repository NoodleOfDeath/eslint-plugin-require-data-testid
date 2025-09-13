# Test Project for ESLint Button TestID Plugin

This is a test project to demonstrate the `eslint-plugin-button-testid` in action.

## Setup

```bash
cd test-project
yarn install
```

## Running the Linter

```bash
yarn lint
```

## Expected Results

The linter should report errors for buttons missing `data-testid` attributes in `src/components/TestComponent.tsx`:

- Line 14: Button with "Click Me (No Test ID)" text
- Line 32: Submit form button  
- Line 38: Cancel button (if rendered)
- Line 53: Dynamic button

The following buttons should NOT trigger errors (they have `data-testid` attributes):
- Line 22: "Valid Button"
- Line 46: "Confirm Action" button