import { defineSlotRecipe, type SlotRecipeConfig } from '@pandacss/dev'
import { collapsibleAnatomy } from '@ark-ui/react'

/**
 * This module contains the collapsible recipe.
 * @module
 */

/**
 * Styles for the collapsible family components
 * @definition [ARK docs](https://ark-ui.com/react/docs/components/collapsible)
 */
export const collapsible: Partial<SlotRecipeConfig> = defineSlotRecipe({
  className: 'collapsible',
  slots: collapsibleAnatomy.keys(),
  jsx: [
    // primitives
    'CollapsibleRoot',
    'CollapsibleTrigger',
    'CollapsibleIndicator',
    'CollapsibleContent',
    // abstractions
    'Collapsible',
  ],

  base: {
    content: {
      animationDuration: 'fast',
      overflow: 'hidden',
    },
  },

  variants: {
    effect: {
      none: {},
      expandIn: {
        content: {
          _open: {
            animationName: 'expandHeight, fadeIn',
          },
          _closed: {
            animationName: 'collapseHeight, fadeOut',
          },
        },
      },
      fade: {
        content: {
          _open: {
            animationName: 'fadeIn',
          },
          _closed: {
            animationName: 'fadeOut',
          },
        },
      },
    },
  },

  defaultVariants: {
    effect: 'expandIn',
  },
})
