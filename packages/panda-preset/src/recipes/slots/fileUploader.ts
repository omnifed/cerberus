import { defineSlotRecipe, type SlotRecipeConfig } from '@pandacss/dev'
import { fileUploadAnatomy } from '@ark-ui/react'
import { modalIconBase } from '../shared/modal.base'

/**
 * This module contains the fileUploader recipe.
 * @module
 */

const hoverStyles = {
  borderColor: 'action.border.focus',
  borderStyle: 'solid',
  bgColor: 'action.ghost.hover',
}

/**
 * Styles for the FileUploader components
 * @definition [ARIA Dialog Modal](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/)
 * @definition [File Uploader docs](https://cerberus.digitalu.design/react/file-uploader)
 */
export const fileUploader: Partial<SlotRecipeConfig> = defineSlotRecipe({
  className: 'file-uploader',
  description: 'The styles for FileUploader components',
  slots: [...fileUploadAnatomy.keys(), 'icon', 'heading', 'description'],
  jsx: ['ConfirmModal', 'PromptModal'],

  base: {
    root: {
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'column',
      gap: 'md',
      maxW: '36rem',
      w: 'full',
    },
    dropzone: {
      alignItems: 'center',
      bgColor: 'page.surface.100',
      borderColor: 'page.border.100',
      borderStyle: 'dashed',
      borderWidth: '2.5px',
      cursor: 'pointer',
      display: 'flex',
      flexDirection: 'column',
      gap: 3,
      justifyContent: 'center',
      minH: '14rem',
      px: '6',
      py: '4',
      rounded: 'md',
      transitionProperty: 'background-color, border, opacity',
      transitionDuration: '150ms',
      transitionTimingFunction: 'ease-in-out',
      w: 'full',
      _disabled: {
        cursor: 'not-allowed',
        opacity: '0.5',
        _hover: {
          borderColor: 'page.border.100',
          borderStyle: 'dashed',
          bgColor: 'page.surface.100',
        },
      },
      _hover: hoverStyles,
      _isOver: hoverStyles,
    },
    label: {
      textAlign: 'center',
      textStyle: 'label-sm',
      userSelect: 'none',
    },
    trigger: {},
    clearTrigger: {},
    itemGroup: {
      display: 'flex',
      flexDirection: 'column',
      gap: 3,
      w: 'full',
    },
    item: {
      animation: 'fadeIn 0.25s ease-out',
      bgColor: 'page.surface.100',
      borderColor: 'page.border.initial',
      borderRadius: 'sm',
      borderWidth: '1px',
      columnGap: 3,
      display: 'grid',
      gridTemplateColumns: 'auto 1fr auto',
      gridTemplateAreas: `
             "preview name delete"
             "preview size delete"
             `,
      p: '4',
    },
    itemPreview: {
      gridArea: 'preview',
    },
    itemName: {
      color: 'page.text.initial',
      gridArea: 'name',
      textStyle: 'label-sm',
    },
    itemSizeText: {
      color: 'page.text.100',
      gridArea: 'size',
      textStyle: 'label-sm',
    },
    itemDeleteTrigger: {
      alignSelf: 'center',
      gridArea: 'delete',
    },
    itemPreviewImage: {
      aspectRatio: '1',
      height: '10',
      objectFit: 'scale-down',
      width: '10',
    },

    // custom

    icon: modalIconBase,
    heading: {
      color: 'page.text.initial',
      pt: '2',
      textStyle: 'heading-xs',
    },
    description: {
      color: 'page.text.100',
      textStyle: 'label-sm',
    },
  },
})
