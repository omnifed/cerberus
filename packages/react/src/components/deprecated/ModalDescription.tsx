import { cx } from 'styled-system/css'
import { modal } from 'styled-system/recipes'
import type { HTMLAttributes } from 'react'

/**
 * This module contains the ModalDescription component for a customizable modal.
 * @module
 */

export type ModalDescriptionProps = HTMLAttributes<HTMLParagraphElement>

/**
 * @deprecated use `DialogDescription` instead
 */
export function ModalDescription(props: ModalDescriptionProps) {
  return <p {...props} className={cx(props.className, modal().description)} />
}
