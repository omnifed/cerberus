import { HStack } from '@/styled-system/jsx'
import { Field, For, PinInput, PinInputRootProps } from '@cerberus-design/react'
import recipesSpec from 'styled-system/specs/recipes.json'

const sizes = (recipesSpec.data.find((r) => r.name === 'pinInput')?.variants.size ??
  []) as PinInputRootProps['size'][]

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
