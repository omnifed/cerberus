'use client'

import { usePaginationContext } from '@ark-ui/react/pagination'
import { extractParts } from '../../internal/extract-parts'
import { cerberus } from '../../system/index'
import { Group, type GroupProps } from '../group/index'
import { PaginationNextTrigger, PaginationPrevTrigger } from './primitives'
import {
  PaginationNextTriggerWithIcon,
  PaginationPrevTriggerWithIcon,
  type PaginationNextTriggerWithIconProps,
  type PaginationPrevTriggerWithIconProps,
} from './trigger-with-icon'

const PARTS = {
  prevTrigger: PaginationPrevTrigger,
  nextTrigger: PaginationNextTrigger,
}

export type PaginationCompactListProps = GroupProps

/**
 * The CompactList component is an abstraction that renders a Group of
 * `Pagination.PrevTriggerWithIcon`, "page of total" text (e.g. "3 of 10"), and
 * `Pagination.NextTriggerWithIcon`: the compact counterpart of
 * `Pagination.ItemList`. It reads the pagination state from context, so
 * render it inside `Pagination.Root` or `Pagination.RootProvider`.
 *
 * Direct `Pagination.PrevTrigger` or `Pagination.NextTrigger` children
 * override that trigger. A trigger child with children replaces the icon;
 * with `asChild` it replaces the whole IconButton. Other children are
 * ignored.
 * @description [Cerberus Docs](https://cerberus.digitalu.design/docs/components/pagination)
 * @description [Ark Docs](https://ark-ui.com/docs/components/pagination)
 * @example
 * ```tsx
 * <Pagination.Root count={1000} pageSize={10}>
 *   <Pagination.CompactList />
 * </Pagination.Root>
 * ```
 */
export function PaginationCompactList(props: PaginationCompactListProps) {
  const { children, layout, ...groupProps } = props
  const pagination = usePaginationContext()
  const { parts } = extractParts(children, PARTS)
  // On the Cerberus buttons, recipe variant names (`size`…) are variants
  const prevProps = parts.prevTrigger as PaginationPrevTriggerWithIconProps
  const nextProps = parts.nextTrigger as PaginationNextTriggerWithIconProps

  return (
    <Group layout={layout} {...groupProps}>
      {parts.prevTrigger?.asChild ? (
        <PaginationPrevTrigger {...parts.prevTrigger} />
      ) : (
        <PaginationPrevTriggerWithIcon layout={layout} {...prevProps} />
      )}

      <cerberus.p alignSelf="center" textAlign="center" textStyle="label-sm">
        {pagination.page} of {pagination.totalPages}
      </cerberus.p>

      {parts.nextTrigger?.asChild ? (
        <PaginationNextTrigger {...parts.nextTrigger} />
      ) : (
        <PaginationNextTriggerWithIcon layout={layout} {...nextProps} />
      )}
    </Group>
  )
}
