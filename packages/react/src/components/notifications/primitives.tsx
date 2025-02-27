import {
  Toast,
  Toaster,
  type ToastActionTriggerProps,
  type ToastCloseTriggerProps,
  type ToastRootProps,
  type ToastTitleProps,
} from '@ark-ui/react/toast'
import { cx } from '@cerberus/styled-system/css'
import { toast } from '@cerberus/styled-system/recipes'

/**
 * This module contains the primitives of the Notification component.
 * @module 'notification/primitives'
 */

export const NotificationProvider = Toaster

/**
 * The context provider for the Notification component.
 */
export function NotificationRoot(props: ToastRootProps) {
  const styles = toast()
  return <Toast.Root {...props} className={cx(styles.root, props.className)} />
}

/**
 * The title heading of the Notification component.
 */
export function NotificationHeading(props: ToastTitleProps) {
  const styles = toast()
  return (
    <Toast.Title {...props} className={cx(styles.title, props.className)} />
  )
}

/**
 * The description of the Notification component.
 */
export function NotificationDescription(props: ToastTitleProps) {
  const styles = toast()
  return (
    <Toast.Description
      {...props}
      className={cx(styles.description, props.className)}
    />
  )
}

/**
 * The close button of the Notification component.
 */
export function NotificationCloseTrigger(props: ToastCloseTriggerProps) {
  const styles = toast()
  return (
    <Toast.CloseTrigger
      {...props}
      className={cx(styles.closeTrigger, props.className)}
    />
  )
}

/**
 * The action trigger of the Notification component.
 */
export function NotificationActionTrigger(props: ToastActionTriggerProps) {
  const styles = toast()
  return (
    <Toast.ActionTrigger
      {...props}
      className={cx(styles.actionTrigger, props.className)}
    />
  )
}
