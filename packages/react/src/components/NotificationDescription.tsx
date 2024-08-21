/**
 * This module exports the NotificationDescription component.
 * @module
 */

import { cx } from '@cerberus-design/styled-system/css'
import {
  notification,
  type NotificationVariantProps,
} from '@cerberus-design/styled-system/recipes'
import type { HTMLAttributes } from 'react'

export interface BaseNotificationDescriptionProps
  extends HTMLAttributes<HTMLParagraphElement> {}
export type NotificationDescriptionProps = BaseNotificationDescriptionProps &
  NotificationVariantProps

/**
 * The NotificationDescription component is used to render the description of a notification.
 * @param props - The anything a HTMLParagraphElement can accept.
 */
export function NotificationDescription(props: NotificationDescriptionProps) {
  const { palette, ...nativeProps } = props
  const styles = notification({ palette })
  return (
    <p
      className={cx(nativeProps.className, styles.description)}
      {...nativeProps}
    />
  )
}
