'use client'

import { button, type ButtonVariantProps } from 'styled-system/recipes'
import { Button } from '../button/index'
import { PaginationItem, type PaginationItemProps } from './primitives'

export type PaginationItemButtonProps = Omit<
  PaginationItemProps,
  'asChild' | keyof ButtonVariantProps
> &
  ButtonVariantProps

/**
 * The ItemButton component is an abstraction of `Pagination.Item` rendered as
 * a squared `outlined-subtle` Button that shows its page number. Button
 * variant props (`size`, `usage`, `palette`, `shape`) style the button; other
 * props go to the item. Children replace the page number.
 * @description [Cerberus Docs](https://cerberus.digitalu.design/docs/components/pagination)
 * @description [Ark Docs](https://ark-ui.com/docs/components/pagination)
 * @example
 * ```tsx
 * <Pagination.Context>
 *   {(pagination) =>
 *     pagination.pages.map((page, index) =>
 *       page.type === 'page' ? (
 *         <Pagination.ItemButton key={index} {...page} />
 *       ) : (
 *         <Pagination.EllipsisButton key={index} index={index} />
 *       ),
 *     )
 *   }
 * </Pagination.Context>
 * ```
 */
export function PaginationItemButton(props: PaginationItemButtonProps) {
  const { children, ...rest } = props
  const [variantProps, itemProps] = button.splitVariantProps(rest)

  return (
    <PaginationItem {...itemProps} asChild>
      <Button shape="squared" usage="outlined-subtle" {...variantProps}>
        {children ?? itemProps.value}
      </Button>
    </PaginationItem>
  )
}
