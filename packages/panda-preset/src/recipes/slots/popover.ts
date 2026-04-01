import { defineSlotRecipe, type SlotRecipeConfig } from '@pandacss/dev'
import { popoverAnatomy } from '@ark-ui/react'

/**
 * This module contains the popover recipe.
 * @module
 */

/**
 * Styles for the popover family components
 * @definition [ARK docs](https://ark-ui.com/react/docs/components/popover)
 * @definition [Popover docs](https://cerberus.digitalu.design/docs/components/popover)
 */
export const popover: Partial<SlotRecipeConfig> = defineSlotRecipe({
  className: 'popover',
  slots: [...popoverAnatomy.keys(), 'header', 'body', 'footer'],
  jsx: [
    // primitives
    'PopoverTrigger',
    'PopoverAnchor',
    'PopoverPositioner',
    'PopoverArrow',
    'PopoverArrowTip',
    'PopoverContent',
    'PopoverTitle',
    'PopoverDescription',
    'PopoverCloseTrigger',
    'PopoverIndicator',
    // custom layout helpers
    'PopoverHeader',
    'PopoverBody',
    'PopoverFooter',
    // abstractions
    'Popover',
  ],

  base: {
    content: {
      '--popover-bg': 'colors.page.bg.initial',
      '--popover-size': 'sizes.xs',
      '--popover-mobile-size': 'calc(100dvw - 1rem)',
      '--popover-z-index': 'zIndex.popover',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      textStyle: 'sm',
      bgColor: 'var(--popover-bg)',
      border: '1px solid',
      borderColor: 'page.border.100',
      maxHeight: 'var(--available-height)',
      outline: '0',
      pos: 'relative',
      rounded: 'sm',
      shadow: 'sm',
      transformOrigin: 'var(--transform-origin)',
      width: {
        base: 'min(var(--popover-mobile-size), var(--popover-size))',
        sm: 'var(--popover-size)',
      },
      zIndex: 'calc(var(--popover-z-index) + var(--layer-index, 0))',
      _open: {
        animationStyle: 'scale-fade-in',
        animationDuration: 'fast',
      },
      _closed: {
        animationStyle: 'scale-fade-out',
        animationDuration: 'faster',
      },
    },
    header: {
      px: 'var(--popover-padding)',
      pt: 'var(--popover-padding)',
    },
    body: {
      p: 'var(--popover-padding)',
      flex: '1',
    },
    footer: {
      alignItems: 'center',
      display: 'flex',
      px: 'var(--popover-padding)',
      pb: 'var(--popover-padding)',
    },
    arrow: {
      '--arrow-background': 'var(--popover-bg)',
      '--arrow-shadow-color': 'colors.page.border.100',
      '--arrow-size': '0.75rem',
    },
    arrowTip: {
      borderLeftColor: 'var(--arrow-shadow-color)',
      borderLeftWidth: '1px',
      borderTopColor: 'var(--arrow-shadow-color)',
      borderTopWidth: '1px',
    },
    closeTrigger: {
      position: 'absolute',
      right: 'md',
      top: 'md',
      zIndex: 'decorator',
    },
  },

  variants: {
    size: {
      xs: {
        content: {
          '--popover-padding': 'spacing.xs',
        },
      },
      sm: {
        content: {
          '--popover-padding': 'spacing.sm',
        },
      },
      md: {
        content: {
          '--popover-padding': 'spacing.md',
        },
      },
      lg: {
        content: {
          '--popover-padding': 'spacing.lg',
        },
      },
    },
  },

  defaultVariants: {
    size: 'md',
  },
})
