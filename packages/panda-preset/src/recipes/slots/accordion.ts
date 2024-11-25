import { defineSlotRecipe, type SlotRecipeConfig } from '@pandacss/dev'
import { accordionAnatomy } from '@ark-ui/anatomy'

/**
 * This module contains the accordion recipe.
 * @module
 */

/**
 * Styles for the accordion family components
 * @definition [ARK docs](https://ark-ui.com/react/docs/components/accordion)
 * @definition [Accordion docs](https://cerberus.digitalu.design/react/accordion)
 */
export const accordion: Partial<SlotRecipeConfig> = defineSlotRecipe({
  className: 'accordion',
  slots: accordionAnatomy.keys(),

  base: {
    item: {
      borderBottom: '2px solid',
      borderColor: 'page.border.initial',
      _lastOfType: {
        borderBottom: 'none',
      },
    },

    itemContent: {
      paddingBlockStart: 'sm',
      _motionSafe: {
        animationDuration: 'slow',
        _open: {
          animationName: 'expandHeight, fadeIn',
        },
        _closed: {
          animationName: 'collapseHeight, fadeOut',
        },
      },
    },

    itemIndicator: {},
  },

  variants: {
    size: {
      sm: {
        item: {
          paddingBlockEnd: 'sm',
        },
        itemTrigger: {
          paddingBlock: 'xs',
          textStyle: 'heading-xs',
        },
      },
      lg: {
        item: {
          paddingBlockEnd: 'md',
        },
        itemTrigger: {
          paddingBlock: 'sm',
          textStyle: 'heading-sm',
        },
      },
    },
  },

  defaultVariants: {
    size: 'lg',
  },
})
