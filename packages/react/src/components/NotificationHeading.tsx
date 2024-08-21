/**
 * This module exports the NotificationHeading component.
 * @module
 */

import { cx } from '@cerberus-design/styled-system/css'
import {
  notification,
  type NotificationVariantProps,
} from '@cerberus-design/styled-system/recipes'
import type { HTMLAttributes } from 'react'

export interface BaseNotificationHeadingProps
  extends HTMLAttributes<HTMLParagraphElement> {}
export type NotificationHeadingProps = BaseNotificationHeadingProps &
  NotificationVariantProps

/**
 * The NotificationHeading component is used to render the heading of a notification.
 * @param props - The anything a HTMLParagraphElement can accept.
 */
export function NotificationHeading(props: NotificationHeadingProps) {
  const { palette, ...nativeProps } = props
  const styles = notification({ palette })
  return (
    <p className={cx(nativeProps.className, styles.heading)} {...nativeProps} />
  )
}
