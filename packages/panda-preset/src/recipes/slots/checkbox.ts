import { defineSlotRecipe, type SlotRecipeConfig } from '@pandacss/dev'
import { checkboxAnatomy } from '@ark-ui/anatomy'
import { focusStates, formStates } from '../shared/states'
import { field } from './field'

/**
 * This module contains the checkbox recipe.
 * @module
 */

/**
 * Styles for the Checkbox component
 * @definition [ARIA Target Size](https://www.w3.org/WAI/WCAG21/Understanding/target-size.html#:~:text=Understanding%20SC%202.5.,%3ATarget%20Size%20(Level%20AAA)&text=The%20size%20of%20the%20target,Equivalent)
 * @definition [ARIA Forms](https://www.a11yproject.com/checklist/#forms)
 * @definition [Checkbox docs](https://cerberus.digitalu.design/react/checkbox)
 */
export const checkbox: Partial<SlotRecipeConfig> = defineSlotRecipe({
  className: 'checkbox',
  slots: checkboxAnatomy.keys(),
  jsx: [
    'CheckboxRoot',
    'CheckboxLabel',
    'CheckboxControl',
    'CheckboxIndicator',
    'Checkbox',
  ],

  base: {
    root: {
      alignItems: 'center',
      cursor: 'pointer',
      display: 'inline-flex',
      gap: 'sm',
      position: 'relative',
      userSelect: 'none',
      verticalAlign: 'top',
    },
    label: {
      color: 'page.text.initial',
      gap: 'sm',
      flexShrink: 0,
      w: 'initial!',
    },
    control: {
      appearance: 'none',
      bgColor: 'page.surface.initial',
      border: '1px solid',
      borderColor: 'action.border.initial',
      color: 'page.text.initial',
      flexShrink: 0,
      rounded: 'sm',
      transitionProperty: 'border-color,background-color',
      transitionDuration: 'fast',
      transitionTimingFunction: 'ease-in-out',
      ...focusStates,
      _checked: {
        bgColor: 'action.bg.initial',
        _userInvalid: {
          bgColor: 'danger.bg.initial',
          borderColor: 'danger.border.initial',
          color: 'danger.text.initial',
        },
      },
      _indeterminate: {
        bgColor: 'action.bg.initial',
      },
      _disabled: {
        ...formStates._disabled,
        bgColor: 'page.bg.200',
      },
      _userInvalid: {
        bgColor: 'danger.bg.initial',
        borderColor: 'danger.border.initial',
        color: 'danger.text.initial',
      },
    },
    indicator: {
      color: 'action.text.initial',
      h: 'full',
      w: 'full',
      _peerInvalid: {
        color: 'danger.text.initial',
      },
      _peerDisabled: {
        opacity: formStates._disabled.opacity,
      },
    },
    group: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'md',
    },
  },

  variants: {
    size: {
      md: {
        control: {
          h: '1rem',
          w: '1rem',
        },
        label: field.base!.label,
      },
      lg: {
        control: {
          h: '1.25rem',
          w: '1.25rem',
        },
        label: {
          ...field.base!.label,
          textStyle: 'label-md',
        },
      },
    },
  },

  defaultVariants: {
    size: 'md',
  },
})
