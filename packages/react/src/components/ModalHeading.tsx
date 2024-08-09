import { cx } from '@cerberus-design/styled-system/css'
import { modal } from '@cerberus-design/styled-system/recipes'
import type { HTMLAttributes } from 'react'

/**
 * This module contains the ModalHeading component for a customizable modal.
 * @module
 */

export type ModalHeadingProps = HTMLAttributes<HTMLParagraphElement>

/**
 * The ModalHeading component is a heading element for a customizable modal.
 * @example
 * ```tsx
 * <Modal>
 *   <ModalHeading>Modal Heading</ModalHeading>
 * </Modal>
 * ```
 */
export function ModalHeading(props: ModalHeadingProps) {
  return <p {...props} className={cx(props.className, modal().heading)} />
}
