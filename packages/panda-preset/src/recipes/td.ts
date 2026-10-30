import { defineRecipe } from '@pandacss/dev'
import type { RecipeConfig, RecipeVariantRecord } from '@pandacss/types'

/**
 * This module contains the td recipe.
 * @module
 */

/**
 * Styles for the td component
 * @definition [Table docs](https://cerberus.digitalu.design/react/table)
 */
export const td: RecipeConfig<RecipeVariantRecord> = defineRecipe({
  deprecated: true,
  className: 'td',
  description: 'Styles for the Td component.',

  base: {
    borderTop: '1px solid',
    borderColor: 'page.border.200',
    textStyle: 'label-md',
    _last: {
      borderRight: 'none',
    },
  },

  variants: {
    size: {
      sm: {
        h: '2rem',
        px: '3',
      },
      md: {
        h: '3rem',
        px: '3',
      },
      lg: {
        h: '3.5rem',
        px: '4',
      },
    },
  },

  defaultVariants: {
    size: 'md',
  },
})
