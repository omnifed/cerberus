'use client'

import { type AccordionItemIndicatorProps } from '@ark-ui/react/accordion'
import { useCerberusContext } from '../../context/cerberus'
import { Accordion } from './api'
import type { ReactNode } from 'react'

export type AccordionChevronItemIndicatorProps = AccordionItemIndicatorProps & {
  slot?: ReactNode
}

export function AccordionChevronItemIndicator(
  props: AccordionChevronItemIndicatorProps,
) {
  const { slot, ...rest } = props

  const { icons } = useCerberusContext()
  const { accordionIndicator: ChevronDown } = icons

  return (
    <Accordion.ItemIndicator asChild={Boolean(slot)} {...rest}>
      {slot || <ChevronDown />}
    </Accordion.ItemIndicator>
  )
}
