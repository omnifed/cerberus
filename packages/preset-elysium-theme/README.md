# Panda Preset - Elysium Theme

This is the official [Panda-CSS](https://panda-css.com/) preset for the Elysium
theme compatible with the Cerberus design system.

## Installation

```bash
npx jsr add @cerberus/preset-elysium-theme
```

## Usage

```typescript
// panda.config.ts
import { defineConfig } from '@pandacss/dev'
import { cerberusPreset, cerberusConfig } from '@cerberus/panda-preset'
import {
  elysiumTheme,
  getElysiumThemeName,
} from '@cerberus/preset-elysium-theme'

export default defineConfig({
  ...cerberusConfig,

  include: ['./src/**/*.{ts,tsx,js,jsx}'],
  exclude: [],

  presets: [cerberusPreset(), elysiumTheme],

  staticCss: {
    themes: ['cerberus', getElysiumThemeName()],
  },
})
```

## Features

- [Conditions](https://github.com/omnifed/cerberus/blob/main/packages/preset-elysium-theme/src/conditions.ts)
- [Semantic Tokens](https://github.com/omnifed/cerberus/blob/main/packages/preset-elysium-theme/src/theme/semantic-tokens/index.ts)

---

_Copyright (c) 2024 Digital University, All Rights Reserved_
