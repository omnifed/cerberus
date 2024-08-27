import { cx } from '@cerberus/styled-system/css'
import { th } from '@cerberus/styled-system/recipes'
import type { TableHTMLAttributes } from 'react'

/**
 * Th component for the Table component
 * @module
 */

export type ThProps = TableHTMLAttributes<HTMLTableCellElement>

/**
 * Styles for the Th component
 * @definition [Table docs](https://cerberus.digitalu.design/react/table)
 * @example
 * ```tsx
 * <Th>Header 1</Th>
 * ```
 */
export function Th(props: ThProps) {
  return <th {...props} className={cx(props.className, th())} />
}
