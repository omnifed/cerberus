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
      opacity: 0,
      position: 'relative',
      rounded: 'md',
      shadow: 'lg',
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
          minH: modalMinH,
          w: '26rem',
        },
      },
      sm: {
        content: {
          minH: modalMinH,
          w: '35rem',
        },
      },
      md: {
        content: {
          minH: modalMinH,
          w: '40rem',
        },
      },
      lg: {
        content: {
          minH: modalMinH,
          w: '54rem',
        },
      },
      full: {
        content: {
          minH: '40rem',
          w: '90dvw',
        },
      },
    },
  },

  defaultVariants: {
    size: 'md',
  },
})
