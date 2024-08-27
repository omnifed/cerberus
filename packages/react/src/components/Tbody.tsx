import { tbody, type TbodyVariantProps } from '@cerberus/styled-system/recipes'
import { cx } from '@cerberus/styled-system/css'
import type { PropsWithChildren, TableHTMLAttributes } from 'react'

export type TbodyBaseProps = TableHTMLAttributes<HTMLTableSectionElement>
export type TbodyProps = TbodyBaseProps & TbodyVariantProps

/**
 * The TBody component is used to render a table body.
 * @definition [Table docs](https://cerberus.digitalu.design/react/table)
 * @example
 * ```tsx
 * <TBody>
 *  {children}
 * </TBody>
 * ```
 */
export function Tbody(props: PropsWithChildren<TbodyProps>) {
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
