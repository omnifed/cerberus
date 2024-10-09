import {
  defineRecipe,
  type RecipeConfig,
  type RecipeVariantRecord,
  type SystemStyleObject,
} from '@pandacss/dev'
import { gradientValues, type GradientValue } from '../utilities'

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
    fontFamily: 'mono',
    overflow: 'hidden',
    textTransform: 'uppercase',
  },

  variants: {
    gradient: {
      ...createGradientVariants(),
      none: {},
    },
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
        h: '4rem',
        w: '4rem',
      },
      '2xl': {
        fontSize: '2rem',
        h: '7rem',
        w: '7rem',
      },
      '3xl': {
        fontSize: '2.625rem',
        h: '10rem',
        w: '10rem',
      },
      '4xl': {
        fontSize: '3.5rem',
        h: '12rem',
        w: '12rem',
      },
    },
  },

  defaultVariants: {
    gradient: 'charon-light',
    size: 'lg',
  },
})

function createGradientVariants(): Record<GradientValue, SystemStyleObject> {
  return gradientValues.reduce((acc, value) => {
    return {
      ...acc,
      [value]: {
        gradient: value,
      },
    }
  }, {}) as Record<GradientValue, SystemStyleObject>
}
