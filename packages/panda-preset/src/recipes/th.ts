import {
  defineRecipe,
  type RecipeConfig,
  type RecipeVariantRecord,
} from '@pandacss/dev'

/**
 * This module contains the th recipe.
 * @module
 */

/**
 * Styles for the th component
 * @definition [Table docs](https://cerberus.digitalu.design/react/table)
 */
export const th: RecipeConfig<RecipeVariantRecord> = defineRecipe({
  className: 'th',
  description: 'Styles for the Th component.',

  base: {
    borderColor: 'page.border.200',
    bgColor: 'page.bg.initial',
    fontWeight: '600',
    textAlign: 'left',
    textStyle: 'label-md',
    transitionProperty: 'background-color',
    transitionDuration: '150ms',
    verticalAlign: 'middle',
    _last: {
      borderRight: 'none',
    },
    _active: {
      bgColor: 'action.ghost.active',
    },
  },

  variants: {
    size: {
      md: {
        h: '3rem',
        pxi: '3',
      },
      lg: {
        h: '3.5rem',
        pxi: '4',
      },
    },
  },

  defaultVariants: {
    size: 'md',
  },
})
