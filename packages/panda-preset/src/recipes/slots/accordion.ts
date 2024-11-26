import { defineSlotRecipe, type SlotRecipeConfig } from '@pandacss/dev'
import { accordionAnatomy } from '@ark-ui/anatomy'
import { focusStates } from '../shared/states'

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
    root: {
      display: 'flex',
      flexDirection: 'column',
      w: 'full',
    },
    item: {
      borderBlockEnd: '2px solid',
      borderColor: 'page.border.initial',
    },
    itemTrigger: {
      alignItems: 'center',
      cursor: 'pointer',
      display: 'flex',
      justifyContent: 'space-between',
      pxi: 'sm',
      transitionProperty: 'background-color',
      transitionDuration: 'fast',
      w: 'full',
      ...focusStates,
      _hover: {
        bgColor: 'action.ghost.hover',
      },
    },
    itemContent: {
      overflow: 'hidden',
      _motionSafe: {
        animationDuration: 'fast',
        animationFillMode: 'forwards',
        transitionProperty: 'padding',
        transitionDuration: 'fast',
        _open: {
          animationName: 'expandHeight, fadeIn',
          paddingBlockStart: 'sm',
        },
        _closed: {
          animationName: 'collapseHeight, fadeOut',
        },
      },
    },

    itemIndicator: {
      _motionSafe: {
        transitionProperty: 'transform',
        transitionDuration: 'fast',
      },
      _open: {
        transform: 'rotate(180deg)',
      },
      _closed: {
        transform: 'rotate(0deg)',
      },
    },
  },

  variants: {
    size: {
      sm: {
        item: {
          paddingBlock: 'xs',
        },
        itemTrigger: {
          paddingBlock: 'sm',
          rounded: 'lg',
          textStyle: 'heading-xs',
        },
      },
      lg: {
        item: {
          paddingBlock: 'sm',
        },
        itemTrigger: {
          paddingBlock: 'md',
          rounded: 'xl',
          textStyle: 'heading-sm',
        },
      },
    },
  },

  defaultVariants: {
    size: 'lg',
  },
})
