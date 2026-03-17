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
      '--tabs-indicator-block-end': '0',
      '--tabs-indicator-block-start': 'auto',
      '--tabs-indicator-inline-end': 'auto',
      '--tabs-indicator-inline-start': '0',
      rounded: 'md',
      w: 'full',
      _vertical: {
        alignItems: 'stretch',
        display: 'flex',
        gap: '4',
      },
    },
    list: {
      borderBottom: '1px solid',
      borderBottomColor: 'action.border.100',
      display: 'flex',
      gap: '0',
      position: 'relative',
      w: 'full',
      _vertical: {
        alignItems: 'stretch',
        borderBottom: 'none',
        borderRight: '1px solid',
        borderRightColor: 'action.border.100',
        flexDirection: 'column',
        flexShrink: 0,
        w: 'auto',
      },
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
          transitionDuration: '200ms',
          transitionProperty: 'height, width',
          transitionTimingFunction: 'ease-in-out',
        },
        _before: {
          transitionDuration: '200ms',
          transitionProperty: 'height, width',
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
        willChange: 'height, width',
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
      _vertical: {
        borderTopLeftRadius: '0',
        borderTopRightRadius: '0',
        justifyContent: 'flex-start',
        textAlign: 'left',
        w: 'full',
        _after: {
          borderTopLeftRadius: '0',
          borderTopRightRadius: '0',
          bottom: 'auto',
          h: 'full',
          left: '0',
          right: 'auto',
          top: '0',
          w: '0',
        },
        _hover: {
          _after: {
            h: 'full',
            w: 'full',
          },
        },
        _selected: {
          _before: {
            h: 'full',
            w: '3px',
          },
          _hover: {
            _after: {
              h: 'full',
              w: '0',
            },
          },
        },
      },
    },
    content: {
      rounded: 'md',
      w: 'full',
      ...focusStates,
      _vertical: {
        flex: '1',
        minW: '0',
      },
    },
    indicator: {
      animationName: 'fadeIn',
      animationDuration: 'fast',
      animationDelay: '200ms',
      animationFillMode: 'forwards',
      bgColor: 'colorPalette.border.initial',
      bottom: 0,
      h: '4px',
      insetBlockEnd: 'var(--tabs-indicator-block-end)',
      insetBlockStart: 'var(--tabs-indicator-block-start)',
      opacity: 0,
      w: 'var(--width)',
      zIndex: 'decorator',
      _vertical: {
        h: 'var(--height)',
        insetBlockEnd: 'auto',
        insetBlockStart: 'var(--top)',
        insetInlineEnd: 'var(--tabs-indicator-inline-end)',
        insetInlineStart: 'var(--tabs-indicator-inline-start)',
        w: '4px',
      },
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
    indicatorPlacement: {
      before: {
        root: {
          '--tabs-indicator-block-end': 'auto',
          '--tabs-indicator-block-start': '0',
          '--tabs-indicator-inline-end': 'auto',
          '--tabs-indicator-inline-start': '0',
        },
      },
      after: {
        root: {
          '--tabs-indicator-block-end': '0',
          '--tabs-indicator-block-start': 'auto',
          '--tabs-indicator-inline-end': '0',
          '--tabs-indicator-inline-start': 'auto',
        },
      },
    },
  },

  defaultVariants: {
    palette: 'action',
    indicatorPlacement: 'after',
  },
})
