'use client'

import { HStack } from '@/styled-system/jsx'
import { Field, PinInput } from '@cerberus-design/react'

export function BasicDemo() {
  return (
    <HStack>
      <Field label="Enter PIN">
        <PinInput />
      </Field>
    </HStack>
  )
}
