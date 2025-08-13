# Create React Component

This document outlines the steps to create a new React component within the `packages/react` project.

This process must follow the [style guide](./style-guide.md) conventions.

## Steps

1. Navigate to the `packages/react/components` directory:
2. Create a new directory named `untitled-component`
3. Navigate into the `untitled-component` directory:
4. Create a new file named `index.ts`
5. Create a new file named `parts.ts`
6. Create a new file named `primitives.tsx`

## `packages/react/components`

This directory is responsible for housing all React components within the project. Each component should be organized into its own directory, containing all necessary files such as `index.ts`, `parts.ts`, and `primitives.tsx`. This allows us to utilize tree-shaking and code splitting effectively, optimizing the overall bundle size and performance of the application.

## `packages/react/components/untitled-component/index.ts`

This file serves as the entry point for the new component API. It exports any component related APIs that should be publicly accessible. This file is mandatory.

Use this template to provide the contents of the file:

```typescript
export * from './parts'
export * from './primitives'
```

## `packages/react/components/untitled-component/parts.ts`

This file contains the Object implementation of the primitives. It serves as a way to import the primitives and use them in a more structured way. This file is mandatory.

Use this template to provide the contents of the file:

```typescript
import type { ElementType } from 'react'
import {} from './primitives'

/**
 * This module contains the parts of the Untitled component.
 * @module 'untitled/parts'
 */

interface UntitledPartsValue {
  /**
   * The context provider of the untitled.
   */
  Root: ElementType
}

/**
 * An Object containing the parts of the Untitled component. For users that
 * prefer Object component syntax.
 *
 * @remarks
 *
 * When using object component syntax, you import the UntitledParts object and
 * the entire family of components vs. only what you use.
 */
export const UntitledParts: UntitledPartsValue = {}
```

## `packages/react/components/untitled-component/primitives.tsx`

This file contains the primitive components of the new component API. This file is responsible for importing the related Ark-UI API, PandaCSS recipe, and using the Cerberus Primitive Factory to create the necessary primitive components and their types. Each primitive should directly mirror the Ark-UI component layer.

Because this file is intricate, do not create primitives. Instead, use the following template:

```typescript
import {} from '@ark-ui/react/field'
import {} from 'styled-system/recipes'
import {
  createCerberusPrimitive,
  type CerberusPrimitiveProps,
} from '../../system/index'

/**
 * This module contains all the primitives of the Untitled component.
 * @module 'untitled'
 */

const { withSlotRecipe, withNoRecipe } = createCerberusPrimitive(ADD_RECIPE)

// Root
```
