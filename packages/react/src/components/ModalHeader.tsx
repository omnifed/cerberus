import { cx } from '@cerberus/styled-system/css'
import { vstack } from '@cerberus/styled-system/patterns'
import type { HTMLAttributes } from 'react'

/**
 * This module contains the ModalHeader component for a customizable modal.
 * @module
 */

export type ModalHeaderProps = HTMLAttributes<HTMLDivElement>

/**
 * The ModalHeader component is a header element for a customizable modal.
 * @example
 * ```tsx
 * <Modal>
 *   <ModalHeader>
 *     <h2>Modal Heading</h2>
 *   </ModalHeader>
 * </Modal>
 * ```
 */
export function ModalHeader(props: ModalHeaderProps) {
  return (
    <div
      {...props}
      className={cx(
        props.className,
        vstack({
          alignItems: 'flex-start',
          gap: '4',
          mb: '8',
        }),
      )}
    />
  )
}
