import type { FieldInputProps, FieldRootProps } from '@ark-ui/react'
import type { FieldVariantProps } from '@cerberus/styled-system/recipes'
import { splitProps } from '../../utils'
import { FieldParts } from './parts'
import { HStack } from '@cerberus/styled-system/jsx'
import { Show } from '../Show'

export interface TextareaFieldProps extends FieldRootProps, FieldVariantProps {
  label: string
  helperText?: string
  secondaryHelperText?: string
  errorText?: string
  textareaProps?: FieldInputProps
}

/**
 * An abstraction of the Field family of components.
 * @description [Field Docs](https://cerberus.digitalu.design/react/field)
 * @example
 * ```tsx
 * <form>
 *  <TextareaField
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
export function TextareaField(props: TextareaFieldProps) {
  const [rootProps, { size }, textareaFieldProps] = splitProps(
    props,
    ['required', 'readOnly', 'disabled', 'invalid', 'ids'],
    ['size'],
    ['helperText', 'errorText', 'label', 'secondaryHelperText'],
  )

  return (
    <FieldParts.Root {...rootProps} size={size}>
      <FieldParts.Label>{textareaFieldProps.label}</FieldParts.Label>

      <FieldParts.Textarea rows={4} {...props.textareaProps} />

      <HStack justifyContent="space-between" w="full">
        <FieldParts.HelperText>
          {textareaFieldProps.helperText}
        </FieldParts.HelperText>
        <Show when={Boolean(textareaFieldProps.secondaryHelperText)}>
          <FieldParts.HelperText>
            {textareaFieldProps.secondaryHelperText}
          </FieldParts.HelperText>
        </Show>
      </HStack>

      <FieldParts.ErrorText>
        {textareaFieldProps.errorText}
      </FieldParts.ErrorText>
    </FieldParts.Root>
  )
}
