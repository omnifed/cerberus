'use client'

import {
  createToaster,
  Toaster,
  type CreateToasterReturn,
} from '@ark-ui/react/toast'
import { Box } from 'styled-system/jsx'
import { Button, type ButtonProps } from '../button/button'
import { Show } from '../show/index'
import { NotificationParts } from './parts'
import type {
  NotifyOptions,
  NotifyOptionsType,
  UseNotificationCenterReturn,
} from './types'
import { MatchNotificationIcon } from './match-icon'
import { ToastCloseTrigger } from './close-trigger'

/**
 * This module contains an abstraction of the Notification parts.
 * @module 'notification/center'
 */

export const toaster: CreateToasterReturn = createToaster({
  gap: 16,
  overlap: true,
  placement: 'top-end',
})

export function getEmphasis(type: NotifyOptionsType) {
  return type.includes('subtle') ? 'low' : 'high'
}

/**
 * The NotificationCenter component is an abstraction for the Notification
 * component. It manages displaying all the toasts in the center.
 */
export function NotificationCenter() {
  return (
    <Toaster toaster={toaster}>
      {(toast) => (
        <NotificationParts.Root
          key={toast.id}
          data-emphasis={getEmphasis(
            (toast.type ?? 'info') as NotifyOptionsType,
          )}
        >
          <MatchNotificationIcon
            type={toast.type as NotifyOptions['palette']}
          />

          <Box flex="1" paddingBlock="sm">
            <NotificationParts.Heading>{toast.title}</NotificationParts.Heading>
            <NotificationParts.Description>
              {toast.description}
            </NotificationParts.Description>
            <Show when={toast.action}>
              <NotificationParts.ActionTrigger asChild>
                <Button
                  palette={toast.type as ButtonProps['palette']}
                  usage="ghost"
                  size="sm"
                >
                  {toast.action?.label}
                </Button>
              </NotificationParts.ActionTrigger>
            </Show>
          </Box>

          <ToastCloseTrigger />
        </NotificationParts.Root>
      )}
    </Toaster>
  )
}

/**
 * @deprecated use `toaster` instead
 */
export function useNotificationCenter(): UseNotificationCenterReturn {
  function notify(options: NotifyOptions) {
    toaster.create({
      title: options.heading,
      description: options.description,
      type: options.palette,
      action: options.action,
    })
  }
  return { ...toaster, notify }
}
