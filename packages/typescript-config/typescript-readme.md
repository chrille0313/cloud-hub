# @cloud-hub/typescript-config

**Centralized TypeScript Configuration Hub for Cloud Projects**

![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)

## Features

- 🧰 Unified TS configurations for monorepo consistency
- ⚙️ Multi-environment presets (Next.js/React/Base)
- 🔄 Standardized compiler options across projects
- 📦 Zero-install configuration sharing
- 🛠️ Built-in optimizations for component libraries

---

## Installation

```bash
# Install as dev dependency
npm install --save-dev @cloud-hub/typescript-config

# or using yarn
yarn add -D @cloud-hub/typescript-config
```

---

## Configuration Presets

### Quick Start Guide

**Next.js Application** (`tsconfig.json`)

```json
{
  "extends": "@cloud-hub/typescript-config/nextjs",
  "include": ["**/*.ts", "**/*.tsx"]
}
```

**React Component Library** (`tsconfig.json`)

```json
{
  "extends": "@cloud-hub/typescript-config/react-library",
  "compilerOptions": {
    "outDir": "dist",
    "rootDir": "src"
  }
}
```

---

## Preset Comparison

| Feature            | Base | Next.js | React Library |
| ------------------ | ---- | ------- | ------------- |
| JSX Runtime        | ❌   | ✅      | ✅            |
| DOM Types          | ❌   | ✅      | ✅            |
| Declaration Maps   | ❌   | ❌      | ✅            |
| Strict Null Checks | ✅   | ✅      | ✅            |
| Next.js Types      | ❌   | ✅      | ❌            |

---

## Core Configuration Options

**Essential compilerOptions for libraries:**

```json
{
  "declaration": true,
  "declarationMap": true,
  "emitDeclarationOnly": false,
  "jsx": "react-jsx",
  "skipLibCheck": true
}
```

**Recommended Includes/Excludes:**

```json
{
  "include": ["src/**/*.ts", "src/**/*.tsx"],
  "exclude": ["node_modules", "dist", "**/*.test.ts", "**/*.spec.ts"]
}
```

---

## Advanced Usage

### Customizing Base Configuration

```json
{
  "extends": "@cloud-hub/typescript-config/base",
  "compilerOptions": {
    "strict": false,
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

### Monorepo Type Resolution

```json
{
  "references": [{ "path": "../packages/shared-types" }],
  "compilerOptions": {
    "composite": true
  }
}
```

---

## Troubleshooting

**Common Issues:**

- 🔄 `Cannot find module` - Ensure parent project has required dependencies
- 🛠️ `JSX not allowed` - Extend from react-library/nextjs presets
- 📦 Missing type declarations - Enable `declaration` in compilerOptions

---

## Version Compatibility

| Package Version | TypeScript | Next.js | React  |
| --------------- | ---------- | ------- | ------ |
| 1.x.x           | >=4.9.5    | >=13    | >=18   |
| 2.x.x           | >=5.0.0    | >=14    | >=18.2 |

---

## Contributing

We welcome improvements to our TS ecosystem! Follow these steps:

1. Clone the monorepo
2. Modify configs in `/packages/typescript-config`
3. Verify with test projects
4. Submit PR with:
   - Configuration changes
   - Updated documentation
   - Version bump (if needed)

**Validation Command:**

```bash
npx tsc --project test-projects/react-library/tsconfig.json
```

---

## License

Distributed under the MIT License. See `LICENSE` for more information.

---

> **Pro Tip:** Use `npm explore @cloud-hub/typescript-config` to inspect configuration files directly from your terminal.
