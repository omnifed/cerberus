'use client'

import { button, type ButtonVariantProps } from 'styled-system/recipes'
import { Button } from '../button/index'
import { PaginationEllipsis, type PaginationEllipsisProps } from './primitives'

export type PaginationEllipsisButtonProps = Omit<
  PaginationEllipsisProps,
  'asChild' | keyof ButtonVariantProps
> &
  ButtonVariantProps

/**
 * The EllipsisButton component is an abstraction of `Pagination.Ellipsis`
 * rendered as a squared `outlined-subtle` Button that shows "…", so it lines
 * up with `Pagination.ItemButton`. Button variant props (`size`, `usage`,
 * `palette`, `shape`) style the button; other props go to the ellipsis.
 * Children replace the "…".
 * @description [Cerberus Docs](https://cerberus.digitalu.design/docs/components/pagination)
 * @description [Ark Docs](https://ark-ui.com/docs/components/pagination)
 * @example
 * ```tsx
 * <Pagination.EllipsisButton index={index} />
 * ```
 */
export function PaginationEllipsisButton(props: PaginationEllipsisButtonProps) {
  const { children, ...rest } = props
  const [variantProps, ellipsisProps] = button.splitVariantProps(rest)

  return (
    <PaginationEllipsis {...ellipsisProps} asChild>
      <Button shape="squared" usage="outlined-subtle" {...variantProps}>
        {children ?? <>&#8230;</>}
      </Button>
    </PaginationEllipsis>
  )
}
