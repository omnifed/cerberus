'use client'

import { useId } from 'react'
import {
  ProgressBar,
  type ProgressBarProps,
  type ProgressBarRootProps,
} from '../progress/index'

/**
 * This module contains the FileStatus progress abstraction.
 * @module
 */

/**
 * A `ProgressBar`'s props with `id`, `label` and `now` optional: `<FileStatus>`
 * supplies them, so a patch child (`<FileStatus.Progress label="Envoi" />`)
 * sets only what it changes.
 */
export type FileStatusProgressProps = Omit<ProgressBarRootProps, 'id'> & {
  /**
   * A unique identifier for the progress bar. Generated when omitted.
   */
  id?: string
  /**
   * The progress bar's accessible label.
   * @default 'File upload status'
   */
  label?: string
  /**
   * The percentage processed.
   * @default 0
   */
  now?: number
  /**
   * Shows an indeterminate bar instead of `now`.
   */
  indeterminate?: boolean
}

/**
 * The small progress bar of a file status card, labelled "File upload status"
 * by default.
 * @example
 * ```tsx
 * <FileStatus.Progress now={40} label="Upload progress" />
 * ```
 */
export function FileStatusProgress(props: FileStatusProgressProps) {
  const fallbackId = useId()
  const { id, label, now, indeterminate, ...rootProps } = props
  const barProps = {
    size: 'sm',
    ...rootProps,
    id: id ?? fallbackId,
    label: label ?? 'File upload status',
    ...(indeterminate ? { indeterminate: true } : { now: now ?? 0 }),
  } as ProgressBarProps
  return <ProgressBar {...barProps} />
}
