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

export const fileStatus = {
  TODO: 'todo',
  PROCESSING: 'processing',
  DONE: 'done',
  ERROR: 'error',
}

export type FileStatusActions = 'cancel' | 'retry' | 'delete'
export interface FileStatusProps extends HTMLAttributes<HTMLDivElement> {
  file: string
  now: number
  status: keyof typeof fileStatus
  action: (status: FileStatusActions, e: MouseEvent<HTMLButtonElement>) => void
}

/**
 * This component displays the status of a file.
 * @param props - {
 *  file: string,
 *  now: number,
 *  status: keyof typeof fileStatus,
 *  action: (status: FileStatusActions, e: MouseEvent<HTMLButtonElement>) => void
 * }.
 * @example
 * ```tsx
 * <FileStatus file="file.txt" now={0} status={fileStatus.TODO} action={(status, e) => console.log(status, e)} />
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
    case fileStatus.TODO:
    case fileStatus.PROCESSING:
      return <Upload />
    case fileStatus.DONE:
      return <CheckmarkFilled />
    case fileStatus.ERROR:
      return <Warning />
    default:
      throw new Error('Invalid status')
  }
}

function MatchFileStatusText(props: FileStatusElProps) {
  switch (props.status) {
    case fileStatus.TODO:
      return 'Waiting to upload'
    case fileStatus.PROCESSING:
      return `${props.now}% Complete`
    case fileStatus.DONE:
      return 'File uploaded successfully'
    case fileStatus.ERROR:
      return 'There was an error uploading the file'
    default:
      throw new Error('Invalid status')
  }
}

function MatchStatusAction(props: FileStatusElProps) {
  switch (props.status) {
    case fileStatus.PROCESSING:
      return <CloseFilled />
    case fileStatus.ERROR:
      return <Restart />
    case fileStatus.DONE:
      return <TrashCan />
    default:
      break
  }
}

function getStatusActionLabel(status: string) {
  switch (status) {
    case fileStatus.PROCESSING:
      return 'Cancel'
    case fileStatus.ERROR:
      return 'Retry'
    case fileStatus.DONE:
      return 'Delete'
    default:
      return ''
  }
}
