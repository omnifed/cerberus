import { cx } from '@cerberus/styled-system/css'
import { modal } from '@cerberus/styled-system/recipes'
import { forwardRef, type ForwardedRef, type HTMLAttributes } from 'react'

/**
 * This module contains the Modal root component for a customizable modal.
 * @module
 */

// Modal

export type ModalProps = HTMLAttributes<HTMLDialogElement>

function ModalEl(props: ModalProps, ref: ForwardedRef<HTMLDialogElement>) {
  return (
    <dialog
      {...props}
      className={cx(props.className, modal().dialog)}
      ref={ref}
    />
  )
}

/**
 * @deprecated use `Dialog` instead
 */
export const Modal = forwardRef(ModalEl)
