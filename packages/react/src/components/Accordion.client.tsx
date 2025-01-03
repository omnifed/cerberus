'use client'

import { Accordion as ArkAccordion } from '@ark-ui/react'
import { cx } from '@cerberus/styled-system/css'
import {
  accordion,
  type AccordionVariantProps,
} from '@cerberus/styled-system/recipes'
import { useCerberusContext } from '../context/cerberus'

export type AccordionItemIndicatorProps = ArkAccordion.ItemIndicatorProps &
  AccordionVariantProps

/**
 * The indicator for the Accordion component.
 * @definition [ARK docs](https://ark-ui.com/react/docs/components/accordion)
 * @definition [Accordion docs](https://cerberus.digitalu.design/react/accordion)
 * @example
 * ```tsx
 * <Accordion>
 *   <AccordionItem value="one">
 *     <AccordionTrigger>
 *        Accordion Item 1
 *     <AccordionIndicator />
 *     </AccordionTrigger>
 *     <AccordionContent>Accordion Item 1 content</AccordionContent>
 *   </AccordionItem>
 * </Accordion>
 * ```
 * */
export function AccordionItemIndicator(props: AccordionItemIndicatorProps) {
  const { size, ...indicatorProps } = props
  const styles = accordion({ size })
  const iconSize = size === 'sm' ? 16 : '24'
  const { icons } = useCerberusContext()
  const ChevronDown = icons.accordionIndicator

  return (
    <ArkAccordion.ItemIndicator
      {...indicatorProps}
      className={cx(indicatorProps.className, styles.itemIndicator)}
    >
      <ChevronDown size={iconSize} />
    </ArkAccordion.ItemIndicator>
  )
}
