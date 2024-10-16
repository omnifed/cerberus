import { css, cx } from '@cerberus/styled-system/css'
import { th, type ThVariantProps } from '@cerberus/styled-system/recipes'
import type { MouseEvent, TableHTMLAttributes } from 'react'
import { Show } from './Show'

/**
 * Th component for the Table component
 * @module
 */

export type ThBaseProps = TableHTMLAttributes<HTMLTableCellElement> & {
  /**
   * Converts the Th into a actionable button. Called when the user clicks on
   * the Th.
   */
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void
}
export type ThProps = ThBaseProps & ThVariantProps

/**
 * Styles for the Th component
 * @see https://cerberus.digitalu.design/react/table
 * @memberof module:Table
 * @example
 * ```tsx
 * <Th>Header 1</Th>
 * ```
 * @example
 * ```tsx
 * <Th onClick={handleClick}>
 *   Names
 *   <SortIcon />
 * </Th>
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
