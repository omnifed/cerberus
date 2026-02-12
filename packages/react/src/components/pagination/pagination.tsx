'use client'

import type { WithCss } from 'styled-system/types'
import { type GroupProps } from '../group/index'
import { Show } from '../show/index'
import { CompactText } from './compact'
import { ItemList } from './item-list'
import { PaginationParts } from './parts'
import {
  PaginationRootProps,
  type PaginationContextDetails,
} from './primitives'

export interface PaginationProps extends PaginationRootProps, WithCss {
  /**
   * Display a compact layout of only text information and triggers.
   * @default false
   */
  compact?: boolean
  /**
   * Display the layout of the button group.
   * @default 'default'
   */
  layout?: GroupProps['layout']
}

/**
 * A pagination component that displays a list of buttons to navigate between pages.
 * @see [Cerby Docs](https://cerberus.digitalu.design/docs/components/pagination)
 * @definition [Ark Docs](https://ark-ui.com/docs/components/pagination#api-reference)
 */
export function Pagination(props: PaginationProps) {
  const { compact, layout, ...rootProps } = props

  return (
    <PaginationParts.Root {...rootProps}>
      <PaginationParts.Context>
        {(pagination: PaginationContextDetails) => (
          <>
            {props.children}

            <Show
              when={compact}
              fallback={<ItemList layout={layout} {...pagination} />}
            >
              <CompactText layout={layout} {...pagination} />
            </Show>
          </>
        )}
      </PaginationParts.Context>
    </PaginationParts.Root>
  )
}
