import { defineRecipe } from '@pandacss/dev'
import type { RecipeConfig, RecipeVariantRecord } from '@pandacss/types'

/**
 * This module contains the thead recipe.
 * @module
 */

/**
 * Styles for the Thead component
 * @definition [Table docs](https://cerberus.digitalu.design/react/table)
 */
export const thead: RecipeConfig<RecipeVariantRecord> = defineRecipe({
  deprecated: true,
  className: 'thead',
  description: 'Styles for the Thead component.',

  base: {
    _first: {
      borderTop: 'none',
    },
  },

  variants: {},

  defaultVariants: {},
})
