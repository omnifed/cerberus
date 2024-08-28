import { css, cx } from '@cerberus/styled-system/css'
import { th, type ThVariantProps } from '@cerberus/styled-system/recipes'
import type { MouseEvent, TableHTMLAttributes } from 'react'
import { Show } from './Show'

/**
 * Th component for the Table component
 * @module
 */

export type ThBaseProps = TableHTMLAttributes<HTMLTableCellElement> & {
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void
}
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
  const { size, onClick, ...nativeProps } = props
  return (
    <Show
      when={Boolean(onClick)}
      fallback={
        <th
          {...nativeProps}
          className={cx(nativeProps.className, th({ size }))}
        />
      }
    >
      <th {...nativeProps}>
        <button
          className={cx(
            nativeProps.className,
            th({ size }),
            css({
              alignItems: 'center',
              display: 'inline-flex',
              justifyContent: 'space-between',
              userSelect: 'none',
              w: 'full',
            }),
          )}
          onClick={onClick}
        >
          {props.children}
        </button>
      </th>
    </Show>
  )
}
