import type { CreateToasterReturn } from '@ark-ui/react/toast'
import type { ReactNode } from 'react'

export type NotifyOptionsType =
  | 'info'
  | 'info-subtle'
  | 'success'
  | 'success-subtle'
  | 'warning'
  | 'warning-subtle'
  | 'error'
  | 'error-subtle'
  | 'loading'
  | 'loading-subtle'

export interface NotifyOptions {
  /**
   * The palette of the notification.
   * @default 'info'
   */
  palette?: NotifyOptionsType
  /**
   * The heading of the notification.
   */
  heading: string
  /**
   * The description of the notification.
   */
  description?: ReactNode
  /**
   * The action to take when the notification is closed
   */
  action?: {
    label: string
    onClick: () => void
  }
}

export type UseNotificationCenterReturn = CreateToasterReturn & {
  /**
   * @deprecated use `create` instead
   */
  notify: (options: NotifyOptions) => void
}
