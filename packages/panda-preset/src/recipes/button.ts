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
        border: '2px solid',
        borderColor: 'colorPalette.border.initial',
        borderRadius: '0.375rem',
        ...nonTextStates,
      },
      filled: filledUsage,
    },
    shape: {
      sharp: {
        borderTopRightRadius: '2',
        borderBottomLeftRadius: '2',
      },
      rounded: {
        rounded: 'full',
      },
    },
  },

  defaultVariants: {},
})
