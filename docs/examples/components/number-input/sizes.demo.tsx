import { sortSizeVariants } from '@/lib/design-system'
import { HStack } from '@/styled-system/jsx'
import { Field, For, NumberInput, NumberInputRootProps } from '@cerberus-design/react'
import data from 'styled-system/specs/design-system.json'

const variants = data.slotRecipes.numberInput.variants.size
  .values as NumberInputRootProps['size'][]
const sortedSizes = sortSizeVariants(variants)

export function SizesDemo() {
  return (
    <HStack w="3/4">
      <For each={sortedSizes}>
        {(size) => (
          <Field key={String(size)} label={`Size ${size}`}>
            <NumberInput size={size} />
          </Field>
        )}
      </For>
    </HStack>
  )
}
