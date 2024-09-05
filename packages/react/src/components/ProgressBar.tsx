import { cx } from '@cerberus/styled-system/css'
import {
  progressBar,
  type ProgressBarVariantProps,
} from '@cerberus/styled-system/recipes'
import type { HTMLAttributes } from 'react'

/**
 * This module contains the ProgressBar component.
 * @module
 */

export interface ProgressBarBaseProps extends HTMLAttributes<HTMLDivElement> {
  indeterminate?: boolean
  now: number
}
export type ProgressBarProps = ProgressBarBaseProps & ProgressBarVariantProps

/**
 * The ProgressBar component is used to display the progress of a task.
 * @param props - HTML div element attributes
 * @param props.now - The current value of the progress bar
 * @param props.indeterminate - Whether the progress bar is indeterminate
 * @example
 * ```tsx
 * <ProgressBar value={75} />
 * ```
 */
export function ProgressBar(props: ProgressBarProps) {
  const { indeterminate, size, usage, now, ...nativeProps } = props
  const styles = progressBar({ size, usage })
  const nowClamped = Math.min(100, Math.max(0, now))
  const width = {
    width: indeterminate ? '50%' : `${nowClamped}%`,
  }

  return (
    <div
      {...nativeProps}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={indeterminate ? 0 : nowClamped}
      className={cx(nativeProps.className, styles.root)}
      role="meter"
    >
      <div
        {...(indeterminate && { 'data-indeterminate': true })}
        data-complete={nowClamped === 100}
        className={styles.bar}
        style={width}
      />
    </div>
  )
}
