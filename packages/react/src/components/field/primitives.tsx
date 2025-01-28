import {
  Field,
  type FieldHelperTextProps,
  type FieldInputProps as ArkFieldInputProps,
  type FieldLabelProps,
  type FieldRootProps as ArkFieldRootProps,
  type FieldTextareaProps,
} from '@ark-ui/react/field'
import type { ReactNode } from 'react'
import { cx } from '@cerberus/styled-system/css'
import { field, type FieldVariantProps } from '@cerberus/styled-system/recipes'
import { FieldStatusIndicator } from './status-indicator'
import { FieldStartIndicator } from './start-indicator'

/**
 * This module contains all the primitives of the Field component.
 * @module 'field'
 */

export type FieldRootProps = ArkFieldRootProps & FieldVariantProps

/**
 * The context & container for the Field components.
 * @description [Field Docs](https://cerberus.digitalu.design/react/field)
 * @example
 * ```tsx
 * <FieldRoot required ids={{ input: 'exampleId' }}>
 *  <FieldLabel>Label</FieldLabel>
 *  <FieldInput />
 * </FieldRoot>
 * ```
 */
export function FieldRoot(props: FieldRootProps) {
  const { size, ...fieldProps } = props
  const styles = field({ size })
  return (
    <Field.Root
      {...fieldProps}
      className={cx(styles.root, fieldProps.className)}
    />
  )
}

/**
 * The label for the Field component.
 * @description [Field Docs](https://cerberus.digitalu.design/react/field)
 * @example
 * ```tsx
 * <FieldRoot>
 *   <FieldLabel>Label</FieldLabel>
 * </FieldRoot>
 * ```
 */
export function FieldLabel(props: FieldLabelProps) {
  const { children, ...nativeProps } = props
  const styles = field()
  return (
    <Field.Label {...nativeProps} className={cx(styles.label, props.className)}>
      {children}
      <Field.RequiredIndicator>(required)</Field.RequiredIndicator>
    </Field.Label>
  )
}

export interface FieldInputProps
  extends Omit<ArkFieldInputProps, 'size'>,
    FieldVariantProps {
  /**
   * An optional icon to display at the start of the input.
   */
  startIcon?: ReactNode
  /**
   * An optional icon to display at the end of the input.
   */
  endIcon?: ReactNode
}

/**
 * The input for the Field component.
 * @description [Field Docs](https://cerberus.digitalu.design/react/field)
 * @example
 * ```tsx
 * <FieldRoot>
 *   <FieldInput />
 * </FieldRoot>
 * ```
 */
export function FieldInput(props: FieldInputProps) {
  const { size, startIcon, endIcon, ...fieldProps } = props
  const styles = field({ size })
  const hasStartIcon = Boolean(startIcon)

  return (
    <div className={styles.inputRoot}>
      <FieldStartIndicator>{startIcon}</FieldStartIndicator>
      <Field.Input
        {...fieldProps}
        {...(hasStartIcon && { 'data-has': 'start-indicator' })}
        className={cx(styles.input, fieldProps.className)}
      />
      <FieldStatusIndicator fallback={endIcon} />
    </div>
  )
}

/**
 * The helper text for the Field component that is shown when the field is
 * valid.
 * @description [Field Docs](https://cerberus.digitalu.design/react/field)
 * @example
 * ```tsx
 * <FieldRoot>
 *   <FieldInput />
 *   <FieldHelperText>Helper text</FieldHelperText>
 * </FieldRoot>
 * ```
 */
export function FieldHelperText(props: FieldHelperTextProps) {
  const styles = field()

  if (!props.children) return null

  return (
    <Field.HelperText
      {...props}
      className={cx(styles.helperText, props.className)}
    />
  )
}

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
export function FieldErrorText(props: FieldHelperTextProps) {
  const styles = field()

  if (!props.children) return null

  return (
    <Field.ErrorText
      {...props}
      className={cx(styles.errorText, props.className)}
    />
  )
}

/**
 * The textarea for the Field component.
 * @description [Field Docs](https://cerberus.digitalu.design/react/field)
 * @example
 * ```tsx
 * <FieldRoot>
 *   <FieldTextarea />
 * </FieldRoot>
 * ```
 */
export function FieldTextarea(props: FieldTextareaProps) {
  const styles = field()
  return (
    <Field.Textarea
      {...props}
      className={cx(styles.textarea, props.className)}
    />
  )
}

/**
 * A named export for the FieldInput component.
 * @description [Field Docs](https://cerberus.digitalu.design/react/field)
 * @example
 * ```tsx
 * import { Input } from '@cerberus/react'
 *
 * <Field
 *   ids={{
 *    control: 'email',
 *   }}
 *   label="Enter your email"
 *   helperText="We'll never share your email with anyone else."
 *   errorText="Email is required."
 *   required
 * >
 *   <Input type="email" />
 * </Field>
 * ```
 */
export const Input = FieldInput
export const Textarea = FieldTextarea
