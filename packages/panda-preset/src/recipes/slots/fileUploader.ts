import { defineSlotRecipe, type SlotRecipeConfig } from '@pandacss/dev'
import { modalIconBase } from '../shared/modal.base'
import { focusStates } from '../shared/states'

/**
 * This module contains the fileUploader recipe.
 * @module
 */

/**
 * Styles for the FileUploader components
 * @definition [ARIA Dialog Modal](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/)
 * @definition [File Uploader docs](https://cerberus.digitalu.design/react/file-uploader)
 */
export const fileUploader: Partial<SlotRecipeConfig> = defineSlotRecipe({
  className: 'file-uploader',
  description: 'The styles for FileUploader components',
  slots: ['container', 'label', 'icon', 'heading', 'description', 'input'],
  jsx: ['ConfirmModal', 'PromptModal'],

  base: {
    container: {
      // combine with vstack
      borderColor: 'page.border.100',
      borderStyle: 'dashed',
      borderWidth: '2.5px',
      bgColor: 'page.surface.100',
      justify: 'center',
      minH: '14rem',
      maxW: '36rem',
      py: '6',
      rounded: 'md',
      transitionProperty: 'background-color, border, opacity',
      transitionDuration: '150ms',
      transitionTimingFunction: 'ease-in-out',
      w: 'full',
      _hover: {
        borderColor: 'action.border.focus',
        borderStyle: 'solid',
        bgColor: 'action.ghost.hover',
      },
      _disabled: {
        cursor: 'not-allowed',
        opacity: '0.5',
        _hover: {
          borderColor: 'page.border.100',
          borderStyle: 'dashed',
          bgColor: 'page.surface.100',
        },
      },
      _isOver: {
        borderColor: 'action.border.focus',
        borderStyle: 'solid',
        bgColor: 'action.ghost.hover',
      },
      _isDropped: {
        opacity: '0.5',
      },
    },
    label: {
      // combine with vstack
      color: 'page.text.200',
      gap: '1',
      justify: 'center',
      position: 'relative',
      rounded: 'md',
      textStyle: 'label-sm',
      userSelect: 'none',
    },
    icon: modalIconBase,
    heading: {
      color: 'page.text.initial',
      pt: '2',
      textStyle: 'h6',
    },
    description: {
      color: 'action.navigation.initial',
      textDecoration: 'underline',
      textStyle: 'label-sm',
      transitionProperty: 'color',
      transitionDuration: '150ms',
    },
    input: {
      appearance: 'none',
      bottom: '0',
      cursor: 'pointer',
      left: '0',
      opacity: '0',
      position: 'absolute',
      right: '0',
      rounded: 'md',
      top: '0',
      ...focusStates,
    },
  },
})
