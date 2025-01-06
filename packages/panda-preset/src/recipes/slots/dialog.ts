import { defineSlotRecipe, type SlotRecipeConfig } from '@pandacss/dev'
import { dialogAnatomy } from '@ark-ui/anatomy'

/**
 * This module contains the dialog recipe.
 * @module
 */

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
      overflow: 'auto',
      position: 'fixed',
      top: '0',
      w: '100vw',
      zIndex: 'modal',
    },
    content: {
      animationFillMode: 'forwards',
      bgColor: 'page.surface.100',
      minW: '26rem',
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

  variants: {},

  defaultVariants: {},
})
