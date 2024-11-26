import { Accordion as ArkAccordion } from '@ark-ui/react'
import { type AccordionVariantProps } from '@cerberus/styled-system/recipes'
import type { PropsWithChildren } from 'react'
import { Show } from './Show'
import {
  AccordionItem,
  AccordionItemContent,
  AccordionItemIndicator,
  AccordionItemTrigger,
} from './Accordion'

/**
 * This module contains an abstraction of the AccordionItem components.
 * @module
 */

export interface AccordionItemGroupProps extends ArkAccordion.ItemProps {
  /**
   * The heading of the accordion item to open and close the content.
   */
  heading: string
  /**
   * The position of the arrow indicator.
   */
  indicatorPosition?: 'start' | 'end'
}

/**
 * A grouped item for the Accordion component.
 * @definition [ARK docs](https://ark-ui.com/react/docs/components/accordion)
 * @definition [Accordion docs](https://cerberus.digitalu.design/react/accordion)
 * @example
 * ```tsx
 * <Accordion>
 *   <AccordionItemGroup heading="Accordion Item 1" value="one">
 *     <Text>Accordion Item 1 content</Text>
 *   </AccordionItemGroup>
 * </Accordion>
 * ```
 */
export function AccordionItemGroup(
  props: PropsWithChildren<AccordionItemGroupProps & AccordionVariantProps>,
) {
  const {
    size,
    heading,
    children,
    indicatorPosition = 'end',
    ...itemProps
  } = props
  return (
    <AccordionItem {...itemProps}>
      <AccordionItemTrigger size={size}>
        <Show when={indicatorPosition === 'start'}>
          <AccordionItemIndicator size={size} />
        </Show>

        {heading}

        <Show when={indicatorPosition === 'end'}>
          <AccordionItemIndicator size={size} />
        </Show>
      </AccordionItemTrigger>

      <AccordionItemContent size={size}>{children}</AccordionItemContent>
    </AccordionItem>
  )
}
