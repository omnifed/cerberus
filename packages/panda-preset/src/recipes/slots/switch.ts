import { switchAnatomy } from '@ark-ui/anatomy'
import { defineSlotRecipe, type SlotRecipeConfig } from '@pandacss/dev'
import { checkbox } from './checkbox'

/**
 * This module contains the switch recipe.
 * @module
 */

/**
 * Styles for the Switch component.
 */
export const switchRecipe: Partial<SlotRecipeConfig> = defineSlotRecipe({
  className: 'switch',
  description: 'The styles for the Switch component',
  slots: [...switchAnatomy.keys(), 'indicator'],
  jsx: ['SwitchRoot', 'SwitchControl', 'SwitchThumb', 'SwitchLabel', 'Switch'],

  base: {
    root: {
      alignItems: 'center',
      display: 'inline-flex',
      gap: '2.5',
      position: 'relative',
      verticalAlign: 'middle',
      '--switch-diff': 'calc(var(--switch-width) - var(--switch-height))',
      '--switch-x': {
        base: 'var(--switch-diff)',
        _rtl: 'calc(var(--switch-diff) * -1)',
      },
    },
    label: checkbox.base!.label,
    indicator: {
      position: 'absolute',
      height: 'var(--switch-height)',
      width: 'var(--switch-height)',
      fontSize: 'var(--switch-indicator-font-size)',
      fontWeight: 'medium',
      flexShrink: 0,
      userSelect: 'none',
      display: 'grid',
      placeContent: 'center',
      transition: 'inset-inline-start 0.12s ease',
      insetInlineStart: 'calc(var(--switch-x) - 2px)',
      _checked: {
        insetInlineStart: '2px',
      },
    },
    control: {
      display: 'inline-flex',
      gap: '0.5rem',
      flexShrink: 0,
      justifyContent: 'flex-start',
      cursor: 'switch',
      borderRadius: 'full',
      position: 'relative',
      width: 'var(--switch-width)',
      height: 'var(--switch-height)',
      _disabled: {
        opacity: '0.5',
        cursor: 'not-allowed',
      },
      _invalid: {
        outline: '2px solid',
        outlineColor: 'border.error',
        outlineOffset: '2px',
      },
    },
    thumb: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
      transitionProperty: 'translate',
      transitionDuration: 'fast',
      borderRadius: 'inherit',
      _checked: {
        translate: 'var(--switch-x) 0',
      },
    },
  },

  variants: {
    size: {
      sm: {},
      lg: {},
    },
  },

  defaultVariants: {
    size: 'sm',
  },
})
