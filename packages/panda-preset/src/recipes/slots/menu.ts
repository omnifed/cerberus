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
      '--menu-z-index': 'zIndex.dropdown',
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
        // animationStyle: 'slide-fade-in',
        // animationDuration: 'fast',
        animationName: 'zoomIn',
        animationDuration: 'fast',
      },
      _closed: {
        // animationStyle: 'slide-fade-out',
        animationName: 'fadeOut',
        animationDuration: 'faster',
      },
    },
    item: {
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
        bgColor: 'action.border.100',
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
