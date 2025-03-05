import { Portal as ArkPortal, type PortalProps } from '@ark-ui/react'

/**
 * This module is the Portal component.
 * @module
 */

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
export function Portal(props: PortalProps) {
  return <ArkPortal {...props} />
}
