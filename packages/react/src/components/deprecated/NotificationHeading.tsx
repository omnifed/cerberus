import { cx } from '@cerberus/styled-system/css'
import {
  notification,
  type NotificationVariantProps,
} from '@cerberus/styled-system/recipes'
import type { HTMLAttributes } from 'react'

/**
 * This module exports the NotificationHeading component.
 * @module
 */

export type BaseNotificationHeadingProps = HTMLAttributes<HTMLParagraphElement>
export type NotificationHeadingProps = BaseNotificationHeadingProps &
  NotificationVariantProps

/**
 * @deprecated use `NotificationParts` instead
 */
export function NotificationHeading(props: NotificationHeadingProps) {
  const { palette, ...nativeProps } = props
  const styles = notification({ palette })
  return (
    <p className={cx(nativeProps.className, styles.heading)} {...nativeProps} />
  )
}
