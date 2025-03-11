import { cx } from 'styled-system/css'
import { modal } from 'styled-system/recipes'
import { type HTMLAttributes, type Ref } from 'react'

/**
 * This module contains the Modal root component for a customizable modal.
 * @module
 */

// Modal

export type ModalProps = HTMLAttributes<HTMLDialogElement> & {
  ref?: Ref<HTMLDialogElement>
}

/**
 * @deprecated use `Dialog` instead
 */
export function Modal(props: ModalProps) {
  return <dialog {...props} className={cx(props.className, modal().dialog)} />
}
