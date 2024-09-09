'use client'

import {
  CheckmarkFilled,
  CloseFilled,
  Restart,
  TrashCan,
  Upload,
  Warning,
} from '@cerberus/icons'
import { useCallback, type HTMLAttributes, type MouseEvent } from 'react'
import { ProgressBar } from './ProgressBar'
import { IconButton } from './IconButton'

/**
 * This module contains the FileStatus component.
 * @module
 */

export type FileStatusActions = 'cancel' | 'retry' | 'delete'
export interface FileStatusProps extends HTMLAttributes<HTMLDivElement> {
  file: string
  now: number
  status: 'todo' | 'processing' | 'done' | 'error'
  action: (status: FileStatusActions, e: MouseEvent<HTMLButtonElement>) => void
}

/**
 * This component displays the status of a file.
 * @param props - {
 *  file: string,
 *  now: number,
 *  status: 'todo' | 'processing' | 'done' | 'error',
 *  action: (status: FileStatusActions, e: MouseEvent<HTMLButtonElement>) => void
 * }.
 * @example
 * ```tsx
 * <FileStatus file="file.txt" now={0} status="todo" action={(status, e) => console.log(status, e)} />
 * ```
 */
export function FileStatus(props: FileStatusProps) {
  const { file, now, status, action, ...nativeProps } = props
  const actionLabel = getStatusActionLabel(status)

  const handleAction = useCallback(
    (e: MouseEvent<HTMLButtonElement>) => {
      const actionStatus = getStatusActionLabel(
        status,
      ).toLocaleLowerCase() as FileStatusActions
      action(actionStatus, e)
    },
    [action],
  )

  return (
    <div {...nativeProps}>
      <div>
        <MatchFileStatusIcon status={status} />
      </div>

      <div>
        <small>{file}</small>
        <ProgressBar now={now} />
        <small>
          <MatchFileStatusText status={status} now={now} />
        </small>
      </div>

      <IconButton ariaLabel={actionLabel} onClick={handleAction} size="sm">
        <MatchStatusAction status={status} />
      </IconButton>
    </div>
  )
}

interface FileStatusElProps {
  status: FileStatusProps['status']
  now?: number
}

function MatchFileStatusIcon(props: FileStatusElProps) {
  switch (props.status) {
    case 'todo':
    case 'processing':
      return <Upload />
    case 'done':
      return <CheckmarkFilled />
    case 'error':
      return <Warning />
    default:
      throw new Error('Invalid status')
  }
}

function MatchFileStatusText(props: FileStatusElProps) {
  switch (props.status) {
    case 'todo':
      return 'Waiting to upload'
    case 'processing':
      return `${props.now}% Complete`
    case 'done':
      return 'File uploaded successfully'
    case 'error':
      return 'There was an error uploading the file'
    default:
      throw new Error('Invalid status')
  }
}

function MatchStatusAction(props: FileStatusElProps) {
  switch (props.status) {
    case 'processing':
      return <CloseFilled />
    case 'error':
      return <Restart />
    case 'done':
      return <TrashCan />
    default:
      break
  }
}

function getStatusActionLabel(status: string) {
  switch (status) {
    case 'processing':
      return 'Cancel'
    case 'error':
      return 'Retry'
    case 'done':
      return 'Delete'
    default:
      return ''
  }
}
