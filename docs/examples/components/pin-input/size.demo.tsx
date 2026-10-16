'use client'

import { HStack } from '@/styled-system/jsx'
import { Field, For, PinInput, PinInputRootProps } from '@cerberus-design/react'
import data from 'styled-system/specs/design-system.json'

const sizes = data.slotRecipes.pinInput.variants.size
  .values as PinInputRootProps['size'][]

export function SizeDemo() {
  return (
    <HStack justify="space-between" w="1/2">
      <For each={sizes}>
        {(size) => (
          <Field label={`Size ${size}`}>
            <PinInput size={size} />
          </Field>
        )}
      </For>
    </HStack>
  )
}
