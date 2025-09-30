# eslint-plugin-require-data-testid

ESLint plugin to enforce `data-testid` attributes on native HTML elements like <button>.

## Installation

```bash
npm install --save-dev eslint-plugin-require-data-testid
```

## Usage

Add `require-data-testid` to the plugins section of your `.eslintrc` configuration file:

```json
{
  "plugins": ["require-data-testid"]
}
```

Then configure the rule under the rules section:

```json
{
  "rules": {
    "require-data-testid/native-button": "error"
  }
}
```

Or use the recommended configuration:

```json
{
  "extends": ["plugin:require-data-testid/recommended"]
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
```json
{
  "rules": {
    "require-data-testid/native-button": "error"
  }
}
```

Or use the recommended configuration:
```json
{
  "extends": ["plugin:require-data-testid/recommended"]
}
```

## Rules

### `require-data-testid/native-button`

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