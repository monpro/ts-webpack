# Webpack, TypeScript, and Jest Integration
## A Practical Guide

---

# The Big Picture

## Three Tools, One Goal
- TypeScript: Type safety & modern JavaScript
- Webpack: Bundling & build process
- Jest: Testing & verification

Think of them as a pipeline:
TypeScript → Webpack → Production Code
          ↘  Jest    → Test Verification

---

# Real-World Example: Image Support

## 1. TypeScript Declaration
```typescript
// src/types/index.d.ts
declare module '*.png' {
    const value: string;
    export default value;
}
```

## 2. Webpack Configuration
```javascript
{
  test: /\.(png|jpg|jpeg|svg)$/i,
  type: 'asset/resource'
}
```

## 3. Jest Configuration
```javascript
moduleNameMapper: {
  '\\.(jpg|jpeg|png|svg)$': '<rootDir>/src/__mocks__/fileMock.js'
}
```

All three working together to handle images!

---

# Path Aliases: The Connection Point

## One Configuration, Three Tools

TypeScript (tsconfig.json):
```json
{
  "baseUrl": "./src",
  "paths": {
    "@/*": ["*"],
    "@components/*": ["components/*"]
  }
}
```

Webpack recognizes these paths through:
```javascript
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
plugins: [new TsconfigPathsPlugin()]
```

Jest follows suit:
```javascript
moduleNameMapper: {
  '^@/(.*)$': '<rootDir>/src/$1',
  '^@components/(.*)$': '<rootDir>/src/components/$1'
}
```

---

# Practical Usage Example

## Component Structure
```
src/
├── components/
│   └── Button.tsx
├── types/
│   └── index.d.ts
└── assets/
    └── icon.png
```

## Using in Code
```typescript
// Clean imports thanks to path aliases
import { Button } from '@components/Button';
import icon from '@/assets/icon.png';
```

All three tools understand these imports!

---

# Module Resolution in Action

## TypeScript Configuration
```json
{
  "moduleResolution": "node",
  "esModuleInterop": true,
  "allowSyntheticDefaultImports": true
}
```

## Real Impact
Before:
```typescript
import * as React from 'react';
```

After:
```typescript
import React from 'react';
```

All tools respect this configuration!

---

# Asset Handling Flow

1. TypeScript Step
   - Provides type definitions
   - Enables import syntax

2. Webpack Step
   - Processes files
   - Generates URLs
   - Optimizes assets

3. Jest Step
   - Mocks assets
   - Enables testing

Example from our discussion:
```typescript
// Works in all environments
import logo from './assets/logo.png';
```

---

# Testing Integration Example

## Component:
```typescript
// src/components/Button.tsx
export const Button = () => (
  <button>
    <img src={logo} alt="logo" />
    Click me
  </button>
);
```

## Test:
```typescript
// Jest understands both TypeScript and asset imports
import { Button } from '@components/Button';

test('renders button', () => {
  // Works thanks to proper integration
});
```

---

# Best Practices from Our Discussion

1. Single Source of Truth
   - Let TypeScript config drive Webpack and Jest
   - Use tsconfig-paths-webpack-plugin
   - Keep path aliases consistent

2. Asset Management
   - Declare types for all assets
   - Use asset/resource in Webpack
   - Mock properly in Jest

3. Development Workflow
   - TypeScript for development
   - Webpack for building
   - Jest for continuous testing

---

# Key Takeaways

1. Integration Benefits
   - Consistent import paths
   - Type safety across all tools
   - Seamless asset handling

2. Configuration Tips
   - Start with TypeScript config
   - Let other tools follow
   - Keep it simple and consistent

3. Real-World Usage
   - Clean, maintainable code
   - Efficient development workflow
   - Reliable testing environment

---

# Questions?

Thank you for your attention!
