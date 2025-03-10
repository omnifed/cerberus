'use client'

import type { HTMLAttributes } from 'react'
import { cx } from 'styled-system/css'
import {
  fieldMessage,
  type FieldMessageVariantProps,
} from 'styled-system/recipes'
import { useFieldContext } from '@ark-ui/react/field'

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
 * @deprecated use FieldHelperText, FieldErrorText, or FieldParts instead
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
