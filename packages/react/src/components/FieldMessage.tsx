'use client'

import type { HTMLAttributes } from 'react'
import { cx } from '@cerberus/styled-system/css'
import {
  fieldMessage,
  type FieldMessageVariantProps,
} from '@cerberus/styled-system/recipes'
import { useFieldContext } from '../context/field'

/**
 * This module contains the FieldMessage component.
 * @module
 */
export interface FieldMessageBaseProps
  extends HTMLAttributes<HTMLParagraphElement> {
  /**
   * The id of the FieldMessage element describing the field. Required for accessibility. It is considered best practice to use the `help` or `error` prefix to help screen readers identify the type of message.
   *
   * @example For help messages: `help:field_id`
   * @example For error messages: `error:field_id`
   */
  id: string
}
export type FieldMessageProps = FieldMessageBaseProps & FieldMessageVariantProps

/**
 * A component that provides feedback about the field.
 * @see https://cerberus.digitalu.design/react/field-message
 * @example
 * ```tsx
 * <Field>
 *  <Label htmlFor="first_name">First Name</Label>
 *  <Input aria-describedBy="help:first_name" id="first_name" type="text" />
 *  <FieldMessage id="help:first_name">
 *   This will only be used in your account information.
 *  </FieldMessage>
 * </Field>
 * ```
 */
export function FieldMessage(props: FieldMessageProps) {
  const { invalid } = useFieldContext()
  return (
    <small
      {...props}
      {...(invalid && { 'aria-invalid': true })}
      className={cx(props.className, fieldMessage())}
    />
  )
}
