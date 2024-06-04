import {
  defineRecipe,
  type RecipeConfig,
  type RecipeVariantRecord,
} from '@pandacss/dev'
import {
  buttonBase,
  buttonPalettes,
  filledUsage,
  nonTextStates,
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
    h: '3.5rem', // a11y minimum touch target size: 2.75rem
    pxi: '4',

    md: {
      h: '2.75rem',
    },
  },

  variants: {
    palette: buttonPalettes,
    usage: {
      text: textUsage,
      outline: {
        ...nonTextStates,
        bgColor: 'colorPalette.bg.100.initial',
        border: '4px solid',
        borderColor: 'colorPalette.border.initial',
      },
      filled: filledUsage,
    },
    shape: {
      sharp: sharpRadii,
      rounded: {
        pxi: '8',
        rounded: 'full',
      },
    },
  },

  defaultVariants: {
    palette: 'action',
    usage: 'filled',
    shape: 'sharp',
  },
})
