import {
  Field,
  type FieldHelperTextProps as ArkFieldHelperTextProps,
  type FieldInputProps as ArkFieldInputProps,
  type FieldLabelProps as ArkFieldLabelProps,
  type FieldRootProps as ArkFieldRootProps,
  type FieldTextareaProps as ArkFieldTextareaProps,
  type FieldRequiredIndicatorProps as ArkFieldRequiredIndicatorProps,
} from '@ark-ui/react/field'
import { ark, type HTMLArkProps } from '@ark-ui/react'
import { field, type FieldVariantProps } from 'styled-system/recipes'
import {
  createCerberusPrimitive,
  type CerberusPrimitiveProps,
} from '../../system/index'
import { CerberusFieldInput } from './input'
import { CerberusFieldErrorText } from './error-text'

/**
 * This module contains all the primitives of the Field component.
 * @module 'field'
 */

const { withSlotRecipe, withNoRecipe } = createCerberusPrimitive(field)

// Root

export type FieldRootProps = CerberusPrimitiveProps<
  ArkFieldRootProps & FieldVariantProps
>
export const FieldRoot = withSlotRecipe(Field.Root, 'root')

// Label

function FieldLabelEl(props: FieldLabelProps) {
  const { children, ...nativeProps } = props
  return (
    <Field.Label {...nativeProps}>
      {children}
      <Field.RequiredIndicator>(required)</Field.RequiredIndicator>
    </Field.Label>
  )
}

export type FieldLabelProps = CerberusPrimitiveProps<ArkFieldLabelProps>
export const FieldLabel = withSlotRecipe(FieldLabelEl, 'label')

// Required Indicator

function FieldRequiredIndicatorEl(props: FieldRequiredIndicatorProps) {
  return (
    <Field.RequiredIndicator {...props}>(required)</Field.RequiredIndicator>
  )
}

export type FieldRequiredIndicatorProps =
  CerberusPrimitiveProps<ArkFieldRequiredIndicatorProps>
export const FieldRequiredIndicator = withNoRecipe(FieldRequiredIndicatorEl)

// Input

export type FieldInputRootProps = CerberusPrimitiveProps<
  HTMLArkProps<'div'> & FieldVariantProps
>
export const FieldInputRoot = withSlotRecipe(ark.div, 'inputRoot')

export type FieldInputProps = CerberusPrimitiveProps<
  ArkFieldInputProps & FieldVariantProps
>
export const FieldInput = withSlotRecipe(Field.Input, 'input')

// Helper Text

export type FieldHelperTextProps =
  CerberusPrimitiveProps<ArkFieldHelperTextProps>
export const FieldHelperText = withSlotRecipe(Field.HelperText, 'helperText')

// Error Text

export type FieldErrorTextProps =
  CerberusPrimitiveProps<ArkFieldHelperTextProps>
export const FieldErrorText = withSlotRecipe(
  CerberusFieldErrorText,
  'errorText',
)

// Textarea

export type FieldTextareaProps = CerberusPrimitiveProps<ArkFieldTextareaProps>
export const FieldTextarea = withSlotRecipe(Field.Textarea, 'textarea')

/**
 * A named export for the FieldInput component.
 * @description [Field Docs](https://cerberus.digitalu.design/react/field)
 * @example
 * ```tsx
 * import { Input } from '@cerberus/react'
 *
 * <Field
 *   label="Enter your email"
 *   helperText="We'll never share your email with anyone else."
 *   errorText="Email is required."
 *   required
 * >
 *   <Input type="email" />
 * </Field>
 * ```
 */
export const Input = CerberusFieldInput

/**
 * A named export for the FieldTextarea component.
 * @description [Field Docs](https://cerberus.digitalu.design/react/field)
 * @example
 * ```tsx
 * import { Textarea } from '@cerberus/react'
 *
 * <Field
 *   label="Comments"
 *   helperText="Your comments are valuable to us."
 * >
 *   <Textarea />
 * </Field>
 * ```
 */
export const Textarea = FieldTextarea
