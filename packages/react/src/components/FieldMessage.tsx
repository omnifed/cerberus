'use client'

import type { HTMLAttributes } from 'react'
import { cx, type RecipeVariantProps } from '@cerberus/styled-system/css'
import { fieldMessage } from '@cerberus/styled-system/recipes'
import { useFieldContext } from '../context/field'

/**
 * This module contains the FieldMessage component.
 * @module
 */

export type FieldMessageRecipe = RecipeVariantProps<typeof fieldMessage>
export interface FieldMessageBaseProps
  extends HTMLAttributes<HTMLParagraphElement> {
  id: string
}
export type FieldMessageProps = FieldMessageBaseProps & FieldMessageRecipe

/**
 * A component that provides feedback about the field.
 * @description [FieldMessage Docs](https://cerberus.digitalu.design/react/field-message)
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
