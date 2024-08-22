import { defineSlotRecipe, type SlotRecipeConfig } from '@pandacss/dev'
import {
  statePalettes,
  DANGER,
  INFO,
  SUCCESS,
  WARNING,
} from '../shared/palettes'
import { focusStates } from '../shared/states'

/**
 * This module contains the notification recipe.
 * @module
 */

function getNotificationPalette(
  palette: 'info' | 'success' | 'warning' | 'danger',
) {
  const statePalette = statePalettes[palette]
  return {
    dialog: statePalette,
    icon: statePalette,
    heading: statePalette,
    description: statePalette,
  }
}

/**
 * Styles for the Notification components
 * @definition [ARIA Alert](https://www.w3.org/WAI/ARIA/apg/patterns/alert/examples/alert/)
 * @definition [Notification docs](https://cerberus.digitalu.design/react/notification)
 */
export const notification: Partial<SlotRecipeConfig> = defineSlotRecipe({
  className: 'notification',
  description: 'The styles for Notification components',
  slots: ['center', 'dialog', 'icon', 'heading', 'description'],
  jsx: [
    'NotificationCenter',
    'Notification',
    'InfoNotification',
    'SuccessNotification',
    'WarningNotification',
    'DangerNotification',
  ],

  base: {
    center: {
      // combine with vstack
      position: 'fixed',
      right: '4',
      top: '24',
      zIndex: 'toast',
    },
    dialog: {
      bgColor: 'colorPalette.surface.initial',
      maxW: '29rem',
      minH: '3.125rem',
      opacity: '0',
      rounded: 'sm',
      shadow: 'md',
      _motionSafe: {
        animationName: 'fadeInDown',
        animationDuration: '250ms',
        animationTimingFunction: 'ease-in',
        animationFillMode: 'forwards',
      },
      _motionReduce: {
        opacity: '1',
      },
    },
    icon: {
      color: 'colorPalette.text.100',
      paddingInlineStart: '4',
    },
    heading: {
      color: 'colorPalette.text.initial',
      textStyle: 'label-md',
      fontWeight: '600',
      userSelect: 'none',
    },
    description: {
      color: 'colorPalette.text.initial',
      textStyle: 'body-sm',
      userSelect: 'none',
      ['& :is(a)']: {
        rounded: 'sm',
        textStyle: 'link',
        ...focusStates,
      },
    },
  },

  variants: {
    palette: {
      [INFO]: getNotificationPalette(INFO),
      [SUCCESS]: getNotificationPalette(SUCCESS),
      [WARNING]: getNotificationPalette(WARNING),
      [DANGER]: getNotificationPalette(DANGER),
    },
  },

  defaultVariants: {
    palette: 'info',
  },
})
