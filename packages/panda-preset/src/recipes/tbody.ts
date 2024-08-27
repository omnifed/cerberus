import {
  defineRecipe,
  type RecipeConfig,
  type RecipeVariantRecord,
} from '@pandacss/dev'

/**
 * This module contains the tbody recipe.
 * @module
 */

/**
 * Styles for the tbody component
 * @definition [Table docs](https://cerberus.digitalu.design/react/table)
 */
export const tbody: RecipeConfig<RecipeVariantRecord> = defineRecipe({
  className: 'tbody',
  description: 'Styles for the Tbody component.',

  base: {
    bgColor: 'page.surface.100',
  },

  variants: {
    decoration: {
      zebra: {
        '& tr': {
          _even: {
            bgColor: 'page.surface.initial',
          },
        },
      },
      default: {},
    },
  },

  defaultVariants: {
    decoration: 'default',
  },
})
