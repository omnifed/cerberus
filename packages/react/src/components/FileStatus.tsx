'use client'

import {
  useCallback,
  useMemo,
  type HTMLAttributes,
  type MouseEvent,
} from 'react'
import {
  fileStatus,
  type FileStatusVariantProps,
} from '@cerberus/styled-system/recipes'
import { css, cx } from '@cerberus/styled-system/css'
import { hstack, vstack } from '@cerberus/styled-system/patterns'
import { $cerberusIcons } from '../config/defineIcons'
import { Field } from '../context/field'
import { FieldMessage } from './FieldMessage'
import { ProgressBar, type ProgressBarProps } from './ProgressBar'
import { IconButton } from './IconButton'
import { Avatar } from './Avatar'

/**
 * This module contains the FileStatus component.
 * @module
 */

/**
 * The available values of the fileStatus helper Object.
 * @example
 * ```tsx
 * import { fileStatus } from '@cerberus/react'
 * processStatus.TODO // 'todo'
 * ```
 */
export type FileStatusKey = (typeof processStatus)[keyof typeof processStatus]

/**
 * The actions that can be performed on a file.
 */
export type FileStatusActions = 'cancel' | 'retry' | 'delete'
export interface FileBaseStatusProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'onClick'> {
  /**
   * A unique identifier for the file status. Required for accessibility.
   */
  id: string
  /**
   * The name of the file.
   */
  file: string
  /**
   * The percentage of the file that has been processed.
   */
  now: ProgressBarProps['now']
  /**
   * The status of the file.
   */
  status: processStatus
  /**
   * The action to perform on the file when a user clicks the
   * button located at the end of the status card.
   * @param status - The status of the file.
   * @param e - The event object.
   * @example
   * ```tsx
   * <FileStatus file="file.txt" now={0} status={processStatus.TODO} action={(status, e) => console.log(status, e)} />
   * ```
   * @default () => {}
   */
  onClick: (status: FileStatusActions, e: MouseEvent<HTMLButtonElement>) => void
}
export type FileStatusProps = FileBaseStatusProps & FileStatusVariantProps

/**
 * A helper object to represent the status of a file.
 * @example
 * ```tsx
 * import { fileStatus } from '@cerberus/react'
 * processStatus.TODO // 'todo'
 * ```
 */
export const enum processStatus {
  TODO = 'todo',
  PROCESSING = 'processing',
  DONE = 'done',
  ERROR = 'error',
}

/**
 * A component that displays the status of a file during file processing.
 * @see https://cerberus.digitalu.design/react/file-uploader
 * @example
 * ```tsx
 * <FileStatus file="file.txt" now={0} status={processStatus.TODO} action={(status, e) => console.log(status, e)} />
 * ```
 */
export function FileStatus(props: FileStatusProps) {
  const { file, now, status, onClick, ...nativeProps } = props
  const actionLabel = useMemo(() => getStatusActionLabel(status), [status])
  const palette = useMemo(() => getPalette(status), [status])
  const modalIconPalette = useMemo(() => getModalIconPalette(status), [status])
  const styles = useMemo(() => {
    switch (status) {
      case processStatus.TODO:
        return fileStatus({ status: 'todo' })
      case processStatus.PROCESSING:
        return fileStatus({ status: 'processing' })
      case processStatus.DONE:
        return fileStatus({ status: 'done' })
      case processStatus.ERROR:
        return fileStatus({ status: 'error' })
      default:
        return fileStatus()
    }
  }, [status])

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
      <Avatar
        ariaLabel=""
        gradient={modalIconPalette}
        icon={<MatchFileStatusIcon size={24} status={status} />}
        src=""
      />

      <div
        className={vstack({
          alignItems: 'flex-start',
          gap: '0.12rem',
          w: 'full',
        })}
      >
        <small
          className={css({
            color: 'page.text.initial',
            textStyle: 'label-sm',
          })}
        >
          {file}
        </small>
        <ProgressBar
          id={props.id}
          label="File upload status"
          now={now}
          size="sm"
        />
        <Field invalid={modalIconPalette === 'hades-dark'}>
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
  size?: 16 | 20 | 24 | 32
  now?: number
}

function MatchFileStatusIcon(props: FileStatusElProps) {
  const {
    fileUploader: FileUploaderIcon,
    invalidAlt: InvalidIcon,
    successNotification: DoneIcon,
  } = $cerberusIcons

  switch (props.status) {
    case processStatus.TODO:
    case processStatus.PROCESSING:
      return <FileUploaderIcon size={props.size} />
    case processStatus.DONE:
      return <DoneIcon size={props.size} />
    case processStatus.ERROR:
      return <InvalidIcon size={props.size} />
    default:
      throw new Error('Unknown status')
  }
}

function MatchFileStatusText(props: FileStatusElProps) {
  switch (props.status) {
    case processStatus.TODO:
      return 'Waiting to upload'
    case processStatus.PROCESSING:
      return `${props.now}% Complete`
    case processStatus.DONE:
      return 'File uploaded successfully'
    case processStatus.ERROR:
      return 'There was an error uploading the file'
    default:
      throw new Error('Invalid status')
  }
}

function MatchStatusAction(props: FileStatusElProps) {
  const { close: CloseIcon, redo: RedoIcon, delete: TrashIcon } = $cerberusIcons
  switch (props.status) {
    case processStatus.TODO:
    case processStatus.PROCESSING:
      return <CloseIcon />
    case processStatus.ERROR:
      return <RedoIcon />
    case processStatus.DONE:
      return <TrashIcon />
    default:
      throw new Error('Invalid status')
  }
}

function getStatusActionLabel(status: FileStatusKey) {
  switch (status) {
    case processStatus.TODO:
    case processStatus.PROCESSING:
      return 'Cancel'
    case processStatus.ERROR:
      return 'Retry'
    case processStatus.DONE:
      return 'Delete'
    default:
      return ''
  }
}

function getPalette(status: FileStatusKey) {
  switch (status) {
    case processStatus.TODO:
    case processStatus.PROCESSING:
      return 'danger'
    case processStatus.ERROR:
      return 'action'
    case processStatus.DONE:
      return 'danger'
    default:
      return 'action'
  }
}

function getModalIconPalette(status: FileStatusKey) {
  switch (status) {
    case processStatus.TODO:
    case processStatus.PROCESSING:
      return 'charon-light'
    case processStatus.ERROR:
      return 'hades-dark'
    case processStatus.DONE:
      return 'thanatos-light'
    default:
      return 'charon-light'
  }
}
