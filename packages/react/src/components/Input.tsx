'use client'

import type { InputHTMLAttributes } from 'react'
import { WarningFilled } from '@cerberus/icons'
import { input } from '@cerberus/styled-system/recipes'
import { cx } from '@cerberus/styled-system/css'
import { useFieldContext } from '../context/field'
import { Show } from './Show'

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'id' | 'size'> {
  describedBy?: string
  id: string
  size?: 'sm' | 'md' | 'lg'
}

export function Input(props: InputProps) {
  const { describedBy, size, ...nativeProps } = props
  const inputStyles = input({ size })
  const { invalid, ...fieldStates } = useFieldContext()

  return (
    <div className={inputStyles.root}>
      <input
        {...nativeProps}
        {...fieldStates}
        {...(describedBy && { 'aria-describedby': describedBy })}
        {...(invalid && { 'aria-invalid': true })}
        className={cx('peer', nativeProps.className, inputStyles.input)}
      />
      <Show when={invalid}>
        <WarningFilled className={inputStyles.icon} />
      </Show>
    </div>
  )
}
