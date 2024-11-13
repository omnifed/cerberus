import { defineSlotRecipe, type SlotRecipeConfig } from '@pandacss/dev'

/**
 * This module contains the menu recipe.
 * @module
 */

/**
 * Styles for the Menu family components
 * @definition [ARK docs](https://ark-ui.com/react/docs/components/menu)
 * @definition [Menu docs](https://cerberus.digitalu.design/react/menu)
 */
export const menu: Partial<SlotRecipeConfig> = defineSlotRecipe({
  className: 'menu',
  slots: [],

  base: {},

  variants: {},

  defaultVariants: {},
})
