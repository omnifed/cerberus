import { cx } from '@cerberus/styled-system/css'
import { td, type TdVariantProps } from '@cerberus/styled-system/recipes'

/**
 * Th component for the Td component
 * @module
 */

export type TdBaseProps = JSX.IntrinsicElements['td']
export type TdProps = TdBaseProps & TdVariantProps

/**
 * Styles for the Th component
 * @see https://cerberus.digitalu.design/react/table
 * @memberof module:Table
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
