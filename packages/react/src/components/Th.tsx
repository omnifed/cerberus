import { cx } from '@cerberus/styled-system/css'
import { th, type ThVariantProps } from '@cerberus/styled-system/recipes'
import type { TableHTMLAttributes } from 'react'

/**
 * Th component for the Table component
 * @module
 */

export type ThBaseProps = TableHTMLAttributes<HTMLTableCellElement>
export type ThProps = ThBaseProps & ThVariantProps

/**
 * Styles for the Th component
 * @definition [Table docs](https://cerberus.digitalu.design/react/table)
 * @example
 * ```tsx
 * <Th>Header 1</Th>
 * ```
 */
export function Th(props: ThProps) {
  const { size, ...nativeProps } = props
  return (
    <th {...nativeProps} className={cx(nativeProps.className, th({ size }))} />
  )
}
