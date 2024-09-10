'use client'

import {
  CheckmarkFilled,
  CloseFilled,
  Restart,
  TrashCan,
  Warning,
} from '@cerberus/icons'
import {
  useCallback,
  useMemo,
  type HTMLAttributes,
  type MouseEvent,
} from 'react'
import { ProgressBar } from './ProgressBar'
import { IconButton } from './IconButton'
import {
  fileStatus as fileStatusStyles,
  type FileStatusVariantProps,
} from '@cerberus/styled-system/recipes'
import { css, cx } from '@cerberus/styled-system/css'
import { hstack, vstack } from '@cerberus/styled-system/patterns'
import { $cerberusIcons } from '../config/defineIcons'
import { ModalIcon } from './ModalIcon'
import { FieldMessage } from './FieldMessage'
import { Field } from '../context/field'

/**
 * This module contains the FileStatus component.
 * @module
 */

export type FileStatusKey = (typeof fileStatus)[keyof typeof fileStatus]
export type FileStatusActions = 'cancel' | 'retry' | 'delete'
export interface FileBaseStatusProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'onClick'> {
  file: string
  now: number
  status: fileStatus
  onClick: (status: FileStatusActions, e: MouseEvent<HTMLButtonElement>) => void
}
export type FileStatusProps = FileBaseStatusProps & FileStatusVariantProps

/**
 * A helper object to represent the status of a file.
 * @example
 * ```tsx
 * import { fileStatus } from '@cerberus/react'
 * fileStatus.TODO // 'todo'
 * ```
 */
export const enum fileStatus {
  TODO = 'todo',
  PROCESSING = 'processing',
  DONE = 'done',
  ERROR = 'error',
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
  const { file, now, status, onClick, ...nativeProps } = props
  const actionLabel = useMemo(() => getStatusActionLabel(status), [status])
  const palette = useMemo(() => getPalette(status), [status])
  const modalIconPalette = useMemo(() => getModalIconPalette(status), [status])
  const styles = fileStatusStyles({ status })

  const handleClick = useCallback(
    (e: MouseEvent<HTMLButtonElement>) => {
      const actionStatus = getStatusActionLabel(
        status,
      ).toLocaleLowerCase() as FileStatusActions
      onClick(actionStatus, e)
    },
    [onClick],
  )

  return (
    <div
      {...nativeProps}
      className={cx(nativeProps.className, styles.root, hstack())}
    >
      <ModalIcon palette={modalIconPalette}>
        <MatchFileStatusIcon status={status} />
      </ModalIcon>

      <div
        className={vstack({
          alignItems: 'flex-start',
          gap: '0.12rem',
          w: 'full',
        })}
      >
        <small
          className={css({
            textStyle: 'label-sm',
          })}
        >
          {file}
        </small>
        <ProgressBar now={now} size="sm" />
        <Field invalid={modalIconPalette === 'danger'}>
          <FieldMessage
            className={css({
              color: 'page.text.100',
            })}
            id={`help:${file}`}
          >
            <MatchFileStatusText status={status} now={now} />
          </FieldMessage>
        </Field>
      </div>

      <IconButton
        ariaLabel={actionLabel}
        onClick={handleClick}
        palette={palette}
        size="sm"
      >
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
  const { fileUploader: FileUploaderIcon } = $cerberusIcons

  switch (props.status) {
    case fileStatus.TODO:
    case fileStatus.PROCESSING:
      return <FileUploaderIcon />
    case fileStatus.DONE:
      return <CheckmarkFilled />
    case fileStatus.ERROR:
      return <Warning />
    default:
      throw new Error('Unknown status')
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
    case fileStatus.TODO:
    case fileStatus.PROCESSING:
      return <CloseFilled />
    case fileStatus.ERROR:
      return <Restart />
    case fileStatus.DONE:
      return <TrashCan />
    default:
      throw new Error('Invalid status')
  }
}

function getStatusActionLabel(status: FileStatusKey) {
  switch (status) {
    case fileStatus.TODO:
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

function getPalette(status: FileStatusKey) {
  switch (status) {
    case fileStatus.TODO:
    case fileStatus.PROCESSING:
      return 'danger'
    case fileStatus.ERROR:
      return 'action'
    case fileStatus.DONE:
      return 'danger'
    default:
      return 'action'
  }
}

function getModalIconPalette(status: FileStatusKey) {
  switch (status) {
    case fileStatus.PROCESSING:
      return 'action'
    case fileStatus.ERROR:
      return 'danger'
    case fileStatus.DONE:
      return 'success'
    default:
      return 'action'
  }
}
