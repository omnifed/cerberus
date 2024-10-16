'use client'

import { cx } from '@cerberus/styled-system/css'
import { hstack } from '@cerberus/styled-system/patterns'
import { radio } from '@cerberus/styled-system/recipes'
import type { RecipeVariantProps } from '@cerberus/styled-system/types'
import type { InputHTMLAttributes, PropsWithChildren } from 'react'
import { useFieldContext } from '../context/field'

/**
 * This module contains the Radio component.
 * @module
 */

export type RadioRecipe = RecipeVariantProps<typeof radio>
export interface RadioBaseProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /**
   * A unique identifier for the radio button. Required for accessibility.
   */
  id: string
}
export type RadioProps = RadioBaseProps & RadioRecipe

/**
 * The Radio component is used to allow users to select a single option from a list of options.
 * @see https://cerberus.digitalu.design/react/radio
 * @memberof module:Field
 * @example
 * ```tsx
 * <Field>
 *  <fieldset name="fruit">
 *    <Radio id="radio-1" name="fruit" value="1">
 *     Option 1
 *    </Radio>
 *    <Radio id="radio-2" name="fruit" value="2">
 *     Option 2
 *    </Radio>
 *    <Radio id="radio-3" name="fruit" value="3">
 *     Option 3
 *    </Radio>
 *   </fieldset>
 * </Field>
 * ```
 */
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
