import { defineSlotRecipe, type SlotRecipeConfig } from '@pandacss/dev'
import { datePickerAnatomy } from '@ark-ui/anatomy'
import { focusStates } from '../shared/states'
import { input } from '../shared/input.base'

/**
 * This module contains the datePicker recipe.
 * @module
 */

const SELECTED_TEXT = 'action.text.initial'

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
      w: '9.25rem',
      '&:is([data-range])': {
        w: '16.5rem',
        _before: {
          content: '""',
          bgColor: 'page.border.initial',
          h: '1.5rem',
          position: 'absolute',
          right: '48%',
          top: '50%',
          transform: 'translate(50%, -50%)',
          w: '1px',
          zIndex: 'decorator',
        },
      },
    },
    input: {
      ...input,
      bgColor: 'page.surface.initial',
      border: 'none',
      borderColor: 'initial',
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
      '&:is([data-range-input])': {
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
        right: 'initial',
        w: '1/2',
      },
      '&:is([data-range-end-input])': {
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
        borderTopRightRadius: 'inherit',
        borderBottomRightRadius: 'inherit',
        left: 'initial',
        right: 0,
      },
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
      h: '19.75rem',
      overflow: 'hidden',
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
      minH: '16.13rem',
      w: 'full',
    },
    tableHeader: {
      borderTopLeftRadius: 'sm',
      borderTopRightRadius: 'sm',
      h: '2.69rem',
      textStyle: 'heading-xs',
    },
    tableCell: {
      _selected: {
        '&:has(> [data-range-start])': {
          bgColor: 'page.bg.100',
          borderTopLeftRadius: 'full',
          borderBottomLeftRadius: 'full',
        },
        '&:has(> [data-range-end])': {
          bgColor: 'page.bg.100',
          borderTopRightRadius: 'full',
          borderBottomRightRadius: 'full',
        },
      },
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
      zIndex: 1,
      ...focusStates,
      _disabled: {
        cursor: 'not-allowed',
        opacity: '0.5',
      },
      _selected: {
        bgColor: 'action.bg.active',
        color: SELECTED_TEXT,
        fontWeight: '700',
      },
      _pastDay: {
        color: 'page.text.100',
        _selected: {
          color: SELECTED_TEXT,
        },
      },
      _inRange: {
        '&:not([data-selected])': {
          bgColor: 'page.bg.100',
          borderRadius: 0,
          color: 'page.text.initial',
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
        _selected: {
          _after: {
            bgColor: SELECTED_TEXT,
          },
        },
      },
      _hover: {
        '&:not([data-selected], [data-disabled])': {
          bgColor: 'action.bg.hover',
          color: SELECTED_TEXT,
          _today: {
            _after: {
              bgColor: SELECTED_TEXT,
            },
          },
        },
      },
    },
  },
})
