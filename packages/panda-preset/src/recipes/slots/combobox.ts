import { defineSlotRecipe, type SlotRecipeConfig } from '@pandacss/dev'
import { comboboxAnatomy } from '@ark-ui/anatomy'
import { focusStates, formStates } from '../shared/states'
import { label } from '../label'

/**
 * This module contains the combobox recipe.
 * @module
 */

const triggerStyles = {
  alignItems: 'center',
  bottom: '0',
  color: 'action.text.inverse',
  display: 'flex',
  flexDirection: 'column',
  h: 'var(--combobox-trigger-height)',
  justifyContent: 'center',
  position: 'absolute',
  w: '2rem',
  zIndex: 'decorator',
}

/**
 * Styles for the combobox family components
 * @definition [ARK docs](https://ark-ui.com/react/docs/components/combobox)
 * @definition [combobox docs](https://cerberus.digitalu.design/react/combobox)
 */
export const combobox: Partial<SlotRecipeConfig> = defineSlotRecipe({
  className: 'combobox',
  slots: comboboxAnatomy.keys(),
  jsx: [
    // primitives
    'ComboboxRoot',
    'ComboboxLabel',
    'ComboboxControl',
    'ComboboxInput',
    'ComboboxTrigger',
    'ComboboxClearTrigger',
    'ComboboxPositioner',
    'ComboboxContent',
    'ComboboxItemGroup',
    'ComboboxItemGroupLabel',
    'ComboboxItem',
    'ComboboxItemText',
    'ComboboxItemIndicator',
    // abstractions
    'Combobox',
    'ComboItemGroup',
    'ComboboxItemWithIndicator',
  ],

  base: {
    root: {
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
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
    input: {
      appearance: 'none',
      alignItems: 'center',
      bgColor: 'page.surface.100',
      border: '1px solid',
      borderColor: 'action.border.100',
      color: 'page.text.initial',
      display: 'inline-flex',
      gap: 'sm',
      h: 'var(--combobox-trigger-height)',
      justifyContent: 'space-between',
      outline: 0,
      minW: 9,
      position: 'relative',
      pxi: 'md',
      rounded: 'md',
      textStyle: 'body-sm',
      transitionDuration: 'normal',
      transitionProperty: 'background, box-shadow, border-color',
      transitionTimingFunction: 'default',
      w: 'full',
      _placeholderShown: {
        color: 'page.text.100',
      },
      _open: {
        borderColor: 'action.border.focus',
      },
      _focusVisible: focusStates._focusVisible,
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
    trigger: {
      ...triggerStyles,
      right: 2,
      transformOrigin: 'center',
      transitionDuration: 'normal',
      transitionProperty: 'transform',
      _open: {
        transform: 'rotate(180deg)',
      },
    },
    clearTrigger: {
      ...triggerStyles,
      right: 10,
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
      gap: 'var(--combobox-content-gap)',
      maxH: '15.5rem',
      minW: '10rem',
      overflowY: 'auto',
      p: 'xs',
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
      color: 'page.text.initial',
      display: 'flex',
      flexShrink: 0,
      gap: 'md',
      h: 'var(--combobox-item-height)',
      pxi: 'md',
      rounded: 'sm',
      textStyle: 'body-sm',
      transitionDuration: 'fast',
      transitionProperty: 'background, color',
      transitionTimingFunction: 'default',
      ...focusStates,
      _highlighted: {
        bgColor: 'page.bg.200',
      },
      _checked: {
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
      color: 'page.text.initial',
    },
  },

  variants: {
    size: {
      sm: {
        root: {
          '--combobox-trigger-height': '2rem',
        },
        content: {
          '--combobox-item-height': '2.5rem',
          '--combobox-content-gap': '0',
        },
      },
      md: {
        root: {
          '--combobox-trigger-height': '2.5rem',
        },
        content: {
          '--combobox-item-height': '2.5rem',
          '--combobox-content-gap': '0',
        },
      },
      lg: {
        root: {
          '--combobox-trigger-height': '3rem',
        },
        content: {
          '--combobox-item-height': '3rem',
          '--combobox-content-gap': '0.25rem',
        },
      },
    },
  },

  defaultVariants: {
    size: 'md',
  },
})
