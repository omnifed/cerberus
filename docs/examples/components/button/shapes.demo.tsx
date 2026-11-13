import { Button, type ButtonRootProps, For } from '@cerberus-design/react'
import { HStack } from 'styled-system/jsx'
import data from 'styled-system/specs/design-system.json'

const variants = data.recipes.button.variants.shape
  .values as ButtonRootProps['shape'][]

export function ShapesDemo() {
  return (
    <HStack gap="md">
      <For each={variants}>
        {(shape) => (
          <Button key={shape} shape={shape}>
            {shape}
          </Button>
        )}
      </For>
    </HStack>
  )
}
