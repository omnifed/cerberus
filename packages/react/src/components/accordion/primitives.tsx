import {
  Accordion,
  type AccordionItemContentProps,
  type AccordionItemIndicatorProps,
  type AccordionItemProps,
  type AccordionItemTriggerProps,
  type AccordionRootProps,
} from '@ark-ui/react/accordion'

/**
 * This module contains the primitives of the Accordion component.
 * @module 'accordion/primitives'
 */

/**
 * The primitive root component of the Accordion component.
 *
 * This component returns the Ark `Accordion.Root` component which has a
 * base style using the Cerberus `accordion` recipe that can be overridden.
 */
export function AccordionRoot(props: AccordionRootProps) {
  return <Accordion.Root {...props} />
}

/**
 * The primitive item component of the Accordion component.
 *
 * This component returns the Ark `Accordion.Item` component which has a
 * base style using the Cerberus `accordion` recipe that can be overridden.
 */
export function AccordionItem(props: AccordionItemProps) {
  return <Accordion.Item {...props} />
}

/**
 * The primitive trigger component of the Accordion component.
 *
 * This component returns the Ark `Accordion.ItemTrigger` component which has
 * a base style using the Cerberus `accordion` recipe that can be overridden.
 */
export function AccordionItemTrigger(props: AccordionItemTriggerProps) {
  return <Accordion.ItemTrigger {...props} />
}

/**
 * The primitive item indicator component of the Accordion component.
 *
 * This component returns the Ark `Accordion.ItemIndicator` component which has
 * a base style using the Cerberus `accordion` recipe that can be overridden.
 */
export function AccordionItemIndicator(props: AccordionItemIndicatorProps) {
  return <Accordion.ItemIndicator {...props} />
}

/**
 * The primitive content component of the Accordion component.
 *
 * This component returns the Ark `Accordion.Content` component which has a
 * base style using the Cerberus `accordion` recipe that can be overridden.
 */
export function AccordionItemContent(props: AccordionItemContentProps) {
  return <Accordion.ItemContent {...props} />
}
