import type { ElementType } from 'react'
import {
  NotificationActionTrigger,
  NotificationCloseTrigger,
  NotificationDescription,
  NotificationHeading,
  NotificationRoot,
} from './primitives'

/**
 * This module contains the parts of the Notification parts.
 * @module 'notification/parts'
 */

interface NotificationPartsValue {
  /**
   * The context provider of the notification.
   */
  Root: ElementType
  /**
   * The title heading of the notification.
   */
  Heading: ElementType
  /**
   * The description of the notification.
   */
  Description: ElementType
  /**
   * The close button of the notification.
   */
  CloseTrigger: ElementType
  /**
   * The action trigger of the notification.
   */
  ActionTrigger: ElementType
}

/**
 * An Object containing the parts of the Notification components. For users that
 * prefer Object component syntax.
 *
 * @remarks
 *
 * When using object component syntax, you import the NotificationParts object and
 * the entire family of components vs. only what you use.
 */
export const NotificationParts: NotificationPartsValue = {
  Root: NotificationRoot,
  Heading: NotificationHeading,
  Description: NotificationDescription,
  CloseTrigger: NotificationCloseTrigger,
  ActionTrigger: NotificationActionTrigger,
}
