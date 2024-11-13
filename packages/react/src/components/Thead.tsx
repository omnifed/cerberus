import { cx } from '@cerberus/styled-system/css'
import { thead } from '@cerberus/styled-system/recipes'

/**
 * This module contains the Thead component.
 * @module
 */

export type TheadProps = JSX.IntrinsicElements['thead']

/**
 * The Thead component is used to render a table header.
 * @see https://cerberus.digitalu.design/react/table
 * @memberof module:Table
 * @example
 * ```tsx
 * <Thead>
 *  {children}
 * </Thead>
 * ```
 */
export function Thead(props: TheadProps) {
  return <thead {...props} className={cx(props.className, thead())} />
}
