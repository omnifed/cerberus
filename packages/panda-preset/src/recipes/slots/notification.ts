import { defineSlotRecipe, type SlotRecipeConfig } from '@pandacss/dev'
import { modalHeading, modalIconBase } from '../shared/modal.base'
import {
  statePalettes,
  DANGER,
  INFO,
  SUCCESS,
  WARNING,
} from '../shared/palettes'

/**
 * This module contains the notification recipe.
 * @module
 */

const notificationPalette = {
  dialog: statePalettes,
  icon: statePalettes,
  heading: statePalettes,
  description: statePalettes,
  close: statePalettes,
}

/**
 * Styles for the Notification components
 * @definition [ARIA Alert](https://www.w3.org/WAI/ARIA/apg/patterns/alert/examples/alert/)
 * @definition [Notification docs](https://cerberus.digitalu.design/react/notification)
 */
export const notification: Partial<SlotRecipeConfig> = defineSlotRecipe({
  className: 'notification',
  description: 'The styles for Notification components',
  slots: ['dialog', 'icon', 'heading', 'description', 'close'],

  base: {
    dialog: {
      bgColor: 'colorPalette.surface.initial',
      b: '4',
      h: '3.125rem',
      l: '4',
      position: 'fixed',
      r: '4',
      rounded: 'sm',
      shadow: 'md',
      w: 'full',
      zIndex: 'toast',
      md: {
        b: 'initial',
        l: 'initial',
        mx: 'auto',
        r: 'initial',
        t: '4',
        w: '20.25rem',
      },
    },
    icon: modalIconBase,
    heading: modalHeading,
    description: {
      color: 'page.text.initial',
    },
  },

  variants: {
    palette: {
      [INFO]: notificationPalette,
      [SUCCESS]: notificationPalette,
      [WARNING]: notificationPalette,
      [DANGER]: notificationPalette,
    },
  },

  defaultVariants: {
    palette: 'info',
  },
})
