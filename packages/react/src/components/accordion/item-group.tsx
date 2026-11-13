'use client'

import type { ReactNode } from 'react'
import { useCerberusContext } from '../../context/cerberus'
import { createAbstraction } from '../../internal/factory'
import { splitProps } from '../../utils/index'
import { Show } from '../show/index'
import {
  AccordionItem,
  AccordionItemContent,
  AccordionItemIndicator,
  AccordionItemTrigger,
  type AccordionItemProps,
} from './primitives'

const PARTS = {
  item: AccordionItem,
  itemTrigger: AccordionItemTrigger,
  itemIndicator: AccordionItemIndicator,
  itemContent: AccordionItemContent,
}

export type AccordionItemGroupProps = AccordionItemProps & {
  heading?: ReactNode
  indicatorPosition?: 'start' | 'end'
}

export const AccordionItemGroup = createAbstraction(
  PARTS,
  (props: AccordionItemGroupProps, parts) => {
    const [localProps, itemProps] = splitProps(props, [
      'heading',
      'indicatorPosition',
    ])
    const indicatorPosition = localProps.indicatorPosition ?? 'end'

    const { icons } = useCerberusContext()
    const { accordionIndicator: ChevronDown } = icons

    return (
      <parts.item {...itemProps}>
        <parts.itemTrigger data-indicator-position={indicatorPosition}>
          <Show when={indicatorPosition === 'start'}>
            <parts.itemIndicator asChild>
              <ChevronDown />
            </parts.itemIndicator>
          </Show>

          {localProps.heading}

          <Show when={indicatorPosition === 'end'}>
            <parts.itemIndicator asChild>
              <ChevronDown />
            </parts.itemIndicator>
          </Show>
        </parts.itemTrigger>

        <parts.itemContent>{props.children}</parts.itemContent>
      </parts.item>
    )
  },
)
