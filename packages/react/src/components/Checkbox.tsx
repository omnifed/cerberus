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
import { $cerberusIcons } from '../config/defineIcons'

/**
 * This module contains the Checkbox component.
 * @module
 */

export type CheckboxProps = CheckboxVariantProps &
  Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'id'> & {
    describedBy?: string
    id: string
  }

/**
 * Checkbox component
 * @definition [ARIA Target Size](https://www.w3.org/WAI/WCAG21/Understanding/target-size.html#:~:text=Understanding%20SC%202.5.,%3ATarget%20Size%20(Level%20AAA)&text=The%20size%20of%20the%20target,Equivalent)
 * @definition [ARIA Forms](https://www.a11yproject.com/checklist/#forms)
 * @definition [Checkbox docs](https://cerberus.digitalu.design/react/checkbox)
 * @example
 * ```tsx
 * <Field>
 *   <Checkbox id="legal" checked={checked.legal} onChange={handleChange} />
 * </Field>
 * ```
 */
export function Checkbox(props: CheckboxProps) {
  const { describedBy, size, checked, ...nativeProps } = props
  const { invalid, ...fieldStates } = useFieldContext()
  const styles = checkbox({ size })
  const { checkbox: CheckIcon } = $cerberusIcons

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
        className={cx('peer', nativeProps.className, styles.input)}
        type="checkbox"
      />
      <Show when={checked}>
        <span className={styles.icon}>
          <CheckIcon />
        </span>
      </Show>
    </div>
  )
}
