'use client'

import { type AccordionItemIndicatorProps } from '@ark-ui/react/accordion'
import type { ReactNode } from 'react'
import { useCerberusContext } from '../../context/cerberus'
import { AccordionItemIndicator } from './primitives'

export type AccordionChevronItemIndicatorProps = AccordionItemIndicatorProps & {
  slot?: ReactNode
}

export function AccordionChevronItemIndicator(
  props: AccordionChevronItemIndicatorProps,
) {
  const { slot, ...indicatorProps } = props

  const { icons } = useCerberusContext()
  const { accordionIndicator: ChevronDown } = icons

  return (
    <AccordionItemIndicator asChild={Boolean(slot)} {...indicatorProps}>
      {slot || <ChevronDown />}
    </AccordionItemIndicator>
  )
}
