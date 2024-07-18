import { Checkmark } from '@cerberus-design/icons'
import { cx } from '@cerberus/styled-system/css'
import { hstack, vstack } from '@cerberus/styled-system/patterns'
import {
  toggle,
  type ToggleVariantProps,
} from '@cerberus/styled-system/recipes'
import type { InputHTMLAttributes } from 'react'

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
        className={cx('peer', styles.input)}
        tabIndex={-1}
        type="checkbox"
      />
      <span
        className={cx(
          styles.thumb,
          vstack({
            justify: 'center',
          }),
        )}
        tabIndex={0}
      >
        <Checkmark />
      </span>
    </span>
  )
}

export function OverviewToggleGroup() {
  return (
    <div
      className={hstack({
        gap: 4,
      })}
    >
      <Toggle id="off-t" size="lg" />
      <Toggle defaultChecked id="on-t" size="lg" />
    </div>
  )
}

export function OverviewToggleSizes() {
  return (
    <div
      className={hstack({
        gap: 4,
      })}
    >
      <Toggle id="sm-t" />
      <Toggle defaultChecked id="lg-t" size="lg" />
    </div>
  )
}
