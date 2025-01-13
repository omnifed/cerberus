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
      gap: 'sm',
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
      justifyContent: 'space-between',
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
        trigger: {
          h: '2rem',
        },
        item: {
          height: '2.5rem',
        },
      },
      md: {
        trigger: {
          h: '2.5rem',
        },
        item: {
          height: '2.5rem',
        },
      },
      lg: {
        trigger: {
          trigger: {
            h: '3rem',
          },
          content: {
            gap: 'xs',
          },
          item: {
            height: '3rem',
          },
        },
      },
    },
  },

  defaultVariants: {
    size: 'md',
  },
})
