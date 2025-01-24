import {
  Field,
  type FieldHelperTextProps,
  type FieldInputProps,
  type FieldLabelProps,
  type FieldRootProps,
  type FieldTextareaProps,
} from '@ark-ui/react/field'
import { cx } from '@cerberus/styled-system/css'
import { field, type FieldVariantProps } from '@cerberus/styled-system/recipes'
import { FieldStatusIndicator } from './status-indicator'

/**
 * This module contains all the primitives of the Field component.
 * @module 'field'
 */

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
export function FieldRoot(props: FieldRootProps & FieldVariantProps) {
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
export function FieldInput(
  props: Omit<FieldInputProps, 'size'> & FieldVariantProps,
) {
  const { size, ...fieldProps } = props
  const styles = field({ size })
  return (
    <div className={styles.inputRoot}>
      <Field.Input
        {...fieldProps}
        className={cx(styles.input, fieldProps.className)}
      />
      <FieldStatusIndicator />
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
