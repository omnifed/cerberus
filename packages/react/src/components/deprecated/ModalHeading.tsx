import { cx } from 'styled-system/css'
import { modal } from 'styled-system/recipes'
import type { HTMLAttributes } from 'react'

/**
 * This module contains the ModalHeading component for a customizable modal.
 * @module
 */

export type ModalHeadingProps = HTMLAttributes<HTMLParagraphElement>

/**
 * @deprecated use `DialogHeading` instead
 */
export function ModalHeading(props: ModalHeadingProps) {
  return <p {...props} className={cx(props.className, modal().heading)} />
}
