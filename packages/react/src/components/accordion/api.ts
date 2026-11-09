import { AccordionItemGroup } from './item-group'
import {
  AccordionRoot,
  AccordionItem,
  AccordionItemTrigger,
  AccordionItemContent,
  AccordionItemIndicator,
} from './primitives'

export const Accordion = Object.assign(AccordionRoot, {
  Root: AccordionRoot,
  Item: AccordionItem,
  ItemTrigger: AccordionItemTrigger,
  ItemContent: AccordionItemContent,
  ItemIndicator: AccordionItemIndicator,
  ItemGroup: AccordionItemGroup,
})
