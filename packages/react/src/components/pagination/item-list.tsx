'use client'

import { usePaginationContext } from '@ark-ui/react/pagination'
import { extractParts } from '../../internal/extract-parts'
import { Group, type GroupProps } from '../group/index'
import {
  PaginationEllipsisButton,
  type PaginationEllipsisButtonProps,
} from './ellipsis-button'
import {
  PaginationItemButton,
  type PaginationItemButtonProps,
} from './item-button'
import {
  PaginationEllipsis,
  PaginationItem,
  PaginationNextTrigger,
  PaginationPrevTrigger,
} from './primitives'
import {
  PaginationNextTriggerWithIcon,
  PaginationPrevTriggerWithIcon,
  type PaginationNextTriggerWithIconProps,
  type PaginationPrevTriggerWithIconProps,
} from './trigger-with-icon'

const PARTS = {
  prevTrigger: PaginationPrevTrigger,
  nextTrigger: PaginationNextTrigger,
  item: PaginationItem,
  ellipsis: PaginationEllipsis,
}

export type PaginationItemListProps = GroupProps

/**
 * The ItemList component is an abstraction that renders a Group of
 * `Pagination.PrevTriggerWithIcon`, one `Pagination.ItemButton` per page or
 * `Pagination.EllipsisButton` per gap, and `Pagination.NextTriggerWithIcon`.
 * It reads the pagination state from context, so render it inside
 * `Pagination.Root` or `Pagination.RootProvider`. `layout="attached"` attaches
 * the buttons.
 *
 * Direct `Pagination.PrevTrigger`, `Pagination.NextTrigger`,
 * `Pagination.Item` or `Pagination.Ellipsis` children override that part: an
 * `Item` (or `Ellipsis`) child patches every item (or ellipsis), its `value`
 * and `type` (or `index`) are ignored. A part child with children replaces
 * its default content; with `asChild` it replaces the whole Cerberus button.
 * Other children are ignored.
 * @description [Cerberus Docs](https://cerberus.digitalu.design/docs/components/pagination)
 * @description [Ark Docs](https://ark-ui.com/docs/components/pagination)
 * @example
 * ```tsx
 * <Pagination.Root count={1000} pageSize={10}>
 *   <Pagination.ItemList layout="attached">
 *     <Pagination.Item data-testid="page" />
 *   </Pagination.ItemList>
 * </Pagination.Root>
 * ```
 */
export function PaginationItemList(props: PaginationItemListProps) {
  const { children, layout, ...groupProps } = props
  const pagination = usePaginationContext()
  const { parts } = extractParts(children, PARTS)

  // On the Cerberus buttons, recipe variant names (`size`…) are variants
  const prevProps = parts.prevTrigger as PaginationPrevTriggerWithIconProps
  const nextProps = parts.nextTrigger as PaginationNextTriggerWithIconProps
  const {
    value: _value,
    type: _type,
    ...itemProps
  } = (parts.item ?? {}) as Partial<PaginationItemButtonProps>
  const { index: _index, ...ellipsisProps } = (parts.ellipsis ??
    {}) as Partial<PaginationEllipsisButtonProps>

  return (
    <Group layout={layout} {...groupProps}>
      {parts.prevTrigger?.asChild ? (
        <PaginationPrevTrigger {...parts.prevTrigger} />
      ) : (
        <PaginationPrevTriggerWithIcon layout={layout} {...prevProps} />
      )}

      {pagination.pages.map((page, index) => {
        if (page.type === 'page') {
          return parts.item?.asChild ? (
            <PaginationItem key={index} {...parts.item} {...page} />
          ) : (
            <PaginationItemButton key={index} {...itemProps} {...page} />
          )
        }
        return parts.ellipsis?.asChild ? (
          <PaginationEllipsis key={index} {...parts.ellipsis} index={index} />
        ) : (
          <PaginationEllipsisButton
            key={index}
            {...ellipsisProps}
            index={index}
          />
        )
      })}

      {parts.nextTrigger?.asChild ? (
        <PaginationNextTrigger {...parts.nextTrigger} />
      ) : (
        <PaginationNextTriggerWithIcon layout={layout} {...nextProps} />
      )}
    </Group>
  )
}
