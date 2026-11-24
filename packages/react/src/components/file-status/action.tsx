'use client'

import type { ReactNode } from 'react'
import { useCerberusContext } from '../../context/cerberus'
import { IconButton, type IconButtonRootProps } from '../buttons/index'
import {
  getStatusActionLabel,
  getStatusActionPalette,
  processStatus,
  type FileStatusKey,
} from './status'

/**
 * This module contains the FileStatus action abstraction.
 * @module
 */

export type FileStatusActionProps = Omit<IconButtonRootProps, 'children'> & {
  /**
   * The status the action applies to: it picks the default icon, label and
   * palette. `<FileStatus>` supplies it to a patch child.
   * @default 'todo'
   */
  status?: FileStatusKey
  /**
   * The accessible label. Defaults to "Cancel", "Retry" or "Delete" for the
   * status.
   */
  ariaLabel?: string
  /**
   * The icon. Defaults to the Cerberus `close`, `redo` or `delete` icon for the
   * status.
   */
  children?: ReactNode
}

/**
 * The icon button of a file status card: cancel while waiting or uploading,
 * retry after an error, delete once uploaded.
 * @example
 * ```tsx
 * <FileStatus.Action status={processStatus.ERROR} onClick={retry} />
 * ```
 */
export function FileStatusAction(props: FileStatusActionProps) {
  const {
    status = processStatus.TODO,
    ariaLabel,
    children,
    ...buttonProps
  } = props
  return (
    <IconButton
      ariaLabel={ariaLabel ?? getStatusActionLabel(status)}
      palette={getStatusActionPalette(status)}
      size="sm"
      {...buttonProps}
    >
      {children ?? <StatusActionIcon status={status} />}
    </IconButton>
  )
}

function StatusActionIcon(props: { status: FileStatusKey }) {
  const { icons } = useCerberusContext()
  const { close: CloseIcon, redo: RedoIcon, delete: TrashIcon } = icons
  switch (props.status) {
    case processStatus.ERROR:
      return <RedoIcon />
    case processStatus.DONE:
      return <TrashIcon />
    default:
      return <CloseIcon />
  }
}
