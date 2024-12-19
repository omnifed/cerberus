'use client'

import { cx } from '@cerberus/styled-system/css'
import { hstack, vstack } from '@cerberus/styled-system/patterns'
import {
  toggle,
  type ToggleVariantProps,
} from '@cerberus/styled-system/recipes'
import type { InputHTMLAttributes } from 'react'
import { $cerberusIcons } from '../config/defineIcons'
import { useFieldContext } from '../context/field'

/**
 * This module provides a toggle component.
 * @module
 */

export type ToggleBase = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'size' | 'id' | 'value'
> & {
  /**
   * The FieldMessage providing context for the Toggle.
   */
  describedBy?: string
  /**
   * A unique identifier for the Toggle. Required for accessibility.
   */
  id: string
  /**
   * The value of the Toggle.
   */
  value: string
}
export type ToggleProps = ToggleBase & ToggleVariantProps

/**
 * The Toggle component is used to switch between two states. Optionally
 * combine with the `useToggle` hook.
 * @see https://cerberus.digitalu.design/react/toggle
 * @example
 * ```tsx
 * const { checked, handleChange } = useToggle({ checked: 'toggle' })
 *
 * <Hstack justify="space-between" w="full">
 *  <Field>
 *    <Label htmlFor="toggle">Show notifications</Label>
 *    <Toggle
 *     checked={checked === 'toggle'}
 *     id="toggle"
 *     onChange={handleChange}
 *     value="toggle"
 *    />
 *  </Field>
 * </Hstack>
 * ```
 */
export function Toggle(props: ToggleProps) {
  const { size, describedBy, ...nativeProps } = props
  const styles = toggle({ size })
  const { invalid, ...state } = useFieldContext()
  const { toggleChecked: CheckedIcon } = $cerberusIcons

  return (
    <span
      className={cx('group', styles.track, hstack())}
      data-checked={props.checked || props.defaultChecked}
    >
      <input
        {...nativeProps}
        {...state}
        {...(describedBy && { 'aria-describedby': describedBy })}
        {...(invalid && { 'aria-invalid': true })}
        className={cx('peer', styles.input)}
        role="switch"
        type="checkbox"
      />
      <span
        className={cx(
          styles.thumb,
          vstack({
            justify: 'center',
          }),
        )}
      >
        <CheckedIcon />
      </span>
    </span>
  )
}
