import { HStack } from '@/styled-system/jsx'
import { Field, For, NumberInput, NumberInputRootProps } from '@cerberus-design/react'
import recipesSpec from 'styled-system/specs/recipes.json'

const sizes = (recipesSpec.data.find((r) => r.name === 'numberInput')?.variants.size ??
  []) as NumberInputRootProps['size'][]

export function SizesDemo() {
  return (
    <HStack w="3/4">
      <For each={sizes}>
        {(size) => (
          <Field label={`Size ${size}`}>
            <NumberInput size={size} />
          </Field>
        )}
      </For>
    </HStack>
  )
}
