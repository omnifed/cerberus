'use client'

import {
  checkbox,
  type CheckboxVariantProps,
} from '@cerberus/styled-system/recipes'
import { vstack } from '@cerberus/styled-system/patterns'
import { cx } from '@cerberus/styled-system/css'
import type { InputHTMLAttributes } from 'react'
import { Show } from './Show'
import { useFieldContext } from '../context/field'
import { useCerberusContext } from '../context/cerberus'

/**
 * This module contains the Checkbox component.
 * @module
 */

export type CheckboxProps = CheckboxVariantProps &
  Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'id'> & {
    /**
     * The id of the FieldMessage element describing the Checkbox.
     */
    describedBy?: string
    /**
     * The unique identifier for the checkbox. Required for accessibility.
     */
    id: string
    /**
     * Used to display a mixed checked state.
     * @description [ARIA Mixed State](https://www.w3.org/WAI/ARIA/apg/patterns/checkbox/examples/checkbox-mixed/)
     */
    mixed?: boolean
  }

/**
 * Checkbox component
 * @definition [ARIA Target Size](https://www.w3.org/WAI/WCAG21/Understanding/target-size.html#:~:text=Understanding%20SC%202.5.,%3ATarget%20Size%20(Level%20AAA)&text=The%20size%20of%20the%20target,Equivalent)
 * @definition [ARIA Forms](https://www.a11yproject.com/checklist/#forms)
 * @see https://cerberus.digitalu.design/react/checkbox
 * @example
 * ```tsx
 * <Field>
 *   <Checkbox id="legal" checked={checked.legal} onChange={handleChange} />
 * </Field>
 * ```
 */
export function Checkbox(props: CheckboxProps) {
  const { describedBy, size, checked, mixed, ...nativeProps } = props
  const { invalid, ...fieldStates } = useFieldContext()
  const styles = checkbox({ size })
  const { icons } = useCerberusContext()
  const { checkbox: CheckIcon, indeterminate: IndeterminateIcon } = icons

  if (!CheckIcon) {
    throw new Error('The CerberusProvider is missing the checkbox icon.')
  }
  if (!IndeterminateIcon) {
    throw new Error('The CerberusProvider is missing the indeterminate icon.')
  }

  return (
    <div
      className={cx(
        styles.root,
        vstack({
          gap: '0',
          justify: 'center',
        }),
      )}
    >
      <input
        {...nativeProps}
        {...fieldStates}
        {...(describedBy && { 'aria-describedby': describedBy })}
        {...(invalid && { 'aria-invalid': true })}
        {...(mixed && { 'aria-checked': 'mixed' })}
        className={cx('peer', nativeProps.className, styles.input)}
        type="checkbox"
      />
      <Show when={checked && !mixed}>
        <span className={styles.icon}>
          <CheckIcon />
        </span>
      </Show>
      <Show when={mixed}>
        <span className={styles.icon}>
          <IndeterminateIcon />
        </span>
      </Show>
    </div>
  )
}
