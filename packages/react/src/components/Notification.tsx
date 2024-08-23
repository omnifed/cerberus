'use client'

import { cx } from '@cerberus-design/styled-system/css'
import { hstack, vstack } from '@cerberus-design/styled-system/patterns'
import {
  notification,
  type NotificationVariantProps,
} from '@cerberus-design/styled-system/recipes'
import {
  useRef,
  type DialogHTMLAttributes,
  type PropsWithChildren,
  type MouseEvent,
} from 'react'
import { Close } from '@cerberus/icons'
import { $cerberusIcons } from '../config/defineIcons'
import type { IconType } from '../config/cerbIcons'
import { trapFocus } from '../aria-helpers/trap-focus.aria'

/**
 * This module exports the Notification component.
 * @module
 */

function MatchNotificationIcon(props: NotificationVariantProps) {
  const palette = props.palette || 'info'
  const key = `${palette}Notification` as keyof typeof $cerberusIcons
  const Icon = $cerberusIcons[key] as IconType
  return <Icon />
}

export interface NotificationBaseProps
  extends Omit<DialogHTMLAttributes<HTMLDialogElement>, 'onClose'> {
  id: string
  onClose?: (e: MouseEvent<HTMLButtonElement>) => void
}
export type NotificationProps = NotificationBaseProps & NotificationVariantProps

/**
 * The info notification component.
 * @param props - The component props.
 * @returns The info notification component.
 * @example
 * ```tsx
 * <Notification id="info:1" open>
 *  <NotificationHeading>Info Notification</NotificationHeading>
 * <NotificationDescription>
 *  This is a description with a <a href="#">link</a> in the message.
 * </NotificationDescription>
 * </Notification>
 * ```
 */
export function Notification(props: PropsWithChildren<NotificationProps>) {
  const { children, palette, onClose, ...nativeProps } = props
  const ref = useRef<HTMLDialogElement>(null)
  const onKeyDown = trapFocus(ref)
  const styles = notification({ palette })

  return (
    <dialog
      {...nativeProps}
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
      role="alert"
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
        <Close />
      </button>
    </dialog>
  )
}
