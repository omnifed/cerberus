'use client'

import type { PaginationRootProps as ArkPaginationRootProps } from '@ark-ui/react/pagination'
import { createElement, type ElementType } from 'react'
import { extractParts } from '../../internal/extract-parts'
import type { GroupProps } from '../group/index'
import { PaginationCompactList } from './compact-list'
import { PaginationItemList } from './item-list'
import {
  PaginationEllipsis,
  PaginationItem,
  PaginationNextTrigger,
  PaginationPrevTrigger,
  PaginationRoot,
  type PaginationRootProps,
} from './primitives'

const PARTS = {
  prevTrigger: PaginationPrevTrigger,
  nextTrigger: PaginationNextTrigger,
  item: PaginationItem,
  ellipsis: PaginationEllipsis,
}

export interface PaginationProps extends Omit<PaginationRootProps, 'page'> {
  /**
   * The controlled active page.
   */
  page?: ArkPaginationRootProps['page']
  /**
   * Display a compact layout of only text information and triggers.
   * @default false
   */
  compact?: boolean
  /**
   * The layout of the button group.
   * @default 'default'
   */
  layout?: GroupProps['layout']
}

/**
 * The Pagination component is an abstraction of the primitives that renders
 * `Pagination.ItemList` (the previous and next triggers around one button
 * per page or ellipsis) or, with `compact`, `Pagination.CompactList` ("page
 * of total" text between the triggers). Non-part children render inside the
 * root before the list, where `usePaginationContext()` reads the state.
 *
 * Direct `Pagination.PrevTrigger`, `Pagination.NextTrigger`,
 * `Pagination.Item` or `Pagination.Ellipsis` children override that part
 * (see `Pagination.ItemList`): an `Item` or `Ellipsis` child patches every
 * item or ellipsis, and a part child with children replaces its default
 * content.
 * @description [Cerberus Docs](https://cerberus.digitalu.design/docs/components/pagination)
 * @description [Ark Docs](https://ark-ui.com/docs/components/pagination)
 * @example
 * ```tsx
 * <Pagination count={5000} pageSize={10} siblingCount={2} layout="attached">
 *   <Pagination.PrevTrigger data-testid="prev" />
 * </Pagination>
 * ```
 */
export function PaginationEl(props: PaginationProps) {
  const { children, compact, layout, ...rootProps } = props
  const { parts, content } = extractParts(children, PARTS)

  // Hand the part overrides to the list, which renders those parts
  const overrides = Object.entries(parts).map(([key, partProps]) =>
    createElement(PARTS[key as keyof typeof PARTS] as ElementType, {
      key,
      ...partProps,
    }),
  )

  return (
    <PaginationRoot {...rootProps}>
      {content}

      {compact ? (
        <PaginationCompactList layout={layout}>
          {overrides}
        </PaginationCompactList>
      ) : (
        <PaginationItemList layout={layout}>{overrides}</PaginationItemList>
      )}
    </PaginationRoot>
  )
}
