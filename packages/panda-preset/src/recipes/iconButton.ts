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
  textUsage,
} from './shared/button.base'

/**
 * This module contains the iconButton recipe.
 * @module
 */

/**
 * Styles for the Button component
 * @definition [ARIA Target Size](https://www.w3.org/WAI/WCAG21/Understanding/target-size.html#:~:text=Understanding%20SC%202.5.,%3ATarget%20Size%20(Level%20AAA)&text=The%20size%20of%20the%20target,Equivalent)
 *
 * @definition [A11y Icon Usability](https://www.a11y-collective.com/blog/icon-usability-and-accessibility/)
 *
 * @definition [Button docs](https://cerberus.digitalu.design/react/button)
 */
export const iconButton: RecipeConfig<RecipeVariantRecord> = defineRecipe({
  className: 'icon-btn',
  description: 'WCAG Level AAA compliant button styles.',

  base: {
    ...buttonBase,
    flexShrink: 0,
    h: '2.75rem', // a11y minimum touch target size: 2.75rem
    pxi: '0',
    rounded: 'full',
    w: '2.75rem',
  },

  variants: {
    palette: buttonPalettes,
    usage: {
      ghost: textUsage,
      text: textUsage,
      filled: filledUsage,
      outlined: outlinedUsage,
    },
    shape: {
      circle: {
        pxi: '0',
        rounded: 'full',
      },
    },
    size: {
      sm: {
        md: {
          h: '1.5rem', // a11y minimum touch target size: 1.5rem for desktop
          w: '1.5rem',
        },
      },
      lg: {},
    },
  },

  compoundVariants: buttonCompoundVariants,

  defaultVariants: {
    palette: 'action',
    usage: 'text',
    shape: 'circle',
    size: 'lg',
  },
})
