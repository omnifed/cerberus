import { defineSlotRecipe, type SlotRecipeConfig } from '@pandacss/dev'

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
      overflow: 'hidden',
      // We do this so we can keep the custom props on the root element
      '&:is([data-sticky=true]) :where(thead) :where(tr)': {
        position: 'sticky',
        top: 0,
        zIndex: 'sticky',
      },
    },
    table: {
      borderCollapse: 'collapse',
      borderSpacing: '0',
      width: 'full',
    },
    caption: {
      h: '0',
      lineHeight: '0',
      opacity: '0',
    },
    thead: {
      _first: {
        borderTop: 'none',
      },
    },
    th: {
      borderColor: 'page.border.200',
      bgColor: 'page.bg.initial',
      fontWeight: '600',
      h: 'var(--table-cell-size)',
      pxi: 'var(--table-cell-padding-x)',
      textAlign: 'left',
      textStyle: 'label-md',
      transitionProperty: 'background-color',
      transitionDuration: '150ms',
      verticalAlign: 'middle',
      _last: {
        borderRight: 'none',
      },
      _active: {
        bgColor: 'action.ghost.active',
      },
    },
    trigger: {
      alignItems: 'center',
      display: 'inline-flex',
      justifyContent: 'space-between',
      userSelect: 'none',
      w: 'full',
      _hover: {
        bgColor: 'page.bg.100',
      },
    },
    tbody: {
      bgColor: 'page.surface.100',
    },
    tr: {
      bgColor: 'page.surface.100',
      _even: {
        bgColor: 'var(--table-zebra-bg)',
      },
    },
    td: {
      borderTop: '1px solid',
      borderColor: 'page.border.200',
      h: 'var(--table-cell-size)',
      pxi: 'var(--table-cell-padding-x)',
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
          '--table-cell-padding-x': 3,
        },
      },
      md: {
        root: {
          '--table-cell-size': '3rem',
          '--table-cell-padding-x': 3,
        },
      },
      lg: {
        root: {
          '--table-cell-size': '3.5rem',
          '--table-cell-padding-x': 4,
        },
      },
    },
    decoration: {
      default: {
        root: {
          '--table-zebra-bg': 'page.surface.100',
        },
      },
      zebra: {
        root: {
          '--table-zebra-bg': 'page.surface.initial',
        },
      },
    },
  },

  defaultVariants: {
    size: 'md',
    decoration: 'default',
  },
})
