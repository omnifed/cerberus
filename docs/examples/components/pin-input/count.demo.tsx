import { HStack } from '@/styled-system/jsx'
import { Field, PinInput } from '@cerberus-design/react'

export function CountDemo() {
  return (
    <HStack w="1/2">
      <Field label="5 Digits">
        <PinInput placeholder={undefined} count={5} />
      </Field>
    </HStack>
  )
}
