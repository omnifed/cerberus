# Panda Preset - Oceana Theme

This is the official [Panda-CSS](https://panda-css.com/) preset for the Oceana
theme compatible with the Cerberus design system.

## Installation

```bash
npx jsr add @cerberus/preset-oceana-theme
```

## Usage

```typescript
// panda.config.ts
import { defineConfig } from '@pandacss/dev'
import { cerberusPreset, cerberusConfig } from '@cerberus/panda-preset'
import { oceanaTheme, getOceanaThemeName } from '@cerberus/preset-oceana-theme'

export default defineConfig({
  ...cerberusConfig,

  include: ['./src/**/*.{ts,tsx,js,jsx}'],
  exclude: [],

  presets: [cerberusPreset(), oceanaTheme],

  staticCss: {
    themes: ['cerberus', getOceanaThemeName()],
  },
})
```

## Features

- [Conditions](https://github.com/omnifed/cerberus/blob/main/packages/preset-oceana-theme/src/conditions.ts)
- [Semantic Tokens](https://github.com/omnifed/cerberus/blob/main/packages/preset-oceana-theme/src/theme/semantic-tokens/index.ts)

---

_Copyright (c) 2024 Digital University, All Rights Reserved_
