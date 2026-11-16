'use client'

import type { ReactNode } from 'react'
import { useCerberusContext } from '../../context/cerberus'
import { extractParts } from '../../internal/extract-parts'
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
  /**
   * The heading content displayed inside the accordion trigger.
   */
  heading?: ReactNode
  /**
   * The position of the indicator icon relative to the heading.
   * @default 'end'
   */
  indicatorPosition?: 'start' | 'end'
}

export function AccordionItemGroup(props: AccordionItemGroupProps) {
  const [localProps, itemProps] = splitProps(props, [
    'heading',
    'indicatorPosition',
    'children',
  ])

  const indicatorPosition = localProps.indicatorPosition ?? 'end'
  const { icons } = useCerberusContext()
  const { accordionIndicator: ChevronDown } = icons

  if (!itemProps.value) {
    throw new Error(
      'AccordionItemGroup requires a value prop to properly identify the item.',
    )
  }

  const { parts, content } = extractParts(localProps.children, PARTS)

  const { children: _itemChildren, ...itemOverrideProps } = parts.item ?? {}
  const { children: triggerChildren, ...triggerOverrideProps } =
    parts.itemTrigger ?? {}
  const { children: indicatorChildren, ...indicatorOverrideProps } =
    parts.itemIndicator ?? {}
  const { children: contentChildren, ...contentOverrideProps } =
    parts.itemContent ?? {}

  const indicator = (
    <AccordionItemIndicator
      asChild={indicatorOverrideProps.asChild ?? !indicatorChildren}
      {...indicatorOverrideProps}
    >
      {indicatorChildren ?? <ChevronDown />}
    </AccordionItemIndicator>
  )

  return (
    <AccordionItem
      {...itemProps}
      {...itemOverrideProps}
      value={itemProps.value}
    >
      <AccordionItemTrigger
        data-indicator-position={indicatorPosition}
        {...triggerOverrideProps}
      >
        {triggerChildren ?? (
          <>
            <Show when={indicatorPosition === 'start'}>{indicator}</Show>
            {localProps.heading}
            <Show when={indicatorPosition === 'end'}>{indicator}</Show>
          </>
        )}
      </AccordionItemTrigger>

      <AccordionItemContent {...contentOverrideProps}>
        {contentChildren ?? content}
      </AccordionItemContent>
    </AccordionItem>
  )
}
