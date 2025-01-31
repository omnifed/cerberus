'use client'

import { useFieldContext } from '@ark-ui/react/field'
import type { InputHTMLAttributes } from 'react'
import { cx } from '@cerberus/styled-system/css'
import { hstack, vstack } from '@cerberus/styled-system/patterns'
import {
  toggle,
  type ToggleVariantProps,
} from '@cerberus/styled-system/recipes'
import { useCerberusContext } from '../../context/cerberus'

/**
 * This module provides a toggle component.
 * @module
 */

export type ToggleBase = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'size' | 'id' | 'value'
> & {
  /**
   * @deprecated
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
export type SwitchProps = ToggleBase & ToggleVariantProps

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
export function Switch(props: SwitchProps) {
  const { size, ...nativeProps } = props
  const styles = toggle({ size })

  const { invalid, disabled, readOnly, required, ariaDescribedby } =
    useFieldContext()

  const { icons } = useCerberusContext()
  const CheckedIcon = icons.toggleChecked

  return (
    <span
      className={cx('group', styles.track, hstack())}
      data-checked={props.checked || props.defaultChecked}
    >
      <input
        {...nativeProps}
        {...(disabled && { disabled: true })}
        {...(readOnly && { readOnly: true })}
        {...(required && { required: true })}
        {...(ariaDescribedby && {
          'aria-describedby': ariaDescribedby,
        })}
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
