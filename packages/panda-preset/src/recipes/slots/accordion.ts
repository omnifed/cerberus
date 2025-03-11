import { defineSlotRecipe, type SlotRecipeConfig } from '@pandacss/dev'
import { accordionAnatomy } from '@ark-ui/react'
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
  jsx: [
    // primitives
    'AccordionRoot',
    'AccordionItem',
    'AccordionItemTrigger',
    'AccordionItemIndicator',
    'AccordionItemContent',
    // abstractions
    'Accordion',
    'AccordionItemGroup',
  ],

  base: {
    root: {
      display: 'flex',
      flexDirection: 'column',
      w: 'full',
      // we are doing this to avoid setting the size on multiple primitives
      _smSize: {
        '& :is([data-part=item-trigger])': {
          textStyle: 'heading-xs',
        },
        '& :is([data-part=item-content])': {
          textStyle: 'body-sm',
        },
        '& :is([data-part=item-indicator] > svg)': {
          h: '16px',
          w: '16px',
        },
      },
      _lgSize: {
        '& :is([data-part=item-trigger])': {
          textStyle: 'heading-sm',
        },
        '& :is([data-part=item-content])': {
          textStyle: 'body-md',
        },
        '& :is([data-part=item-indicator] > svg)': {
          h: '24px',
          w: '24px',
        },
      },
    },
    item: {
      borderBlockEnd: '2px solid',
      borderColor: 'page.border.initial',
      paddingBlock: 'var(--accordion-item-padding)',
    },
    itemTrigger: {
      alignItems: 'center',
      cursor: 'pointer',
      color: 'page.text.initial',
      display: 'flex',
      paddingBlock: 'var(--accordion-item-trigger-padding)',
      pxi: 'sm',
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
      _motionSafe: {
        animationDuration: 'fast',
        animationFillMode: 'forwards',
        transitionProperty: 'padding',
        transitionDuration: 'fast',
        _open: {
          animationName: 'expandHeight, fadeIn',
          paddingBlock: 'var(--accordion-item-content-padding)',
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
          '--accordion-item-content-padding': '{spacing.sm}',
        },
      },
      lg: {
        root: {
          '--accordion-item-padding': '{spacing.sm}',
          '--accordion-item-trigger-padding': '{spacing.md}',
          '--accordion-item-trigger-radii': '{radii.md}',
          '--accordion-item-content-padding': '{spacing.md}',
        },
      },
    },
  },

  defaultVariants: {
    size: 'lg',
  },
})
