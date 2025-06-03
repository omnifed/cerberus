import {
  Accordion,
  type AccordionItemContentProps as ArkAccordionItemContentProps,
  type AccordionItemIndicatorProps as ArkAccordionItemIndicatorProps,
  type AccordionItemProps as ArkAccordionItemProps,
  type AccordionItemTriggerProps as ArkAccordionItemTriggerProps,
  type AccordionRootProps as ArkAccordionRootProps,
} from '@ark-ui/react/accordion'
import { accordion, type AccordionVariantProps } from 'styled-system/recipes'
import {
  createCerberusPrimitive,
  type CerberusPrimitiveProps,
} from '../../system/index'

/**
 * This module contains the primitives of the Accordion component.
 * @module 'accordion/primitives'
 */

const { withSlotRecipe } = createCerberusPrimitive(accordion)

function AccordionRootEl(props: AccordionRootProps) {
  const { size, ...rootProps } = props
  return <Accordion.Root {...rootProps} data-size={size} />
}

/**
 * The primitive root component of the Accordion component.
 *
 * This component returns the Ark `Accordion.Root` component which has a
 * base style using the Cerberus `accordion` recipe that can be overridden.
 */
export const AccordionRoot = withSlotRecipe(AccordionRootEl, 'root')
export type AccordionRootProps = CerberusPrimitiveProps<
  ArkAccordionRootProps & AccordionVariantProps
>

/**
 * The primitive item component of the Accordion component.
 *
 * This component returns the Ark `Accordion.Item` component which has a
 * base style using the Cerberus `accordion` recipe that can be overridden.
 */
export const AccordionItem = withSlotRecipe<AccordionItemProps>(
  Accordion.Item,
  'item',
)
export type AccordionItemProps = CerberusPrimitiveProps<
  ArkAccordionItemProps & AccordionVariantProps
>

/**
 * The primitive trigger component of the Accordion component.
 *
 * This component returns the Ark `Accordion.ItemTrigger` component which has
 * a base style using the Cerberus `accordion` recipe that can be overridden.
 */
export const AccordionItemTrigger = withSlotRecipe<AccordionItemTriggerProps>(
  Accordion.ItemTrigger,
  'itemTrigger',
)
export type AccordionItemTriggerProps =
  CerberusPrimitiveProps<ArkAccordionItemTriggerProps>

/**
 * The primitive item indicator component of the Accordion component.
 *
 * This component returns the Ark `Accordion.ItemIndicator` component which has
 * a base style using the Cerberus `accordion` recipe that can be overridden.
 */
export const AccordionItemIndicator =
  withSlotRecipe<AccordionItemIndicatorProps>(
    Accordion.ItemIndicator,
    'itemIndicator',
  )
export type AccordionItemIndicatorProps =
  CerberusPrimitiveProps<ArkAccordionItemIndicatorProps>

/**
 * The primitive content component of the Accordion component.
 *
 * This component returns the Ark `Accordion.Content` component which has a
 * base style using the Cerberus `accordion` recipe that can be overridden.
 */
export const AccordionItemContent = withSlotRecipe<AccordionItemContentProps>(
  Accordion.ItemContent,
  'itemContent',
)
export type AccordionItemContentProps =
  CerberusPrimitiveProps<ArkAccordionItemContentProps>
