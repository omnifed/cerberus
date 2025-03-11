'use client'

import { type AccordionItemIndicatorProps } from '@ark-ui/react/accordion'
import { type AccordionVariantProps } from 'styled-system/recipes'
import { useCerberusContext } from '../../context/cerberus'
import { AccordionParts } from './parts'

/**
 * This module contains the internal AccordionItemIndicator component.
 * @module 'accordion/item-indicator'
 */

export function AccordionChevronItemIndicator(
  props: AccordionItemIndicatorProps & AccordionVariantProps,
) {
  const { size, ...indicatorProps } = props
  const iconSize = size === 'sm' ? 16 : '24'

  const { icons } = useCerberusContext()
  const { accordionIndicator: ChevronDown } = icons

  return (
    <AccordionParts.ItemIndicator {...indicatorProps}>
      <ChevronDown size={iconSize} />
    </AccordionParts.ItemIndicator>
  )
}
