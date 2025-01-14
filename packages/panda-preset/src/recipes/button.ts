import {
  defineRecipe,
  type RecipeConfig,
  type RecipeVariantRecord,
} from '@pandacss/dev'
import {
  buttonBase,
  buttonCompoundVariants,
  buttonPalettes,
  filledUsage,
  outlinedUsage,
  sharpRadii,
  textUsage,
} from './shared/button.base'

/**
 * This module contains the button recipe.
 * @module
 */

/**
 * Styles for the Button component
 * @definition [ARIA Target Size](https://www.w3.org/WAI/WCAG21/Understanding/target-size.html#:~:text=Understanding%20SC%202.5.,%3ATarget%20Size%20(Level%20AAA)&text=The%20size%20of%20the%20target,Equivalent)
 * @definition [Button docs](https://cerberus.digitalu.design/react/button)
 */
export const button: RecipeConfig<RecipeVariantRecord> = defineRecipe({
  className: 'button',
  description: 'WCAG Level AAA compliant button styles.',

  base: {
    ...buttonBase,
    pxi: '4',
  },

  variants: {
    palette: buttonPalettes,
    usage: {
      ghost: textUsage,
      outlined: outlinedUsage,
      filled: filledUsage,
    },
    shape: {
      sharp: sharpRadii,
      rounded: {
        pxi: '8',
        rounded: 'full',
      },
    },
    size: {
      sm: {
        h: '2rem',
        marginBlock: '0.375rem', // add a11y target size
        pxi: '3',
        md: {
          marginBlock: 'initial',
        },
      },
      md: {
        h: '2.75rem',
      },
    },
  },

  compoundVariants: buttonCompoundVariants,

  defaultVariants: {
    palette: 'action',
    usage: 'filled',
    shape: 'sharp',
    size: 'md',
  },
})
