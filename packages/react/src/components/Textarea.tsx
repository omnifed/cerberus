'use client'

import type { TextareaHTMLAttributes } from 'react'
import { css, cx } from '@cerberus/styled-system/css'
import { input, type InputVariantProps } from '@cerberus/styled-system/recipes'
import { useFieldContext } from '../context/field'

/**
 * This module contains the Textarea component.
 * @module
 */

export interface TextareaBaseProps
  extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'id'> {
  /**
   * The ID of the FieldMessage that describes the textarea.
   */
  describedBy?: string
  /**
   * The unique id of the textarea.
   */
  id: string
}
export type TextareaProps = InputVariantProps & TextareaBaseProps

/**
 * A component that allows the user to input large blocks of text.
 * @see https://cerberus.digitalu.design/react/textarea
 */
export function Textarea(props: TextareaProps): JSX.Element {
  const { describedBy, ...nativeProps } = props
  const { invalid, ...fieldState } = useFieldContext()

  return (
    <textarea
      {...nativeProps}
      {...fieldState}
      {...(describedBy && { 'aria-describedby': describedBy })}
      {...(invalid && { 'aria-invalid': true })}
      className={cx(
        props.className,
        input().input,
        css({
          pxi: '2',
          py: '2',
          resize: 'vertical',
        }),
      )}
      rows={4}
    />
  )
}
