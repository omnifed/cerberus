import {
  defineRecipe,
  type RecipeConfig,
  type RecipeVariantRecord,
} from '@pandacss/dev'

/**
 * This module contains the buttonGroup recipe.
 * @module
 */

/**
 * Styles for the buttonGroup family components
 */
export const buttonGroup: RecipeConfig<RecipeVariantRecord> = defineRecipe({
  className: 'buttonGroup',
  description: 'Styles for the buttonGroup component.',

  base: {
    display: 'inline-flex',
    gap: 'var(--btn-group-gap)',
    isolation: 'isolate',
    position: 'relative',
  },

  variants: {
    layout: {
      default: {
        gap: '{spacing.md}',
      },
      attached: {
        gap: 0,
      },
    },
  },

  defaultVariants: {
    layout: 'default',
  },
})
