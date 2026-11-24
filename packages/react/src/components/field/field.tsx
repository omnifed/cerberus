'use client'

import type { ReactNode } from 'react'
import { HStack } from 'styled-system/jsx'
import { extractParts } from '../../internal/extract-parts'
import { splitProps } from '../../utils/index'
import {
  FieldErrorText,
  FieldHelperText,
  FieldLabel,
  FieldRequiredIndicator,
  FieldRoot,
  type FieldRootProps,
} from './primitives'

/**
 * This module contains the Field abstraction.
 * @module Field
 */

const PARTS = {
  label: FieldLabel,
  requiredIndicator: FieldRequiredIndicator,
  helperText: FieldHelperText,
  errorText: FieldErrorText,
}

export type FieldProps = FieldRootProps & {
  /**
   * The label of the field.
   */
  label?: ReactNode
  /**
   * The helper text of the field. Hidden when the field is invalid.
   */
  helperText?: ReactNode
  /**
   * A helper text positioned at the end of the field. Good for Textarea fields.
   */
  secondaryHelperText?: ReactNode
  /**
   * The error text of the field. Shown when the field is invalid.
   */
  errorText?: ReactNode
  /**
   * Whether to hide the label visually while keeping it accessible to screen
   * readers. On a `Field.Label` primitive, use the `srOnly` style prop.
   */
  hideLabel?: boolean
}

/**
 * The Field component is an abstraction of the root that renders the `label`
 * with a `(required)` indicator (shown when `required`), the control (its
 * non-part children), then a row with the `helperText` (hidden when
 * `invalid`), the `errorText` (shown when `invalid`) and the
 * `secondaryHelperText`. Direct `Field.Label`, `Field.RequiredIndicator`,
 * `Field.HelperText` and `Field.ErrorText` children override that part; a
 * part child with children replaces its default content.
 * @description [Cerberus Docs](https://cerberus.digitalu.design/docs/components/field)
 * @description [Ark Docs](https://ark-ui.com/docs/components/field)
 * @example
 * ```tsx
 * <Field
 *   label="First name"
 *   helperText="This is what people will see on your profile."
 *   errorText="A first name is required to create an account."
 *   required
 * >
 *   <Input name="firstName" type="text" />
 * </Field>
 * ```
 */
export function FieldEl(props: FieldProps) {
  const [localProps, rootProps] = splitProps(props, [
    'label',
    'helperText',
    'secondaryHelperText',
    'errorText',
    'hideLabel',
    'children',
  ])

  const { parts, content } = extractParts(localProps.children, PARTS)

  const { children: labelChildren, ...labelOverrideProps } = parts.label ?? {}
  const { children: requiredChildren, ...requiredOverrideProps } =
    parts.requiredIndicator ?? {}
  const { children: helperTextChildren, ...helperTextOverrideProps } =
    parts.helperText ?? {}
  const { children: errorTextChildren, ...errorTextOverrideProps } =
    parts.errorText ?? {}

  const label = labelChildren ?? localProps.label
  const helperText = helperTextChildren ?? localProps.helperText
  const errorText = errorTextChildren ?? localProps.errorText

  return (
    <FieldRoot {...rootProps}>
      {Boolean(label) && (
        <FieldLabel
          {...labelOverrideProps}
          {...(localProps.hideLabel && { srOnly: true })}
        >
          {label}
          <FieldRequiredIndicator {...requiredOverrideProps}>
            {requiredChildren ?? '(required)'}
          </FieldRequiredIndicator>
        </FieldLabel>
      )}

      {content}

      <HStack justifyContent="space-between" w="full">
        {/* Ark always shows the helper text; Cerberus swaps it for the error.
            An empty one still renders to push the secondary text to the end */}
        {!rootProps.invalid && (
          <FieldHelperText
            data-has-content={Boolean(helperText)}
            {...helperTextOverrideProps}
          >
            {helperText}
          </FieldHelperText>
        )}

        {Boolean(errorText) && (
          <FieldErrorText {...errorTextOverrideProps}>
            {errorText}
          </FieldErrorText>
        )}

        {Boolean(localProps.secondaryHelperText) && (
          <FieldHelperText>{localProps.secondaryHelperText}</FieldHelperText>
        )}
      </HStack>
    </FieldRoot>
  )
}
