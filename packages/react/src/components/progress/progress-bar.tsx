'use client'

import { extractParts } from '../../internal/extract-parts'
import {
  ProgressBarBar,
  ProgressBarRoot,
  type ProgressBarRootProps,
} from './primitives'

/**
 * This module contains the ProgressBar abstraction.
 * @module
 */

const PARTS = {
  bar: ProgressBarBar,
}

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
 * The ProgressBar component is used to display the progress of a task. A
 * direct `ProgressBar.Bar` child patches the bar (its `style` merges with the
 * computed width); non-part children render inside the root, after the bar.
 * @see https://cerberus.digitalu.design/docs/components/progress
 * @example
 * ```tsx
 * <ProgressBar id="upload" label="Uploading" now={75} />
 * ```
 */
export function ProgressBarEl(props: ProgressBarProps) {
  const { indeterminate, now, label, children, ...rootProps } = props

  const { parts, content } = extractParts(children, PARTS)
  const { style: barStyle, ...barOverrideProps } = parts.bar ?? {}

  const nowClamped = Math.min(100, Math.max(0, now || 0))
  const width = indeterminate ? '50%' : `${nowClamped}%`

  return (
    <ProgressBarRoot
      {...rootProps}
      aria-label={label}
      aria-valuenow={indeterminate ? 0 : nowClamped}
    >
      <ProgressBarBar
        {...(indeterminate && { 'data-state': 'indeterminate' })}
        data-complete={nowClamped === 100}
        {...barOverrideProps}
        style={{ width, ...barStyle }}
      />
      {content}
    </ProgressBarRoot>
  )
}
