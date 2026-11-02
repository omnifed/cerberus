import { defineRecipe } from '@pandacss/dev'
import type { RecipeConfig, RecipeVariantRecord } from '@pandacss/types'

export const group: RecipeConfig<RecipeVariantRecord> = defineRecipe({
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
      stack: {
        display: 'flex',
        gap: '0',
        '& > *': {
          position: 'relative',
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
      orientation: 'horizontal',
      layout: 'stack',
      css: {
        '& > *:not(:first-child)': {
          ms: '-15px',
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
    {
      orientation: 'vertical',
      layout: 'stack',
      css: {
        '& > *:not(:first-child)': {
          mt: '-15px',
        },
      },
    },
  ],

  defaultVariants: {
    orientation: 'horizontal',
    layout: 'default',
  },
})
