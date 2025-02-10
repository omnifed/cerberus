import { defineSlotRecipe, type SlotRecipeConfig } from '@pandacss/dev'
import { dialogAnatomy } from '@ark-ui/anatomy'

/**
 * This module contains the dialog recipe.
 * @module
 */

const modalMinH = '18rem'

/**
 * Styles for the dialog components
 * @definition [Ark Dialog docs](https://ark-ui.com/react/docs/components/dialog)
 */
export const dialog: Partial<SlotRecipeConfig> = defineSlotRecipe({
  className: 'dialog',
  description: 'The styles for Dialog components',
  slots: dialogAnatomy.keys(),
  jsx: [
    // primitives
    'DialogRoot',
    'DialogTrigger',
    'DialogBackdrop',
    'DialogPositioner',
    'DialogContent',
    'DialogHeading',
    'DialogDescription',
    'DialogCloseTrigger',
    // abstractions
    'DialogProvider',
    'Dialog',
    'DialogTrigger',
    'DialogCloseTrigger',
    'DialogHeading',
    'DialogDescription',
    'ConfirmModal',
    'PromptModal',
    'CTAModal',
  ],

  base: {
    backdrop: {
      animationFillMode: 'forwards',
      bgColor: 'page.backdrop.initial',
      backdropFilter: 'blur(2px)',
      backdropBlur: 'sm',
      h: '100vh',
      left: '0',
      opacity: '0',
      position: 'fixed',
      top: '0',
      w: '100vw',
      zIndex: 'overlay',
      _open: {
        animationStyle: 'emphasized-fade-in',
      },
      _closed: {
        animationStyle: 'emphasized-fade-out',
      },
    },
    positioner: {
      alignItems: 'center',
      display: 'flex',
      h: '100dvh',
      justifyContent: 'center',
      left: '0',
      position: 'fixed',
      top: '0',
      w: '100vw',
      zIndex: 'modal',
    },
    content: {
      animationFillMode: 'forwards',
      bgColor: 'page.surface.100',
      padding: 'xl',
      minH: 'var(--dialog-content-min-h)',
      opacity: 0,
      position: 'relative',
      rounded: 'md',
      shadow: 'lg',
      w: 'var(--dialog-content-w)',
      _focusVisible: {
        outline: 'none',
      },
      _open: {
        animationStyle: 'emphasized-slide-in',
      },
      _closed: {
        animationStyle: 'emphasized-slide-out',
      },
    },
    title: {
      color: 'page.text.initial',
      textStyle: 'heading-lg',
    },
    description: {
      color: 'page.text.initial',
      textStyle: 'body-md',
    },
    closeTrigger: {
      position: 'absolute',
      right: 'md',
      top: 'md',
      zIndex: 'decorator',
    },
  },

  variants: {
    size: {
      xs: {
        content: {
          '--dialog-content-min-h': modalMinH,
          '--dialog-content-w': '26rem',
          // minH: modalMinH,
          // w: '26rem',
        },
      },
      sm: {
        content: {
          '--dialog-content-min-h': modalMinH,
          '--dialog-content-w': '35rem',
          // minH: modalMinH,
          // w: '35rem',
        },
      },
      md: {
        content: {
          '--dialog-content-min-h': modalMinH,
          '--dialog-content-w': '40rem',
          // minH: modalMinH,
          // w: '40rem',
        },
      },
      lg: {
        content: {
          '--dialog-content-min-h': modalMinH,
          '--dialog-content-w': '54rem',
          // minH: modalMinH,
          // w: '54rem',
        },
      },
      full: {
        content: {
          '--dialog-content-min-h': '40rem',
          '--dialog-content-w': '90dvw',
          // minH: '40rem',
          // w: '90dvw',
        },
      },
    },
  },

  defaultVariants: {
    size: 'md',
  },
})
