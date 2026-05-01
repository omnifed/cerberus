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
      xs: {
        h: '6',
        minW: '6',
        fontSize: 'xs',
        textStyle: 'button-sm',
        px: '2',
        gap: '1',
        _icon: {
          width: '3.5',
          height: '3.5',
        },
      },
      sm: {
        h: '9',
        minW: '9',
        px: '3.5',
        textStyle: 'button-sm',
        gap: '2',
        _icon: {
          width: '4',
          height: '4',
        },
      },
      md: {
        h: '10',
        minW: '10',
        textStyle: 'button-md',
        px: '4',
        gap: '2',
        _icon: {
          width: '5',
          height: '5',
        },
      },
      lg: {
        h: '11',
        minW: '11',
        textStyle: 'button-md',
        px: '5',
        gap: '3',
        _icon: {
          width: '5',
          height: '5',
        },
      },
      xl: {
        h: '12',
        minW: '12',
        textStyle: 'button-md',
        px: '5',
        gap: '2.5',
        _icon: {
          width: '5',
          height: '5',
        },
      },
      '2xl': {
        h: '16',
        minW: '16',
        fontSize: 'lg',
        textStyle: 'button-md',
        px: '7',
        gap: '3',
        _icon: {
          width: '6',
          height: '6',
        },
      },
    },
  },

  compoundVariants: buttonCompoundVariants,

  defaultVariants: {
    palette: 'action',
    usage: 'filled',
    shape: 'sharp',
    size: 'lg',
  },
})
