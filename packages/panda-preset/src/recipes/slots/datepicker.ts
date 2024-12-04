import { defineSlotRecipe, type SlotRecipeConfig } from '@pandacss/dev'
import { datePickerAnatomy } from '@ark-ui/anatomy'
import { focusStates } from '../shared/states'
import { input } from '../shared/input.base'

/**
 * This module contains the datePicker recipe.
 * @module
 */

/**
 * Styles for the datePicker family components
 * @definition [ARK docs](https://ark-ui.com/react/docs/components/datePicker)
 * @definition [datePicker docs](https://cerberus.digitalu.design/react/datePicker)
 */
export const datePicker: Partial<SlotRecipeConfig> = defineSlotRecipe({
  className: 'date-picker',
  slots: datePickerAnatomy.keys(),

  base: {
    control: {
      alignItems: 'center',
      display: 'flex',
      border: '1px solid',
      borderColor: 'action.border.100',
      gap: 'xs',
      h: '2.5rem',
      position: 'relative',
      paddingInlineStart: 'xs',
      paddingInlineEnd: 'md',
      rounded: 'md',
      w: '8.75rem',
    },
    input: {
      ...input,
      bgColor: 'page.surface.initial',
      bottom: 0,
      left: 0,
      paddingInlineStart: 'xl',
      position: 'absolute',
      right: 0,
      rounded: 'inherit',
      textStyle: 'body-sm',
      textTransform: 'uppercase',
      top: 0,
      w: 'full',
      zIndex: 'base',
      ...focusStates,
    },
    trigger: {
      zIndex: 'decorator',
    },
    positioner: {
      '--dp-positioner-z-index': 'zIndex.popover',
      zIndex: 'var(--dp-positioner-z-index)',
    },
    content: {
      bgColor: 'page.surface.100',
      border: '1px solid',
      borderColor: 'action.border.100',
      rounded: 'sm',
      shadow: 'md',
      w: '19.25rem',
      _open: {
        // motionStyles: 'slide-fade-in',
        '&[data-placement^=top]': {
          animationName: 'slideFromBottom, fadeIn',
        },
        '&[data-placement^=bottom]': {
          animationName: 'slideFromTop, fadeIn',
        },
        '&[data-placement^=left]': {
          animationName: 'slideFromRight, fadeIn',
        },
        '&[data-placement^=right]': {
          animationName: 'slideFromLeft, fadeIn',
        },
        animationDuration: 'fast',
      },
      _closed: {
        // motionStyles: 'slide-fade-out',
        '&[data-placement^=top]': {
          animationName: 'slideToBottom, fadeOut',
        },
        '&[data-placement^=bottom]': {
          animationName: 'slideToTop, fadeOut',
        },
        '&[data-placement^=left]': {
          animationName: 'slideToRight, fadeOut',
        },
        '&[data-placement^=right]': {
          animationName: 'slideToLeft, fadeOut',
        },
        animationDuration: 'faster',
      },
    },
    viewControl: {
      alignItems: 'center',
      border: '1px solid',
      borderColor: 'page.border.initial',
      display: 'flex',
      justifyContent: 'space-between',
      paddingBlock: 'xs',
      paddingInline: 'xs',
      w: 'full',
    },
    table: {
      w: 'full',
    },
    tableHeader: {
      h: '2.69rem',
      textStyle: 'heading-xs',
    },
    tableCellTrigger: {
      alignItems: 'center',
      display: 'inline-flex',
      cursor: 'pointer',
      flexDirection: 'column',
      h: '2.69rem',
      justifyContent: 'center',
      position: 'relative',
      textStyle: 'body-sm',
      transitionProperty: 'background-color, color',
      transitionDuration: 'fast',
      rounded: 'full',
      w: 'full',
      ...focusStates,
      _pastDay: {
        color: 'page.text.100',
      },
      _hover: {
        bgColor: 'action.bg.hover',
        color: 'action.text.initial',
        _today: {
          _after: {
            bgColor: 'action.text.initial',
          },
        },
      },
      _today: {
        _after: {
          bgColor: 'page.text.initial',
          bottom: '0.25rem',
          content: '""',
          h: '0.25rem',
          left: '50%',
          position: 'absolute',
          rounded: 'full',
          transform: 'translate(-50%, -50%)',
          w: '0.25rem',
        },
      },
    },
  },
})
