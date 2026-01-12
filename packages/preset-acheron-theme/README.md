# Panda Preset - Acheron Theme

This is the official [Panda-CSS](https://panda-css.com/) preset for the Acheron
theme compatible with the Cerberus design system.

## Installation

```bash
npx jsr add @cerberus/preset-acheron-theme
```

## Usage

```typescript
// panda.config.ts
import { defineConfig } from '@pandacss/dev'
import { cerberusPreset, cerberusConfig } from '@cerberus/panda-preset'
import {
  acheronTheme,
  getAcheronThemeName,
} from '@cerberus/preset-acheron-theme'

export default defineConfig({
  ...cerberusConfig,

  include: ['./src/**/*.{ts,tsx,js,jsx}'],
  exclude: [],

  presets: [cerberusPreset(), acheronTheme],

  staticCss: {
    themes: ['cerberus', getAcheronThemeName()],
  },
})
```

## Features

- [Conditions](https://github.com/omnifed/cerberus/blob/main/packages/panda-preset/src/conditions.ts)
- [Semantic Tokens](https://github.com/omnifed/cerberus/blob/main/packages/panda-preset/src/theme/semantic-tokens/index.ts)

---

_Copyright (c) 2024 Digital University, All Rights Reserved_
