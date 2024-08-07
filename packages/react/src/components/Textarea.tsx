'use client'

import type { TextareaHTMLAttributes } from 'react'
import { css, cx } from '@cerberus/styled-system/css'
import { input } from '@cerberus/styled-system/recipes'
import { useFieldContext } from '../context/field'
import type { InputRecipeProps } from './Input'

/**
 * This module contains the Textarea component.
 * @module
 */

export interface TextareaBaseProps
  extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'id'> {
  describedBy?: string
  id: string
}
export type TextareaProps = InputRecipeProps & TextareaBaseProps

/**
 * A component that allows the user to input large blocks of text.
 * @description https://github.com/omnifed/cerberus/blob/main/packages/react/src/components/Textarea.tsx
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
