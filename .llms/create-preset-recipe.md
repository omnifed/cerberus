# Create Preset Recipe

This document outlines the steps to create a new recipe within the `packages/panda-preset` project.

This process must follow the [style guide](./style-guide.md) conventions.

## Steps

1. Navigate to the `packages/panda-preset/src/recipes/slots` directory
2. Create a new file named `untitledRecipe`
3. Navigate to the `packages/panda-preset/src/recipes/index.ts` file
4. Import the new recipe in `index.ts` adding it to the `slots` export in the correct alphabetical order. The import should be organized alphabetically as well in the "slots" import group.

## `packages/panda-preset/src/recipes`

This directory is responsible for housing all recipes within the project. There are two types of recipes: `standard` and `slot`. Standard recipes have no style layers and are used for single layered components like a button. Slot recipes are used for components that have multiple style layers, such as menus, modals, inputs, etc. We utilize Ark-UI for our component layer which means that any recipe made for an Ark-UI component should be a slot recipe.

## `packages/panda-preset/src/recipes/slots/untitledRecipe.ts`

This file serves as the recipe for the untitled component.

Use this template to provide the contents of the file:

```typescript
import { defineSlotRecipe, type SlotRecipeConfig } from '@pandacss/dev'
import {} from '@ark-ui/react'

/**
 * This module contains the untitled recipe.
 * @module
 */

/**
 * Styles for the untitled family components
 * @definition [ARK docs](https://ark-ui.com/react/docs/components/untitled)
 */
export const untitled: Partial<SlotRecipeConfig> = defineSlotRecipe({
  className: 'untitled',
  slots: untitledAnatomy.keys(),
  jsx: [
    // primitives
    'ArkUIComponentAnatomyLayer',
    // abstractions
    'UntitledComponent',
  ],

  base: {
    arkAnatomyLayer: {},
  },

  variants: {},

  defaultVariants: {},
})
```

## `packages/panda-preset/src/recipes/index.ts`

This file serves as the entry point for all recipes within the `packages/panda-preset` project. It is responsible for exporting all recipes, making them available for use throughout the project.
