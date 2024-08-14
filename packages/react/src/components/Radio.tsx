'use client'

import { cx } from '@cerberus/styled-system/css'
import { hstack } from '@cerberus/styled-system/patterns'
import { radio } from '@cerberus/styled-system/recipes'
import type { RecipeVariantProps } from '@cerberus/styled-system/types'
import type { InputHTMLAttributes, PropsWithChildren } from 'react'
import { useFieldContext } from '../context/field'

export type RadioRecipe = RecipeVariantProps<typeof radio>
export interface RadioBaseProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  id: string
}
export type RadioProps = RadioBaseProps & RadioRecipe

export function Radio(props: PropsWithChildren<RadioProps>) {
  const { children, size, ...nativeProps } = props
  const { invalid, ...state } = useFieldContext()
  const styles = radio({ size })

  return (
    <div className={cx('group', hstack(), styles.root)} tabIndex={0}>
      <input
        {...nativeProps}
        {...state}
        {...(invalid && { 'aria-invalid': true })}
        className={cx(nativeProps.className, styles.input)}
        tabIndex={-1}
        type="radio"
      />
      {children}
    </div>
  )
}
