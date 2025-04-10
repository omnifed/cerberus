import { defineSlotRecipe, type SlotRecipeConfig } from '@pandacss/dev'
import { tabsAnatomy } from '@ark-ui/react'
import { action, secondaryAction } from '../shared/palettes'
import { focusStates, formStates } from '../shared/states'

/**
 * This module contains the tab recipe.
 * @module
 */

/**
 * Styles for the Tab component
 * @definition [ARIA Target Size](https://www.w3.org/WAI/WCAG21/Understanding/target-size.html#:~:text=Understanding%20SC%202.5.,%3ATarget%20Size%20(Level%20AAA)&text=The%20size%20of%20the%20target,Equivalent)
 * @definition [Tab docs](https://cerberus.digitalu.design/react/tabs)
 */
export const tabs: Partial<SlotRecipeConfig> = defineSlotRecipe({
  className: 'tab',
  slots: tabsAnatomy.keys(),

  base: {
    root: {
      rounded: 'md',
      w: 'full',
    },
    list: {
      borderBottom: '1px solid',
      borderBottomColor: 'action.border.100',
      gap: '0',
      position: 'relative',
      w: 'full',
    },
    trigger: {
      alignItems: 'center',
      display: 'inline-flex',
      borderTopLeftRadius: 'md',
      borderTopRightRadius: 'md',
      fontSize: 'sm',
      fontWeight: '600',
      gap: '2',
      h: '2.75rem',
      justifyContent: 'center',
      position: 'relative',
      pxi: '4',
      zIndex: 'base',
      _motionSafe: {
        transition: 'all 200ms ease-in-out',
        _after: {
          transitionProperty: 'height',
          transitionDuration: '200ms',
          transitionTimingFunction: 'ease-in-out',
        },
      },
      _after: {
        borderTopLeftRadius: 'md',
        borderTopRightRadius: 'md',
        bottom: '0',
        bgColor: 'page.surface.100',
        content: '""',
        left: '0',
        position: 'absolute',
        right: '0',
        h: '0',
        w: 'full',
        willChange: 'height',
        zIndex: '-1',
      },
      ...focusStates,
      ...formStates,
      _hover: {
        color: 'colorPalette.text.200',
        _after: {
          h: 'full',
        },
      },
      _selected: {
        color: 'colorPalette.text.200',
        _before: {
          h: '3px',
        },
        _hover: {
          _after: {
            h: '0',
          },
        },
      },
    },
    content: {
      rounded: 'md',
      w: 'full',
      ...focusStates,
    },
    indicator: {
      animationName: 'fadeIn',
      animationDuration: 'fast',
      animationDelay: '200ms',
      animationFillMode: 'forwards',
      bgColor: 'colorPalette.border.initial',
      bottom: 0,
      h: '4px',
      opacity: 0,
      w: 'var(--width)',
      zIndex: 'decorator',
    },
  },

  variants: {
    palette: {
      action: {
        root: action,
      },
      secondaryAction: {
        root: secondaryAction,
      },
    },
  },

  defaultVariants: {
    palette: 'action',
  },
})
