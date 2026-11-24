'use client'

import { useCallback, type MouseEvent } from 'react'
import { useCerberusContext } from '../../context/cerberus'
import { extractParts } from '../../internal/extract-parts'
import { Avatar } from '../avatar/api'
import { FileStatusAction } from './action'
import {
  FileStatusIcon,
  FileStatusInfo,
  FileStatusName,
  FileStatusRoot,
  FileStatusStatusText,
  type FileStatusRootProps,
} from './primitives'
import { FileStatusProgress } from './progress'
import {
  getStatusAction,
  getStatusGradient,
  getStatusText,
  processStatus,
  type FileStatusActions,
  type FileStatusKey,
} from './status'

/**
 * This module contains the FileStatus abstraction.
 * @module
 */

const PARTS = {
  icon: FileStatusIcon,
  info: FileStatusInfo,
  name: FileStatusName,
  progress: FileStatusProgress,
  statusText: FileStatusStatusText,
  action: FileStatusAction,
}

export interface FileBaseStatusProps extends Omit<
  FileStatusRootProps,
  'onClick'
> {
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
  now: number
  /**
   * The status of the file.
   */
  status: processStatus | FileStatusKey
  /**
   * Called when a user clicks the action button at the end of the card, with
   * the action for the current status: `cancel`, `retry` or `delete`.
   */
  onClick: (status: FileStatusActions, e: MouseEvent<HTMLButtonElement>) => void
}
export type FileStatusProps = FileBaseStatusProps

/**
 * A card that shows the status of a file during processing: the status icon,
 * the file name, its progress and status text, and an action button (cancel,
 * retry or delete). Direct `FileStatus.Icon`, `.Info`, `.Name`, `.Progress`,
 * `.StatusText` and `.Action` children override that part: a self-closing one
 * patches its props, one with children replaces its default content. Other
 * children render at the end of the info column.
 * @description [Cerberus Docs](https://cerberus.digitalu.design/docs/components/file-uploader#filestatus)
 * @example
 * ```tsx
 * <FileStatus
 *   id="report"
 *   file="report.pdf"
 *   now={40}
 *   status={processStatus.PROCESSING}
 *   onClick={(action) => console.log(action)}
 * />
 * ```
 */
export function FileStatusEl(props: FileStatusProps) {
  const { id, file, now, status, onClick, children, ...rootProps } = props
  const { icons } = useCerberusContext()
  const {
    waitingFileUploader: TodoIcon,
    fileUploader: ProcessingIcon,
    invalidAlt: ErrorIcon,
    successNotification: DoneIcon,
  } = icons

  const { parts, content } = extractParts(children, PARTS)

  const { children: iconChildren, ...iconOverrideProps } = parts.icon ?? {}
  const { children: infoChildren, ...infoOverrideProps } = parts.info ?? {}
  const { children: nameChildren, ...nameOverrideProps } = parts.name ?? {}
  const { children: statusTextChildren, ...statusTextOverrideProps } =
    parts.statusText ?? {}

  const handleClick = useCallback(
    (e: MouseEvent<HTMLButtonElement>) => onClick(getStatusAction(status), e),
    [onClick, status],
  )

  const StatusIcon =
    status === processStatus.PROCESSING
      ? ProcessingIcon
      : status === processStatus.DONE
        ? DoneIcon
        : status === processStatus.ERROR
          ? ErrorIcon
          : TodoIcon

  return (
    <FileStatusRoot data-status={status} {...rootProps} id={id}>
      <FileStatusIcon {...iconOverrideProps}>
        {iconChildren ?? (
          <Avatar
            gradient={getStatusGradient(status)}
            fallback={<StatusIcon size={24} />}
          />
        )}
      </FileStatusIcon>

      <FileStatusInfo {...infoOverrideProps}>
        {infoChildren ?? (
          <>
            <FileStatusName {...nameOverrideProps}>
              {nameChildren ?? file}
            </FileStatusName>
            <FileStatusProgress
              id={`progress:${id}`}
              now={now}
              {...parts.progress}
            />
            <FileStatusStatusText
              id={`help:${file}`}
              {...statusTextOverrideProps}
            >
              {statusTextChildren ?? getStatusText(status, now)}
            </FileStatusStatusText>
            {content}
          </>
        )}
      </FileStatusInfo>

      <FileStatusAction
        status={status}
        onClick={handleClick}
        {...parts.action}
      />
    </FileStatusRoot>
  )
}
