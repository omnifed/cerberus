import { type FieldRootProps } from '@ark-ui/react/field'
import { splitProps } from '../../utils/index'
import {
  FieldErrorText,
  FieldHelperText,
  FieldLabel,
  FieldRoot,
} from './primitives'
import { HStack } from '@cerberus/styled-system/jsx'
import { Show } from '../Show'

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

      <Show when={fieldProps.helperText && !statusProps.invalid}>
        <HStack justifyContent="space-between" w="full">
          <FieldHelperText>{fieldProps.helperText}</FieldHelperText>
          <Show when={fieldProps.secondaryHelperText}>
            <FieldHelperText>{fieldProps.secondaryHelperText}</FieldHelperText>
          </Show>
        </HStack>
      </Show>

      <FieldErrorText>{fieldProps.errorText}</FieldErrorText>
    </FieldRoot>
  )
}
