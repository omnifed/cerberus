import { defineSlotRecipe, type SlotRecipeConfig } from '@pandacss/dev'
import { focusStates } from '../shared/states'

/**
 * This module contains the table recipe.
 * @module
 */

/**
 * Styles for the table components
 * @definition [Table docs](https://cerberus.digitalu.design/react/table)
 */
export const table: Partial<SlotRecipeConfig> = defineSlotRecipe({
  className: 'table',
  description: 'The styles for Table components',
  slots: [
    'root',
    'trigger',
    'table',
    'caption',
    'thead',
    'tbody',
    'tfoot',
    'tr',
    'th',
    'td',
  ],
  jsx: [
    'TableRoot',
    'TableTrigger',
    'Table',
    'Caption',
    'Thead',
    'Th',
    'Tbody',
    'Tr',
    'Td',
    'Tfoot',
  ],

  base: {
    root: {
      border: '1px solid',
      borderColor: 'page.border.200',
      rounded: 'md',
      w: 'full',
      // We do this so we can keep the custom props on the root element
      '&:is([data-sticky=true])': {
        border: 'none',
        borderColor: 'initial',
        '& :where(thead > tr)': {
          position: 'sticky',
          top: 0,
          zIndex: 'sticky',
        },
      },
    },
    table: {
      borderCollapse: 'collapse',
      borderSpacing: '0',
      textAlign: 'start',
      verticalAlign: 'top',
      width: 'full',
    },
    caption: {
      h: '0',
      lineHeight: '0',
      opacity: '0',
    },
    thead: {
      textAlign: 'start',
      _first: {
        borderTop: 'none',
      },
    },
    th: {
      borderColor: 'page.border.200',
      bgColor: 'page.bg.initial',
      fontWeight: '600',
      h: 'var(--table-cell-size, 3rem)',
      paddingInline: 'var(--table-cell-padding-x, 3)',
      textAlign: 'left',
      textStyle: 'label-md',
      transitionProperty: 'background-color',
      transitionDuration: '150ms',
      userSelect: 'none',
      verticalAlign: 'middle',
      _first: {
        borderTopLeftRadius: 'md',
      },
      _last: {
        borderTopRightRadius: 'md',
      },
      '&:has(button)': {
        paddingInline: 'initial',
      },
    },
    trigger: {
      alignItems: 'center',
      borderRadius: 'inherit',
      display: 'inline-flex',
      h: 'full',
      justifyContent: 'space-between',
      paddingInline: 'var(--table-cell-padding-x, 3)',
      w: 'full',
      _hover: {
        bgColor: 'page.bg.100',
      },
      _active: {
        bgColor: 'action.ghost.active',
      },
      _focusVisible: focusStates._focusVisible,
    },
    tbody: {
      bgColor: 'page.surface.100',
    },
    tr: {
      bgColor: 'page.surface.100',
      _even: {
        bgColor: 'var(--table-zebra-bg)',
      },
      _last: {
        '& :where(td)': {
          _first: {
            borderBottomLeftRadius: 'md',
          },
          _last: {
            borderBottomRightRadius: 'md',
          },
        },
      },
    },
    td: {
      alignItems: 'center',
      borderTop: '1px solid',
      borderColor: 'page.border.200',
      h: 'var(--table-cell-size)',
      pxi: 'var(--table-cell-padding-x)',
      textAlign: 'start',
      textStyle: 'label-md',
      _last: {
        borderRight: 'none',
      },
    },
    tfoot: {
      _first: {
        borderTop: 'none',
      },
    },
  },

  variants: {
    size: {
      sm: {
        root: {
          '--table-cell-size': '2rem',
          '--table-cell-padding-x': '0.75rem',
        },
      },
      md: {
        root: {
          '--table-cell-size': '3rem',
          '--table-cell-padding-x': '0.75rem',
        },
      },
      lg: {
        root: {
          '--table-cell-size': '3.5rem',
          '--table-cell-padding-x': '1rem',
        },
      },
    },
    decoration: {
      default: {
        root: {
          '--table-zebra-bg': '{colors.page.surface.100}',
        },
      },
      zebra: {
        root: {
          '--table-zebra-bg': '{colors.page.surface.initial}',
        },
      },
    },
  },

  defaultVariants: {
    decoration: 'default',
    size: 'md',
  },
})
