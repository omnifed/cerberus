import { cx } from '@cerberus-design/styled-system/css'
import { hstack, vstack } from '@cerberus-design/styled-system/patterns'
import {
  notification,
  type NotificationVariantProps,
} from '@cerberus-design/styled-system/recipes'
import {
  forwardRef,
  type DialogHTMLAttributes,
  type ForwardedRef,
  type PropsWithChildren,
} from 'react'
import { IconButton } from './IconButton'
import { Close } from '@cerberus/icons'
import { $cerberusIcons } from '../config/defineIcons'
import type { IconType } from '../config/cerbIcons'

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
  extends DialogHTMLAttributes<HTMLDialogElement> {
  id: string
  onClose?: () => void
}
export type NotificationProps = NotificationBaseProps & NotificationVariantProps

function NotificationEl(
  props: PropsWithChildren<NotificationProps>,
  ref: ForwardedRef<HTMLDialogElement>,
) {
  const { children, palette, onClose, ...nativeProps } = props
  const styles = notification({ palette })
  return (
    <dialog
      {...nativeProps}
      className={cx(
        nativeProps.className,
        hstack({
          position: 'relative',
          gap: '4',
          top: 'initial',
        }),
        styles.dialog,
      )}
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

      <div>
        <IconButton ariaLabel="Close" onClick={onClose}>
          <Close />
        </IconButton>
      </div>
    </dialog>
  )
}

/**
 * The info notification component.
 * @param props - The component props.
 * @returns The info notification component.
 */
export const Notification = forwardRef(NotificationEl)
