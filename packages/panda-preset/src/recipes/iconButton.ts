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
  notifyStyles,
  outlinedSubtleUsage,
  outlinedUsage,
  textUsage,
} from './shared/button.base'

/**
 * This module contains the iconButton recipe.
 * @module
 */

/**
 * Styles for the Button component
 */
export const iconButton: RecipeConfig<RecipeVariantRecord> = defineRecipe({
  className: 'icon-btn',
  description: 'WCAG Level AAA compliant button styles.',
  jsx: ['IconButton', 'ClosableTag'],

  base: {
    ...buttonBase,
    flexShrink: 0,
    h: 'var(--btn-h)',
    minW: 'initial',
    pxi: '0',
    rounded: 'full',
    w: 'var(--btn-w)',
    _notify: {
      position: 'relative',
      _after: {
        alignItems: 'center',
        bgColor: 'danger.surface.200',
        color: 'danger.text.200',
        content: 'attr(data-notify-count)',
        display: 'inline-flex',
        fontFamily: 'mono',
        fontSize: '0.625rem',
        h: '1rem',
        insetBlockEnd: 'auto',
        insetInlineStart: 'auto',
        insetInlineEnd: 0,
        justifyContent: 'center',
        pos: 'absolute',
        paddingInlineStart: 'calc(0.25rem + 2px)',
        paddingInlineEnd: 'xs',
        rounded: 'full',
        translate: '50% -50%',
        top: 'var(--notify-top)',
      },
    },
  },

  variants: {
    palette: buttonPalettes,
    usage: {
      ghost: textUsage,
      filled: filledUsage,
      outlined: outlinedUsage,
      ['outlined-subtle']: outlinedSubtleUsage,
    },
    shape: {
      square: {
        rounded: 'lg',
      },
      circle: {
        rounded: 'full',
      },
    },
    size: {
      xs: {
        '--btn-h': '1.5rem',
        '--btn-w': '1.5rem',
        '--notify-top': '-0.25rem',
      },
      sm: {
        '--btn-h': '2rem',
        '--btn-w': '2rem',
        '--notify-top': '-0.25rem',
      },
      md: {
        '--btn-h': '2.5rem',
        '--btn-w': '2.5rem',
        '--notify-top': '-0.25rem',
      },
      lg: {
        '--btn-h': '2.75rem',
        '--btn-w': '2.75rem',
        '--notify-top': '0.4rem',
      },
    },
  },

  compoundVariants: buttonCompoundVariants,

  defaultVariants: {
    palette: 'action',
    usage: 'ghost',
    shape: 'circle',
    size: 'lg',
  },
})
