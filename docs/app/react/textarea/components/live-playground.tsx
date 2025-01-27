'use client'

import { useRef } from 'react'
import CodeBuilder from '@/app/components/code-builder/code-builder'
import { builder } from '@/app/components/code-builder/helpers'
import { useCodeBuilder } from '@/app/context/code-builder'
import { Field, Textarea, Text } from '@cerberus-design/react'
import { VStack } from '@cerberus-design/styled-system/jsx'

const api = {
  size: builder.Enum('size', ['sm', 'md', 'lg']),
}

export function LivePlayground() {
  return (
    <CodeBuilder api={api}>
      <TextareaPreview />
    </CodeBuilder>
  )
}

export function LivePlaygroundWithCode() {
  return (
    <CodeBuilder
      api={api}
      code={`import {
  Field,
  type FieldProps,
} from '@cerberus/react'

/**
 * A custom abstraction of the Cerberus TextField component.
 * @param props The same props as the Cerberus TextField component
*/
export function MyCustomField(props: FieldProps) {
  return <Field {...props } />
}`}
    >
      <TextareaPreview />
    </CodeBuilder>
  )
}

export function TextareaPreview() {
  const { selectedProps } = useCodeBuilder()
  const returnValue = useRef({
    sm: (
      <Textarea
        size="sm"
        id="live-preview:default"
        name="live-preview:default"
        placeholder="This is a small input"
      />
    ),
    md: (
      <Textarea
        size="md"
        id="live-preview:default"
        name="live-preview:default"
        placeholder="This is a medium input"
      />
    ),
    lg: (
      <Textarea
        size="lg"
        id="live-preview:default"
        name="live-preview:default"
        placeholder="This is a large input"
      />
    ),
  })

  return (
    <VStack gap="6" w="full">
      <Field>{returnValue.current[selectedProps.size]}</Field>
      <Text as="small" textStyle="body-xs">
        The Field component manages state and displays the label or helper/error
        messages.
      </Text>
    </VStack>
  )
}
