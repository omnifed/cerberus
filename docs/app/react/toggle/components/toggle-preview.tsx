'use client'

import { Checkmark } from '@cerberus-design/icons'
import { cx } from '@cerberus/styled-system/css'
import { hstack, vstack } from '@cerberus/styled-system/patterns'
import {
  toggle,
  type ToggleVariantProps,
} from '@cerberus/styled-system/recipes'
import { on } from 'events'
import {
  useCallback,
  useMemo,
  useState,
  type ChangeEvent,
  type InputHTMLAttributes,
  type MouseEvent,
} from 'react'

function useToggle(options: {
  checked?: string
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}) {
  const { onChange } = options
  const [checked, setChecked] = useState<string>(options.checked ?? '')

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const target = e.currentTarget as HTMLInputElement
      setChecked((prev) => {
        return prev === target.value ? '' : target.value
      })
      onChange?.(e)
    },
    [onChange],
  )

  return useMemo(() => ({ checked, handleChange }), [checked, handleChange])
}

type ToggleBase = Omit<InputHTMLAttributes<HTMLInputElement>, 'size'>
type ToggleProps = ToggleBase & ToggleVariantProps

function Toggle(props: ToggleProps) {
  const { size, ...nativeProps } = props
  const styles = toggle({ size })

  return (
    <span
      className={cx(styles.track, hstack())}
      data-checked={props.checked || props.defaultChecked}
    >
      <input
        {...nativeProps}
        aria-label="Toggle"
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
        <Checkmark />
      </span>
    </span>
  )
}

export function OverviewToggleGroup() {
  const { checked, handleChange } = useToggle({ checked: 'lg-one' })

  return (
    <div
      className={hstack({
        gap: 4,
      })}
    >
      <Toggle
        checked={checked === 'lg-one'}
        id="lg-one"
        size="lg"
        onChange={handleChange}
        value="lg-one"
      />
      <Toggle
        checked={checked === 'lg-two'}
        id="lg-two"
        size="lg"
        onChange={handleChange}
        value="lg-two"
      />
    </div>
  )
}

export function OverviewToggleSizes() {
  const { checked, handleChange } = useToggle({ checked: 'lg-t' })

  return (
    <div
      className={hstack({
        gap: 4,
      })}
    >
      <Toggle
        checked={checked === 'sm-t'}
        id="sm-t"
        onChange={handleChange}
        value="sm-t"
      />
      <Toggle
        checked={checked === 'lg-t'}
        id="lg-t"
        onChange={handleChange}
        size="lg"
        value="lg-t"
      />
    </div>
  )
}
