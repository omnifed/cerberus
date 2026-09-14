import { HStack } from '@/styled-system/jsx'
import { Field, PinInput } from '@cerberus-design/react'

export function BasicDemo() {
  return (
    <HStack w="1/2">
      <Field label="Enter PIN">
        <PinInput />
      </Field>
    </HStack>
  )
}
