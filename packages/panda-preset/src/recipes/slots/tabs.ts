import { defineSlotRecipe, type SlotRecipeConfig } from '@pandacss/dev'
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
  slots: ['tabList', 'tab', 'tabPanel'],

  base: {
    tabList: {
      borderBottom: '1px solid',
      borderBottomColor: 'action.border.100',
      gap: '0',
      w: 'full',
    },
    tab: {
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
        _before: {
          transitionProperty: 'height',
          transitionDuration: '200ms',
          transitionTimingFunction: 'ease-in-out',
        },
        _after: {
          transitionProperty: 'height',
          transitionDuration: '200ms',
          transitionTimingFunction: 'ease-in-out',
        },
      },
      _before: {
        bgColor: 'colorPalette.border.initial',
        bottom: '0',
        content: '""',
        h: '0',
        position: 'absolute',
        left: '0',
        right: '0',
        w: 'full',
        willChange: 'height',
        zIndex: 'decorator',
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
    tabPanel: {
      rounded: 'md',
      ...focusStates,
    },
  },

  variants: {
    palette: {
      action: {
        tab: {
          ...action,
          _before: action,
          _after: action,
        },
      },
      secondaryAction: {
        tab: {
          ...secondaryAction,
          _before: secondaryAction,
          _after: secondaryAction,
        },
      },
    },
  },

  defaultVariants: {
    palette: 'action',
  },
})
