import { Field } from '@ark-ui/react/field'
import type { FieldErrorTextProps } from './primitives'

/**
 * The error text for the Field component that is shown when the field is
 * invalid.
 * @description [Field Docs](https://cerberus.digitalu.design/react/field)
 * @example
 * ```tsx
 * <FieldRoot>
 *   <FieldInput />
 *   <FieldErrorText>Error text</FieldErrorText>
 * </FieldRoot>
 * ```
 */
export function CerberusFieldErrorText(props: FieldErrorTextProps) {
  if (!props.children) return null
  return <Field.ErrorText {...props} />
}
