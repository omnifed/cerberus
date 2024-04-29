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

If you use NextJS, we also provide a recommended font configuration for you to use.

```typescript
export const cerberusNextFontSettings = {
  display: 'swap',
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
}
```

### Usage in NextJS

```typescript
import { cerberusNextFontSettings } from '@cerberus-design/panda-preset'
import { Poppins } from 'next/font/google'

const poppins = Poppins(cerberusNextFontSettings)
```

---

_Copyright (c) 2024 Digital University, All Rights Reserved_
