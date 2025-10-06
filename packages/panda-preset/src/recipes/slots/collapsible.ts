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
      overflow: 'hidden',
    },
  },

  variants: {
    effect: {
      default: {
        content: {
          _open: {
            animationName: 'expandHeight, fadeIn',
            animationDuration: 'moderate',
          },
          _closed: {
            animationName: 'collapseHeight, fadeOut',
            animationDuration: 'moderate',
          },
        },
      },
      fade: {
        content: {
          _open: {
            animationName: 'fadeIn',
            animationDuration: 'moderate',
          },
          _closed: {
            animationName: 'fadeOut',
            animationDuration: 'moderate',
          },
        },
      },
    },
  },

  defaultVariants: {
    effect: 'default',
  },
})
