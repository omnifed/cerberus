import {
  Accordion,
  type AccordionItemContentProps,
  type AccordionItemIndicatorProps,
  type AccordionItemProps,
  type AccordionItemTriggerProps,
  type AccordionRootProps,
} from '@ark-ui/react/accordion'
import { cx } from '@cerberus/styled-system/css'
import {
  accordion,
  type AccordionVariantProps,
} from '@cerberus/styled-system/recipes'

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
export function AccordionRoot(
  props: AccordionRootProps & AccordionVariantProps,
) {
  const { size, ...rootProps } = props
  const styles = accordion({ size })
  return (
    <Accordion.Root
      {...props}
      className={cx(styles.root, rootProps.className)}
      data-size={size}
    />
  )
}

/**
 * The primitive item component of the Accordion component.
 *
 * This component returns the Ark `Accordion.Item` component which has a
 * base style using the Cerberus `accordion` recipe that can be overridden.
 */
export function AccordionItem(
  props: AccordionItemProps & AccordionVariantProps,
) {
  const styles = accordion()
  return (
    <Accordion.Item {...props} className={cx(styles.item, props.className)} />
  )
}

/**
 * The primitive trigger component of the Accordion component.
 *
 * This component returns the Ark `Accordion.ItemTrigger` component which has
 * a base style using the Cerberus `accordion` recipe that can be overridden.
 */
export function AccordionItemTrigger(props: AccordionItemTriggerProps) {
  const styles = accordion()
  return (
    <Accordion.ItemTrigger
      {...props}
      className={cx(styles.itemTrigger, props.className)}
    />
  )
}

/**
 * The primitive item indicator component of the Accordion component.
 *
 * This component returns the Ark `Accordion.ItemIndicator` component which has
 * a base style using the Cerberus `accordion` recipe that can be overridden.
 */
export function AccordionItemIndicator(props: AccordionItemIndicatorProps) {
  const styles = accordion()
  return (
    <Accordion.ItemIndicator
      {...props}
      className={cx(styles.itemIndicator, props.className)}
    />
  )
}

/**
 * The primitive content component of the Accordion component.
 *
 * This component returns the Ark `Accordion.Content` component which has a
 * base style using the Cerberus `accordion` recipe that can be overridden.
 */
export function AccordionItemContent(props: AccordionItemContentProps) {
  const styles = accordion()
  return (
    <Accordion.ItemContent
      {...props}
      className={cx(styles.itemContent, props.className)}
    />
  )
}
