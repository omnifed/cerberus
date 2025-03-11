import { cx } from 'styled-system/css'
import { vstack } from 'styled-system/patterns'
import type { HTMLAttributes } from 'react'

/**
 * This module contains the ModalHeader component for a customizable modal.
 * @module
 */

export type ModalHeaderProps = HTMLAttributes<HTMLDivElement>

/**
 * @deprecated there is no replacement for this component
 */
export function ModalHeader(props: ModalHeaderProps) {
  return (
    <div
      {...props}
      className={cx(
        props.className,
        vstack({
          alignItems: 'flex-start',
          gap: 'md',
          position: 'relative',
        }),
      )}
    />
  )
}
