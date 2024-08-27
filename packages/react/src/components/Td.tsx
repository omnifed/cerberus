import { cx } from '@cerberus/styled-system/css'
import { td } from '@cerberus/styled-system/recipes'
import type { TableHTMLAttributes } from 'react'

/**
 * Th component for the Td component
 * @module
 */

export type TdProps = TableHTMLAttributes<HTMLTableCellElement>

/**
 * Styles for the Th component
 * @definition [Table docs](https://cerberus.digitalu.design/react/table)
 * @example
 * ```tsx
 * <Td>Data cell</Td>
 * ```
 */
export function Td(props: TdProps) {
  return <td {...props} className={cx(props.className, td())} />
}
