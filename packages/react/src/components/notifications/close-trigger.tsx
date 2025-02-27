'use client'

import type { ToastCloseTriggerProps } from '@ark-ui/react/toast'
import { useCerberusContext } from '../../context/cerberus'
import { NotificationParts } from './parts'

/**
 * This private module contains a abstraction of the close trigger primitive.
 * @module 'notification/close-trigger'
 */

export function ToastCloseTrigger(props: ToastCloseTriggerProps) {
  const { icons } = useCerberusContext()
  const { close: CloseIcon } = icons

  return (
    <NotificationParts.CloseTrigger {...props}>
      <CloseIcon />
    </NotificationParts.CloseTrigger>
  )
}
