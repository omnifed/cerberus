import { type FieldRootProps } from '@ark-ui/react/field'
import { HStack } from 'styled-system/jsx'
import { splitProps } from '../../utils/index'
import { Show } from '../show/index'
import {
  FieldErrorText,
  FieldHelperText,
  FieldLabel,
  FieldRoot,
} from './primitives'
import { HelperText } from './helper-text'

export interface FieldProps extends FieldRootProps {
  /**
   * The label of the field.
   */
  label?: string
  /**
   * The helper text of the field.
   */
  helperText?: string
  /**
   * A helper text positioned at the end of the field. Good for Textarea fields.
   */
  secondaryHelperText?: string
  /**
   * The error text of the field. Shown when the field is invalid.
   */
  errorText?: string
}

/**
 * The Field component is the context provider for all FieldParts and displays
 * the label, helperText, and ErrorText.
 * @description [Field Docs](https://cerberus.digitalu.design/react/field)
 * @example
 * ```tsx
 * <Field
 *  ids={{
 *   control: 'firstName',
 *  }}
 *  label="Label"
 *  helperText="This is what people will see on your profile."
 *  errorText="A first name is required to create an account."
 *  required
 * >
 *   <Input name="firstName" type="text" />
 * </Field>
 * ```
 */
export function Field(props: FieldProps) {
  const [statusProps, fieldProps, rootProps] = splitProps(
    props,
    ['disabled', 'required', 'readOnly', 'invalid'],
    ['label', 'helperText', 'secondaryHelperText', 'errorText', 'children'],
  )

  return (
    <FieldRoot {...statusProps} {...rootProps}>
      <Show when={fieldProps.label}>
        <FieldLabel>{fieldProps.label}</FieldLabel>
      </Show>

      {fieldProps.children}

      <HStack justifyContent="space-between" w="full">
        <HelperText invalid={statusProps.invalid}>
          {fieldProps.helperText}
        </HelperText>

        <FieldErrorText>{fieldProps.errorText}</FieldErrorText>

        <Show when={fieldProps.secondaryHelperText}>
          <FieldHelperText>{fieldProps.secondaryHelperText}</FieldHelperText>
        </Show>
      </HStack>
    </FieldRoot>
  )
}
