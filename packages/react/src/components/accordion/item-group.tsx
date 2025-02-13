import type { AccordionItemProps } from '@ark-ui/react/accordion'
import { type AccordionVariantProps } from '@cerberus/styled-system/recipes'
import { css } from '@cerberus/styled-system/css'
import { splitProps } from '../../utils/index'
import { Show } from '../Show'
import { AccordionParts } from './parts'

/**
 * This module contains an abstraction of the AccordionItem components.
 * @module
 */

// We are only exposing this to keep the API consistent
export const Accordion = AccordionParts.Root

export interface AccordionItemGroupProps
  extends AccordionItemProps,
    AccordionVariantProps {
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
  const [groupProps, { size }, itemProps] = splitProps(
    props,
    ['heading', 'children', 'indicatorPosition'],
    ['size'],
  )

  const triggerStyles =
    groupProps.indicatorPosition === 'start'
      ? {
          gap: 'md',
          justifyContent: 'flex-start',
        }
      : undefined

  return (
    <AccordionParts.Item {...itemProps} size={size}>
      <AccordionParts.ItemTrigger className={css(triggerStyles)} size={size}>
        <Show when={groupProps.indicatorPosition === 'start'}>
          <AccordionParts.ItemIndicator size={size} />
        </Show>

        {groupProps.heading}

        <Show when={groupProps.indicatorPosition === 'end'}>
          <AccordionParts.ItemIndicator size={size} />
        </Show>
      </AccordionParts.ItemTrigger>

      <AccordionParts.ItemContent size={size}>
        {groupProps.children}
      </AccordionParts.ItemContent>
    </AccordionParts.Item>
  )
}
