import { splitProps } from '../../utils/index'
import { Show } from '../show/index'
import { Accordion } from './api'
import { AccordionChevronItemIndicator } from './item-indicator'
import { type AccordionItemProps } from './primitives'

/**
 * This module contains an abstraction of the AccordionItem components.
 * @module
 */

export interface AccordionItemGroupProps extends AccordionItemProps {
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
 * The AccordionItemGroup component is an abstraction of the Accordion primitive
 * components which renders an accordion item with a heading and an indicator.
 *
 * It is a wrapper around the `AccordionParts.Item`, `AccordionParts.
 * ItemTrigger`, `AccordionParts.ItemIndicator`, and `AccordionParts.ItemContent` components.
 *
 * @description [Cerberus docs](https://cerberus.digitalu.design/react/accordion)
 * @description [Ark docs](https://ark-ui.com/react/docs/components/accordion)
 */
export function AccordionItemGroup(props: AccordionItemGroupProps) {
  const [groupProps, itemProps] = splitProps(props, [
    'heading',
    'children',
    'indicatorPosition',
  ])
  const indicatorPosition = groupProps.indicatorPosition ?? 'end'

  if (!itemProps.value) {
    throw new Error(
      'AccordionItemGroup requires a value prop to properly identify the item.',
    )
  }

  return (
    <Accordion.Item {...itemProps} value={itemProps.value}>
      <Accordion.ItemTrigger data-indicator-position={indicatorPosition}>
        <Show when={indicatorPosition === 'start'}>
          <AccordionChevronItemIndicator />
        </Show>

        {groupProps.heading}

        <Show when={indicatorPosition === 'end'}>
          <AccordionChevronItemIndicator />
        </Show>
      </Accordion.ItemTrigger>

      <Accordion.ItemContent>{groupProps.children}</Accordion.ItemContent>
    </Accordion.Item>
  )
}
