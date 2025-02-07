import { defineSlotRecipe, type SlotRecipeConfig } from '@pandacss/dev'
import { ratingGroupAnatomy } from '@ark-ui/anatomy'
import { focusStates } from '../shared/states'

/**
 * This module contains the rating recipe.
 * @module
 */

/**
 * Styles for the rating family components
 * @definition [ARK docs](https://ark-ui.com/react/docs/components/rating-group)
 * @definition [Rating docs](https://cerberus.digitalu.design/react/rating)
 */
export const ratingGroup: Partial<SlotRecipeConfig> = defineSlotRecipe({
  className: 'rating-group',
  slots: ratingGroupAnatomy.keys(),
  jsx: ['RatingRoot', 'RatingLabel', 'RatingControl', 'RatingItem', 'Rating'],

  base: {
    root: {
      display: 'flex',
      flexDirection: 'var(--rating-orientation, column)',
      gap: 'xs',
      justifyContent: 'var(--rating-root-justify, initial)',
      w: 'var(--rating-w, auto)',
    },
    label: {
      color: 'page.text.initial',
      fontSize: 'var(--rating-label, 0.75rem)',
    },
    control: {
      alignItems: 'center',
      display: 'flex',
      gap: 'xs',
    },
    item: {
      color: 'page.bg.100',
      cursor: 'pointer',
      rounded: 'xs',
      _focusVisible: focusStates._focusVisible,
      _highlighted: {
        color: 'colorPalette.bg.hover',
      },
    },
  },

  variants: {
    palette: {
      action: {
        item: {
          colorPalette: 'action',
        },
      },
      warning: {
        item: {
          colorPalette: 'warning',
        },
      },
    },
    orientation: {
      horizontal: {
        root: {
          '--rating-orientation': 'row',
          '--rating-root-justify': 'space-between',
          '--rating-w': '100%',
        },
      },
      vertical: {
        root: {
          '--rating-orientation': 'column',
          '--rating-root-justify': 'initial',
          '--rating-w': 'auto',
        },
      },
    },
    size: {
      sm: {
        root: {
          '--rating-label': '0.75rem',
        },
      },
      md: {
        root: {
          '--rating-label': '1rem',
        },
      },
    },
  },

  defaultVariants: {
    palette: 'action',
    orientation: 'vertical',
    size: 'sm',
  },
})
