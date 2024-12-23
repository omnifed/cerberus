'use client'

import type { InputHTMLAttributes, ReactNode } from 'react'
import { input, type InputVariantProps } from '@cerberus/styled-system/recipes'
import { cx } from '@cerberus/styled-system/css'
import { useFieldContext } from '../context/field'
import { useCerberusContext } from '../context/cerberus'
import { Show } from './Show'

export interface InputBaseProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'id' | 'size'> {
  /**
   * The id of the FieldMessage component used to describe the input. Required for accessibility.
   */
  describedBy?: string
  /**
   * The unique identifier for the input element. Required for accessibility.
   */
  id: string
  /**
   * An optional icon to display at the start of the input.
   */
  startIcon?: ReactNode
  /**
   * An optional icon to display at the end of the input.
   */
  endIcon?: ReactNode
}
export type InputProps = InputBaseProps & InputVariantProps

/**
 * A component that allows the user to input text. Must be wrapped in a Field
 * component to keep track of the state for entire group of elements related to
 * the field.
 * @see https://cerberus.digitalu.design/react/input
 */
export function Input(props: InputProps) {
  const { describedBy, size, startIcon, endIcon, ...nativeProps } = props
  const inputStyles = input({ size })
  const { invalid, ...fieldStates } = useFieldContext()
  const hasEndIcon = Boolean(endIcon)

  const { icons } = useCerberusContext()
  const { invalid: InvalidIcon } = icons

  return (
    <div className={inputStyles.root}>
      <Show when={Boolean(startIcon)}>
        <span className={inputStyles.startIcon}>{startIcon}</span>
      </Show>

      <input
        {...nativeProps}
        {...fieldStates}
        {...(describedBy && { 'aria-describedby': describedBy })}
        {...(invalid && { 'aria-invalid': true })}
        data-start-icon={Boolean(startIcon)}
        className={cx('peer', nativeProps.className, inputStyles.input)}
      />

      <Show when={invalid}>
        <InvalidIcon className={inputStyles.icon} />
      </Show>
      <Show when={hasEndIcon && !invalid}>
        <span className={inputStyles.icon}>{endIcon}</span>
      </Show>
    </div>
  )
}
