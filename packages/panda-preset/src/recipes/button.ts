import {
  defineRecipe,
  type RecipeConfig,
  type RecipeVariantRecord,
} from '@pandacss/dev'
import {
  buttonCompoundVariants,
  buttonPalettes,
  filledUsage,
  outlinedSubtleUsage,
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
    alignItems: 'center',
    appearance: 'none',
    borderWidth: '1px',
    borderColor: 'transparent',
    cursor: 'button',
    display: 'inline-flex',
    gap: 'sm',
    justifyContent: 'center',
    flexShrink: '0',
    focusVisibleRing: 'outside',
    fontWeight: '600',
    isolation: 'isolate',
    lineHeight: '0',
    outline: 'none',
    position: 'relative',
    textDecoration: 'none',
    transitionProperty: 'common',
    transitionDuration: 'moderate',
    userSelect: 'none',
    verticalAlign: 'middle',
    whiteSpace: 'nowrap',
    _disabled: {
      layerStyle: 'disabled',
    },
    _icon: {
      flexShrink: '0',
    },
  },

  variants: {
    palette: buttonPalettes,
    usage: {
      ghost: textUsage,
      outlined: outlinedUsage,
      'outlined-subtle': outlinedSubtleUsage,
      filled: filledUsage,
    },
    shape: {
      default: {
        rounded: 'sm',
      },
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
        px: '0.75rem',
        textStyle: 'button-sm',
        md: {
          marginBlock: 'initial',
        },
      },
      md: {
        h: '2.75rem',
        px: 'md',
        textStyle: 'button-md',
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
