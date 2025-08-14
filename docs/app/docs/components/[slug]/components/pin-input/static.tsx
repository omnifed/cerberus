'use client'

import { PinInput, Field } from '@cerberus-design/react'
import { HStack } from '@/styled-system/jsx'

export function StaticPreview() {
  return (
    <HStack w="1/2">
      <Field label="Enter PIN">
        <PinInput />
      </Field>
    </HStack>
  )
}

export function SizesPreview() {
  return (
    <HStack justify="space-between" w="1/2">
      <Field label="Medium">
        <PinInput size="md" />
      </Field>
      <Field label="Large">
        <PinInput size="lg" />
      </Field>
    </HStack>
  )
}

export function BlurCompletePreview() {
  return (
    <HStack w="1/2">
      <PinInput
        blurOnComplete
        onValueComplete={() => alert('Input complete!')}
      />
    </HStack>
  )
}

export function CustomPreview() {
  return (
    <HStack w="1/2">
      <Field invalid>
        <PinInput />
      </Field>
    </HStack>
  )
}
