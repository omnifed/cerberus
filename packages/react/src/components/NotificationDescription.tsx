import { cx } from '@cerberus/styled-system/css'
import {
  notification,
  type NotificationVariantProps,
} from '@cerberus/styled-system/recipes'
import type { HTMLAttributes } from 'react'

/**
 * This module exports the NotificationDescription component.
 * @module
 */

export type BaseNotificationDescriptionProps =
  HTMLAttributes<HTMLParagraphElement>
export type NotificationDescriptionProps = BaseNotificationDescriptionProps &
  NotificationVariantProps

/**
 * Used to render the description of a notification.
 * @see https://cerberus.digitalu.design/react/notification
 * @memberof module:NotificationCenter
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
