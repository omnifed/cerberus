import { tbody, type TbodyVariantProps } from '@cerberus/styled-system/recipes'
import { cx } from '@cerberus/styled-system/css'

/**
 * This module provides a TBody component.
 * @module
 */

export type TbodyBaseProps = JSX.IntrinsicElements['tbody']
export type TbodyProps = TbodyBaseProps & TbodyVariantProps

/**
 * The TBody component is used to render a table body.
 * @see https://cerberus.digitalu.design/react/table
 * @memberof module:Table
 * @example
 * ```tsx
 * <TBody>
 *  {children}
 * </TBody>
 * ```
 */
export function Tbody(props: TbodyProps) {
  const { decoration, ...nativeProps } = props
  return (
    <tbody
      {...nativeProps}
      className={cx(
        nativeProps.className,
        tbody({
          decoration,
        }),
      )}
    />
  )
}
