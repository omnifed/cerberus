import {
  Toast,
  type ToastActionTriggerProps,
  type ToastCloseTriggerProps,
  type ToastRootProps,
  type ToastTitleProps,
} from '@ark-ui/react/toast'

/**
 * This module contains the primitives of the Notification component.
 * @module 'notification/primitives'
 */

/**
 * The context provider for the Notification component.
 */
export function NotificationRoot(props: ToastRootProps) {
  return <Toast.Root {...props} />
}

/**
 * The title heading of the Notification component.
 */
export function NotificationHeading(props: ToastTitleProps) {
  return <Toast.Title {...props} />
}

/**
 * The description of the Notification component.
 */
export function NotificationDescription(props: ToastTitleProps) {
  return <Toast.Description {...props} />
}

/**
 * The close button of the Notification component.
 */
export function NotificationCloseTrigger(props: ToastCloseTriggerProps) {
  return <Toast.CloseTrigger {...props} />
}

/**
 * The action trigger of the Notification component.
 */
export function NotificationActionTrigger(props: ToastActionTriggerProps) {
  return <Toast.ActionTrigger {...props} />
}
