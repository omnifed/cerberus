import { defineSlotRecipe, type SlotRecipeConfig } from '@pandacss/dev'
import { menuAnatomy } from '@ark-ui/anatomy'
import { focusStates } from '../shared/states'

/**
 * This module contains the menu recipe.
 * @module
 */

/**
 * Styles for the Menu family components
 * @definition [ARK docs](https://ark-ui.com/react/docs/components/menu)
 * @definition [Menu docs](https://cerberus.digitalu.design/react/menu)
 */
export const menu: Partial<SlotRecipeConfig> = defineSlotRecipe({
  className: 'menu',
  slots: menuAnatomy.keys(),

  base: {
    content: {
      '--menu-z-index': 'zIndex.popover',
      bgColor: 'page.surface.100',
      border: '1px solid',
      borderColor: 'page.border.200',
      boxShadow: 'lg',
      overflow: 'hidden',
      p: 'xs',
      minW: '10rem',
      rounded: 'md',
      shadow: 'lg',
      zIndex: 'calc(var(--menu-z-index) + var(--layer-index, 0))',
      ...focusStates,
      _open: {
        // motionStyles: 'slide-fade-in',
        '&[data-placement^=top]': {
          animationName: 'slideFromBottom, fadeIn',
        },
        '&[data-placement^=bottom]': {
          animationName: 'slideFromTop, fadeIn',
        },
        '&[data-placement^=left]': {
          animationName: 'slideFromRight, fadeIn',
        },
        '&[data-placement^=right]': {
          animationName: 'slideFromLeft, fadeIn',
        },
        animationDuration: 'fast',
      },
      _closed: {
        // motionStyles: 'slide-fade-out',
        '&[data-placement^=top]': {
          animationName: 'slideToBottom, fadeOut',
        },
        '&[data-placement^=bottom]': {
          animationName: 'slideToTop, fadeOut',
        },
        '&[data-placement^=left]': {
          animationName: 'slideToRight, fadeOut',
        },
        '&[data-placement^=right]': {
          animationName: 'slideToLeft, fadeOut',
        },
        animationDuration: 'faster',
      },
    },
    item: {
      colorPalette: 'action',
      alignItems: 'center',
      borderRadius: 'l1',
      cursor: 'menuitem',
      display: 'flex',
      flex: '0 0 auto',
      gap: 1,
      outline: 0,
      position: 'relative',
      pxi: 'md',
      py: '0.75rem',
      rounded: 'sm',
      textAlign: 'start',
      textDecoration: 'none',
      userSelect: 'none',
      width: 'full',
      _highlighted: {
        bgColor: 'colorPalette.ghost.hover',
      },
      _disabled: {
        layerStyle: 'disabled',
      },
    },
    itemText: {
      flex: '1',
    },
    itemGroupLabel: {
      color: 'page.text.100',
      fontSize: 'sm',
      fontWeight: 'semibold',
      pxi: 'md',
      py: '0.5rem',
    },
    indicator: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: '0',
    },
    separator: {
      height: '1px',
      borderColor: 'page.border.200',
      my: '1',
      mx: '-1',
    },
  },

  variants: {},

  defaultVariants: {},
})
