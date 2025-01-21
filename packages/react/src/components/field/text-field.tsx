import type { FieldInputProps, FieldRootProps } from '@ark-ui/react'
import type { FieldVariantProps } from '@cerberus/styled-system/recipes'
import { splitProps } from '../../utils'
import { Show } from '../Show'
import { FieldParts } from './parts'

export interface TextFieldProps extends FieldRootProps, FieldVariantProps {
  label: string
  helperText?: string
  errorText?: string
  inputProps?: FieldInputProps
}

/**
 * An abstraction of the Field family of components.
 * @description [Field Docs](https://cerberus.digitalu.design/react/field)
 * @example
 * ```tsx
 * <form>
 *  <TextField
 *   ids={{ input: 'email' }}
 *   label="Email"
 *   helperText="We'll never share your email with anyone else."
 *   errorText="Email is required."
 *   type="email"
 *   required
 *  />
 * </form>
 * ```
 */
export function TextField(props: TextFieldProps) {
  const [rootProps, { size }, inputProps] = splitProps(
    props,
    ['required', 'readOnly', 'disabled', 'invalid', 'ids'],
    ['size'],
  )

  return (
    <FieldParts.Root {...rootProps} size={size}>
      <FieldParts.Label>
        {props.label}
        <Show when={props.required}>
          <span data-part="required-text">(required)</span>
        </Show>
      </FieldParts.Label>

      <FieldParts.Input {...inputProps} size={size} />
      <FieldParts.HelperText>{props.helperText}</FieldParts.HelperText>
      <FieldParts.ErrorText>{props.errorText}</FieldParts.ErrorText>
    </FieldParts.Root>
  )
}
