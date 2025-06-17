import {
  ProgressBarBar,
  ProgressBarRoot,
  type ProgressBarRootProps,
} from './primitives'

/**
 * This module contains the ProgressBar component.
 * @module
 */

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
export type ProgressBarProps = ProgressBarRootProps &
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
  const { indeterminate, now, label, ...nativeProps } = props

  const nowClamped = Math.min(100, Math.max(0, now || 0))
  const width = {
    width: indeterminate ? '50%' : `${nowClamped}%`,
  }

  return (
    <ProgressBarRoot
      {...nativeProps}
      aria-label={label}
      aria-valuenow={indeterminate ? 0 : nowClamped}
    >
      <ProgressBarBar
        {...(indeterminate && { 'data-state': 'indeterminate' })}
        data-complete={nowClamped === 100}
        style={width}
      />
    </ProgressBarRoot>
  )
}
