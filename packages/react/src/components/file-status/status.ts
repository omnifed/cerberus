/**
 * This module contains the FileStatus status values and what each one shows.
 * @module
 */

/**
 * A helper object to represent the status of a file.
 * @example
 * ```tsx
 * import { processStatus } from '@cerberus/react'
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
 * The available values of the processStatus helper object.
 */
export type FileStatusKey = (typeof processStatus)[keyof typeof processStatus]

/**
 * The actions that can be performed on a file.
 */
export type FileStatusActions = 'cancel' | 'retry' | 'delete'

/** The action the status card's button performs for a status */
export function getStatusAction(status: FileStatusKey): FileStatusActions {
  switch (status) {
    case processStatus.ERROR:
      return 'retry'
    case processStatus.DONE:
      return 'delete'
    default:
      return 'cancel'
  }
}

/** The action button's accessible label: "Cancel", "Retry" or "Delete" */
export function getStatusActionLabel(status: FileStatusKey): string {
  const action = getStatusAction(status)
  return action.charAt(0).toUpperCase() + action.slice(1)
}

/** The action button's palette: retrying is safe, everything else destroys */
export function getStatusActionPalette(
  status: FileStatusKey,
): 'action' | 'danger' {
  return status === processStatus.ERROR ? 'action' : 'danger'
}

/** The gradient of the status icon's avatar */
export function getStatusGradient(
  status: FileStatusKey,
): 'charon-light' | 'hades-dark' | 'thanatos-dark' {
  switch (status) {
    case processStatus.ERROR:
      return 'hades-dark'
    case processStatus.DONE:
      return 'thanatos-dark'
    default:
      return 'charon-light'
  }
}

/** The default status text */
export function getStatusText(status: FileStatusKey, now?: number): string {
  switch (status) {
    case processStatus.TODO:
      return 'Waiting to upload'
    case processStatus.PROCESSING:
      return `${now ?? 0}% Complete`
    case processStatus.DONE:
      return 'File uploaded successfully'
    case processStatus.ERROR:
      return 'There was an error uploading the file'
    default:
      throw new Error('Invalid status')
  }
}
