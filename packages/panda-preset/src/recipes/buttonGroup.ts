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
        '--btn-group-gap': '{spacing.md}',
      },
      attached: {
        '--btn-group-gap': 0,
        '& > :is([data-scope="button"])': {
          borderTopRightRadius: '0!',
          borderBottomRightRadius: '0!',
        },
        '& > :is([data-scope="icon-button"])': {
          borderLeft: '1px solid',
          borderLeftColor: 'page.border.initial',
          borderTopLeftRadius: '0!',
          borderBottomLeftRadius: '0!',
        },
      },
    },
    shape: {
      default: {},
      sharp: {},
      rounded: {},
    },
  },

  defaultVariants: {
    layout: 'default',
    shape: 'sharp',
  },

  compoundVariants: [
    {
      layout: 'attached',
      shape: 'sharp',
      css: {
        '& > :is([data-scope="icon-button"])': {
          borderBottomRightRadius: '0!',
        },
      },
    },
  ],
})
