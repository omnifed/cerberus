'use client'

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type MouseEvent,
  type PropsWithChildren,
  type ReactNode,
} from 'react'
import { Show } from '../components/Show'
import { NotificationHeading } from '../components/NotificationHeading'
import { NotificationDescription } from '../components/NotificationDescription'
import { Notification } from '../components/Notification'
import { animateIn, vstack } from '@cerberus/styled-system/patterns'
import { Portal, type PortalProps } from '../components/Portal'
import { notification } from '@cerberus/styled-system/recipes'
import { Button } from '../components/Button'
import { cx } from '@cerberus/styled-system/css'

/**
 * This module provides a context and hook for notifications.
 * @module
 */

export interface NotifyOptions {
  palette: 'info' | 'success' | 'warning' | 'danger'
  heading: string
  id?: string
  description?: ReactNode
  onClose?: () => void
}

export interface NotificationsValue {
  notify: (options: NotifyOptions) => void
}

const NotificationsContext = createContext<NotificationsValue | null>(null)

export interface NotificationsProviderProps extends PortalProps {}

/**
 * Provides a notification center to the app.
 * @example
 * ```tsx
 * // Wrap the Provider around the root of the feature.
 * <Notifications>
 *   <SomeFeatureSection />
 * </Notifications>
 *
 * // Use the hook to show a notification.
 * const notify = useNotifications()
 *
 * const handleClick = useCallback(() => {
 *  notify({
 *   palette: 'info',
 *   heading: 'New feature!',
 *   description: 'We have added a new feature to the app.',
 * })
 * }, [notify])
 * ```
 */
export function NotificationCenter(
  props: PropsWithChildren<NotificationsProviderProps>,
) {
  const [activeNotifications, setActiveNotifications] = useState<
    NotifyOptions[]
  >([])
  const styles = notification()

  const handleNotify = useCallback((options: NotifyOptions) => {
    setActiveNotifications((prev) => {
      const id = `${options.palette}:${prev.length + 1}`
      return [...prev, { ...options, id }]
    })
  }, [])

  const handleClose = useCallback((e: MouseEvent<HTMLButtonElement>) => {
    const target = e.currentTarget as HTMLButtonElement
    setActiveNotifications((prev) => {
      const item = prev.find((option) => option.id === target.value)
      if (item?.onClose) item.onClose()
      return prev.filter((option) => option.id !== target.value)
    })
  }, [])

  const handleCloseAll = useCallback(() => {
    setActiveNotifications((prev) => {
      prev.forEach((item) => {
        if (item.onClose) item.onClose()
      })
      return []
    })
  }, [])

  const value = useMemo(
    () => ({
      notify: handleNotify,
    }),
    [handleNotify],
  )

  // For some reason, the vstack pattern alignItems is not registering here.
  // So we are forcing it with the style prop.

  return (
    <NotificationsContext.Provider value={value}>
      {props.children}

      <Show when={activeNotifications.length > 0}>
        <Portal container={props.container}>
          <div className={styles.center}>
            <Show when={activeNotifications.length >= 4}>
              <Button
                className={cx(styles.closeAll, animateIn())}
                onClick={handleCloseAll}
                palette="action"
                shape="rounded"
                size="sm"
                usage="text"
              >
                Close all
              </Button>
            </Show>
            <div
              className={vstack({
                alignItems: 'flex-end',
                gap: '4',
              })}
              style={{
                alignItems: 'flex-end',
              }}
            >
              {activeNotifications.map((option) => (
                <MatchNotification
                  key={option.id}
                  {...option}
                  onClose={handleClose}
                />
              ))}
            </div>
          </div>
        </Portal>
      </Show>
    </NotificationsContext.Provider>
  )
}

interface MatchNotificationProps extends Omit<NotifyOptions, 'onClose'> {
  onClose: (e: MouseEvent<HTMLButtonElement>) => void
  key: string | undefined
}

function MatchNotification(props: MatchNotificationProps) {
  const { palette, id, onClose, heading, description } = props

  switch (palette) {
    case 'success':
      return (
        <Notification
          id={id!}
          key={id}
          onClose={onClose}
          open
          palette="success"
        >
          <NotificationHeading palette="success">{heading}</NotificationHeading>
          <NotificationDescription palette="success">
            {description}
          </NotificationDescription>
        </Notification>
      )

    case 'warning':
      return (
        <Notification
          id={id!}
          key={id}
          onClose={onClose}
          open
          palette="warning"
        >
          <NotificationHeading palette="warning">{heading}</NotificationHeading>
          <NotificationDescription palette="warning">
            {description}
          </NotificationDescription>
        </Notification>
      )

    case 'danger':
      return (
        <Notification id={id!} key={id} onClose={onClose} open palette="danger">
          <NotificationHeading palette="danger">{heading}</NotificationHeading>
          <NotificationDescription palette="danger">
            {description}
          </NotificationDescription>
        </Notification>
      )

    case 'info':
    default:
      return (
        <Notification id={id!} key={id} onClose={onClose} open palette="info">
          <NotificationHeading palette="info">{heading}</NotificationHeading>
          <NotificationDescription palette="info">
            {description}
          </NotificationDescription>
        </Notification>
      )
  }
}

/**
 * The hook to use the NotificationCenter.
 * @returns The notify method to trigger a notification.
 * @example
 * ```tsx
 * const {notify} = useNotificationCenter()
 * notify({
 *  palette: 'info',
 *  heading: 'New feature',
 *  description: 'We have added a new feature to the app.',
 * })
 * ```
 */
export function useNotificationCenter(): NotificationsValue {
  const context = useContext(NotificationsContext)
  if (!context) {
    throw new Error(
      'useNotificationCenter must be used within a NotificationsProvider',
    )
  }
  return context
}
