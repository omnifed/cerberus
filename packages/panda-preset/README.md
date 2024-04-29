# Panda Preset

This is the official [Panda-CSS](https://panda-css.com/) preset for the Cerberus design system.

## Installation

```bash
pnpm add -D @cerberus-design/panda-preset
```

## Usage

```typescript
import { defineConfig } from '@pandacss/dev'
import pandaPreset from '@pandacss/preset-panda'
import { cerberusPreset, cerberusConfig } from '@cerberus-design/panda-preset'

export default defineConfig({
  ...cerberusConfig,

  include: ['./src/**/*.{ts,tsx,js,jsx}'],
  exclude: [],

  presets: [pandaPreset, cerberusPreset],
})
```

## Features

- [Conditions]('./src/conditions.ts')
- [Utilities]('./src/utilities.ts')
- [Patterns](./src/patterns.ts)
- [Global CSS](./src/globalCss.ts)
- [Key-frames](./src/theme/keyframes.ts)
- [Text Styles](./src/theme/textStyles.ts)
- [Tokens](./src/theme/tokens.ts)
- [Semantic Tokens](./src/theme/semanticTokens/index.ts)
- [Recipes](./src/recipes/index.ts)

## NextJS Font Features

If you use NextJS, we recommend the font and settings mentioned below. Unfortunately, NextJS enforces a rule of `Font loader values must be explicitly written literals.` which means you cannot use a variable to define the font settings or else we would also provide that. :sob:

```typescript
const poppins = Poppins({
  display: 'swap',
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
})
```

---

_Copyright (c) 2024 Digital University, All Rights Reserved_
