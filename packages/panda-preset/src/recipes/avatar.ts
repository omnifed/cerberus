import {
  defineRecipe,
  type RecipeConfig,
  type RecipeVariantRecord,
} from '@pandacss/dev'

/**
 * This module contains the avatar recipe.
 * @module
 */

/**
 * Styles for the Avatar component
 * @definition [Avatar docs](https://cerberus.digitalu.design/react/avatar)
 */
export const avatar: RecipeConfig<RecipeVariantRecord> = defineRecipe({
  className: 'avatar',
  description: 'Styles for the Avatar component.',

  // combine with the circle pattern
  base: {
    cerbGradient: 'colorPalette',
    fontFamily: 'mono',
  },

  variants: {
    size: {
      xs: {
        fontSize: 'xs',
        h: '1.5rem',
        w: '1.5rem',
      },
      sm: {
        fontSize: 'xs',
        h: '2rem',
        w: '2rem',
      },
      md: {
        fontSize: 'sm',
        h: '2.5rem',
        w: '2.5rem',
      },
      lg: {
        fontSize: 'xl',
        h: '3rem',
        w: '3rem',
      },
      xl: {
        fontSize: '2xl',
        h: '3.5rem',
        w: '3.5rem',
      },
      '2xl': {
        fontSize: '2rem',
        h: '4rem',
        w: '4rem',
      },
      '3xl': {
        fontSize: '2.625rem',
        h: '5rem',
        w: '5rem',
      },
      '4xl': {
        fontSize: '3.5rem',
        h: '6rem',
        w: '6rem',
      },
    },
  },

  defaultVariants: {
    size: 'lg',
  },
})
