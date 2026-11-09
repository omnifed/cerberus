import { accordionAnatomy } from '@ark-ui/react/anatomy'
import type { ReactNode } from 'react'
import { createAbstraction } from '../../internal/factory'
import { Show } from '../show/index'
import { Accordion } from './api'
import { AccordionChevronItemIndicator } from './item-indicator'
import { type AccordionItemProps } from './primitives'

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
  const indicatorPosition = props.indicatorPosition ?? 'end'

  const HeadingContent = slots.heading ?? props.heading
  const IndicatorContent = (
    <AccordionChevronItemIndicator
      slot={slots.itemIndicator}
      {...slotProps.itemIndicator}
    />
  )

  if (!props.value) {
    throw new Error(
      'AccordionItemGroup requires a value prop to properly identify the item.',
    )
  }

  return (
    <Accordion.Item value={props.value} {...slotProps.root}>
      <Accordion.ItemTrigger
        data-indicator-position={indicatorPosition}
        {...slotProps.itemTrigger}
      >
        <Show when={indicatorPosition === 'start'}>{IndicatorContent}</Show>
        {HeadingContent}
        <Show when={indicatorPosition === 'end'}>{IndicatorContent}</Show>
      </Accordion.ItemTrigger>

      <Accordion.ItemContent {...slotProps.itemContent}>
        {props.children}
      </Accordion.ItemContent>
    </Accordion.Item>
  )
})
