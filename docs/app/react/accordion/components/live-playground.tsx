'use client'

import CodeBuilder from '@/app/components/code-builder/code-builder'
import { builder } from '@/app/components/code-builder/helpers'
import { useCodeBuilder } from '@/app/context/code-builder'
import {
  Accordion,
  AccordionItemGroup,
  Show,
  type AccordionItemGroupProps,
} from '@cerberus-design/react'

const api = {
  size: builder.Enum('size', ['sm', 'lg']),
  indicatorPosition: builder.Enum('indicatorPosition', ['end', 'start']),
}

export function LivePlayground() {
  return (
    <CodeBuilder api={api}>
      <AccordionPreview />
    </CodeBuilder>
  )
}

export function AccordionPreview() {
  const { selectedProps } = useCodeBuilder()
  return (
    <Show
      when={selectedProps.size === 'lg'}
      fallback={
        <Accordion>
          <AccordionItemGroup
            heading="This is a heading"
            indicatorPosition={
              selectedProps.indicatorPosition as AccordionItemGroupProps['indicatorPosition']
            }
            size="sm"
            value="one:fallback"
          >
            This is the content
          </AccordionItemGroup>
          <AccordionItemGroup
            heading="This is another heading"
            indicatorPosition={
              selectedProps.indicatorPosition as AccordionItemGroupProps['indicatorPosition']
            }
            size="sm"
            value="twp:fallback"
          >
            This is the content for the second item
          </AccordionItemGroup>
        </Accordion>
      }
    >
      <Accordion>
        <AccordionItemGroup
          heading="This is a heading"
          indicatorPosition={
            selectedProps.indicatorPosition as AccordionItemGroupProps['indicatorPosition']
          }
          size="lg"
          value="one"
        >
          This is the content
        </AccordionItemGroup>
        <AccordionItemGroup
          heading="This is another heading"
          indicatorPosition={
            selectedProps.indicatorPosition as AccordionItemGroupProps['indicatorPosition']
          }
          size="lg"
          value="twp:fallback"
        >
          This is the content for the second item
        </AccordionItemGroup>
      </Accordion>
    </Show>
  )
}
