'use client'

import { Toaster, type CreateToasterReturn } from '@ark-ui/react/toast'
import { useMemo } from 'react'
import { Box } from 'styled-system/jsx'
import { Button, type ButtonProps } from '../button/button'
import { Show } from '../show/index'
import { ToastCloseTrigger } from './close-trigger'
import { MatchNotificationIcon } from './match-icon'
import { NotificationParts } from './parts'
import { toaster } from './toaster'
import type { NotifyOptions } from './types'

/**
 * This module contains an abstraction of the Notification parts.
 * @module 'notification/center'
 */

export interface NotificationCenterProps {
  toaster?: CreateToasterReturn
}

/**
 * The NotificationCenter component is an abstraction for the Notification
 * component. It manages displaying all the toasts in the center.
 */
export function NotificationCenter(props: NotificationCenterProps) {
  const cachedToaster = useMemo(() => props.toaster || toaster, [props.toaster])
  const typeToPalette = useMemo<Record<string, ButtonProps['palette']>>(
    () => ({
      info: 'info',
      success: 'success',
      warning: 'warning',
      error: 'danger',
    }),
    [],
  )

  return (
    <Toaster toaster={cachedToaster}>
      {(toast) => (
        <NotificationParts.Root
          key={toast.id}
          data-emphasis={(toast as NotifyOptions).usage ?? 'high'}
        >
          <MatchNotificationIcon {...toast} />

          <Box flex="1" paddingBlock="sm">
            <NotificationParts.Heading>{toast.title}</NotificationParts.Heading>
            <NotificationParts.Description>
              {toast.description}
            </NotificationParts.Description>
            <Show when={toast.action}>
              <NotificationParts.ActionTrigger asChild>
                <Button
                  palette={typeToPalette[String(toast.type)]}
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
