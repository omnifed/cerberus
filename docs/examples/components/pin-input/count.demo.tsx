'use client'

import { HStack } from '@/styled-system/jsx'
import { Field, PinInput } from '@cerberus-design/react'

export function CountDemo() {
  return (
    <HStack>
      <Field label="5 Digits">
        <PinInput placeholder={undefined} count={5} />
      </Field>
    </HStack>
  )
}
