import type { CreateToasterReturn } from '@ark-ui/react/toast'
import type { ReactNode } from 'react'

export interface NotifyOptions {
  /**
   * The palette of the notification.
   * @default 'info'
   */
  palette?: 'info' | 'success' | 'warning' | 'error' | 'loading'
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
