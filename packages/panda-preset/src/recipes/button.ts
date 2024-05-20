import { defineRecipe } from '@pandacss/dev'
import {
  buttonBase,
  buttonPalettes,
  filledUsage,
  nonTextStates,
  textUsage,
} from './shared/button.base'

/**
 * Styles for the Button component
 * @definition https://www.w3.org/WAI/WCAG21/Understanding/target-size.html#:~:text=Understanding%20SC%202.5.,%3ATarget%20Size%20(Level%20AAA)&text=The%20size%20of%20the%20target,Equivalent
 */
export const button = defineRecipe({
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
      sharp: {},
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
