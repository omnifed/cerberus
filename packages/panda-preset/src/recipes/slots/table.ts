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
  slots: ['container', 'table', 'caption'],

  base: {
    container: {
      border: '1px solid',
      borderColor: 'page.border.200',
      rounded: 'md',
      overflow: 'hidden',
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
  },
})
