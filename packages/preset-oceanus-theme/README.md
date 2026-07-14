# Panda Preset - Oceanus Theme

This is the official [Panda-CSS](https://panda-css.com/) preset for the Oceanus
theme compatible with the Cerberus design system.

## Installation

```bash
npx jsr add @cerberus/preset-oceanus-theme
```

## Usage

```typescript
// panda.config.ts
import { defineConfig } from '@pandacss/dev'
import { cerberusPreset, cerberusConfig } from '@cerberus/panda-preset'
import { oceanusTheme, getOceanusThemeName } from '@cerberus/preset-oceanus-theme'

export default defineConfig({
  ...cerberusConfig,

  include: ['./src/**/*.{ts,tsx,js,jsx}'],
  exclude: [],

  presets: [cerberusPreset(), oceanusTheme],

  staticCss: {
    themes: ['cerberus', getOceanusThemeName()],
  },
})
```

## Features

- [Conditions](https://github.com/omnifed/cerberus/blob/main/packages/preset-oceanus-theme/src/conditions.ts)
- [Semantic Tokens](https://github.com/omnifed/cerberus/blob/main/packages/preset-oceanus-theme/src/theme/semantic-tokens/index.ts)

---

_Copyright (c) 2024 Digital University, All Rights Reserved_
