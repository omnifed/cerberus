'use client'

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useReducer,
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
import { Button } from '../components/button/Button'
import { cx } from '@cerberus/styled-system/css'
import {
  addNotification,
  clearNotificationState,
  notificationCenterReducer,
  removeNotification,
  updateNotificationState,
} from './notification-center/store'

/**
 * This module provides a context and hook for notifications.
 * @module
 */

export interface NotifyOptions {
  /**
   * The palette of the notification.
   * @default 'info'
   */
  palette: 'info' | 'success' | 'warning' | 'danger'
  /**
   * The heading of the notification.
   */
  heading: string
  /**
   * The unique id of the notification.
   */
  id?: string
  /**
   * The description of the notification.
   */
  description?: ReactNode
  /**
   * The action to take when the notification is closed
   */
  onClose?: () => void
}

export interface NotificationsValue {
  notify: (options: NotifyOptions) => void
}

const NotificationsContext = createContext<NotificationsValue | null>(null)

export type NotificationsProviderProps = PortalProps & {
  /**
   * The duration in milliseconds to show the notification.
   * @default 6000
   */
  duration?: number
}

/**
 * Provides a notification center to the app.
 * @see https://cerberus.digitalu.design/react/notification
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
  const [state, dispatch] = useReducer(notificationCenterReducer, [])
  const styles = notification()

  const timeout = useMemo<number>(
    () => props.duration || 6000,
    [props.duration],
  )

  const closeNotification = useCallback(
    (id: string) => {
      updateNotificationState(dispatch, {
        id,
        state: 'closed',
      })
      window.setTimeout(() => {
        removeNotification(dispatch, id)
      }, 150)
    },
    [dispatch],
  )

  const handleNotify = useCallback(
    (options: NotifyOptions) => {
      const id = `${options.palette}:${state.length + 1}`
      addNotification(dispatch, {
        ...options,
        id,
        state: 'open',
      })

      window.setTimeout(() => {
        closeNotification(id)
      }, timeout)
    },
    [dispatch, state, timeout, closeNotification],
  )

  const handleClose = useCallback(
    (e: MouseEvent<HTMLButtonElement>) => {
      const target = e.currentTarget as HTMLButtonElement
      closeNotification(target.value)
    },
    [closeNotification],
  )

  const handleCloseAll = useCallback(() => {
    state.forEach((item) => {
      if (item.onClose) item.onClose()
    })
    // we don't want to animate out for this one
    clearNotificationState(dispatch)
  }, [state, dispatch])

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

      <Show when={state.length > 0}>
        <Portal container={props.container}>
          <div className={styles.center}>
            <Show when={state.length >= 4}>
              <Button
                className={cx(styles.closeAll, animateIn())}
                onClick={handleCloseAll}
                palette="action"
                shape="rounded"
                size="sm"
                usage="ghost"
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
              {state.map((option) => (
                <MatchNotification
                  key={option.id}
                  {...option}
                  onClose={handleClose}
                  open={option.state}
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
  open: 'open' | 'closed'
  onClose: (e: MouseEvent<HTMLButtonElement>) => void
  key: string | undefined
}

function MatchNotification(props: MatchNotificationProps) {
  const { palette, id, onClose, heading, description, open } = props
  const sharedProps = useMemo(
    () => ({
      id: id!,
      open: true,
      onClose,
      'data-state': open,
    }),
    [id, open, onClose],
  )

  switch (palette) {
    case 'success':
      return (
        <Notification {...sharedProps} palette="success">
          <NotificationHeading palette="success">{heading}</NotificationHeading>
          <NotificationDescription palette="success">
            {description}
          </NotificationDescription>
        </Notification>
      )

    case 'warning':
      return (
        <Notification {...sharedProps} palette="warning">
          <NotificationHeading palette="warning">{heading}</NotificationHeading>
          <NotificationDescription palette="warning">
            {description}
          </NotificationDescription>
        </Notification>
      )

    case 'danger':
      return (
        <Notification {...sharedProps} palette="danger">
          <NotificationHeading palette="danger">{heading}</NotificationHeading>
          <NotificationDescription palette="danger">
            {description}
          </NotificationDescription>
        </Notification>
      )

    case 'info':
    default:
      return (
        <Notification {...sharedProps} palette="info">
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
