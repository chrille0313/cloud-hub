# Cloud Hub Monorepo Packages

![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)

## Table of Contents

- [@cloud-hub/ui](#cloud-hubui)
  - [Features](#features)
  - [Installation](#installation)
  - [Quick Start](#quick-start)
  - [Component Library](#component-library)
  - [Configuration](#configuration)
- [@cloud-hub/typescript-config](#cloud-hubtypescript-config)
  - [Features-1](#features-1)
  - [Installation-1](#installation-1)
  - [Usage Guide](#usage-guide)
  - [Configuration Details](#configuration-details)
- [Contributing](#contributing)
- [License](#license)

---

# @cloud-hub/ui

**A Reusable UI Component Library for Cloud Ecosystem**

## Features

- 🧩 Reusable React components with TypeScript support
- 🎨 Consistent design system with theme customization
- ♿ Accessibility-first components (WCAG compliant)
- 📦 Pre-configured for Next.js and React projects
- 💅 Powered by Tailwind CSS (optional shadcn-ui integration)

## Installation

```bash
# Using npm
npm install @cloud-hub/ui

# Using yarn
yarn add @cloud-hub-ui
```

## Quick Start

```tsx
import { Button } from "@cloud-hub/ui";

export default function Dashboard() {
  return (
    <Button variant="primary" onClick={() => console.log("Action triggered")}>
      Connect Service
    </Button>
  );
}
```

**Key Props:**

- `variant`: primary | secondary | ghost | outline (default: primary)
- `size`: sm | md | lg (default: md)
- `disabled`: boolean (default: false)

## Component Library

| Component | Description                       | Status    |
| --------- | --------------------------------- | --------- |
| Button    | Interactive action triggers       | ✅ Stable |
| Input     | Form input fields with validation | ✅ Stable |
| DataTable | Sortable/paginated tables         | 🚧 Beta   |
| Modal     | Accessible dialog system          | ✅ Stable |
| Card      | Content containers with variants  | ✅ Stable |
| Accordion | Collapsible content sections      | 🚧 Beta   |

## Configuration

1. Add Tailwind configuration (`tailwind.config.js`):

```js
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@cloud-hub/ui/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2563eb", // Example customization
        secondary: "#4f46e5",
      },
    },
  },
};
```

2. Import global CSS in your app:

```tsx
import "@cloud-hub/ui/dist/styles.css";
```

---

# @cloud-hub/typescript-config

**Standardized TypeScript Configuration for Cloud Projects**

## Features

- 🛠️ Unified TS configurations for multiple project types
- 🔄 Consistent compiler options across monorepo
- ⚡ Next.js/React optimizations out-of-the-box
- 📁 Multiple presets:
  - Base configuration
  - Next.js application
  - React component library

## Installation

```bash
# Install as dev dependency
npm install --save-dev @cloud-hub/typescript-config
```

## Usage Guide

Extend the appropriate config in your `tsconfig.json`:

**Next.js Project**

```json
{
  "extends": "@cloud-hub/typescript-config/nextjs",
  "include": ["**/*.ts", "**/*.tsx"]
}
```

**React Component Library**

```json
{
  "extends": "@cloud-hub/typescript-config/react-library",
  "compilerOptions": {
    "outDir": "dist",
    "rootDir": "src"
  }
}
```

## Configuration Details

| Preset          | Key Features                          |
| --------------- | ------------------------------------- |
| `base`          | Core TS rules for all projects        |
| `nextjs`        | Next.js type checking & optimizations |
| `react-library` | Component library build configuration |

**Recommended compilerOptions for libraries:**

```json
{
  "declaration": true,
  "declarationMap": true,
  "sourceMap": true,
  "jsx": "react-jsx"
}
```

---

## Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

**Development Requirements:**

- Node.js v18+
- pnpm v8+
- TypeScript v5+

---

## License

Distributed under the MIT License. See `LICENSE` for more information.

---

> **Pro Tip:** For optimal development experience, use our [VS Code recommended extensions](.vscode/extensions.json) and workspace settings.
