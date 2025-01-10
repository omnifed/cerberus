import { defineSlotRecipe, type SlotRecipeConfig } from '@pandacss/dev'
import { selectAnatomy } from '@ark-ui/anatomy'
import { focusStates, formStates } from '../shared/states'
import { label } from '../label'

/**
 * This module contains the select recipe.
 * @module
 */

/**
 * Styles for the select family components
 * @definition [ARK docs](https://ark-ui.com/react/docs/components/select)
 * @definition [Select docs](https://cerberus.digitalu.design/react/select)
 */
export const select: Partial<SlotRecipeConfig> = defineSlotRecipe({
  className: 'select',
  slots: selectAnatomy.keys(),
  jsx: ['Select', 'Option'],

  base: {
    root: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1.5',
      w: 'full',
    },
    label: {
      ...label.base,
      alignItems: 'center',
      display: 'flex',
      justifyContent: 'space-between',
      textStyle: 'label-sm',
      w: 'full',
    },
    trigger: {
      appearance: 'none',
      alignItems: 'center',
      bgColor: 'page.surface.100',
      border: '1px solid',
      borderColor: 'action.border.100',
      color: 'page.text.initial',
      display: 'inline-flex',
      justifyContent: 'space-between',
      outline: 0,
      position: 'relative',
      rounded: 'md',
      transitionDuration: 'normal',
      transitionProperty: 'background, box-shadow, border-color',
      transitionTimingFunction: 'default',
      w: 'full',
      ...focusStates,
      _placeholderShown: {
        color: 'page.text.100',
      },
      _open: {
        borderColor: 'action.border.focus',
      },
      _disabled: {
        color: 'page.text.100',
        cursor: 'not-allowed',
        '& :where(svg)': {
          color: 'page.text.100',
        },
      },
      _invalid: {
        borderColor: 'danger.border.initial',
      },
      '& :where(svg)': {
        color: 'page.text.100',
      },
    },
    indicator: {
      transitionDuration: 'normal',
      transitionProperty: 'transform',
      _open: {
        transform: 'rotate(180deg)',
      },
    },
    positioner: {
      w: 'var(--reference-width)',
    },
    content: {
      bgColor: 'page.surface.100',
      border: '1px solid',
      borderColor: 'page.border.200',
      display: 'flex',
      flexDirection: 'column',
      maxH: '15.5rem',
      minW: '10rem',
      overflowY: 'auto',
      rounded: 'md',
      shadow: 'lg',
      ...focusStates,
      _open: {
        animationStyle: 'slide-fade-in',
        animationDuration: 'fast',
      },
      _closed: {
        animationStyle: 'slide-fade-out',
        animationDuration: 'faster',
      },
    },
    item: {
      alignItems: 'center',
      cursor: 'pointer',
      display: 'flex',
      flexShrink: 0,
      justifyContent: 'space-between',
      rounded: 'sm',
      transitionDuration: 'fast',
      transitionProperty: 'background, color',
      transitionTimingFunction: 'default',
      ...focusStates,
      _hover: {
        background: 'page.bg.hover',
        color: 'page.text.initial',
      },
      _highlighted: {
        bgColor: 'action.ghost.hover',
        color: 'page.text.initial',
      },
      _selected: {
        color: 'page.text.initial',
      },
      _disabled: formStates._disabled,
    },
    itemGroupLabel: {
      color: 'page.text.initial',
      pxi: 'md',
      py: '0.5rem',
      textStyle: 'label-sm',
      userSelect: 'none',
    },
    itemIndicator: {
      color: 'success.bg.initial',
    },
  },

  variants: {
    size: {
      sm: {
        label: label.variants!.size.sm,
        trigger: {
          px: '2.5',
          h: '9',
          minW: '9',
          fontSize: 'sm',
          gap: '2',
          '& :where(svg)': {
            width: '4',
            height: '4',
          },
        },
        content: { p: '0.5', gap: '1' },
        item: { textStyle: 'sm', px: '2', height: '9' },
        itemIndicator: {
          '& :where(svg)': {
            width: '4',
            height: '4',
          },
        },
      },
      md: {
        label: label.variants!.size.md,
        trigger: {
          px: '3',
          h: '10',
          minW: '10',
          fontSize: 'md',
          gap: '2',
          '& :where(svg)': {
            width: '4',
            height: '4',
          },
        },
        content: { p: '1', gap: '1' },
        item: { textStyle: 'md', px: '2', height: '10' },
        itemIndicator: {
          '& :where(svg)': {
            width: '4',
            height: '4',
          },
        },
      },
    },
  },

  defaultVariants: {
    size: 'md',
  },
})
