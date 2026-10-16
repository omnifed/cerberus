import { HStack } from '@/styled-system/jsx'
import { Field, For, NumberInput, NumberInputRootProps } from '@cerberus-design/react'
import data from 'styled-system/specs/design-system.json'

const sizes = data.slotRecipes.numberInput.variants.size
  .values as NumberInputRootProps['size'][]

export function SizesDemo() {
  return (
    <HStack w="3/4">
      <For each={sizes}>
        {(size) => (
          <Field key={String(size)} label={`Size ${size}`}>
            <NumberInput size={size} />
          </Field>
        )}
      </For>
    </HStack>
  )
}
