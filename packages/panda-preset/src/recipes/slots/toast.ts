import { defineSlotRecipe, type SlotRecipeConfig } from '@pandacss/dev'
import { toastAnatomy } from '@ark-ui/anatomy'
import { focusStates } from '../shared/states'
import { iconButton } from '../iconButton'

/**
 * This module contains the toast recipe.
 * @module
 */

export const toast: Partial<SlotRecipeConfig> = defineSlotRecipe({
  className: 'toast',
  description: 'The styles for Notification components',
  slots: [...toastAnatomy.keys(), 'icon'],
  jsx: [
    // primitives
    'NotificationRoot',
    'NotificationHeading',
    'NotificationDescription',
    'NotificationCloseTrigger',
    'NotificationActionTrigger',
    // abstractions
    'NotificationCenter',
    'MatchNotificationIcon',
  ],

  base: {
    root: {
      alignItems: 'center',
      bgColor: 'colorPalette.surface.200',
      color: 'colorPalette.text.200',
      display: 'flex',
      height: 'var(--height)',
      gap: 'md',
      minWidth: 'xs',
      opacity: 'var(--opacity)',
      overflowWrap: 'anywhere',
      p: 'md',
      position: 'relative',
      rounded: 'sm',
      scale: 'var(--scale)',
      shadow: 'md',
      translate: 'var(--x) var(--y) 0',
      willChange: 'translate, opacity, scale',
      zIndex: 'var(--z-index)',
      transitionDuration: 'slow',
      transitionProperty: 'translate, scale, opacity, height',
      transitionTimingFunction: 'default',
      _info: {
        colorPalette: 'info',
      },
      _success: {
        colorPalette: 'success',
      },
      _warning: {
        colorPalette: 'warning',
      },
      _danger: {
        colorPalette: 'danger',
      },
    },
    icon: {
      color: 'colorPalette.text.200',
      paddingInlineStart: '4',
    },
    title: {
      color: 'inherit',
      fontWeight: '600',
      textStyle: 'label-md',
      userSelect: 'none',
    },
    description: {
      color: 'inherit',
      textStyle: 'body-sm',
      userSelect: 'none',
      ['& :is(a)']: {
        rounded: 'sm',
        textStyle: 'link',
        _focusVisible: focusStates._focusVisible,
      },
    },
    actionTrigger: {
      marginBlockStart: '2',
    },
    closeTrigger: {
      ...iconButton.base,
      bgColor: 'transparent',
      color: 'inherit',
      _hover: {
        bgColor: 'colorPalette.ghost.hover',
        color: 'colorPalette.text.100',
      },
    },
  },
})
