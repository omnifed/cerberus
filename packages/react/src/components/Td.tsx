import { cx } from '@cerberus/styled-system/css'
import { td, type TdVariantProps } from '@cerberus/styled-system/recipes'
import type { TableHTMLAttributes } from 'react'

/**
 * Th component for the Td component
 * @module
 */

export type TdBaseProps = TableHTMLAttributes<HTMLTableCellElement>
export type TdProps = TdBaseProps & TdVariantProps

/**
 * Styles for the Th component
 * @definition [Table docs](https://cerberus.digitalu.design/react/table)
 * @example
 * ```tsx
 * <Td>Data cell</Td>
 * ```
 */
export function Td(props: TdProps) {
  const { size, ...nativeProps } = props
  return (
    <td
      {...nativeProps}
      className={cx(
        nativeProps.className,
        td({
          size,
        }),
      )}
    />
  )
}
