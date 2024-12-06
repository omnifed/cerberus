import { Accordion as ArkAccordion } from '@ark-ui/react'
import { ChevronDown } from '@cerberus/icons'
import { cx } from '@cerberus/styled-system/css'
import {
  accordion,
  type AccordionVariantProps,
} from '@cerberus/styled-system/recipes'

export type AccordionProps = ArkAccordion.RootProps & AccordionVariantProps

/**
 * The context provider for the Accordion family.
 * @definition [Accordion docs](https://cerberus.digitalu.design/react/accordion)
 * @example
 * ```tsx
 * <Accordion>
 *  <AccordionItemGroup heading="Item 1 heading" value="one">
 *     This is the content
 *  </AccordionItemGroup>
 * </Accordion>
 * ```
 */
export function Accordion(props: AccordionProps) {
  const { size, className, ...rootProps } = props
  const styles = accordion({ size })
  return (
    <ArkAccordion.Root
      collapsible
      className={cx(className, styles.root)}
      {...rootProps}
    />
  )
}

type AccordionItemProps = ArkAccordion.ItemProps & AccordionVariantProps

/**
 * The item for the Accordion component.
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
 */
export function AccordionItem(props: AccordionItemProps) {
  const { size, ...itemProps } = props
  const styles = accordion({ size })
  return (
    <ArkAccordion.Item
      {...itemProps}
      className={cx(itemProps.className, styles.item)}
    />
  )
}

export type AccordionItemTriggerProps = ArkAccordion.ItemTriggerProps &
  AccordionVariantProps

/**
 * The trigger for the Accordion component.
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
 */
export function AccordionItemTrigger(props: AccordionItemTriggerProps) {
  const { size, ...triggerProps } = props
  const styles = accordion({ size })
  return (
    <ArkAccordion.ItemTrigger
      {...triggerProps}
      className={cx(triggerProps.className, styles.itemTrigger)}
    />
  )
}

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

  return (
    <ArkAccordion.ItemIndicator
      {...indicatorProps}
      className={cx(indicatorProps.className, styles.itemIndicator)}
    >
      <ChevronDown size={iconSize} />
    </ArkAccordion.ItemIndicator>
  )
}

export type AccordionItemContentProps = ArkAccordion.ItemContentProps &
  AccordionVariantProps

/**
 * The content for the Accordion component.
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
export function AccordionItemContent(props: AccordionItemContentProps) {
  const { size, ...contentProps } = props
  const styles = accordion({ size })
  return (
    <ArkAccordion.ItemContent
      {...contentProps}
      className={cx(contentProps.className, styles.itemContent)}
    />
  )
}
