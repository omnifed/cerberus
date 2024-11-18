import { defineSlotRecipe, type SlotRecipeConfig } from '@pandacss/dev'
import { tooltipAnatomy } from '@ark-ui/anatomy'
import { focusStates } from '../shared/states'

const tooltipBg = 'page.surface.inverse'

/**
 * This module contains the tooltip recipe.
 * @module
 */

/**
 * Styles for the Tooltip family components
 * @definition [ARK docs](https://ark-ui.com/react/docs/components/tooltip)
 * @definition [Tooltip docs](https://cerberus.digitalu.design/react/tooltip)
 */
export const tooltip: Partial<SlotRecipeConfig> = defineSlotRecipe({
  className: 'tooltip',
  slots: tooltipAnatomy.keys(),

  base: {
    content: {
      bg: tooltipBg,
      color: 'page.text.inverse',
      pxi: '3',
      py: 2,
      rounded: 'sm',
      maxH: '6rem',
      maxW: '17rem',
      shadow: 'lg',
      textStyle: 'label-sm',
      textWrap: 'pretty',
      w: 'max-content',
      zIndex: 'tooltip',
      _open: {
        // motionStyle: 'scale-fade-in',
        animationName: 'scaleIn, fadeIn',
        animationDuration: 'fast',
      },
      _closed: {
        // motionStyle: 'scale-fade-out',
        animationName: 'scaleOut, fadeOut',
        animationDuration: 'fast',
      },
    },
    arrow: {
      '--arrow-size': 'sizes.2',
      '--arrow-background': tooltipBg,
    },
    arrowTip: {
      borderTopWidth: '4px',
      borderInlineStartWidth: '4px',
      borderColor: tooltipBg,
    },
    trigger: {
      color: 'action.text.100',
      transitionProperty: 'color',
      transitionDuration: 'fast',
      _hover: {
        color: tooltipBg,
      },
      ...focusStates,
    },
  },
})
