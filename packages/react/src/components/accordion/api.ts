import { AccordionItemGroup } from './item-group'
import {
  AccordionRoot,
  AccordionItem,
  AccordionItemTrigger,
  AccordionItemContent,
  AccordionItemIndicator,
} from './primitives'

/**
 * ## Accordion
 *
 * The `Accordion` component is a versatile UI element that allows users to expand and collapse sections of content. It is composed of several primitives that enable customization and flexibility in its usage.
 *
 * The `Accordion` component can be used in various contexts, such as displaying FAQs, menus, or any other content that benefits from a collapsible structure. It supports different palettes and usage styles to match the design requirements of your application.
 *
 * For a customizable Accordion, use the `Accordion` object to access the
 * individual primitives of the Accordion component.
 *
 * ## Slots
 *
 * | Slot | Description |
 * |------|-------------|
 * | `Root` | The root element of the Accordion component. |
 * | `Item` | The container for each individual accordion item. |
 * | `ItemTrigger` | The button or element that triggers the expansion or collapse of an accordion item. |
 * | `ItemContent` | The content area that is revealed when an accordion item is expanded. |
 * | `ItemIndicator` | An optional indicator (e.g., arrow) that shows the state of the accordion item (expanded or collapsed). |
 * | `ItemGroup` | A wrapper for grouping multiple accordion items together. |
 *
 * ## Reference
 *  @see [Accordion Docs](https://cerberus.digitalu.design/docs/components/accordion)
 */
export const Accordion = Object.assign(AccordionRoot, {
  Root: AccordionRoot,
  Item: AccordionItem,
  ItemTrigger: AccordionItemTrigger,
  ItemContent: AccordionItemContent,
  ItemIndicator: AccordionItemIndicator,
  ItemGroup: AccordionItemGroup,
})
