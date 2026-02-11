'use client'

import { Button } from '../button/index'
import { Group, type GroupProps } from '../group/index'
import { PaginationParts } from './parts'
import {
  PaginationRootProps,
  type PaginationContextDetails,
} from './primitives'
import { NextTrigger, PrevTrigger } from './triggers'

export interface PaginationProps extends PaginationRootProps {
  layout?: GroupProps['layout']
}

/**
 * A pagination component that displays a list of buttons to navigate between pages.
 * @see [Cerby Docs](https://cerberus.digitalu.design/docs/components/pagination)
 * @definition [Ark Docs](https://ark-ui.com/docs/components/pagination#api-reference)
 */
export function Pagination(props: PaginationProps) {
  const { layout, ...rootProps } = props

  return (
    <PaginationParts.Root {...rootProps}>
      <Group layout={layout}>
        <PrevTrigger />

        <PaginationParts.Context>
          {(pagination: PaginationContextDetails) =>
            pagination.pages.map((page, index) =>
              page.type === 'page' ? (
                <PaginationParts.Item key={index} {...page} asChild>
                  <Button shape="default">{page.value}</Button>
                </PaginationParts.Item>
              ) : (
                <PaginationParts.Ellipsis key={index} index={index} asChild>
                  <Button disabled shape="default" usage="ghost">
                    &#8230;
                  </Button>
                </PaginationParts.Ellipsis>
              ),
            )
          }
        </PaginationParts.Context>

        <NextTrigger />
      </Group>
    </PaginationParts.Root>
  )
}
