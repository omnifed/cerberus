'use client'

import { cx } from '@cerberus-design/styled-system/css'
import { hstack, vstack } from '@cerberus-design/styled-system/patterns'
import {
  toggle,
  type ToggleVariantProps,
} from '@cerberus-design/styled-system/recipes'
import type { InputHTMLAttributes } from 'react'
import { $cerberusIcons } from '../config/defineIcons'
import { useFieldContext } from '../context/field'

export type ToggleBase = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'size' | 'id' | 'value'
> & {
  describedBy?: string
  id: string
  value: string
}
export type ToggleProps = ToggleBase & ToggleVariantProps

export function Toggle(props: ToggleProps) {
  const { size, describedBy, ...nativeProps } = props
  const styles = toggle({ size })
  const { invalid, ...state } = useFieldContext()
  const Icon = $cerberusIcons.toggleChecked

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
        <Icon />
      </span>
    </span>
  )
}
