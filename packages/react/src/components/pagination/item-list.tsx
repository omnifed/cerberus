import { Group } from '../group/index'
import { PaginationItem } from './item'
import { PaginationProps } from './pagination'
import { PaginationParts } from './parts'
import { PaginationContextDetails } from './primitives'
import { NextTrigger, PrevTrigger } from './triggers'

interface ItemListProps extends PaginationContextDetails {
  layout: PaginationProps['layout']
}

export function ItemList(props: ItemListProps) {
  const { layout, ...pagination } = props

  return (
    <Group layout={layout}>
      <PrevTrigger layout={layout} />

      {pagination.pages.map((page, index) =>
        page.type === 'page' ? (
          <PaginationParts.Item key={index} {...page} asChild>
            <PaginationItem>{page.value}</PaginationItem>
          </PaginationParts.Item>
        ) : (
          <PaginationParts.Ellipsis key={index} index={index} asChild>
            <PaginationItem>&#8230;</PaginationItem>
          </PaginationParts.Ellipsis>
        ),
      )}

      <NextTrigger layout={layout} />
    </Group>
  )
}
