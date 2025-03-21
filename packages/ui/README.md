
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


---

> **Pro Tip:** For optimal development experience, use our [VS Code recommended extensions](.vscode/extensions.json) and workspace settings.
