import { createToaster, Toaster } from '@ark-ui/react/toast'
import { VStack } from '@cerberus/styled-system/jsx'
import type { PropsWithChildren } from 'react'
import { Button, type ButtonProps } from '../button/button'
import { Show } from '../Show'
import { NotificationParts } from './parts'
import type { NotifyOptions, UseNotificationCenterReturn } from './types'
import { MatchNotificationIcon } from './match-icon'

/**
 * This module contains an abstraction of the Notification parts.
 * @module 'notification/center'
 */

const toaster = createToaster({
  placement: 'top-end',
  overlap: false,
  gap: 16,
})

/**
 * The NotificationCenter component is an abstraction for the Notification
 * component. It manages displaying all the toasts in the center.
 */
export function NotificationCenter(props: PropsWithChildren) {
  return (
    <>
      {props.children}

      <Toaster toaster={toaster}>
        {(toast) => (
          <NotificationParts.Root key={toast.id}>
            <MatchNotificationIcon
              palette={toast.type as NotifyOptions['palette']}
            />

            <VStack alignItems="flex-start" gap="0" paddingBlock="sm">
              <NotificationParts.Heading>
                {toast.title}
              </NotificationParts.Heading>
              <NotificationParts.Description>
                {toast.description}
              </NotificationParts.Description>
              <Show when={Boolean(toast.action)}>
                <NotificationParts.ActionTrigger asChild>
                  <Button
                    palette={toast.type as ButtonProps['palette']}
                    size="sm"
                  >
                    {toast.action?.label}
                  </Button>
                </NotificationParts.ActionTrigger>
              </Show>
            </VStack>
          </NotificationParts.Root>
        )}
      </Toaster>
    </>
  )
}

/**
 * The hook to use the NotificationCenter.
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
