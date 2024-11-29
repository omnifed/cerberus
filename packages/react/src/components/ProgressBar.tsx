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

export type ProgressBarBaseProps = HTMLAttributes<HTMLDivElement>
export type NonIndeterminateProgressBarProps = {
  /**
   * A unique identifier for the progress bar. Required for accessibility.
   */
  id: string
  /**
   * A description label for the progress bar. Required for accessibility.
   */
  label: string
  /**
   * The state of the progress bar.
   */
  indeterminate?: never
  /**
   * The current value of the progress bar.
   */
  now: number
}
export type IndeterminateProgressBarProps = {
  /**
   * A unique identifier for the progress bar. Required for accessibility.
   */
  id: string
  /**
   * A description label for the progress bar. Required for accessibility.
   */
  label: string
  /**
   * The state of the progress bar.
   */
  indeterminate?: true
  /**
   * The current value of the progress bar.
   */
  now?: never
}
export type ProgressBarProps = ProgressBarBaseProps &
  ProgressBarVariantProps &
  (NonIndeterminateProgressBarProps | IndeterminateProgressBarProps)

/**
 * The ProgressBar component is used to display the progress of a task.
 * @see https://cerberus.digitalu.design/react/progress-indicators
 * @example
 * ```tsx
 * <ProgressBar value={75} />
 * ```
 */
export function ProgressBar(props: ProgressBarProps) {
  const { indeterminate, size, usage, now, label, ...nativeProps } = props
  const styles = progressBar({ size, usage })
  const nowClamped = Math.min(100, Math.max(0, now || 0))
  const width = {
    width: indeterminate ? '50%' : `${nowClamped}%`,
  }

  return (
    <div
      {...nativeProps}
      aria-label={label}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={indeterminate ? 0 : nowClamped}
      className={cx(nativeProps.className, styles.root)}
      role="progressbar"
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
