import { cx } from 'styled-system/css'
import {
  notification,
  type NotificationVariantProps,
} from 'styled-system/recipes'
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
 * @deprecated use `NotificationParts` instead
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
