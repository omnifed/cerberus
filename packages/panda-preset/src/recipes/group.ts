import { defineRecipe } from '@pandacss/dev'

export const group = defineRecipe({
  className: 'group',
  description: 'The styles for the Group component',
  jsx: ['Group', 'ButtonGroup'],

  base: {
    isolation: 'isolate',
    position: 'relative',
    '& [data-group-item]': {
      _focusVisible: {
        zIndex: 1,
      },
    },
  },

  variants: {
    orientation: {
      horizontal: {
        flexDirection: 'row',
      },
      vertical: {
        flexDirection: 'column',
      },
    },
    layout: {
      default: {
        display: 'inline-flex',
        gap: '2',
      },
      attached: {
        display: 'inline-flex',
        gap: '0',
      },
      grow: {
        display: 'flex',
        gap: '2',
        '& > *': {
          flex: 1,
        },
      },
    },
  },

  compoundVariants: [
    {
      orientation: 'horizontal',
      layout: 'attached',
      css: {
        '& > *:first-child': {
          borderEndRadius: '0',
          marginEnd: '-1px',
        },
        '& > *:not(:first-child):not(:last-child)': {
          borderRadius: '0',
          marginEnd: '-1px',
        },
        '& > *:last-child': {
          borderStartRadius: '0',
        },
      },
    },
    {
      orientation: 'vertical',
      layout: 'attached',
      css: {
        '& > *:first-child': {
          borderBottomRadius: '0!',
          marginBottom: '-1px',
        },
        '& > *:not(:first-child):not(:last-child)': {
          borderRadius: '0!',
          marginBottom: '-1px',
        },
        '& > *:last-child': {
          borderTopRadius: '0!',
        },
      },
    },
  ],

  defaultVariants: {
    orientation: 'horizontal',
    layout: 'default',
  },
})
