import { cx } from '@cerberus-design/styled-system/css'
import { modal } from '@cerberus-design/styled-system/recipes'
import type { HTMLAttributes } from 'react'

/**
 * This module contains the ModalDescription component for a customizable modal.
 * @module
 */

export type ModalDescriptionProps = HTMLAttributes<HTMLParagraphElement>

/**
 * The ModalDescription component is a heading element for a customizable modal.
 * @example
 * ```tsx
 * <Modal>
 *   <ModalDescription>Modal Heading</ModalDescription>
 * </Modal>
 * ```
 */
export function ModalDescription(props: ModalDescriptionProps) {
  return <p {...props} className={cx(props.className, modal().description)} />
}
