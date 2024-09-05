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
  value: number
}
export type ProgressBarProps = ProgressBarBaseProps & ProgressBarVariantProps

/**
 * The ProgressBar component is used to display the progress of a task.
 * @param props - HTML div element attributes
 * @param props.value - The value of the progress bar
 * @param props.indeterminate - Whether the progress bar is indeterminate
 * @example
 * ```tsx
 * <ProgressBar value={75} />
 * ```
 */
export function ProgressBar(props: ProgressBarProps) {
  const { indeterminate, size, usage, value, ...nativeProps } = props
  const styles = progressBar({ size, usage })
  const valueClamped = Math.min(100, Math.max(0, value))
  const width = {
    width: indeterminate ? '50%' : `${valueClamped}%`,
  }

  return (
    <div
      {...nativeProps}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={indeterminate ? 0 : valueClamped}
      className={cx(nativeProps.className, styles.root)}
      role="meter"
    >
      <div
        {...(indeterminate && { 'data-indeterminate': true })}
        data-complete={valueClamped === 100}
        className={styles.bar}
        style={width}
      />
    </div>
  )
}
