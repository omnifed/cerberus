import { fieldAnatomy } from '@ark-ui/anatomy'
import { defineSlotRecipe, type SlotRecipeConfig } from '@pandacss/dev'
import { focusStates } from '../shared/states'

/**
 * This module contains the field recipe.
 * @module
 */

const smallLabel = 'label-sm'
const disabledText = 'page.text.100'

const inputStyles = {
  bgColor: 'page.surface.initial',
  border: '1px solid',
  borderColor: 'action.border.100',
  color: 'page.text.initial',
  paddingInline: 'md',
  position: 'relative',
  rounded: 'sm',
  textStyle: 'body-sm',
  transitionProperty: 'border, background-color',
  transitionDuration: 'fast',
  w: 'full',
  _hover: {
    borderColor: 'action.border.initial',
  },
  _focus: {
    bgColor: 'page.surface.100',
  },
  _userInvalid: {
    borderColor: 'danger.border.initial',
  },
  ...focusStates,
}

const endIndicatorStyles = {
  position: 'absolute',
  right: 4,
  top: '50%',
  transform: 'translateY(-50%)',
  zIndex: 'decorator',
}

/**
 * Styles for the Input component
 * @definition [ARIA Target Size](https://www.w3.org/WAI/WCAG21/Understanding/target-size.html#:~:text=Understanding%20SC%202.5.,%3ATarget%20Size%20(Level%20AAA)&text=The%20size%20of%20the%20target,Equivalent)
 * @definition [ARIA Forms](https://www.a11yproject.com/checklist/#forms)
 * @definition [Input docs](https://cerberus.digitalu.design/react/input)
 */
export const field: Partial<SlotRecipeConfig> = defineSlotRecipe({
  className: 'field',
  slots: [
    ...fieldAnatomy.keys(),
    'inputRoot',
    'startIndicator',
    'endIndicator',
    'statusIndicator',
  ],
  jsx: [
    'FieldRoot',
    'FieldLabel',
    'FieldInput',
    'FieldHelperText',
    'FieldErrorText',
    'FieldStatusIndicator',
    'FieldTextarea',
    'Input',
    'Textarea',
  ],

  base: {
    root: {
      alignItems: 'flex-start',
      display: 'flex',
      flexDirection: 'column',
      gap: 'xs',
      w: 'full',
    },
    label: {
      alignItems: 'center',
      display: 'inline-flex',
      color: 'page.text.initial',
      justifyContent: 'space-between',
      textStyle: smallLabel,
      w: 'full',
      _disabled: {
        color: disabledText,
      },
      '& > [data-part=required-indicator]': {
        display: 'inline-block',
        color: 'page.text.100',
        textStyle: smallLabel,
      },
    },
    inputRoot: {
      position: 'relative',
      w: 'full',
    },
    input: {
      ...inputStyles,
      h: '3.7rem',
      paddingInlineEnd: 10,
      '& :is([data-has=start-indicator])': {
        paddingInlineStart: 10,
      },
    },
    textarea: {
      ...inputStyles,
      minH: '6.5rem',
      minW: '13.25rem',
      paddingBlock: '0.75rem',
    },
    helperText: {
      color: 'page.text.200',
      textStyle: smallLabel,
    },
    errorText: {
      color: 'danger.text.initial',
      textStyle: smallLabel,
    },
    startIndicator: {
      ...endIndicatorStyles,
      left: 4,
      right: 'initial',
    },
    endIndicator: endIndicatorStyles,
    statusIndicator: {
      ...endIndicatorStyles,
      color: 'danger.text.100',
    },
  },

  variants: {
    size: {
      sm: {
        input: {
          md: {
            h: '2rem',
          },
        },
      },
      md: {
        input: {
          md: {
            h: '2.5rem',
          },
        },
      },
      lg: {
        input: {
          h: '3rem',
        },
      },
    },
  },

  defaultVariants: {
    size: 'lg',
  },
})
