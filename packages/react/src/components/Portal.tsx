import type { PropsWithChildren } from 'react'
import { createPortal } from 'react-dom'

/**
 * This module is the Portal component.
 * @module
 */

export interface PortalProps {
  container?: Element | DocumentFragment
  key?: null | string
}

/**
 * The Portal component is used to render children into a DOM node that exists outside the DOM hierarchy of the parent component.
 * @param container - The props for the Portal component.
 * @returns ReactPortal
 */
export function Portal(props: PropsWithChildren<PortalProps>) {
  const container = props.container || document.body
  return createPortal(props.children, container, props.key)
}
