# @cloud-hub/eslint-config

**Centralized Linting Solutions for Cloud Projects**

![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)

## Features

- 🧹 Unified linting rules across monorepo
- ⚙️ Multi-environment presets (Base/Next.js/React)
- 🔍 TypeScript-aware linting out-of-the-box
- 🛡️ Security-focused rule sets
- 💅 Consistent code style enforcement

---

## Installation

```bash
# Base installation
npm install --save-dev eslint @cloud-hub/eslint-config

# Full setup with React/TypeScript
npm install --save-dev eslint @cloud-hub/eslint-config \
  eslint-plugin-react eslint-plugin-react-hooks \
  @typescript-eslint/eslint-plugin @typescript-eslint/parser
```

---

## Configuration Presets

### Quick Start Guide

**Next.js Application** (`.eslintrc.cjs`)

```javascript
module.exports = {
  extends: ["@cloud-hub/eslint-config/next"],
  rules: {
    // Custom overrides
  },
};
```

**React Component Library** (`.eslintrc.cjs`)

```javascript
module.exports = {
  extends: ["@cloud-hub/eslint-config/react-internal"],
  parserOptions: {
    project: "./tsconfig.json",
  },
};
```

---

## Preset Comparison

| Feature            | Base     | Next.js | React Internal |
| ------------------ | -------- | ------- | -------------- |
| React Hooks        | ❌       | ✅      | ✅             |
| TypeScript Support | Optional | ✅      | ✅             |
| Next.js Rules      | ❌       | ✅      | ❌             |
| JSX A11Y           | ❌       | ✅      | ✅             |
| Import Sorting     | ✅       | ✅      | ✅             |

---

## Core Rule Sets

**Essential React Rules:**

```javascript
{
  "react/jsx-uses-react": "error",
  "react-hooks/rules-of-hooks": "error",
  "react-hooks/exhaustive-deps": "warn"
}
```

**TypeScript Foundation:**

```javascript
{
  "@typescript-eslint/no-explicit-any": "warn",
  "@typescript-eslint/consistent-type-imports": "error",
  "@typescript-eslint/no-unused-vars": ["error", { "argsIgnorePattern": "^_" }]
}
```

---

## Advanced Configuration

### Monorepo Aliases

```javascript
module.exports = {
  settings: {
    "import/resolver": {
      typescript: {
        project: ["packages/*/tsconfig.json"],
      },
    },
  },
};
```

### Custom Rule Extensions

```javascript
module.exports = {
  extends: ["@cloud-hub/eslint-config/base"],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "warn",
    "padding-line-between-statements": [
      "error",
      { blankLine: "always", prev: "*", next: "return" },
    ],
  },
};
```

---

## Troubleshooting

**Common Issues:**

- 🔍 `Missing plugin` - Ensure peer dependencies are installed
- 🛠️ `Parsing error` - Verify TypeScript parser configuration
- 📁 `Unable to resolve path` - Check import resolver settings
- ⚛️ React version warnings - Set `reactVersion` in settings

---

## Version Compatibility

| Package Version | ESLint | TypeScript | React |
| --------------- | ------ | ---------- | ----- |
| 1.x.x           | ^8.56  | >=4.9      | >=17  |
| 2.x.x           | ^9.0   | >=5.0      | >=18  |

---

## Contributing

Help us maintain code quality standards:

1. Clone the repository
2. Modify rules in `/packages/eslint-config`
3. Test with:

```bash
eslint --ext .js,.ts,.tsx test-projects/
```

4. Submit PR with:
   - Rule changes justification
   - Updated documentation
   - Version bump if needed

---

## License

Distributed under the MIT License. See `LICENSE` for more information.

---

> **Pro Tip:** Add these scripts to your `package.json` for seamless linting:
>
> ```json
> {
>   "scripts": {
>     "lint": "eslint . --ext .js,.jsx,.ts,.tsx",
>     "lint:fix": "eslint . --ext .js,.jsx,.ts,.tsx --fix"
>   }
> }
> ```
