import { accordionAnatomy } from '@ark-ui/react'
import { defineSlotRecipe } from '@pandacss/dev'
import type { SlotRecipeConfig } from '@pandacss/types'
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
      paddingBlock: 'var(--accordion-item-padding)',
      _lastOfType: {
        borderBlockEnd: 'none',
      },
    },
    itemTrigger: {
      alignItems: 'center',
      cursor: 'pointer',
      color: 'page.text.initial',
      display: 'flex',
      px: 'var(--accordion-item-trigger-padding)',
      py: 'sm',
      rounded: 'var(--accordion-item-trigger-radii)',
      transitionProperty: 'background-color',
      transitionDuration: 'fast',
      w: 'full',
      ...focusStates,
      _hover: {
        bgColor: 'action.ghost.hover',
      },
      _startIndicator: {
        gap: 'md',
        justifyContent: 'flex-start',
      },
      _endIndicator: {
        justifyContent: 'space-between',
      },
    },
    itemContent: {
      color: 'page.text.initial',
      overflow: 'hidden',
      px: 'var(--accordion-item-trigger-padding)',
      _motionSafe: {
        animationDuration: 'fast',
        animationFillMode: 'forwards',
        transitionProperty: 'padding',
        transitionDuration: 'fast',
        _open: {
          animationName: 'expandHeight, fadeIn',
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
        root: {
          '--accordion-item-padding': '{spacing.xs}',
          '--accordion-item-trigger-padding': '{spacing.sm}',
          '--accordion-item-trigger-radii': '{radii.lg}',
          '& :is([data-part=item-trigger])': { textStyle: 'heading-xs' },
          '& :is([data-part=item-content])': { textStyle: 'body-sm' },
          '& :is([data-part=item-indicator] > svg)': { h: '16px', w: '16px' },
        },
      },
      lg: {
        root: {
          '--accordion-item-padding': '{spacing.sm}',
          '--accordion-item-trigger-padding': '{spacing.md}',
          '--accordion-item-trigger-radii': '{radii.md}',
          '& :is([data-part=item-trigger])': { textStyle: 'heading-sm' },
          '& :is([data-part=item-content])': { textStyle: 'body-md' },
          '& :is([data-part=item-indicator] > svg)': {
            h: '24px',
            w: '24px',
          },
        },
      },
    },
  },

  defaultVariants: {
    size: 'lg',
  },
})
