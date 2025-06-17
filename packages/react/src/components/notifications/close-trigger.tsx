'use client'

import { useCerberusContext } from '../../context/cerberus'
import { NotificationParts } from './parts'
import type { NotificationCloseTriggerProps } from './primitives'

/**
 * This private module contains a abstraction of the close trigger primitive.
 * @module 'notification/close-trigger'
 */

export function ToastCloseTrigger(props: NotificationCloseTriggerProps) {
  const { icons } = useCerberusContext()
  const { close: CloseIcon } = icons

  return (
    <NotificationParts.CloseTrigger {...props}>
      <CloseIcon />
    </NotificationParts.CloseTrigger>
  )
}
