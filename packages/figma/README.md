# Figma

Fetch data from Figma in an easy way utilizing the REST API.

- [Figma Docs](https://www.figma.com/developers)

## Installation

This package is hosted on [JSR](https://jsr.io/@cerberus/figma)

```bash
pnpm add jsr:@cerberus/figma
```

## API

The API is divided into two parts:

- **Core**: Provides basic fetch functionality for interacting with Figma.
- **Mixins**: Provides additional features for interacting with Figma data.

### Core

Use `figma` to fetch data from Figma.

Basic Usage:

```typescript
import { figma } from '@cerberus/figma'

const token = process.env.FIGMA_ACCESS_TOKEN
const file = 'MY_FILE_ID'

const api = figma(token, file)
```

#### API

```typescript
declare figma(token: string, file: string, mixins?: Mixin[]): FigmaAPI;
```

| Name   | Type    | Description                       |
| ------ | ------- | --------------------------------- |
| token  | string  | Figma access token                |
| file   | string  | Figma file ID                     |
| mixins | Mixin[] | Array of mixins to add to the API |

### Mixins

We provide three mixins out of the box. However, you can create your own mixins
to extend the functionality of the API.

1. `localVarsMixin`: get local variables
2. `publishedVarsMixin`: get published variables
3. `fileNodesMixin`: get file nodes

Basic Usage:

```typescript
import { figma, localVarsMixin, publishedVarsMixin } from '@cerberus/figma'

const token = process.env.FIGMA_ACCESS_TOKEN
const file = 'MY_FILE_ID'

const api = figma(token, file, [localVarsMixin, publishedVarsMixin])
```

## Typescript

We expose a few types to help improve the development experience.

For example, you may want to strictly type your api if adding mixins:

```typscript
import { type FigmaApiType } from '@cerberus/figma';

type FigmaWithMixins = FigmaApiType &
  typeof localVarsMixin &
  typeof publishedVarsMixin &
  typeof fileNodesMixin

const api = figma(token, file, [
    localVarsMixin,
    publishedVarsMixin,
    fileNodesMixin,
  ]) as FigmaWithMixins
```

## IRL Example

Checkout the [create-token-files.ts](https://github.com/omnifed/cerberus/blob/main/packages/figma/src/create-token-files.ts)
to see how we utilize this API to sync our Fimga tokens to our Panda themes.

## Contribution

Anyone is welcome to contribute to this project and create more mixins or improvements.
