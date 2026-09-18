import { Button, ButtonProps, For } from '@cerberus-design/react'
import { HStack } from 'styled-system/jsx'
import recipesSpec from 'styled-system/specs/recipes.json'

const variants = (recipesSpec.data.find((r) => r.name === 'button')?.variants.shape ??
  []) as ButtonProps['shape'][]

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
