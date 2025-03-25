# Cerberus Solid

The Cerberus Design System component library for SolidJS projects.

## Installation

### Step 1: Install and Setup PandaCSS

First, you need to install and setup PandaCSS in your project. Follow the instructions in the [PandaCSS documentation](https://panda-css.com/docs/installation/solidjs) to do this.

### Step 2: Install and Setup Cerberus Panda Preset

```bash
pnpm dlx jsr add @cerberus/panda-preset -D
```

Then, update your `panda.config.ts` file to use the Cerberus helpers:

```ts
import {
  createCerberusConfig,
  createCerberusPreset,
} from '@cerberus/panda-preset'

export default createCerberusConfig({
  clean: true,
  presets: [createCerberusPreset()],
  jsxFramework: 'solid',

  exclude: [],
  outdir: 'styled-system',
})
```

Next, update your root `html` tag to include the Cerberus settings:

```html
<html lang="en" data-panda-theme="cerberus" data-color-mode="light"></html>
```

### Step 3: Install Cerberus Solid & Ark-UI

```bash
pnpm add @cerberus/solid@npm:@cerberus-design/solid @ark-ui/solid
```

For details see the [official guide](https://cerberus.digitalu.design/preset).

## Solid-Start usage

To ensure Vite properly recognizes the internal paths Cerberus Solid uses, update your `tsconfig.json` and `app.config.ts` files as follows:

### tsconfig.json

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "styled-system/*": ["styled-system/*"]
    }
  }
}
```

### app.config.ts

```ts
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from '@solidjs/start/config'
import tsconfigPaths from 'vite-tsconfig-paths'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  vite: {
    plugins: [tsconfigPaths()],

    resolve: {
      alias: {
        // Vite doesn't include dependency paths
        'styled-system': resolve(__dirname, './styled-system'),
      },
    },
  },
})
```
