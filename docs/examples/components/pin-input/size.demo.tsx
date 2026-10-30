'use client'

import { sortSizeVariants } from '@/lib/design-system'
import { HStack } from '@/styled-system/jsx'
import { Field, For, PinInput, PinInputRootProps } from '@cerberus-design/react'
import data from 'styled-system/specs/design-system.json'

const variants = data.slotRecipes.pinInput.variants.size
  .values as PinInputRootProps['size'][]
const sortedSizes = sortSizeVariants(variants)

export function SizeDemo() {
  return (
    <HStack gap="md" w="3/4">
      <For each={sortedSizes}>
        {(size) => (
          <Field label={`Size ${size}`} key={String(size)}>
            <PinInput size={size} />
          </Field>
        )}
      </For>
    </HStack>
  )
}
