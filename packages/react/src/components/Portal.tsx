import { Portal as ArkPortal, type PortalProps } from '@ark-ui/react'
import type { PropsWithChildren } from 'react'

/**
 * This module is the Portal component.
 * @module
 */

export type { PortalProps }

/**
 * The Portal component is used to render children into a DOM node that exists outside the DOM hierarchy of the parent component.
 * @see https://cerberus.digitalu.design/react/portal
 * @definition [React Portal Docs](https://react.dev/reference/react-dom/createPortal)
 * @example
 * ```tsx
 * 'use client'
 *
 * import { Portal } from '@cerberus/react'
 *
 * function SomeFeatureWithinSSRPage() {
 *   return (
 *     <Portal>
 *       <div>Portal Content outside of the React VDom tree</div>
 *     </Portal>
 *   )
 * }
 */
export function Portal(props: PropsWithChildren<PortalProps>) {
  return <ArkPortal {...props} />
}
