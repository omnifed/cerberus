'use client'

import { cx } from '@cerberus/styled-system/css'
import { hstack, vstack } from '@cerberus/styled-system/patterns'
import {
  notification,
  type NotificationVariantProps,
} from '@cerberus/styled-system/recipes'
import {
  useRef,
  type DialogHTMLAttributes,
  type PropsWithChildren,
  type MouseEvent,
} from 'react'
import { trapFocus } from '../aria-helpers/trap-focus.aria'
import { useCerberusContext } from '../context/cerberus'

/**
 * This module exports the Notification component.
 * @module
 */

function MatchNotificationIcon(props: NotificationVariantProps) {
  const { icons } = useCerberusContext()
  const palette = (props.palette || 'info') as
    | 'info'
    | 'success'
    | 'warning'
    | 'danger'
  const key = `${palette}Notification` as keyof typeof icons
  const Icon = icons[key]
  return <Icon />
}

export interface NotificationBaseProps
  extends Omit<DialogHTMLAttributes<HTMLDialogElement>, 'onClose'> {
  /**
   * The unique id of the notification. Required for the onClose callback.
   */
  id: string
  /**
   * Called when the close button is clicked.
   */
  onClose?: (e: MouseEvent<HTMLButtonElement>) => void
}
export type NotificationProps = NotificationBaseProps & NotificationVariantProps

/**
 * A static Notification component that displays a message to the user. This
 * is typically only used when not utilizing the NotificationCenter.
 * @see https://cerberus.digitalu.design/react/notification
 * @memberof module:NotificationCenter
 * @example
 * ```tsx
 * <Notification id="info:1" open>
 *  <NotificationHeading>Info Notification</NotificationHeading>
 *  <NotificationDescription>
 *   This is a description with a <a href="#">link</a> in the message.
 *  </NotificationDescription>
 * </Notification>
 * ```
 */
export function Notification(props: PropsWithChildren<NotificationProps>) {
  const { children, palette, onClose, ...nativeProps } = props
  const ref = useRef<HTMLDialogElement>(null)

  const onKeyDown = trapFocus(ref)
  const styles = notification({ palette })

  const { icons } = useCerberusContext()
  const { close: CloseIcon } = icons

  return (
    <dialog
      {...nativeProps}
      data-placement="left"
      className={cx(
        nativeProps.className,
        hstack({
          position: 'relative',
          gap: '4',
        }),
        styles.dialog,
      )}
      onKeyDown={onKeyDown}
      ref={ref}
    >
      <span className={styles.icon}>
        <MatchNotificationIcon palette={palette} />
      </span>

      <div
        className={vstack({
          alignItems: 'flex-start',
          gap: '0',
          py: '2',
        })}
      >
        {children}
      </div>

      <button
        aria-label="Close"
        className={styles.close}
        onClick={onClose}
        value={props.id}
      >
        <CloseIcon />
      </button>
    </dialog>
  )
}
