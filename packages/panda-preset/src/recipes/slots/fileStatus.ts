import { defineSlotRecipe } from '@pandacss/dev'
import type { SlotRecipeConfig } from '@pandacss/types'

/**
 * This module contains the fileStatus recipe.
 * @module
 */

/**
 * Styles for the FileStatus component: a status card with the status icon, the
 * file name, its progress and status text, and an action button.
 * @definition [FileStatus docs](https://cerberus.digitalu.design/docs/components/file-uploader#filestatus)
 */
export const fileStatus: Partial<SlotRecipeConfig> = defineSlotRecipe({
  className: 'file-status',
  slots: ['root', 'icon', 'info', 'name', 'statusText'],

  base: {
    root: {
      alignItems: 'center',
      bgColor: 'page.surface.100',
      border: '2px solid',
      borderColor: 'page.border.initial',
      display: 'flex',
      flexDirection: 'row',
      gap: '8px',
      p: 4,
      rounded: 'sm',
      w: 'full',
    },
    icon: {
      display: 'inline-flex',
      flexShrink: 0,
    },
    info: {
      alignItems: 'flex-start',
      display: 'flex',
      flexDirection: 'column',
      gap: '0.12rem',
      w: 'full',
    },
    name: {
      color: 'page.text.initial',
      textStyle: 'label-sm',
    },
    statusText: {
      color: 'page.text.100',
      textStyle: 'label-sm',
    },
  },
})
