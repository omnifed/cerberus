import { defineSlotRecipe, type SlotRecipeConfig } from '@pandacss/dev'
import {
  statePalettes,
  DANGER,
  INFO,
  SUCCESS,
  WARNING,
} from '../shared/palettes'
import { focusStates } from '../shared/states'
import { iconButton } from '../iconButton'
import { button } from '../button'

/**
 * This module contains the notification recipe.
 * @module
 */

const TEXT_2OO = 'colorPalette.text.200'

function getNotificationPalette(
  palette: 'info' | 'success' | 'warning' | 'danger',
) {
  const statePalette = statePalettes[palette]
  return {
    dialog: statePalette,
    icon: statePalette,
    heading: statePalette,
    description: statePalette,
    close: statePalette,
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
  slots: [
    'center',
    'dialog',
    'icon',
    'heading',
    'description',
    'close',
    'closeAll',
  ],
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
      color: TEXT_2OO,
      position: 'fixed',
      right: '4',
      textAlign: 'right',
      top: '24',
      zIndex: 'toast',
    },
    dialog: {
      animationDuration: 'fast',
      animationTimingFunction: 'ease-in',
      animationFillMode: 'forwards',
      bgColor: 'colorPalette.surface.200',
      color: TEXT_2OO,
      maxW: '29rem',
      minH: '3.125rem',
      opacity: '0',
      rounded: 'sm',
      shadow: 'md',
      textAlign: 'left',
      transitionProperty: 'all',
      transitionDuration: 'slow',
      _open: {
        animationStyle: 'slide-fade-in',
        animationDuration: 'fast',
      },
      _closed: {
        animationStyle: 'slide-fade-out',
        animationDuration: 'faster',
      },
      _motionReduce: {
        opacity: '1',
      },
    },
    icon: {
      color: TEXT_2OO,
      paddingInlineStart: '4',
    },
    heading: {
      color: 'inherit',
      textStyle: 'label-md',
      fontWeight: '600',
      userSelect: 'none',
    },
    description: {
      color: 'inherit',
      textStyle: 'body-sm',
      userSelect: 'none',
      ['& :is(a)']: {
        rounded: 'sm',
        textStyle: 'link',
        ...focusStates,
      },
    },
    close: {
      ...iconButton.base,
      bgColor: 'transparent',
      color: 'inherit',
      _hover: {
        bgColor: 'colorPalette.ghost.hover',
        color: 'colorPalette.text.100',
      },
    },
    closeAll: {
      ...button.base,
      bgColor: 'transparent',
      color: 'action.text.inverse',
      height: '2.75rem',
      pxi: '0',
      _hover: {
        bgColor: 'transparent',
        color: 'action.bg.hover',
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
