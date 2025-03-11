'use client'

import { cx } from 'styled-system/css'
import { hstack, vstack } from 'styled-system/patterns'
import {
  notification,
  type NotificationVariantProps,
} from 'styled-system/recipes'
import {
  useRef,
  type DialogHTMLAttributes,
  type PropsWithChildren,
  type MouseEvent,
} from 'react'
import { trapFocus } from '../../aria-helpers/trap-focus.aria'
import { useCerberusContext } from '../../context/cerberus'

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
 * @deprecated use `NotificationParts` instead
 */
export function Notification(props: PropsWithChildren<NotificationProps>) {
  const { children, palette, onClose, ...nativeProps } = props
  const ref = useRef<HTMLDialogElement | null>(null)

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
