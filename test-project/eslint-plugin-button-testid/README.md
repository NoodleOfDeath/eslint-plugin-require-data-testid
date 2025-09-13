# eslint-plugin-button-testid

ESLint plugin to enforce `data-testid` attributes on native HTML button elements.

## Installation

```bash
npm install --save-dev eslint-plugin-button-testid
```

## Usage

Add `button-testid` to the plugins section of your `.eslintrc` configuration file:

```json
{
  "plugins": ["button-testid"]
}
```

Then configure the rule under the rules section:

```json
{
  "rules": {
    "button-testid/require-button-testid": "error"
  }
}
```

Or use the recommended configuration:

```json
{
  "extends": ["plugin:button-testid/recommended"]
}
```

## Rules

### `require-button-testid`

Enforces that all native HTML `<button>` elements have a `data-testid` attribute.

#### ❌ Incorrect

```jsx
<button onClick={handleClick}>Click me</button>
<button type="submit">Submit</button>
```

#### ✅ Correct

```jsx
<button data-testid="click-button" onClick={handleClick}>Click me</button>
<button data-testid="submit-button" type="submit">Submit</button>
```

## Configuration

This rule has no configuration options.