'use client'

import { accordionAnatomy } from '@ark-ui/react/anatomy'
import type { ReactNode } from 'react'
import { createAbstraction } from '../../internal/factory'
import { splitProps } from '../../utils/index'
import { Show } from '../show/index'
import { AccordionChevronItemIndicator } from './item-indicator'
import {
  AccordionItem,
  AccordionItemContent,
  AccordionItemTrigger,
  type AccordionItemProps,
} from './primitives'

const keys = accordionAnatomy.keys()

export interface AccordionItemGroupBaseProps extends AccordionItemProps {
  heading?: ReactNode
  indicatorPosition?: 'start' | 'end'
}

export const AccordionItemGroup = createAbstraction<
  AccordionItemGroupBaseProps,
  (typeof keys)[number] | 'heading',
  (typeof keys)[number] | 'heading'
>((props, slots, slotProps) => {
  const [localProps, itemProps] = splitProps(props, ['heading', 'indicatorPosition'])

  const indicatorPosition = localProps.indicatorPosition ?? 'end'
  const HeadingContent = slots.heading ?? localProps.heading

  const IndicatorContent = (
    <AccordionChevronItemIndicator
      slot={slots.itemIndicator}
      {...slotProps.itemIndicator}
    />
  )

  return (
    <AccordionItem {...itemProps} {...slotProps.item}>
      <AccordionItemTrigger
        data-indicator-position={indicatorPosition}
        unstyled={props.unstyled}
        {...slotProps.itemTrigger}
      >
        <Show when={indicatorPosition === 'start'}>{IndicatorContent}</Show>
        {HeadingContent}
        <Show when={indicatorPosition === 'end'}>{IndicatorContent}</Show>
      </AccordionItemTrigger>

      <AccordionItemContent
        asChild={slots.itemContent}
        unstyled={props.unstyled}
        {...slotProps.itemContent}
      >
        {slots.itemContent || itemProps.children}
      </AccordionItemContent>
    </AccordionItem>
  )
})
