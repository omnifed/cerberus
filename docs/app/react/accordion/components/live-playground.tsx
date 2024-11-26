'use client'

import CodeBuilder from '@/app/components/code-builder/code-builder'
import { builder } from '@/app/components/code-builder/helpers'
import { useCodeBuilder } from '@/app/context/code-builder'
import {
  Accordion,
  AccordionItemGroup,
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

export function LivePlaygroundWithCode() {
  return (
    <CodeBuilder
      api={api}
      code={`import {
Accordion,
AccordionItemGroup,
type AccordionItemGroupProps
} from '@cerberus/react'

export function MyAccordion(props: AccordionItemGroupProps) {
  return (
    <Accordion>
      <AccordionItemGroup
        {...props}
        indicatorPosition={{indicatorPosition}}
        size={{size}}
      />
    </Accordion>
  )
}`}
    >
      <AccordionPreview />
    </CodeBuilder>
  )
}

export function AccordionPreview() {
  const { selectedProps } = useCodeBuilder()

  return (
    <Accordion>
      <AccordionItemGroup
        heading="This is a heading"
        indicatorPosition={
          selectedProps.indicatorPosition as AccordionItemGroupProps['indicatorPosition']
        }
        size={selectedProps.size as AccordionItemGroupProps['size']}
        value="one"
      >
        This is the content
      </AccordionItemGroup>
    </Accordion>
  )
}
