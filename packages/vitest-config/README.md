# @cloud-hub/vitest-config

**Centralized Testing Configuration for Cloud Projects**


![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg) 



- ⚡ Vitest optimizations for TypeScript/React
- 📊 Built-in coverage configuration
- 🛠️ Pre-configured testing utilities
- 🔄 Shared global setup/teardown

## Installation

```bash
# Using npm
npm install --save-dev @cloud-hub/vitest-config vitest

# Using yarn
yarn add -D @cloud-hub/vitest-config vitest
```

## Quick Start

### Basic Configuration (`vitest.config.ts`)

```typescript
import { defineConfig } from "vitest/config";
import cloudHubConfig from "@cloud-hub/vitest-config";

export default defineConfig({
  ...cloudHubConfig,
  test: {
    ...cloudHubConfig.test,
    environment: "node", // Custom override
  },
});
```

### React Component Testing

```typescript
import { defineConfig } from "vitest/config";
import reactConfig from "@cloud-hub/vitest-config/react";

export default defineConfig({
  ...reactConfig,
  test: {
    ...reactConfig.test,
    setupFiles: ["./src/test/setup.ts"], // Additional setup
  },
});
```

## Configuration Presets

| Preset  | Includes                           | Best For         |
| ------- | ---------------------------------- | ---------------- |
| `base`  | DOM mocking, coverage, TS paths    | Node.js projects |
| `react` | React Testing Library, JSX support | React components |
| `edge`  | Web APIs, fetch mocking            | Edge runtime     |

## Core Configuration

**Base Vitest Config:**

```javascript
{
  test: {
    globals: true,
    environment: 'jsdom',
    coverage: {
      provider: 'v8',
      include: ['src/**/*.{ts,tsx}'],
      thresholds: {
        lines: 80,
        functions: 80,
        branches: 80,
        statements: 80
      }
    }
  }
}
```

**Recommended Scripts:**

```json
{
  "scripts": {
    "test": "vitest",
    "test:watch": "vitest --watch",
    "coverage": "vitest run --coverage"
  }
}
```

## Testing Utilities

### Mock Services

```typescript
import { mockCloudService } from "@cloud-hub/vitest-config/mocks";

test("fetch data", async () => {
  mockCloudService("getUsers", [{ id: 1, name: "Test" }]);
  // Test implementation
});
```

### Custom Matchers

```typescript
import "@cloud-hub/vitest-config/matchers";

test("API response", () => {
  expect(response).toHaveValidationError("email");
});
```

## Version Compatibility

| Config Version | Vitest | React | Node |
| -------------- | ------ | ----- | ---- |
| 1.x            | 0.32+  | 18+   | 16+  |
| 2.x            | 1.0+   | 18+   | 18+  |

## Contributing

1. Clone the monorepo
2. Modify configs in `/packages/vitest-config`
3. Validate with test projects:
   ```bash
   cd test-projects/react-app
   vitest run --config vitest.config.ts
   ```
4. Submit PR with:
   - Configuration changes
   - Updated test cases
   - Documentation updates

## License

Distributed under the MIT License. See `LICENSE` for more information.

---

**Pro Tip:** Use Vitest's UI mode for visual testing: `vitest --ui`

Combine with `@cloud-hub/mock-server` for full integration testing capabilities.
