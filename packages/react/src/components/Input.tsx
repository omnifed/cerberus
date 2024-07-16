'use client'

import type { InputHTMLAttributes, ReactNode } from 'react'
import { WarningFilled } from '@cerberus/icons'
import { input } from '@cerberus/styled-system/recipes'
import { cx, type RecipeVariantProps } from '@cerberus/styled-system/css'
import { useFieldContext } from '../context/field'
import { Show } from './Show'

export type InputRecipeProps = RecipeVariantProps<typeof input>
export interface InputBaseProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'id' | 'size'> {
  describedBy?: string
  id: string
  startIcon?: ReactNode
}
export type InputProps = InputBaseProps & InputRecipeProps

export function Input(props: InputProps) {
  const { describedBy, size, startIcon, ...nativeProps } = props
  const inputStyles = input({ size })
  const { invalid, ...fieldStates } = useFieldContext()

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
        <WarningFilled className={inputStyles.icon} />
      </Show>
    </div>
  )
}
