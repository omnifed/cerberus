'use client'

import type { PropsWithChildren } from 'react'
import { createPortal } from 'react-dom'

/**
 * This module is the Portal component.
 * @module
 */

export interface PortalProps {
  /**
   * The root container to render the children into.
   * @default document.body
   */
  container?: Element | DocumentFragment
  /**
   * An optional key to use for the Portal component.
   */
  key?: null | string
}

/**
 * The Portal component is used to render children into a DOM node that exists outside the DOM hierarchy of the parent component.
 * @see https://cerberus.digitalu.design/react/portal
 * @definition [React Portal Docs](https://react.dev/reference/react-dom/createPortal)
 */
export function Portal(props: PropsWithChildren<PortalProps>) {
  const container = props.container || document.body
  return createPortal(props.children, container, props.key)
}
